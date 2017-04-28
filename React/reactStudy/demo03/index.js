var BoilCheck = React.createClass({
	render: function(){
		if(this.props.templature >= 100) {
			return <p>The water was boil（水被烧开了）</p>
		}else {
			return <p>The water would not boil(水没烧开)</p>
		}
	}
})

var scaleName = {
	f: '华氏温度',
	c: '摄氏温度'
}
var TemplatureInput = React.createClass({
	getInitialState: function(){
		return {
			//templature: 0 //所以在这里进行状态的设置，就不合适，
			//所以一般在react开发中，都有一个概念： 状态提升
		}		 	
	},
	change: function(event){
		/*this.setState({
			templature: event.target.value
		})	*/ 	
		this.props.onTc(event.target.value)
	},
	render: function(){
		return (
			<div>
              输入相应{scaleName[this.props.name]}：<input onChange={this.change} type="text" value={this.props.templature}/>
			</div>
		) 	
	}
})

function toCelsius(f){
	//华氏温度转摄氏度
	return (f - 32) * 5/9	 	
}

function toF(celsius){
	//摄氏度转华氏度
	return (celsius * 9/5) + 32	 	
}

var Calculater = React.createClass({
	getInitialState: function(){
		return {
			templature: 100, //进行状态的提升
			scale: 'c'
		}		 	
	},
	onchangeCelsius: function(value){
		//改变摄氏温度	
		this.setState({
			templature: value,  //20
			scale: 'c'
		}) 	
	},
	onchangeF: function(value){
		//华氏温度改变	
		this.setState({
			templature: value, //212 68
			scale: 'f'
		}, function(){
			//因为this.setState 它是异步的，拿不到最新的状态，
			//所以要通过第二个参数，传递一个回调函数去拿到其
			//最新的状态
			console.log('---f---', this.state.templature); 	

		})	 //this.setState该方法是改变状态的唯一方法
		//console.log('---f---', this.state.templature); 	
	},
	render: function(){

		var celsius = this.state.templature; //20

		if(this.state.scale === 'f') {
			celsius = toCelsius(this.state.templature)
		}
		var f  = toF(celsius);
		return (
            <div>
                <h1>开始温度测试</h1>
                <TemplatureInput name="c" onTc={this.onchangeCelsius} templature={celsius}></TemplatureInput>
                <TemplatureInput name="f" onTc={this.onchangeF} templature={f}></TemplatureInput>
                <BoilCheck templature={this.state.templature}></BoilCheck>
            </div>
		)	 	
	}
})

ReactDOM.render(<Calculater></Calculater>, document.getElementById('example'));