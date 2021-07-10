import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { StarWarsAPI } from "./datasources/starWarsAPI";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new StarWarsAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🏠  Address: http://localhost:4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
