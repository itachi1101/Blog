const Post = require("../models/post");
const multer = require("multer");

module.exports.create = async (req, res) => {
  try {
    const pic = req.file.buffer;
    const { title, description, author } = req.body;
    const post = await Post.create({
      title,
      description,
      pic,
      author,
    });
    res.status(201).json({
      post: post._doc,
      PostCreated: "successful",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      PostCreation: "failed",
    });
  }
};

module.exports.searchUserPosts = async (req, res) => {
  try {
    const { author } = req.body;
    const posts = await Post.find({ author: author });
    if (posts) {
      res.status(200).json({
        data: posts,
        status: "posts found",
      });
    } else {
      res.status(200).json({
        status: "posts not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: "no post found",
    });
  }
};
