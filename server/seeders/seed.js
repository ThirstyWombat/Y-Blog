const db = require("../config/connection");
const models = require("../models");
const cleanDB = require("./cleanDB");

const { User, Post } = models;

const postData = require("./postData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Post", "post");

  const posts = await Post.create(postData);
  const user = await User.create(userData);

  // bulk create each model
  // const posts = await Post.insertMany(postData);
  // const user = await User.insertMany(userData);

  for (newPost of posts) {
    // randomly add post class to a user
    const tempUser = user[Math.floor(Math.random() * user.length)];
    tempUser.posts.push(newPost._id);
    await tempUser.save();

    // randomly add a user to each post
    const tempUserAuthor = user[Math.floor(Math.random() * users.length)];
    post.user = tempUserAuthor._id;
    await newPost.save();

    // reference posts on user model, too
    tempUserAuthor.classes.push(newPost._id);
    await tempUserAuthor.save();
  }

  console.log("Blog has been seeded!");
  process.exit(0);
});
