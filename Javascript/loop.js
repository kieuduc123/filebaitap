//vong lap
const numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++){
    //neu gia ri ow 8 thi dung 
    // if (numbers[i] === 8){
    //     break;
    // }
   if (numbers[i] === 8){
    continue;
   }

    console.log(`the value is ${numbers[i]}`);
}

//

for (let i = numbers.length - 1; i >= 0; i--)
    console.log(`the value is ${numbers[i]}`);
for (let j = numbers.length - 1; j >= 0; j--){
   console.log(j);
}
//1 sao chep mang dung vong lap for 
let copyArr = [];
//su dung push 
for (let i = 0; i < numbers.length; i++){
    copyArr.push(numbers[i]);
}
console.log(copyArr);
//2 Dao nguoc tu 
let str = "i love";
let result = "" //tao chuoi rong de noi 
for (let i = str.length - 1; i >= 0;i--){
    console.log(str[i]);
    result = result + str[i];
}

console.log(result);
//while va do while

let number = 1;
//while check dk xong lam 
while ( number > 10){
    console.log("nunber is" + number);
    number = number + 1;
    //number =+ 1;
    //number++;
}

let number2 = 1;
//do while chay xong voi check
do {
    number2++;
    // console.log("number" + number2);
}
while( number2 < 10);

//for of 
//for (value of array){}
let a = [];
 for (let value of numbers){
    value += 10;
    a.push(value);
 }
 console.log(a);

 for (let c of "duc"){
    console.log(c);
 }
 