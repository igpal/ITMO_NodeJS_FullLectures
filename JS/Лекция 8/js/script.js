//МЕТРИКИ

let example = document.querySelector(".example");
console.log(example.offsetParent); // родитель с позиционированием отличным от умолчания
console.log(example.offsetLeft); // растояние слева от родителя
console.log(example.offsetTop); // растояние сверху от родителя
console.log(example.offsetWidth); // Ширина
console.log(example.offsetHeight); // высота
console.log(example.clientLeft); //border
console.log(example.clientTop); //border

console.log(example.clientWidth); //контент + паддинг не прокрутка
console.log(example.clientHeight); //контент + паддинг не прокрутка

console.log(example.scrollWidth); //контент + паддинг прокрутка
console.log(example.scrollHeight); //контент + паддинг прокрутка

console.log(example.scrollLeft); //
console.log(example.scrollTop); //

console.log(window.innerWidth); // Видимые области
console.log(window.innerHeight); //Видимые области

console.log(document.documentElement.clientWidth); // текущий размер документа без прокрутки
console.log(document.documentElement.clientHeight); //текущий размер документа без прокрутки

console.log(window.pageXOffset); // на сколько скрыт скроллом
console.log(window.pageYOffset); //на сколько скрыт скроллом

//Прокрутки
//Абсолютная
example.scrollTo(0, 50);
//Относительно текущего положения 
example.scrollBy(0, -30);
// прокрутка до видимости элемента
document.querySelector(".lighter").scrollIntoView(true);

//Координаты элемента относительно документа
let rect = example.getBoundingClientRect();
console.log(rect.top); // Y- верхней границы
console.log(rect.left); // Х - левой границы
console.log(rect.bottom); // Y- нижней границы
console.log(rect.right); // Х - правой границы

let style = window.getComputedStyle(example);
console.log(style);

function myFunction(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.pageY);
    console.log(e.pageX);
}


// События

function mF(e) {
    console.log("Обработчик клика");
}
example.onclick = mF;
example.addEventListener("click", () => alert("Еще одна обработка"), true); //Добавление обработчика события на один и тот же элемент