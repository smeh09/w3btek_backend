const Product = require("../models/product");
const express = require("express");

const app = express.Router();

app.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

module.exports = app;
