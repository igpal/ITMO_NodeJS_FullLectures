//Итераторы

let arr = [1, 2, 3]; // массив — пример итерируемого объекта

for (let value of arr) {
	console.log(value); // 1, затем 2, затем 3
}

for (let char of "Привет") {
	console.log(char); // Выведет по одной букве: П, р, и, в, е, т
}