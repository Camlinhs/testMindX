let sum = 0;

function isprime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    let flag = 1;

    if (n < 2) {
        return flag = 0;
    }

    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}

while (true) {
    let a = Number(prompt("Nhap so duong tu a: "));
    let b = Number(prompt("Nhap so duong tu b (b>a): "));
    let checkOk = (isNaN(a) === false && a > 0 && isNaN(b) === false && b > 0 && b > a);
    if (checkOk === true) {
        for (let x = a; x < b; x++) {
            if (isprime(x) === 1) {
                console.log(x);
                sum = sum + x;
            }
        }
        console.log(sum); 
        document.getElementById("result").innerHTML = sum;       
        break;
    } else {
        console.log("nhap lai");
    }
}


