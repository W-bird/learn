var Box = React.createClass({
	render: function(){
		return <li>{this.props.name}</li>	 	
	}
})

var Input = React.createClass({
	getInitialState: function () {
		//得到该组件本身的初始化状态值

		//只要状态发生了改变，视图会自动的更新
		//若状态未发生改变，视图就不会发生改变
        return {
            value: 'gyf'
        }
    },
    change: function(){
    	var inputDom = this.refs.nice;
    	console.log(inputDom.value);
    	//setState 用来改变组件状态的唯一方法
    	this.setState({
    		value: inputDom.value
    	})	 	
    },
	render: function(){
		return (
           <div>
               <input onChange={this.change} ref="nice" value={this.state.value} type="text"/>
               <button onClick={this.search}>查询</button>
           </div>
		)	 	
	},
	search: function(){
		console.log('我被点击了');
		//通过组件中ref（引用）拿到我们所需要的dom节点
		//this.refs.nice 拿到了input的dom节点
		var InputDom = this.refs.nice;
		fetch('/v1/pois?city_id=1&type=search&keyword=' + InputDom.value).
		then(function(res){
			res.json().then(function(res){
				console.log(res);
				list = res;
				render();

			})
		}).catch(function(res){
			console.log('后端出错'); 	
		})
		console.log(InputDom.value); 	
	}
});
var list = [{name: 'yui'}, {name: 'ty'}];
var Container = React.createClass({
	render: function(){
		var t = list.map(function(item, index){
				return <Box key={index} name={item.name}></Box> 	
		});
		return (
            <div>
            	<Input></Input>
            	<ul>
            		{t}
            	</ul>
            </div>

		)	 	
	}
})

function render(){
	ReactDOM.render(<Container/>, document.getElementById('example'))	 	
}

render();


