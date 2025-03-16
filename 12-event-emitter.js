// Event-driven
// Setting up of event-driven

const EventEmitter = require('events'); // a standard naming is EventEmitter class

const customEmitter = new EventEmitter(); // instance of a class
var username = "angelo";
var password = ""
// on and emit are usually used in this object
// on listen for an event
// emit will trigger the event
customEmitter.on('response', (name, id)=>{  // value is the name of event
    console.log(`data received user ${name} with id: ${id}`);
}); 

customEmitter.on('response', ()=>{  // value is the name of event

    console.log(`some other logic `);
}); 

customEmitter.emit(`response`, "john", 34); // the value of on is need to be in the emit value

