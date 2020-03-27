const stream = require('stream');
const util = require('util');
class ParserStream extends stream.Transform {
	constructor() {
		super();
        this.tempStr = '';
        this.counter = 0;
	}
	_transform(chunk, encoding, callback) {
		 let regExp = /<REPORT type="frc3">.*?<\/REPORT>/s;
         let strChunk = this.tempStr + chunk.toString();
         let report;
         while(true){
            if(regExp.test(strChunk)){
                report = strChunk.match(regExp)[0];                
                //console.log(this.counter, report);
                strChunk = strChunk.replace(regExp, "");
                this.counter++;
                this.push(this.counter + ' ' + report + '\n');
            } else {
                this.tempStr = strChunk;
                break;
            }
         }
		 callback();
	}
	/*_flush(callback) {
		callback();
	}*/
}
module.exports = ParserStream;