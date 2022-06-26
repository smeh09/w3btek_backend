const express = require("express");
const Review = require("../models/review");

const app = express.Router();

app.get("/", async (req, res) => {
  const reviews = await Review.find({});
  res.send(reviews);
});

app.post("/", async (req, res) => {
  const data = req.body;
  if (!data.name || !data.message) {
    res.status(400).send({
      success: false,
      message: "Invalid data",
    });
    return;
  }
  const review = new Review({
    name: data.name,
    message: data.message,
  });
  await review.save();
  res.send({
    success: true,
    review,
  });
});

module.exports = app;
