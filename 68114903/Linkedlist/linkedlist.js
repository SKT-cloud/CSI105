// ==========================
// 1) Node (element + next)
// ==========================
class Node {
  constructor(elem) {
    // ตอนนี้ this = object Node ที่เพิ่งถูกสร้างด้วย new Node(...)
    this.element = elem;
    this.next = null;
  }
}

// ===========================================
// 2) LinkedList (firstNode, lastNode, length)
// ===========================================
class LinkedList {
  constructor() {
    // ตอนนี้ this = object LinkedList ที่เพิ่งถูกสร้างด้วย new LinkedList()
    this.firstNode = null;
    this.lastNode = null;
    this.length = 0;
  }

  // ==========================
  // 3) push(value) เพิ่มท้าย
  // ==========================
  push(value) {
    // ตอนนี้ this = object LinkedList ที่เรียก push (เช่น myList)

    const newNode = new Node(value);
    // ↑ ตอนเข้า constructor ของ Node: this เปลี่ยนไปเป็น newNode ชั่วคราว
    // แล้วพอออกจาก constructor ก็กลับมา this = LinkedList เหมือนเดิม

    if (this.firstNode === null) {
      // กรณีลิสต์ว่าง
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // กรณีมีสมาชิกแล้ว
      this.lastNode.next = newNode; // <-- จุด "เชื่อม" โหนด
      this.lastNode = newNode;
    }

    this.length++;
  }

  // ==========================
  // 4) pop() ลบท้าย
  // ==========================
  pop() {
    if (this.firstNode === null) return null;

    if (this.length === 1) {
      const val = this.firstNode.element;
      this.firstNode = null;
      this.lastNode = null;
      this.length = 0;
      return val;
    }

    let currentNode = this.firstNode;
    let beforeNode = this.firstNode;

    while (currentNode.next !== null) {
      beforeNode = currentNode;
      currentNode = currentNode.next;
    }

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
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.next = this.firstNode; // <-- จุด "เชื่อม" แบบเพิ่มหัว
      this.firstNode = newNode;
    }

    this.length++;
  }

  // ==========================
  // 6) shift() ลบหัว
  // ==========================
  shift() {
    if (this.firstNode === null) return null;

    const val = this.firstNode.element;
    this.firstNode = this.firstNode.next; // <-- ขยับหัวไปตัวถัดไป
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

    return current;
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

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

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

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const beforeNode = this.get(index - 1);
    const targetNode = beforeNode.next;

    beforeNode.next = targetNode.next;
    targetNode.next = null;

    this.length--;
    return targetNode.element;
  }

  // ช่วยแสดงผล (เพื่อดูภาพรวม)
  print() {
    if (this.firstNode === null) return "(empty)";

    let cur = this.firstNode;
    let text = "";

    while (cur !== null) {
      text += cur.element + " -> ";
      cur = cur.next;
    }

    return text + "null";
  }
}

// ===========================================
// ✅ ตรงนี้แหละที่ "new LinkedList()" เกิดขึ้น
// ===========================================
const myList = new LinkedList();   // <-- myList คือ object ของ LinkedList

// ทดลองทำตามหัวข้อในสไลด์
myList.push("a");      // a
myList.push("b");      // a -> b
myList.unshift("c");   // c -> a -> b
myList.insert(2, "g"); // c -> a -> g -> b
myList.remove(1);      // ลบ a -> c -> g -> b
myList.set(1, "X");    // c -> X -> b

// แสดงผล
document.getElementById("out").textContent =
  "length = " + myList.length + "\n" +
  "list   = " + myList.print();
