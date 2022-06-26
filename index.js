const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./routes/products");
const forum = require("./routes/forum");
const reviews = require("./routes/reviews");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("LOG: CONNECTED TO DATABSE");
  })
  .catch((err) => {
    console.log(`ERROR: COULD NOT CONNECT TO DATABASE BECAUSE ${err}`);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/products", products);
app.use("/api/forum", forum);
app.use("/api/reviews", reviews);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LOG: SERVER STARTED ON PORT ${PORT}`);
});
