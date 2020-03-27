// Анонимные функции - функциональное выражение
let subNums = function(a, b) {
    return a - b;
}

console.log(subNums(10, 25));

! function(a, b) {
    console.log(a - b);
}(7, 5);


// Стрелочные функции =>
subNums = (a, b) => a - b;
console.log(subNums(10, 25));

function delay(cb) {
    setTimeout(() => {
        cb();
    }, 2000)
}
delay(() => {
    console.log("Текст через 2 секунды");
})

// Объекты
let obj = new Object(),
    obj2 = {},
    num = 123;

let article = {
    id: 1,
    tittle: 'Фотография',
    author: 'Peter',
    descreption: 'Описание статьи',
    " ": "qwerty",
    null: null,
    true: true,
    [1 + 2]: 3,
    num

};
console.log(article);
console.log(article.author);
console.log(article.id);
console.log(article.tittle);
console.log(article.descreption);
console.log(article[" "]);
console.log(article[null]);
console.log(article.true);
console.log(article[3]);
console.log(article.num);

article.img = "/img.jpg";
console.log(article.img);
article.img = "/img2.jpg";

delete article.img;
console.log(article);

console.log("img" in article); // есть ли свойство
console.log("num" in article);

console.log(article.hasOwnProperty("tittle")); // есть ли свойство

for (let key in article) {
    console.log(key + " " + article[key]);
}

let arr = [1, 2, 3, 4, 5, 6];
for (let key in arr) { // ЦИКЛ FOR IN
    console.log(key + " " + arr[key]);
}

console.log(Object.keys(article).includes("author")); // свойства
console.log(Object.entries(article)); //ключ значение
console.log(Object.values(article)); // значения

let articles = [{
        id: 1,
        title: "JS",
        description: "qwertrererte",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "sarfsrfssf",
        author: "Jhon"
    },
    {
        id: 3,
        title: "HTML",
        description: "qwe12344rtrererte",
        author: "Mike"
    }
];

console.log(getData(articles, "author", "Mike"));

function getData(arr, propName, propValue) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][propName] === propValue) {
            arrRes.push(arr[i]);
        }
    }
    return arrRes;
}


//Деструктаризация ES6
let userData = ["root", "123", 56, "Peter"];

let [login, pass, age, name] = userData;
let [login1, pass1, age1, ...other] = userData; // Если не известно сколько элементов в массиве
console.log(other);

let { id, title, description, author } = articles[0]; // Деструктаризация Объекта
console.log(id);
console.log(title);
console.log(description);
console.log(author);

/*let { id, title: xxx, description, author } = articles[0]; // :xxx Замена имени свойства, с сохранением значения
console.log(id);
console.log(xxx);
console.log(description);
console.log(author);
*/
function someF({ id, title, description }) {
    console.log(id);
    console.log(title);
    console.log(description);
}
someF(articles[0]);



let obj1 = {
    a1: 1,
    b2: 2,
    c: {
        d: 2,
        e: 3
    }
}

let { a, b2, c: { d, e: f } } = obj1;
console.log(a);
console.log(b2);
console.log(d);
console.log(f);

/*let menu {
    items: [{
            label: "О нас",
            href: "/about.html",
            items: [{
                label: "Контакты",
                href: "/about.html"
            }, {
                label: "Продукты",
                href: "/produkt.html"
            }]
        },

    ]
}
*/

let x1 = 23,
    x2 = 32;
console.log(x1);
console.log(x2);
[x2, x1] = [x1, x2];
console.log(x1);
console.log(x2);