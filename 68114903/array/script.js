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
