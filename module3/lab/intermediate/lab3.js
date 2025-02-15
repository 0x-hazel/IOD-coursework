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