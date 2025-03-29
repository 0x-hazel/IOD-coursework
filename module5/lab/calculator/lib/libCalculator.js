class Calculator {
    constructor() {
        this.id = Math.round(Math.random() * 10000);
    }
    #log = (value) => {
        console.log(`[Calculator#${this.id}]: ${value}`);
    };
    calculate(a, b, callback) {
        const result = callback(a, b);
        this.#log(result);
        return result;
    }
}

module.exports = new Calculator();
