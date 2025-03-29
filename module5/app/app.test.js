// app.test.js
// import supertest and the express app
const request = require("supertest");
const app = require("./app");
describe("Calculator Routes", () => {
    // generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);
    test("GET /calculator/add => sum of numbers", async () => {
        const response = await request(app)
            .get(`/calculator/add?a=${number1}&b=${number2}`)
            .expect("Content-Type", /json/)
            .expect(200);
        expect(response.body).toEqual({
            result: (number1 + number2),
        });
    });
    test("GET /calculator/mul => sum of numbers", async () => {
        const response = await request(app)
            .get("/calculator/mul?a=43&b=-8")
            .expect("Content-Type", /json/)
            .expect(200);
        expect(response.body).toEqual({
            result: -344,
        });
    });
});
