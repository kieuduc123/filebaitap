//1  selector.getAttribute("attibute");
//selector :1 cai
//attribute ->  thuoc tinh : href,id, class, src ,style

const link = document.querySelector(".link");

console.log(link.getAttribute("href"));


const li = document.querySelectorAll(".item");

li.forEach((item) =>{
    console.log(item.getAttribute("class"));
});
console.log(li);

// 2. selector.setAttribute ("attribute", value) -> set gia tri cho attribute nao do cua selector  //them
// link.setAttribute("target","_blank");

const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));

//3. selector.removeAttribute("Attribute") //xoa
const p = document.getElementById("p-class");
p.removeAttribute("style");

//4.hasAttribute kiem tra xem co attribute khong co tra true, khong false,

console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));

