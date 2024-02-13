const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vincentbbaraga:FinalProject3@y-blog-cluster.fhgp5lx.mongodb.net/"
);

module.exports = mongoose.connection;
