<a name="title" />
# Connecting the Frontend and Backend #

---
<a name="Overview" />
## Overview ##

This demo introduces the use of Socket.io in the client-side of the application to listen and send messages to the server. Additionally, it shows how to include JS files like JQuery, bootstrap and socket.io to the client adding them in the views.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Adding libraries to the Frontend

1. Listening and handling Socket.io messages in the Frontend

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Socket.IO][2]
- [Node.js Tools for Visual Studio][3]
- [Visual Studio Community 2013][4]

[1]: https://nodejs.org/
[2]: http://socket.io/
[3]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Install [Visual Studio Community 2013](https://go.microsoft.com/fwlink/?LinkId=517284).

1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).

1. Open Visual Studio 2013.

1. Open the **NodeChatroom.sln** solution located under **source\Begin**.

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Adding libraries to the Frontend](#segment1)
1. [Listening and handling messages](#segment2)

<a name="segment1" />
### Adding libraries to the Frontend ###

1. Open the **layout.jade** file located inside the **views** folder and add the following code.

	> **Speaking Point:** This link to jQuery hosted on the Microsoft Ajax Content Delivery Network. This CDN hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your Web applications. You can significantly improve the performance of your Ajax applications by using a CDN. The contents of the CDN are cached on servers located around the world. The CDN supports SSL (HTTPS) in case you need to serve a web page using the Secure Sockets Layer.

	````JavaScript
	script(type='text/javascript' src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js')
	````

1. Now, add the following code to include bootstrap and socket.io client.

	> **Speaking Point:** Socket.io provides its own client, that's why you are targeting the file located in the socket.io folder.

	````JavaScript
	script(type='text/javascript' src='/javascripts/bootstrap.min.js')
	script(type='text/javascript' src='/socket.io/socket.io.js')
	````

1. Then, add the following line at the end to create a new block.

	> **Speaking Point:**  By doing this, any Jade file that extends **layout.jade** can also add script tags right before the end of the body tag.

	````JavaScript
	block body_end
	````

1. Now, create a new **index.js** file inside the **javascripts** folder.

1. Open the **index.jade** file and add the following code to include the **index.js** file to the view.

	````JavaScript
	block body_end
		script(type='text/javascript' src='/javascripts/index.js')
	````


<a name="segment2" />
### Listening and handling messages ###

1. Open the **socketio.js** file located at the root of the project. Find the `// TODO: Add code here.` comment and replace it with the following code.

 	> **Speaking Point:**  First, I want to reverse the sorting direction so that the oldest messages are sent first and second, I want to emit the previously received chat messages on the same channel as I plan on receiving the new messages.

	````JavaScript
	docDbClient.queryDocuments(collection._self, 'SELECT r.content FROM root r')
					.forEach(function (err, msg) {
						if (msg) {
							 console.log('emitting chat');
							 socket.emit('chat', msg.content);
						}
					});
	````

1. Open the **index.js** file inside the **public/js** folder and add the following code.

	````JavaScript
	var socket = io();
	````

1. 	Now, add a click handler for the **Send Message** button which will send the message to the server.
	
	> **Note:**  The node backend will not resend the message that the client wrote back to itself but that’s alright because we added the message right away in the click function handler.

	````JavaScript
	$('#send-message-btn').click(function () {
		 var msg = $('#message-box').val();
		 socket.emit('chat', msg);
		 $('#messages').append($('<p>').text(msg));
		 $('#message-box').val('');
		 return false;
	});
	````

1. Add the following code to append the message received on the chat channel from other users to the #messages div.

	````JavaScript
	socket.on('chat', function (msg) {
		 $('#messages').append($('<p>').text(msg));
	});
	````

1. Run the solution and send a few messages from two different clients.

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to use Socket.io in the client to listen and send messages to the server and how to include JS files like JQuery, bootstrap and socket.io to the client adding them in the views.

---
