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

1. In **Server Explorer**, add your Azure credentials.

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

1. In Visual Studio, right-click on the project and select the **Publish** item from the menu.

	![Selecting the Publish item from the menu](images/selecting-publish-from-the-menu.png?raw=true "Selecting the Publish item from the menu")

	_Selecting the Publish item from the menu_

1. In the Publish Web dialog box, select **Microsoft Azure Web Apps** as the publish target.

	![Selecting Microsoft Azure Web Apps as publish target](images/selecting-web-apps-as-target.png?raw=true "Selecting Microsoft Azure Web Apps as publish target")

	_Selecting Microsoft Azure Web Apps as publish target_

1. In the Select Existing Web App dialog box, select **New...** to create a new Web App.

	![Selecting the target Web App](images/selecting-the-target-web-app.png?raw=true "Selecting the target Web App")

	_Selecting the target Web App_

1. Fill all the fields in the **Create a Web App on Microsoft Azure** dialog box and click **Create**.

	![Creating a new Web App](images/creating-a-new-wep-app.png?raw=true "Creating a new Web App")

	_Creating a new Web App_

1. In the Publish Web dialog box, click on the **Publish** button.

	![Publishing the Web App](images/publishing-the-web-app.png?raw=true "Publishing the Web App")

	_Publishing the Web App_

1. Open a web browser and navigate to the [Azure Portal](https://portal.azure.com/).

1. In the Azure Portal locate your new Web App and open the **Settings** blade.

	![Navigating to the settings blade](images/navigating-to-the-settings-blade.png?raw=true "Navigating to the settings blade")

	_Navigating to the settings blade_

1. In the **Settings** blade, select **Application settings**.

1. In the **Web app settings** blade, make sure **v4.5** is selected in **.NET Framework version** and select **On** in **Web sockets**.

	![Enabling Web sockets](images/enabling-web-sockets.png?raw=true "Enabling Web sockets")

	_Enabling Web sockets_

1. Scroll down to the **App settings** section and add **DOCUMENT_DB_HOST** and **DOCUMENT_DB_AUTH_KEY** keys with the URI and PRIMARY KEY values from the DocumentDB account created in the Setup section.

	![Adding the DocumentDB settings](images/adding-the-documentdb-settings.png?raw=true "Adding the DocumentDB settings")

	_Adding the DocumentDB settings_

1. Click **Save** at the top of the **Web app settings** blade and navigate to the site using two browser instances.

	![Saving the new settings](images/saving-the-new-settings.png?raw=true "Saving the new settings")

	_Saving the new settings_

1. Introduce a message from each browser instance and show that it is being broadcasted to the other instance.

	![Testing the chatroom app](images/testing-the-chatroom-app.png?raw=true "Testing the chatroom app")

	_Testing the chatroom app_

<a name="segment2" />
### Deploying to Azure with GitHub ###


1. Go back to the [Azure Portal](https://portal.azure.com/). In your Web App blade, locate the **Deployment** section and click **Set up continuous deployment**.

	![Setting up continuos deployment](images/setting-up-continuos-deployment.png?raw=true "Setting up continuos deployment")

	_Setting up continuos deployment_

1. In the **Continuous Deployment** blade select **Choose Source** and then select **GitHub**.

	> **Note:** The first time you will need to autorize Azure to access your GitHub information.

	![Selecting GitHub as source](images/selecting-github-as-source.png?raw=true "Selecting GitHub as source")

	_Selecting GitHub as source_

1. Select the repository you created in the setup section from the list, leave **master** as the branch to deploy and click **OK**.

	![Selecting the repository](images/selecting-the-repository.png?raw=true "Selecting the repository")

	_Selecting the repository_

1. Now, under the **Deployment** section you should see the **Active Deployment** box. Click it to open the **Deployments** blade.

	![Showing the Deployments blade](Images/showing-the-deployments-blade.png?raw=true "Showing the Deployments blade")

	_Showing the Deployments blade_


1. Go to your local repository, and open the **index.jade** file located inside the **Chatroom\views** folder. 

1. Update the main title and push it to GitHub.

	![Updating the index view](Images/updating-the-index-view.png?raw=true "Updating the index view")

	_Updating the index view_

1. Get back to the **Deployments** blade for your Web App and show the new deployment entry.

	![Showing the new deployment entry](images/showing-the-new-deployment-entry.png?raw=true "Showing the new deployment entry")

	_Showing the new deployment entry_

<a name="segment3" />
### Remote Debugging a node application with Visual Studio and Azure ###

Node Tools for Visual Studio comes with several advanced debugging features such as conditional breakpoints, “hit count” breakpoints, tracepoints and remote debugging support for Windows.

NTVS has special support for remote debugging of code running on Azure Web Sites. Unlike simple remote debugging, the target machine is not directly accessible over TCP, but NTVS comes with a WebSocket proxy for the debugging protocol that exposes the debugger protocol via HTTP. When you create a new Windows Azure project, the proxy is fully configured for you in Web.Debug.config, and will be enabled on the web site if you publish your project in the "Debug" configuration. If you publish the web site using git, you need to update the Web.config file manually. In the previous section, you published the updated Web.config so in this section you only need to attach the debugger.

1. To attach to the Web App, open **Server Explorer** and locate your web app under **Azure | App Service**, right-click on it and select **Attach Debugger (Node.js)**.

	![Attaching the debugger](images/attaching-the-debugger.png?raw=true "Attaching the debugger")

	_Attaching the debugger_

1. Open the **socketio.js** file located at the root of the project and set a breakpoint in the **connection** event handler.

1. Refresh the site in the browser and check if the debugger is working.

	![Checking that the debugger is working](images/checking-that-the-debugger-is-working.png?raw=true "Checking that the debugger is working")

	_Checking that the debugger is working_

1. You can stream the latest logs by right-click on your web app in the **Server Explorer** and select **View Streaming Logs**.

	![Streaming logs](images/streaming-logs.png?raw=true "Streaming logs")

	_Streaming logs_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, you have learned how to do remote debugging with Visual Studio to a Node.js application deployed in Azure.

---
