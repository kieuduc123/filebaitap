const button = document.querySelector(".button");


// button.addEventListener("mousemove", function(){
//     console.log("mousemove")
// })
//mouseover no se chay khi re chuot vao phan tu  va con cua ohan tu 
// button.addEventListener("mouseover", function(){
//     console.log("mouseover")
// })
//mouseenter no se chay khi re chuot vao phan tu 
// button.addEventListener("mouseenter", function(){
//     console.log("mouseenter")
// });

//mouseleave no se chay khi re chuot vao phan tu  roi re ra ngoai 
// button.addEventListener("mouseleave", function(){
//     console.log("mouseleave")
// })

document.addEventListener("mousemove", function(e){
    console.log(`pageY: ${e.pageY}`)
    console.log(`clienY: ${e.clientY}`)

});

//client no lay toa do theo viewport 
//page no se lay toa do theo document,khi ma co scrool no thay doi 
//x chieu ngay , y la chieu doc