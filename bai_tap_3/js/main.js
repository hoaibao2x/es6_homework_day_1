let hoverMe = () => {
    let oldArr = document.querySelector(".heading").innerText;
    let newArr = [...oldArr];
    
    let content = "";
    newArr.map((char) => { 
        content += `
            <span>${char}</span>
        `
     });
    document.querySelector(".heading").innerHTML = content
}
hoverMe();