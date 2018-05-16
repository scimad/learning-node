var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();
myEmitter.on('error', function(code){       //registering an event listener for error
    console.log(`Oops!! I got ${code}.`);
});

myEmitter.emit('error','404');              //emitting the event 'error'

var Person = function(abc){
    this.name = abc;
}

util.inherits(Person, events.EventEmitter); //object created using Persion() constructor inherits EventEmitter 

var b4 = new Person('Bichar');
var scimad = new Person ('Madhav');
var ram = new Person('Ramanujan');

var people = [b4, scimad, ram];

people.forEach(function(someone){
    someone.on('speak',function(msg){
        console.log(`${someone.name} said ${msg}.`);
    });
});

ram.emit('speak','universe is great');