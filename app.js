const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/one", (req, res) => res.send("Hello, one!"));
app.get("/asdf", (req, res) => res.send("Hello, asdfasdf!"));

console.log("test cache");

module.exports = app;
