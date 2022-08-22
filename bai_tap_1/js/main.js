const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

loadBtn = (colorList) => {
    let content = "";
    colorList.map((colorItem) => {
        content += `
            <button class= "color-button ${colorItem}" onclick= "changeColor('${colorItem}')"></button>
        `;
    })

    document.getElementById("colorContainer").innerHTML = content;

}
loadBtn(colorList);

changeColor = (myColor) => {
    let checkClass = document.getElementById("house").classList;
    if (checkClass == "house") {
        document.getElementById("house").classList.add(myColor);
    } else {
        document.getElementById("house").classList = "";
        document.getElementById("house").classList.add("house", myColor);
    }
}