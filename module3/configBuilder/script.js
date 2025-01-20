function Product(section, name, price) {
    this.section = section
    this.name = name
    this.price = price
    this.toString = () => `<td>${this.name}</td><td>$${this.price.toFixed(2)}</td>`
}

const products = [
    new Product('single', 'Vanilla', 5.95),
    new Product('single', 'Chocolate', 5.95),
    new Product('single', )
]

const exampleLayoutConfig = {
    title: "Ice Cream",
    navOptions: [
        {
            title: "HOME",
            href: "configBuilderExample.html",
        },
        {
            title: "MENU",
            href: "menu.html"
        },
        {
            title: "IN YOUR AREA",
            href: "#in-your-area",
        },
        {
            title: "ABOUT US",
            href: "#about-us",
        },
    ],
    contentList: [
        `
    <div>
        <h2>Single Serves</h2>
        <table>
        <tr>
            <td>vanilla</td>
            <td> 5.95</td>
        </tr>
        <tr>
            <td>choco</td>
            <td> 5.95</td>
        </tr>
        <tr>
            <td>strawb</td>
            <td> 5.95</td>
        </tr>
        </table>
    </div>
    `,
        "adasda adsasd aasdasd asdasdasd asdaasdas",
        "adasda adsasd aasdasd asdasdasd asdaasdas",
    ],
// MENU, IN YOUR AREA, ABOUT US
};

// CREATE HEADER FOR THE PAGE
document.getElementById("header-title").textContent =
    exampleLayoutConfig.title.toLocaleUpperCase();

// CREATE NEW NAV OPTIONS

exampleLayoutConfig.navOptions.forEach((thisThing) => {
    const newMenuItem = document.createElement("a");
    newMenuItem.textContent = thisThing.title;
    newMenuItem.href = thisThing.href;
    document.querySelector(".menu").appendChild(newMenuItem);
});