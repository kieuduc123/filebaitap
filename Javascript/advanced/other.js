// 1 Sự khác nhau giữa i++ và ++i;
let i = 1;
let j = i++;
console.log(i,j) // 2,1 vì i gán cho i là 1 rồi sau đó biến i nhận lại i++
let a = 1;
let b = ++a;
console.log(a, b);// 2,2 vì khi a gán cho b thì a++ lên sau đó biến a nhận lại 2;
//2 luư ý khi return function;
function total(x, y) {
  return; // undefined
  x + y;
}
//3. 2 cách chuyển đổi dữ liệu mới 
const str = "";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);

console.log(!!str);// sang boalen;

// 4. arguments  nó giống như không phải là mảng , truy xuất đc nhưng không dùng đc các pthucws của mảng 
function number(a, b, c) {
  // if (!arguments.length) console.log("please insert your arguments");
  console.log(typeof arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(arguments);
  console.log(args2);
  return a + b + c;
}
number();
// 5. closure in loop
// for (let z = 1; z < 5; z++) {
//   setTimeout(function () {
//     console.log(z); // z = ?
//   }, 1000);
// }
// let -> not hoisting
// let -> scope của nó sẽ thay đổi sau mỗi lần lặp
// var -> hoisting
// scope của var sau mỗi vòng lặp thì nó không thay đổi
// 6. Sự khác nhau giữa localStorage và sessionStorage
// localStorage.getItem("abc") // lưu trên localStrorage đóng tab vẫn còn;
// sessionStorage.getItem("abc")// khi đóng tab sẽ 
// 7. Những trường hợp ko nên sử dụng arrow function
// 7.1 Event handlers
// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//   console.log(this.value);
// });
// 7.2 Object
const student = {
  counter: 0,
  increment: () => {  //NAN
    return ++this.counter;
  },
};
console.log(student.increment());
// function ()-- la nofunction - () arrow function la bi loi khi su dung voi obj va event

// 8. Đệ quy (recursive) la goi lai chinh no 
function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other);
  }
  // if (condition) stop recursive else run recursive
}
// countDown(3);
// Maximum call stack size exceeeded
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
// [1,2,3,3,4,5,2,3,2,3,5,1,2];
// console.log(complexArr.flat(Infinity));
// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b);
// [1,2,3].slice() // sao chep 
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(complexArr, Infinity));
/*
[].concat([1,2,3])
[1,2,3].concat([3, 4, 5])
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
[1,2,3]
*/
// 9. Set là obj lưu trữ giá trị duy nhất  

const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add("evondev");
mySet.has(1); // true
console.log(mySet);
mySet.delete("evondev");
mySet.clear();// xoá sạch
//
const arr = [1, 2, 3, 4, 1, 1, 1, 4, 4, 4, 5, 5, 5, 7, 9];
// -> [1,2,3,4,5,7,9]
// array to Set
const mySet2 = new Set(arr); ///loại bỏ giá trị trùng nhau 
console.log(mySet2);
// for of
for (let item of mySet2) {
  console.log(`item: ${item}`);
}
// Set to array
const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2];
// let result = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (!result.includes(element)) {
//     result.push(element);
//   }
// }
// console.log(result);

let result = [];
for ( let index = 0 ; index < arr.length; index++){
   arr[index];
   if(!result.includes(arr[index])){
    result.push(arr[index]);
   }

}
// 10. Debugger in vscode
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}
