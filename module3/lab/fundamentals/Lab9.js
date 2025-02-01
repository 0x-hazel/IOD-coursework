let teamSports = ['Hockey', 'Cricket', 'Volleyball']
let dog1 = 'Bingo'
let cat1 = {name: 'Fluffy', breed: 'Siberian'}

let moreSports = [...teamSports]
moreSports.push('Badminton')

let dog2 = dog1
dog2 = 'Fido'

let cat2 = {...cat1}
cat2.name = 'Horatio'

console.log(teamSports) // Changed - object reference stays the same when assigning variables
console.log(dog1) // Same - primitive object is not passed by reference
console.log(cat1) // Changed - Same as first time

// Updated
console.log(moreSports)
console.log(dog2)
console.log(cat2)