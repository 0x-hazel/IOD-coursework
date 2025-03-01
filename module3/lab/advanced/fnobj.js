function sayHi() {
    sayHi.counter = sayHi.counter || 0
    console.log(sayHi.counter++)
}

sayHi()
sayHi()