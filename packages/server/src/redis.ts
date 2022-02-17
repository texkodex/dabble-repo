import Redis from "ioredis";
import { __redisHost__, __redisPort__ } from "./constant";

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
