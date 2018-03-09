'use strict';
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World11");
  response.end();
}).listen(8888);


//1.请求行 require  node.js自带的http模块，并且赋值给http变量
//2.调用http模块提供的函数 createServer 这个函数返回一个对象，该对象有个listen的方法，


//函数传递
