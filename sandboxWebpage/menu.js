function Product(section, name, price) {
    this.section = section
    this.name = name
    this.price = price
    this.toString = () => `<td>${this.name}</td><td>$${this.price.toFixed(2)}</td>`
}

const products = [
    new Product('single', 'Vanilla', 5.95),
    new Product('single', 'Chocolate', 5.95),
    new Product('single', 'Matcha', 5.95),
    new Product('single', 'Pistachio', 8.95),
    new Product('double', 'Vanilla', 10.95),
    new Product('double', 'Chocolate', 10.95),
    new Product('double', 'Matcha', 10.95),
    new Product('double', 'Pistachio', 15.50),
    new Product('topping', 'Sprinkles', .20),
    new Product('topping', 'Flake', .50),
]

function createTitle(text) {
    let result = document.createElement('h2')
    result.innerText = text
    result.classList = 'section-title'
    return result
}

function createMenu(section) {
    const list = document.createElement('ul')
    for (let product of products) {
        if (product.section === section) {
            let li = document.createElement('li')
            li.innerText = `${product.name} - $${product.price.toFixed(2)}`
            list.appendChild(li)
        }
    }
    return list
}

function menu(element, title, category) {
    const contentOne = document.getElementById(element);
    contentOne.appendChild(createTitle(title))
    contentOne.appendChild(createMenu(category))
}

menu('content-one', "Single Scoop", 'single')
menu('content-two', "Double Scoop", 'double')
menu('content-three', "Toppings", 'topping')

const shoppingBasket = []

shoppingBasket.push({category: 'single', item: 'Vanilla'})

shoppingBasket.push({category: 'double', item: 'Chocolate'})

shoppingBasket.pop()
shoppingBasket.push({category: 'single', item: 'Chocolate'})

shoppingBasket.splice(0, 2, shoppingBasket[1])

shoppingBasket.push(
    {category: 'double', item: 'Pistachio'},
    {category: 'single', item: 'Matcha'},
)
shoppingBasket.pop()

function calculatePrice(list) {
    let total = 0.0
    for (let item of list) {
        let found = products.find((value) => value.name === item.item && value.section === item.category)
        if (!found) {
            console.warn("Undefined product:")
            console.warn(item)
        }
        total += found? found.price : 0.0
    }
    return total
}

console.log(shoppingBasket)
console.log(`Price: $${calculatePrice(shoppingBasket).toFixed(2)}`)