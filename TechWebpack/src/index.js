var ReactDOM = require('react-dom');
var React = require('react');
var Hello = require('./component/Hello.js');

var CssModule = require('./css/index.css');
console.log(CssModule);

var node = document.createElement('div');
node.id = 'demo';
document.body.appendChild(node);

function render(){
	ReactDOM.render(<Hello/>, document.getElementById('demo'))	 	
}
render();