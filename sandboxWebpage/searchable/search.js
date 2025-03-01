const products = [
    {
        "name": "Vanilla",
        "price": 6.95,
        "category": "one_scoop"
    },
    {
        "name": "Vanilla",
        "price": 8.95,
        "category": "two_scoops"
    },
    {
        "name": "Chocolate",
        "price": 5.95,
        "category": "one_scoop"
    },
    {
        "name": "Chocolate",
        "price": 7.95,
        "category": "two_scoops"
    },
    {
        "name": "Mint Choc Chip",
        "price": 6.5,
        "category": "one_scoop"
    },
    {
        "name": "Mint Choc Chip",
        "price": 8.5,
        "category": "two_scoops"
    },
    {
        "name": "Honey Comb",
        "price": 5.3,
        "category": "one_scoop"
    },
    {
        "name": "Honey Comb",
        "price": 7.3,
        "category": "two_scoops"
    },
    {
        "name": "Coffee",
        "price": 4.99,
        "category": "one_scoop"
    },
    {
        "name": "Coffee",
        "price": 6.99,
        "category": "two_scoops"
    },
    {
        "name": "Pistachio",
        "price": 3.95,
        "category": "one_scoop"
    },
    {
        "name": "Pistachio",
        "price": 5.95,
        "category": "two_scoops"
    },
    {
        "name": "test",
        "price": 6.25,
        "category": "one_scoop"
    },
    {
        "name": "test",
        "price": 8.25,
        "category": "two_scoops"
    }
]

const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const ucFirstLetters = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split(' ').map((x) => capitalise(x)).join(' ')
}

function search(text) {
    return products.filter((val) => val.name.toLowerCase().includes(text.toLowerCase()))
}

const searchBar = document.getElementById('search-box')
const contents = document.getElementById('contents')

function menuEntry(entry, inBasket = false, amount = 0) {
    let result = document.createElement('li')
    result.innerHTML = `<span class=product>${ucFirstLetters(entry.category.replace('_', ' '))} ${entry.name}</span> - $${entry.price.toFixed(2)}`
    if (!inBasket)
        result.innerHTML += `<button onclick='addProductToBasket({name: "${entry.name}", category: "${entry.category}"})'>+</button>`
    if (amount > 0)
        result.innerHTML += `<span class=amount>x${amount}</span>`
    return result
}

function updateSearch() {
    contents.innerHTML = ''
    for (let entry of search(searchBar.value)) {
        contents.appendChild(menuEntry(entry))
    }
}
updateSearch()

const shoppingBasket = []
function addProductToBasket(product) {
    if (!(product && product.hasOwnProperty('name') && product.hasOwnProperty('category'))) {
        console.error('Not a product definition:')
        console.error(product)
    }
    function compare(x) {
        return (v) => v.name === x.name && v.category === x.category
    }
    const existingProduct = products.find(compare(product))
    if (!existingProduct) {
        console.error("Not a product:")
        console.error(product)
        return
    }
    let existing = shoppingBasket.find(compare(existingProduct))
    if (existing) {
        existing.quantity += 1
    } else {
        shoppingBasket.push({...existingProduct, quantity: 1})
    }
    updateBasketDisplay()
}

const totalPrice = document.getElementById('total')
const basketCount = document.getElementById('count')
const basketDisplay = document.getElementById('basket')
function updateBasketDisplay() {
    basketDisplay.innerHTML = ''
    for (let entry of shoppingBasket) {
        basketDisplay.appendChild(menuEntry(entry, true, entry.quantity))
    }
    const total = shoppingBasket.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    totalPrice.innerText = `Total price: $${total.toFixed(2)}`
    let amount = shoppingBasket.reduce((prev, curr) => prev + curr.quantity, 0)
    basketCount.innerText = `${amount} Item${(amount === 1)? '' : 's'}`
}