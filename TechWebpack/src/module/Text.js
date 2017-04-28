
var text = require('./context.js');

function createTextDom(){
	var dom = document.createElement('h1');

	dom.innerHTML = text;

	return dom;	 	
}

/*module.exports = {
	//用其进行模块化的暴露
}*/

module.exports = createTextDom;