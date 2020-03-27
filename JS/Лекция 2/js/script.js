let checked = false;
let age = 18;

if (age < 18) {
    console.log("Пшёл нах");
} else {
    console.log("welcome");
}

let season = "sprqing";

/*if (season === "summer") {
    document.body.style.backgroundColor = "green";
} else if (season === "winter") {
    document.body.style.backgroundColor = "white";
} else if (season === "autumn") {
    document.body.style.backgroundColor = "yellow";
} else if (season === "spring") {
    document.body.style.backgroundColor = "pink";
} else {
    console.log("Пшёл нах");
}*/

//логические операторы 
// || - or
// &&- and
// ! - not

switch (season) {
    case "summer":
    case "spring": // можно быть доблаебом и использовать выражение в case
        document.body.style.backgroundColor = "green";
        break;
    case "winter":
        document.body.style.backgroundColor = "white";
        break;
    case "autumn":
        document.body.style.backgroundColor = "yellow";
        break;
    case "spring":
        document.body.style.backgroundColor = "pink";
        break;
    default:
        document.body.style.backgroundColor = "white";
}

//Циклы

// Цикол с предусловием:
/*  while(условие){
        тело цикла
    }
*/
let pwd = null;

/*while (pwd !== 'admin') {
    pwd = prompt("Введите пароль");
}*/



// Цикл с постусловием
/* 
a = 5;
do {
    console.log(a);
    a--;
    while(a);
}
*/

//For

/* let attemptCount = 5;
let answer = 456;

for (let i = 0; i < attemptCount; i++) {
    let data = prompt("Введите код");
    if (parseInt(data) === answer) {
        alert("Вы угадали");
        break;
    } else {
        alert("Осталось попыток " + (attemptCount - i - 1));
    }
}
*/

// Расчет З.П.
//Оклад
//кол-во раб дней
//кол-во отработанных дней

/* let salary = parseFloat(prompt("Ваш оклад")),
    workingDays = parseInt(prompt("Количество рабочих дней в месяце")),
    jobDays = parseInt(prompt("Количество отработанных дней")),
    result;

result = salary / workingDays * jobDays * 0.87;
alert(`Ваша з/п: "${result}`);

// Меню
let lang = +prompt("Выберите язык :\n 1 - Русский \n 2 - Английский \n 3 - Немецкий", 1);
switch (lang) {
    case 1:
        alert("Добро пожаловать!");
        break;
    case 2:
        alert("Welcome!");
        break;
    case 3:
        alert("Willcommen");
        break;
    default:
        alert("Все по русски");

}
*/

// 1 do 100
/*let s = 0;
for (let i = 1; i <= 100; i++) {
    s = s + i;
}
alert(s);
*/
let rowtemplate = `<tr><td style = "background-color:${color}">100</td></tr>`;
let template = `<table>${content}</table>`;
let content = "";
for (let i = 0; i < 20; i++) {
    let color = 'white';
    if (i % 2 === 0) {
        color = 'grey'
    }
    content += `<tr><td style = "background-color:${color}">100</td></tr>`;
}
document.write(`<table>${content}</table>`);