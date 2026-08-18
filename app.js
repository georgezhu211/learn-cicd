const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/one", (req, res) => res.send("Hello, one!"));

console.log("test cache");

module.exports = app;
