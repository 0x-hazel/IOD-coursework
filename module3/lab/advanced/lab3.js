function printMe(msg) {
    console.log(msg)
}

// ms is accurate to +/- ~26ms on my machine (node v18.20.5)
function debounce(func, ms = 1000) {
    let handle = null
    return function(...args) {
        if (handle) {
            clearTimeout(handle)
        }
        handle = setTimeout(func, ms, ...args)
    }
}

printMe = debounce(printMe, 125);

setTimeout(printMe, 100, "one");
setTimeout(printMe, 200, "two");
setTimeout(printMe, 300, "three");