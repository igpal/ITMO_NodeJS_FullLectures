const Jimp = require("jimp");

//Справочник сиволов для капчи
const simbols = "QWERTYUPASDFGHJKLZXCVBNMqwertyuopasdfghjkzxcvbnm123456789";
//Справочник названий файлов с разным фоном
const sourseImg = ["source01.png", "source02.png", "source03.png"];

//Функция возвращает случайный элемент из словаря
function rand(lib){
	return lib[Math.floor(Math.random()*((lib.length-1) + 1))];
}

module.exports = function getCaptcha(callback){
	let source;
	
	Jimp.read(rand(sourseImg))
		.then((image)=>{
			source = image;
			return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
		})
		.then((font)=>{
			let str = '';
			
			for(let i=0; i<6; i++){
				str+=rand(simbols);
			}
			source.print(font, 3, 5, str[0] + str[1])
				.print(font, 43, 5, str[2] + str[3])
				.print(font, 83, 5, str[4] + str[5])
				.pixelate(0,0, 120, 50)
				.getBuffer(Jimp.MIME_PNG, (err, buffer)=>{
					if(err) return callback(err); 
					callback(err, str, buffer);
				});
		})
		.catch((err)=>{
			// handle an exception
			console.log(err);
			callback(err);
		});
}