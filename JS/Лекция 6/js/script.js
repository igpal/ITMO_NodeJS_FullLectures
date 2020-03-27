//Копирование первого уровня
let user = {},
    user_1 = {
        name: "Gleb",
        age: 32
    }
for (const key in user_1) {
    user[key] = user_1[key];
}
user.name = "Vova";
console.log(user.name);
console.log(user_1.name);

// Альтернатива
let user_2 = {};
Object.assign(user_2, user_1);
console.log(user.name);
console.log(user_2.name);

// Альтернатива 2
let user_3 = {...user_1 };
user_3.name = "Peter";
console.log(user.name);
console.log(user_3.name);

var x = 1; // х - глобальная переменная
let y = 2; // y - глобальная переменная

function Sqrt(z) { // z - 
    // локальная переменная
    let result = x * y * z;
    console.dir(Sqrt);
    console.log(result);

}
Sqrt(3);
console.dir(Sqrt);
// Var - создает свойство у обхекта Window (Главный объект)
// let - не создает....

function display() {
    zzz = 123;
    console.log(zzz);
}
display();
console.log(zzz);

let num1 = 3,
    num2 = 4;

function display2() {
    console.log(num1); // undefined
    var num1 = 10;
    /*console.log(num2); // error
    let num2 = 8;
*/
}

display2();

//Замыкание
function outName(name, lastnamae) {
    function getName() {
        return name + " " + lastnamae;
    }
    return getName;
}
let getName = outName("Ivan", "Ivanov");
console.log(getName);
console.log(getName());

//Счетчик

function createCounter() {
    let i = 0;
    return function() {
        return ++i;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

//Шаблоны каррирование
function diff(a) {
    return function(b) {
        return a - b;
    }
}

console.log(diff(3)(2));

let arr = [];
for (var i = 0; i < 5; i++) {
    arr.push(function() {
        return i
    })
}
console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
console.log(arr[4]());


let arr2 = [];
for (let i = 0; i < 5; i++) {
    arr2.push(function() {
        return i
    })
}
console.log(arr2[0]());
console.log(arr2[1]());
console.log(arr2[2]());
console.log(arr2[3]());
console.log(arr2[4]());


// this
function myFunc() {
    return this;
}

console.log(this);
console.log(myFunc());

// Метод объекта
let myObj = {
    propA: 27,
    getA: function() {
        return this.propA;
    }
}

console.log(myObj.getA());

let user6 = {
    name: "Sahsa",
    getUserName: function() {
        return this.name;
    }
}

//console.log(user6.getName());
let func = user6.getUserName;
console.log(func.call({ name: "Peter" }));
console.log(func.apply(user6));

function getUserName2() {
    return this.name;
}
let z = getUserName2.bind(user) // Навсегда
function xa() {
    let that = this;
    return function() {
        return that.name;
    }
}

let xxx = xa.call({ name: "wrwer" });
console.log(xxx.call({ name: "123" }));


//Рекурсия
function writeN(n) {
    if (n >= 0) {
        console.log(n);
        writeN(n - 1);
    }
}
writeN(3);

let arr5 = [1, 2, 3, 11, 22, 33];
arr5.sort((n1, n2) => {
    if (n1 > n2) {
        return 1;
    } else if (n1 < n2) {
        return -1;
    } else {
        return 0;
    }

});
console.log(arr5);