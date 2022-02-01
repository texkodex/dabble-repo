"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
const main = async () => {
    console.log("starting ...");
    dotenv_safe_1.default.config();
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map