module.exports = function (io, config) {
    io.on('connection', function (socket) {
        console.log('a user connected');

        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
        
        socket.on('chat', function (msg) {
            socket.broadcast.emit('chat', msg);
        });
    });
};