const events = require('events');

const eventEmitter = new events.EventEmitter();

const eventHandler = () => {
    console.log('Event')
    // eventEmitter.emit('event_received')
}

eventEmitter.on('event_received', () => {
    console.log("Event received successfully")
    eventHandler();
});

// eventHandler.emit('event_received');
eventEmitter.emit('event_received');