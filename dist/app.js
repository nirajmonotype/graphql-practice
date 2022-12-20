"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const connection_1 = require("./database/connection");
const startapollo_1 = __importDefault(require("./graphql/startapollo"));
// establish database connection
connection_1.myDataSource
    .initialize()
    .then(async () => {
    console.log("Data Source has been initialized!");
    await (0, startapollo_1.default)();
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
// start graphql server
//# sourceMappingURL=app.js.map