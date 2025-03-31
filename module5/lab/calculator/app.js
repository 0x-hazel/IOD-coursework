const express = require("express");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");
const swaggerUi = require("swagger-ui-express");
let swaggerDocument = require("./swagger.json");

app.use("/", express.static("public"));
app.use("/calc", calculatorRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
