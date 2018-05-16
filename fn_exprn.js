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
//callFunction(sayBye,"Kitty");


var adder = function(a,b){
    console.log(`The sum is:${a+b}`);
}

var lang = 'en-us';

module.exports.callfn = callFunction;      //allows to use the 'callFunction' in other modules
module.exports.add = adder;
module.exports.lang = lang;
module.exports.sayBye = sayBye;
module.exports.sayHello = sayHello;