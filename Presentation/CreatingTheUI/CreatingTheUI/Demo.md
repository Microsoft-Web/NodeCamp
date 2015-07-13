<a name="title" />
# Creating the User Interface #

---
<a name="Overview" />
## Overview ##

This demo introduces the Jade templating language and Jade templates to build up views. Also, its introduces Bootstrap and how to use it in combination with Jade.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Use Jade templates

1. Use Bootstrap

1. Create a UI for a node.js application

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Jade][2]
- [Bootstrap][3]
- [Node.js Tools for Visual Studio][4]
- [Visual Studio Community 2013][5]

[1]: https://nodejs.org/
[2]: http://jade-lang.com/
[3]: http://getbootstrap.com/
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[5]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Install [Visual Studio Community 2013](https://go.microsoft.com/fwlink/?LinkId=517284).

1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Using Jade Templates](#segment1)
1. [Creating the chat UI](#segment2)

<a name="segment1" />
### Using Jade Templates ###

1. Navigate to [Jade site](http://jade-lang.com/) and show the example.

1. Show that the indentation change the output

1. Show the reference.

<a name="segment2" />
### Creating the chat UI ###

1. Add bootstrap files to the public folder.

1. Open the **layout.jade** file inside the **views** folder.

1. Add the following lines right before the line containing the style.css link.

	````HTML
	meta(charset="utf-8")
	meta(http-equiv="X-UA-Compatible" content="IE=edge")
	link(rel='stylesheet' href='/css/bootstrap.min.css')
	link(rel='stylesheet' href='/css/bootstrap-theme.min.css')
	````

1. Add the following line at the end of the file.

	````HTML
	script(type='text/javascript' src='/js/bootstrap.min.js')
	````


1. Open the **index.jade** file and remove all the lines of code under the content block.

1. Now, add the following code below the content block.

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

1. Open the **style.styl** file located at **public/css/**.

1. Add the following code to ensure the whole page takes up 100% of the height.

	````CSS
	html, body
	  height: 100%
	````

1. Add the following code to ensure the wrap area takes up the maximum height it can but leaves a 60px margin at the bottom for our footer and message editing area.

	````CSS
	.wrap 
	  min-height: 100%
	  height: auto !important
	  height: 100%
	  margin: 0 auto -60px
	````

1. Add the following code  to ensure that this space for the editing area is respected and to assign it to the footer.

	````CSS
	.push, .footer 
	  height: 60px
	````

1. Now, let’s a subtle background color to the footer.

	````CSS
	.footer
	  background-color: #f5f5f5
	````

1. Run the solution.

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create the user interface using Jade and Bootstrap.

---
