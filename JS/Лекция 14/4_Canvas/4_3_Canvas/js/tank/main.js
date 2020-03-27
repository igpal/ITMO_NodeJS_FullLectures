// размер для блоков
var size = 32;
///////////////////////////////////////////////////////////////////
///////////// Инициализация игры //////////////////////////////////
///////////////////////////////////////////////////////////////////

var Game = {
    canvas: null,
	ctx: null,
	img: null,
	tank: null,
	enemy: null,
	
	init: function(){

		// поиск холста и задание контекста
		Game.canvas = document.getElementById("game"),
		Game.ctx = Game.canvas.getContext("2d"),
		Game.img = new Image();// создание объекта для картинки с текстурами
		Game.tank = new Tank(18,1, "right", 20, 200);
		// размер холста
		Game.ctx.width = 20*size;
		Game.ctx.height = 22*size;
		// заполнение холста черным цветом 
		Game.ctx.fillStyle = "rgb(0,0,0)";
		Game.ctx.fillRect( 0, 0, Game.ctx.width, Game.ctx.height-2*size );
		// путь к картинке и функция отрисовки ПОСЛЕ(!) загрузки картинки \до этого рисовалось не всё
		Game.img.src = "img/texture.png";
		Game.img.onload = function(){
			Render(Game.img, Game.ctx);
		}	
		// создание объекта клавиатуры и запуск перехвата
		Game.Keyboard = new Keyboard();
		Game.Keyboard.catchKey();
		
		Game.enemy = new Tank(10,10, "right", 200, 1);
		setInterval(randomAction, 2000);
	}
}

function randomAction(){
	yx = Game.enemy.getPos();
	var action = Math.floor(Math.random() * (7 - 1)) + 1;// получаем случайное число для дальнейшего выбора действия
	switch(action){
		case 1:
			Game.enemy.setPos(yx[0]-1, yx[1], "up");
			break;
		case 2:
			Game.enemy.setPos(yx[0], yx[1]+1, "right");
			break;
		case 3:
			Game.enemy.setPos(yx[0]+1, yx[1], "down");
			break;
		case 4:
			Game.enemy.setPos(yx[0], yx[1]-1, "left");
			break;
		case 5:
			if (Game.enemy.ammo>0){
				brickInFront(Game.enemy);
				Game.enemy.ammo--;
			}
			break;
		case 6:
			if (Game.enemy.ammo>0){
				brickInFront(Game.enemy);
				Game.enemy.ammo--;
			}
			break;			
		case 7:
			if (Game.enemy.ammo>0){
				brickInFront(Game.enemy);
				Game.enemy.ammo--;
			}
			break;			
		default:
			break;
	}
	Render(Game.img, Game.ctx);
}

///////////////////////////////////////////////////////////////////
///////////// Отрисовка ////////////////////////////////
///////////////////////////////////////////////////////////////////

function Render(img,ctx){
	for (i=0; i<20; i++){
		for (j=0; j<20; j++){
			switch (map[i][j]){
				case 0:// бетон
					ctx.drawImage(img, 0, 33, 32, 32, j*size, i*size, 32, 32);
					break;
				case 1: // земля 
					ctx.fillStyle = "rgb(0,0,0)";
					ctx.fillRect(j*size, i*size, 32, 32);
					break;					
				case 2:// кирпич
					ctx.drawImage(img, 0, 0, 32, 32, j*size, i*size, 32, 32);
					break;
				case 3: // лес
					ctx.drawImage(img, 0, 65, 32, 32, j*size, i*size, 32, 32);
					break;
				case 4: // вода
					ctx.drawImage(img, 0, 97, 32, 32, j*size, i*size, 32, 32);
					break;
				case 9: // база
					ctx.drawImage(img, 0, 129, 32, 32, j*size, i*size, 32, 32);
					break;
				case 8: // танк право
					ctx.drawImage(img, 0, 161, 32, 32, j*size, i*size, 32, 32);
					break;
				case 7: // танк низ
					ctx.drawImage(img, 0, 192, 32, 32, j*size, i*size, 32, 32);
					break;
				case 6: // танк лево
					ctx.drawImage(img, 0, 225, 32, 32, j*size, i*size, 32, 32);
					break;
				case 5: // танк верх
					ctx.drawImage(img, 0, 257, 32, 32, j*size, i*size, 32, 32);
					break;
				case 10: // снаряды
					ctx.drawImage(img, 0, 288, 32, 32, j*size, i*size, 32, 32);
					break;
				case 11: // заправка
					ctx.drawImage(img, 0, 321, 32, 32, j*size, i*size, 32, 32);
					break;
				default:
					break;
			}
		}
	}
	// поле для отображения остатков топлива и снарядов
	Game.ctx.fillStyle = "rgb(255,255,255)";
	Game.ctx.fillRect( 3*size, Game.ctx.height-size, Game.ctx.width-6*size, Game.ctx.height );
	// снаряды
	ctx.drawImage(img, 0, 288, 32, 32, 4*size, Game.ctx.height-size, 32, 32);
	ctx.fillStyle = "rgb(0,0,0)";
    ctx.font = "italic 19pt Arial";
    ctx.fillText(": "+Game.tank.ammo, 5*size+10, Game.ctx.height-7);
	// топливо
	ctx.drawImage(img, 0, 321, 32, 32, 12*size, Game.ctx.height-size, 32, 32);
	//ctx.fillStyle = "white";
    //ctx.font = "italic 19pt Arial";
    ctx.fillText(": "+Game.tank.fuel, 13*size+10, Game.ctx.height-7);
}


///////////////////////////////////////////////////////////////////
///////////// Работа с клавиатурой ////////////////////////////////
///////////////////////////////////////////////////////////////////

function Keyboard(){
}
// прототип объекта клавиатуры 
Keyboard.prototype = {
	// перевод кода кнопки в текст
	convertCode: function(code){ 
		switch(code){
			case 37://стрелочка влево
				return "left";
			case 38://стрелочка вверх
				return "up";
			case 39://стрелочка вправо
				return "right";
			case 40://стрелочка вниз
				return "down";
			case 32://пробел
				return "fire";
			default:
				return false;
		}
	},
	// обработка нажатия кнопки
	keyDown: function(e){
		var key = this.convertCode(e.keyCode); //вызывает фунцию которая распознает код клавиши
		if (key){
			if (key!="fire"){
				// надо задать направление
				yx = Game.tank.getPos();
				if (Game.tank.fuel>0){
					switch(key){
						case "right":
							// сравнение направления танка с новым направлением
							// если так же то менять позицию
							//  в смене позиции смена направления вызывается дважды и соотв. тратит два топлива
							if (Game.tank.getDir()=="right"){
								Game.tank.setPos(yx[0], yx[1]+1, "right");
							}
							else{
								Game.tank.setDir("right");
							}
							break;
						case "left":
							if (Game.tank.getDir()=="left"){
								Game.tank.setPos(yx[0], yx[1]-1, "left");
							}
							else{
								Game.tank.setDir("left");
							}
							break;
						case "up":
							if (Game.tank.getDir()=="up"){
								Game.tank.setPos(yx[0]-1, yx[1], "up");
							}
							else{
								Game.tank.setDir("up");
							}
							break;
						case "down":
							if (Game.tank.getDir()=="down"){
								Game.tank.setPos(yx[0]+1, yx[1], "down");
							}
							else{
								Game.tank.setDir("down");
							}
							break;
						default:
							break;
					}
				}
				else {
					alert ("У вас закончилось топливо.");
					location.reload();
				}
			}
			else{
				// получить направление и выстрелить
				if (Game.tank.ammo>0){
					brickInFront(Game.tank);
					Game.tank.ammo--;
					console.log("осталось снарядов"+Game.tank.ammo);
				}
			}
			Render(Game.img, Game.ctx);
			console.log("нажато: "+key); //для проверки
		}
	},
	// обработка отпускания кнопки
	/* пока не пригодилось 
	keyUp: function(e){
		var key = this.convertCode(e.keyCode);
		if (key){
			console.log("разнажато: "+key); //для проверки
		}
	},
	*/
	
	// Функция перехвата нажатия\отпускания кнопки из документа, запускает предыдущие функции обработки
	catchKey: function(){
		var self = this;
		document.onkeydown = function(e){
			self.keyDown(e);
		}
		/*
		document.onkeyup = function(e){
			self.keyUp(e);
		}
		*/
	}
	
};

function Tank(y, x, direction, ammo, fuel){
	this.x = x;
	this.y = y;
	this.ammo = ammo;
	this.fuel = fuel;
	this.direction = direction;
	this.picture = 8;
	
	map[this.y][this.x] = this.picture;
}
Tank.prototype = {
	
	//определение возможности проехать перед собой
	isWay: function(y,x){ 
		if (map[y][x]==0||map[y][x]==2) return false;
		return true;
	},
	
	// определение воды перед танком
	isWater: function(y,x){
		if (map[y][x]==4) return true;
		return false;
	},
	
	isAmmo: function(y,x){
		if (map[y][x]==10) return true;
		return false;
	},
	
	isFuel: function(y,x){
		if (map[y][x]==11) return true;
		return false;
	},
	
	isBase: function(y,x){
		if (map[y][x]==9) return true;
		return false;
	},
	
	//получение координат
	getPos: function(){
		return [this.y, this.x];
	},
	
	//получение направления 
	getDir: function(){
		return this.direction;
	},
	
	// смена направления и картинки
	setDir: function(direction){
		this.direction = direction;
		switch (this.direction){
			case "up":
				this.picture = 5;
				this.fuel--; // трата топлива при смене направления\развороте
				break;
			case "right":
				this.picture = 8; 
				this.fuel--;
				break;
			case "down":
				this.picture = 7;
				this.fuel--;
				break;
			case "left":
				this.picture = 6;
				this.fuel--;
				break;
			default:
				break;
		}
		// чтоб картинка танка не накладывалась на себя
		yx = this.getPos();
		map[yx[0]][yx[1]] = 1;
		Render(Game.img, Game.ctx);
		map[yx[0]][yx[1]] = this.picture;
	},
	// функция смены позиции танка
	setPos: function(y,x, direction){
		oldyx = this.getPos();
		if (this.isWay(y,x)){
			map[oldyx[0]][oldyx[1]] = 1;
			if (!this.isWater(y,x)){
				this.x = x;
				this.y = y;
				
				if (this.isAmmo(y,x)) this.ammo+=10;
				if (this.isFuel(y,x)) this.fuel+=20;
				if (this.isBase(y,x)){
					setTimeout(function(){alert('Вы прошли игру');}, 1);
					location.reload();
				}
				this.setDir(direction);
			}
			else{
				delete this;
				setTimeout(function(){alert('вы самоубились');}, 1);
				location.reload();
				//setTimeout(function(){Game.init();}, 2000);
			}
		}
		else{
			map[this.y][this.x] = 1; 	// это чтобы картинка с танком 
			Render(Game.img, Game.ctx);	// не накладывалась сама на себя
			console.log('не проехать');
		}
		this.setDir(direction);
		map[this.y][this.x] = this.picture;
	}
}
// поиск кирпича для уничтожения(по направлению)
function brickInFront(who){
	switch (who.getDir()){
		case "up":
			for (y=who.y-1; y>=0; y--){
				//console.log('tank y='+Game.tank.y+' searchY='+y);
				switch (map[y][who.x]){
					case 0:
						console.log('сверху бетон');
						return;
						break;
					case 2:
						console.log('сверху был кирпич');
						map[y][who.x]=1;
						return;
						break;
					default:
						console.log('сверху простор для полёта');
						continue;
				}
			}
			break;
		case "right":
			for (x=who.x; x<=19; x++){
				switch (map[who.y][x]){
					case 0:
						console.log('справа бетон');
						return;
						break;
					case 2:
						console.log('справа был кирпич');
						map[who.y][x]=1;
						return;
						break;
					default:
						console.log('справа простор для полёта');
						continue;
				}
			}
			break;
		case "down":
			for (y=who.y; y<=19; y++){
				switch (map[y][who.x]){
					case 0:
						console.log('снизу бетон');
						return;
						break;
					case 2:
						console.log('снизу был кирпич');
						map[y][who.x]=1;
						return;
						break;
					default:
						console.log('снизу простор для полёта');
						continue;
				}
			}
			break;
		case "left":
			for (x=who.x; x>=0; x--){
				switch (map[who.y][x]){
					case 0:
						console.log('слева бетон');
						return;
						break;
					case 2:
						console.log('слева был кирпич');
						map[who.y][x]=1;
						return;
						break;
					default:
						console.log('слева простор для полёта');
						continue;
				}
			}
			break;
		default:
			break;
	}
}