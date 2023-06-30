// const toggle = document.querySelector(".menu-toggle");

// const menu = document.querySelector(".menu");

// toggle.addEventListener("click", handleToggleMenu);

// function handleToggleMenu (event) {
//     // su dung toggle de them vao su kien va su dung targer de them thuoc tinh
//     event.target.classList.toggle("fa-times");
//     event.target.classList.toggle("fa-bars");
//     menu.classList.toggle("is-show");
// }

// document.addEventListener("click", handleClickMenu);

// function handleClickMenu(event){
//     console.log(event.target);
//     // selector.contains kiem tra element cos chua element khac khong 
//     //event.target.matches("selector") matches kiem tra co trung hay khong

//     if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")){
//         menu.classList.remove("is-show");
//         toggle.classList.remove("fa-times");
//         toggle.classList.add("fa-bars");
//     }
// }
// //bai 2

// const tabItems  = document.querySelectorAll(".tab-item");
// const tabContents = document.querySelectorAll(".tab-content");

// [...tabItems].forEach((item) => item.addEventListener("click",handleTabClick));
// function handleTabClick (e){
//         //xoa het tat ca class acitve o tab-item
//     [...tabItems].forEach((item) =>item.classList.remove("active"));
//     //sau do add class active vao tab hien tai
//     event.target.classList.add("active");
    
//    // su dung dataset de lay vi tri
//     const numbers = event.target.dataset.tab;
//     [...tabContents].forEach((item) => {
//         item.classList.remove("active");
//         if(item.getAttribute("data-tab") === numbers){
//             item.classList.add("active");
//         }

// });
//     // [...tabContents][numbers -1 ].classList.add("active");

// }

// //bt3 

// const accorditonHeaders = document.querySelectorAll(".accordion-header");
// [...accorditonHeaders].forEach((item) =>
// item.addEventListener("click",handleClickAccordion)
// );

// const activeStr = "is-active";
// function handleClickAccordion(e){
//     console.log(e.target);
//     //nextElementSibling lay tu phan tu accordion-header -> accordion-content
//     const  content =  e.target.nextElementSibling;
//     //su dung scrollHeight lay ra chieu cao bao gom ca padding;
//     content.style.height = `${content.scrollHeight}px`;
//     content.classList.toggle(activeStr);
//     if (!content.classList.contains("is-active")){
//         content.style.height = "0px";
//     }

//     const icon = e.target.querySelector(".icon");
//     icon.classList.toggle("fa-angle-down");
//     icon.classList.toggle("fa-angle-up");

// }

// // bt4 
// const button = document.querySelector(".button");
// const temple = `<div class="modal">
// <div class="modal-content">
//   <i class ="fa fa-times modal-close"></i>
//   <div class="modal-main">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
//     maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
//     eaque aliquam minus. Eius perferendis, voluptates totam iure minus
//     consequuntur est?
//   </div>
// </div>
// </div>`;

// button.addEventListener("click",function(){
//     document.body.insertAdjacentHTML("beforeend", temple);
// });

// document.body.addEventListener("click", function(e){
//     if(e.target.matches(".modal-close")){
//         const modal = e.target.parentNode.parentNode; //tro tu modal-close den modal
//         modal.parentNode.removeChild(modal);
//     }
//     //kiem tra marches co phai modal khong 
//     else if(e.target.matches(".modal")){
//         e.target.parentNode.removeChild(e.target);
//     }
// });

// // bt5

// const images = document.querySelectorAll(".content img");
// images.forEach((item) => item.addEventListener("click", handleZoomImage));
// function handleZoomImage(e){
//     const image = e.target.getAttribute("src");
//     const templates = `<div class="lightbox">
//     <div class="lightbox-content">
//     <i class ="fa fa-angle-left lightbox-prev"></i>
//         <img src="${image}" alt="" class="lightbox-image">
//         <i class ="fa fa-angle-right lightbox-next"></i>
//     </div>
// </div> `
// document.body.insertAdjacentHTML("beforeend",templates);
// }
// let index = 0;

// document.body.addEventListener("click", function(e){
//     const lightImage = document.querySelector(".lightbox-image");
//     if (!lightImage) return;
//     let lghitSrc = lightImage.getAttribute("src");
//     index = [...images].findIndex(
//         (item) => item.getAttribute("src") === lghitSrc);

//     if(e.target.matches(".lightbox")){
//         //remove lightbox out of dom
//         e.target.parentNode.removeChild(e.target);
//     }
//     else if (e.target.matches(".lightbox-next")){
//         //hand next image
//         index = index + 1;
//         console.log(index);
//         if (index > images.leghth - 1 ){
//             index = 0;
//         }
//         displayImage(lightImage, index);
//     }
//     else if (e.target.matches(".lightbox-prev")){
//         //handle prev imgage
//         index = index - 1;
//         if (index < 0){
//             index = images.lenght - 1 ;
//         }
//         displayImage(lightImage, index);
//     }
// });

// function displayImage(lightImage, index){
//     const newSrc = [...images][index].getAttribute("src");
//     lightImage.setAttribute("src", newSrc);
// };

//bt6

const dropdownSelect = document.querySelector(".dropdown_select");

const dropdownItems = document.querySelectorAll(".dropdown__item");

const dropdownSelected = document.querySelector(".dropdown__selected");

const dropdownList = document.querySelector(".dropdown__list")

const dropdown = document.querySelector(".dropdown")

const dropdownCaret = document.querySelector(".dropdown__caret")
//dropdown select
dropdownSelect.addEventListener("click", function(e){
        dropdownList.classList.toggle("show");
        dropdownList.classList.toggle("fa-caret-up");

});
//dropdown item 
dropdownItems.forEach((item) => 
    item.addEventListener("click", function(e){
        const text = e.target.querySelector(".dropdown__text").textContent;
        dropdownSelected.textContent = text;
        dropdownList.classList.remove("show");

    })
);

document.addEventListener("click",function(e){
    if (!dropdown.contains(e.target)){
        dropdownList.classList.remove("show");
    }

})