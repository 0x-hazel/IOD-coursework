const list = [];

// ----------------------------

list.push({name: 'Tate', age: 27}) // [{name: 'Tate', age: 27,}]
list.unshift({name: "Juan",age:21}) //[{name: "Juan",age:21}, {name: 'Tate', age: 27}]
list[5] = {message: "Hello!"} // [{name: "Juan",age:21}, {name: 'Tate', age: 27}, , , , {message: 'Hello!'}]

list.push({name: 'Saish', age: 27});

list.push({name: 'Henry', age: 22}); // [{name: "Juan",age:21}, {name: 'Tate', age: 27}, , , , {message: 'Hello!'}, {name: 'Henry', age: 22}]

list.push({name: "Kirby", age: 38}); // [{name: "Juan",age:21}, {name: 'Tate', age: 27}, , , , {message: 'Hello!'}, {name: 'Henry', age: 22}, {name: "Kirby", age: 38}]

list.push({name: 'Chamod', age: 26}); //Adding (pushing) to the end of the list. [{name: "Juan",age:21}, {name: 'Tate', age: 27}, , , , {message: 'Hello!'}, {name: 'Henry', age: 22}, {name: "Kirby", age: 38}, {name: 'Chamod', age: 26}]

console.log(list); // console

const newList = list;
newList.push({name:"christoph", age: 0})

console.log()
console.log('checking list', list, [...list,{name: 'tate', age: 27}], newList)

let filtered = newList.filter((v) => v.age <= 22)
console.log(filtered)

const test = [0, 1, 2, 1, 1, 0, 0, 1, 2]
let newTest = test.filter((x) => {
    if (x !== 2) {
        return x
    }
})
console.log(newTest)