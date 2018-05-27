const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    console.log(request.url);
    response.writeHead(200, {"content-Type":"text/html"});
    
    var data1 = fs.readFileSync('./index.html','utf-8');
    response.end(data1);
}

var server = http.createServer(onRequest);

server.listen(3000);
console.log('server started @ port 3000');