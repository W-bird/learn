//缓存
function Store(nameSpace, data){
	if(data) {
		localStorage.setItem(nameSpace, JSON.stringify(data))
		return;
	}	 
	return JSON.parse(localStorage.getItem(nameSpace)) || {}	
}

function Model(){
	this.todos = Store('todos')

	this.callbackList = []; //任务队列回调函数数组	 	
}

Model.prototype.addItem = function(text){
	//生成一个唯一的Id
	var id = Date.now();
    //动态创建我们 todos对象
	this.todos[id] = {
		id: id,
		completed: false,
		context: text
	}
	//render();	
	this.inform();
}
Model.prototype.allToggle = function(checked){
	for(var key in this.todos) {
		this.todos[key].completed = checked;
	}
	this.inform();	
}
Model.prototype.clearItem = function(){
	for(var key in this.todos) {
		if(this.todos[key].completed) {
			delete this.todos[key];
		}
	}
	this.inform(); 	
}
Model.prototype.destroy = function(id){
	delete this.todos[id];
	this.inform(); //render()	 	
}

Model.prototype.activeItemCount = function(){
	//统计未完成任务的数量
	var count = 0;
	for(var key in this.todos) {
		if(!this.todos[key].completed) {
			count++
		}
	}	 	
	return count;
}
Model.prototype.ItemToggle = function(checked, id){
	this.todos[id].completed = checked;
	this.inform();	 	
}
Model.prototype.save = function(text, id){
	this.todos[id].context = text;
	this.inform();	
}
Model.prototype.changeItem = function(text, id){
	this.todos[id].context = text;
	this.inform(); 	
}
Model.prototype.register = function(callback){
	//注册一个任务队列	 //发布一个任务
	this.callbackList.push(callback) 	
}

Model.prototype.inform = function(){
	//订阅 任务订阅
	Store('todos', this.todos)
	for(var i =0; i < this.callbackList.length; i++) {
		this.callbackList[i](); //render()
	}	 	
}
var model = new Model();