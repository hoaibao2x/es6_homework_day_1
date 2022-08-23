const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let getELE = id => document.getElementById(id);

loadBtn = (colorList) => {
    let content = "";
    colorList.map((colorItem) => {
        content += `
            <button class= "color-button ${colorItem}" onclick= "changeColor('${colorItem}')"></button>
        `;
    })

    getELE("colorContainer").innerHTML = content;

}
loadBtn(colorList);

changeColor = (myColor) => {
    let checkClass = getELE("house").classList;
    if (checkClass == "house") {
        getELE("house").classList.add(myColor);
    } else {
        getELE("house").classList = "";
        getELE("house").classList.add("house", myColor);
    }
}