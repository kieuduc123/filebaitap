//Cách khai báo object 
//object literal
const ọbjectLiteral = {};
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

