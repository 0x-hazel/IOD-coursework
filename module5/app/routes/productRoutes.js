const express = require("express");

const router = express.Router();

router.get("/products", (req, res) => {
    res.send([{ id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 }]);
});
router.get("/test", (req, res) => {
    res.send([{ name: "Thing 1" }, { name: "Thing 2" }]);
});

module.exports = router;
