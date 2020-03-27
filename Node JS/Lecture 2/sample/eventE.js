const events = require('events');

const eventEmitter = new events.EventEmitter();


eventEmitter.on('click', function(num) {
    console.log('Сработало событие click' + num);
});

eventEmitter.on('click', function(num) {
    console.log('Сработало событие click');
});

eventEmitter.emit('click', 5);