// Question 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
console.log((today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds() + ' minutes have passed so far today')

const birthDate = new Date("2001-10-31")

let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
if (months < 0) {
    years--
    months = 12 + months
}
let days = today.getDay() - birthDate.getDay()
console.log(`I am ${years} years, ${months} months, and ${days} days old. (*HIGHLY* approximate)`)
// this is an approximation because as everyone knows the only thing worse than programming
// is programming with dates and times

function daysInBetween(date1, date2) {
    return Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)))
}
console.log(`(or exactly ${daysInBetween(today, birthDate)} days)`)

function addMinutes(mins) {
    return new Date(today.getTime() + mins * 60_000)
}

console.log(addMinutes(60).toLocaleString())
console.log(addMinutes(150).toLocaleString())