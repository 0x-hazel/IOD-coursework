// Question 1
const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const ucFirstLetters = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split(' ').map((x) => capitalise(x)).join(' ')
}

console.log(ucFirstLetters('los angeles'))
console.log(ucFirstLetters('the  quick brown   fox'))

// Question 2
const truncate = (str, len = Number.MAX_VALUE) => {
    if (!str || typeof(str) !== 'string' || typeof(len) !== 'number' || len <= 0) return;
    return (str.length <= len)? str : `${str.slice(0, len)}...`
}

console.log(truncate('This text will be truncated if it is too long', 25))

// Question 3
const animals = ['Lion', 'Giraffe']
console.log(animals)

animals.push("Zebra", "Elephant")
console.log(animals)

animals.unshift("Gazelle", "Cheetah")
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    if (animals.length % 2 == 0) {
        animals.splice(Math.floor(animals.length / 2), 0, newValue)
    } else {
        animals[Math.floor(animals.length / 2)] = newValue
    }
}

function findMatchingAnimals(beginsWith) {
    let results = []
    for (let animal of animals) {
        if (animal.toUpperCase().startsWith(beginsWith.toUpperCase())) {
            results.push(animal)
        }
    }
    return results
}

// Question 4
const camelCase = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split('-').reduce((prev, curr, index) => prev + (index === 0? curr : capitalise(curr)), '')
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
console.log(camelCase('grid-template-columns')) // gridTemplateColumns

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

// Question 7
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    return books.find((val) => val.id === bookId)
}

function getOldBooks() {
    return books.filter((val) => val.year < 1950)
}

function addGenre() {
    books.map((val) => {val.genre = 'classic'})
}

function getTitles(authorInitial) {
    const initial = authorInitial.toUpperCase()
    return books.filter((val) => val.author.toUpperCase().startsWith(initial))
    // use map() somehow?
}

function latestBook() {
    let latest = -9999
    books.forEach((val) => {
        if (latest < val.year) {
            latest = val.year
        } 
    })
    return books.find((val) => val.year == latest)
}

// Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['Dana', '0423423454'],
    ['Emily', '0434534565'],
    ['Fred', '0498798767'],
])
phoneBookABC.set('Caroline', '0498798798')

function printPhoneBook(contacts) {
    for (let name of contacts.keys()) {
        console.log(`- ${name}: ${contacts.get(name)}`)
    }
}

const phoneBook = new Map([...phoneBookABC.entries(), ...phoneBookDEF.entries()])

printPhoneBook(phoneBook)

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

// Question 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
console.log((today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds() + ' minutes have passed so far today')

const birthDate = new Date("2001-10-31")

let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
if (months < 0) {
    years--
    months = 12 + months
}
let days = today.getDay() - birthDate.getDay()
console.log(`I am ${years} years, ${months} months, and ${days} days old. (*HIGHLY* approximate)`)
// this is an approximation because as everyone knows the only thing worse than programming
// is programming with dates and times

function daysInBetween(date1, date2) {
    return Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)))
}
console.log(`(or exactly ${daysInBetween(today, birthDate)} days)`)