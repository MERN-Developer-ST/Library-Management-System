const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ msg: "Invalid Credentials" });

  const token = jwt.sign({ id: user._id }, "SECRET");
  res.json({ token });
};
