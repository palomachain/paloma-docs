(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{283:function(t,e,n){"use strict";n.r(e);var o=n(13),s=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"system-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-configuration"}},[t._v("#")]),t._v(" System configuration")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Recommended operating systems")]),t._v(" "),e("p",[t._v("This guide has been tested against Linux distributions only.\nTo ensure a successful production environment setup, consider\nusing a Linux system.")])]),t._v(" "),e("p",[t._v("Running a full Paloma node is a resource-intensive process that\nrequires a persistent server. If you want to use Paloma without\ndownloading the entire blockchain, use "),e("a",{attrs:{href:"https://station.Paloma.money/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paloma Station"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"hardware-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hardware-requirements"}},[t._v("#")]),t._v(" Hardware requirements")]),t._v(" "),e("p",[t._v("These are the the minimum requirements for running a full Paloma node:")]),t._v(" "),e("ul",[e("li",[t._v("Four or more CPU cores")]),t._v(" "),e("li",[t._v("At least 32 GB of memory")]),t._v(" "),e("li",[t._v("At least 300 mbps of network bandwidth")]),t._v(" "),e("li",[t._v("At least 2 TB NVME SSD")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Storage requirements")]),t._v(" "),e("p",[t._v("As the network grows, the minimum storage requirements will also grow.\nIt is recommended that you use more than the minimum storage requirements\nto run a robust full node.")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang v1.18+ linux/amd64"),e("OutboundLink")],1)]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Installing Go for MacOS & Linux")]),t._v(" "),e("p",[t._v("Go releases can be found here: "),e("a",{attrs:{href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" https://go.dev/dl/ "),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("In your browser, you can right-click the correct release (V1.18) and "),e("code",[t._v("Copy link")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. Download the archive")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://go.dev/dl/go1.18.2.linux-amd64.tar.gz\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional: remove previous /go files:")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /usr/local/go\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. Unpack:")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. Add the path to the go-binary to your system path:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (for this to persist, add this line to your ~/.profile or ~/.bashrc or  ~/.zshrc)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":/usr/local/go/bin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. Verify your installation:")]),t._v("\n\ngo version\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# go version go1.18.2 linux/amd64")]),t._v("\n\n")])])])])]),t._v(" "),e("li",[e("p",[t._v("Linux users: "),e("code",[t._v("sudo apt-get install -y build-essential")])])])]),t._v(" "),e("h2",{attrs:{id:"commonly-used-ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonly-used-ports"}},[t._v("#")]),t._v(" Commonly used ports")]),t._v(" "),e("p",[e("code",[t._v("Palomad")]),t._v(" uses the following TCP ports. Toggle their settings to fit your environment.")]),t._v(" "),e("p",[t._v("Most validators will only need to open the following port:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("26656")]),t._v(": The default port for the P2P protocol. This port is used to\ncommunicate with other nodes and must be open to join a network. However,\nit does not have to be open to the public. For validator nodes,\n"),e("RouterLink",{attrs:{to:"/guide/node-management/full-node/updates-and-additional.html#additional-settings"}},[t._v("configuring "),e("code",[t._v("persistent_peers")])]),t._v("\nand closing this port to the public is recommended.")],1)]),t._v(" "),e("p",[t._v("Additional ports:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("1317")]),t._v(": The default port for the Lite Client Daemon, which can be executed by\n"),e("code",[t._v("Palomad rest-server")]),t._v(". The LCD provides an HTTP RESTful API layer to allow\napplications and services to interact with your "),e("code",[t._v("Palomad")]),t._v(" instance through RPC.\nFor usage examples, see "),e("a",{attrs:{href:"https://lcd.Paloma.dev/swagger/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paloma REST API"),e("OutboundLink")],1),t._v(".\nYou don't need to open this port unless you have use for it.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("26660")]),t._v(": The default port for interacting with the "),e("a",{attrs:{href:"https://prometheus.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),e("OutboundLink")],1),t._v("\ndatabase, which can be used to monitor the environment. In the default configuration,\nthis port is not open.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("26657")]),t._v(": The default port for the RPC protocol. Because this port is used for\nquerying and sending transactions, it must be open for serving queries from\n"),e("code",[t._v("Palomad")]),t._v(".")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Do not open port "),e("code",[t._v("26657")]),t._v(" to the public unless you plan to run a public node.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);