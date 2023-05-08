//Cách khai báo ct 
//object literal
const objectLiteral = {};
//object constructor
const objectConstructor = new Object()

const student = {
    name : "Duc",
    age : 27,
    male : true,
    "last-name" : "DUC",
    hi: function(){
        console.log("Hello Duc");
    },
};

//properties 
//method
//2 cach truy xuat gia tri cua object 
//2.1 Dot notation

console.log(student.age);

//2.2 Bracket natation ["key"]

console.log(student["last-name"]);

//Thay đổi giá trị object
student.age = 22;
student.male = "male";
student.isDevoloper = true;
student["is-devoloper"] = false;

console.log(student);

// Xoá giá trị trong object 
delete student["last-name"];

//for in su dung trong object duyet qua cac key 

for (let key in student){
    console.log(`${key}${student[key]}`);
}

//object.keys() -> tra ve 1 magn chua tat ca cac key cua object

const object = Object.keys(student);
console.log(object);

//Object.values() -> tra ve mang chua tat ca cac values object;

const values = Object.values(student);
console.log(values);

//Object.entries(object) -> tra ve 1 mang nested [co key va value] vi du ["name","duc" ]

const entries = Object.entries(student);
console.log(entries);

//Object.assign() // copy value 

const a = {
    firsName : "Duc"
}
const b = {
    lastName: "Kieu"
};

const c = Object.assign(a,b);

console.log(c);
const d = {...a,...b};
//..
//Object.freeze(object) -> ngan chan chỉnh sửa key và value trong object

const car = {
    brand: "BMW",
};

const newCar = Object.freeze(car);

newCar.brand = "MEC";

console.log(newCar);

//Object.seal(object) -> cho phep chinh sua key va value nhung khong dc them  key value moi.

const user = {
    userName : "Kieu Trung Duc",
    school : {
      name: "Ton That Thuyet",
      room:{
        name:"IT",
    },
},
}

// const userName = Object.seal(user);
 
// userName.userName = "Duc Front end";
// userName.lastName = "Duc Back end";

// console.log(userName);

//[...array],{...object}
//

const newUser = {
    ...user
};

newUser.userName = "Front end";

console.log(user);
console.log(newUser);

//Object.assign sao chep 
const newUser2 = Object.assign({},user);
console.log(newUser2);

//clone nested object

const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer"
console.log("New User3");

console.log(newUser3);

//this keyword
//this nó sẽ đề cập tới phương thức gần nhất .
const student2 = {
    name : "Duc",
    age : 27,
    male : true,
    "last-name" : "DUC",
    hi: function(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    },
    fullName :{
        name : "Hello"

    }
};
student2.hi();

//option chaining

console.log(student.fullName); //undefined

if (student2.fullName){
    if(student2.fullName.name){
        console.log(student2.fullName.name)
    }
}
//cach rut gon  su dung option chaining
console.log(student2.fullName?.name);

//destructuring object 
const{name,age,male,...rest} =student2;
console.log(rest);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;

// function whatYourInfo (name,age,school){
//     console.log(name,age,school);
// }
// whatYourInfo("DUC",22,"FPT");
// whatYourInfo(22,"duc","FPT");

//function with object paremeter
function whatYourInfo (obj){
    console.log(obj.name,obj.age,obj.school);
}
const newObj = {
    school: "FPT",
    age: 22,
    name: "Duc"
}

whatYourInfo(newObj);
//object  destructuring paremeter

function whatYourInfo ({name,age,school}){
    console.log(name,age,school);
}
whatYourInfo({
    school : "FPT",
    age: 28,
    name:"DUC",
});