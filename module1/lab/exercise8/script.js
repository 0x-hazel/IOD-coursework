const count = document.getElementById('count')
const faces = document.getElementById('faces')
const advantage = document.getElementById('advantage')
const diceDisplay = document.getElementById('dice')

diceDisplay.addEventListener('animationend', () => diceDisplay.className = 'dice', false)

const results = document.getElementById('results')
const rollCounter = document.getElementById('rolls')
const removedRoll = document.getElementById('removed')
const explodedCounter = document.getElementById('exploded')

function roll(number, faces) {
    let rolls = []
    for (let i = 0; i < number; i++) {
        rolls.push(Math.floor(Math.random() * faces) + 1)
    }
    return {
        rolls: rolls,
        total: rolls.reduce((sum, curr) => sum + curr, 0)
    }
}
function findMin(list) {
    let min = 999999
    let index = -1
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            index = i
            min = list[i]
        }
    }
    return index
}
function findMax(list) {
    let max = -999999
    let index = -1
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            index = i
            max = list[i]
        }
    }
    return index
}
function countOf(list, value) {
    let count = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == value) {
            count++
        }
    }
    return count
}
function rollDice() {
    diceDisplay.className = 'dice rolling'
    diceDisplay.setAttribute('src', `./d${faces.value}.svg`)
    diceDisplay.removeAttribute('hidden')
    let adv = (advantage.value === 'adv' || advantage.value === 'dis')? 1 : 0
    let r = roll(Number(count.value) + adv, Number(faces.value))
    let removed = []
    let explodedCount = 0
    switch (advantage.value) {
        case 'adv':
            removed.push(r.rolls.splice(findMin(r.rolls), 1))
            r.total = r.rolls.reduce((sum, curr) => sum + curr, 0)
            break;
        case 'dis':
            console.log(r.rolls)
            removed.push(r.rolls.splice(findMax(r.rolls), 1))
            r.total = r.rolls.reduce((sum, curr) => sum + curr, 0)
            break;
        case 'exp':
            let amount = countOf(r.rolls, faces.value)
            let exploded = roll(amount, Number(faces.value)).rolls
            while (exploded.length > 0) {
                explodedCount += amount
                amount = countOf(exploded, faces.value)
                r.rolls = r.rolls.concat(exploded)
                exploded = roll(amount, Number(faces.value)).rolls
            }
            r.total = r.rolls.reduce((sum, curr) => sum + curr, 0)
            break;
        case 'nil':
        default:
            break;
    }
    if (count.value == 1) {
        results.className = ''
        if (r.total == 1) {
            results.className = 'fail'
        } else if (r.total > Number(faces.value)) {
            results.className = 'success'
        }
    }
    results.innerText = `${r.total}`
    rollCounter.innerText = `Rolls: ${r.rolls.join(', ')}`
    removedRoll.innerText = (removed.length)? `Removed: ${removed.join(', ')}` : ''
    explodedCounter.innerText = (advantage.value === 'exp')? `Exploded ${explodedCount} time${(explodedCount == 1)? '' : 's'}` : ''
}