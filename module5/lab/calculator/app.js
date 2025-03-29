const express = require("express");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/", express.static("public"));
app.use("/calc", calculatorRoutes);

module.exports = app;
