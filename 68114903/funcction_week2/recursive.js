// recursive คือ fubction ที่เรียกตัวเองวนไปเรื่อยๆ
let mul = 1
for(let i = 5; i>0; i--){
    mul *= i
    console.log("mul = ", mul);
}