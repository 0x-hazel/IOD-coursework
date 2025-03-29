const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
    let numA = Number(req.query?.a);
    let numB = Number(req.query?.b);
    res.send({ result: numA + numB });
});

router.get("/sub", (req, res) => {
    let numA = Number(req.query?.a);
    let numB = Number(req.query?.b);
    res.send({ result: numA - numB });
});

router.get("/mul", (req, res) => {
    let numA = Number(req.query?.a);
    let numB = Number(req.query?.b);
    res.send({ result: numA * numB });
});

router.get("/div", (req, res) => {
    let numA = Number(req.query?.a);
    let numB = Number(req.query?.b);
    res.send({ result: numA / numB });
});

module.exports = router;
