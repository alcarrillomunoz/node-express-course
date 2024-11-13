const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('user', (name) => {
    console.log(`Hi there, ${name}!`);
})
customEmitter.on('greeting', (time) => {
    console.log(`How are you this ${time}?`);
})
customEmitter.emit('user', 'Patrick Star');
customEmitter.emit('greeting', 'morning');