webpackJsonp([1],{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var text = __webpack_require__(88);

function createTetxDom() {
	var dom = document.createElement('h1');

	dom.innerHTML = text;

	return dom;
}

module.exports = createTetxDom;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createDom = __webpack_require__(83);

var dom = createDom();

document.body.appendChild(dom);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var list = ['hello', 'world'];

var str = list[0],
    str1 = list[1];


var title = str + str1;

module.exports = title;

/***/ })

},[86]);