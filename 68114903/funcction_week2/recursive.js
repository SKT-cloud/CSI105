// recursive คือ fubction ที่เรียกตัวเองวนไปเรื่อยๆ จนกว่าจะถึง base case ที่กำหนดไว้
let mul = 1;
for (let i = 5; i > 0; i--) {
  mul *= i;
  console.log("mul = ", mul);
}

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("This function = ", factorial(5));

function functionX(n) {
  if (n == 0) {
    return (n = 1);
  } else {
    return functionX(n - 1) * 2;
  }
}
console.log(functionX(5));