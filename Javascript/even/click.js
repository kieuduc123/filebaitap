//addEventlistenner
const buttom = document.querySelector(".botton");
const spamm= document.querySelector(".button span");
function handleClick(){
    console.log("click butoon");
}
//loi sai khi dung function eventListner
// button.addEventListener("click", handleClick());
//e là even 
// spamm.addEventListener("click" ,function(e){
    //     e.stopPropagation();
    //     console.log("click span");
    // });
    // span.addEventListener("click", function(){
        //     console.log("click span")
        // });
        
        //  document.body.addEventListener("click",function(){
            
            //     console.log("click body");
            //  },{
                //     capture: true,
                //  });
                //bubbling : noi bot
                // su kien click chay tu torng ra ngoai
                // capture ; chay tu ngoai vao trong
                
                //
                // buttom.addEventListener("click", function(event){
                //     //event.target : nos se choon chinh xac element ma minh click toi
                //     console.log(`evennt.taget :${event.target}`);
                //     //event.currentTarget: no se chon phan tu ma minh clcik
                //     console.log(`event.currentTarget :${event.currentTarget}`);
                // });
//e.preventDefault ngan chan chuyen trang;
 const link = document.querySelector(".link");
                link.addEventListener("click",function(event){
                    event.preventDefault();
                    //lay custom attribute lay name data-abc
                    //.dataser.name
                    const name = event.target.dataset.name;
                    console.log(name);
                    //target.style lam thay doi mau 
                    //selector.style.property = value;
                    //e..tager.style.property = value;
                    // console.log(event.target);
                    // console.log(event.target.style);
                    // event.target.style.color = "red";
});

