console.log(document);
console.dir(document);
console.log(document.body);
let elem = document.getElementById("list");
console.log(elem);
console.log(elem.childNodes); // Все узлы (переносы и т.д)
console.log(elem.children); // Все теги
console.log(elem.firstChild); // первый ребенок (узлы)
console.log(elem.lastChild); // последний ребенок (узлы)
console.log(elem.firstElementChild); // первый ребенок (теги)
console.log(elem.lastElementChild); // первый ребенок (теги)

console.log(elem.previousSibling); // предыдущий узел
console.log(elem.nextSibling); // следующий узел

console.log(elem.previousElementSibling); // предыдущий тег
console.log(elem.nextElementSibling); // предыдущий тег

console.log(elem.parentNode); // родительский узел
console.log(elem.parentElement); // родительский тег


// Поиск по id
let list = document.getElementById("list");
//list.style.backgroundColor = "red";
console.log(list);

// Поиск по тегу
let liArr = list.getElementsByTagName("li");
for (let i = 0; i < liArr.length; i++) {
    liArr[i].style.color = "rgb(" + Math.floor(Math.random() * 255) + "," +
        Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    console.log(liArr[i]);
}

console.log(liArr);
// поиск по имени
let inputs = document.getElementsByName("data");
console.log(inputs);
// поиск по классу
let elemSomeClass = document.getElementsByClassName("some-class");
console.log(elemSomeClass);

//поиск по селектору
let q1 = list.querySelector("ul > li");
console.log(q1);

let q2 = list.querySelectorAll("ul > li")
console.log(q2);

let q3 = list.querySelectorAll(".some-class");
console.log(q3);

let q4 = document.querySelectorAll("input[type = text]");
console.log(q4);

// Создание новых тегов
let newElem = document.createElement("li");
console.log(newElem);

let text = document.createTextNode("Elem");
console.log(text);

newElem.appendChild(text);

// добавление элементов
list.children[0].appendChild(newElem);

let nav1 = document.getElementById("nav");
console.log(nav1);
console.log(nav);

let ul = document.createElement("ul");
nav.appendChild(ul);
let li = document.createElement("li");
li.innerHTML = "<a href = '#'> О нас</a>";

let li2 = document.createElement("li");
li2.innerHTML = "<a href = '#'>Продукты</a>";

ul.appendChild(li);
ul.prepend(li2);

ul.removeChild(li);

// работа с атрибутами
console.log(list.hasAttribute("id")); // есть ли атрибут

// получить атрибут
console.log(list.getAttribute("id"));

console.log(list.children[0].getAttribute("class"));
//Задать атрибут
list.setAttribute("data-id", "1") // data- Ваши атрибуты
list.setAttribute("style", "border: 1px solid black;");
console.log(list);
console.log(list.id);
console.log(list.tagName);

//Стили

console.log(list.style);
console.log(list.style.border);

// Классы
list.classList.add("green");
list.classList.add("big");
console.log(list.classList);
list.classList.remove("big");
console.log(list.classList);

console.log(list.classList.contains("green"));
console.log(list.classList.toggle("small"));
console.log(list.classList);

console.log(table);
console.log(table.rows);
console.log(table.rows[0].cells);

// Таймеры
/*let i = 0;

function showAlert() {
    alert("Hello");
    if (i++ < 10)
        setTimeout(showAlert, 2000);
}
showAlert();
*/

/*let i = 0,
    idTimer;

function showAlert() {
    alert("Hello");
    idTimer = setInterval(showAlert(), 2000);
    if (i++ >= 5)
        clearInterval(idTimer);
    clearTimeout(idTimer);
}
showAlert();
*/

// даты

let myDate = new Date();
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());