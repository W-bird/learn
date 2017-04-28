
var BoxList = React.createClass({
	render: function(){
		return (
           <ul>
               {
               	this.props.data.map(function(value, index){
               		return <li style={{background: value}} key={index}>{index}</li>	
               	})
               }
               
           </ul>

		)	 	
	}
})

var ColorInput = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}		 	
	},
	change: function(event){
		this.setState({
			text: event.target.value
		})	 	
	},
	render: function(){
		return (
            <div>
	            <h1>颜色输入框</h1>
	            <input type="text" onKeyUp={this.submit} value={this.state.text} onChange={this.change}/>
            </div>
		)	 	
	},
	submit: function(event){
		if(event.keyCode === 13) {
			console.log('我敲击了回车');

			//我想在颜色输入框中，改变父组件（Container）的状态怎么办
			
			
			this.props.cta(this.state.text);

			this.setState({
				text: ''
			});




		}		 	
	}
})
var Container = React.createClass({
	getInitialState: function(){
		return {
			list: ['blue', 'green']
		}		 	
	},
	changeList: function(newColor){
		this.state.list.push(newColor);
		var t = this.state.list;
		this.setState({
			list: t
		})		 	
	},
	render: function(){
		return (
            <div class="colorWrapper">
	            <ColorInput cta={this.changeList}></ColorInput>
	            <BoxList data={this.state.list}></BoxList>
            </div>
		)	 	
	}
})

function render(){
	ReactDOM.render(<Container/>, document.getElementById('example'))		 	
}
render();
