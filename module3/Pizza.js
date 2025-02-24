async function startPreparing() {
    console.log("Started preparing pizza...")
    return new Promise((res, _) => setTimeout(() => res(createBase()), 100))
}

async function createBase() {
    console.log("Made the base")
    return new Promise((res, _) => setTimeout(() => res(addSauceAndCheese()), 100))

}

async function addSauceAndCheese() {
    console.log("Added the sauce and cheese")
    return new Promise((res, _) => setTimeout(() => res(pizzaToppings()), 100))

}

async function pizzaToppings() {
    console.log("Added the pizza toppings")
    return new Promise((res, _) => setTimeout(() => res(cookPizza()), 100))

}

async function cookPizza() {
    console.log("Cooked the pizza")
    return new Promise((res, _) => setTimeout(() => res(ready()), 100))
}

function ready() {
    console.log("Pizza is ready")
    return "a Pizza!"
}

let result = await startPreparing()
console.log(`You received: ${result}`)