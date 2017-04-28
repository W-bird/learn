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


var LieBiao = React.createClass({
	render: function() {
		var item = this.props.data;
		return(
			<div>
				<span>{item.name}</span>
				<span onClick={this.jianFa}> - </span>
				<span>{item.num} 元</span>
				<span onClick={this.jiaFa}> + </span>
				<span>{item.price}</span>
			</div>
		)
	},
	jianFa: function() {
		this.props.data.num--;
		if (this.props.data.num > 1) {
			console.log(0)
		}
		render()
	},
	jiaFa: function() {
		this.props.data.num++;
		render()
	}
})

var ZongJia = React.createClass({
	render: function() {
		var sum = 0;
		for(var i=0; i<list.length; i++) {
			sum += list[i].num * list[i].price;
		}
		return <h2>{sum} 元</h2>
	}
})

var ShangPin = React.createClass({
	render:function() {
		return (
			<div>
				<h1>商品列表</h1>
				{
					list.map(function(value, index){
						return <LieBiao data={value} key={index}/>
					})
				}
				<ZongJia data={list}/>
			</div>
		)
	}
})

function render() {
	ReactDOM.render(<ShangPin />,document.getElementById("box"));
}
render();