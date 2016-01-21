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
- [Visual Studio Code][3]

[1]: https://nodejs.org/
[2]: http://expressjs.com/
[3]: https://code.visualstudio.com/

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Download [Visual Studio Code](https://code.visualstudio.com/Download) for your platform and follow the [installation and setting up instructions](https://code.visualstudio.com/Docs/editor/setup).
1. Install [Node.js](https://nodejs.org/download/).
1. Open File Explorer and browse to the **source/Setup** folder.
1. Copy the **nodecamp-introtoexpress-snippets** folder and paste it into the Visual Studio Code Extensions folder to install the JavaScript snippets for this demo. Depending on your platform it is located:
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

1. [Introducing Express framework](#segment1)
1. [Adding a new route](#segment2)

<a name="segment1" />
### Introducing Express framework ###

1. Open a **command prompt/terminal** according to your platform.

1. Run **npm install -g express-generator** to globally install the Express Generator tool and then **express ExpressApp -c stylus** to scaffold a new Express application.

	![Creating a new Node.js Express Application](images/VSCode/creating-a-new-express-app.png?raw=true "Creating a new Node.js Express Application")

	_Creating a new Node.js Express Application_

1. Run **cd ExpressApp** to navigate to the new Express application folder and then **npm install** to install all its dependencies.

1. Run **code .** to open the current directory with **Visual Studio Code**.

1. In the **Explore** view, open the **app.js** file located in the root of the folder.

	![Opening the app.js file in Visual Studio Code](images/VSCode/opening-the-app-js-file.png?raw=true "Opening the app.js file in Visual Studio Code")

	_Opening the app.js file in Visual Studio Code_

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

1. In the **Explore** view, open the **index.js** file located in the **routes** folder and show the routes definition.

	> **Speaking point:** The index route is using the **render** function to respond with a view template.

	![Showing the index.js file](images/VSCode/showing-the-index-route-file.png?raw=true "Showing the index.js file")

	_Showing the index.js file_

1. Repeat the previous step but this time with the **users.js** file.

	> **Speaking point:** The users route is using the **send** function to respond with a text/html type.

	![Showing the users.js file](images/VSCode/showing-the-users-route-file.png?raw=true "Showing the users.js file")

	_Showing the users.js file_

1. Display the Jade views in the views folder.

	> **Speaking point:** Note how we access the **#{title}** parameter passed in by the index route.

	![Showing the index Jade view](images/VSCode/showing-the-index-jade-view.png?raw=true "Showing the index Jade view")

	_Showing the index Jade view_

1. Run the application using Visual Studio Code debugger. To do this, you'll first need to setup your debugging launch configuration file - **launch.json**. Bring up the **Debug** view by clicking on the Debugging icon in the View Bar on the side of Visual Studio Code. Click on the Configure gear icon and select **Node.js** as your Debug Environment and this will generate a **launch.json**. Make sure that the **Lunch** configuration is selected in the dropdown and press **F5** to start debugging. For more infomation, see the [Debugging](https://code.visualstudio.com/Docs/editor/debugging) documentation).

	![Launching the application in Debug mode with Visual Studio Code](images/VSCode/launching-the-app-in-debug-mode-with-vscode.png?raw=true "Launching the application in Debug mode with Visual Studio Code")

	_Launching the application in Debug mode with Visual Studio Code_

1. Open your browser, navigate to **http://localhost:3000** and show the results.
	
	![Showing the index output](images/VSCode/showing-the-index-output.png?raw=true "Showing the index output")

	_Showing the index output_

1. Navigate to the **users** route to show the output.

	![Showing the users output](images/VSCode/showing-the-users-output.png?raw=true "Showing the users output")

	_Showing the users output_

1. Switch back to Visual Studio Code and stop the debugger.
	
	> **Speaking point:** We are going to configure a new **contacts** route and return a Json response.

<a name="segment2" />
### Adding a new route ###

1. In the **Explore** panel, create a new **contacts.js** file inside the **routes** folder by clicking the **New File** icon and fill its content with the following code snippet.

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

	![Creating a contacts.js route file](images/VSCode/creating-a-contactjs-route-file.png?raw=true "Creating a contacts.js route file")

	_Creating a contacts.js route file_

1. Open the **app.js** file and add `var contacts = require('./routes/contacts');` below the `users` variable.

	> **Speaking point:** Here we are loading the **contacts** route module.

1. Add the `app.use('/contacts', contacts);` line below the `app.use('/users', users);` line.

	> **Speaking point:** Here we are mapping the **contacts** route to the module to attend the request.

	![Configuring a /contacts route](images/VSCode/contacts-route.png?raw=true "Configuring a /contacts route")

	_Configuring a /contacts route_

1. Run the application again using the Visual Studio Code debugger.

1. Open your browser, navigate to the new **http://localhost:3000/contacts** route and show the Json result.
	
	![Showing the new contacts route](images/VSCode/showing-the-contacts-route.png?raw=true "Showing the new contacts route")

	_Showing the new contacts route_

---

<a name="summary" />
## Summary ##

By completing this demo, you have seen how to create web apps and REST APIs using the Express framework. You have also learned about the folder structure of Express applications, how to add middleware before attending requests in the server, and configure new routes.

---
