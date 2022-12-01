const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
  req.state.push(req.body);
  res.send("It worked!");
});

app.get("/", (req, res) => {
  res.send(req.state);
});

module.exports = app;
