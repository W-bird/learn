var React = require('react'),
	List = require('./List.js');

class Hello extends React.Component{
	render() {
		return(
			<div>
				<p>Hello pig</p>
				<List></List>
			</div>
		)
	}
}

module.exports = Hello;