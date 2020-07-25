"use strict";
const log = console.log;

const express = require("express");

const app = express();

// static js directory
app.use("/pub", express.static(path.join(__dirname, "/pub")));

// route for root
app.get("/", (req, res) => {
  res.send("Welcome to ToastJS.");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
