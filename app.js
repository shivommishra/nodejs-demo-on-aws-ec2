var http = require('http');

function onRequest(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hi Nodejs demo');
    response.end();
}

http.createServer(onRequest).listen(8000);
 