const mongoose = require("mongoose");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  messages: { type: [String], required: true },
  date: { type: String, default: today }
});

const Thread = new mongoose.model("Thread", schema);

module.exports = Thread;
