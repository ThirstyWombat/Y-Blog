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
  const postDataWithUserIds = postData.map((post) => {
    return {
      ...post,
      userId: users[Math.floor(Math.random() * users.length)]._id,
    };
  });
  const posts = await Post.create(postDataWithUserIds);

  for (let user of users) {
    const userPostsIds = posts
      .filter((post) => post.userId === user._id)
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
  // bulk create each model
  // const posts = await Post.insertMany(postData);
  // const user = await User.insertMany(userData);

  // for (newPost of posts) {
  //   // randomly add post class to a user
  //   const tempUser = users[Math.floor(Math.random() * users.length)];
  //   tempUser.posts.push(newPost._id);
  //   await tempUser.save();

  //   // randomly add a user to each post
  //   const tempUserAuthor = users[Math.floor(Math.random() * users.length)];
  //   posts.user = tempUserAuthor._id;
  //   await newPost.save();

  //   // reference posts on user model, too
  //   tempUserAuthor.posts.push(newPost._id);
  //   await tempUserAuthor.save();
  // }

  console.log("Blog has been seeded!");
  process.exit(0);
});
