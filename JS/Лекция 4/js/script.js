let str = "ttertretert",
    srt1 = 'dgfdgererer',
    str2 = `werwer${str}twer`;

let str3 = "a";
str3 += "b";

console.log(str3.toLocaleUpperCase());
console.log(str3.toLocaleLowerCase());

console.log(str3.startsWith("a"));
console.log(str3.endsWith("b"));

console.log(str3.repeat(4));
console.log(str3.includes("b"));

let str4 = "9999";
console.log(str4.padStart(6, "0"));
console.log(str4.padEnd(6, "0"));

let str5 = str4.padEnd(20, "hello");
console.log(str5.substr(4, 2));
console.log(str5.substring(4, 6));
console.log(str5.slice(4, 2));
console.log(str5.charCodeAt(0));
console.log(String.fromCharCode(57));

////////////////////////////////////////////////////////////////////////
//Регулярные выражения
let str6 = "Я люблю JavaScript!!!";
let regExp = new RegExp("лю", "");
let result = str6.search(regExp);
console.log(result);

regExp = /Лю/i; // i - убирает чувствительность к регистру
str6 = "Ой-ой-ой";
regExp = /ой/ig // g - все вхождения;
console.log(str6.match(regExp));
str6 = "asad";
console.log(str6.replace(/a/ig, "b"));

str6 = "Привет мир!!!!";
regExp = /мир/i;
console.log(regExp.test(str6));

str6 = "Ой-ой-ой";
regExp = /ой/ig;
/*console.log(regExp.exec(str6));
console.log(regExp.exec(str6));
console.log(regExp.exec(str6));
console.log(regExp.exec(str6));
console.log(regExp.exec(str6));
*/
let r;
while (r = regExp.exec(str6)) {
    console.log(`${r.index} ${r[0]}`);

}

str6 = "";
regExp = /CS.4/s // . любой символ, кроме \n // s - включает учет переноса строки

console.log("CSS4".match(regExp));
console.log("CS-4".match(regExp));
console.log("CS 4".match(regExp));
console.log("CS\n4".match(regExp));


// ДИАПОЗОНЫ
str6 = "Жили были";
regExp = /[жб][иы]ли/ig;
console.log(str6.match(regExp));

str6 = "Саша + Маша так же как Даша + Паша";
regExp = /[А-Я]аша/ig;
console.log(str6.match(regExp));

str6 = "Этот компьютер нам обошелся в 10000 рублей.";
regExp = /[^А-Я .]/ig; // [^] - Исключает
console.log(str6.match(regExp));

str6 = "My name is Alex";
regExp = /\w\w\s\w\w\w\w/ig // \w - английский алфавит, цифры, подчернкивания \s - знаки препинания, перненосы
console.log(str6.match(regExp));

regExp = /\b\w\w\b/ig; // \b - граница слова
console.log(str6.match(regExp));

regExp = /\w\w/ig;
console.log(str6.match(regExp));

str6 = "MEVN стек включает: HTML,CSS, JS";
regExp = /(HTML|CSS|JS)/ig;
console.log(str6.match(regExp));

str6 = "100500 попугаев съели 500100 бананов";
regExp = /\d/ig; // \d - цифры
console.log(str6.match(regExp));

// \Заглавная буква - Исключение.

//Квантификаторы
// + {1,}
str6 = "100500 попугаев съели 500100 бананов";
regExp = /\d+/ig; // {} - от 1 до сколь угодно раз
console.log(str6.match(regExp));

str6 = "100500 попугаев съели 500100 бананов";
regExp = /^\d+/ig; // ^ - Начало предложения
console.log(str6.match(regExp));

str6 = "100500 попугаев съели 500100 бананов";
regExp = /\D+$/ig; // $ - конец предложения
console.log(str6.match(regExp));

str6 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";
regExp = /^\w+/img; - // m - многострочный режим для абзацов
console.log(str6.match(regExp));

//Квантификатор *
str6 = "100 10 1";
regExp = /10*/ig; // - * от нуля и более раз
console.log(str6.match(regExp));

//Квантификатор ?
str6 = "Привет. Приветик";
regExp = /[а-яё] {6} (ик)?/ig; // ? - ноль или один раз
console.log(str6.match(regExp));

str6 = "Я взрослый (18+)!";
regExp = /\(\d+\+\)/ig;
console.log(str6.match(regExp));

// проверка телефонного номера вида
// 7 (921) 911-51-97
str6 = "7 (921) 911-51-97";
regExp = /7 \(\d{3}\) \d{3}-\d{2}-\d{2}/ig;
console.log(regExp.test(str6));

//Валидация почты itmo@info.ru
str6 = "itmo@info.ru";
regExp = /(\w+\.?)(@\w+\.)+\w+/;
console.log(regExp.test(str6));

str6 = '"Ведьма" и её "метла" одно целое';
regExp = /".+"/ig; // - жадный режим
console.log(str6.match(regExp));

str6 = '"Ведьма" и её "метла" одно целое';
regExp = /".+?"/ig; // - одно совпадение
console.log(str6.match(regExp));