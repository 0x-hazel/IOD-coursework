// Unit test - stored in square.test.js
// First we import the square function
const { square } = require("./square");
// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
describe("Square utils", () => {
    test("square 5 to get 25", () => {
        expect(square(5)).toBe(25);
    });
    test("Handles null", () => {
        expect(square(null)).toBe(0);
    });
    test("String input", () => {
        expect(square("5")).toBe(25);
    });
});
// ++ Try creating a second function in square.js called
// squareRoot, then test that too!
