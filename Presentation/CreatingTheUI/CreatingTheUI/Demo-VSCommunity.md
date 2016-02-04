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
- [Node.js Tools for Visual Studio][4]
- [Visual Studio Community 2015][5]

[1]: https://nodejs.org/
[2]: http://jade-lang.com/
[3]: http://getbootstrap.com/
[4]: https://www.visualstudio.com/features/node-js-vs
[5]: https://www.visualstudio.com/products/visual-studio-community-vs

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo:

1. Install [Visual Studio Community 2015](https://go.microsoft.com/fwlink/?LinkId=691978).

1. Install [Node.js](https://nodejs.org/en/download/).

1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).

1. Open Visual Studio.

1. Open the **Chatroom.sln** solution located under **source\Begin**.

1. Install the missing npm packages by right-clicking the **npm** node of the project and selecting **Install Missing npm Packages...**.

	![Installing Missing npm Packages](images/VSCommunity/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_

	> **Note:** If the **Path Too Long Warning** dialog box appears, click on the **Do nothing, but warn me next time it happens** option.

	> ![Path Too Long Warning](images/VSCommunity/path-too-long-warning-dialog-box.png?raw=true "Path Too Long Warning")

	> _Installing Missing npm Packages_

> **Note:** This demo is accompanied by a starting solution located in the **Begin** folder that allows you to follow the demo. Inside the source code you will also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the demo. You can use these solutions as guidance if you need additional help as you work through this demo.

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

	````HTML
	meta(charset="utf-8")
	meta(http-equiv="X-UA-Compatible" content="IE=edge")
	link(rel='stylesheet' href='/stylesheets/bootstrap.min.css')
	link(rel='stylesheet' href='/stylesheets/bootstrap-theme.min.css')
	````

1. Add the following code at the end of the file inside the body block.

	````HTML
    script(type='text/javascript' src='/javascripts/bootstrap.min.js')
	````

1. Then, add the following line at the end to create a new block.

	> **Speaking Point:** By doing this, any Jade file that extends **layout.jade** can also add script tags right before the end of the body tag.

	````HTML
	block body_end
	````

<a name="segment2" />
### Creating the chat UI ###

1. Open the **index.jade** file and remove all the lines of code under the content block.

1. Now, add the following code below the content block with one tab of indentation.

	````HTML
	.wrap
	  .container-fluid
		 h1 Welcome to the Node Chatroom
		 #messages

		 .push
	````

1. Add the following code with the same indentation as the wrap div.

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

	![Running the solution](images/VSCommunity/running-the-solution.png?raw=true "Running the solution")

	_Running the solution_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create the user interface using Jade and Bootstrap.

---
