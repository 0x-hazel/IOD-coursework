let displayText = document.getElementById('display-text')
let memory = 0
let display = "0"
let operator = null

let equals = false
let newNumber = false

function calculate() {
    switch (operator) {
        case '+':
            memory = memory + Number(display)
            break;
        case '-':
            memory = memory - Number(display)
            break;
        case '*':
            memory = memory * Number(display)
            break;
        case '/':
            memory = memory / Number(display)
            break;
    }
    operator = null
    display = memory.toString()
}

function calcPress(op) {
    equals = false
    switch (op) {
        case 0:
            display = display + '0'
            displayText.innerText = display
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            if (newNumber) {
                display = "0"
                memory = 0
                operator = null
            }
            newNumber = false
            display = "" + Number(display + op)
            displayText.innerText = display
            break;
        case '.':
            if (!display.includes('.')) {
                display = display + '.'
            }
            displayText.innerText = display
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (operator !== null) {
                calculate()
            }
            if (!newNumber) {
                memory = Number(display)
            }
            newNumber = false
            displayText.innerText = op
            operator = op
            display = "0"
    }
}

function calcEquals() {
    if (!equals) {
        if (operator !== null) {
            calculate()
            displayText.innerText = display
            newNumber = true
        }
    } else {
        memory = 0
        operator = null
        display = "0"
        displayText.innerText = display
    }
    equals = true
}