
var http = require('http');
var fs = require('fs');


function chunkRead(chunkData,){
    console.log(chunkData);
    myWriteStream.write(chunkData);
}

var myReadStream = fs.createReadStream('./readme.txt','utf8');
var myWriteStream = fs.createWriteStream('./writeme.txt');

myReadStream.on('data', chunkRead); //manually Listening for data event
