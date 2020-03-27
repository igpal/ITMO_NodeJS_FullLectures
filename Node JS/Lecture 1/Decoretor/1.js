//Декоратор
/*function decorator(func){
	
	function wrapper(...args):
		//do something
		return func(...args)
	
	return wrapper
}*/
//bind - Декоратор привязки контекста вызова

function bind(func, context) {
	return function() {
		return func.apply(context, arguments);
	};
}

let obj = {
	name: 'petr',
	age: 18
}

function hello(){
	console.log(`Меня зовут ${this.name}. Мне ${this.age} лет`);
}

let bound = bind(hello, obj);
bound();