const exampleLayoutConfig = {
    title: page,
    navOptions: [
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
switch (page) {
    case 'Home':
        exampleLayoutConfig.navOptions.splice(0, 0,         {
            title: "MENU",
            href: "menu.html"
        })
        break;
    case 'Menu':
        exampleLayoutConfig.navOptions.splice(0, 0, {
            title: "HOME",
            href: "configBuilderExample.html",
        })
        break;
}

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