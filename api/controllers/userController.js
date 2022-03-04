const User = require("../models/user");
module.exports.updateLikedPosts = async (req, res) => {
  try {
    const { username, title } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      user.liked.addToSet({title})
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
