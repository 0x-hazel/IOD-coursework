// Question 9
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let sum = 0
    for (let name of Object.keys(salaries)) {
        sum += salaries[name]
    }
    return sum
}
console.log(sumSalaries(salaries))

function topEarner(salaries) {
    let top = -10000
    let topName = null
    for (let name of Object.keys(salaries)) {
        if (salaries[name] > top) {
            topName = name
            top = salaries[name]
        }
    }
    return topName
}
console.log(topEarner(salaries))