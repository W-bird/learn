var list = [{
	name: '牛奶',
	price: 2,
	num: 4
},{
	name: '花生',
	price: 5,
	num: 4
},{
	name: '手机',
	price: 1500,
	num: 4
},{
	name: 'Mac',
	price: 11115,
	num: 4
},{
	name: '啤酒',
	price: 10,
	num: 3
}];


var SingleCart = React.createClass({
	//单个购物车组件
	render: function(){
		var Item = this.props.data;
		return (
            <div className="cart-info">
            	<span>{Item.name}</span>
            	<span className="minus" onClick={this.minus}>-</span>
            	<span>{Item.num}</span>
            	<span className="plus" onClick={this.plus}>+</span>
            	<span>{Item.price}元</span>
            </div>
		)	 	
	},
	minus: function(){
		console.log('我是减法');	 
		this.props.data.num--;
		render(); //简单、直接、暴力把整个视图刷新 强制刷新	
	},
	plus: function(){
		console.log('我是加法');
		console.log();	 	
		this.props.data.num++;
		render(); //简单、直接、暴力把整个视图刷新
	}
})

var PriceBar = React.createClass({
	//总价组件
	render: function(){
		var sum = 0;
		for(var i =0; i < list.length; i++) {
			sum += list[i].num * list[i].price
		}
		/*sum += list.reduce(function(value){
			return value.num * value.price	 	
		})*/
		return <h1>我是总价: {sum}元</h1> 	
	}
})

var Container = React.createClass({
	//给组件定义一个属于自己的状态
	getInitialState: function(){
		//得到组件初始化状态，React 内部有一个机制，组件中只要
		//其状态发生了改变， 组件视图都会进行自动的刷新
		//状态如果不改变，视图不会改变
		return {
			text: 'hello world'
		}	 	
	},
	change: function(event){
		//监听输入框的改变	
		var dom = event.target;
		
		//render(); 强制更新最外层容器的视图

		this.setState({
			text: dom.value
		}); //改变该组件内在的状态
	},
	render: function(){
		return (
             <div className="wrapper">
                 <h1>我是最外层的容器</h1>
                 <input type="text" onChange={this.change} value={this.state.text}/>
                 <h2>购物车列表</h2>
                 {
                 	/*[<SingleCart></SingleCart>, <SingleCart></SingleCart>, <SingleCart></SingleCart>, <SingleCart></SingleCart>]*/
                 	list.map(function(value, index){
                 		return <SingleCart data={value} key={index}></SingleCart>	 	
                 	})
                 }
                 <PriceBar data={list}></PriceBar>
             </div>

		)	 	
	}
})
window.text = 'txt num'

function render(){
	ReactDOM.render(<Container txt={text}/>, document.getElementById('cart'))		 	
}
render();

