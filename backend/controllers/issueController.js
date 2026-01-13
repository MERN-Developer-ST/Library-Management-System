const Issue = require("../models/Issue");
const Book = require("../models/Book");

exports.issueBook = async (req, res) => {
  const { bookId, memberId } = req.body;
  const book = await Book.findById(bookId);

  if (book.available <= 0)
    return res.status(400).json({ msg: "Book not available" });

  const issue = await Issue.create({ bookId, memberId });
  book.available--;
  await book.save();

  res.json(issue);
};

exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  issue.status = "RETURNED";
  issue.returnDate = new Date();
  await issue.save();

  const book = await Book.findById(issue.bookId);
  book.available++;
  await book.save();

  res.json({ msg: "Book Returned" });
};
