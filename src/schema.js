const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    content: String
    id: ID!
    published: Boolean!
    title: String!
  }

  type Query {
    feed: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createDraft(content: String, title: String!): Post!
    publish(id: ID!): Post
  }
`;

const posts = [
  {
    id: 1,
    title: 'Subscribe to GraphQL Weekly for community news ',
    content: 'https://graphqlweekly.com/',
    published: true,
  },
  {
    id: 2,
    title: 'Follow DigitalOcean on Twitter',
    content: 'https://twitter.com/digitalocean',
    published: true,
  },
  {
    id: 3,
    title: 'What is GraphQL?',
    content: 'GraphQL is a query language for APIs',
    published: false,
  },
];

module.exports = typeDefs;
