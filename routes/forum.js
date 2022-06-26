const express = require("express");
const Thread = require("../models/forum_thread");
const ObjectId = require('mongodb').ObjectId;

const app = express.Router();

app.get("/", async (req, res) => {
  const threads = await Thread.find({});
  res.send(threads);
});

app.get("/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const thread = await Thread.findById(req.params.id);
    res.send({success: true, thread});
  } else {
    res.send({success: false})
  }
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
  const thread = new Thread({
    name: data.name,
    messages: [data.message],
  });
  await thread.save();
  res.send({
    success: true,
    thread,
  });
});

app.post("/message/:id", async (req, res) => {
  const data = req.body;
  if (!data.message) {
    res.status(400).send({
      success: false,
      message: "Please enter valid data",
    });
    return;
  }
  const thread = await Thread.findOne(req.params.thread);
  if (!thread) {
    res.status(400).send({
      success: false,
      message: "Invalid Thread",
    });
    return;
  }
  thread.messages.push(data.message);
  await thread.save();
  res.send({
    success: true,
    thread,
  });
});

module.exports = app;
