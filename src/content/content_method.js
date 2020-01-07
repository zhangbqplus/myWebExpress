var pub = require('../../public/public');

function first(){
	let data = pub.getToken();
	return '我的第一个js接口!在方法里的';
}

module.exports =  {
	first:first
}