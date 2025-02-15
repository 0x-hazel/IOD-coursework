function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom
    return function() {
        console.log(currentCount)
        currentCount += incrementBy
        return currentCount;
    };
}
let counter1 = makeCounter(0, 2);
counter1(); // 0
counter1(); // 2

let counter2 = makeCounter(10, -1)
counter2() // 10
counter2() // 9

counter1() // 4