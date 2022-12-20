import { DataSource } from "typeorm";

import dotenv from 'dotenv';
dotenv.config();

const { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME} = process.env;

export const myDataSource = new DataSource({
    type: <any>DB_TYPE,
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT, 10): 5000,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ["./dist/database/entities/*.js"],
    logging: false,
    synchronize: false,
});

