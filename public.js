 function createXhr() {
 	alert(1);
 	try {return new XMLHttpRequest();} catch(e){}
 	try {return new ActiveXObject('Microsoft.XMLHTTp')} catch(e){}
 	alert('您的浏览器版本太低，请升级');
 }