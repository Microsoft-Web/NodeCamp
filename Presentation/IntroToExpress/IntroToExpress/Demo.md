<a name="title" />
# Introduction to Express Framework #

---
<a name="Overview" />
## Overview ##

Express is a minimal, open source and flexible Node.js web app framework designed to make developing web apps and APIs much easier. It includes route support so that you can write responses to specific URLs and supports multiple template engines to simplify generating HTML.

This demo shows the Express folder structure and how routes and views are separated into their own files. It walks us through the creation of a basic REST API. Moreover, it explains how middleware can be injected before requests are handled by the server. Finally, it shows us how to add a new route to our application.

<a id="goals" />
### Goals ###
In this demo, you will see:

1. The Express folder structure and how views and routes can be separated into files

1. How to create a basic REST API and add middleware before handling requests in the server using the Express framework

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Express][2]
- [Node.js Tools for Visual Studio][3]
- [Visual Studio Community 2015][4]

[1]: https://nodejs.org/
[2]: http://expressjs.com/
[3]: https://www.visualstudio.com/features/node-js-vs
[4]: https://www.visualstudio.com/products/visual-studio-community-vs

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Install [Visual Studio Community 2015](https://go.microsoft.com/fwlink/?LinkId=691978).
1. Install [Node.js](https://nodejs.org/en/download/)
1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).
1. Open Windows Explorer and browse to the **source** folder.
1. Right-click **Setup.cmd** and select **Run as administrator** to launch the setup process that will configure your environment and install the Visual Studio code snippets for this demo.
1. If the User Account Control dialog box is shown, confirm the action to proceed.
1. Open Visual Studio.

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as Visual Studio Code Snippets, which you can access from within Visual Studio to avoid having to add it manually.

> **Note:** Inside the source code you will find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use this solution as guidance if you need additional help as you work through this demo.

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Introducing Express framework](#segment1)
1. [Adding a new route](#segment2)

<a name="segment1" />
### Introducing Express framework ###

1. Go to **File | New | Project**.

1. In the **Templates | JavaScript | Node.js** tab, select the **Basic Node.js Express 4 Application** project. Name it **ExpressApp**.

	![Creating a new Node.js Express Application](images/creating-a-new-express-app.png?raw=true "Creating a new Node.js Express Application")

	_Creating a new Node.js Express Application_

1. Open the **app.js** file located in the root of the project.

	![Opening the app.js file](images/opening-the-app-js-file.png?raw=true "Opening the app.js file")

	_Opening the app.js file_

1. Show the **require** function calls at the top of the file. 

	> **Speaking point:** The **require** function loads various modules including **express** and **path**. It's interesting to note that we also load a module called **routes** and another one called **users** from the routes folder. We'll explain the use of these modules later on.

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
1. Show the **express()** function call.

	> **Speaking point:** On this line, we called the function **express()** which will create our app. This will be the object containing all the properties of our web application as well as the mapping between the URL received in a request and the function handling its response.

	````JavaScript
	var app = express();
	````

1. Show the following lines.

	> **Speaking point:** On these lines, we set various configuration parameters such as in which directory the template files will be found and the template engine that we want to use, in this case Jade. Jade is a popular template engine that makes writing HTML extremely easy and without the extraneous syntax requirements of angle brackets (<>).
	>
	> You can change the template engine to simply return HTML as is and not do anything further by setting the view engine as `app.set('view engine', 'html');`

	````JavaScript
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	````

1. Show the following lines.

	> **Speaking point:** These lines are interesting as it is where we specify middleware to handle Stylus CSS sheets and HTML. Middleware is a layer that is automatically inserted into the function calls between receiving the request and returning a response. In this case, we are asking Express to run the **stylus** middleware and the **static** middleware for all requests in which the URL specifies a path inside the public folder of our project.
	>
	> The stylus middleware is just going to read the **.styl** file and write the corresponding **.css** file, but it expects the static middleware to then find the .css file and serve it.

	````JavaScript
	app.use(require('stylus').middleware(path.join(__dirname, 'public')));
	app.use(express.static(path.join(__dirname, 'public')));
	````

1. Show the following lines.

	> **Speaking point:** In these lines, we are finally mapping a URL path in an HTTP request to a specific function to handle the response.
	>
	> We already imported the route modules from the **routes** directory. Here we mapped the URL in the browser to the function on the server that will respond to that request. Those functions that will handle the requests are in the routes directory.

	````JavaScript
	app.use('/', routes);
	app.use('/users', users);
	````

1. Open the **index.js** file located in the **routes** folder and show the routes definition.

	> **Speaking point:** The index route is using the **render** function to respond with a view template.

	![Showing the index.js file](images/showing-the-index-route-file.png?raw=true "Showing the index.js file")

	_Showing the index.js file_

1. Repeat the previous step but this time with the **users.js** file.

	> **Speaking point:** The users route is using the **send** function to respond with a text/html type.

	![Showing the users.js file](images/showing-the-users-route-file.png?raw=true "Showing the users.js file")

	_Showing the users.js file_

1. Display the Jade views in the views folder.

	> **Speaking point:** Note how we access the **#{title}** parameter passed in by the index route.

	![Showing the index Jade view](images/showing-the-index-jade-view.png?raw=true "Showing the index Jade view")

	_Showing the index Jade view_

1. Run the application using Visual Studio debugger.

1. Show the results from your browser.
	
	![Showing the index output](images/showing-the-index-output.png?raw=true "Showing the index output")

	_Showing the index output_

1. Navigate to the users route to show the output.

	![Showing the users output](images/showing-the-users-output.png?raw=true "Showing the users output")

	_Showing the users output_

1. Stop the debugger and switch back to Visual Studio.
	
	> **Speaking point:** We are going to configure a new **contacts** route and return a Json response.

<a name="segment2" />
### Adding a new route ###

1. Right-click the **routes** folder and select **Add | New Item...**.

	![Creating a new item](images/creating-a-new-item.png?raw=true "Creating a new item")

	_Creating a new item_

1. In the **Add New Item** dialog box, select **JavaScript file**, name it **contacts.js** and click **Add**.

	![Creating a new JavaScript file](images/creating-a-new-js-file.png?raw=true "Creating a new JavaScript file")

	_Creating a new JavaScript file_

1. Add the following code snippet in the **contacts.js** file you created.

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
	
	![Showing the new contacts route](images/showing-the-contacts-route.png?raw=true "Showing the new contacts route")

	_Showing the new contacts route_

---

<a name="summary" />
## Summary ##

By completing this demo, you have seen how to create web apps and REST APIs using the Express framework. You have also learned about the folder structure of Express applications, how to add middleware before attending requests in the server, and configure new routes.

---
