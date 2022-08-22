let getELE = (id) => {
    document.getElementById(id);
}

let calc = (...inputVal) => {
    let arrScore = inputVal;
    let sum = 0;
    let count = 0;
    arrScore.map((value) => {
        sum += value;
        count++;
    })

    let calcAvg = sum / count;

    return calcAvg;
}

let calcGrade1 = () => {
    let inpToan = Number(document.getElementById("inpToan").value);
    let inpLy = Number(document.getElementById("inpLy").value);
    let inpHoa = Number(document.getElementById("inpHoa").value);

    let avgScore = calc(inpToan, inpLy, inpHoa);
    document.getElementById("tbKhoi1").innerHTML = avgScore;
}
document.getElementById("btnKhoi1").onclick = calcGrade1;


let calcGrade2 = () => {
    let inpVan = Number(document.getElementById("inpVan").value);
    let inpSu = Number(document.getElementById("inpSu").value);
    let inpDia = Number(document.getElementById("inpDia").value);
    let inpEnglish = Number(document.getElementById("inpEnglish").value);


    let avgScore = calc(inpVan, inpSu, inpDia, inpEnglish);
    document.getElementById("tbKhoi2").innerHTML = avgScore;
}
document.getElementById("btnKhoi2").onclick = calcGrade2;