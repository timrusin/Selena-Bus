const express = require('express');
const mongoose = require('mongoose');
const Score = mongoose.model('Score');

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const scores = await Score.find({});
    res.json(scores);
  } catch (err) {
    next(err);
  }
});

router.post("/newscore", async (req, res) => {
  const { game, dt, tries } = req.body;
try{
  const score = new Score({ game, dt, tries });
  await score.save();
  
  res.send("you made a score post request");
} catch (err) {
  res.status(422).send(err.message);
}
});


module.exports = router;