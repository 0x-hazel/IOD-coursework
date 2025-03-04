const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let task = setTimeout(delayMsg, 10000, "#5: Delayed by 10s")
setTimeout(() => {
    clearTimeout(task)
    console.log("Cleared unresponsive tasks")
}, 1000)