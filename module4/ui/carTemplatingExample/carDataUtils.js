// use carData and getCars function from previous slide
// clone, then populate, then append a new template
function addCard(car) {
    const template = document.getElementById("car-template").content.cloneNode(
        true,
    );
    template.querySelector(".card-title").innerText = car.title;
    template.querySelector(".card-text").innerText = car.description;
    document.querySelector("#car-list").appendChild(template);
}
// get data asynchronously, then use it to populate a template
getCars().then((cars) => cars.forEach((car) => addCard(car)));
