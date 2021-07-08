const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const StarWarsAPI = require("./datasources/starWarsAPI");

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
