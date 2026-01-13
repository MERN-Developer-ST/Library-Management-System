const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  issueDate: { type: Date, default: Date.now },
  returnDate: Date,
  status: { type: String, default: "ISSUED" }
});

module.exports = mongoose.model("Issue", issueSchema);
