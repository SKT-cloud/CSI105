const out = document.getElementById("out");
const n = document.getElementById("n");
const now = document.getElementById("now");
const push_btn = document.getElementById("push_btn");
const pop_btn = document.getElementById("pop_btn");
const shift_btn = document.getElementById("shift_btn");
const unshift_btn = document.getElementById("unshift_btn");

// สร้าง class Node
// Node คือ "กล่อง" 1 กล่องใน Linked List
// ภายในจะเก็บข้อมูล (element) และตัวชี้ไปยัง Node ถัดไป (next)
class Node{
    constructor(elem){
        this.element = elem;   // เก็บค่าข้อมูลของ node นี้
        this.next = null;     // ชี้ไปยัง node ถัดไป (เริ่มต้นยังไม่มี เลยเป็น null)
    }
}

// สร้าง class LinkedList
class LinkedList{
    constructor(){
        // fristNode คือ node ตัวแรกของลิสต์
        this.fristNode = null;

        // lastNode คือ node ตัวสุดท้ายของลิสต์
        this.lastNode = null;

        // length ใช้เก็บจำนวน node ทั้งหมดในลิสต์
        this.length = 0;
    }

    // push = เพิ่มข้อมูลต่อท้ายลิสต์
    push(value){
        const newNode = new Node(value); // สร้าง node ใหม่

        // ถ้ายังไม่มี node เลย (ลิสต์ว่าง)
        if(this.fristNode == null){
            this.fristNode = newNode;  // ตัวแรก = ตัวใหม่
            this.lastNode = newNode;   // ตัวสุดท้าย = ตัวใหม่
        }else{
            // ถ้ามีข้อมูลอยู่แล้ว
            this.lastNode.next = newNode; // เอาตัวสุดท้ายชี้ไปที่ตัวใหม่
            this.lastNode = newNode;      // แล้วอัปเดตตัวสุดท้ายให้เป็นตัวใหม่
        }

        this.length++; // เพิ่มจำนวน node
        out.innerHTML = `เพิ่ม ${value} ต่อท้ายลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
    }

    // unshift = เพิ่มข้อมูลไว้หน้าสุดของลิสต์
    unshift(value){
        const newNode = new Node(value); // สร้าง node ใหม่    

        if(this.fristNode == null){
            // ถ้าลิสต์ยังว่าง
            this.fristNode = newNode;  
            this.lastNode = newNode;
        }else{
            // ให้ node ใหม่ชี้ไปที่ตัวแรกเดิม
            newNode.next = this.fristNode;

            // แล้วอัปเดตให้ node ใหม่กลายเป็นตัวแรก
            this.fristNode = newNode;
        }

        this.length++; // เพิ่มจำนวน node
        out.innerHTML = `เพิ่ม ${value} ไว้หน้าสุดของลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
    }

    // shift = ลบข้อมูลตัวแรกออกจากลิสต์
    shift(){
        // ถ้าลิสต์ว่าง ไม่มีอะไรให้ลบ
        if(this.fristNode == 0){   // (ควรใช้ == null จะดีกว่า)
            return undefined;
        }else{
            // เก็บ node ตัวแรกไว้ก่อน
            const currentnode = this.fristNode;

            // ขยับตัวแรกไปเป็นตัวถัดไป
            this.fristNode = this.fristNode.next;

            this.length--; // ลดจำนวน node ลง

            // ถ้าลบแล้วลิสต์ว่าง
            if(this.fristNode == null){
                this.lastNode = null;
            }

            // คืนค่าข้อมูลของ node ที่ถูกลบ
            out.innerHTML = `ลบ ${currentnode.element} ออกจากหน้าสุดของลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
            return currentnode.element;
        }
    }

    // pop = ลบข้อมูลตัวสุดท้ายออกจากลิสต์
    pop(){
        // ถ้าลิสต์ว่าง ไม่มีอะไรให้ลบ
        if(this.fristNode == null){
            return undefined;
        }
        
        // ถ้ามี node เดียว
        if(this.fristNode === this.lastNode){
            const value = this.fristNode.element;
            this.fristNode = null;
            this.lastNode = null;
            this.length--;
            return value;
        }
        
        // ถ้ามีหลาย node ต้องหา node ก่อนสุดท้าย
        let currentNode = this.fristNode;
        while(currentNode.next !== this.lastNode){
            currentNode = currentNode.next;
        }
        
        // เก็บค่าของ node สุดท้ายไว้ก่อน return
        const value = this.lastNode.element;
        
        // ตัดการเชื่อมไปยัง node สุดท้าย
        currentNode.next = null;
        this.lastNode = currentNode;
        this.length--;
        out.innerHTML = `ลบ ${value} ออกจากท้ายลิสต์<br>จำนวน node ตอนนี้: ${this.length}`;
        return value;
    }

    // method สำหรับแสดงค่าทั้งหมดใน LinkedList
    toArray(){
        const result = [];
        let currentNode = this.fristNode;
        
        while(currentNode !== null){
            result.push(currentNode.element);
            currentNode = currentNode.next;
        }
        
        return result;
    }
    
    // method สำหรับแสดงค่าเป็น string
    toString(){
        if(this.length === 0){
            return "ว่าง";
        }
        return this.toArray().join(" → ");
    }
}
    
//-----main-----
// เริ่มทดลองใช้งาน

let mylist = new LinkedList();
push_btn.onclick = function(){
    mylist.push(n.value);
    n.value = "";
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
}
unshift_btn.onclick = function(){
    mylist.unshift(n.value);
    n.value = "";
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
}
shift_btn.onclick = function(){
    mylist.shift();
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
}
pop_btn.onclick = function(){
    mylist.pop();
    now.innerHTML = `ข้อมูลในลิสต์ตอนนี้ (${mylist.length} ตัว): ${mylist.toString()}`;
}

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