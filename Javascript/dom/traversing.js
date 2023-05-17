//1 parentNode ,parentElement, removeChild;
// parentNode ,parentElement; //lay phan tu gan nhat 
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement)

//selector.parentNode. hoac selector.parentNode.removeChild(selector);
// span.parentNode.removeChild(span);
//2. document.nextElementSibling lay phan tu tiep theo 
//document.previosElementSibling lay phan tu sau no

const nextSpan = span.nextElementSibling;
console.log(nextSpan);

const previousLink = span.previousElementSibling;
console.log(previousLink);
//3 childNodes : tra về các node bên trong bao gồm textNode còn children trả về thẻ HTMLCollection [strong];
console.log(span.childNodes);//[text, strong, text]
console.log(span.children);
//4 firstChild  lay text 
//firstElenmentChild hien thi ra the HTMl
console.log(span.firstChild);
console.log(span.firstElementChild);

console.log(span.lastElementChild);
console.log(span.lastElementChild);

console.log(span.nextSibling);
console.log(span.previousSibling);

