let arr = [1, 2, 3, 4, 5]
console.log(arr)
arr[0] = "one"
arr[3] = "four"
arr.unshift("zero")
console.log(`Removed '${arr.pop()}' from the array`)
console.log(arr)