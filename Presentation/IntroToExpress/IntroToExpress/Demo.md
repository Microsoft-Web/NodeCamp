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

> **Note:** Inside the source code you will find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use this solution as guidance if you need additional help as you work through this demo.

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

1. The **require** function loads various modules including **express** and **path**. What’s interesting is that we also load a module called **routes** and another one called **users** from the routes folder.

	> **Speaking point:** We'll explain the use of these modules later on.

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
1. On this line, we called the function **express()** which will create our app. This will be the object containing all the properties of our web application as well as the mapping between the URL received in a request and the function handling its response.

	````JavaScript
	var app = express();
	````

1. On these lines, we set various configuration parameters such as in which directory the template files will be found and the templating engine that we want to use, in this case Jade. Jade is a popular templating engine that makes writing HTML extremely easy and without the extraneous syntax requirements of angle brackets (<>).

	> **Note:** You can change the templating engine to simply return HTML as is and not do anything further by setting the view engine as `app.set('view engine', 'html');`

	````JavaScript
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	````

1. These lines are interesting as it is where we specify middleware to handle Stylus CSS sheets and HTML. Middleware is a layer that is automatically inserted into the function calls between receiving the request and returning a response. In this case, we are asking Express to run the **stylus** middleware and the **static** middleware for all requests in which the URL specifies a path inside the public folder of our project.

	> **Speaking point:** The stylus middleware is just going to read the **.styl** file and write the corresponding **.css** file but it expects the static middleware to then find the .css file and serve it.


	````JavaScript
	app.use(require('stylus').middleware(path.join(__dirname, 'public')));
	app.use(express.static(path.join(__dirname, 'public')));
	````

1. In these lines, we are finally mapping a URL path in a HTTP request to a specific function to handling the response.

	> **Speaking point:** We already imported the route modules from the **routes** directory. Here we mapped the URL in the browser to the function on the server that will respond to that request. Those functions that will handle the requests are in the routes directory.

	````JavaScript
	app.use('/', routes);
	app.use('/users', users);
	````
1. Display **index.js** and **users.js** routes inside **routes** folder.

	> **Note:** The index route is using the **render** function to respond with a view template while the users route is using the **send** function to respond with a text/html type.

	![Opening the index.js file](images/index-js.png?raw=true "Opening the index.js file")

	_index.js file_

	![Opening the users.js file](images/users-js.png?raw=true "Opening the users.js file")

	_users.js file_

1. Display Jade views inside views folder.

	> **Speaking point:** Note how we access the **#{title}** parameter passed in by the index route.


	![Jade views](images/jade-views.png?raw=true "Jade views")

	_Jade views_

1. Run the application using Visual Studio debugger.

1. Show  results from your browser.
	
	![Show results](images/browse-results.png?raw=true "Show results")

	_Showing index and users routes_

1. Stop the debugger and get back to Visual Studio.
	
	> **Speaking point:** We are going to configure a new **contacts** route and return a Json response.

1. Create a new JavaScript file named **contacts.js** inside the routes folder.

1. Add the following code snippet inside it:

	(Code Snippet - _IntroductionToExpress-Contacts-route_)

	````JavaScript
	var express = require('express');
	var router = express.Router();

	/* GET contacts */
	router.get('/', function (req, res) {
		 var contacts = [{ "name": "Jane Doe", "phone": "888-555-1212" }, { "name": "Justin Doe", "phone": "877-123-1212" }];
		 res.json(contacts);
	});

	module.exports = router;
	````
1. Open the **app.js** file and add `var contacts = require('./routes/contacts');` below the `users` variable.

	> **Speaking point:** Here we are loading the **contacts** route module.

1. Add the `app.use('/contacts', contacts);` line below the `app.use('/users', users);` line.

	> **Speaking point:** Here we are mapping the **contacts** route to the module to attend the request.

	![Configuring a /contacts route](images/contacts-route.png?raw=true "Configuring a /contacts route")

	_Configuring a /contacts route_

1. Run the application using Visual Studio debugger.

1. Access the new /contacts route and show the Json result.
	
	![Showing /contacts route](images/contacts-json.png?raw=true "Showing /contacts route")

	_Showing /contacts route_


---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create web apps and REST APIs using the Express framework. You have also understood the folder structure of Express applications and how to add middleware before attending requests in the server.

---
