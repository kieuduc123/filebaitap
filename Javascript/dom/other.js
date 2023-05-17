// document.title -> the title trang web
console.log(document.title);
document.title  = " Welcome to Javascript";
//document. head
console.log(document.head);

const meta = document.createElement("meta");
meta.setAttribute("name","viewport");
meta.setAttribute("content= width=device-width, initial-scale=1.0");

//document.head.appChild(meta);
const head = document.getElementsByTagName("head");

head[0].appendChild(meta);
console.log(head);

//inserBefore
//parentNode.inserBefor(newNode,existingnode);
const ul = document.querySelector("ul");
document.body.insertBefore(ul,document.querySelector("h3").nextElementSibling);

//replceChild thay doi phan tu 
//node.repleceChild(newdeo,oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span,document.querySelector(".boxed"));

//covert HTMl collection, nodelist to array
const li = document.getElementsByTagName("li");
[...li].filter((item) => item);
console.log(li);
//html body head title 
//html document.documentElement
//body : document.body
//head : document.head
//title document.title