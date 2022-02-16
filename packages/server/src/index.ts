import "reflect-metadata";
import dotenv from "dotenv-safe";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";
import { GraphQLFormattedError } from "graphql/error/formatError";
import { GraphQLError } from "graphql";
import session from "express-session";
import {
  __cookieName__,
  __prod__,
  __redisHost__,
  __redisPort__,
  __sessionSecret__,
} from "./constant";
import connectRedis from "connect-redis";
import Redis from "ioredis";

export default function redisClientSetup(): Redis.Redis {
  const url = `redis://${__redisHost__}:${__redisPort__}`;
  console.log("url: ", url);
  const redis = new Redis({
    port: Number(__redisPort__),
    host: __redisHost__,
    family: 4,
    db: 0,
  });
  redis.on("error", console.log);
  return redis;
}

const main = async () => {
  console.log("starting ...");
  dotenv.config();
  await createConnection();
  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (error && error.extensions) {
        error.extensions.code = "GRAPHQL_VALIDATION_FAILED";
      }
      return error;
		},
		context: ({ req }: any) => ({ req })
  });

  const app = Express();
  const RedisStore = connectRedis(session);
  const redis = redisClientSetup();

  app.use(
    session({
      name: __cookieName__,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
        disableTTL: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: __sessionSecret__,
      resave: false,
    })
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
};

main().catch((err) => {
  console.error(err);
});
