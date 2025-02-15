// Question 6
function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)]
}

function uniqueRedundant(duplicatesArray) {
    return [...new Map(duplicatesArray.map((x) => [x, 0])).keys()]
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(uniqueRedundant(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(uniqueRedundant(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]