"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__databaseType__ = exports.__databasePassword__ = exports.__databaseUser__ = exports.__databaseName__ = exports.__corsOrigin__ = exports.__sessionSecret__ = exports.__cookieName__ = exports.__redisPort__ = exports.__redisHost__ = exports.__prod__ = void 0;
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config();
exports.__prod__ = process.env.NODE_ENV === 'production';
exports.__redisHost__ = process.env.REDIS_HOST || '127.0.0.1';
exports.__redisPort__ = Number(process.env.REDIS_PORT) || 6379;
exports.__cookieName__ = process.env.COOKIE_NAME || "cookie_name";
exports.__sessionSecret__ = process.env.SESSION_SECRET || "secret";
exports.__corsOrigin__ = process.env.CORS_ORIGIN || "http://localhost:3000";
exports.__databaseName__ = process.env.DATABASE_NAME || "dbName";
exports.__databaseUser__ = process.env.DATABASE_USER || "dbName";
exports.__databasePassword__ = process.env.DATABASE_PASSWORD || "dbPassword";
exports.__databaseType__ = process.env.DATABASE_TYPE || "dbType";
//# sourceMappingURL=constant.js.map