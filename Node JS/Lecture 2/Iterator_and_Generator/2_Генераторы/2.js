//Генераторы

let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
let arr = [...myIterable];  // [1, 2, 3]
console.log(arr);