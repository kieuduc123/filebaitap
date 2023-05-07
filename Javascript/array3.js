//Json : Object Notation 
// {
//     "key" : value,
//     "key" : value,
//     "key" : value,
// }
// JSON.stringify(value) -> convert gia tri sang JSOn stringify
//toString()
// [1,2,3].toString() -> "1,2,3"
//JSON.Strinngify([1,2,3]) -> "[1,2,3]"
// JSON.parse("[1,2,3]") ->[1,2,3]

const arr1 = [1,2,3];
const arr2 =[ 1,2,3];
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));

const arrStr = JSON.stringify(arr1);
const arr2Str =JSON.stringify(arr2);

console.log(arrStr === arr2Str);
// clone  sao chep mang 
const students = ["a","b","c","d","e"];
//students.pop() xoa phan tu cuoi cua mang 
//1. su dung pt slice() sao chep ohan tu trong mang 

const sliceStudents = students.slice();

// students.pop();
console.log(students);

//2. sprea operator [...array]// pt sao chep mang
 
const spreaStudent = [...students];

console.log(spreaStudent);

//3. Pt gop mang concat

const array1 = [1,2];
const array2 = [3,4];
const array3 = [5,6];

const mergeArray = array2.concat(array1,array3).reverse();

console.log(mergeArray);

const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);
//destructuring array lay gia tri cac phan tu trong mang
const toys = ["a", "b","c","d"];

const [a,b,c] = toys;//[] lay phan tu 
console.log(a,b,c);

//rest parameter lay cac gia tri con lai trong mang 

const [d, ...rest] = toys;

console.log(rest);