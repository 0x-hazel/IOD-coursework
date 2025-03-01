// Question 1
const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const ucFirstLetters = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split(' ').map((x) => capitalise(x)).join(' ')
}

console.log(ucFirstLetters('los angeles'))
console.log(ucFirstLetters('the  quick brown   fox'))