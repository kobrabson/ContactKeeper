const express = require("express");
const router = express.Router();

// @router          GET api/auth
// @desc            get logged in user
// @ access         Private
router.get("/", (req, res) => {
  res.send("get logged in user");
});

// @router          POST api/auth
// @desc            Auth user & get token
// @ access         Public
router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
