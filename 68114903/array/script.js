let score = [85,50,96,40,35]
console.log("score = ",score);

let car = ["Toyota", "Honda", "Ford", "Chevrolet"]
console.log("car = ", car);

let score1 = []
console.log(score1);
console.log(score[2]);
console.log(car[0]);
score[3] = 45
console.log("score after update = ", score);
console.log("length of score = ", score.length);
console.log("length of car = ", car.length);
console.log("length of score1 = ", score1.length);
console.log("----Display Data ------");
console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
console.log(score[3]);
console.log(score[4]);
console.log(score[5]);
console.log("---- for loop -------");
for(let i=0; i<score.length; i++){
    console.log("score[",i,"] = ", score[i]);
}
for(let i=0; i<car.length; i++){
    console.log("car[",i,"] = ", car[i]);
}
console.log("---- for of ------"); //แสดงค่าของข้อมูลทั้งหมดใน array
for(let data of score){
    console.log(data);
}

for(let data of car){
    console.log(data);
}

console.log("---- for in ------");  // for in แลดงตำแหน่ง index ของ array
for(let i in score){
    console.log("score index",i);
}

for(let i in car){
    console.log("car index",i);
}

console.log("---- Array add/delete DATA -----");
console.log("before score : ", score);
// push เพิ่มข้อมูลตัวสุดท้าย
score.push(10);
console.log("after push score : ", score);
// pop ลบข้อมูลตัวสุดท้าย
score.pop();
console.log("after pop score : ", score);
// unshift เพิ่มข้อมูลตัวแรก
score.unshift(5);
console.log("after unshift score : ", score);
// shift ลบข้อมูลตัวแรก
score.shift();
console.log("after shift score : ", score);

console.log("before car : ", car);
car.push("Nissan");
console.log("after push car : ", car);
car.pop();
console.log("after pop car : ", car);  
car.unshift("Mazda");
console.log("after unshift car : ", car);
car.shift();
console.log("after shift car : ", car);

console.log("---- copy----");
score1 = score.slice(); // การ copy Array ต้องใช้ slice() เท่านั้น
// ใน Array การใช้ = จะเป็นการอ้างอิงข้อมูล คือใช้ข้อมูลก้อนเดียวกัน 
// เพิ่ม/ลบข้อมูลที่ตัวใดตัวหนึ่ง ข้อมูลอีกตัวก็จะเปลี่ยนตามไปด้วย
console.log("before score : ", score);
console.log("before score1 : ", score1);
score1.push(55)
console.log("before score : ", score);
console.log("before score1 : ", score1);






