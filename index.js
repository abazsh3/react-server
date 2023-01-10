const express = require("express");

const path = require("path");
const app = express(); // create express app

// add middlewares
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(8083);
