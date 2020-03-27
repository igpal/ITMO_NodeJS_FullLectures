;(function(){
	
	window.User = MyUser;
	
	function MyUser(name){	
		if(name === undefined){
			this.name = "Аноним";
		} else if (typeof name === 'string') {
			this.name = name;
		} else {
			this.name = "Не определён";
		}
		
		this.toString = function(){
			return "Пользователь " + this.name;
		}
	}	
}());