"use strict" //"Строгий" режим
console.log("Test");
//Объявление переменной
var login;
let password;
//Определение переменной
login = "admin";
password = "admin";

console.log(login);

//Переопределение переменной
login = 123;
console.log(login);

//Инициализация пеерменной
let a = 1,
    b = 2;

//Константы
const CONST_VALUE = 10;
//alert(3 + 2 + 1);

//Типы данных

// Числа
let heigth = 123;
let width = 123.45;

//Строки
let str = "String";
let str2 = 'String2';
//Шаблонная строка
let str3 = ``;
//Экранирование символов
let str4 = "Str\"ing";
console.log(str4);


//Логические
let active = true;
let stopped = false;


//Значение не опрределено
let unknowValue = null;
console.log(unknowValue);

//Значение не присвоено
let undefinedVal1;
console.log(undefinedVal1);

console.log(typeof active);

let q = parseInt("123");
let f = parseFloat("123.456");
console.log(q);
console.log(f);

//Операторы
//Арифметические
// + - */ %
// **-Возведение в степень

console.log('2' + 5) //25;
console.log(5 + '2') //25;
console.log(+'2' + 5) //7;

console.log(5 / "f") // NaN - Не число
console.log(isNaN("sat")); //true
console.log(isNaN("7")); //false

console.log(5 / 0); //Infinity
console.log(-5 / 0); //-Infinity

console.log(isFinite(5 / 0));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//Операторы присваивания
// = += -= *= /= %=

let w = 10;
w += 20;
console.log(w);


//Операторы сравнения
// == (Равенство)
// === (строгое равеноство)
//!= (Неравенство)
//!== (строгое неравенство)

let str_test = "20";
let num1 = 20;
let num2 = 10;
console.log(str_test == num1) // true
console.log(str_test === num1) // false

//Операторы инкремент(++) и декремент(--)
num1 = 1;
num2 = 2
console.log(++num1) //3
console.log(num2++) //2
console.log(num2) //3

//Тернарный оператор
//(условие)?выражение1:выражение2
let t = -5;
let res = (t < 0) ? -t : t;


let data = prompt("Веедите данные", "0");
console.log(data);

let answer = confirm("Вам есть 18 лет");
console.log(answer);