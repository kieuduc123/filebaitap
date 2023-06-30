// event handler 
//onclick chấp nhận 1 event handler

//.button.onclick = handleClick ;
//.button.onclick = handleClick2 ;
//addEventListener : chaaps nhaan nhieu lan e 
 //button.addEventListener("click", handleClick);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelector(".container img");
window.addEventListener("scroll", function(){
    const windowScrollTop = window.pageYOffset;

    [...images].forEach((item) => {
        // const itemOffsetTop = item.offsetTop;
       if (windowScrollTop > item.offsetTop - item.offsetHeight /2 ){
        item.classList.add("active");
       }
    });
  });
});