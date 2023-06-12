"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},i="Upgrading Unraid",l={unversionedId:"unraid-os/manual/upgrade-instructions",id:"unraid-os/manual/upgrade-instructions",title:"Upgrading Unraid",description:"Prerequisites",source:"@site/docs/unraid-os/manual/upgrade-instructions.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/upgrade-instructions",permalink:"/unraid-os/manual/upgrade-instructions",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/upgrade-instructions.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Tools",permalink:"/unraid-os/manual/tools"},next:{title:"Users",permalink:"/unraid-os/manual/users"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"From version 6.4",id:"from-version-64",level:2},{value:"From version 6.3",id:"from-version-63",level:2},{value:"From version 6.2",id:"from-version-62",level:2},{value:"Possible upgrade issues",id:"possible-upgrade-issues",level:3},{value:"The new release does not show up after clicking <em>Check for Updates</em> button",id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button",level:4},{value:"My array/docker apps are taking a really long time to start after the upgrade",id:"my-arraydocker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade",level:4},{value:"My containers aren&#39;t working right after the upgrade",id:"my-containers-arent-working-right-after-the-upgrade",level:4},{value:"My VMs get an error of &quot;cannot get interface MTU...&quot;",id:"my-vms-get-an-error-of-cannot-get-interface-mtu",level:4},{value:"VNC access to my VMs is not working or performing poorly",id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly",level:4},{value:"My OVMF VM doesn&#39;t boot correctly",id:"my-ovmf-vm-doesnt-boot-correctly",level:4},{value:"Trying to start my VM gives a &quot;Invalid Machine Type&quot; error",id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error",level:4},{value:"Poor VM performance after upgrading",id:"poor-vm-performance-after-upgrading",level:4},{value:"Poor VNC performance after upgrading",id:"poor-vnc-performance-after-upgrading",level:4},{value:"From version 6.1 or earlier",id:"from-version-61-or-earlier",level:2},{value:"Checking your existing version",id:"checking-your-existing-version",level:2},{value:"Checking for sufficient free space",id:"checking-for-sufficient-free-space",level:2},{value:"Checking your network bridge name",id:"checking-your-network-bridge-name",level:2},{value:"Checking your VM network bridge settings",id:"checking-your-vm-network-bridge-settings",level:2},{value:"Post installation procedures",id:"post-installation-procedures",level:2},{value:"From version 5.x or earlier",id:"from-version-5x-or-earlier",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrading-unraid"},"Upgrading Unraid"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,'Before upgrading, we highly recommend making a complete backup of your\nUSB flash device. You can do this by copying the entire contents of the\n"flash" share to a separate computer.'),(0,n.kt)("h2",{id:"from-version-64"},"From version 6.4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Boot your server up and login to the web interface"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Tools")," tab"),(0,n.kt)("li",{parentName:"ol"},'Click "Update OS" under the ',(0,n.kt)("em",{parentName:"li"},"About")," section"),(0,n.kt)("li",{parentName:"ol"},'Click "Check for Updates" to see if a new release is available'),(0,n.kt)("li",{parentName:"ol"},'Click "Update" to apply the update'),(0,n.kt)("li",{parentName:"ol"},"Once the upgrade is complete, reboot your server for it to take\neffect")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'Note: You can optionally install releases from the "Next" branch as\nwell, but those releases are not considered fully "Stable", so only do\nso at your own risk.')),(0,n.kt)("h2",{id:"from-version-63"},"From version 6.3"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Boot your server up and login to the web interface"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Plugins")," tab"),(0,n.kt)("li",{parentName:"ol"},'Click the "Update" button next to Unraid Server OS'),(0,n.kt)("li",{parentName:"ol"},"Once the upgrade is complete, reboot your server for it to take\neffect")),(0,n.kt)("h2",{id:"from-version-62"},"From version 6.2"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Boot your server up and login to the web interface"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Plugins")," tab"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Check for Updates")," button"),(0,n.kt)("li",{parentName:"ol"},'Click the "Update" button next to Unraid Server OS'),(0,n.kt)("li",{parentName:"ol"},"Once the upgrade is complete, reboot your server for it to take\neffect")),(0,n.kt)("p",null,"Note: if ",(0,n.kt)("em",{parentName:"p"},"Check for Updates")," shows no update, see below."),(0,n.kt)("h3",{id:"possible-upgrade-issues"},"Possible upgrade issues"),(0,n.kt)("p",null,"Having problems after the update? See below for common issues and\nsolutions."),(0,n.kt)("h4",{id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button"},"The new release does not show up after clicking ",(0,n.kt)("em",{parentName:"h4"},"Check for Updates")," button"),(0,n.kt)("p",null,"In this case, manually install the update as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to Plugins/Install Plugin tab"),(0,n.kt)("li",{parentName:"ol"},"Select/copy this text\n",(0,n.kt)("a",{parentName:"li",href:"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg"},"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg")),(0,n.kt)("li",{parentName:"ol"},"Paste into URL field and click Install")),(0,n.kt)("h4",{id:"my-arraydocker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade"},"My array/docker apps are taking a really long time to start after the upgrade"),(0,n.kt)("p",null,"There is a one-time update procedure that each container will need to go\nthrough in order to point it towards the new Docker Hub API going\nforward, even if the container itself truly isn't in need of an update.\nThis process will happen automatically the first time your containers\nare started after upgrading. The Docker change log describes it like\nthis:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Docker 1.10 uses a new content-addressable storage for images and\nlayers. A migration is performed the first time docker is run and can\ntake a significant amount of time depending on the number of images\npresent.")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/docker/docker/releases/tag/v1.10.0"},"here")," for\nmore information from Docker on this."),(0,n.kt)("h4",{id:"my-containers-arent-working-right-after-the-upgrade"},"My containers aren't working right after the upgrade"),(0,n.kt)("p",null,'If you run into any issues with your containers after this procedure\ncompletes (such as the "layers from manifest don\'t match image\nconfiguration" error), you will need to rebuild your Docker image file.\nTo do this:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop Docker from the ",(0,n.kt)("em",{parentName:"li"},"Settings")," ",">"," ",(0,n.kt)("em",{parentName:"li"},"Docker")," page"),(0,n.kt)("li",{parentName:"ol"},"Click the checkbox and then click the button to delete the image"),(0,n.kt)("li",{parentName:"ol"},"Start Docker again and the image will be recreated"),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("em",{parentName:"li"},"Docker")," tab and click ",(0,n.kt)("em",{parentName:"li"},"Add Container")),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("em",{parentName:"li"},"Template"),' drop-down, select one of your previous templates\n(prefixed with "my-") and then click ',(0,n.kt)("em",{parentName:"li"},"Apply")),(0,n.kt)("li",{parentName:"ol"},"Repeat the previous step for each of your containers"),(0,n.kt)("li",{parentName:"ol"},"You will ",(0,n.kt)("strong",{parentName:"li"},"not")," need to reconfigure your apps after this is\ncomplete")),(0,n.kt)("h4",{id:"my-vms-get-an-error-of-cannot-get-interface-mtu"},'My VMs get an error of "cannot get interface MTU',".",'.."'),(0,n.kt)("p",null,"A change that was made in version 6.2 eliminated the customization of\nthe bridge name used for virtual machines. Users that have a custom\nbridge name set will need to fix their VMs to point to the new default\nof 'br0'. To fix this, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the VMs tab."),(0,n.kt)("li",{parentName:"ol"},"Edit each VM and turn on ",(0,n.kt)("em",{parentName:"li"},"Advanced View")," mode."),(0,n.kt)("li",{parentName:"ol"},"Locate the network section and from the dropdown, select br0 and\nthen click apply."),(0,n.kt)("li",{parentName:"ol"},"Once all VMs are set to use the 'br0' bridge, go to the ",(0,n.kt)("em",{parentName:"li"},"Settings"),"\n-",">"," ",(0,n.kt)("em",{parentName:"li"},"VM Manager")," page, turn on ",(0,n.kt)("em",{parentName:"li"},"Advanced View"),", and set the default\nnetwork bridge on this page to also be 'br0' and click apply.")),(0,n.kt)("h4",{id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly"},"VNC access to my VMs is not working or performing poorly"),(0,n.kt)("p",null,"VMs created in earlier releases of Unraid Server OS may be set to use an\noutdated graphics device driver for VNC access. To fix this, perform the\nfollowing steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For each affected VM, go to the VMs tab, click the VM's icon, and\nselect the Edit option"),(0,n.kt)("li",{parentName:"ol"},'Turn on "Advanced View" in the top right of the Edit VM page'),(0,n.kt)("li",{parentName:"ol"},"If you are using VNC for the primary graphics card, adjust the VNC\nVideo Driver field to QXL"),(0,n.kt)("li",{parentName:"ol"},"Click Apply")),(0,n.kt)("h4",{id:"my-ovmf-vm-doesnt-boot-correctly"},"My OVMF VM doesn't boot correctly"),(0,n.kt)("p",null,"OVMF-based virtual machines that were created under version 6.1 or\nearlier will most likely require a one-time process to boot up properly\non the new release. If you are presented with an EFI shell instead of\nyour OS booting appropriately, type the following commands in order to\nboot your VM:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"fs0:"),(0,n.kt)("li",{parentName:"ol"},"cd efi/boot"),(0,n.kt)("li",{parentName:"ol"},"bootx64.efi")),(0,n.kt)("p",null,"If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/"},"forums")," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs that were previously created using Unraid 6.1 or earlier."),(0,n.kt)("h4",{id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error"},'Trying to start my VM gives a "Invalid Machine Type" error'),(0,n.kt)("p",null,'If you receive this error, simply edit your VM in the webGui, and\nwithout making any changes, click "Apply". This will update the VM\'s\nmachine type to the latest version and your VM should start without the\nerror.'),(0,n.kt)("h4",{id:"poor-vm-performance-after-upgrading"},"Poor VM performance after upgrading"),(0,n.kt)("p",null,'Some users have replied that their VMs perform poorly after updating to\n6.3. One possible solution could be to update the machine type version\nfor your VM. To do this, edit your VM from the VMs tab in the webGui.\nTurn on "Advanced View" in the top right and look for the ',(0,n.kt)("strong",{parentName:"p"},"Machine"),"\noption. Toggle the version to the latest revision and then hit apply (do\nnot change the prefix selected, only the version; e.g. if previously you\nwere on i440fx-2.5, try changing to i440fx-2.7, but don't change to\nQ35-2.7). Try starting your VM and see if performance improves."),(0,n.kt)("h4",{id:"poor-vnc-performance-after-upgrading"},"Poor VNC performance after upgrading"),(0,n.kt)("p",null,"If your VM has poor VNC performance after upgrading, please try changing\nthe VNC Video Driver. You can do this from the Edit VM page. It is\nrecommended to first try Cirrus, then vmvga (if available for your VM\ntype)."),(0,n.kt)("h2",{id:"from-version-61-or-earlier"},"From version 6.1 or earlier"),(0,n.kt)("p",null,"Please ensure your system meets these requirements before upgrading:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Your server must be running version 6.1 or later."),(0,n.kt)("li",{parentName:"ol"},"Your USB flash device must have at least 128MB of free space."),(0,n.kt)("li",{parentName:"ol"},"If you have customized your network bridge name previously, it must\nbe changed back to the default of 'br0' before upgrading."),(0,n.kt)("li",{parentName:"ol"},"VMs set to use a custom-named bridge will also need to be edited to\npoint to the 'br0' prior to the upgrade.")),(0,n.kt)("h2",{id:"checking-your-existing-version"},"Checking your existing version"),(0,n.kt)("p",null,"To check which version of Unraid is presently running on your server,\nsimply log into the web interface and look in the top right corner of\nthe browser."),(0,n.kt)("h2",{id:"checking-for-sufficient-free-space"},"Checking for sufficient free space"),(0,n.kt)("p",null,"The upgrade process will check for this automatically, but if you wish\nto be proactive, you can review your boot device's free space under the\nFlash section on the ",(0,n.kt)("em",{parentName:"p"},"Main")," tab of the web interface."),(0,n.kt)("h2",{id:"checking-your-network-bridge-name"},"Checking your network bridge name"),(0,n.kt)("p",null,"To see if you have a customized network bridge, open the ",(0,n.kt)("em",{parentName:"p"},"Settings")," -",">","\n",(0,n.kt)("em",{parentName:"p"},"Network Settings")," page of the web interface. If the bridge name is\nanything other than 'br0', change it back to 'br0' and click apply."),(0,n.kt)("h2",{id:"checking-your-vm-network-bridge-settings"},"Checking your VM network bridge settings"),(0,n.kt)("p",null,"If you found you have a custom-name for your network bridge and you also\nhave VMs on the system, it is very likely that these VMs are also set to\nuse the custom-named bridge and therefore they must be updated as well.\nTo do this, you will need to perform the following steps after you have\nrestored the default network bridge name:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Shutdown all VMs running on the system."),(0,n.kt)("li",{parentName:"ol"},"Edit each VM and turn on ",(0,n.kt)("em",{parentName:"li"},"Advanced View")," mode."),(0,n.kt)("li",{parentName:"ol"},"Locate the network section and from the dropdown, select br0 and\nthen click apply."),(0,n.kt)("li",{parentName:"ol"},"Once all VMs are set to use the 'br0' bridge, go to the ",(0,n.kt)("em",{parentName:"li"},"Settings"),"\n-",">"," ",(0,n.kt)("em",{parentName:"li"},"Network Settings")," page, turn on ",(0,n.kt)("em",{parentName:"li"},"Advanced View"),", and set the\ndefault network bridge on this page to also be 'br0' and click\napply.")),(0,n.kt)("p",null,"Your VMs should now be ready for use under the latest version."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Boot your server up and login to the web interface"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Plugins")," tab"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"Install Plugin")," tab"),(0,n.kt)("li",{parentName:"ol"},"Copy and paste the below link into the field and click install"),(0,n.kt)("li",{parentName:"ol"},"Once the upgrade plugin has been installed, reboot your server")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg"},"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg")),(0,n.kt)("h2",{id:"post-installation-procedures"},"Post installation procedures"),(0,n.kt)("p",null,"Once rebooted under version 6.2 for the first time, it may take several\nminutes (potentially longer) to start the array if Docker containers\nhave been previously configured. This is due to a one-time upgrade\nprocedure that will be applied to the containers in your Docker image\nfile. This procedure is automatically performed for you and does not\nhave to be manually enabled."),(0,n.kt)("p",null,"In addition, OVMF-based virtual machines that were created under version\n6.1 or earlier will most likely require a one-time process to boot up\nproperly under version 6.2. Upon booting an OVMF-based VM under 6.2, if\nyou are presented with an EFI shell instead of your OS booting\nappropriately, type the following commands in order to boot your VM:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fs0:"),(0,n.kt)("li",{parentName:"ul"},"cd efi/boot"),(0,n.kt)("li",{parentName:"ul"},"bootx64.efi")),(0,n.kt)("p",null,"If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/"},"forums")," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs under version 6.2 that were previously created using Unraid 6.1 or\nearlier."),(0,n.kt)("h2",{id:"from-version-5x-or-earlier"},"From version 5.x or earlier"),(0,n.kt)("p",null,"Please see ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=41061.0"},"this forum\npost")," for\ninformation on upgrading."))}c.isMDXComponent=!0}}]);