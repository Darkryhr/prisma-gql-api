const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const port = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
}).listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`)
);
