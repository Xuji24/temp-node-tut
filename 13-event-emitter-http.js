const http = require('http');

// const server = http.createServer((req, res) => {
//  res.end('Welcome');
// });

// using event emitter API
const server = http.createServer();
const port = 5000;

// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) =>{
    res.end('Welcome');
})

server.listen(port);