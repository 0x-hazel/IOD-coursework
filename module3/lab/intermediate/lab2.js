// Question 2
const truncate = (str, len = Number.MAX_VALUE) => {
    if (!str || typeof(str) !== 'string' || typeof(len) !== 'number' || len <= 0) return;
    return (str.length <= len)? str : `${str.slice(0, len)}...`
}

console.log(truncate('This text will be truncated if it is too long', 25))