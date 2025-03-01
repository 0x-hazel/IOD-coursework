let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(
            `This car is a ${this.make} ${this.model} from ${this.year}`,
        );
    },
};

let car2 = {...car}
car2.year = 1974 // Doesn't change car because car2 is a new object

setTimeout(car.description.bind(car), 200);
