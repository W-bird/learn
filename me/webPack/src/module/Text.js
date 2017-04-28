var text = require('./context.js');

function createTetxDom() {
	var dom = document.createElement('h1');

	dom.innerHTML = text;

	return dom;
}

module.exports = createTetxDom;