const out = document.getElementById("out");
const n = document.getElementById("n");
const now = document.getElementById("now");
const push_btn = document.getElementById("push_btn");
const pop_btn = document.getElementById("pop_btn");
const shift_btn = document.getElementById("shift_btn");
const unshift_btn = document.getElementById("unshift_btn");
const index_input = document.getElementById("index_input");
const value_input = document.getElementById("value_input");
const get_btn = document.getElementById("get_btn");
const set_btn = document.getElementById("set_btn");
const insert_btn = document.getElementById("insert_btn");
const remove_btn = document.getElementById("remove_btn");
const clear_btn = document.getElementById("clear_btn");

// สร้าง class Node
// Node คือ "กล่อง" 1 กล่องใน Linked List
// ภายในจะเก็บข้อมูล (element) และตัวชี้ไปยัง Node ถัดไป (next)
class Node {
  constructor(elem) {
    this.element = elem; // เก็บค่าข้อมูลของ node นี้
    this.next = null; // ชี้ไปยัง node ถัดไป (เริ่มต้นยังไม่มี เลยเป็น null)
  }
}

// สร้าง class LinkedList
class LinkedList {
  constructor() {
    // firstNode คือ node ตัวแรกของลิสต์
    this.firstNode = null;

    // lastNode คือ node ตัวสุดท้ายของลิสต์
    this.lastNode = null;

    // length ใช้เก็บจำนวน node ทั้งหมดในลิสต์
    this.length = 0;
  }

  // push = เพิ่มข้อมูลต่อท้ายลิสต์
  push(value) {
    const newNode = new Node(value); // สร้าง node ใหม่

    // ถ้ายังไม่มี node เลย (ลิสต์ว่าง)
    if (this.firstNode == null) {
      this.firstNode = newNode; // ตัวแรก = ตัวใหม่
      this.lastNode = newNode; // ตัวสุดท้าย = ตัวใหม่
    } else {
      // ถ้ามีข้อมูลอยู่แล้ว
      this.lastNode.next = newNode; // เอาตัวสุดท้ายชี้ไปที่ตัวใหม่
      this.lastNode = newNode; // แล้วอัปเดตตัวสุดท้ายให้เป็นตัวใหม่
    }

    this.length++; // เพิ่มจำนวน node
    out.innerHTML = `เพิ่ม ${value} ต่อท้ายลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
  }

  // unshift = เพิ่มข้อมูลไว้หน้าสุดของลิสต์
  unshift(value) {
    const newNode = new Node(value); // สร้าง node ใหม่

    if (this.firstNode == null) {
      // ถ้าลิสต์ยังว่าง
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // ให้ node ใหม่ชี้ไปที่ตัวแรกเดิม
      newNode.next = this.firstNode;

      // แล้วอัปเดตให้ node ใหม่กลายเป็นตัวแรก
      this.firstNode = newNode;
    }

    this.length++; // เพิ่มจำนวน node
    out.innerHTML = `เพิ่ม ${value} ไว้หน้าสุดของลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
  }

  // shift = ลบข้อมูลตัวแรกออกจากลิสต์
  shift() {
    // ถ้าลิสต์ว่าง ไม่มีอะไรให้ลบ
    if (this.firstNode == null) {
      // (ควรใช้ == null จะดีกว่า)
      return undefined;
    } else {
      // เก็บ node ตัวแรกไว้ก่อน
      const currentnode = this.firstNode;

      // ขยับตัวแรกไปเป็นตัวถัดไป
      this.firstNode = this.firstNode.next;

      this.length--; // ลดจำนวน node ลง

      // ถ้าลบแล้วลิสต์ว่าง
      if (this.firstNode == null) {
        this.lastNode = null;
      }

      // คืนค่าข้อมูลของ node ที่ถูกลบ
      out.innerHTML = `ลบ ${currentnode.element} ออกจากด้านหน้าสุดของลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
      return currentnode.element;
    }
  }

  // pop = ลบข้อมูลตัวสุดท้ายออกจากลิสต์
  pop() {
    // ถ้าลิสต์ว่าง ไม่มีอะไรให้ลบ
    if (this.length == 0) {
      return undefined;
    }
    let currentNode = this.firstNode;
    let beforeNode = this.firstNode;
    while (currentNode.next !== null) {
      beforeNode = currentNode;
      currentNode = currentNode.next;
    }

    this.lastNode = beforeNode;
    this.lastNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.firstNode = null;
      this.lastNode = null;
    }
    out.innerHTML = `ลบ ${currentNode.element} ออกจากด้านท้ายสุดลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
    return currentNode.element;
  }

  // method สำหรับเข้าถึงข้อมูลที่ตำแหน่ง index
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.firstNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    let currentNode = this.firstNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.element = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);
    let currentNode = this.firstNode;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let currentNode = this.firstNode;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;
    this.length--;
    return removedNode.element;
  }

  // method สำหรับแสดงค่าเป็น string
  toString() {
    if (this.length === 0) {
      return "ว่าง";
    }
    return this.toArray().join(" → ");
  }
}

//-----main-----
// เริ่มทดลองใช้งาน

let mylist = new LinkedList();

// console.log(mylist);
// mylist.unshift("a");
// console.log(mylist);
// mylist.unshift("b");
// console.log(mylist);
// mylist.unshift("c");
// console.log(mylist);
// mylist.unshift("d");
// console.log(mylist);
// let d = mylist.pop();
// console.log(mylist);
// console.log("data to delete : ", d);
// let d1 = mylist.pop();
// console.log(mylist);
// console.log("data to delete : ", d1);

// for(let i = 0; i < mylist.length; i++){
//     let d = mylist.get(i);
//     console.log(`data at index ${i} : `, d);
// }

/*
สรุปแนวคิด Linked List แบบง่าย ๆ

- แต่ละ Node จะมี:
  1. ข้อมูล (element)
  2. ตัวชี้ไป node ถัดไป (next)

- LinkedList จะเก็บ:
  - ตัวแรก (fristNode)
  - ตัวสุดท้าย (lastNode)
  - จำนวนข้อมูล (length)

ข้อดี:
- เพิ่ม/ลบหน้าสุดหรือท้ายสุดได้เร็ว

ข้อเสีย:
- เข้าถึงข้อมูลตรงกลางแบบ array ไม่ได้ ต้องไล่ทีละ node
*/

// =======เชื่อมปุ่มกับฟังก์ชัน=======
push_btn.onclick = function () {
  mylist.push(n.value);
  n.value = "";
  now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
unshift_btn.onclick = function () {
  mylist.unshift(n.value);
  n.value = "";
  now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
shift_btn.onclick = function () {
  mylist.shift();
  now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
pop_btn.onclick = function () {
  mylist.pop();
  now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
get_btn.onclick = function () {
  const index = Number(index_input.value);
  if (index_input.value === "" || Number.isNaN(index)) {
    out.innerHTML = "กรุณาใส่ index สำหรับ get";
    return;
  }
  const value = mylist.get(index);
  if (value === undefined) {
    out.innerHTML = `ไม่พบข้อมูลที่ index ${index}`;
  } else {
    out.innerHTML = `ข้อมูลที่ index ${index} คือ ${value}`;
  }
  now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
set_btn.onclick = function () {
  const index = Number(index_input.value);
  if (index_input.value === "" || Number.isNaN(index)) {
    out.innerHTML = "กรุณาใส่ index สำหรับ set";
    return;
  }
  const value = value_input.value;
  if (value === "") {
    out.innerHTML = "กรุณาใส่ค่าใหม่สำหรับ set";
    return;
  }
  const updated = mylist.set(index, value);
  if (updated) {
    out.innerHTML = `อัปเดต index ${index} เป็น ${value}`;
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
  } else {
    out.innerHTML = `ไม่พบข้อมูลที่ index ${index}`;
  }
};
insert_btn.onclick = function () {
  const index = Number(index_input.value);
  if (index_input.value === "" || Number.isNaN(index)) {
    out.innerHTML = "กรุณาใส่ index สำหรับ insert";
    return;
  }
  const value = value_input.value;
  if (value === "") {
    out.innerHTML = "กรุณาใส่ค่าใหม่สำหรับ insert";
    return;
  }
  const inserted = mylist.insert(index, value);
  if (inserted) {
    out.innerHTML = `แทรก ${value} ที่ index ${index}`;
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
  } else {
    out.innerHTML = `ไม่สามารถแทรกที่ index ${index}`;
  }
};
remove_btn.onclick = function () {
  const index = Number(index_input.value);
  if (index_input.value === "" || Number.isNaN(index)) {
    out.innerHTML = "กรุณาใส่ index สำหรับ remove";
    return;
  }
  const removed = mylist.remove(index);
  if (removed === undefined) {
    out.innerHTML = `ไม่พบข้อมูลที่ index ${index}`;
  } else {
    out.innerHTML = `ลบ ${removed} ที่ index ${index}`;
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
  }
};
clear_btn.onclick = function () {
  mylist = new LinkedList();
  out.innerHTML = "ลิสต์ถูกสร้างใหม่แล้ว";
  now.innerHTML = `🗑️ ล้างข้อมูลแล้ว <br>ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
};
