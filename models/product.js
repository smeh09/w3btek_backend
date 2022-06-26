const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  descr: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
});

const Product = mongoose.model("Product", schema);

module.exports = Product;
