<a name="title" />
# Deploying and Debugging on Azure #

---
<a name="Overview" />
## Overview ##

This demo introduces how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, it explains how to do remote debugging with Visual Studio to a Node.js application deployed in Azure.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Deploy a Node.js app to Azure

1. Remote debug a Node.js application from Visual Studio

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Microsoft Azure][2]
- [Azure DocumentDB][3]
- [Node.js Tools for Visual Studio][4]
- [Visual Studio Community 2015][5]

[1]: https://nodejs.org/
[2]: http://azure.microsoft.com/
[3]: http://azure.microsoft.com/en-us/services/documentdb/
[4]: https://www.visualstudio.com/features/node-js-vs
[5]: https://www.visualstudio.com/products/visual-studio-community-vs

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Get an [Azure subscription](https://azure.microsoft.com/en-us/pricing/free-trial/)

1. Get a [GitHub Account](https://help.github.com/articles/signing-up-for-a-new-github-account/)

1. Install [Visual Studio Community 2015](https://go.microsoft.com/fwlink/?LinkId=691978).

1. Install [Node.js](https://nodejs.org/en/download/).

1. Install [Node.js Tools for Visual Studio](http://aka.ms/getntvs).

1. Create a DocumentDB database account. Details [here] (https://azure.microsoft.com/en-us/documentation/articles/documentdb-create-account/).

1. After the DocumentDB account is created, navigate to the Keys blade of your DocumentDB account and take note of the URI and PRIMARY KEY values. You will use them later on.

	![Copying the DocumentDB account keys](images/VSCommunity/copying-the-keys.png?raw=true "Copying the DocumentDB account keys")

	_Copying the DocumentDB account keys_

1. Create a new repository in your GitHub account and import the code from the **source\Begin** folder. Details [here](https://help.github.com/articles/create-a-repo/).

1. Open Visual Studio.

1. Open the **Chatroom.sln** solution located under **source\Begin**.

1. In **Server Explorer**, add your Azure credentials.

1. Install the missing npm packages by right-clicking the **npm** node of the project and selecting **Install Missing npm Packages...**.

	![Installing Missing npm Packages](images/VSCommunity/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_


	> **Note:** If the **Path Too Long Warning** dialog box appears, click on the **Do nothing, but warn me next time it happens** option.

	> ![Path Too Long Warning](images/VSCommunity/path-too-long-warning-dialog-box.png?raw=true "Path Too Long Warning")

	> _Installing Missing npm Packages_

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Deploying to Azure with Visual Studio](#segment1)
1. [Deploying to Azure with GitHub](#segment2)
1. [Remote debugging a node application with Visual Studio and Azure](#segment3)

<a name="segment1" />
### Deploying to Azure with Visual Studio ###

1. In Visual Studio, right-click the project and select **Publish...**.

	![Selecting the Publish item from the menu](images/VSCommunity/selecting-publish-from-the-menu.png?raw=true "Selecting the Publish item from the menu")

	_Selecting the Publish item from the menu_

1. In the Publish Web dialog box, select **Microsoft Azure App Service** as the publish target.

	![Selecting Microsoft Azure App Service as publish target](images/VSCommunity/selecting-app-service-as-target.png?raw=true "Selecting Microsoft Azure App Service as publish target")

	_Selecting Microsoft Azure App Service as publish target_

1. In the App Service dialog box, click **New...** to create a new App Service.

	![Selecting the target App Service](images/VSCommunity/selecting-the-target-app-service.png?raw=true "Selecting the target App Service")

	_Selecting the target App Service_

1. Complete all the fields in the **Create App Service** dialog box and click **Create**.

	![Creating a new App Service](images/VSCommunity/creating-a-new-app-service.png?raw=true "Creating a new App Service")

	_Creating a new App Service_

1. In the Publish Web dialog box, click **Publish**.

	![Publishing the Web App](images/VSCommunity/publishing-the-web-app.png?raw=true "Publishing the Web App")

	_Publishing the Web App_

1. Open a web browser and navigate to the [Azure Portal](https://portal.azure.com/).

1. In the Azure Portal locate your new App Service and open the **Settings** blade.

	![Navigating to the settings blade](images/VSCommunity/navigating-to-the-settings-blade.png?raw=true "Navigating to the settings blade")

	_Navigating to the settings blade_

1. In the **Settings** blade, select **Application settings**.

1. In the **Web app settings** blade, make sure **v4.6** is selected in **.NET Framework version** and click **On** in **Web sockets**.

	![Enabling Web sockets](images/VSCommunity/enabling-web-sockets.png?raw=true "Enabling Web sockets")

	_Enabling Web sockets_

1. Scroll down to the **App settings** section and add **DOCUMENT_DB_HOST** and **DOCUMENT_DB_AUTH_KEY** keys with the URI and PRIMARY KEY values from the DocumentDB account created in the Setup section.

	![Adding the DocumentDB settings](images/VSCommunity/adding-the-documentdb-settings.png?raw=true "Adding the DocumentDB settings")

	_Adding the DocumentDB settings_

1. Click **Save** at the top of the **Web app settings** blade and navigate to the site using two browser instances.

	![Saving the new settings](images/VSCommunity/saving-the-new-settings.png?raw=true "Saving the new settings")

	_Saving the new settings_

1. Introduce a message from each browser instance and show that it is being broadcasted to the other instance.

	![Testing the chatroom app](images/VSCommunity/testing-the-chatroom-app.png?raw=true "Testing the chatroom app")

	_Testing the chatroom app_

<a name="segment2" />
### Deploying to Azure with GitHub ###

1. Go back to the [Azure Portal](https://portal.azure.com/). In the Settings blade of your Web App, locate the **Publishing** section and click **Continuous deployment**.

	![Setting up continuous deployment](images/VSCommunity/setting-up-continuos-deployment.png?raw=true "Setting up continuous deployment")

	_Setting up continuous deployment_

1. In the **Continuous Deployment** blade, select **Choose Source** and then select **GitHub**.

	> **Note:** The first time you will need to authorize Azure to access your GitHub information.

	![Selecting GitHub as source](images/VSCommunity/selecting-github-as-source.png?raw=true "Selecting GitHub as source")

	_Selecting GitHub as source_

1. Select the repository you created in the setup section from the list, leave **master** as the branch to deploy and click **OK**.

	![Selecting the repository](images/VSCommunity/selecting-the-repository.png?raw=true "Selecting the repository")

	_Selecting the repository_

1. Now, the **Deployments** blade should open, else navigate to the **Continuous deployment** option again in the **Settings** blade. Show that the initial commit is the current active deployment.

	![Showing the Deployments blade](images/VSCommunity/showing-the-deployments-blade.png?raw=true "Showing the Deployments blade")

	_Showing the Deployments blade_


1. Go to your local repository and open the **index.jade** file located in the **Chatroom\views** folder. 

1. Update the main title and push it to GitHub.

	![Updating the index view](images/VSCommunity/updating-the-index-view.png?raw=true "Updating the index view")

	_Updating the index view_

1. Go back to the **Deployments** blade for your Web App and show the new deployment entry.

	![Showing the new deployment entry](images/VSCommunity/showing-the-new-deployment-entry.png?raw=true "Showing the new deployment entry")

	_Showing the new deployment entry_

1. Navigate to the site to show that its was updated.

	![Showing the updated site](images/VSCommunity/showing-the-updated-site.png?raw=true "Showing the updated site")

	_Showing the updated site_

<a name="segment3" />
### Remote debugging a node application with Visual Studio and Azure ###

Node Tools for Visual Studio comes with several advanced debugging features such as conditional breakpoints, “hit count” breakpoints, tracepoints and remote debugging support for Windows.

NTVS has special support for remote debugging of code running on Azure Web Sites. Unlike simple remote debugging, the target machine is not directly accessible over TCP, but NTVS comes with a WebSocket proxy for the debugging protocol that exposes the debugger protocol via HTTP. When you create a new Windows Azure project, the proxy is fully configured for you in Web.Debug.config, and will be enabled on the web site if you publish your project in the "Debug" configuration. If you publish the web site using git, you need to update the Web.config file manually. In the previous section, you published the updated Web.config, so in this section you only need to attach the debugger.

1. To attach to the Web App, open **Server Explorer** and locate your web app under **Azure | App Service**, right-click it and select **Attach Debugger (Node.js)**.

	![Attaching the debugger](images/VSCommunity/attaching-the-debugger.png?raw=true "Attaching the debugger")

	_Attaching the debugger_

	> **Note:** If an error shows up while trying to attach the debugger to the Web App, it might be related with an issue with the Nodejs Tools (e.g. issue [#125](https://github.com/Microsoft/nodejstools/issues/125)). In order to workaround this issue, try attaching without Server Explorer by following  [this](https://github.com/Microsoft/nodejstools/wiki/Advanced-Debugging#attaching-without-server-explorer) document.

	> ![Could not attach error](images/VSCommunity/could-not-attach-error.png?raw=true "Could not attach error")

	> _Could not attach error_

1. Open the **socketio.js** file located in the root of the project and set a breakpoint in the **connection** event handler.

1. Refresh the site in the browser and check if the debugger is working.

	![Checking that the debugger is working](images/VSCommunity/checking-that-the-debugger-is-working.png?raw=true "Checking that the debugger is working")

	_Checking that the debugger is working_

1. You can stream the latest logs by right-clicking your web app in the **Server Explorer** and selecting **View Streaming Logs**.

	![Streaming logs](images/VSCommunity/streaming-logs.png?raw=true "Streaming logs")

	_Streaming logs_

---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, you have learned how to set up remote debugging with Visual Studio to a Node.js application deployed in Azure.

---
