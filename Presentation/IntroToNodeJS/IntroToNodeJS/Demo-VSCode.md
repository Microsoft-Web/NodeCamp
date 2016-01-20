<a name="title" />
# Introduction to Node.js #

---
<a name="Overview" />
## Overview ##

Node.js is a runtime environment and library for running JavaScript applications outside the browser. It is mostly used to run real-time server applications and its performance shines with non-blocking I/O and asynchronous events.

In this demo we will show simple code examples from the classic Hello World app to a basic HTTP and TCP server. We will write code to read a file asynchronously. Finally, we'll show the use of Node Package Manager to install/update Node.js packages in Node project.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Create a simple Hello World application using Node

1. Create a basic HTTP server

1. Create a basic TCP server

1. Read files asynchronously vs synchronously

1. Install and update Node packages through the Node Package Manager

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Visual Studio Code][2]

[1]: https://nodejs.org/
[2]: https://code.visualstudio.com/

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Download [Visual Studio Code](https://code.visualstudio.com/Download) for your platform and follow the [installation and setting up instructions](https://code.visualstudio.com/Docs/editor/setup).
1. Install [Node.js](https://nodejs.org/download/).
1. Open File Explorer and browse to the **source/Setup** folder.
1. Copy the **nodecamp-introtonodejs-snippets** folder and paste it into the Visual Studio Code Extensions folder to install the JavaScript snippets for this demo. Depending on your platform it is located:
 * **Windows**: `%USERPROFILE%\.vscode\extensions`
 * **Mac**: `$HOME/.vscode/extensions` 
 * **Linux**: `$HOME/.vscode/extensions`

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as code snippets, which you can access from within Visual Studio Code to avoid having to add it manually.

> **Note:** Inside the source code you will also find an **End** folder containing the code that results from completing the steps in the demo. You can use this folder as guidance if you need additional help as you work through this demo.

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Creating our first Node.js application](#segment1)
1. [Creating a basic HTTP server](#segment2)
1. [Creating a basic TCP server](#segment3)
1. [Reading file content synchronously vs asynchronously](#segment4)
1. [Introducing Node Package Manager](#segment5)

<a name="segment1" />
### Creating our first Node.js application ###

1. Open a **command prompt/terminal** according to your platform.
1. Run **mkdir NodejsConsoleApp** to create a new directory and then **cd NodejsConsoleApp** to navigate to it.

	![Creating a new working directory for a Node.js Application](images/VSCode/creating-a-new-working-directory.png?raw=true "Creating a new working directory for a Node.js Application")

	_Creating a new working directory for a Node.js Console Application_

1. Run **npm init -f** to initialize the current folder with a **package.json** file.

	![Initializing a Node.js Application with a package.json file](images/VSCode/initializing-a-nodejs-application-with-packagejson.png?raw=true "Initializing a Node.js Application with a package.json file")

	_Initializing a Node.js Console Application with a package.json file_

1. Run **code .** to open the current directory with **Visual Studio Code**.

1. In the **Explore** panel, create a new **app.js** file by clicking the **New File** icon and fill its content with the following code snippet.

	(Code Snippet - _NodeJsIntroduction-HelloWorld_)

	````JavaScript
	console.log('Hello world');
	````

	![Creating the app.js file](images/VSCode/creating-the-app-js-file.png?raw=true "Creating the app.js file")

	_Creating the app.js file_

1. Go back to the command prompt/terminal and run **node app.js** to execute the Node.js console application.

	![Running the Node.js console app](images/VSCode/running-the-console-app.png?raw=true "Running the Node.js console app")

	_Running the Node.js console app_

<a name="segment2" />
### Creating a basic HTTP server ###

1. Go back to Visual Studio Code and replace the content of the **app.js** file with the following code snippet:

	(Code Snippet - _NodeJsIntroduction-CreateHttpServer_)

	````JavaScript
	var http = require('http');

	var server = http.createServer(function (request, response) {
		 response.writeHead(200, { "Content-Type": "text/plain" });
		 response.end("Hello World\n");
	});

	server.listen(7000);

	console.log('Navigate to http://localhost:7000');
	````

1. Switch back to the command prompt/terminal and run the **node app.js** command again.

	![Running the Node.js HTTP server](images/VSCode/running-the-http-server.png?raw=true "Running the Node.js HTTP server")

	_Running the Node.js HTTP server_

1. Open your browser and navigate to **http://localhost:7000**.

	![Navigating to the HTTP server](images/VSCode/navigating-to-the-http-server.png?raw=true "Navigating to the HTTP server")

	_Navigating to the HTTP server_

1. Stop the HTTP server by pressing **Ctrl + C** in the command prompt.

<a name="segment3" />
### Creating a basic TCP server ###

1. Switch back to Visual Studio Code. In the **Explore** panel, create a new **server.js** file by clicking the **New File** icon and fill its content with the following code snippet.

	(Code Snippet - _NodeJsIntroduction-TcpServer_)

	````JavaScript
	var net = require('net');

	// The handler argument is automatically set as a listener for the 'connection' event
	var server = net.createServer(function (socket) {
		 console.log("Connection from " + socket.remoteAddress);
		 socket.end("Hello World\n");
	});

	server.listen(7000, "127.0.0.1");

	console.log('TCP server running at 127.0.0.1:7000');
	````

	![Creating a server.js file](images/VSCode/creating-a-serverjs-file.png?raw=true "Creating a server.js file")

	_Creating a server.js file_

1. Add another JavaScript file named **client.js** and copy the following code snippet in it:

	(Code Snippet - _NodeJsIntroduction-TcpClient_)

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

	![Creating a client.js file](images/VSCode/creating-a-clientjs-file.png?raw=true "Creating a client.js file")

	_Creating a client.js file_

1. Back in the command prompt/terminal, run **node server.js**.

	![Running the TCP server](images/VSCode/running-the-tcp-server.png?raw=true "Running the TCP server")

	_Running the TCP server_

1. Open a second command prompt/terminal in the same directory and run **node client.js**.

	![Running the TCP client](images/VSCode/running-the-tcp-client.png?raw=true "Running the TCP client")

	_Running the TCP client_

1. Close the client command prompt/terminal and stop the TCP server by pressing **Ctrl + C** in the command prompt/terminal running the server.

<a name="segment4" />
### Reading file content synchronously vs asynchronously ###

1. Switch back to Visual Studio Code and add a new JavaScript file named **file-reader-sync.js**.

1. Copy the following code snippet in the **file-reader-sync.js** file you created.

	(Code Snippet - _NodeJsIntroduction-FileReaderSync_)

	````JavaScript
	var fs = require('fs');

	var contents = fs.readFileSync('package.json').toString();
	console.log(contents);
	````

1. Switch back to the command prompt/terminal and run **node file-reader-sync.js**.

	![Reading a file synchronously](images/VSCode/reading-a-file-synchronously.png?raw=true "Reading a file synchronously")

	_Reading a file synchronously_

1. Now, back in Visual Studio code, add another JavaScript file named **file-reader-async.js**.

1. Copy the following code snippet to the **file-reader-async.js** file.
	
	(Code Snippet - _NodeJsIntroduction-FileReaderAsync_)

	````JavaScript
	var fs = require('fs');

	fs.readFile('package.json', function (err, buf) {
		 console.log(buf.toString());
	});
	````

1. Run the **node file-reader-async.js** command.

	![Reading a file asynchronously](images/VSCode/reading-a-file-asynchronously.png?raw=true "Reading a file asynchronously")

	_Reading a file asynchronously_

<a name="segment5" />
### Introducing Node Package Manager ###
Node Package Manager (NPM) is the official package manager for Node.js. It is bundled and installed automatically with the environment. NPM runs through the command line and manages dependencies for an application. It reads the **package.json** file and installs the dependencies found there in the **node_modules** folder.

Running `npm install <package-name> --save` installs the package and saves the dependency in the **package.json** file.

1. In the command prompt/terminal, run `npm install express --save`.

	![Installing express dependency using npm](images/VSCode/installing-express-dependency-using-npm.png?raw=true "Installing express dependency using npm")

	_Installing express dependency using npm_

1. In Visual Studio Code show the new express dependency in the **package.json** file and in the **node_modules** folder in the **Explore** panel.

	![Showing the installed dependency in Visual Studio Code](images/VSCode/showing-the-installed-dependency.png?raw=true "Showing the installed dependency in Visual Studio Code")

	_Showing the installed dependency in Visual Studio Code_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a new Node.js project by using Visual Studio Code as well as how to create a basic HTTP and TCP server and read files asynchronously. Additionally, you have seen how to use the Node Package Manager to install/update Node packages in your project.

---
