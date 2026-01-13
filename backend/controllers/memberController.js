const Member = require("../models/Member");

exports.addMember = async (req, res) => {
  const member = await Member.create(req.body);
  res.json(member);
};
