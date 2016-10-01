//manera de incluir librerias
//ya utiliza un http server entonces nada mas se llama
var http = require('http');
var Router = require('node-router');

var router = Router();
var route = router.push;
//rutas:
route('GET', '/uno', function(request,response){
	console.log('llamada al index.');
	response.send('Hola mundo de rutas yeyyy!');
})
route('GET' , '/dos', function(request,response){
	console.log('llamada al /hola');
	response.send('error');
})

var server = http.createServer(router);
server.listen(8000,function(){
	console.log('Escuchando puerto 8000');
});