const resolvers = {
  Query: {
    feed: (parent, args) => {
      return posts.filter((post) => post.published);
    },
    post: (parent, args) => {
      return posts.find((post) => post.id === Number(args.id));
    },
  },
  Mutation: {
    createDraft: (parent, args) => {
      posts.push({
        id: posts.length + 1,
        title: args.title,
        content: args.content,
        published: false,
      });
      return posts[posts.length - 1];
    },
    publish: (parent, args) => {
      const postToPublish = posts.find((post) => post.id === Number(args.id));
      postToPublish.published = true;
      return postToPublish;
    },
  },
  Post: {
    content: (parent) => parent.content,
    id: (parent) => parent.id,
    published: (parent) => parent.published,
    title: (parent) => parent.title,
  },
};

module.exports = resolvers;
