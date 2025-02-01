function Person(name, age, canDrive = (age > 18)) {
    this.name = name
    this.age = age
    this.canDrive = canDrive
    this.human = true
}

class PersonClass {
    constructor(name, age, canDrive = (age > 18)) {
        this.name = name
        this.age = age
        this.canDrive = canDrive
        this.human = true
    }
}

let me = new Person('Hazel', 23, false)
let alice = new Person('Alice', 25)
let bob = new PersonClass('Bob', 17)

console.log(me)
console.log(alice)
console.log(bob)