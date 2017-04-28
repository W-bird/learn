var Enter_KEY = 13;
var HeaderInput = React.createClass({
	getInitialState: function() {
		return{
			text: ''
		}
	},
	render:function() {
		return(
			<header id="header">
				<h1>todos</h1>
				<input onKeyUp={this.submit} onChange={this.edit} value={this.state.text} id="new-todo" placeholder="输入" autofocus=""/>
			</header>
		)
	},
	edit: function(event) {
		this.setState({
			text: event.target.value
		})
	},
	submit: function(event) {
		if (event.keyCode == Enter_KEY) {
			model.addItem(this.state.text);
			this.setState({
				text: ''
			})
		}
	}
})

var ItemBar = React.createClass({
	render:function() {
		return(
			<li data-id="aaf22a3f-8d7e-4bd3-b065-706ec57cc1b1">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>{this.props.item.context}</label>
					<button onClick={this.delete} className="edit"></button>
				</div>
				<input className="edit" value={this.props.item.context} />
			</li>
		)
	},
	delete: function() {
		model.destroy(this.props.item)
	}
})

var FooterBar = React.createClass({
	render:function() {
		var count = model.activeItemCount();
		return(
			<footer id="footer">
				<span id="todo-count"><strong>{count}</strong> item left</span>
				<ul id="filters">
					<li>
						<a className="selected" href="#/all">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button id="clear-completed">Clear completed</button>
			</footer>
		)
	}
})

var Container = React.createClass({
	
	render: function() {
		var list = [];
		var	myModel = this.props.model;
		for(var key in myModel.todos){
			list.push(myModel.todos[key])
		}
		return(
			<section id="todapp">
				<HeaderInput></HeaderInput>
				<section id="main">
					<input id="toggle-all" type="checkbox" />
					<ul id="todo-list">
						{
							list.map(function(value, index){
								return <ItemBar key={index} item={value}></ItemBar>
							})
						}
					</ul>
				</section>
				<FooterBar></FooterBar>
			</section>
		)
	}
})


function render() {
	ReactDOM.render(<Container model={model}></Container>, document.getElementById("dome"))
}

model.register(render)
render()

//不同模块，在不暴露全局变量的基础上，怎么调用另外一个模块所声明的方法？
//可以使用发布与订阅的设计模式
// window.render = render;