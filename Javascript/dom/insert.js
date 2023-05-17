//1 insertAdjacentText   chen text co 4 vi tri
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "beforebegin"); // truoc khi khoir tao
h3.insertAdjacentText("afterbegin", "afterbegin"); // sau khi dong the  cac 
h3.insertAdjacentText("beforeend", "beforeend"); //  truoc khi khoi tao ther con
h3.insertAdjacentText("afterend", "afaterend"); // sau khi dong the con
 
//2. element.insertAdjacentElement(postion,node) chen element

const strong = document.createElement("strong");

strong.classList.add("bold");
h3.insertAdjacentElement("beforeend",strong);

//3. element.insertAdjacentHTML hien thi 1 chuoi html

const temple = `
<ul class= "menu2>
    <li>1</li>
    <li>2</li>
    <li>3</li> 
</ul>`;
document.body.insertAdjacentHTML("afterend",temple);

//1 viet 1 function tao ra thong bao