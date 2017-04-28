var ESC_KEY = 13; //回车

window.HeaderInput = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}		 	
	},
	render: function(){
		return (
            <header id="header">
				<h1>todos</h1>
				<input onKeyUp={this.submit} onChange={this.edit} value={this.state.text} id="new-todo" placeholder="What needs to be done?" autofocus=""/>
			</header>
		)	 	
	},
	submit: function(event){
		if(event.keyCode === ESC_KEY) {
			model.addItem(this.state.text);
			this.setState({
				text: ''
			})
		}	 	
	},
	edit: function(event){
		this.setState({
			text: event.target.value
		})
	}
})