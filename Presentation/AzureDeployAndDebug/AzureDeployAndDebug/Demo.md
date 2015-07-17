<a name="title" />
# Deploying and Debugging on Azure #

---
<a name="Overview" />
## Overview ##

This demo introduces how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, it explains how to do remote debugging with Visual Studio to a Node.js application deployed in Azure.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Deploy a Node.js app to Azure.

1. Remote debug a Node.js application from Visual Studio.

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Microsoft Azure][2]
- [Node.js Tools for Visual Studio][3]
- [Visual Studio Community 2013][4]

[1]: https://nodejs.org/
[2]: http://azure.microsoft.com/
[3]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Get an [Azure subscription](https://azure.microsoft.com/en-us/pricing/free-trial/).
1. Get a [GitHub Account](https://help.github.com/articles/signing-up-for-a-new-github-account/).
1. Install [Visual Studio Community 2013](https://go.microsoft.com/fwlink/?LinkId=517284).

1. Install [Node.js](https://nodejs.org/download/)
1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).
1. Open Visual Studio.

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Deploying to Azure with Visual Studio](#segment1)
1. [Deploying to Azure with GitHub](#segment2)
1. [Remote Debugging a node application with Visual Studio and Azure](#segment3)

<a name="segment1" />
### Deploying to Azure with Visual Studio ###

1. Open the **Begin** solution inside **source** folder.
1. Right-click on the project and select the **Publish** item from the menu.
1. Select **Microsoft Azure Web Apps** as the publish target.

	![Deploying to Azure](images/deploy-to-azure.png?raw=true "Deploying to Azure")

	_Publishing to Azure_

1. Sign in with your Azure account.
1. Fill all the fields in the **Create a Web App on Microsoft Azure** window and click **Create**.

	![New Web App window](images/create-web-app-form.png?raw=true "New Web App window")

	_Creating a Web App on Microsoft Azure_

1. Click on the **Publish** button.

	![Publish window](images/publish.png?raw=true "Publish window")

	_Publishing to Azure_

1. We have deployed to the cloud but we still need to enable WebSockets for the Web App in Azure. Go to the **Configure** tab of your Web App in Azure and make sure **V4.5** is selected in **.NET FRAMEWORK VERSION** and **ON** in **WEB SOCKETS** fields.

	![Enabling WebSockets in Azure](images/enabling-websockets-in-azure.png?raw=true "Enabling WebSockets in Azure")

	_Enabling WebSockets in Azure_

<a name="segment2" />
### Deploying to Azure with GitHub ###

1. Go to **Dahboard** tab for your web app in Azure and click on **Set up deployment from source control**.
1. Pick up **GitHub** from the list and log in with your GitHub account. 
1. Select a repository from the list and leave **master** as the branch to deploy.
1. Show the new **Deployments** tab for your web app in Azure.
1. Go to your local repository, make some change and push it into GitHub.
1. Get back to the **Deployments** tab for your web app and show to new deployment entry.

<a name="segment3" />
### Remote Debugging a node application with Visual Studio and Azure ###

Node Tools for Visual Studio comes with several advanced debugging features such as conditional breakpoints, “hit count” breakpoints, tracepoints and remote debugging support for Windows.

NTVS has special support for remote debugging of code running on Azure Web Sites. Unlike simple remote debugging, the target machine is not directly accessible over TCP, but NTVS comes with a WebSocket proxy for the debugging protocol that exposes the debugger protocol via HTTP. When you create a new Windows Azure project, the proxy is fully configured for you in Web.Debug.config, and will be enabled on the web site if you publish your project in the "Debug" configuration by following the next couple of steps.

1. Right click on the project and select the Publish item from the menu.
1. Select the **Settings** tab on the left and make sure to choose the **Debug** configuration from the dropdown.
1. Press **Publish**.
1. To attach to the web site, open **Server Explorer** and locate your web app under Azure → App Service, and right-click on it. If it is running, and your project has been deployed to it using the **Debug** configuration, you should see the **Attach Debugger (Node.js)** command in the context menu.

1. Set a breakpoint in one of the methods and check if the debugger is working.
1. You can stream the latest logs by right-click on your web app in the **Server Explorer** and select **View Stream Logs**.

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a Web App in Azure and how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, you have learned how to do remote debugging with Visual Studio to a Node.js application deployed in Azure.

---
