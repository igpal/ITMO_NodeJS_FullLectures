//Декораторы
//benchmark - Декоратор логирующий время выполнения функции
//cache - Декоратор кэширующий результат выполнения функции

function benchmark(func) {
	return function() {
		let started = Date.now();
		let result = func(...arguments);
		let finished = Date.now();
		console.log(`Функция "${func.name}" выполнилась за ${finished-started} микросекунд`);
		return result;
	};
}

function cache(func){
	let memory = {};
	
	return function(...args){
		key = args.toString();		
		if (!(key in memory))
			memory[key] = func(...args);		
		return memory[key];
	}
}

function factorial(n){
	let f = 1;	
	for (let i=1; i<=n; i++)
		f *= i;		
	return f
}
	
let timeLogFactorial = benchmark(cache(factorial));
console.log('Факториал 5 равен ' + timeLogFactorial(10000000));
console.log('Факториал 5 равен ' + timeLogFactorial(10000000));
