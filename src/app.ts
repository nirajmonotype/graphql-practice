import "reflect-metadata";
import { myDataSource } from "./database/connection";
import startApolloServer from "./graphql/startapollo";

// establish database connection
myDataSource
    .initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");
        await startApolloServer();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// start graphql server
