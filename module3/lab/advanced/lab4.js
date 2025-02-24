function printFibonacci(limit = -1) {
    let state = [0, 1]
    let count = 0
    console.log(0)
    console.log(1)
    let id = setInterval(() => {
        state = [state[1], state[0] + state[1]]
        console.log(state[1])
        if (limit > 0 && count++ > limit - 4) {
            clearInterval(id)
        }
    }, 1000)
}

function printFibonacciTimeouts(limit = -1) {
    let count = 0
    function _fib(a, b) {
        console.log(a + b)
        if (!(limit > 0 && count++ > limit - 4)) {
            setTimeout(_fib, 1000, b, a + b)
        }
    }
    console.log(0)
    console.log(1)
    setTimeout(_fib, 1000, 0, 1)
}

printFibonacci(7)