const express = require("express");
const app = express();
const simpsons = require("./simpsons.json");
const bodyParser = require("body-parser");

const state = [...simpsons];

app.use(bodyParser.json());

app.use(function (req, res, next) {
  req.state = state;
  next();
});

app.use("/", require("./routes/simpsons"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
