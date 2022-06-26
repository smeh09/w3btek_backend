const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const Review = new mongoose.model("Review", schema);

module.exports = Review;
