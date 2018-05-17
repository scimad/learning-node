var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
//reads in chunks. 
//'./readme.txt' is cool too
//fs.createReadStream('./readme.txt') gives the raw chunk too.


//createReadStream inherits EventEmitter. So, the following:
myReadStream.on('data',function(chunk_block){
    //this function is called many times depending upon the size of file
    console.log('new chunk received:');
    console.log(chunk_block);
});

myReadStream.on('error',function(readError){
    console.log('Oops!');
    console.log('Read error occurred with error code' + readError.errno);
});