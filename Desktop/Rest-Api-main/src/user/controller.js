const jwt = require("jsonwebtoken");
const User = require("./model");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
    res.status(200).send({ user: newUser.username, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.status(200).send({ user: req.user.username, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
