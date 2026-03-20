class sort {
  insertionSort(arr) {
    let key, j;
    for (let i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && key < arr[j]) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      console.log("sorting รอบที่ ", i, "= ", arr);
    }
  }

  bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      console.log("sorting รอบที่ ", i, "= ", arr);
    }
  }
}

// ------ main ------
let mySort = new sort();
let data = [];
for (let i = 0; i < 10; i++) {
  data.push(Math.floor(Math.random() * 100));
}
// console.log("data : ", data);
// console.log("------ insertion sort ------");
// mySort.insertionSort(data);
// console.log("data after sort: ", data);

let data1 = [];
for (let i = 0; i < 10; i++) {
  data1.push(Math.floor(Math.random() * 100));
}
console.log("data1 : ", data1);
console.log("------ bubble sort ------");
mySort.bubbleSort(data1);
console.log("data1 after sort: ", data1);