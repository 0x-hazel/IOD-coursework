const express = require("express");
const calcController = require("../controllers/calculatorController");

const router = express.Router();

router.get("/add", (req, res) => {
    res.send(calcController.perform(req, (a, b) => a + b));
});

router.get("/sub", (req, res) => {
    res.send(calcController.perform(req, (a, b) => a - b));
});

router.get("/mul", (req, res) => {
    res.send(calcController.perform(req, (a, b) => a * b));
});

router.get("/div", (req, res) => {
    res.send(calcController.perform(req, (a, b) => a / b));
});

module.exports = router;
