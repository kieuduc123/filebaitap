// singgle thread ;
function task (message){
    let number = 1000000;
    while(number > 0);{
        number--;
    }
    console.log(message);
}
// console.log("start");
// task("Loading");
// console.log("end");

console.log("start");
setTimeout(() =>{
    task("Loading");

},1000);
console.log("end");

