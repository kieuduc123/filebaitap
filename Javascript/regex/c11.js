// event handler 
//onclick chấp nhận 1 event handler

//.button.onclick = handleClick ;
//.button.onclick = handleClick2 ;
//addEventListener : chaaps nhaan nhieu lan e 
 //button.addEventListener("click", handleClick);

// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelector(".container img");
   
// window.addEventListener("scroll", function(){
//     const windowScrollTop = window.pageYOffset;

//     [...images].forEach((item) => {
//         // const itemOffsetTop = item.offsetTop;
//        if (windowScrollTop > item.offsetTop - item.offsetHeight /2 ){
//         item.classList.add("active");
//        }
//     });
//   });
// });

//bt ngay
// window.addEventListener("load", function(){
//     const daysTexts= document.querySelector(".days");
//     const  hoursTexts = document.querySelector(".hours");
//     const  minutesTexts = document.querySelector(".minutes");
//     const  secondsTexts = document.querySelector(".seconds");

//     function countdown(date){

//         const endDate = new Date(date).getTime();
//         let currentDate = new Date().getTime();
        
//         if (isNaN(endDate) || endDate - currentDate <= 0)
//         return;

//         setInterval(calculate,1000)
//     function calculate(){

     
        // let days , hours , minutes, seconds;
        // const now = new Date();//khoi tao 
        //conver to timestamp
        // const startDate = now.getTime();

        //time remaining
    //    let timeRemaining = parseInt(( endDate - startDate) /1000);
    // if (timeRemaining > 0) {

 
    //    console.log(timeRemaining);
    //1 ngay  = 24 * 60 * 60 =86400
    // days = parseInt(timeRemaining / 86400);
    //chia lay du % de tinh so gio con lai
    // timeRemaining = timeRemaining % 86400;
    // console.log(days);
    //1 gio = 60 * 60;
//     hours = parseInt(timeRemaining / 3600);
//     timeRemaining = timeRemaining % 3600;

//     minutes = parseInt(timeRemaining /60);
//     timeRemaining = timeRemaining % 60;

//     seconds = parseInt(timeRemaining);

//     daysTexts.textContent =`0${days}`.slice(-2);
//     hoursTexts.textContent = `0${hours}`.slice(-2);
//     minutesTexts.textContent = `0${minutes}`.slice(-2);
//     secondsTexts.textContent =`0${seconds}`.slice(-2);

//    }
//    else{
//     return 0;
//    }
// }
// }
// setInterval(function(){
    //  countdown("Sat Jun 27 2023 00:09:30 GMT+0700 (Giờ Đông Dương)");
// },1000)
      
// });


//bt tỉp theo slider ảnh 
window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    // console.log("sliderItemWidth",sliderItemWidth);
    const sliderLength = sliderItems.length;
    let postionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
          handleChangeSlider(1);
    });

    prevBtn.addEventListener("click", function(){
        handleChangeSlider(-1);
    });
    [...dotItems].forEach((item) => 
    item.addEventListener("click",function(e){
        [...dotItems].forEach((el) => el.classList.remove("active")) ;
        e.target.classList.add("active");
        const sliderIndex = parseInt(e.target.dataset.index);
        console.log(sliderIndex);
        index = sliderIndex;
        postionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;

    })
    );


    function handleChangeSlider(direction){
        if(direction === 1){
            if(index >= sliderLength - 1) {
                index = sliderLength -1 ;
                return;
            }
            postionX =  postionX - sliderItemWidth;
            // console.log("handleChangeSlide ~ postionX", postionX);
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
            
        }
        else if(direction === -1){
            if (index <= 0){
                index = 0;
                return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--; 
        }
        [...dotItems].forEach((el) => el.classList.remove("active")) ;
        dotItems[index].classList.add("active");

    }

});