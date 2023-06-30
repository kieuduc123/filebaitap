// const button = document.querySelector(".change");

// button.addEventListener("click", handleChangeColor);
// //tao mang cac ma mau muon duyetj
// const colors = ["red","#333","#ffa400","#4f3a40"];

// function handleChangeColor () {
   
//     //lay ramdom mau tu mang colors 
//    const  color = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor =  color;
// }


// const buttonMinus = document.querySelector(".counter-descrease");
// const buttonPlus = document.querySelector(".counter-increease");
// const counterNumber = document.querySelector(".counter-number");

// let counterValue = parseInt(counterNumber.textContent);

// buttonPlus.addEventListener("click" ,function(){

//     if(counterValue >= 10) return 10;

//     counterValue++;
//     counterNumber.textContent = counterValue;
//     //    counterValue = counterValue + 1;
//     //    counterValue += 1;
// });

// buttonMinus.addEventListener("click" ,function(){
//     if(counterValue <= 0) return 0;
    
//     counterValue--;
//     counterNumber.textContent = counterValue;
// });


//
// window.addEventListener("load",function(){
//     const text  = document.querySelector(".text");
//     text.addEventListener("mouseenter", function(event){
//         const title = e.target.dataset.tooltip;
//         const tooltipDiv = document.createElement("div");
//         tooltipDiv.className = "tooltip-text";
//         tooltipDiv.textContent = title;
//         document.body.appendChild(tooltipDiv);
//         // su dung getBoundingClientRect() để có được kích thước và vị trí của một phần tử
//         const cords = e.target.getBoundingClientRect();
//         const{top,left,width} = cords;
//         const topHeight = tooltipDiv.offsetHeight;
//         const traiangpHeight = 20;
//         tooltipDiv.style.left = `${left - width / 2}px`;
//         tooltipDiv.style.top = `${top - topHeight - traiangpHeight}px`;  
//     });
//     text.addEventListener("mouseleave", function(e){
//         const tooltip = document.querySelector(".tooltip-text");
//         if (!tooltip) return;
//         tooltip.parentNode.removeChild(tooltip);
//     })
// });

///bt hover

// window.addEventListener("load", function(){
//     const links = [...document.querySelectorAll("menu-link")];
//     links.forEach((item) => item.addEventListener("mouseenter",hanldHover))
//     const line = document.createElement("div");
//     line.className = "line-offect";
//     document.body.appendChild(line);

//     function hanldHover(e){
//         const {left,top,width,height} = e.target.getBoundingClientRect();
//         console.log({left,top,width,height});
//         const offsetButton = 5;
//         line.style.width = `${width}px`;
//         line.style.left = `${left}px`;
//         line.style.top = `${top + height + offsetButton}px`;


//     }
//     const menu = document.querySelector(".menu")
//     menu.addEventListener("mouseleave", function(){
//         line.style.width = 0;
//     })
// });

//bt zoom anh
window.addEventListener("load", function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleHoverImage);
    const imageWarpper = document.querySelector(".image-warpper");
    let imageWarpperWidth = imageWarpper.offsetWidth;
    let imageWarpperHeight = imageWarpper.offsetHeight;

    const image = document.querySelector(".image");
    function handleHoverImage(e){
        const pX = e.pageX;
        const pY= e.pageY;
        image.style = "width: auto; height : auto; max-height :uset";
        //lay toa do that cua anh
        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetWidth;
        let spaceX = (imageWidth / 2 - imageWarpperWidth) * 2;
        let spaceY = (imageHeight / 2 - imageWarpperHeight) * 2;

        let ratioX = imageWidth /imageWarpperWidth/ 2;
        let ratioY = imageHeight /imageWarpperHeight/ 2;

        let x = pX * ratioX;
        let y = pY * ratioY;
        console.log(x);

        // console.log(imageWarpperWidth,imageWarpperHeight);
        image.style = `left :${-x}px;top :${0}px; width : auto; height : auto; max-height : unset;
        transform : none;`;
    }
    imageCover.addEventListener("mouseleave", handleLeaveImage);
    function handleLeaveImage(){
        image.style = ""
    }
    
});