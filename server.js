const http = require('http');

function onRequest(request, response){
    console.log(request.url);
    response.writeHead(200, {"content-Type":"text/html"});
    response.end(`<h1>Hello</hello><br>So you wanna visit "${request.url}" huh??`);
}

var server = http.createServer(onRequest);

server.listen(3000);
console.log('server started @ port 3000');