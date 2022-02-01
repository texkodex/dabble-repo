import dotenv from "dotenv-safe";

dotenv.config();

export const __prod__ = process.env.NODE_ENV === 'production'
export const __redisHost__ = process.env.REDIS_HOST || '127.0.0.1'
export const __redisPort__ = Number(process.env.REDIS_PORT) || 6379
export const __cookieName__ = process.env.COOKIE_NAME || "cookie_name"
export const __sessionSecret__ = process.env.SESSION_SECRET || "secret"
export const __corsOrigin__ = process.env.CORS_ORIGIN || "http://localhost:3000"
export const __databaseName__ = process.env.DATABASE_NAME || "dbName"
export const __databaseUser__ = process.env.DATABASE_USER || "dbName"
export const __databasePassword__ =	process.env.DATABASE_PASSWORD || "dbPassword"
export const __databaseType__ = 	process.env.DATABASE_TYPE || "dbType"