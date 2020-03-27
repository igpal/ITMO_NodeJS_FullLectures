//Итераторы

let myObj = {
	nextIndex:0,
	arr:['yo', 'ya'],
	[Symbol.iterator]:function(){
		this.nextIndex = 0;
		return this;
	},
	next: function(){
		return this.nextIndex < this.arr.length ?
		   {value: this.arr[this.nextIndex++], done: false} :
		   {done: true};
    }	
}

for (let val1 of myObj){
	console.log(val1);
}

for (let val2 of myObj){
	console.log(val2);
}


