"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const http_1 = __importDefault(require("http"));
const schema_1 = require("./schema");
const port = process.env.PORT;
const app = (0, express_1.default)();
const schema = schema_1.application.createSchemaForApollo();
async function startApolloServer() {
    const httpServer = http_1.default.createServer(app);
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start(); //start the GraphQL server.
    server.applyMiddleware({ app });
    await new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}
exports.default = startApolloServer;
//# sourceMappingURL=startapollo.js.map