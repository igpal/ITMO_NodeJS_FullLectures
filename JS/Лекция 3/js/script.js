let arr = new Array();
let arr1 = [];

console.log(arr);
console.log(arr1);

let lessons = ['история', 'химия', 'математика'];
console.log(lessons);
console.log(lessons[0]);
console.log(lessons[1]);
console.log(lessons[2]);

lessons[2] = 'русский язык';
console.log(lessons);

lessons[90] = 'литература';

let lessonsLength = lessons.length;

lessons = ['история', 'химия', 'математика'];

for (let i = 0; i < lessons.length; i++) {
    console.log('Lesson ' + lessons[i]);
}

//стек
//Array.pop()// забирает и возвратщает последнее значение
//Array.push(); вставляет в конец
let temp = lessons.pop();
console.log(temp);
console.log(lessons);
lessons.push('литература');
console.log(lessons);

//Очередь
//Array.shift()// забирает и возвратщает первое значение
//Array.unshift(); вставляет в начало

// замер производительности
/*console.time("10000 push/pop");

let test = [];
for (let index = 0; index < 10000; index++) {
    test.push(index);

}
for (let index = 0; index < 10000; index++) {
    test.pop();

}
console.timeEnd("10000 push/pop");


console.time("10000 unshift/shift");

let test1 = [];
for (let index = 0; index < 10000; index++) {
    test1.unshift(index);

}
for (let index = 0; index < 10000; index++) {
    test1.shift();

}
console.timeEnd("10000 unshift/shift");

*/

lessons = ['история', 'химия', 'математика'];
lessons.length = 100;
console.log(lessons);
lessons.length = 2;
console.log(lessons);

let str = "qwe-rty-uio-asd-fgh";
let arr2 = str.split("-");
console.log(arr2);

let str2 = arr2.join("+");
console.log(str2);
//Удаление из массива
lessons = ['история', 'химия', 'математика'];
temp = lessons.splice(1, 1);
console.log(lessons);
console.log(temp);
//Копирование
lessons = ['история', 'химия', 'математика'];
temp = lessons.slice();
console.log(lessons);
console.log(temp);

//Соедингение массивов
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let arrC = arrA.concat(arrB);
console.log(arrC);

let matrix = [
    [1, 2, 4],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]) //5

let mass = [1, true, "sfsdf", [23, 45]];

for (let b = 0; b < mass.length; b++) {

    console.log(Array.isArray(mass[b]));
}

console.log(arrA.indexOf(3));

lessons = ['история', 'химия', 'математика'];
console.log(lessons.includes('химия'));
//console.log(lessons.toString);

let pics = ['1.jpg', '2.jpg', '3.jpg'];

for (let q = 0; q < pics.length; q++) {
    let img = document.createElement('img');
    img.setAttribute('src', 'image/' + pics[q]);
    document.getElementById('slider').appendChild(img);
}

let mass2 = [2, 3, 7, 13, 5, 0, 20];
let min = mass[0],
    max = mass[0];
sum = mass[1];
for (let i = 1; i < mass2.length; i++) {
    if (mass2[i] > max) {
        max = mass2[i];
    }
    if (mass2[i] < min) {
        min = mass2[i];
    }
    sum += mass2[i];
}
console.log(max, min, sum);
mass2.pop();
mass.shift();
console.log(mass);

//Пузырек
mass2 = [2, 3, 7, 13, 5, 0, 20];
console.log(mass2);
for (let i = 0; i < mass2.length - 1; i++) { // один проход
    for (let j = 0; j < mass2.length - 1 - i; j++) { // одно попарное сравнение
        if (mass2[j] > mass2[j + 1]) {
            let temp = mass2[j];
            mass2[j] = mass2[j + 1];
            mass2[j + 1] = temp;
        }

    }
}
console.log(mass2);
let count = 0;
for (let i = 0; i <= 23; i++) {
    let t, t_reverse, val_reverse;
    if (i < 10) {
        t = '0' + i;
    } else t = i.toString();
    t_reverse = t.split('').reverse().join('');
    val_reverse = parseInt(t_reverse);
    if (val_reverse <= 59) {
        count++;
        console.log(`${t} ${t_reverse}`)
    }
}
console.log(count);