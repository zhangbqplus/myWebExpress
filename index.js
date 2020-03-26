// 引入 express 模块
var express = require('express');
 
//引入配置
var config = require('./config.js').start;

// 创建 express 实例
var app = express();

//api
var api = require('./src/api');

var morgan = require('morgan');
app.use(morgan('short'));
// 响应HTTP
app.use('/', api);

// 监听到8080端口
app.listen(config.listen, function () {
	console.log('myWebExpress is listening at port ' + config.listen);
	console.log('http://localhost:'+ config.listen +'/');
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