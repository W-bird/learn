现在最火的一个框架，有很多点值得我们去深挖  React(facebook工程师)

相对于angular 要简单，要灵活

2个很重要的特点：

1. 组件化的开发方式

2. 单向数据流的开发方式(数据驱动视图)


引用react之前 需要注入一些相关依赖js文件

1. react.js  --> react的核心框架库

2. react-dom.js --> react操作webDom的核心框架文件

（react-native.js  ---> 利用react 开发IOS、Android App核心框架文件）

因为react 有特殊编写语法的机制（jsx语法）

jsx语法： 它相当于可以在js中混入真正的html代码（它保留js的所有功能）

console.log('123');
//var str = '<h1>hello world</h1>'
var html = <h1>hello world</h1>
console.log(html);

所以中间要有转译的过程（把jsx语法转变成浏览器支持的js）

为了可以进行合适的转译，我们需要引入第三方的编译插件：browser.min.js
(仅仅是为了教学，因为在浏览器里进行js的转译，会极大的影响性能，所以我们会
通过自动化工具（webpack）转译我们jsx语法)

正式的开始接触 react

ReactDOM.render(html, dom)  进行视图的核心的渲染

React 组件化开发机制  React.createClass()


组件更新视图的方式有2种：
1.强制更新视图
2.自动更新视图（你需要进行状态的定义，然后改变这个状态）
（核心 尽量避免DOM节点的操作）
虚拟DOM节点diff算法，它在进行全局视图刷新的时候，性能还是不错


//得到组件初始化状态，React 内部有一个机制，组件中只要
//其状态发生了改变， 组件视图都会进行自动的刷新
//状态如果不改变，视图不会改变

//子组件怎么改变父组件状态, （要利用状态提升的机制（领悟温度计））
//只能在父组件定义一个改变父组件状态的方法, 把该方法做为一个
//回调函数传递给子组件，子组件通过一个属性进行接收
没有优缺点，看情况使用


学习 关于react最后的一些知识点， react 组件生命周期的定义


我们可以利用组件的上下文（context）  让一些属性贯穿整个组件

让子组件 可以不通过一层层传递的情况下，进行直接调用


在可配置的情况 把父组件中的属性传递给子组件，我们可以使用

React.cloneElement(this.props.children, {
	xProps: 'xxxx'
})

