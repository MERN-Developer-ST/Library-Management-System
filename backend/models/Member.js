const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  membershipDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Member", memberSchema);
