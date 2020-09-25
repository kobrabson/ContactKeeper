const express = require("express");
const router = express.Router();

// @router          GET api/contacts
// @desc            get all users contacts
// @ access         Private
router.get("/", (req, res) => {
  res.send("get all contacts");
});
// @router          POST api/contacts
// @desc            add new contacts
// @ access         Private
router.post("/", (req, res) => {
  res.send("add contact");
});
// @router          PUT api/contacts/:id
// @desc            update contacts
// @ access         Private
router.put("/:id", (req, res) => {
  res.send("update contacts");
});
// @router          delete api/contacts/:id
// @desc            delete contacts
// @ access         Private
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
