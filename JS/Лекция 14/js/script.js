let arr = ["asrf", "as", "qwerty", "q"];

let arr2 = arr.filter(function(str) {
    return str.length >= 5;
});
console.log(arr2);

let arrNum = [12, -10, 35];

let arrNum2 = arrNum.filter(function(num) {
    return num > 0;
}).map(function(num) {
    return num ** 0.5;
});
console.log(arrNum2);

let arrNew = arrNum.reduce(function(prev, curr) {
    return prev + curr;
}, 0);
console.log(arrNew);

let user = {};
Object.defineProperty(user, "name", {
    value: "Саша",
    configurable: true,
    writable: true,
    enumerable: true
});
console.log(user.name);