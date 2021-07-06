(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{320:function(e,t,a){e.exports=a.p+"assets/img/architecture_day2.697228e8.png"},851:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"💎-breakout-4-optional-create-the-infrastructure-for-our-sample-app-with-arm-templates-💎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-4-optional-create-the-infrastructure-for-our-sample-app-with-arm-templates-💎"}},[e._v("#")]),e._v(" 💎 Breakout 4 (optional): Create the infrastructure for our sample app with ARM templates 💎")]),e._v(" "),r("p",[e._v("⏲️ "),r("em",[e._v("Est. time to complete: 60 min.")]),e._v(" ⏲️")]),e._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),r("p",[e._v("So, this is our last Break-Out session for today. You will now have the challenge to create the "),r("em",[e._v("ARM template")]),e._v(" for our SCM Contacts application and deploy it to Azure.")]),e._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#services"}},[e._v("Services")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#todo-for-you"}},[e._v("ToDo for You")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#references-links"}},[e._v("References / Links")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),r("h2",{attrs:{id:"services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),r("p",[e._v("As a reminder, here is the architecture, we want to create:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(320),alt:"architecture_day2",title:"architecture_day2"}})]),e._v(" "),r("h3",{attrs:{id:"services-to-be-added"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#services-to-be-added"}},[e._v("#")]),e._v(" Services to be added")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Contacts API")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Azure Web App:")]),e._v(" "),r("ul",[r("li",[e._v("Size: S1")]),e._v(" "),r("li",[e._v("make it accept only HTTPS traffic")])])])])]),e._v(" "),r("li",[r("strong",[e._v("Resources / Images API")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Azure Storage Account:")]),e._v(" "),r("ul",[r("li",[e._v("SKU: Local Redundant Storage")]),e._v(" "),r("li",[e._v("Kind: StorageV2")])])]),e._v(" "),r("li",[r("em",[e._v("Azure Web App:")]),e._v(" "),r("ul",[r("li",[e._v("Size: S1")]),e._v(" "),r("li",[e._v("make it accept only HTTPS traffic")]),e._v(" "),r("li",[e._v("configure App Settings:\n"),r("ul",[r("li",[e._v("ImageStoreOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("ImageStoreOptions__ImageContainer: "),r("em",[e._v("rawimages")])]),e._v(" "),r("li",[e._v("ImageStoreOptions-__ThumbnailContainer: "),r("em",[e._v("thumbnails")])]),e._v(" "),r("li",[e._v("StorageQueueOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("StorageQueueOptions__Queue: "),r("em",[e._v("thumbnails")])]),e._v(" "),r("li",[e._v("StorageQueueOptions__ImageContainer: "),r("em",[e._v("rawimages")])]),e._v(" "),r("li",[e._v("StorageQueueOptions__ThumbnailContainer: "),r("em",[e._v("thumbnails")])])])])])]),e._v(" "),r("li",[r("em",[e._v("Azure Function:")]),e._v(" "),r("ul",[r("li",[e._v("Consumption Plan (!)")]),e._v(" "),r("li",[e._v("configure App Settings:\n"),r("ul",[r("li",[e._v("AzureWebJobsDashboard: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("AzureWebJobsStorage: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("QueueName: "),r("em",[e._v("thumbnails")])]),e._v(" "),r("li",[e._v("FUNCTIONS"),r("em",[e._v("WORKER_RUNTIME: _dotnet")])]),e._v(" "),r("li",[e._v("FUNCTIONS"),r("em",[e._v("EXTENSION_VERSION:")]),e._v("~2_")]),e._v(" "),r("li",[e._v("ImageProcessorOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),r("li",[e._v("ImageProcessorOptions__ImageWidth: "),r("em",[e._v("100")])])])])])])])]),e._v(" "),r("li",[r("strong",[e._v("Frontend / Single Page Application")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Azure Storage Account:")]),e._v(" "),r("ul",[r("li",[e._v("SKU: Local Redundant Storage")]),e._v(" "),r("li",[e._v("Kind: StorageV2")]),e._v(" "),r("li",[e._v("Static Website Hosting can't be enabled via ARM templates at the time of writing. Enable it via Azure CLI after the deployment: "),r("code",[e._v("az storage blob service-properties update --account-name <STORAGE_ACCOUNT_NAME> --static-website --index-document index.html --404-document index.html")]),e._v(". To show the URL for it, use: "),r("code",[e._v('az storage account show -n <STORAGE_ACCOUNT_NAME> --query "primaryEndpoints.web" --output tsv')])])])])])])]),e._v(" "),r("h2",{attrs:{id:"todo-for-you"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#todo-for-you"}},[e._v("#")]),e._v(" ToDo for You")]),e._v(" "),r("p",[e._v("Create one ARM template (plus parameters file) that contains all resources we need. Deploy the resources to a new resource group.")]),e._v(" "),r("h2",{attrs:{id:"references-links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references-links"}},[e._v("#")]),e._v(" References / Links")]),e._v(" "),r("ul",[r("li",[e._v("You can access/see the current template/JSON of running resources via "),r("a",{attrs:{href:"https://resources.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://resources.azure.com"),r("OutboundLink")],1),e._v(". This is a good starting point, when you want to know what UI setting influences which JSON parameter.")]),e._v(" "),r("li",[e._v("Azure Resource Manager Template Reference: "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/templates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/en-us/azure/templates/"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("find documentation for all available properties of a service/resource")])])]),e._v(" "),r("li",[e._v("Azure Quickstart Templates: "),r("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Azure Function App (Consumption Plan): "),r("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dynamic",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dynamic"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Basic Web App: "),r("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-webapp-basic-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-webapp-basic-windows"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Storage Account: "),r("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-storage-account-create",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-storage-account-create"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"wrap-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),r("p",[e._v("🎉 "),r("strong",[r("em",[e._v("Congratulations")])]),e._v(" 🎉")]),e._v(" "),r("p",[e._v("You have just automated the deployment of an Azure infrastructure. The next step would be to also automatically deploy the Web Apps / SPA to your infrastructure. We will learn about that on "),r("RouterLink",{attrs:{to:"/day4/"}},[e._v("Day 4")]),e._v(", when we are talking about "),r("em",[e._v("Continuous Integration and Continuous Deployment (CI/CD)")]),e._v(".")],1),e._v(" "),r("p",[e._v("On "),r("RouterLink",{attrs:{to:"/day3/"}},[e._v("Day 3")]),e._v(", we will learn about some additional Azure services that we can add to our application, to be able to store data, search for it and to show you how to do service-to-service communication with a "),r("em",[e._v("microservice approach")]),e._v(".")],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day2/challenges/06-challenge-bo-3.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),r("RouterLink",{attrs:{to:"/day2/"}},[e._v("🔼 Day 2")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);