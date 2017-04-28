
var ItemBar =  React.createClass({
	getInitialState: function(){
		return {
			editText: this.props.item.context
		}		 	
	},
	componentDidUpdate: function(){
		console.log('组件更新完成');
		var dom = this.refs.editInput;
		dom.focus();
		dom.setSelectionRange(dom.value.length, dom.value.length); //操作光标的位置
	},
	render: function(){
		return (
			<li className={classNames({completed: this.props.item.completed, editing: this.props.editAble})} data-id="aaf22a3f-8d7e-4bd3-b065-706ec57cc1b1">
				<div className="view">
					<input onChange={this.checkStatus} className="toggle" type="checkbox" checked={this.props.item.completed}/>
					<label onDoubleClick={this.edit}>{this.props.item.context}</label>
					<button onClick={this.delete} className="destroy"></button>
				</div>
				<input onBlur={this.save} ref="editInput" onChange={this.change} className="edit" value={this.state.editText}/>
			</li>
		)	 	
	},
	save: function(){
		model.save(this.state.editText, this.props.item.id);
		this.props.onSave();		 	
	},
	change: function(event){
		this.setState({
			editText: event.target.value
		})		 
		//model.changeItem(event.target.value, this.props.item.id)	
	},
	edit: function(){
		console.log('双击进行编辑操作');
		/*this.setState({
			editAble: true
		})	*/	 
		this.setState({
			editText: this.props.item.context
		})
		this.props.onEdit(this.props.item.id)	
	},
	checkStatus: function(event){
		var checked = event.target.checked;
		model.ItemToggle(checked, this.props.item.id);		 	
	},
	delete: function(){
		model.destroy(this.props.item.id)	 	
	}
})

var FooterBar = React.createClass({

	render: function(){
		var count = model.activeItemCount();
		return (
			<footer id="footer">
				<span id="todo-count"><strong>{count}</strong> item left</span>
				<ul id="filters">
					<li>
						<a className={classNames({selected: this.props.curStatus === '#/all'})} href="#/all">All</a>
					</li>
					<li>
						<a className={classNames({selected: this.props.curStatus === '#/active'})} href="#/active">Active</a>
					</li>
					<li>
						<a className={classNames({selected: this.props.curStatus === '#/completed'})} href="#/completed">Completed</a>
					</li>
				</ul>
				<button onClick={this.clear} id="clear-completed">Clear completed</button>
			</footer>
		)	 	
	},
	clear: function(){
		model.clearItem();	 	
	}
})

var Container = React.createClass({
	getInitialState: function(){
		return {
			nowShowing: '#/all',
			editing: null
		}		 	
	},
	componentDidMount: function(){
		//监听hash值的改变
		var hash = location.hash;
		this.setState({
			nowShowing: hash
		})
		var me = this
		window.onhashchange = function(){
			var hash = location.hash;
			me.setState({
				nowShowing: hash
			})
		} 	
	},
	render: function(){
		var list = [];
		var myModel = this.props.model;

		var count = model.activeItemCount(); //未完成任务的数量
		console.log(count);

		for(var key in myModel.todos) {
			//对任务队列依据nowShowing这个状态进行过滤
			if(this.state.nowShowing === '#/all') {
				list.push(myModel.todos[key])
			}else if(this.state.nowShowing === '#/active') {
				if(myModel.todos[key].completed === false) {
					list.push(myModel.todos[key])
				}
			}else {
				if(myModel.todos[key].completed === true) {
					list.push(myModel.todos[key])
				}
			}
			
		}

		var allCheck = count === 0 && count !== list.length ? true : false; //判断其是否进行全选
		var me = this;
		return (
            <section id="todoapp">
                <HeaderInput></HeaderInput>
                <section id="main">
                    <input onChange={this.allToggle} id="toggle-all" type="checkbox" checked={allCheck}/>

                    <ul id="todo-list">
                        {
                        	list.map(function(value, index){
                        		 return (
                        		 	<ItemBar 
                        		 	editAble={me.state.editing === value.id} 
                        		 	onEdit={me.edit}
                        		 	onSave={me.save}
                        		 	key={index}
                        		 	item={value}>
                        		 	</ItemBar>
                        		 ) 	
                        	})
                        }
                    </ul>
                </section>
                <FooterBar curStatus={this.state.nowShowing}></FooterBar>
            </section>
		)	 	
	},
	save: function(){
		this.setState({
			editing: null
		})		 	
	},
	allToggle: function(event){
		model.allToggle(event.target.checked) 	
	},
	edit: function(id){
		//进行编辑操作	
		this.setState({
			editing: id
		}) 	
	}
})

function render(){
	ReactDOM.render(<Container model={model}></Container>, document.getElementById("demo")); 	
}
//不同模块，在不暴露全局变量的基础上，怎么调用另外一个
//模块所声明的方法(我们可以使用 发布与订阅的设计模式)
/*window.render = render*/
model.register(render)
render();

