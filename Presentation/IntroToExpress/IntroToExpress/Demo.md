<a name="title" />
# Introduction to Express Framework #

---
<a name="Overview" />
## Overview ##

Express is a minimal, open source and flexible Node.js web app framework designed to make developing web apps and APIs much easier. It includes route support so that you may write responses to specific URLs. Supports multiple templating engines to simplify generating HTML.

This demo shows the Express folder structure and how routes and views are separated into their own files. It walks us through the creation of a basic REST API. Finally, it explains how middleware can be injected before requests are handled by the server.

<a id="goals" />
### Goals ###
In this demo, you will see:

1. The Express folder structure and how views and routes can be separated into files.

1. How to create a basic REST API and add middleware before handling requests in the server using the Express framework.

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Express][2]
- [Node.js Tools for Visual Studio][3]
- [Visual Studio Community 2013][4]

[1]: https://nodejs.org/
[2]: http://expressjs.com/
[3]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

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

> **Note:** Inside the source code you will also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use this solution as guidance if you need additional help as you work through this demo.

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segment:

1. [Introducing Express framework](#segment1)

<a name="segment1" />
### Introducing Express framework ###

1. Go to **File | New | Project**.

1. In the **Templates | JavaScript | Node.js** tab, select the **Basic Node.js Express 4 Application** project. Name it **ExpressApp**.

	![Creating a new Node.js Express Application](images/create-new-node-express-application.png?raw=true "Creating a new Node.js Express Application")

	_Creating a new Node.js Express Application_

1. Open the **app.js** file located at the root of the project.

	![Opening the app.js file](images/app-js.png?raw=true "Opening the app.js file")

	_Opening the app.js file_

1. The require function loads various modules including express and path. What’s interesting is that we also load a module called routes (which will be explained later) and a module in the routes folder called user.

	<!-- mark:8-9 -->	
	````JavaScript
	var express = require('express');
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');

	var routes = require('./routes/index');
	var users = require('./routes/users');
	````
1. 
	````JavaScript
	var app = express();
	````

1. 
	````JavaScript
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	````

1. 
	````JavaScript
	app.use(require('stylus').middleware(path.join(__dirname, 'public')));
	app.use(express.static(path.join(__dirname, 'public')));
	````

1. 
	````JavaScript
	app.use('/', routes);
	app.use('/users', users);
	````
1. Display index and users routes inside routes folder.

1. Explain how to configure routes with Express.

1. Display Jade views inside views folder.

1. Explain how to create a layout view and how to use it in Jade.

1. Run the application using Visual Studio debugger.

1. Show  results from your browser.

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create web apps and REST APIs using the Express framework. You have also understood the folder structure of Express applications and how to add middleware before attending requests in the server.

---
