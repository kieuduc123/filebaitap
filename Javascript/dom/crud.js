//them sua xoa
1. //tao ra element trong javascript :  document.createElement("tag");
const div = document.createElement("div");

//2 selector .appendChild 
//document.body -> the body in ra 
//document.querySelector("body"); 
const body = document.body;
body.appendChild(div); //in ra  man hih
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "When you set the innerText property, all child nodes are removed and replaced by only one new text node."
div.innerHTML =`<div class="content"><h3>Hello</h3></div>`;
// div.setAttribute("data-content","img");

// Bai tap tao ra html nhu hinh minh hao file

const card = document.createElement("div");// khoi tao
card.classList.add("card") //them class
const cardImage = document.createElement("img"); //khoi tao
cardImage.setAttribute("src", "dong.jpeg")// them thuoc tinh va anh
cardImage.setAttribute("id", "card-image");
card.appendChild(cardImage);
body.appendChild(card);
//3. document.createTextNode in ra text

const text = document.createTextNode("What Is Yours Name");
const h4 = document.createElement("h4");
body.appendChild(h4);
h4.appendChild(text);

//4. element.cloaneNode  tao ra ban sao chep 

const h4Cloane = h4.cloneNode(true);//muon sao chep tat ca cac the cua no thi dien true;
body.appendChild(h4Cloane);

//5. element.hasChildNodes() -> kiem tra element co phan tu con hay khong -> co thi tra ve true khong thi false;

console.log(h4Cloane.hasChildNodes()); //true

console.log(document.querySelector("h3").hasChildNodes());
