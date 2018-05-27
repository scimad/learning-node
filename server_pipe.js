const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    console.log(request.url);
    response.writeHead(200, {"Content-Type":"text/plain"});
    
    var myReadStream = fs.createReadStream('./index.html','utf8');

    myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

server.listen(3000); //server.listen(3000,'127.0.0.1'); 
console.log('server started @ port 3000 using pipe');