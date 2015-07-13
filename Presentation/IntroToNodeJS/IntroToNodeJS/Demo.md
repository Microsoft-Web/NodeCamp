<a name="title" />
# Introduction to Node.js #

---
<a name="Overview" />
## Overview ##

Node.js is a runtime environment and library for running JavaScript applications outside the browser. It is mostly used to run real-time server applications and shines through its performance using non-blocking I/O and asynchronous events.

In this demo we will show simple code examples from the classic Hello World app to a basic Http and TCP server. We will write code to read a file asynchronously. Finally, we'll show the use of Node Package Manager to install/update Node.js packages in Node project.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Create a simple Hello World application using Node.

1. Create a basic Http server.

1. Create a basic TCP server.

1. Read files asynchronously vs synchronously.

1. Install and update Node packages through the Node Package Manager.

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Node.js Tools for Visual Studio][2]
- [Visual Studio Community 2013][3]

[1]: https://nodejs.org/
[2]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[3]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

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

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Creating our first Node.js application](#segment1)
1. [Introducing Node Package Manager](#segment2)

<a name="segment1" />
### Creating our first Node.js application ###

1. Go to **File | New | Project**.
1. In the **Templates | JavaScript | Node.js** tab, select the **Blank Node.js Console Application** project. Name it **NodejsConsoleApp**.

	![Creating a new Node.js Application](images/create-new-node-application.png?raw=true "Creating a new Node.js Application")

	_Creating a new Node.js Console Application_

1. In the **Solution Explorer**, open the **app.js** file.

	![app.js file](images/app-file.png?raw=true "app.js file")

	_app.js file_

1. Open a command prompt and navigate to the project folder.
1. Run **node app.js** command to execute the Node.js console application.

	![Run the console app](images/run-console-app.png?raw=true "Run console app")

	_Run the Node.js console app_

1. Get back to Visual Studio an replace the content of the **app.js** file with the following snippet:

	(Code Snippet - _NodeJsIntroduction-CreateHttpServer_)

	````JavaScript
	var http = require('http');

	var server = http.createServer(function (request, response) {
		 response.writeHead(200, { "Content-Type": "text/plain" });
		 response.end("Hello World\n");
	});

	server.listen(7000);
	````
1. Run **node app.js** command again.
1. Open Interner Explorer and navigate to **http://localhost:7000**.

	![Run Http server](images/run-http-server.png?raw=true "Run Http server")

	_Run the Http server_

1. Stop the Http server by pressing **Ctrl + C** in the command prompt.
1. Add a new JavaScript file named **server.js** and copy the next code snippet in it:

	(Code Snippet - _NodeJsIntroduction-Tcp-Server_)

	````JavaScript
	var net = require('net');

	// The handler argument is automatically set as a listener for the 'connection' event
	var server = net.createServer(function (socket) {
		 console.log("Connection from " + socket.remoteAddress);
		 socket.end("Hello World\n");
	});

	server.listen(7000, "127.0.0.1");
	````

1. Add another JavaScript file named **client.js** and copy the next code in it:

	(Code Snippet - _NodeJsIntroduction-Tcp-Client_)

	````JavaScript
	var net = require('net');

	var client = new net.Socket();

	client.connect(7000, "127.0.0.1");

	client.on('data', function (data) {
		 console.log('Data: ' + data);
		 client.destroy();
	});

	// Add a 'close' event handler for the client socket
	client.on('close', function () {
		 console.log('Connection closed');
	});
	````
1. Back in the command prompt run **node server.js** command.
1. Open a second command prompt and navigate to the project folder.
1. Run **node client.js** command.

	![Run TCP server](images/run-tcp-server.png?raw=true "Run TCP server")

	_Run the TCP server_

1. Stop the TCP server by pressing **Ctrl + C** in the command prompt running the server.
1. Add a new JavaScript file and name it **file-reader-sync.js**.
1. Copy the next code snippet in it:

	(Code Snippet - _NodeJsIntroduction-File-Reader-Sync_)

	````JavaScript
	var fs = require('fs');

	var contents = fs.readFileSync('package.json').toString();
	console.log(contents);
	````
1. Run the **node file-reader-sync.js** command.

	![Read file synchronously](images/read-file-sync.png?raw=true "Read file synchronously")

	_Read file synchronously_

1. Add another JavaScript file named **file-reader-async.js**.
1. Copy the following coode snippet in it:
	
	(Code Snippet - _NodeJsIntroduction-File-Reader-Async_)

	````JavaScript
	var fs = require('fs');

	fs.readFile('package.json', function (err, buf) {
		 console.log(buf.toString());
	});
	````
1. Run the **node file-reader-async.js** command.

	![Read file asynchronously](images/read-file-async.png?raw=true "Read file asynchronously")

	_Read file asynchronously_

<a name="segment2" />
### Introducing Node Package Manager ###
Node Package Manager (NPM) is the official package manager for Node.js. It is bundled and installed automatically with the environment. NPM runs through the command line and manages dependencies for an application. It reads **package.json** file and installs the dependencies found there in the **node_modules** folder.

Running `npm install <package-name> --save` installs the package and saves the dependency in the **package.json** file.

1. Open a command prompt and navigate to the project folder.
1. Run `npm install jquery --save`.

	![Run NPM](images/run_npm.png?raw=true "Run NPM")

	_Install jQuery through NPM_

1. In Visual Studio show the new jQuery dependency in the **package.json** file and in the npm node of the Solution Explorer.

	![jQuery dependency in package.json](images/jquery-package-json.png?raw=true "jQuery dependency in package.json")

	_jQuery dependency in package.json_

	![jQuery dependency in solution explorer.json](images/jquery-solution-explorer.png?raw=true "jQuery dependency in solution explorer")

	_jQuery dependency in Solution Explorer_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a new Node.js project by using Node Tools for Visual Studio extensions. You have known how to create a basic Http and TCP server and read files asynchronously. Additinally, you have seen the use of the Node Package Manager to install/update Node packages into your project.

---
