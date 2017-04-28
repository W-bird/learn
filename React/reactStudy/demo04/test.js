var HeaderInput = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}		 	
	},
	componentDidMount: function(){
		//组件渲染完成之后所需要执行的方法 一次性操作
		console.log('组件渲染完成');	 	
	},
	componentWillMount: function(){
		console.log('组件即将进行渲染');		 	
	},
	shouldComponentUpdate: function(nextProps, nextState){
		console.log('判断组件是否进行更新');
		console.log(this.state.text, nextState.text);

		if(nextState.text.match(/\d+/) !== null) {
			//如果说字符串包含数字，阻止其更新操作
			return false;
		}
		return true;		 	
	},
	componentDidUpdate: function(beforeProps, beforeState){
		console.log('组件更新完成');
	},
	componentWillUpdate: function(nextProps, nextState){
		console.log('组件即将更新');
		console.log(nextState.text, this.state.text);		 	
	},
	edit: function(event){
		this.setState({
			text: event.target.value
		})	 	
	},
	render: function(){
		return (
           <div>
               <h1>我是输入标题</h1>
               <input type="text" onChange={this.edit} value={this.state.text}/>
               <div class="list">
               		{this.props.children}
               </div>
           </div>
		)	 	
	}
})

/*ReactDOM.render(
	<HeaderInput>
         <h1>我是头部输入框</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, consequatur, quo, ipsam aliquam doloribus nisi veniam asperiores reprehenderit id molestiae earum velit nihil. Eligendi, aut sapiente nulla hic vitae? Velit?</p>
	</HeaderInput>, document.getElementById('example'))
*/


var SplitPane = React.createClass({
	getChildContext: function(){
		return {
			color: this.state.color
		}		 	
	},
	getDefaultProps: function(){
		return {
			title: '我是聊天标题 分割网页 subTitle'
		}		 	
	},
	getInitialState: function(){
		return {
			color: 'red'
		}
	},
	edit: function(event){
		this.setState({
			color: event.target.value
		})		 	
	},
	render: function(){
		return (
           <div className="splitWrapper">
           		<h1>改变字体颜色</h1>
           		<input type="text" onChange={this.edit} value={this.state.color}/>
               <div className="left-pane">
                  {this.props.left}
               </div>
               <div className="right-pane">
               	  {this.props.right && React.cloneElement(this.props.right, {
               	  	subtitle: this.props.title
               	  })}

					{/*
	                  等价关系
			          <Chat subtitle={this.props.title}></Chat>
			          */
      				}
               </div>
           </div>

		)	 	
	}
})

SplitPane.childContextTypes = {
	color: React.PropTypes.string
}

var Contracts = React.createClass({
	render: function(){
		return (
            <ul class="list">
            	<li>1</li>
            	<li>1</li>
            	<li>1</li>
            	<li>1</li>
            	<li>1</li>
            	<li>1</li>
            	<li>1</li>
            </ul>
		)	 	
	}
})

var Button = React.createClass({
	render: function(){
		return (
           <button style={{color: this.context.color}}>{this.props.children}按钮</button>
		)	 	
	}
})
Button.contextTypes = {
	color: React.PropTypes.string
}


var Chat = React.createClass({
	render: function(){
		return <h1>{this.props.subtitle} <Button>聊天</Button></h1>	 	
	}
})
ReactDOM.render(
	<SplitPane left={<Contracts/>} right={<Chat/>}></SplitPane>, document.getElementById('example'))


/*
ReactDOM.render(
	<SplitPane left={<NavItems/>} right={<Page/>}></SplitPane>, document.getElementById('example'))*/


