(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{734:function(e,t,s){e.exports=s.p+"assets/img/devcollegeurl.81e85837.png"},735:function(e,t,s){e.exports=s.p+"assets/img/PATMenu.cbf82820.png"},736:function(e,t,s){e.exports=s.p+"assets/img/TerraformPAT.0420795f.png"},737:function(e,t,s){e.exports=s.p+"assets/img/SavePAT.81b2c321.png"},738:function(e,t,s){e.exports=s.p+"assets/img/sshpubkeymenu.64304e74.png"},739:function(e,t,s){e.exports=s.p+"assets/img/sshpubkeyadd.35a038ea.png"},740:function(e,t,s){e.exports=s.p+"assets/img/sshpubkeypaste.50eb76a3.png"},741:function(e,t,s){e.exports=s.p+"assets/img/blankrestore.4aaa2eda.png"},742:function(e,t,s){e.exports=s.p+"assets/img/project_settings.36e5bdbc.png"},743:function(e,t,s){e.exports=s.p+"assets/img/grant_permissions.9dec1dc8.png"},744:function(e,t,s){e.exports=s.p+"assets/img/runcommon.300216d8.png"},745:function(e,t,s){e.exports=s.p+"assets/img/readytorun.d79a8ce8.png"},746:function(e,t,s){e.exports=s.p+"assets/img/pendingpermission.1e92c2b4.png"},747:function(e,t,s){e.exports=s.p+"assets/img/permit.36f2bf6c.png"},748:function(e,t,s){e.exports=s.p+"assets/img/runpending.e16d69b2.png"},749:function(e,t,s){e.exports=s.p+"assets/img/resourcegroups.8c813c69.png"},750:function(e,t,s){e.exports=s.p+"assets/img/vuerestore.a69d6007.png"},751:function(e,t,s){e.exports=s.p+"assets/img/static-website.165c2b14.png"},884:function(e,t,s){"use strict";s.r(t);var a=s(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pre-day-5-checkpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-day-5-checkpoint"}},[e._v("#")]),e._v(" Pre-day 5 checkpoint")]),e._v(" "),a("p",[e._v("This step by step guide will help you deploy the complete app and DevOps pipelines in a state after completion of day 4.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-the-environment-🔧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-environment-🔧"}},[e._v("#")]),e._v(" Setting up the environment 🔧")]),e._v(" "),a("p",[e._v("To Setup you environment you will need to:")]),e._v(" "),a("ol",[a("li",[e._v("Clone the official training days repository")]),e._v(" "),a("li",[e._v("Access you Azure DevOps environment to obtain a personal access token (PAT)")]),e._v(" "),a("li",[e._v("Login to your Azure CLI")]),e._v(" "),a("li",[e._v("Setup SSH-Keys to allow access to your DevOps projects git repositories")]),e._v(" "),a("li",[e._v("Export some of the access credentials as environment variables in your shell")])]),e._v(" "),a("p",[e._v("Let's get started.")]),e._v(" "),a("h3",{attrs:{id:"clone-the-training-days-repository-🐑🐑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-training-days-repository-🐑🐑"}},[e._v("#")]),e._v(" Clone the training days repository 🐑🐑")]),e._v(" "),a("p",[e._v("To clone the official training days repository into you workspace, open a\nLinux Shell (e.g. WSL2 or Azure Cloud Shell) and navigate to your workspace\ndirectory.")]),e._v(" "),a("p",[e._v("Then you can "),a("em",[e._v("clone")]),e._v(" the repository using git like this:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/azuredevcollege/trainingdays.git\n")])])]),a("p",[e._v("and change into the folder for the day5 restore checkpoint like this:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" trainingdays/day5/apps/checkpoint/\n")])])]),a("h3",{attrs:{id:"collect-access-information-for-azure-devops-📃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect-access-information-for-azure-devops-📃"}},[e._v("#")]),e._v(" Collect access information for Azure DevOps 📃")]),e._v(" "),a("p",[e._v("We will be using terraform with both the Azure Resource Manager and the Azure\nDevOps providers. The later requires you to export your Azure DevOps\norganizations service URL and a personal access token with administrative\npermission in that organization.")]),e._v(" "),a("p",[e._v("First grab you Azure DevOps organization service url from you browser:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(734),alt:""}})]),e._v(" "),a("p",[e._v("and export the url as environment variable:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AZDO_ORG_SERVICE_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://dev.azure.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_organization"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Now, let's create a personal access token for your Azure DevOps organization.\nYou can find the option in the top right corner of the Azure DevOps website.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(735),alt:""}})]),e._v(" "),a("p",[e._v("Create the new token with Admin permissions in you DevOps organization, as it\nneeds to be able to create an entire new DevOps Project for you. Choose a name\nyou can easily remember to delete after you've finished the course. You\ndon't want to leave the access credentials lying around.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(736),alt:""}})]),e._v(" "),a("p",[e._v("Hit "),a("code",[e._v("create")]),e._v(" and take note of the access token after creating the token.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(737),alt:""}})]),e._v(" "),a("p",[e._v("and export the personal access token as environment variable:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AZDO_PERSONAL_ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n")])])]),a("p",[e._v("For terraform to be able to use the Azure Resource Manager APIs in your subscription you need to make sure you're logged into the subscription you want to work with.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ az login\n")])])]),a("p",[e._v("To check if the correct subscription is selected you can use the "),a("code",[e._v("account show")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ az account show\n")])])]),a("p",[e._v("Should you need to change the subscription, first list the available subscriptions in your account (in table view for better legibility):")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ az account list -o table\n")])])]),a("p",[e._v("then set the desired subscription using it's unique id:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ az account "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" --subscription  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx\n")])])]),a("h3",{attrs:{id:"make-sure-you-have-a-ssh-key-ready-to-use-with-git-🔑🔐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-you-have-a-ssh-key-ready-to-use-with-git-🔑🔐"}},[e._v("#")]),e._v(" Make sure you have a ssh-key ready to use with git 🔑🔐")]),e._v(" "),a("p",[e._v("Let's check if you have an ssh key:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" ~/.ssh/id_rsa.pub\ncat: /home/waltken/.ssh/id_rsa.pub: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" or directory\n")])])]),a("p",[e._v("This would mean that you do not have an existing key around, so let's generate a new one.\nWe'll create a new 4096 "),a("strong",[e._v("b")]),e._v("it key with the "),a("strong",[e._v("C")]),e._v("omment "),a("code",[e._v("devopsrestore")]),e._v(" at the default location for ssh keys. A "),a("strong",[e._v("f")]),e._v("ile named "),a("code",[e._v("id_rsa")]),e._v(" in you home-folders "),a("code",[e._v(".ssh")]),e._v(" directory.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ ssh-keygen -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -C devopsrestore -f ~/.ssh/id_rsa\n")])])]),a("blockquote",[a("p",[e._v("To leave the password empty, just hit return twice")])]),e._v(" "),a("p",[e._v("Now let's grab the corresponding public key:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAA...\n...\n... devopsrestore\n")])])]),a("p",[e._v("You'll need to copy multiple lines from "),a("code",[e._v("ssh-rsa")]),e._v(" until "),a("code",[e._v("devopsrestore")]),e._v(", the entire public key of of you ssh-key.")]),e._v(" "),a("p",[e._v("Now wee need to register the public key to your Azure DevOps user. This allows Azure DevOps to validate you identity without prompting for a password.")]),e._v(" "),a("p",[e._v("From the top right menu we used earlier, now select the "),a("code",[e._v("SSH public keys")]),e._v(" menu item.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(738),alt:""}})]),e._v(" "),a("p",[e._v("You should see a list with you already registered public keys. Don't worry if it's empty. We will now add you first key to the list, by hitting the "),a("code",[e._v("Add")]),e._v(" button")]),e._v(" "),a("p",[a("img",{attrs:{src:s(739),alt:""}})]),e._v(" "),a("p",[e._v("Now paste you public key into the "),a("code",[e._v("Key Data")]),e._v(" section and give it a name to your liking.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(740),alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("Should you have an existing key with a passphrase you will have to unlock the key for\nthe "),a("code",[e._v("terraform apply")]),e._v(" step about to follow:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ssh-agent -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start the ssh-agent")]),e._v("\n$ ssh-add ~/.ssh/id_rsa "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# unlock your key for use in this session")]),e._v("\n")])])])]),e._v(" "),a("h3",{attrs:{id:"use-terraform-to-setup-the-devops-project-🌏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-terraform-to-setup-the-devops-project-🌏"}},[e._v("#")]),e._v(" Use terraform to setup the DevOps project 🌏")]),e._v(" "),a("p",[e._v("Let's make sure you have terraform version v0.13.2 or higher.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ terraform version\nTerraform v0.13.2\n")])])]),a("p",[e._v("Please update your terraform version, should this not be the case.")]),e._v(" "),a("p",[e._v("Now let's initialize terraform and download the required modules and providers:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ terraform init\n")])])]),a("p",[e._v("We are ready to apply the prepared infrastructure as code (IaC) to you Azure Subscription and Azure DevOps Account.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ terraform apply\n")])])]),a("p",[e._v("Make sure that the generated plan only shows new resources to create and then\ntype "),a("em",[e._v("yes")]),e._v(" to confirm the terraform action.")]),e._v(" "),a("p",[e._v("Make sure the process runs through without any errors.")]),e._v(" "),a("p",[e._v("Congratulations! You are done with the terminal (for now 😉.")]),e._v(" "),a("h2",{attrs:{id:"run-the-pipelines-🏃‍♀️‍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-pipelines-🏃‍♀️‍"}},[e._v("#")]),e._v(" Run the pipelines 🏃‍♀️‍")]),e._v(" "),a("p",[e._v("The last part will be to run the pre-configured pipelines and find the url of\nthe deployed website.")]),e._v(" "),a("p",[e._v("Let's go the the Azure DevOps Website. Your project pipelines should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(741),alt:""}})]),e._v(" "),a("p",[e._v("Before we run any pipeline let's authorize all pipelines to use the\nconfigured Service Connections. In the lower left corner select "),a("code",[e._v("Project settings")]),e._v(" and navigate to "),a("code",[e._v("Service Connections")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:s(742),alt:""}})]),e._v(" "),a("p",[e._v("You should see to Service Connections configured for you project. Select the\nedit option for each of them and make sure the checkbox for "),a("em",[e._v("Grant access\npermission to all pipelines")]),e._v(" is ticked.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(743),alt:""}})]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This screenshot is wrong. You can only click on save for the Azure Service Connection, not the one for the Azure Container Registry.\nFor the ACR you will have to manually approve access on the first run.")])]),e._v(" "),a("p",[e._v("Start the "),a("em",[e._v("SCM Common")]),e._v(" pipeline first and wait for it to complete. The common\npipeline creates the Azure Resource Group and some share resources that the\nother project pipelines depend upon. This will take about 13 minutes to deploy. So let's take a short break, we are almost done.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(744),alt:""}}),e._v(" "),a("img",{attrs:{src:s(745),alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("If you notice that it stays pending you need to make sure your Service\nConnections grant access to all pipelines first.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(746),alt:""}}),e._v(" "),a("img",{attrs:{src:s(747),alt:""}})]),e._v(" "),a("p",[e._v("After the SCM Common pipeline has successfully deployed you can run the rest")]),e._v(" "),a("p",[a("img",{attrs:{src:s(748),alt:""}})]),e._v(" "),a("p",[e._v("Once all pipelines have passed you should be able to use the webapp without\nany errors.")]),e._v(" "),a("h3",{attrs:{id:"discover-the-website-🔍📃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discover-the-website-🔍📃"}},[e._v("#")]),e._v(" Discover the website 🔍📃")]),e._v(" "),a("p",[e._v("To find your deployed fronted website URL, you can navigate to the\n"),a("em",[e._v("scmvuerestore")]),e._v(" Storage Account in your newly created resource group. You\nwill find the "),a("em",[e._v("Primary endpoint")]),e._v(" listed under static website in the details of\nthe storage account.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(749),alt:""}}),e._v(" "),a("img",{attrs:{src:s(750),alt:""}}),e._v(" "),a("img",{attrs:{src:s(751),alt:""}})]),e._v(" "),a("p",[e._v("Hooray! 🥳🎈🎉 You've successfully restore to the pre-day5 checkpoint and are ready to go ahead an learn everything about Active Directory integration!")])])}),[],!1,null,null,null);t.default=r.exports}}]);