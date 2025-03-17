const express = require("express");

class App {
    constructor(port, route, endpoint) {
        this.app = express();
        this.app.get(route, endpoint);
        this.app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}`);
        });
    }
}

new App(3000, "/", express.static("public"));

new App(3001, "/products", (req, res) => {
    res.send([{ id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 }]);
});

new App(3002, "/test", (req, res) => {
    res.send([{ name: "Thing 1" }, { name: "Thing 2" }]);
});
