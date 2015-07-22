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
1. Right-click **Setup.cmd** and select **Run as administrator** to launch the setup process that will configure your environment and install the Visual Studio code snippets for this demo.
1. If the User Account Control dialog box is shown, confirm the action to proceed.
1. Open Visual Studio.

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as Visual Studio Code Snippets, which you can access from within Visual Studio to avoid having to add it manually.

> **Note:** Inside the source code you will also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use this solution as guidance if you need additional help as you work through this demo.

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

1. Go to **File | New | Project**.
1. In the **Templates | JavaScript | Node.js** tab, select the **Blank Node.js Console Application** project. Name it **NodejsConsoleApp**.

	![Creating a new Node.js Application](images/creating-a-new-nodejs-application.png?raw=true "Creating a new Node.js Application")

	_Creating a new Node.js Console Application_

1. In the **Solution Explorer**, open the **app.js** file.

	![Opening the app.js file](images/opening-the-app-js-file.png?raw=true "Openning the app.js file")

	_Opening the app.js file_

1. Right-click the project and select **Open Command Prompt Here...** from the menu to open the Node.js Command Prompt in the project's folder.

	![Opening the command prompt in the project's folder](images/opening-the-command-prompt.png?raw=true "Opening the command prompt in the project's folder")

	_Opening the command prompt in the project's folder_

1. Run **node app.js** in the Command Prompt to execute the Node.js console application.

	![Running the Node.js console app](images/running-the-console-app.png?raw=true "Running the Node.js console app")

	_Running the Node.js console app_

<a name="segment2" />
### Creating a basic HTTP server ###

1. Go back to Visual Studio and replace the content of the **app.js** file with the following snippet:

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

1. Switch back to the Node.js Command Prompt and run the **node app.js** command again.

	![Running the Node.js HTTP server](images/running-the-http-server.png?raw=true "Running the Node.js HTTP server")

	_Running the Node.js HTTP server_

1. Open Internet Explorer and navigate to **http://localhost:7000**.

	![Navigating to the HTTP server](images/navigating-to-the-http-server.png?raw=true "Navigating to the HTTP server")

	_Navigating to the HTTP server_

1. Stop the HTTP server by pressing **Ctrl + C** in the command prompt.

<a name="segment3" />
### Creating a basic TCP server ###

1. Switch back to Visual Studio. Right-click the project name and select **Add | New Item...**.

	![Creating a new item](images/creating-a-new-item.png?raw=true "Creating a new item")

	_Creating a new item_

1. In the **Add New Item** dialog box, select **JavaScript file**, name it **server.js** and click **Add**.

	![Creating a new JavaScript file](images/creating-a-new-js-file.png?raw=true "Creating a new JavaScript file")

	_Creating a new JavaScript file_

1. Copy the following code snippet in the **server.js** file you created.

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

1. Add another JavaScript file named **client.js** and copy the following code in it:

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

1. Back in the Command Prompt, run **node server.js**.

	![Running the TCP server](images/running-the-tcp-server.png?raw=true "Running the TCP server")

	_Running the TCP server_

1. Open a second Command Prompt and run **node client.js**.

	![Running the TCP client](images/running-the-tcp-client.png?raw=true "Running the TCP client")

	_Running the TCP client_

1. Stop the TCP server by pressing **Ctrl + C** in the command prompt running the server.

<a name="segment4" />
### Reading file content synchronously vs asynchronously ###

1. Switch back to Visual Studio and add a new JavaScript file named **file-reader-sync.js**.

1. Copy the following code snippet in the **file-reader-sync.js** file you created.

	(Code Snippet - _NodeJsIntroduction-FileReaderSync_)

	````JavaScript
	var fs = require('fs');

	var contents = fs.readFileSync('package.json').toString();
	console.log(contents);
	````

1. Switch back to the Command Prompt and run **node file-reader-sync.js**.

	![Reading a file synchronously](images/reading-a-file-synchronously.png?raw=true "Reading a file synchronously")

	_Reading a file synchronously_

1. Now, back in Visual Studio, add another JavaScript file named **file-reader-async.js**.

1. Copy the following code snippet to the **file-reader-async.js** file.
	
	(Code Snippet - _NodeJsIntroduction-FileReaderAsync_)

	````JavaScript
	var fs = require('fs');

	fs.readFile('package.json', function (err, buf) {
		 console.log(buf.toString());
	});
	````

1. Run the **node file-reader-async.js** command.

	![Reading a file asynchronously](images/reading-a-file-asynchronously.png?raw=true "Reading a file asynchronously")

	_Reading a file asynchronously_

<a name="segment5" />
### Introducing Node Package Manager ###
Node Package Manager (NPM) is the official package manager for Node.js. It is bundled and installed automatically with the environment. NPM runs through the command line and manages dependencies for an application. It reads the **package.json** file and installs the dependencies found there in the **node_modules** folder.

Running `npm install <package-name> --save` installs the package and saves the dependency in the **package.json** file.

1. Right-click the project and select **Open Command Prompt Here...** from the menu to open the **Node.js Command Prompt** in the project's folder.

1. Run `npm install express --save`.

	![Installing express dependency using npm](images/installing-express-dependency-using-npm.png?raw=true "Installing express dependency using npm")

	_Installing express dependency using npm_

1. In Visual Studio show the new express dependency in the **package.json** file and in the **npm** node in the **Solution Explorer**.

	![Showing the installed dependency in Visual Studio](images/showing-the-installed-dependency.png?raw=true "Showing the installed dependency in Visual Studio")

	_Showing the installed dependency in Visual Studio_

1. Right-click the **npm** node in the **Solution Explorer** and select **Install New npm Packages...**.

	![Installing npm packages with Visual Studio](images/installing-npm-packages-with-vs.png?raw=true "Installing npm packages with Visual Studio")

	_Installing npm packages with Visual Studio_

1. In the **Install New npm Packages** dialog box, search for the **express** package.

	![Searching for the express package in Visual Studio](images/searching-for-express-package-in-vs.png?raw=true "Searching for the express package in Visual Studio")

	_Searching for the express package in Visual Studio_

1. Close the **Install New npm Packages** dialog box.

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a new Node.js project by using Node Tools for Visual Studio extensions as well as how to create a basic HTTP and TCP server and read files asynchronously. Additionally, you have seen how to use the Node Package Manager to install/update Node packages in your project.

---
