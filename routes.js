var http = require('http');
var fs = require('fs');

function onRequst(request, response){
    switch(request.url){
        case '/':
        response.writeHead('200',{'Content-Type' : 'text/html'});
            fs.createReadStream('./index.html','utf8').pipe(response);
            break;
        case '/home':
            response.writeHead('200',{'Content-Type' : 'text/html'});
            fs.createReadStream('./home.html','utf8').pipe(response);
            break;
        case '/api':
            var myData = {
                id: '1052',
                location: 'Bhadrakali',
                long: 85.3240,
                lat: 27.7172,
                time: '14:55',
                date: '25/5/2018',
                sensors:{
                    temp: 22.5,
                    humidity: 33.6,
                    co2: 143,
                    ozone: 223,
                    Pm2_5: 10,
                    pm10: 41,
                    so2: 96,
                    no2: 34
                }
            };
            response.writeHead('200',{'Content-Type' : 'application/json'});
            response.end(JSON.stringify(myData));
        default:
            response.writeHead('200',{'Content-Type' : 'text/html'});   
            response.end('<h1><font color = "red"> 404!!<br>You know what it means.</font></h1>');
    }
}

var server = http.createServer(onRequst);
server.listen('3000');
console.log('Server @ port 3000: _Routing_');