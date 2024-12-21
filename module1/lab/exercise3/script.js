const colours = ['goldenrod', 'greenyellow', 'darkorchid', 'indianred', 'lightseagreen', 'peru', 'slategrey', 'tomato', 'palegreen', 'indigo', 'crimson']
function randomColour() {
    const index = Math.floor(Math.random() * colours.length)
    return colours[index]
}
function handler(element) {
    var x = 0
    return () => {
        let newCol = randomColour()
        while (newCol == element.style.background) {
            newCol = randomColour()
        }
        element.style.background = newCol
        element.querySelector('h1').innerText = `Clicks: ${++x}`
    }
}
const buttonA = handler(document.getElementById('column1'))
const buttonB = handler(document.getElementById('column2'))