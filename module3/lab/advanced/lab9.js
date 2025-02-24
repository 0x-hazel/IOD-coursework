function randomDelay() {
    return new Promise((resolve, reject) => {
        let timeOut = Math.round((Math.random() * 19_00) + 1_00)
        setTimeout(() => {
            if (timeOut % 2 == 0) {
                resolve(timeOut)
            } else {
                reject(timeOut)
            }
        }, timeOut)
    })
}

randomDelay()
    .then((x) => console.log(`There appears to have been a delay. (${x}ms)`))
    .catch((x) => console.log(`There was an unsuccessful delay. (${x}ms)`));
