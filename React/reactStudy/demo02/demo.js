// function getfile('name',function(data){
// 	replay('who',data,function(){
// 		replay('who',data,function(){
			
// 		})
// 	})
// })

// function wait(time,fn){
// 	setTimeout(fn,time)
// }

function sleep(time){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve(123)
		},time)
	})
}

// sleep(1000)
// 	.then((data)=>{
// 		console.log(data)
// 	})
// then

var main = async function(){
	var x = await sleep(2000)
	console.log(x)
}
