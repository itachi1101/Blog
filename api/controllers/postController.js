const Post = require("../models/post");
const multer = require("multer");

module.exports.create = async (req, res) => {
  try {
    const pic = req.file.buffer;
    const { title, description, author, isPrivate, category } = req.body;
    const post = await Post.create({
      title,
      description,
      author,
      isPrivate,
      category,
      pic,
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

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ isPrivate: false });
    if (!posts) res.status(404).json({ posts: "no posts found" });
    else {
      res.status(200).json(posts);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports.getPostById = async (req, res) => {
  const _id = req.params.id;
  try {
    const allPosts = await Post.findById(_id);
    if (!allPosts) res.status(404).json({ posts: "no posts found" });
    else {
      res.status(200).json({ data: allPosts });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
module.exports.deletePostById = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(_id);
    if (!post) return res.status(400).send();
    res.send(post);
  } catch (err) {
    res.status(500).json({ err: error });
  }
};
module.exports.updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getPostImage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.set('Content-Type','image/jpg')
    res.send(post.pic)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
