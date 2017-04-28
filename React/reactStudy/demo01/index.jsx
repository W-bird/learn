var count = 8;
//在jsx语法中，变量有隐藏迭代的机制
//(内部会对数组类型的变量进行字符串拼接操作)

var list = [1,2,3,4,5];

//var lilist = [<li>1</li>, <li>2</li>, <li>3</li>]
/*var htmlList = [];
for(var i =0; i < list.length; i++) {
	htmlList.push(<li>{list[i]}</li>)
}
*/
var t = 'orange';
var size = 25;
var htmlList = list.map(function(value, index){
	if(index === (list.length - 1) ) {
		//进行合适的条件渲染
		return <li style={{color: t, fontSize: size + 'px'}} key={index}>{value}</li>
	}else {
		return <li className="active" key={index}>{value}</li>	 	
	}
})
var str = <h1>hello world {list} 个</h1>;

var ul_html = 
	<div>
		<ul>
			{htmlList}
		</ul>
		<h1>hello world</h1>
	</div>

console.log(23);
//React中核心渲染视图的方法 ReactDOM.render(html, dom)
//原则上它只能渲染一个层级的DOM节点
ReactDOM.render(ul_html, document.getElementById('example'))
