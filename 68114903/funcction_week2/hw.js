const n1 = document.getElementById("num1");
const result1 = document.getElementById("result1");
const n2 = document.getElementById("num2");
const result2 = document.getElementById("result2");

function calculateSum(n) {
    if (n == 0) {
        return 0;
    }else return n+calculateSum(n-1);
}

function showResult() {
    result1.innerText = "Sum = " + calculateSum(parseFloat(n1.value));
    n1.value = "";
}

function fibonacci(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

function showFibonacciResult(){
    result2.innerText = "Fibonacci = " + fibonacci(parseFloat(n2.value));
    n2.value = "";
}