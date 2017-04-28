var ReactDOM = require("react-dom"),
	React = require("react"),
	Hello = require("./../component/Hello.js");

var CssModule = require("./css/index.css");

var node = document.createElement('div');
node.id = "dome"
document.body.appendChild(node);

function render() {
	ReactDOM.render(<Hello/>, document.getElementById('dome'))
}
render();
