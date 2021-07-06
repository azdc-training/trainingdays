(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{350:function(t,e,a){t.exports=a.p+"assets/img/deploytoazure.e0e5d477.png"},431:function(t,e,a){t.exports=a.p+"assets/img/goal.6e03abe2.png"},432:function(t,e,a){t.exports=a.p+"assets/img/onpremise.f1d33cab.png"},433:function(t,e,a){t.exports=a.p+"assets/img/vpnLabAzureStart.6306c9ad.png"},434:function(t,e,a){t.exports=a.p+"assets/img/vpnGWPIP.ef0fe4eb.png"},435:function(t,e,a){t.exports=a.p+"assets/img/connectionFlow.8657ae70.png"},436:function(t,e,a){t.exports=a.p+"assets/img/vpn0.b2dfe067.png"},437:function(t,e,a){t.exports=a.p+"assets/img/vpn1.ceece175.png"},438:function(t,e,a){t.exports=a.p+"assets/img/vpn2.c2bae65a.png"},439:function(t,e,a){t.exports=a.p+"assets/img/vpn3.5e26f77c.png"},440:function(t,e,a){t.exports=a.p+"assets/img/vpn4.9caf3813.png"},441:function(t,e,a){t.exports=a.p+"assets/img/vpn5.dad472fd.png"},442:function(t,e,a){t.exports=a.p+"assets/img/successfulPing.96d6310b.png"},443:function(t,e,a){t.exports=a.p+"assets/img/vpn6-moresecure.5fa353ef.png"},837:function(t,e,a){"use strict";a.r(e);var r=a(25),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-8-networking-and-vpn-enabling-hybrid-networking-with-a-site-2-site-onprem-to-azure-vpn-connection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-8-networking-and-vpn-enabling-hybrid-networking-with-a-site-2-site-onprem-to-azure-vpn-connection"}},[t._v("#")]),t._v(" Challenge 8: Networking and VPN - Enabling Hybrid Networking with a Site-2-Site (Onprem to Azure) VPN Connection")]),t._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),r("p",[t._v("What it takes to implement a VPN tunnel between your onprem firewall <---VPN S2S---\x3e Azure. Our final architecture will look like this:"),r("br"),t._v(" "),r("img",{attrs:{src:a(431),alt:"Hybrid Network with Azure"}})]),t._v(" "),r("p",[t._v("An Azure S2S VPN requires:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("onprem")]),t._v(" "),r("th",[t._v("Azure")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("A supported device Azure can talk to.")]),t._v(" "),r("td",[r("ul",[r("li",[t._v("VPN Gateway in its own subnet.")]),r("li",[t._v("VPN GWay requires a dynamic Public IP")]),r("li",[t._v("Settings how the onprem VPN / FWall is to be contacted (aka LocalNetworkGateway)")]),r("li",[t._v("Connection Object with e.g. shared key")])])])])])]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#starting-point"}},[t._v("Starting Point")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#create-a-vpn-gateway-and-a-public-ip-using-the-Azure-portal"}},[t._v("Create a VPN Gateway and a Public IP using the Azure portal")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#create-a-local-network-gateway-in-azure"}},[t._v("Create a Local Network Gateway in Azure")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#create-a-connection-object-with-shared-key-in-azure"}},[t._v("Create a connection object with shared key in Azure")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#configure-your-onpremise-vpn-counterpart"}},[t._v("Configure your onpremise VPN counterpart")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#apply-a-more-secure-cipher-for-the-vpn-tunnel-optional"}},[t._v("Apply a more secure cipher for the VPN tunnel (optional)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#cleanup"}},[t._v("Cleanup")])])]),t._v(" "),r("h2",{attrs:{id:"starting-point"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-point"}},[t._v("#")]),t._v(" Starting Point")]),t._v(" "),r("p",[t._v("Your instructor has setup for you the onprem part - "),r("em",[t._v("ask him for the details")]),t._v(":")]),t._v(" "),r("p",[r("img",{attrs:{src:a(432),alt:"Onpremise"}})]),t._v(" "),r("p",[r("strong",[t._v("Click")]),t._v(" on the "),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-08%2Fchallengestart%2Fchallengestart.json"}},[r("img",{attrs:{src:a(350)}})]),t._v("\nbutton to get the Azure resources to start with:"),r("br"),t._v(" "),r("img",{attrs:{src:a(433),alt:"azure vpn starting point"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Resource group")])]),t._v(" "),r("td",[r("strong",[t._v("(new)")]),t._v(" rg-vpn")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Location")])]),t._v(" "),r("td",[t._v("North Europe")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Admin user")])]),t._v(" "),r("td",[t._v("demouser")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Admin password")])]),t._v(" "),r("td",[t._v("%some complex value%")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Vm Size")])]),t._v(" "),r("td",[t._v("Standard_B2s  or try e.g. Standard_F2s_v2")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Disk Sku")])]),t._v(" "),r("td",[t._v("StandardSSD_LRS")])])])]),t._v(" "),r("h2",{attrs:{id:"create-a-vpn-gateway-and-a-public-ip-using-the-azure-portal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-vpn-gateway-and-a-public-ip-using-the-azure-portal"}},[t._v("#")]),t._v(" Create a VPN Gateway and a Public IP using the Azure portal")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] \n-> '+ Create a resource' \n-> type \"Virtual network gateway\"\n-> Create\n")])])]),r("p",[t._v("Use the following parameter values:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("_Name")]),t._v(" "),r("td",[t._v("myAzVPNGWay")])]),t._v(" "),r("tr",[r("td",[t._v("_Region")]),t._v(" "),r("td",[t._v("West Europe")])]),t._v(" "),r("tr",[r("td",[t._v("_Gateway type")]),t._v(" "),r("td",[t._v("VPN")])]),t._v(" "),r("tr",[r("td",[t._v("_VPN Type")]),t._v(" "),r("td",[t._v("Route based")])]),t._v(" "),r("tr",[r("td",[t._v("_Gateway type")]),t._v(" "),r("td",[t._v("VPN")])]),t._v(" "),r("tr",[r("td",[t._v("_SKU")]),t._v(" "),r("td",[t._v("VpnGw1")])]),t._v(" "),r("tr",[r("td",[t._v("_Virtual Network")]),t._v(" "),r("td",[t._v("vnet-vpn")])]),t._v(" "),r("tr",[r("td",[t._v("_Gateway subnet address range")]),t._v(" "),r("td",[t._v("e.g. 10.1.254.192/26")])]),t._v(" "),r("tr",[r("td",[t._v("_Public IP address")]),t._v(" "),r("td",[r("strong",[t._v("Create new")])])]),t._v(" "),r("tr",[r("td",[t._v("_Public IP address name")]),t._v(" "),r("td",[t._v("myAzVPNGWay-IP")])]),t._v(" "),r("tr",[r("td",[t._v("_Enable active-active mode")]),t._v(" "),r("td",[t._v("Disabled")])]),t._v(" "),r("tr",[r("td",[t._v("_Configure BGP")]),t._v(" "),r("td",[t._v("Disabled")])])])]),t._v(" "),r("p",[t._v("The GW setup will take approx 30 mins. to create. So come back later (e.g. in the meantime you can do the next lab 😃)")]),t._v(" "),r("p",[t._v("When your GW has been assigned a "),r("em",[t._v("public IP address")]),t._v(" then you know it is online.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(434),alt:"VPN GW with public IP"}})]),t._v(" "),r("h2",{attrs:{id:"create-a-local-network-gateway-in-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-network-gateway-in-azure"}},[t._v("#")]),t._v(" Create a Local Network Gateway in Azure")]),t._v(" "),r("p",[t._v("The purpose of this task is to tell Azure how to contact the onpremise firewall:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] \n-> '+ Add' \n-> type 'Local network gateway' \n-> Create\n")])])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Name")])]),t._v(" "),r("td",[t._v("l-gw-ipfire")])]),t._v(" "),r("tr",[r("td",[t._v("_IP address")]),t._v(" "),r("td",[t._v("%external IP of your Firewall - ask instructor%")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Address Space")])]),t._v(" "),r("td",[t._v("192.168.0.0/24")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Resource Group")])]),t._v(" "),r("td",[t._v("rg-vpn")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Location")])]),t._v(" "),r("td",[t._v("West Europe")])])])]),t._v(" "),r("h2",{attrs:{id:"create-a-connection-object-with-shared-key-in-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-connection-object-with-shared-key-in-azure"}},[t._v("#")]),t._v(" Create a connection object with shared key in Azure")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] \n-> Resource Groups \n-> rg-vpn \n-> myAzVPNGWay\n-> Connections\n")])])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Name")])]),t._v(" "),r("td",[t._v("azure-to-onprem")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Connection Type")])]),t._v(" "),r("td",[t._v("Site-to-Site (IPSec)")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Virtual Network Gateway")])]),t._v(" "),r("td",[t._v("myAzVPNGWay")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Local Network Gateway")])]),t._v(" "),r("td",[t._v("l-gw-ipfire")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Shared Key")])]),t._v(" "),r("td",[t._v("%your choice here%")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("IKE Protocol")])]),t._v(" "),r("td",[t._v("IKEv2")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Resource Group")])]),t._v(" "),r("td",[t._v("rg-vpn")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Location")])]),t._v(" "),r("td",[t._v("West Europe")])])])]),t._v(" "),r("h2",{attrs:{id:"configure-your-onpremise-vpn-counterpart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-onpremise-vpn-counterpart"}},[t._v("#")]),t._v(" Configure your onpremise VPN counterpart")]),t._v(" "),r("p",[t._v("We now need to configure the other end of the vpn tunnel: the onpremise firewall in our case a linux FW called "),r("em",[t._v("IPFire")]),t._v(".")]),t._v(" "),r("ol",[r("li",[t._v("For this use the remote desktop client to RDP into your onpremise environment ("),r("em",[t._v("ask your instructor for connection details")]),t._v("):")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Internet -- 1st RDP \n-> onprem Lab (HyperV Host) -- 2nd RDP\n-> cmW2k19 (192.168.0.11) --https \n->IPFire (192.168.0.100)  \n")])])]),r("p",[r("img",{attrs:{src:a(435),alt:"Connection Flow"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("connect to 1st RDP")])]),t._v(" "),r("td",[r("ul",[r("li",[r("b",[t._v("IP")]),t._v(": %ask instructor%")]),r("li",[r("b",[t._v("username")]),t._v(": demouser")]),r("li",[r("b",[t._v("password")]),t._v(": %ask instructor%")])])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("within this session connect to 2nd RDP")])]),t._v(" "),r("td",[r("ul",[r("li",[r("b",[t._v("IP")]),t._v(": 192.168.0.11")]),r("li",[r("b",[t._v("username")]),t._v(": administrator")]),r("li",[r("b",[t._v("password")]),t._v(": %ask instructor%")])])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("open browser and do https")]),t._v(" ( ignore certificate warning -> proceed)")]),t._v(" "),r("td",[r("ul",[r("li",[r("b",[t._v("URI")]),t._v(": https://192.168.0.100:444")]),r("li",[r("b",[t._v("username")]),t._v(": admin")]),r("li",[r("b",[t._v("password")]),t._v(": %ask instructor%")])])])])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("Add the VPN details and save")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("IPFire \n-> Services \n-> IPSec \n-> 'Connection Status and -Control' \n-> Add\n")])])]),r("p",[r("img",{attrs:{src:a(436),alt:"IPFire: Add a connection"}})]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('"Net-to-Net Virtual Private Network" -> Add\n')])])]),r("p",[r("img",{attrs:{src:a(437),alt:"IPFire: add Net-to-Net connection"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Name")])]),t._v(" "),r("td",[t._v("azure")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Local subnet")])]),t._v(" "),r("td",[t._v("192.168.0.0/255.255.255.0")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Remote Host/IP")])]),t._v(" "),r("td",[t._v("%myAzVPNGWay IP Address%  (Azure Portal -> VPN Gateway -> Public IP address)")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Remote subnet")])]),t._v(" "),r("td",[t._v("%Address Range of the virtual network in azure% (in our case 10.1.0.0/255.255.0.0)")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Use a pre-shared key")])]),t._v(" "),r("td",[t._v("%Shared Key you used above% (Azure Portal -> VPN Gateway -> Connections -> Shared Key)")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(438),alt:"IPFire: connection settings"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("Modify the algorithms used for the connection. Click on the pencil symbol and choose 'Advanced':")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(439),alt:"IPFire: Advanced cipher settings"}})]),t._v(" "),r("p",[t._v("3.1 You "),r("em",[t._v("must")]),t._v(" select the following algorithms/suites for the connection:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(440),alt:"IPFire: connection settings"}})]),t._v(" "),r("p",[t._v("3.2 Select "),r("code",[t._v("Always on")]),t._v(", then save")]),t._v(" "),r("p",[t._v("3.3 Tick checkbox to enable connection. The connection status should go to green:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(441),alt:"IPFire: connection settings"}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("Now let's ping your Azure VM (e.g. vmazure) under its private ip (probably: 10.1.0.4) from onpremise:")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(442),alt:"Successful Ping"}}),t._v("\nDo you receive a response?")]),t._v(" "),r("h2",{attrs:{id:"apply-a-more-secure-cipher-for-the-vpn-tunnel-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-more-secure-cipher-for-the-vpn-tunnel-optional"}},[t._v("#")]),t._v(" Apply a more secure cipher for the VPN tunnel (optional)")]),t._v(" "),r("p",[t._v("The following ARM Template ("),r("a",{attrs:{href:"./scripts/VPNMoreSecureConnPolicy.json"}},[t._v("VPNMoreSecureConnPolicy.json")]),t._v(") defines a more secure cipher / algorithm to use for the VPN tunnel:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("ipsecEncryption")])]),t._v(" "),r("td",[t._v("AES256")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("ipsecIntegrity")])]),t._v(" "),r("td",[t._v("SHA256")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("ikeEncryption")])]),t._v(" "),r("td",[t._v("AES256")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("ikeIntegrity")])]),t._v(" "),r("td",[t._v("SHA384")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("dhGroup")])]),t._v(" "),r("td",[t._v("DHGroup14")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("pfsGroup")])]),t._v(" "),r("td",[t._v("PFS2048")])])])]),t._v(" "),r("p",[t._v("To deploy it, "),r("strong",[t._v("click")]),t._v(" the\n"),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenges%2FChallenge8%2FVPNMoreSecureConnPolicy.json"}},[r("img",{attrs:{src:a(350)}})]),t._v(" button and select correct parameters to apply new ciphers to your current connection.")]),t._v(" "),r("p",[t._v("However, you also need to apply this to the onprem firewall:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(443),alt:"VPN more secure cipher"}})]),t._v(" "),r("h2",{attrs:{id:"cleanup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),r("p",[t._v("Delete the resource group "),r("code",[t._v("rg-vpn")])]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day1/challenge-07/"}},[t._v("◀ Previous challenge")]),t._v(" | "),r("RouterLink",{attrs:{to:"/day1/"}},[t._v("🔼 Day 1")]),t._v(" | "),r("RouterLink",{attrs:{to:"/day1/challenge-09/"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);