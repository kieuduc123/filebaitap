// keydown : khi nhấn xuống 

// const input = document.querySelector(".input");
// input.addEventListener("keydown", function(e){
//     // console.log(e.key);
//     // console.log(e.keyCode);//không khuyên dùng 

// });
// e.key khi nhan vao 
 // 2. keyup khi tha ra 
//  input.addEventListener("keyup", function(e){
//     // console.log(e.key);
    
//  });

 //3 keypress : sk này xảy ra khi nhấn phím 
 // thứ tự ưu tiên keydown -> keypress - up

 //keypress  các phim delete, mũi tên ....
//  input.addEventListener("keypress", function(e){
//     // console.log(e.key);
    
//  });

//  //4 change xảy ra khi gõ xong nhấn ra ngoài ;
//  input.addEventListener("change", function(e){
//     // console.log("working ");
//  });
//  //5 focus  khi nhan vao 
//  input.addEventListener("focus", function(e){
//     // console.log("input from valid");
//  });
// //6. blur khi click ra
//  input.addEventListener("blur", function(e){
//     // console.log("input blur");
//  });

 //7 submit form 
//  const form = document.querySelector(".form");
//  form.addEventListener("submit", function(e){
//        e.preventDefault();
    //    //this hoac e.target
    //    const username = this.elements["username"].value;
    //    const gender = this.elements["gender"].value;
       
    //    const hoby = this.querySelectorAll(`input[name="hobby"]`);
    //    console.log(hoby);
    //    let hobyValues = [];
    //    [...hoby].forEach((item) => hobyValues.push(item.value));
    //    console.log(hobyValues);
//     const username = this.elements["username"].value;
//     const password = this.elements["password"].value;
//     if(!username){
//         alert("please enter your name ");
//         return;
//     }
//     if(!password){
//         alert("please enter your password");
//         return;
//     }
//     if(password.length <= 6){
//         alert("too short");
//         return;
//     }
//  });

 //bt from hide passwork

//  window.addEventListener("load", function(){
//    const toggleInput = document.querySelector(".toggle");
//    toggleInput.addEventListener("click", function(){
//       const input = this.previousElementSibling;
//       console.log(input);
//       const inputType = input.getAttribute ("type");
//       if(inputType === "password"){
//          input.setAttribute("type","text");
//       } else{
//          input.setAttribute("type","password");
//       }
//    });
//  });

//bt tim kiem
window.addEventListener("load", function(){
    const input = document.querySelector(".input-search");
    const items = document.querySelectorAll(".dropdown-item");
    input.addEventListener("input", hanleHighlight);
    // input lay value moi khi chung ta go
    function hanleHighlight(e){
     let fullter = e.target.value;
      fullter = fullter.toLocaleLowerCase();
      // console.log(fullter);
      [...items].forEach((item) => {
         const  text = item.textContent.toLocaleLowerCase();
         const index = text.indexOf(fullter);
         console.log(index);
         if (index >= 0 && text.toLowerCase().startsWith(fullter.charAt(0))){
             item.innerHTML = `${text.substring(
               0, index
             )}<span class ="primary">${text.substring(
               index, index + fullter.length
             )}</span>${text.substring(index + fullter.length)}`;
         }
      });
    }
});