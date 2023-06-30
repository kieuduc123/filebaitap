// su kien scroll 
// window.addEventListener("scroll", function(e){
//     console.log("scroll");
// });
//2 debounce là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
 
//3 window.pageYoffset : là khoảng cách scroll của window theo chiều dọc so vơi tren cung 
// và  windown.pageXOffset khoảng cáchs scroll của windon theo chiều ngnag so vơi bên trái


//4. scroll Height ,Width , Top
//scrollHeight tra vef ve chieu cao element bao gom padding khong co border
//scrollWidth tra vef ve chieu rong element bao gom padding khong co border

//
// const boxed = document.querySelector(".box");
// boxed.addEventListener("scroll", function(){
//     console.log(boxed.scrollTop);
// });

//5 scrollwidth vơi ofsetWidth 
//boxed.offsetWidth -> 200
//box.scrollWidth => 200

//6 scrollIntoView : scroll toi pham vi mà co the thay no 


//bai tap 
// function debounce_leading(func, timeout = 300){
//     let timer;
//     return (...args) => {
//       if (!timer) {
//         func.apply(this, args);
//       }
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         timer = undefined;
//       }, timeout);
//     };
//   }

// const header = document.querySelector(".header");
// const headerHeight = header && header.offsetHeight;
// // bt tieep theo 
// const progress = document.querySelector(".progress")
// window.addEventListener("scroll", debounce_leading(function(e){
    //  const scrollY = window.pageYOffset;
    //  console.log(scrollY);
    //  if(scrollY >= headerHeight){
    //     header && header.classList.add("is-show");
    //     document.body.style.paddingTop = `${headerHeight}px`
    //     // if(header){
    //     //     header.classList.add("is-show");
    //     // }
    //  }
    //  else{
    //     header && header.classList.remove("is-show");
    //     document.body.classList.remove(".has-space");
    //     document.body.style.paddingTop = 0; 
    //  }
 
//

//   const scrollTop = window.pageYOffset;
//   const height =
//   document.documentElement.scrollHeight - 
//   document.documentElement.clientHeight;
//   const width = (scrollTop / height) *100;
//   progress.style.width =    `${width}%`;
// },50));


window.addEventListener("load", function(){ 
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList =  document.querySelector(".tab-list");
    const tab =  document.querySelector(".tab");
    const tabOffsetLeft = tab.offsetLeft;
    const tabNext = document.querySelector(".tab-next");    
    const tabPrev = document.querySelector(".tab-prev");
    const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
    

   let daltaScroll = 40;
//    const firstTabWidth = tabItems[0].offsetWidth;
//    const lastTabWidth = tabItems[tabItems.length-1].offsetWidth;
    [ ...tabItems].forEach((item) => 
    item.addEventListener("click", handletabClick)
    );

    function handletabClick(e){
        [ ...tabItems].forEach((item) => item.classList.remove("active"));
        e.target.classList.add("active");
        let leftSpacing = e.target.offsetLeft;
        if (e.targer.offsetLeft >= tabOffsetLeft){
            leftSpacing = e.targer.offsetLeft - tabOffsetLeft;
        }
        console.log("handletabClick ~ ledtSpacing", leftSpacing);
        tabList.scroll(leftSpacing / 2, 0);
    }
    tabList.addEventListener("wheel",function(e){
        const delta = e.deltaY;
        this.scrollLeft  +=  delta;
        if( this.scrollLeft > 0  ){
            tabPrev.classList.remove("disabled");
        } else {
            tabNext.classList.remove("disabled");
        }
        if(tabList.scrollLeft >= tabScrollWidth )
        {
            tabNext.classList.add("disabled");
        }else if (this.scrollLeft <= 0){
            tabPrev.classList.add("disabled");
        }

    });
    tabNext.addEventListener("click",function(e){
        tabPrev.classList.remove("disabled");
        tabList.scrollLeft += daltaScroll;
        console.log(tabList.scrollLeft);
        if(tabList.scrollLeft >= tabScrollWidth)
        {
            this.classList.add("disabled");
        }

    });
    tabPrev.addEventListener("click",function(e){
        tabNext.classList.remove("disabled");
        tabList.scrollLeft -= daltaScroll;
        console.log(tabList.scrollLeft);
        if(tabList.scrollLeft <= 0)
        {
            this.classList.add("disabled");
        }

    });
});