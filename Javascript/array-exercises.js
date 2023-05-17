//1. cho 1 mang gom nhieu gia tri [1,100. false, null , "duc", "", undefinded, "javascript", [1,,2,3]. viet chuong trinh loaij bo falsy ra khỏi mảng chỉ giữ lại giá trị truthy. gợi ý giá trị falsy là 0 null undefined false " NaN"
const array = 
      [1,100,
      false,
       null , 
       "duc", 
       "", 
       undefined, 
       "javascript", 
       [1,,2,3]];

       const filterFalsy = array.filter((item) => Boolean(item));
       console.log(filterFalsy);

//2 : Cho 1 mảng phức tạp [[1,2,3],[false,null]],[1,5,6,["java","php"]],[88,98[90]].Và kết quả mong đợit là thành gop 1 mảng 
// su dung flat loai bo phan tu con
const conplexArray = [
    [[1,2,3],[false,null]],
    [1,5,6,["java","php"]],
    [88,98[90]]
];
const result = conplexArray.flat(3);
console.log(result);
// 3 Đảo ngược 1 số nguyên .
//Math.sign(1999) tra ve so duong 1
//Math.sign(-2000) tra ve so duong -1

function reverseNumber(number){
    const value = parseInt(number.toString()
    .split("")
    .reverse()
    .join("")) *
    Math.sign(number);
    console.log(value);
}
reverseNumber(-1234);
//4. Viết chương trình có tên fizzBuzz với đầu vào là 1 số nguyên , và cho chạy từ 1 tơis số nguyên đó rồi kiểm tra nêu có sô chia hết cho 2 thì in ra "Fizz", nếu chưa hết cho 3 thì in ra chữ "Buzz ", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz";
 
function fizzBuzz(number){
    for (let i = 1; i <= number; i++){
        if(i % 2 === 0 & i % 3 === 0){
            console.log("FizzBuzz")
            
        }
        else if (i % 2 === 0){
            console.log("Fizz")
        }
        else if ( i % 3 === 0){
            console.log("Buzz")
        }
    }
}
fizzBuzz(9);
//5. cho 1 chuôix bất kỳ , đếm sô lượng kí tự ''vowels' có trong chuôix 
//vowels là các kí tự trong u e o a i
//ví dụ "evondev" --> 3

function conuntVowels (str){
    let conunt = 0;
    const characters = "euoai";
    for( let c of str){
        if (characters.includes(c))
        conunt = conunt + 1;
    }
    return conunt;
}
console.log(conuntVowels("evondev"));

//6. cho 1 mảng giá trị [1,2,3,1,2,3,4,5,6]. Viết 1 function trả về giá trị unique . kết quả là [1,2,3,4,5,6]

function unique(arr){
    let result = [];
    if(!Array.isArray(arr))
    return result;
    for( let i = 0; i < array.length; i++){
        if (!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(unique([1,2,3,1,2,3,4,5,6]));

//7. Viết 1 chương trình xủ lý 1 mảng lơn thành nhiều mảng dưaj trên số nguyên đầu vào . ([1,2,3,4,5,6]2) ->[1,2],[3,4],[5,6]

function splitArray(array, number){
    let result = [];
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index,number + index));
        index = index + number;
    }
    console.log(result)
    return result;

}
splitArray([1,2,3,4,5,6],2);