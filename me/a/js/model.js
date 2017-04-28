function Model(){
	this.todos = {
		2121: {
			id: 2121,
			completed: false,
			context: "11"
		},
		1212:{
			id: 1212,
			completed: false,
			context: "22"
		}
	};
	this.callbackList= []; 	//任务队列回调函数数组
}

Model.prototype.addItem = function(text) {
	//生产唯一ID
	var id = Date.now();
	//动态创建 todos 对象
	this.todos[id] = {
		id: id,
		completed: false,
		context: text
	}
	// render();
	this.inform();
}

Model.prototype.register = function(callback){
	//注册一个任务队列
	this.callbackList.push(callback)
}


Model.prototype.inform = function() {
	//订阅 任务订阅
	for(var i=0; i<this.callbackList.length; i++) {
		this.callbackList[i]();
	}
}

Model.prototype.destroy = function(id) {
	delete this.todos[id];
	this.inform();
}

Model.prototype.activeItemCount = function() {
	//统计为完成数量
	var count = 0;
	for(var key in this.todos){
		if(this.todos[key].completed) {
			count++;
		}
	}
	return count;
}

var model = new Model();