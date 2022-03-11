const express = require('express');
const mongoose = require('mongoose');
const Score = mongoose.model('Score');

const router = express.Router();

router.post("/newscore", async (req, res) => {
  const { dt, tries } = req.body;
  
  const score = new Score({ dt, tries });
  await score.save();
  
  res.send("you made a post request");
});

module.exports = router;