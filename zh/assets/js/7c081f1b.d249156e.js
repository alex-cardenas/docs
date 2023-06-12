"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=i,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r="Tools",s={unversionedId:"unraid-os/manual/tools",id:"unraid-os/manual/tools",title:"Tools",description:"THIS SECTION IS STILL UNDER CONSTRUCTION",source:"@site/docs/unraid-os/manual/tools.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/tools",permalink:"/zh/unraid-os/manual/tools",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/tools.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Security",permalink:"/zh/unraid-os/manual/security"},next:{title:"Upgrading Unraid",permalink:"/zh/unraid-os/manual/upgrade-instructions"}},l={},d=[{value:"Unraid Standard Tools",id:"unraid-standard-tools",level:2},{value:"Unraid OS",id:"unraid-os",level:3},{value:"Diagnostics",id:"diagnostics",level:4},{value:"Hardware Profile",id:"hardware-profile",level:4},{value:"New Config",id:"new-config",level:4},{value:"New Permissions",id:"new-permissions",level:4},{value:"Archived Notifications",id:"archived-notifications",level:4},{value:"Processes",id:"processes",level:4},{value:"System Devices",id:"system-devices",level:4},{value:"System Log",id:"system-log",level:4},{value:"webGUI",id:"webgui",level:3},{value:"Language",id:"language",level:4},{value:"Page Map",id:"page-map",level:4},{value:"Vars",id:"vars",level:4},{value:"About",id:"about",level:3},{value:"Credits",id:"credits",level:4},{value:"EULA",id:"eula",level:4},{value:"Registration",id:"registration",level:4},{value:"Update OS",id:"update-os",level:4},{value:"3rd Party Tools",id:"3rd-party-tools",level:2},{value:"Unraid OS",id:"unraid-os-1",level:3},{value:"Config File Editor",id:"config-file-editor",level:4},{value:"Docker Safe New Perms",id:"docker-safe-new-perms",level:4},{value:"About",id:"about-1",level:3},{value:"Update Assistant",id:"update-assistant",level:4}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tools"},"Tools"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"THIS SECTION IS STILL UNDER CONSTRUCTION")),(0,i.kt)("p",null,"The Tools section of the Unraid GUI is used to access a number of Tools\nto help with managing an Unraid server on a day-to-day basis. The list\nof tools available is often extended by 3rd party supplied plugins."),(0,i.kt)("h2",{id:"unraid-standard-tools"},"Unraid Standard Tools"),(0,i.kt)("p",null,"This section covers tools that are supplied as standard with an Unraid\ninstallation. They are grouped into a number of sections for ease of\nselection."),(0,i.kt)("h3",{id:"unraid-os"},"Unraid OS"),(0,i.kt)("h4",{id:"diagnostics"},"Diagnostics"),(0,i.kt)("h4",{id:"hardware-profile"},"Hardware Profile"),(0,i.kt)("h4",{id:"new-config"},"New Config"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,i.kt)("em",{parentName:"p"},"This tool is not part of the standard process for\nrecovering from a disk failure. In most cases since the procedure\nnormally invalidates parity it will have the opposite effect and stop\nyou being able to recover the contents of a failed disk intact.")),(0,i.kt)("p",null,"This option is used to put the array back into a state where disk drives\ncan be assigned as wanted and then parity rebuilt to match the new\nassignments. It exploits the fact that Unraid can recognise drives that\nhave previously been used by Unraid and will leave their contents\nuntouched (as long as the drive is not assigned as a parity drive)."),(0,i.kt)("p",null,"When using this option you are given the option to preserve previous\nassignments at various levels. It is not important which you use but\nusing one can minimise the amount of re-selecting drives to specific\nslots (and thus reduce the chance of you making an error) by selecting\none of them. After you have run this option you can then return to the\nMain tab and make any further adjustments you want. The assignments then\nget committed when you start the array."),(0,i.kt)("p",null,"The basic process is therefore:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the New Config tool from the Tools tab in the Unraid GUI"),(0,i.kt)("li",{parentName:"ul"},"Click the Check box that says you want to proceed to use this tool."),(0,i.kt)("li",{parentName:"ul"},"Set the level of assignments you initially want to keep. In most\ncases selecting the option to keep all assignments is the best\nchoice as it puts you in a state where you just need make any\ndesired changes from your current assignments.")),(0,i.kt)("p",null,"Press the ",(0,i.kt)("strong",{parentName:"p"},"Apply")," button to run the tool. After doing this there is no\nobvious feedback that anything has been done."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return to the Main tab and change the drive assignments to how you\nnow want them to be set. This can involve adding new drives,\nremoving drives or changing the slots to which drives are assigned."),(0,i.kt)("li",{parentName:"ul"},"Make sure you have not accidentally assigned a drive containing data\nto a parity slot as if you do so when you start the array the\ncontents will be destroyed."),(0,i.kt)("li",{parentName:"ul"},"There is a checkbox next to the Start button to allow you to say\nthat parity is already valid. You should ",(0,i.kt)("strong",{parentName:"li"},"not")," check this box\nunless advised to do so by a knowledgeable Unraid user as in most\ncases making changes to the drive assignments will invalidate\nparity. There are special cases where using this option can be\nsensible after something has gone wrong with the array but only the\nmore experienced Unraid users will know what these are."),(0,i.kt)("li",{parentName:"ul"},"There is also a checkbox option to start the array in Maintenance\nmode. You probably only need this if you have been advised to use it\nas part of a non-standard data recovery action."),(0,i.kt)("li",{parentName:"ul"},"Press the Start button to commit the new drive assignments."),(0,i.kt)("li",{parentName:"ul"},"If you have encrypted file systems the array will not start at this\npoint, but instead change to allow you to enter your encryption\ndetails. Enter these and press Start again to start the array."),(0,i.kt)("li",{parentName:"ul"},"If you were starting in normal mode (i.e. not Maintenance mode) then\nthe drives will now be mounted."),(0,i.kt)("li",{parentName:"ul"},"Unraid will now start building new parity based on this current set\nof assignments.")),(0,i.kt)("h4",{id:"new-permissions"},"New Permissions"),(0,i.kt)("h4",{id:"archived-notifications"},"Archived Notifications"),(0,i.kt)("h4",{id:"processes"},"Processes"),(0,i.kt)("h4",{id:"system-devices"},"System Devices"),(0,i.kt)("h4",{id:"system-log"},"System Log"),(0,i.kt)("h3",{id:"webgui"},"webGUI"),(0,i.kt)("h4",{id:"language"},"Language"),(0,i.kt)("h4",{id:"page-map"},"Page Map"),(0,i.kt)("h4",{id:"vars"},"Vars"),(0,i.kt)("h3",{id:"about"},"About"),(0,i.kt)("h4",{id:"credits"},"Credits"),(0,i.kt)("h4",{id:"eula"},"EULA"),(0,i.kt)("h4",{id:"registration"},"Registration"),(0,i.kt)("h4",{id:"update-os"},"Update OS"),(0,i.kt)("h2",{id:"3rd-party-tools"},"3rd Party Tools"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DISCLAMER"),": The tools listed here are not provided or supported by\nLimetech. There is always a risk that installing one /f these tools can\ncause system instability (although tis is unlikely for the more widely\nused ones)"),(0,i.kt)("p",null,"The unRaid community is very active and has contributed a wide variety\nof additional tools to add extra functionality to an unRaid server. The\nfollowing section covers some of the more commonly installed 3rd party\ntools. It is by no means an exhaustive list but will give an indication\nof the breadth of the tools available"),(0,i.kt)("p",null,"These 3rd party tools would normally be installed by using Community\nApplications (the Apps tab). Such tools will each have a support thread\nin the Plugins Support section of the unRaid GUI and users should use\nthis thread to raise queries, concerns, or suggestions for improvement."),(0,i.kt)("h3",{id:"unraid-os-1"},"Unraid OS"),(0,i.kt)("h4",{id:"config-file-editor"},"Config File Editor"),(0,i.kt)("p",null,"CA Config Editor is a simple file editor for advanced users that will\nallow you to edit within your browser any of the Unraid configuration\nfiles (or any file on your server - useful for easily editing\napplication's appdata config files without utilizing the command\nprompt)"),(0,i.kt)("h4",{id:"docker-safe-new-perms"},"Docker Safe New Perms"),(0,i.kt)("p",null,"This is part of the Fix Common Problems plugin."),(0,i.kt)("p",null,"It differs from the standard Unraid New Permissions tool in that it will\nnever change permissions on the appdata folder/share that is normally\nused to store working files for docker containers."),(0,i.kt)("h3",{id:"about-1"},"About"),(0,i.kt)("h4",{id:"update-assistant"},"Update Assistant"))}h.isMDXComponent=!0}}]);