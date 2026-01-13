// bookRoutes.js
const router = require("express").Router();
const { addBook, getBooks } = require("../controllers/bookController");
router.post("/", addBook);
router.get("/", getBooks);
module.exports = router;
