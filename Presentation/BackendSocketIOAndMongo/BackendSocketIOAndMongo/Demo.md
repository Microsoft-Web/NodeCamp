<a name="title" />
# Building the Backend#

---
<a name="Overview" />
## Overview ##

A Websocket is a protocol designed to allow web applications to create a full-duplex channel over TCP between the web browser and a web server. It is fully compatible with HTTP and uses TCP port number 80. 
WebSockets allowed web applications to become real-time and support advanced interactions between the client and the server. 

Socket.IO is a simple JavaScript library and Node.js module that allows you to create real-time bidirectional event-based communication apps simply and quickly. It simplifies the process of using WebSockets significantly.

Azure DocumentDB is a NoSQL document database service designed from the ground up to natively support JSON and JavaScript directly inside the database engine. It’s the right solution for applications that run in the cloud when predictable throughput, low latency, and flexible query are key.

This demo introduces the use of the Socket.IO module that allows to create real-time bidirectional communication. Here we see how to connect, broadcast and receive messages in a chat app. It also shows how to use DocumentDB, a NoSQL database to save and retrieve messages.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Create a bidirectional communication between client and server by using Socket.IO module.

1. Add DocumentDB to your app for retrieving and saving messages.

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Socket.IO][2]
- [DocumentDB][3]
- [Node.js Tools for Visual Studio][4]
- [Visual Studio Community 2013][5]

[1]: https://nodejs.org/
[2]: http://socket.io/
[3]: http://azure.microsoft.com/en-us/services/documentdb/
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[5]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Install [Visual Studio Community 2013](https://go.microsoft.com/fwlink/?LinkId=517284).
1. Install [Node.js](https://nodejs.org/download/)
1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).
1. Open Windows Explorer and browse to the **source** folder.
1. Right-click on **Setup.cmd** and select **Run as administrator** to launch the setup process that will configure your environment and install the Visual Studio code snippets for this demo.
1. If the User Account Control dialog box is shown, confirm the action to proceed.
1. Open Visual Studio.

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as Visual Studio Code Snippets, which you can access from within Visual Studio to avoid having to add it manually.

> **Note:** This demo is accompanied by a starting solution located in the **Begin** folder that allows you to follow the demo. Inside the source code you will also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use these solutions as guidance if you need additional help as you work through this demo.

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Creating a chat server with Socket.IO](#segment1)
1. [Saving messages into a DocumentDB database](#segment2)
1. [Appendix: Saving messages into a MongoDB database](#appendix1)

<a name="segment1" />
### Creating a chat server with Socket.IO ###

1. Open the **Begin** solution inside **source** folder.

1. Right-click on the **npm** node of the project and select **Install New npm Packages**.

	![Installing Node packages](images/installing-node-packages.png?raw=true "Installing Node packages")

	_Installing new Node package_

1. Search for **Socket.IO**. Select the top result and make sure the **Add to package.json** checkbox is checked before installing the package. 

	> **Note:** This will install socket.io into your project and add it to the package.json file. You can achieve the same by running the `npm install --save socket.io` command.

	![Installing Socket.IO package](images/installing-socket-io-package.png?raw=true "Installing Socket.IO package")

	_Installing Socket.IO package_

1. Show the **package.json** file.

	![package.json file](images/package-json.png?raw=true "package.json file")

	_package.json_

1. Open **app.js** file and insert the following code snippet before the `module.exports = app;` line.

	> **Speaking point:** Here we capture the HTTP server in a variable called **serve** and pass it to the socket.io module so it can attach to it. Then, the **listen** function is executed to start the HTTP server.
We then log each user entering the chatroom by hooking a callback function to be executed on every single “connection” event via WebSocket to our HTTP server. 
To do the same for when a user leaves, we have to hook up to the “disconnect” event for each socket.


	(Code Snippet - _NodeJsSocketIO-server_)

	````JavaScript
	app.set('port', process.env.PORT || 3000);

	var http = require('http');
	var serve = http.createServer(app);
	var io = require('socket.io')(serve);

	serve.listen(app.get('port'), function () {
		 console.log('Express server listening on port ' + app.get('port'));
	});

	io.on('connection', function (socket) {
		 console.log('a user connected');

		 socket.on('disconnect', function () {
			  console.log('user disconnected');
		 });
	});
	````

1. In the **app.js** file add the following snippet inside and before closing the callback function for the "connection" event.


	> **Speaking point:** Socket.IO gives us a function called **emit** that we can use to send an event. We will use it to broadcast any message received on the “chat” channel to all the other connections on this socket.
 
	(Code Snippet - _NodeJsSocketIO-broadcast-message_)

	````JavaScript
	socket.on('chat', function (msg) {
		  socket.broadcast.emit('chat', msg);
    });
	````

<a name="segment2" />
### Saving messages into a DocumentDB database ###

1. Install **documentdb** package as you did with **socket.IO** package in previous segment.

1. Add the following code ...

	````JavaScript
	var DocumentDBClient = require('documentdb').DocumentClient;
	````

1. TBC

---

<a name="appendix1" />
### Appendix: Saving messages into a MongoDB database ###

1. Install **MongoDB** package as you did with **socket.IO** package in previous segment.

	![Installing MongoDB](images/installing-mongo-db.png?raw=true "Installing MongoDB")

	_Installing MongoDB_

1. Add the following code before `var app = express();` line in **app.js** file:

	`var mongo = require('mongodb').MongoClient;`

1. Add the next code snippet inside the "connection" event and after the `console.log('a user connected');` line:

	> **Speaking point:** We want to give our users the last 10 messages from the chatroom so they have some context when they just joined. To do that, we need to connect to Mongo. We use the **limit** function to limit the results to only 10 messages. We will stream the results from Mongo so that we emit them as soon as they arrive to the chatroom.
	
	(Code Snippet - _NodeJsSocketIO-mongoDB-retrieve-messages_)

	````JavaScript
    mongo.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI, function (err, db) {
        if(err){
            console.warn(err.message);
        } else {
            var collection = db.collection('chat messages')
            var stream = collection.find().sort().limit(10).stream();
            stream.on('data', function (chat) { console.log('emitting chat'); socket.emit('chat', chat.content); });
        }
    });
	````

1. Add the next code snippet inside the "chat" event and before the `socket.broadcast.emit('chat', msg);` line:

	> **Speaking point:** We want to connect to the database using the URI we have in the **CUSTOMCONNSTR_MONGOLAB_URI** environment variable and insert the chat message received in the socket connection.

	(Code Snippet - _NodeJsSocketIO-mongoDB-save-message_)

	````JavaScript
	mongo.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI, function (err, db) {
		if (err) {
			console.warn(err.message);
		} else {
			var collection = db.collection('chat messages');
			collection.insert({ content: msg }, function (err, o) {
				if (err) { console.warn(err.message); }
				else { console.log("chat message inserted into db: " + msg); }
			});
		}
	});
	````

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a simple chat application where communictaion between users and server is implemented using Socket.IO module. You have also seen how to save/retrieve messages to/from a NoSQL database like MongoDB.

---
