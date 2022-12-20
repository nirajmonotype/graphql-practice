"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
exports.myDataSource = new typeorm_1.DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT, 10) : 5000,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ["./dist/database/entities/*.js"],
    logging: false,
    synchronize: false,
});
//# sourceMappingURL=connection.js.map