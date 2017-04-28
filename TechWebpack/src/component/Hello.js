var React = require('react');
var List = require('./List.js'); //导入
class Hello extends React.Component {
	render() {
		return (
          <div>
              <h1>Hello world React List</h1>
              <List></List>
          </div>
		)
	}
}
/*var Hello = React.createClass({
	render: function(){
		return (
            <p>Hello world React</p>
		)	 	
	}
})*/

module.exports = Hello; //导出