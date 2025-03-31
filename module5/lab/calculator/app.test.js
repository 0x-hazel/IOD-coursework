const request = require("supertest");
const app = require("./app");

describe("Calculator Routes", () => {
    describe("Addition", () => {
        test("Basic operation", async () => {
            const response = await request(app).get(`/calc/add?a=7&b=4`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: 11,
            });
        });
        test("Negative operation", async () => {
            const response = await request(app).get(`/calc/add?a=2&b=-16`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: -14,
            });
        });
        test("Not a number", async () => {
            const response = await request(app).get(`/calc/add?a=four&b=12`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: null,
            });
        });
    });
    describe("Subtraction", () => {
        test("Basic operation", async () => {
            const response = await request(app).get(`/calc/sub?a=7&b=4`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: 3,
            });
        });
        test("Negative operation", async () => {
            const response = await request(app).get(`/calc/sub?a=2&b=-16`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: 18,
            });
        });
        test("Not a number", async () => {
            const response = await request(app).get(`/calc/sub?a=four&b=12`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: null,
            });
        });
    });
    describe("Multiplication", () => {
        test("Basic operation", async () => {
            const response = await request(app).get(`/calc/mul?a=7&b=4`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: 28,
            });
        });
        test("Negative operation", async () => {
            const response = await request(app).get(`/calc/mul?a=2&b=-16`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: -32,
            });
        });
        test("Not a number", async () => {
            const response = await request(app).get(`/calc/mul?a=four&b=12`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: null,
            });
        });
    });
    describe("Division", () => {
        test("Basic operation", async () => {
            const response = await request(app).get(`/calc/div?a=7&b=4`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: 1.75,
            });
        });
        test("Negative operation", async () => {
            const response = await request(app).get(`/calc/div?a=2&b=-16`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: -0.125,
            });
        });
        test("Not a number", async () => {
            const response = await request(app).get(`/calc/div?a=four&b=12`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: null,
            });
        });
        test("By zero", async () => {
            const response = await request(app).get(`/calc/div?a=7&b=0`)
                .expect("Content-Type", /json/)
                .expect(200);
            expect(response.body).toEqual({
                result: null,
            });
        });
    });
});
