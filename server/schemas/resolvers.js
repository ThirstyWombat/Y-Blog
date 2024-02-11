const { User, Post } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate(["posts"])
          .exec();
      }
      throw new AuthenticationError("Not logged in");
    },
    user: async (parent, { userId }) => {
      console.log(userId);
      return User.findOne({ _id: userId });
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};

      return Post.find(params).populate(["author"]).exec();
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId })
        .populate(["author", "comments.commentAuthor"])
        .exec();
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { postBody }, context) => {
      const post = await Post.create({
        author: context.user._id,
        postBody,
      });
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { posts: post._id } },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log("CONTENTS OF POST AND ID >", post, post._id);
      return post;
    },
    addComment: async (parent, { postId, commentText }, context) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            comments: {
              commentText: commentText,
              commentAuthor: context.user._id,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postId, userId }) => {
      await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { posts: postId } },
        { new: true }
      );

      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
