//Regular expression : Biểu thức chính quy 
//1. 2 cách khai báo với regex 

const re1 = /hello/;

const re2 = new RegExp ("Hello Word");

//RegExp.test(value) -> true
console.log(re1.test("hello"));

//2 . Anchor  ^ $
// ^ string bắt đầu với từ ddos
// $ string kết thúc với từ nào ddos

/hi/.test("Hi"); // true;

/hi$/.test("We com to Hi");// true;

/hi$/.test("We com to Ha Noi");// true;

/^hi/.test("Hi com to Hi");// true;

/^hi/.test("We com to Hi");// false;

//3. ranges []
//[a-z] : các ký tự từ a-z in thường 
//[A-Z] :  các ký tự từ a-z in Hoa 
//[0-9] : các ký tự 0-9;
//[a-z0-9A-Z]: các số từ 0-9 hoặc từ a-z hoặc từ A-Z

/[^a-z]/.test("addsuhd");//TRUE

/[A-Z]/.test("AKDNC"); //true

/[0-9]/.test("AKDNC"); //false

/[a-z0-9A-Z]/.test("sjdfbue08239r/////??????+++++?");

// 4. Meta charecters .
// mu ^ ỏ trong ngoac vuwong tuowng duowng phu dinh 

// \d : khớp với só nó tương đương với [0-9]

///\d/.test("1234");


///\D/.test("1234");  // \d : false khớp với ngươc lại tương đương với [^0-9]

// \w khớp với các lý tự và dấu gạch dưới và số , nó sẽ tương đương [a-zA-Z0-9_]

/\w/.test("1234_");

// \W khớp với các lý tự và dấu gạch dưới và số , ngược kaij tương đương [^a-zA-Z0-9_]
/\W/.test("1234_");//false

// \s khớp với các ký tự tương đương với khoảng trắng : phím cách tab newline;
/\s/.test(" "); //true

/\s/.test(""); //false
 // \n khớp với newline(xuống hàng)
// \t ; khớp với lại tab chẩracter
// \. : khớp vơi tất cả trừ newline 
// [^] khớp với tât cả mọi thư bao gồm newline ;

//5 . Quantifiers : {n} {n,m} +
 //string.match(regex) "abc".match(/\w/ -> []
// {n} ; sô lương mhaatj định 
//{n,m} sô lương trong khoảng ;
// + lấy 1 hoặc nhiều kí tự thoả dkiện 
 const str1 = "We com to 2023";

 console.log(str1.match(/\d/)[0]);
 console.log(str1.match(/\d{2}/)[0]);
 console.log(str1.match(/\d{1,4}/)[0]);

 const str2 = " color or colour?";
 //? co thẻ có hoặc không có  

 console.log(str2.match(/colou?r/g));//(2) ['color', 'colour']
 //flag 
 //g global lấy nhiều
 //i cáe ínensitive không phân biệt chữ cái thương ha hoa
 //m multipe lines ;
 //* khong có hoặc nhiều;

const  str3 = "12345";
console.log(str3.match(/\d?/g).join());
// 6.groups () la dau ()
/(\d{3})?(\w+)/.test("12322","wever");

//7 . escaping /\ [](){}!?><+-$#
// 8. boundaries \b dung doc lap \B dung thanh cum 

"My name isduc".match(/\Bduc/g); //duc

"My name isduc".match(/\Bduc/g); //duc

//9 
const str4 = "hello wecome to hello to my hello";

console.log(str4.replace("hello", "evondev"));

//string.replace(regex,value); replace la thay the 

str4.replace(/hello/g, "duc"); //'duc wecome to duc to my duc'
"welcome 122345".match(/\d+/g);


/// valid email
// const emailInput = document.querySelector(".input")
// emailInput.addEventListener("input", function(e){
//     const value = e.target.value;
//     const reguxEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (reguxEmail.test(value.trim())){
//         e.target.classList.add("valid");
//         e.target.classList.remove("invalid");


//     }
//     else{
//         console.log("invalid email");
//         e.target.classList.add("valid");
//         e.target.classList.remove("invalid");
//     }
//     if (!value){
//         e.target.remove("valid");
//     }
// });

// window.addEventListener("load",function(){
//     const passwordInput = document.querySelector(".input");
//     passwordInput.addEventListener("input",function(e){
//     const value = e.target.value;
//     const checkLengthClass = e.target.parentNode.querySelector(".check-lenght");
//     const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
//     const checkNumberClass = e.target.parentNode.querySelector(".check-number");
//     const checkSpecialClass = e.target.parentNode.querySelector(".check-special");

    
    
//     const checkItems = e.target.parentNode.querySelectorAll(".check-item")
//     if (!value){
//         [...checkItems].forEach((item) =>{
//             item.classList.remove("active");
//             item.classList.remove("unactive");
//         });
//         return;
//     }
//      if (value.lenght < 8){
//         checkLengthClass.classList.add("unactive");
//         checkLengthClass.classList.remove("active");
//      }
//      else{
//         checkLengthClass.classList.add("active");
//         checkLengthClass.classList.remove("unactive");
//      }
    //  if(!/[A-Z]/.test(value)){
    //     checkUpperClass.classList.add("unactive");
    //     checkUpperClass.classList.remove("active");
    //  }
    //  else{
    //     checkUpperClass.classList.add("unactive");
    //     checkUpperClass.classList.remove("active");
    //  }
     
    //  if(!/[0-9]/.test(value)){
    //     checkNumberClass.classList.add("unactive");
    //     checkNumberClass.classList.remove("active");
    //  }
    //  else{
    //     checkNumberClass.classList.add("unactive");
    //     checkNumberClass.classList.remove("active");
    //  }
      
    //  if(!/[$@^&()[\]}!]/.test(value)){
    //     checkSpecialClass.classList.add("unactive");
    //     checkSpecialClass.classList.remove("active");
    //  }
    //  else{
    //     checkSpecialClass.classList.add("unactive");
    //     checkSpecialClass.classList.remove("active");
    //  } 
    
//      passwordInputClass(checkUpperClass,value,/[A-Z]/);
//      passwordInputClass(checkNumberClass,value,/[0-9]/);
//      passwordInputClass(checkSpecialClass,value,/[$@^&()[\]}!]/);


// });

// function passwordInputClass(selector,value,regex){
//     if(!regex.test(value)){
//         selector.classList.add("unactive");
//         selector.classList.remove("active");
//     }
//     else{
//         selector.classList.add("active");
//         selector.classList.remove("unactive");

//     }
// }
// });


//removeEventListener

const button = document.querySelector(".button");
function handlMouseMove (e){
    console.log(e.clientX);
}
document.addEventListener("mousemove", function(e){
    console.log(e.clientX);
})
button.addEventListener("click", function(){
    document.removeEventListener("mousemove",function(e){
      console.log(e.clientX);
    })
})


