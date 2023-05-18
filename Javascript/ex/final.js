// const button = document.querySelector(".change");

// button.addEventListener("click", handleChangeColor);
// //tao mang cac ma mau muon duyetj
// const colors = ["red","#333","#ffa400","#4f3a40"];

// function handleChangeColor () {
   
//     //lay ramdom mau tu mang colors 
//    const  color = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor =  color;
// }

const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increease");
const counterNumber = document.querySelector(".counter-number");

let counterValue = parseInt(counterNumber.textContent);

buttonPlus.addEventListener("click" ,function(){

    if(counterValue >= 10) return 10;

    counterValue++;
    counterNumber.textContent = counterValue;
    //    counterValue = counterValue + 1;
    //    counterValue += 1;
});

buttonMinus.addEventListener("click" ,function(){
    if(counterValue <= 0) return 0;
    
    counterValue--;
    counterNumber.textContent = counterValue;
});


