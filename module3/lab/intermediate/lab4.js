// Question 4
const camelCase = (str) => {
    if (!str || typeof(str) !== 'string') return;
    return str.split('-').reduce((prev, curr, index) => prev + (index === 0? curr : capitalise(curr)), '')
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
console.log(camelCase('grid-template-columns')) // gridTemplateColumns