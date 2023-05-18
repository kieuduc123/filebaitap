const toggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

toggle.addEventListener("click", handleToggleMenu);

function handleToggleMenu (event) {
    // su dung toggle de them vao su kien va su dung targer de them thuoc tinh
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}

document.addEventListener("click", handleClickMenu);

function handleClickMenu(event){
    console.log(event.target);
    // selector.contains kiem tra element cos chua element khac khong 
    //event.target.matches("selector") matches kiem tra co trung hay khong

    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")){
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
    }
}
//bai 2

const tabItems  = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

[...tabItems].forEach((item) => item.addEventListener("click",handleTabClick));
function handleTabClick (e){
        //xoa het tat ca class acitve o tab-item
    [...tabItems].forEach((item) =>item.classList.remove("active"));
    //sau do add class active vao tab hien tai
    event.target.classList.add("active");
   // su dung dataset de lay vi tri
    const numbers = event.target.dataset.tab;
    
    [...tabContents].forEach((item) => {
        item.classList.remove("active");
        if(item.getAttribute("data-tab") === numbers){
            item.classList.add("active");
        }

});
    // [...tabContents][numbers -1 ].classList.add("active");

}