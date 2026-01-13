const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "ADMIN" }
});

module.exports = mongoose.model("User", userSchema);
