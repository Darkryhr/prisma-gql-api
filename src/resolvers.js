const { prisma } = require('./db');

const resolvers = {
  Query: {
    feed: (parent, args) => {
      return prisma.post.findMany({
        where: { published: true },
      });
    },
    post: (parent, args) => {
      return prisma.post.findOne({
        where: { id: Number(args.id) },
      });
    },
  },
  Mutation: {
    createDraft: (parent, args) => {
      return prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
        },
      });
    },
    publish: (parent, args) => {
      return prisma.post.update({
        where: {
          id: Number(args.id),
        },
        data: {
          published: true,
        },
      });
    },
  },
};

module.exports = resolvers;
