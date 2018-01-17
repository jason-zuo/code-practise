//引入events模块

var events = require("events");

var eventEmitter = new events.EventEmitter() ;

var connectHandler = function connected() {
	console.log("连接成功")
	eventEmitter.emit("data_received")

}

eventEmitter.on("connection",connectHandler);

//使用匿名函数绑定 data_received 事件
//
eventEmitter.on("data_received", function(){
	console.log("数据接受成功")
})

//触发 connection 事件
//
eventEmitter.emit("connection")

console.log("程序执行完毕")
