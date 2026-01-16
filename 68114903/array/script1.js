const n = document.getElementById("num");
console.log(n);
const out = document.getElementById("result");
console.log(out);
let arr = [];

function addData() {
    let num = parseFloat(n.value);
    arr.unshift(num);
    out.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        out.innerHTML = out.innerHTML+arr[i] + "<br>";
    }
    console.log(arr);
    // console.log("add");
}

