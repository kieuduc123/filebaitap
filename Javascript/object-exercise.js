//1 Viết 1 function kiểm tra value có phải là object không ?

function isObject(value){
    if( typeof value === "object" && !Array.isArray(value) && value !== null){
        return true;
    }
    return false;
}
//plain object -> true else return false;
//console.log(isObject({}));

//2 { a: 1, b:2};
function objectToArray(object){
    //check neeu khong phai object thi dung
    if (!isObject(object)) 
    return;

    //neu là object thì xử lý
   // return Object.entries(object);
   //c2
//    const value = Object.keys(object).map((key) =>[key,object[key]])
//    return value;
   //c3
   let result = [];
   for( let key in object){
    // sử dụng hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại false
    if(object.hasOwnProperty(key)){
        result.push([key,object[key]]);
    }
   }
   return result;
}
console.log(objectToArray({a : 1,b : 2}));

//3. Xoa key ({a:1, b:2}) -> {a:1}
function without(object,...key){
    //spread operator
    const newObject = {...object} 
    key.forEach((item) =>{
        delete newObject[item];
    });
    return newObject;
    // delete object[key]
   // return object;
}

console.log(without({a:1,b:2},"b"));

//4. So sanh mang cos bang nhau khong {a:1, b:2}, {a:1, b:2,c:3}
function isEquaiObject(obj1,obj2){
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if (objkey1.length !== objkey2.length) return false;
    //check values of two object
    //[a,b] -> object[a] || object[2]

    const result = objkey1.every((key) => obj1[key] === obj2[key]);
    return result;
}

console.log(isEquaiObject({a:1, b:2}, {a:1, b:2}));