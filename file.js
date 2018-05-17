var fs = require('fs');

//Synchronous Call
var data1 = fs.readFileSync('./index.html','utf-8');
console.log(data1);
fs.writeFileSync('./writeMe.txt',data1);
console.log("File Created!");

fs.unlink('./writeMe.txt',function(err){
    if(!err){
        console.log('Created File Deleted.\n\n');
    }else{
        console.log('Err occurred while deleting the created file.');
    }
});

//Asynchronous Call
function doOrDie(err,data){
    if (err){
        console.log("Error occurred:",err);
    }else{
        console.log('This should print second.');
        console.log('Read OK:\n',data);
    }
}

fs.readFile('./index.html','utf-8',doOrDie);    //This is async
console.log("This prints first!!");             //happens so because the fs.readFile is non blocking

//fs.mkdir , fs.mkdirSync, fs.rmdir, fs.rmdirSync for folder related operations