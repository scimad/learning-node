const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    fs.readFile('./index.html',null,function(err, data){
        if (err){
            response.writeHead(404);
            response.write('File Not Found!!!!');
            
        }else{
            response.writeHead(200, {"content-Type":"text/plain"});
            response.write(data);
        }
        response.end();
    });
}

var server = http.createServer(onRequest);

server.listen(3000);
