//Итераторы

function makeIterator(){
    let arr = this.arr;
	let nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < arr.length ?
               {value: arr[nextIndex++], done: false} :
               {done: true};
       }
    }
}

let myObj = {
	arr:['yo', 'ya'],
	[Symbol.iterator]:makeIterator 
}

for (let val of myObj){
	console.log(val);
}


