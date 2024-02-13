const db = require("../config/connection");
const models = require("../models");
const cleanDB = require("./cleanDB");

const { User, Post } = models;

const postData = require("./postData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Post", "posts");

  const users = await User.create(userData);
  const postDataWithAuthors = postData.map((post) => {
    return {
      ...post,
      author: users[Math.floor(Math.random() * users.length)]._id,
    };
  });
  const posts = await Post.create(postDataWithAuthors);

  for (let user of users) {
    const userPostsIds = posts
      .filter((post) => post.author === user._id)
      .map((post) => post._id);

    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { posts: userPostsIds } },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  console.log("Blog has been seeded!");
  process.exit(0);
});
