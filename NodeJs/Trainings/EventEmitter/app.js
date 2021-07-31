// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');
let myEmitter = new events.EventEmitter();

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}
myEmitter.on('celebration',listenerCallback);
myEmitter.emit('celebration','Happy fucking Birthday')