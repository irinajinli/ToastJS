"use strict";
const log = console.log;

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/pub"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
