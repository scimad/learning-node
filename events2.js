var events = require('events');

var myEmitter = new events.EventEmitter();
myEmitter.on('error', function(code){       //registering an event listener for error
    console.log(`Oops!! I got ${code}.`);
});

myEmitter.emit('error','404');              //emitting the event 'error'
