
var events=require('events');

var emitter=new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2)
});

emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

emitter.emit('someEvent','Mark',1991);

/*
emitter为事件 someEvent注册了两个监听器，然后发射了someEvent事件，
运行结果可以看到两个监听事件回调函数被先后调用

1.EventEmitter.on(event,listener) 为指定事件注册一个监听器，接受字符串event和一个回调函数listener
2.EventEmitter.emit(event,[arg1]...) 发射event事件，传递若干可选参数到监听事件的参数列表
3.EventEmitter.once(event,listener) 为指定事件注册一个单次监听器，监听器最多只会触发一次，触发后立刻解除该监听器
4.EventEmitter.removeListener(event,listener)移除指定事件的某个监听器，listenser必须是该事件已经注册的监听器
5.EventEmitter.removeAllListener([event]) 移除所有事件的所有监听器

error事件
EventEmitter 定义了一个特殊的事件 error，它包含了错误的定义，
我们在异常的时候通常会发射error事件，当error被发射时，EventEmitter规定如果没有响应的监听，nodejs会把他当作异常
退出并打印调用栈



*/