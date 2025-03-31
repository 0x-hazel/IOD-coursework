const express = require("express");
const calculatorController = require("../controllers/calculatorController");

const router = express.Router();

router.get("/add", calculatorController.addNumbers);

router.get("/sub", (req, res) => {
    res.send({ result: Number(req.query.a) - Number(req.query.b) });
});

router.get("/mul", calculatorController.multiplyNumbers);

router.get("/div", (req, res) => {
    res.send({ result: Number(req.query.a) / Number(req.query.b) });
});

module.exports = router;
