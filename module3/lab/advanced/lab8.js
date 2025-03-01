function orderItems(itemName, requester) {
    return `Order placed by ${requester} for: ${itemName}`;
}

function validateStringArg(fn) {
    return function(...args) {
        if (!args.reduce((prev, curr) => prev && (typeof(curr) === 'string'), true)) {
            throw new Error("Argument provided is not a string")
        }
        return fn(...args)
    }
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch", "Bob")); // should run the function
    console.log(validatedOrderItem(123, "Eve")); // should throw an error
    console.log(validatedOrderItem("Test", 33))
} catch (e) {
    console.error(e)
}
