var WenDu = React.createClass({
	render: function() {
		if (this.props.temperature >= 100) {
			return <p>水烧开了</p>
		} else {
			return <p>水没烧开</p>
		}
	}
})

var TemperatrureInput = React.createClass({
	change: function(event) {
		this.props.onTc(event.target.value)
	},
	render: function() {
		return <input type="text" onChange={this.change} value={this.props.temperature} />
	}
})

var PanDuan = React.createClass({
	getInit: function() {
		return{temperature:100}
	},
	onChange : function(value) {
		this.setState({
			temperature : value
		})
	},
	render: function() {
		return (
			<div>
				<TemperatrureInput onTc={this.onChange} temperature={this.state.temperature} />
				<WenDu temperature={this.state.temperature}/>
			</div>
		)
	}
})

ReactDOM.render(<PanDuan/>, document.getElementById("box"))