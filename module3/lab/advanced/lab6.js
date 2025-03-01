Function.prototype.delay = function(ms) {
    return (...args) => {
        setTimeout(this, ms, ...args)
    }
}
// note: arrow vs function syntax is important for the definition of `this`

function multiply(a, b) {
    console.log(a * b);
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
