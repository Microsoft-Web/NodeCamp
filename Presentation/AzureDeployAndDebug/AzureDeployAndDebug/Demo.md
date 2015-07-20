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
- [Azure DocumentDB][3]
- [Node.js Tools for Visual Studio][4]
- [Visual Studio Community 2013][5]

[1]: https://nodejs.org/
[2]: http://azure.microsoft.com/
[3]: http://azure.microsoft.com/en-us/services/documentdb/
[4]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx
[5]: https://www.visualstudio.com/en-us/features/node-js-vs.aspx

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Get an [Azure subscription](https://azure.microsoft.com/en-us/pricing/free-trial/).
1. Get a [GitHub Account](https://help.github.com/articles/signing-up-for-a-new-github-account/).
1. Install [Visual Studio Community 2013](https://go.microsoft.com/fwlink/?LinkId=517284).

1. Install [Node.js](https://nodejs.org/download/)
1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).
1. Create a DocumentDB database account. Details [here] (https://azure.microsoft.com/en-us/documentation/articles/documentdb-create-account/).
1. After the DocumentDB account is created, navigate to the Keys blade of your DocumentDB account and take note of the URI and PRIMARY KEY values as we will use them later on.

	![Copying the DocumentDB account keys](images/copying-the-keys.png?raw=true "Copying the DocumentDB account keys")

	_Copying the DocumentDB account keys_

1. Create a new repository into your GitHub account and import the code inside **source\Begin** folder. Details [here](https://help.github.com/articles/create-a-repo/).
1. Open Visual Studio.
1. Open the **Chatroom.sln** solution located under **source\Begin**.

1. Install the missing npm packages by right-clicking on the **npm** node of the project and selecting **Install Missing npm Packages...**.

	![Installing Missing npm Packages](Images/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_

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

1. In the **Configure** tab go to the **app settings** section and add DOCUMENT_DB_HOST and DOCUMENT_DB_AUTH_KEY keys with the URI and PRIMARY KEY values from the DocumentDB account created in the Setup section.

1. Restart the site and naviagte to it using two browser instances.

1. Introduce a message from each browser instance and show that it is being broadcasted to the other insatance.

	![Testing the chatroom app](images/chatroom.png?raw=true "Testing the chatroom app")

	_Testing the chatroom app_

<a name="segment2" />
### Deploying to Azure with GitHub ###

1. Go to **Dahboard** tab for your web app in Azure and click on **Set up deployment from source control** from the **quick glance** section.

	![Setup deployment from source control](images/setup-deployment.png?raw=true "Setup deployment from source control")

	_Setting up deployment from source control_

1. Pick up **GitHub** from the list and log in with your GitHub account. 

	![Picking GitHub as source control](images/picking-github.png?raw=true "Picking GitHub as source control")

	_Picking GitHub as source control_

1. Select the repository you created in the setup section from the list and leave **master** as the branch to deploy.

	![Select the repo](images/choose-repo.png?raw=true "Select the repo")

	_Selecting the repository_

1. Show the new **Deployments** tab for your web app in Azure.

	![Show the deplyments tab](images/deployments-tab.png?raw=true "Show the deplyments tab")

	_Showing the deployments tab_

1. Go to your local repository, make some change and push it into GitHub.
1. Get back to the **Deployments** tab for your web app and show the new deployment entry.

	![New deployment entry](images/new-deployment-entry.png?raw=true "New deployment entry")

	_Showing the new deployment entry_

<a name="segment3" />
### Remote Debugging a node application with Visual Studio and Azure ###

Node Tools for Visual Studio comes with several advanced debugging features such as conditional breakpoints, “hit count” breakpoints, tracepoints and remote debugging support for Windows.

NTVS has special support for remote debugging of code running on Azure Web Sites. Unlike simple remote debugging, the target machine is not directly accessible over TCP, but NTVS comes with a WebSocket proxy for the debugging protocol that exposes the debugger protocol via HTTP. When you create a new Windows Azure project, the proxy is fully configured for you in Web.Debug.config, and will be enabled on the web site if you publish your project in the "Debug" configuration by following the next steps.

1. Right click on the project and select the Publish item from the menu.

	![Publsih the project](images/debug-publish.png?raw=true "Publsih the project")

	_Publishing the project_

1. Select the **Settings** tab on the left and make sure to choose the **Debug** configuration from the dropdown.

	![Selecting debug in the configuration settings](images/settings-debug.png?raw=true "Selecting debug in the configuration settings")

	_Selecting debug in the configuration settings_

1. Press **Publish**.
1. To attach to the web site, open **Server Explorer** and locate your web app under **Azure | App Service**, and right-click on it. If it is running, and your project has been deployed to it using the **Debug** configuration, you should see the **Attach Debugger (Node.js)** command in the context menu.

	![Attaching the debugger](images/attach-debugger.png?raw=true "Attaching the debugger")

	_Attaching the debugger_

1. Set a breakpoint in one of the methods and check if the debugger is working.
1. You can stream the latest logs by right-click on your web app in the **Server Explorer** and select **View Streaming Logs**.

	![Streaming logs](images/streaming-logs.png?raw=true "Streaming logs")

	_Streaming logs_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to create a Web App in Azure and how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, you have learned how to do remote debugging with Visual Studio to a Node.js application deployed in Azure.

---
