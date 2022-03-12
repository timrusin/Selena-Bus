const express = require('express');
const mongoose = require('mongoose');
const Score = mongoose.model('Score');

const router = express.Router();

router.post("/newcolorscore", async (req, res) => {
  const { game, dt, tries } = req.body;
  
  const score = new Score({ game, dt, tries });
  await score.save();
  
  res.send("you made a color post request");
});

router.post("/newnumberscore", async (req, res) => {
  const { game, dt, tries } = req.body;
  
  const score = new Score({ game, dt, tries });
  await score.save();
  
  res.send("you made a number post request");
});

router.post("/newletterscore", async (req, res) => {
  const { game, dt, tries } = req.body;
  
  const score = new Score({ game, dt, tries });
  await score.save();
  
  res.send("you made a letter post request");
});

module.exports = router;