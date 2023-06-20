let numberOneTriangle = "";
while (true) {
    let n = Number(prompt("Nhap so nguyen duong tu 1-10: "));
    let checkOk = (isNaN(n) === false && n > 0 && n <= 10 && Number.isInteger(n));
    if (checkOk === true) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
            }
            document.write("<br />");
            numberOneTriangle += "*"
            console.log(numberOneTriangle);         
        }
        break;
    } else {
        console.log("Nhap so nguyen duong tu 1-10: ");
    }
}
/*
let n = Number(prompt("Nhap so nguyen duong tu 1-10: "));

let checkOk = (isNaN(n) === false && n > 0 && n <= 10 && Number.isInteger(n));
if (checkOk === false) {
    console.log("Nhap so nguyen duong tu 1-10: ");
} else {
    let numberOneTriangle = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
        }    
        numberOneTriangle += "*"
        console.log(numberOneTriangle);
    }
}*/
