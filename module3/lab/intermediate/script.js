const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const ucFirstLetters = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split(' ').map((x) => capitalise(x)).join(' ')
}

console.log(ucFirstLetters('los angeles'))
console.log(ucFirstLetters('the  quick brown   fox'))

const truncate = (str, len = Number.MAX_VALUE) => {
    if (!str || typeof(str) !== 'string' || typeof(len) !== 'number' || len <= 0) return;
    return (str.length <= len)? str : `${str.slice(0, len)}...`
}

console.log(truncate('This text will be truncated if it is too long', 25))

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

const camelCase = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split('-').reduce((prev, curr, index) => prev + (index === 0? curr : capitalise(curr)), '')
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display