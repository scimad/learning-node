const events = require('events');
var EventEmitter = events.EventEmitter;

var Counter = function(init){
    this.increment = function(){
        init++;
        this.emit('incremented', init);
    }
}

Counter.prototype = new EventEmitter();

var counter = new Counter(10);

var callback = function(count){
    console.log(count);
}

counter.addListener('incremented', callback);


