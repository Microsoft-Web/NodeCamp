<a name="title" />
# Deploying on Azure #

---
<a name="Overview" />
## Overview ##

This demo introduces how to deploy a Node.js application to Azure from GitHub. Additionally, **TBC**.

<a id="goals" />
### Goals ###
In this demo, you will see how to:

1. Deploy a Node.js app to Azure

1. **TBC**

<a name="technologies" />
### Key Technologies ###

- [Node.js][1]
- [Microsoft Azure][2]
- [Azure DocumentDB][3]
- [Visual Studio Code][4]

[1]: https://nodejs.org/
[2]: http://azure.microsoft.com/
[3]: http://azure.microsoft.com/en-us/services/documentdb/
[4]: https://code.visualstudio.com/

<a name="Setup" />
### Setup and Configuration ###
Follow these steps to set up your environment for the demo.

1. Get an [Azure subscription](https://azure.microsoft.com/en-us/pricing/free-trial/)

1. Get a [GitHub Account](https://help.github.com/articles/signing-up-for-a-new-github-account/)

1. Download [Visual Studio Code](https://code.visualstudio.com/Download) for your platform and follow the [installation and setting up instructions](https://code.visualstudio.com/Docs/editor/setup).

1. Install [Node.js](https://nodejs.org/en/download/).

1. Create a DocumentDB database account. Details [here] (https://azure.microsoft.com/en-us/documentation/articles/documentdb-create-account/).

1. After the DocumentDB account is created, navigate to the Keys blade of your DocumentDB account and take note of the URI and PRIMARY KEY values. You will use them later on.

	![Copying the DocumentDB account keys](images/VSCode/copying-the-keys.png?raw=true "Copying the DocumentDB account keys")

	_Copying the DocumentDB account keys_

1. Create a new repository in your GitHub account and import the code from the **source\Begin** folder. Details [here](https://help.github.com/articles/create-a-repo/).

1. Open a **command prompt/terminal** according to your platform in the **source/Begin/Chatroom** folder.

1. Run **npm install** to install all the missing dependencies.

	![Installing Missing npm Packages](images/VSCode/installing-missing-npm-packages.png?raw=true "Installing Missing npm Packages")

	_Installing Missing npm Packages_

<a name="Demo" />
## Demo ##
This demo is composed of the following segments:

1. [Deploying to Azure with GitHub](#segment1)
1. [TBC](#segment2)

<a name="segment1" />
### Deploying to Azure with GitHub ###

1. Go back to the [Azure Portal](https://portal.azure.com/). In the Settings blade of your Web App, locate the **Publishing** section and click **Continuous deployment**.

	![Setting up continuous deployment](images/VSCode/setting-up-continuos-deployment.png?raw=true "Setting up continuous deployment")

	_Setting up continuous deployment_

1. In the **Continuous Deployment** blade, select **Choose Source** and then select **GitHub**.

	> **Note:** The first time you will need to authorize Azure to access your GitHub information.

	![Selecting GitHub as source](images/VSCode/selecting-github-as-source.png?raw=true "Selecting GitHub as source")

	_Selecting GitHub as source_

1. Select the repository you created in the setup section from the list, leave **master** as the branch to deploy and click **OK**.

	![Selecting the repository](images/VSCode/selecting-the-repository.png?raw=true "Selecting the repository")

	_Selecting the repository_

1. Now, the **Deployments** blade should open, else navigate to the **Continuous deployment** option again in the **Settings** blade. Show that the initial commit is the current active deployment.

	![Showing the Deployments blade](images/VSCode/showing-the-deployments-blade.png?raw=true "Showing the Deployments blade")

	_Showing the Deployments blade_

1. In the command prompt/terminal run **code .** to open the current directory (your local Git repository) with **Visual Studio Code**.

1. In the **Explore** view, open the **index.jade** file located in the **views** folder. 

1. Update the main title.

	![Updating the index view](images/VSCode/updating-the-index-view.png?raw=true "Updating the index view")

	_Updating the index view_

1. Push the changes to GitHub using Visual Studio Code. To do this bring up the **Git** view by clicking on the Git icon in the View Bar on the side of Visual Studio Code. Enter a commit message (e.g. "Updated index view") and click on the **Commit all** button.

	![Committing all changes](images/VSCode/committing-all-changes.png?raw=true "Committing all changes")
	
	_Committing all changes_

1. Now push the changes by clicking on the ellipsis button and then in the **Push** command.

	![Pushing changes to GitHub](images/VSCode/pushing-changes-to-github.png?raw=true "Pushing changes to GitHub")
	
	_Pushing changes to GitHub_

1. Go back to the **Deployments** blade for your Web App and show the new deployment entry.

	![Showing the new deployment entry](images/VSCode/showing-the-new-deployment-entry.png?raw=true "Showing the new deployment entry")

	_Showing the new deployment entry_

1. Navigate to the site to show that its was updated.

	![Showing the updated site](images/VSCode/showing-the-updated-site.png?raw=true "Showing the updated site")

	_Showing the updated site_

<a name="segment3" />
### TBC ###


---

<a name="summary" />
## Summary ##

By completing this demo, you have learned how to deploy a Node.js application to Azure from Visual Studio as well as from GitHub. Additionally, you have learned how to set up remote debugging with Visual Studio to a Node.js application deployed in Azure.

---
