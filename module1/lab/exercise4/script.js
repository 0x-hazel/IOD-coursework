// adds two values together
function add(a, b) {
    return a + b
}

//subtracts a value from another
function sub(a, b) {
    return a - b
}

// multiplies two values together
function mul(a, b) {
    return a * b
}

// divides a value by another
function div(a, b) {
    return a / b
}

// these are the same thing (ostensibly)
console.log((2 * 3) + (5 - (6 / 2)))
console.log(add(mul(2, 3), sub(5, div(6, 2))))

// Unit tests
console.log(add(7, null))
console.log(add(7, undefined))
console.log(add(null, 6))
console.log(sub(7, 6))
console.log(sub(6, 7))
console.log(0, -1)
console.log(mul(7, null))
// interestingly, null is zero, but undefined is not
console.log(mul(7, -1))
console.log(mul(12, undefined))
console.log(div(1, 0))
console.log(div(7, 2))
console.log(div(-2, -1))

function hello(name) {
    console.log(`Hello ${name}`)
}

hello('world!')