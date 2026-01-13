// issueRoutes.js
const router = require("express").Router();
const { issueBook, returnBook } = require("../controllers/issueController");
router.post("/issue", issueBook);
router.put("/return/:id", returnBook);
module.exports = router;
