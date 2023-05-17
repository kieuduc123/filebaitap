//1  textContent ->  lays in   noi dung (only text) bao gom text trong html  tag(neu co ) cua selector 
const spiner = document.querySelector("#p-class");
//thay doi textContent 
//spiner.textContent = "Hello Duc"
console.log(spiner.textContent);
// 2 inner text xoa khoang traHTMLg 
console.log(spiner.innerText);

//3 innerHTML -> LÂÝ RA NỘI DUNG CỦA SELECTOR VÀ HTML
 
console.log(spiner.innerHTML);
spiner.innerHTML= `<div>
<h1 class = "demo">HI </h1>
</div>`
