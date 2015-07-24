var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('./docDBUtils');

module.exports = function (io, config) {
    io.on('connection', function (socket) {
        console.log('a user connected');
        
        var docDbClient = new DocumentDBClient(process.env.DOCUMENT_DB_HOST, {
            masterKey: process.env.DOCUMENT_DB_AUTH_KEY
        });
        
        docdbUtils.initCollection(docDbClient, 'chatroom', 'messages', function (err, collection) {
            if (err) {
                console.warn(err.message);
            } else {
                docDbClient.queryDocuments(collection._self, 'SELECT r.content FROM root r')
                    .forEach(function (err, msg) {
                        if (msg) {
                            console.log('emitting chat');
                            socket.emit('chat', msg.content);
                        }
                    });
            }
        });
        
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
        
        socket.on('chat', function (msg) {
            docdbUtils.initCollection(docDbClient, 'chatroom', 'messages', function (err, collection) {
                if (err) {
                    console.warn(err.message);
                } else {
                    var documentDefinition = { content: msg };
                    docDbClient.createDocument(collection._self, documentDefinition, function (err, o) {
                        if (err) {
                            console.warn(err.message);
                        } else {
                            console.log("chat message inserted into db: " + msg);
                        }
                    });
                }
            });
            
            socket.broadcast.emit('chat', msg);
        });
    });
};