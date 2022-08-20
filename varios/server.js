var http = require('http');

function iniciar() {
    function onRequest(request, response) {
        console.log("Peticion Recibida.");
        response.writeHead(200, {"Content‐Type": "text/html"});
        response.write("Hola Mundo"); 
        response.end();
        }    

    http.createServer(onRequest).listen(8890);
    console.log('servedor inicial');
    
}

exports.iniciar = iniciar;