const n = document.getElementById("num");
console.log(n);
const out = document.getElementById("result");
console.log(out);
const multiply = document.getElementById("multiply");
console.log(multiply);
let arr = [];

function addData() {
    let num = parseFloat(n.value);
    arr.unshift(num);
    out.innerHTML = "";
    n.value = "";
    for (let i = 0; i < arr.length; i++) {
        out.innerHTML += arr[i] + "<br>";
    }
    console.log(arr);
    calculateMultiply();
}

function deleteData() {
    arr.shift();
    out.innerHTML = "";
    n.value = "";
    for (let i = 0; i < arr.length; i++) {
        out.innerHTML += arr[i] + "<br>";
    }
    calculateMultiply();
}

function calculateMultiply() {
    multiply.innerHTML = "";

    let even = 1;
    let odd = 1;
    let hasEven = false;
    let hasOdd = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even *= arr[i];
            hasEven = true;
        } else {
            odd *= arr[i];
            hasOdd = true;
        }
    }

    if (hasEven) {
        multiply.innerHTML += "ผลคูณเลขคู่: " + even + "<br>";
    }

    if (hasOdd) {
        multiply.innerHTML += "ผลคูณเลขคี่: " + odd;
    }
}

function reset() {
    arr = [];
    out.innerHTML = "";
    multiply.innerHTML = "";
}
