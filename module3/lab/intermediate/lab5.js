// Question 5
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen)
// doesn't work because toFixed() returns a string so addition becomes a string concatenation operation

function currencyOperation(float1, float2, operation, numDecimals = 2) {
    if (typeof(float1) !== 'number' || typeof(float2) !== 'number') return
    switch (operation) {
        case '+':
            return (Number(float1) + Number(float2)).toFixed(numDecimals)
        case '-':
            return (Number(float1) - Number(float2)).toFixed(numDecimals)
        case '/':
            return (Number(float1) / Number(float2)).toFixed(numDecimals)
        case '*':
            return (Number(float1) * Number(float2)).toFixed(numDecimals)
        default:
            console.error(`Unsupported operation: ${operation}`)
            return
    }
}
const currencyAddition = (float1, float2) => currencyOperation(float1, float2, '+')
console.log(0.3 == currencyAddition(0.20, 0.10))
console.log(0.3 == currencyOperation(0.20, 0.10, '+'))