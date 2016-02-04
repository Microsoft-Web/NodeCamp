<a name="title" />
# Connecting the Frontend and Backend #

---
<a name="Overview" />
## Overview ##

This demo introduces the use of Socket.io in the client side of the application to listen and send messages to the server. Additionally, it shows how to include JS files like JQuery, bootstrap and socket.io to the client side, adding them in the views.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Add libraries to the Frontend

1. Listen and handle Socket.io messages in the Frontend

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Socket.IO][2]
- [Node.js Tools for Visual Studio][3]
- [Visual Studio Community 2015][4]

[1]: https://nodejs.org/
[2]: http://socket.io/
[3]: https://www.visualstudio.com/features/node-js-vs
[4]: https://www.visualstudio.com/products/visual-studio-community-vs

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Install [Visual Studio Community 2015](https://go.microsoft.com/fwlink/?LinkId=691978).

1. Install [Node.js](https://nodejs.org/en/download/).

1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).

1. Open Windows Explorer and browse to the **source** folder.

1. Right-click **Setup.cmd** and select **Run as administrator** to launch the setup process that will configure your environment and install the Visual Studio code snippets for this demo.

1. If the User Account Control dialog box is shown, confirm the action to proceed.

1. Open Visual Studio.

1. Open the **Chatroom.sln** solution located under **source\Begin**.

1. Install the missing npm packages by right-clicking the **npm** node of the project and selecting **Install Missing npm Packages...**.

	![Installing Missing npm Packages](images/VSCommunity/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_

	> **Note:** If the **Path Too Long Warning** dialog box appears, click on the **Do nothing, but warn me next time it happens** option.

	> ![Path Too Long Warning](images/VSCommunity/path-too-long-warning-dialog-box.png?raw=true "Path Too Long Warning")

	> _Installing Missing npm Packages_

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as Visual Studio Code Snippets, which you can access from within Visual Studio to avoid having to add it manually.

> **Note:** This demo is accompanied by a starting solution located in the **Begin** folder that allows you to follow the demo. Inside the source code you will also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use these solutions as guidance if you need additional help as you work through this demo.

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Adding libraries to the Frontend](#segment1)
1. [Listening and handling messages](#segment2)

<a name="segment1" />
### Adding libraries to the Frontend ###

1. Open the **layout.jade** file located in the **views** folder and add the following code below the `block content` line.

	> **Speaking Point:** This includes the jQuery library hosted on the Microsoft Ajax Content Delivery Network. This CDN hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your Web applications. You can significantly improve the performance of your Ajax applications by using a CDN. The contents of the CDN are cached on servers located around the world. The CDN supports SSL (HTTPS) in case you need to serve a web page using the Secure Sockets Layer.

	````JavaScript
	script(type='text/javascript' src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js')
	````

1. Now, add the following code to include bootstrap and socket.io client.

	> **Speaking Point:** Socket.io provides its own client, that's why you are targeting the file located in the socket.io folder.

	````JavaScript
	script(type='text/javascript' src='/javascripts/bootstrap.min.js')
	script(type='text/javascript' src='/socket.io/socket.io.js')
	````

1. Create a new **index.js** file in the **public/javascripts** folder.

1. Open the **index.jade** file under the **views** folder and add the following code at the end to include the **index.js** file to the view.

	````JavaScript
	block body_end
		script(type='text/javascript' src='/javascripts/index.js')
	````

<a name="segment2" />
### Listening and handling messages ###

1. Open the **index.js** file in the **public/javascripts** folder and add the following code.

	````JavaScript
	var socket = io();
	````

1. 	Now, add a click handler for the **Send Message** button which will send the message to the server.
	
	> **Note:**  The node backend will not resend the message that the client wrote back to itself but that’s alright because we added the message right away in the click function handler.

	(Code Snippet - _ConnectingFrontAndBack - SendMessages_)

	````JavaScript
	$('#send-message-btn').click(function () {
		 var msg = $('#message-box').val();
		 socket.emit('chat', msg);
		 $('#messages').append($('<p>').text(msg));
		 $('#message-box').val('');
		 return false;
	});
	````

1. Add the following code to append the message received on the chat channel from other users to the  div element with **messages** id.

	(Code Snippet - _ConnectingFrontAndBack - AppendMessagesReceived_)
	
	````JavaScript
	socket.on('chat', function (msg) {
		 $('#messages').append($('<p>').text(msg));
	});
	````

1. Run the solution and open a second browser instance, navigate to the running site URL (e.g. [http://localhost:1337](http://localhost:1337) )

1. Send a few messages from the two different clients.

	![Sending messages from two different clients](images/VSCommunity/running-the-solution.png?raw=true "Sending messages from two different clients")

	_Sending messages from two different clients_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to use Socket.io in the client to listen and send messages to the server and how to include JS files like JQuery, bootstrap and socket.io to the client side by adding them in the views.

---
