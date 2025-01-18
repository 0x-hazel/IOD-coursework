let getGreeting = function(name) {
    return 'Hello ' + name + '!';
}
getGreeting = (name = "") => {
    return 'Hello ' + name + '!';
}
console.log(getGreeting())
