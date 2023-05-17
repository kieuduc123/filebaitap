//addEventlistenner
const buttom = document.querySelector(".botton");
const spamm= document.querySelector(".button span");
function handleClick(){
    console.log("click butoon");
}
//loi sai khi dung function eventListner
// button.addEventListener("click", handleClick());
buttom.addEventListener("click",handleClick);
//e là even 
spamm.addEventListener("click" ,function(e){
    e.stopPropagation();
    console.log("click span");
});
 document.body.addEventListener("click",function(){
    console.log("click body");
 });
//bubbling : noi bot
// su kien click chay tu torng ra ngoai