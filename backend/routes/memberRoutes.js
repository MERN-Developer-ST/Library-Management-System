// memberRoutes.js
const router = require("express").Router();
const { addMember } = require("../controllers/memberController");
router.post("/", addMember);
module.exports = router;
