const artist = {
    name: "Van Gogh",
    portfolio: [
        {
            title: "portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        },
        {
            title: "sky",
            url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        },
    ],
};

function addCard(title = "My Card Title", description = "lorem ipsum ble bla") {
    // clone the template
    const template = document.getElementById("card-template").content.cloneNode(
        true,
    );
    // populate the template
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = description;
    template.querySelector(".card").id = `card-${addCard.index++}`;
    // include the populated template into the page
    document.querySelector("#card-list").appendChild(template);
}
addCard.index = 0;

function artistCard(name = "Artist", works = []) {
    // clone the template
    const template = document.getElementById("card-template").content.cloneNode(
        true,
    );
    // populate the template
    template.querySelector(".card-title").innerText = name;
    let contents = template.querySelector(".card-text");
    contents.classList.add("carousel");
    contents.classList.add("slide");
    contents.setAttribute("data-bs-ride", "carousel");
    let art = "";
    for (let i in works) {
        art += `<div class="carousel-item${
            (i == 0) ? " active" : ""
        }"><img src="${works[i].url}" class="d-block w-100" alt="${
            works[i].title
        }" style="height:500px"></div>`;
    }
    console.log(art);
    art = `<div class="carousel-inner">${art}</div>`;
    console.log(art);
    contents.innerHTML = art;
    template.querySelector(".card").id = `card-${artistCard.index++}`;
    // include the populated template into the page
    document.querySelector("#card-list").appendChild(template);
}
artistCard.index = 0;

// it's a little funky but it does technically work
artistCard(artist.name, artist.portfolio);
