const User = require("../models/user");
module.exports.addLikedPosts = async (req, res) => {
  try {
    const { username, title } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      user.liked = user.liked.concat({ title });
      await user.save();
      res.status(201).json({
        data: user._doc,
        status: "Liked array updated",
      });
    } else {
      res.status(404).json({ status: "user not found" });
    }
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};
module.exports.getLikedPosts = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      res.status(200).json({ data: user.liked });
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (error) {
    res.send(404).json({ error: error.message });
  }
};
module.exports.deleteLikedPosts = async (req, res) => {
  try {
    const { username, title } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const newLikedArray = user.liked.filter((post) => {
        return post.title != title;
      });
      user.liked = newLikedArray;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "No such user found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
