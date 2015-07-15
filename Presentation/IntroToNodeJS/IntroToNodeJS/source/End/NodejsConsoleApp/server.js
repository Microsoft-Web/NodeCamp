var net = require('net');

// The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function (socket) {
    console.log("Connection from " + socket.remoteAddress);
    socket.end("Hello World\n");
});

server.listen(7000, "127.0.0.1");

console.log('TCP server running at 127.0.0.1:7000');