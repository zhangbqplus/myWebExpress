// 引入 express 模块
var express = require('express');
 
// 创建 express 实例
var app = express();

//api
var api = require('./src/api');

// 响应HTTP
app.use('/', api);

// 监听到8000端口
app.listen(8000, function () {
	console.log('myWebExpress is listening at port 8000');
	console.log('http://localhost:8000/');
});

//404处理
app.use(function (req, res, next) {
  let back = {
	  success:false,
	  code:404
  }
  res.status(404).json(back);
})

//500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})