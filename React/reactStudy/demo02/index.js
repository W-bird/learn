//在react 怎么进行组件的声明
var data = [1,2,3,4,5,6,7,8];
var List = React.createClass({
	render: function(){
		var myPropList = this.props.t; //通过属性，接收外界传入的值
		return (
             <ul>
                {
                	myPropList.map(function(value, index){
                		return <li key={index}>{value}</li>	 	
                	})
                }
             </ul>
		)	 	
	}
})

var Header = React.createClass({
	render: function(){
		return (
			<div class="wrapper">
				<h1 onClick={this.test}>Hello world 组件</h1>
				<h2 ref="subheader">子标题</h2>
				<List t={data}></List>
			</div>
		)	 	
	},
	test: function(){
		console.log('我点击了标题', this.refs.subheader);	 	
	}
})
ReactDOM.render(<Header/>, document.getElementById('example'))