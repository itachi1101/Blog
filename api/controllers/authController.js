const User = require("../models/user");

module.exports.signup = async (req, res) => {
  try {
    const pic = req.file.buffer;
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password,pic });
    const token = await user.generateAuthToken();
    res.status(201).json({
      user: user._doc,
      token,
      dataCreate: true,
    });
  } catch (error) {
    res.status(400).json({ error: error.message, SignUp: "failed" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.Login(email, password);
    const token = await user.generateAuthToken();
    res.status(200).json({
      user: user._doc,
      token,
      login: "Success",
    });
  } catch (error) {
    res.status(400).json({ error: error.message, login: "Failed" });
  }
};

