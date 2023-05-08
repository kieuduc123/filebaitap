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
