const basketballGame = {
    score: 0,
    fouls: 0,
    getScore() {
        return ` score is ${this.score}, ${this.fouls} fouls`
    },
    freeThrow() {
        this.score++
        return this
    },
    basket() {
        this.score += 2
        return this
    },
    threePointer() {
        this.score += 3
        return this
    },
    foul() {
        this.fouls++
        return this
    },
    halfTime() {
        console.log("Halftime" + this.getScore())
        return this
    },
    fullTime() {
        console.log("Fulltime" + this.getScore())
        return this
    }
}
basketballGame
    .basket()
    .freeThrow()
    .foul()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime()
    .basket()
    .threePointer()
    .foul()
    .freeThrow()
    .basket()
    .fullTime()