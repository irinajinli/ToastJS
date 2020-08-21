"use strict";
const log = console.log;

const express = require("express");

const app = express();

// static js directory
app.use(express.static(__dirname + "/pub"));

app.get("/", function (req, res) {
  res.sendFile("pub/landing.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
