const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
