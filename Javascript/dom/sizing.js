//1 offsetWidth,offsetHeight,offsetLeft,offsetTo lay ra do rong cua no

function log(value){
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth);//do rong cua phan tu 200
log(boxed.offsetHeight);//chieu cao cua phan tu 200
log(boxed.offsetLeft);//vi tri cua no sao voi ben trai
log(boxed.offsetTop);//vi tri cua no sao voi ben tren
log(boxed.offsetParent);//lay gia tri body


//2. clientWidth,clientHeight,clientLeft,clientTop
log(boxed.clientWidth);//do rong cua phan tu tru di boder 
log(boxed.clientHeight);//do chieu cao cua phan tu tru di boder 
log(boxed.clientLeft);// vi tri cua no so voi phan tu ben trai  boder 
log(boxed.clientTop);// vi tri cua no so voi phan tu ben tren  boder 

//3 window.innerHeight,window.innerWidth,window.outerHeight,window.outerWidth

//4.selector.(boxed.getBoundingClientRect()); lay ra toa do kich thuoc phan tuw

log(boxed.getBoundingClientRect());
//left ,x : vị trí của khối so với bên trái
//top : vi trí của khối so với phía trên 
//bottom: chiều cao của khối top
//right : độ rộng của khối+ lèft
//width : độ rộng 
// height : chiều cao;

//sự khách nhau giưã node list và html collection;
const li = document.getElementsByTagName("li");//html collection;
const li2 = document.querySelector("li");//node list;
log(li);
log(li2);
//diem giong bang index , cos do dai lenght, giong mang nhung khong han la mang tuc laf khong su dung duoc nhung phuowng thuc da hoc nhu la push pop shift map filter
//html collection: khong su dung forEach 
//node list :  su dung dc forEach 

for (let i = 0; i < li.length; i++){
    log(li[i]);
}
// su khac nhau giwx parentNode va parentElement
//parentElement co ther null
//document.documentElemen -> lay the html
log(document.documentElement.parentElement);//null
log(document.documentElement.parentNode);//#document