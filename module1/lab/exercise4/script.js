function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

// these are the same thing (ostensibly)
console.log((2 * 3) + (5 - (6 / 2)))
console.log(add(mul(2, 3), sub(5, div(6, 2))))

// misc tests
console.log(add(7, null))
console.log(add(7, undefined))
console.log(add(null, 6))
console.log(mul(7, null))
// interestingly, null is zero, but undefined is not
console.log(div(1, 0))

function hello(name) {
    console.log(`Hello ${name}`)
}

hello('world!')