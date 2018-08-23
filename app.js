//ES5 -> ES6
// El uso de VAR a partir de ES6 esta prohibido

//var http = require ("http");

//se cambia a cons para almacenar solo el espacio de memoria necesario, pq js guarda el max espacio con var
cons http = require ("http");
//funcion que se encarga de ejecutar el servidor

//primera implementacion
function server (request, response){
  response.writeHead(200, {"Content-Type":"text/html"});
  // el 200 es codigo de estado, la familia de 200 es todo ocurrio correctamente
  response.write("Hola Mundo...");
  //ahora se escribe el cuerpo
  response.end();
  //debe llevar un end para terminar el response
}

//para ejecutar el servidor
http.createServer(server).listen(8080);

//SEGUNDA implementacion
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type":"text/html"});
  response.write("Hola Mundo...");
  response.end();
}).listen(8080);

//TERCERA implementacion
http.createServer((request, response)=> {
  //se sustituye Function por =>
  response.writeHead(200, {"Content-Type":"text/html"});
  response.write("Hola Mundo...");
  response.end();
}).listen(8080);
