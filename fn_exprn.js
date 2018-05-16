function sayHello(user){
    console.log('Hello ', user, ' :)');
}
//sayHello('Butterfly');

function callFunction(funct,param){
    funct(param);
}
var sayBye = function(username){
    console.log('Bye Bye', username, ' :(');
}
//sayBye('Sparrow');
callFunction(sayBye,"Kitty");