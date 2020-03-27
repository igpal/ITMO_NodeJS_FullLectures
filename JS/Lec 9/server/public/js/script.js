import { myUtils } from "./myUtils.js";

let str = "temp";
let new_str = myUtils.repeat(str, 3);
console.log(new_str);

let array = [
    { name: "sasha", age: 18 },
    { name: "ivan", age: 30 },
    { name: "petr", age: 45 }
];

console.log(myUtils.pluck(array, "age"));

let num1 = 10,
    num2 = 20;
setTimeout(() => {
    myUtils.sum(num1, num2, function(res) {
        console.log(res);
    })

}, 5000);