function Product(section, name, price) {
    this.section = section
    this.name = name
    this.price = price
    this.toString = () => `<td>${this.name}</td><td>$${this.price.toFixed(2)}</td>`
}

const products = [
    new Product('single', 'Vanilla', 5.95),
    new Product('single', 'Chocolate', 6.95),
    new Product('single', 'Matcha', 7.95),
    new Product('single', 'Pistachio', 8.95),
    new Product('double', 'Vanilla', 10.95),
    new Product('double', 'Chocolate', 12.95),
    new Product('double', 'Matcha', 14.95),
    new Product('double', 'Pistachio', 17.50),
    new Product('topping', 'Sprinkles', .20),
    new Product('topping', 'Flake', .50),
    new Product('topping', 'Chocolate Sauce', 1.0),
    new Product('topping', 'Gummy Bears', 2.0)
]

function createTitle(text) {
    let result = document.createElement('h2')
    result.innerText = text
    result.classList = 'section-title'
    return result
}

function createMenu(section) {
    const list = document.createElement('ul')
    const items = []
    for (let product of products) {
        if (product.section === section) {
            items.push(product)
        }
    }
    addMenu(list, items)
    return list
}

function addMenu(list, items) {
    for (let item of items) {
        let li = document.createElement('li')
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`
        list.appendChild(li)
    }
}

const sort = (a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

const SORTS = {
    ALPHA: "Sorting Alphabetically",
    NUMBER: "Sorting Numerically"
}

function sortList(id, category) {
    const btn = document.querySelector(`#${id} > button`)
    const list = products.filter((v) => v.section === category)
    if (btn.innerText === SORTS.NUMBER) {
        list.sort((a, b) => sort(a.name, b.name))
        btn.innerText = SORTS.ALPHA
    } else {
        list.sort((a, b) => sort(a.price, b.price))
        btn.innerText = SORTS.NUMBER
    }
    const ul = document.querySelector(`#${id} > ul`)
    ul.innerHTML = ''
    addMenu(ul, list)
}

function sortButton(id, category) {
    const btn = document.createElement('button')
    btn.innerText = "123"
    btn.addEventListener('click', () => sortList(id, category))
    return btn
}

function menu(element, title, category) {
    const contentOne = document.getElementById(element);
    contentOne.appendChild(createTitle(title))
    contentOne.appendChild(sortButton(element, category))
    contentOne.appendChild(createMenu(category))
    sortList(element, category)
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