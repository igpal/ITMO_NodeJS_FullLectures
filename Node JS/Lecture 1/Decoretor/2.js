//Декораторы
//benchmark - Декоратор логирующий время выполнения функции

function benchmark(func) {
	return function() {
		let started = Date.now();
		let result = func(...arguments);
		let finished = Date.now();
		console.log(`Функция "${func.name}" выполнилась за ${finished-started} микросекунд`);
		return result;
	};
}

function factorial(n){
	let f = 1;	
	for (let i=1; i<=n; i++)
		f *= i;		
	return f
}
	
let timeLogFactorial = benchmark(factorial);
console.log('Факториал 10 равен ' + timeLogFactorial(10));
	
