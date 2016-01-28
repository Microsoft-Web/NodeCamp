<a name="title" />
# Creating the User Interface #

---
<a name="Overview" />
## Overview ##

This demo introduces the Jade templating language and Jade templates to build up views. Additionally, this demo introduces Bootstrap and how to use it in combination with Jade.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Use Jade templates

1. Use Bootstrap

1. Create a UI for a Node.js application

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Jade][2]
- [Bootstrap][3]
- [Visual Studio Code][4]

[1]: https://nodejs.org/
[2]: http://jade-lang.com/
[3]: http://getbootstrap.com/
[4]: https://code.visualstudio.com/

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Download [Visual Studio Code](https://code.visualstudio.com/Download) for your platform and follow the [installation and setting up instructions](https://code.visualstudio.com/Docs/editor/setup).

1. Install [Node.js](https://nodejs.org/download/).

1. Open File Explorer and browse to the **source/Setup** folder.

1. Copy the **nodecamp-creatingtheui-snippets** folder and paste it into the Visual Studio Code Extensions folder to install the JavaScript snippets for this demo. Depending on your platform it is located:
 * **Windows**: `%USERPROFILE%\.vscode\extensions`
 * **Mac**: `$HOME/.vscode/extensions` 
 * **Linux**: `$HOME/.vscode/extensions`

1. Open a **command prompt/terminal** according to your platform in the **source/Begin/Chatroom** folder.

1. Run **npm install** to install all the missing dependencies.

	![Installing Missing npm Packages](images/VSCode/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_

<a name="CodeSnippets" />
### Using the Code Snippets ###

Throughout the demo document, you will be instructed to insert code blocks. For your convenience, most of this code is provided as code snippets, which you can access from within Visual Studio Code to avoid having to add it manually.

> **Note:** This demo is accompanied by a starting solution located in the **Begin** folder that allows you to follow the demo. Inside the source code you will also find an **End** folder containing the code that results from completing the steps in the demo. You can use this folder as guidance if you need additional help as you work through this demo.

---

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Using Jade Templates with Bootstrap](#segment1)
1. [Creating the chat UI](#segment2)

<a name="segment1" />
### Using Jade Templates with Bootstrap ###

1. Navigate to the Bootstrap site (http://getbootstrap.com/) and download Bootstrap.

	> **Note:** You can also find the bootstrap.zip file in the **source\assets** folder.

1. Extract the content of the file and move the **css** folder content to the **public/stylesheets** folder, the js folder content to the **public/javascripts** folder, and the **fonts** folder to **public**.

1. Open the **layout.jade** file in the **views** folder.

1. Add the following lines right before the line containing the style.css link. Make sure to maintain the same indentation level.

	> **Speaking Point:** By adding this reference here, any Jade file that extends **layout.jade** will have them.

	(Code Snippet - _CreatingTheUI-AddingBootstrapCSS_)
	
	````HTML
	meta(charset="utf-8")
	meta(http-equiv="X-UA-Compatible" content="IE=edge")
	link(rel='stylesheet' href='/stylesheets/bootstrap.min.css')
	link(rel='stylesheet' href='/stylesheets/bootstrap-theme.min.css')
	````

1. Add the following code at the end of the file inside the body block.

	(Code Snippet - _CreatingTheUI-AddingBootstrapJS_)

	````HTML
    script(type='text/javascript' src='/javascripts/bootstrap.min.js')
	````

1. Then, add the following line at the end to create a new block.

	> **Speaking Point:** By doing this, any Jade file that extends **layout.jade** can also add script tags right before the end of the body tag.

	(Code Snippet - _CreatingTheUI-CreateNewBlock_)
	
	````HTML
	block body_end
	````

<a name="segment2" />
### Creating the chat UI ###

1. Open the **index.jade** file and remove all the lines of code under the content block.

1. Now, add the following code below the content block with one tab of indentation.

	(Code Snippet - _CreatingTheUI-AddHeader_)

	````HTML
	.wrap
	  .container-fluid
		 h1 Welcome to the Node Chatroom
		 #messages

		 .push
	````

1. Add the following code with the same indentation as the wrap div.

	(Code Snippet - _CreatingTheUI-AddInputAndButton_)

	````HTML
	.footer
	  .container-fluid
	    .row
	      .col-xs-8.col-sm-9
	        input(type="text" id="message-box" class="form-control input-lg" placeholder="Write a message here..." rows="3")
	      .col-xs-4.col-sm-3
	        button#send-message-btn.btn.btn-primary.btn-lg.btn-block Send Message
	````

1. Now, add the following code at the end of the file without indentation (i.e.: at the same level of the _content_ block).

	(Code Snippet - _CreatingTheUI-AddJS_)

	````HTML
	block body_end
	  script(type='text/javascript' src='/javascripts/index.js')
	````

1. Open the **style.styl** file located in **public/stylesheets/**.

1. Add the following code to ensure the page takes up 100% of the height.

	````CSS
	html, body
	  height: 100%
	````

1. Add the following code to ensure the wrap area takes up the maximum height it can, but leave a 60px margin at the bottom for our footer and message editing area.

	````CSS
	.wrap 
	  min-height: 100%
	  height: auto !important
	  height: 100%
	  margin: 0 auto -60px
	````

1. Add the following code to ensure that the space for the editing area is respected and assigned to the footer.

	````CSS
	.push, .footer 
	  height: 60px
	````

1. Now, set a subtle background color for the footer.

	````CSS
	.footer
	  background-color: #f5f5f5
	````

1. Run the solution.

	![Running the solution](images/VSCode/running-the-solution.png?raw=true "Running the solution")

	_Running the solution_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create the user interface using Jade and Bootstrap.

---
