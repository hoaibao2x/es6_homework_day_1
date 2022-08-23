let getELE = id => document.getElementById(id);


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
    let inpToan = Number(getELE("inpToan").value);
    let inpLy = Number(getELE("inpLy").value);
    let inpHoa = Number(getELE("inpHoa").value);

    let avgScore = calc(inpToan, inpLy, inpHoa);
    getELE("tbKhoi1").innerHTML = avgScore.toFixed(1);
}
getELE("btnKhoi1").onclick = calcGrade1;


let calcGrade2 = () => {
    let inpVan = Number(getELE("inpVan").value);
    let inpSu = Number(getELE("inpSu").value);
    let inpDia = Number(getELE("inpDia").value);
    let inpEnglish = Number(getELE("inpEnglish").value);


    let avgScore = calc(inpVan, inpSu, inpDia, inpEnglish);
    getELE("tbKhoi2").innerHTML = avgScore.toFixed(1);
}
getELE("btnKhoi2").onclick = calcGrade2;