// ==========================
// 1) Node (element + next)
// ==========================
class Node {
  constructor(elem) {
    this.element = elem;  // ข้อมูล
    this.next = null;     // ชี้ไปโหนดถัดไป (ถ้าไม่มี = null)
  }
}

// ===========================================
// 2) LinkedList (firstNode, lastNode, length)
// ===========================================
class LinkedList {
  constructor() {
    this.firstNode = null; // ชี้โหนดแรก
    this.lastNode = null;  // ชี้โหนดสุดท้าย
    this.length = 0;       // จำนวนสมาชิก
  }

  // ==========================
  // 3) push(value) เพิ่มท้าย
  // ==========================
  push(value) {
    const newNode = new Node(value);

    if (this.firstNode === null) {
      // กรณีลิสต์ว่าง
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // กรณีมีสมาชิกแล้ว
      this.lastNode.next = newNode;
      this.lastNode = newNode;
    }

    this.length++;
  }

  // ==========================
  // 4) pop() ลบท้าย
  // ==========================
  pop() {
    if (this.firstNode === null) return null; // ลิสต์ว่าง

    // ถ้ามีตัวเดียว
    if (this.length === 1) {
      const val = this.firstNode.element;
      this.firstNode = null;
      this.lastNode = null;
      this.length = 0;
      return val;
    }

    // ต้องไล่หาตัวก่อนสุดท้าย
    let currentNode = this.firstNode;
    let beforeNode = this.firstNode;

    while (currentNode.next !== null) {
      beforeNode = currentNode;
      currentNode = currentNode.next;
    }

    // currentNode = ตัวสุดท้ายเดิม
    beforeNode.next = null;
    this.lastNode = beforeNode;
    this.length--;

    return currentNode.element;
  }

  // =============================
  // 5) unshift(value) เพิ่มหัว
  // =============================
  unshift(value) {
    const newNode = new Node(value);

    if (this.firstNode === null) {
      // ลิสต์ว่าง
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // ต่อหัว
      newNode.next = this.firstNode;
      this.firstNode = newNode;
    }

    this.length++;
  }

  // ==========================
  // 6) shift() ลบหัว
  // ==========================
  shift() {
    if (this.firstNode === null) return null; // ลิสต์ว่าง

    const val = this.firstNode.element;
    this.firstNode = this.firstNode.next;
    this.length--;

    if (this.length === 0) {
      this.lastNode = null;
    }

    return val;
  }

  // ==========================
  // 7) get(index) ดึงโหนด
  // ==========================
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.firstNode;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current; // คืน Node
  }

  // ==========================
  // 8) set(index, value) แก้ค่า
  // ==========================
  set(index, value) {
    const node = this.get(index);
    if (node === null) return false;

    node.element = value;
    return true;
  }

  // =========================================
  // 9) insert(index, value) แทรก (กลางลิสต์)
  // =========================================
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    // แทรกหัว = unshift
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    // แทรกท้าย = push
    if (index === this.length) {
      this.push(value);
      return true;
    }

    // แทรกกลาง (ตามสไลด์)
    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);

    newNode.next = beforeNode.next;
    beforeNode.next = newNode;

    this.length++;
    return true;
  }

  // ==================================
  // 10) remove(index) ลบตามตำแหน่ง
  // ==================================
  remove(index) {
    if (index < 0 || index >= this.length) return null;

    // ลบหัว = shift
    if (index === 0) return this.shift();

    // ลบท้าย = pop
    if (index === this.length - 1) return this.pop();

    // ลบกลาง (ตามสไลด์)
    const beforeNode = this.get(index - 1);
    const targetNode = beforeNode.next;

    beforeNode.next = targetNode.next;
    targetNode.next = null;

    this.length--;
    return targetNode.element;
  }

  // ==========================
  // ช่วยแสดงผล (ไม่ใช่หัวข้อหลัก)
  // ==========================
  print() {
    let text = "";
    let cur = this.firstNode;

    while (cur !== null) {
      text += cur.element + " -> ";
      cur = cur.next;
    }

    return text + "null";
  }
}

// ==========================
// ตัวอย่างใช้งาน "ตามสไลด์"
// ==========================
const myList = new LinkedList();

// เพิ่มในลิสต์ว่าง (เหมือนในสไลด์)
myList.push("a");     // a
myList.push("b");     // a -> b
myList.unshift("c");  // c -> a -> b

// เพิ่มตรงกลาง (insert)
myList.insert(2, "g"); // c -> a -> g -> b

// ลบ
myList.remove(1); // ลบ a => c -> g -> b

// get / set
const node = myList.get(1); // ได้ g
myList.set(1, "X");         // c -> X -> b

// แสดงผล
document.getElementById("out").textContent =
  "length = " + myList.length + "\n" +
  "list   = " + myList.print() + "\n" +
  "get(1) ก่อน set = " + (node ? node.element : "null");
