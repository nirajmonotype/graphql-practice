import express, { Express } from 'express';
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { application } from './schema';

const port = process.env.PORT;
const app: Express = express();
const schema = application.createSchemaForApollo();

async function startApolloServer() {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;
    await server.start(); //start the GraphQL server.
    server.applyMiddleware({ app });
    await new Promise<void>((resolve) =>
      httpServer.listen({ port }, resolve) 
    );
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}

export default startApolloServer;