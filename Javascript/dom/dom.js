//1 Dom la gì
//dom object model
// Dom attribute
//Dom node
// 2> Selecting nodes
//2.1 documnet.querySelector("selector") -> tra ve 1 node selector do nguoc la no tra ve null
//selectors.header ,body

const result = document.querySelector(".heading");

console.log(result);

//2.2 document.querySelectorAll("selector")  -> tra ve 1 node list chua danh sach not , neu khong thi tra ve empy
//nos có ther lôp forEach 
//nó giong array là có thể loop nhueng không sử dụng đc các phương thức như pop, púsh , shift 
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);

//2.3 document.getElementsByClassName("className") -> tra ve html collection chua fan sach node ,neu khong co thi tra ve empty[]
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

//2.4 document.getElementsByTagName("tag nam ")
const tagNods = document.getElementsByTagName("li");
console.log(tagNods);

//2.5 document.getElementById("id") => tra ve 1 node 
const idNode = document.getElementById("p-class");
// hay dung nhat document.querySelector(tag,class,id),document. querySelectorAll(tag, class) 
console.log(idNode);

