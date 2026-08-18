const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Goodbye, world!"));

console.log("test cache");

module.exports = app;
