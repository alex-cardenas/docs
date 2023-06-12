"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var A=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,A)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,A,n=function(e,t){if(null==e)return{};var a,A,n={},r=Object.keys(e);for(A=0;A<r.length;A++)a=r[A],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(A=0;A<r.length;A++)a=r[A],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=A.createContext({}),g=function(e){var t=A.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return A.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},c=A.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=g(a),c=n,m=s["".concat(o,".").concat(c)]||s[c]||p[c]||r;return a?A.createElement(m,i(i({ref:t},u),{},{components:a})):A.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var g=2;g<r;g++)i[g]=a[g];return A.createElement.apply(null,i)}return A.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var A=a(7462),n=(a(7294),a(3905));const r={sidebar_position:8},i="Multi-Language Support",l={unversionedId:"unraid-os/manual/multi-language",id:"unraid-os/manual/multi-language",title:"Multi-Language Support",description:"Introduction",source:"@site/docs/unraid-os/manual/multi-language.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/multi-language",permalink:"/zh/unraid-os/manual/multi-language",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/multi-language.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"unraidSidebar",previous:{title:"Community Applications",permalink:"/zh/unraid-os/manual/applications"},next:{title:"Troubleshooting",permalink:"/zh/unraid-os/manual/troubleshooting"}},o={},g=[{value:"Introduction",id:"introduction",level:2},{value:"A note about all translations",id:"a-note-about-all-translations",level:3},{value:"How to Load a Language pack",id:"how-to-load-a-language-pack",level:2},{value:"How to Activate a Language",id:"how-to-activate-a-language",level:2},{value:"How to Switch Back to English?",id:"how-to-switch-back-to-english",level:2},{value:"Developer Requirements for Multi-Language Support",id:"developer-requirements-for-multi-language-support",level:2},{value:"Multi-Language Forums",id:"multi-language-forums",level:2}],u={toc:g},s="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,A.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multi-language-support"},"Multi-Language Support"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://unraid.net/blog/unraid-6-9-multi-language-support"},"Unraid 6.9"),"\nintroduced the mechanism to ",(0,n.kt)("a",{parentName:"p",href:"https://unraid.net/blog/unraid-6-9-multi-language-support"},"support multiple\nlanguages")," in\nthe Unraid webGUI."),(0,n.kt)("p",null,"You can now download, install, and use the Unraid OS in the following\nlanguages:"),(0,n.kt)("p",null,"  ",(0,n.kt)("strong",{parentName:"p"},"Arabic, Chinese, Dutch, French, German, Portuguese, Polish and Spanish.")),(0,n.kt)("p",null,"There are also multiple other languages that are in the process of being translated. To check if your language is available, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/unraid?q=lang&type=all&language=&sort="},"see here.")),(0,n.kt)("h3",{id:"a-note-about-all-translations"},"A note about all translations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Translations are believed to be accurate to the best of Limetech's\nknowledge but the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/unraid/lang-en_US"},"English\ntext")," is always the go to\nreference point.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Translations are maintained in public\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/unraid"},"Github")," repositories. If you would like\nto inform us of errors and/or participate in translation\ncorrections, please write a post in the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/75-multi-language-section/"},"respective language forum\nsections"),"\nand tag ",(0,n.kt)("inlineCode",{parentName:"p"},"@SpencerJ"),". You can also submit Pull Requests in the respective public language repos.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you would like to see a new language added, please write a post\nin ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/77-general/"},"this forum thread"),"."))),(0,n.kt)("h2",{id:"how-to-load-a-language-pack"},"How to Load a Language pack"),(0,n.kt)("p",null,"Language packs are downloaded and installed via the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/38582-plug-in-community-applications/"},"Community\nApplications\nplugin"),".\nAs long as you are on Unraid 6.9.0 or later and ",(0,n.kt)("em",{parentName:"p"},"CA version 2020.05.12\nor later,")," look for a new category along the left hand side titled\n",(0,n.kt)("strong",{parentName:"p"},"Language"),". This will allow you to load the current language pack selected."),(0,n.kt)("p",null,"You can also search for languages via the Search bar in CA.\n",(0,n.kt)("img",{src:a(2034).Z,width:"2530",height:"1352"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," There is currently no automated mechanism for updating\nlanguage packs as users enhance or add to the translations held on\ngitHub. Unraid users who will need to periodically download the latest\nlanguage pack manually for new and improved translations."),(0,n.kt)("h2",{id:"how-to-activate-a-language"},"How to Activate a Language"),(0,n.kt)("p",null,"Via Community Applications -",">"," Language, click the download button on the\nlanguage pack you would like to download and use."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2851).Z,width:"88",height:"92"})),(0,n.kt)("h2",{id:"how-to-switch-back-to-english"},"How to Switch Back to English?"),(0,n.kt)("p",null,"To switch back to English, you can always click the Switch back toggle button located in the top right of the webGui."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9858).Z,width:"90",height:"88"})),(0,n.kt)("h2",{id:"developer-requirements-for-multi-language-support"},"Developer Requirements for Multi-Language Support"),(0,n.kt)("p",null,"It is necessary for plugin developers to take appropriate action within\ntheir plugins to enable them to utilize the multi-language support. The\ndetails on what is required are covered in the design guide ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.unraid.net/images/5/5e/Multi-language_Support_Design_Guide.pdf"},"here"),"."),(0,n.kt)("p",null,"Once plugin developers have made the necessary changes within their\nplugin to add the multi-language support mechanisms provided by Unraid\nthen they will typically produce the English translations master file\nfor their plugin and rely on Unraid community members to provide\nappropriate translation text for languages which they know how to speak."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": There is no requirement for any given plugin to support\nMulti-language. However it is a good idea for every plugin author to at\nleast consider supporting Multi-Language. Even if such support is not\nadded a plugin will still work as-is on 6.9+ with no changes required\nalbeit only with text in English (or whatever language the developer has\nembedded into the plugin)."),(0,n.kt)("h2",{id:"multi-language-forums"},"Multi-Language Forums"),(0,n.kt)("p",null,"In the Unraid forum, there are also many active ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/75-multi-language-section/"},"language-specific\nforums")," to\nget help or help others in your mother tongue."),(0,n.kt)("p",null,"Please see the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/75-multi-language-section/"},"Multi-Language\nSection")," to\ntake part in these growing communities!"))}p.isMDXComponent=!0},2851:(e,t,a)=>{a.d(t,{Z:()=>A});const A="data:image/png;base64,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"},2034:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/Screen_Shot_2021-06-24_at_12.38.44_PM-049ee9061061bfaacfedb1cba4629e2a.png"},9858:(e,t,a)=>{a.d(t,{Z:()=>A});const A="data:image/png;base64,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"}}]);