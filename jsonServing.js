const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    console.log(request.url);
    response.writeHead(200, {"Content-Type":"application/json"});
    
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
        
    }

    response.end(JSON.stringify(myData));
}

var server = http.createServer(onRequest);

server.listen(3000); //server.listen(3000,'127.0.0.1'); 
console.log('server started @ port 3000');