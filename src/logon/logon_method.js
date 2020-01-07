var pub = require('../../public/public');

function first(){
	let datathis = pub.getToken();
	return datathis;
}

module.exports =  {
	first:first
}