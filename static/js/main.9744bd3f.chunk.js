(this["webpackJsonpreact-profile"]=this["webpackJsonpreact-profile"]||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=(a(48),a(22)),s=a(6),l=(a(49),a(50),a(68)),d=a(61),j=a(62),h=a(65),b=a.p+"static/media/me.67a6e289.jpg",A=a(1);var u=function(e){return Object(n.useEffect)((function(){document.getElementById("portrait").setAttribute("style","height:auto;width:100;max-width:100px;margin-right:15px")})),Object(A.jsx)(l.a,{fixed:"top",id:"headerNav",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(A.jsxs)(d.a,{fluid:!0,children:[Object(A.jsx)(j.a,{id:"portrait",alt:"Dev-Image",src:b,rounded:!0}),Object(A.jsx)(l.a.Brand,{className:"myName",children:"Hamzah Ullah"}),Object(A.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(A.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(A.jsx)(h.a,{className:"me-auto",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(A.jsx)(h.a.Link,{href:"#_"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t},t)}))})})]})})},m=a(63),p=a(39),f=a(70),O=a(67),x=a(69);var g=function(e){var t=e.portfolioData;return e.images.forEach((function(e){var a=e.split("/")[4].split(".")[0];t.forEach((function(t){t.name===a&&(t.img=e)}))})),Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(d.a,{children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(p.a,{s:12,m:4,lg:4,children:Object(A.jsx)(f.a,{style:{position:"fixed"},variant:"flush",children:Object(A.jsx)(O.a,{defaultActiveKey:"4",children:Object(A.jsxs)(O.a.Item,{eventKey:"4",children:[Object(A.jsx)(O.a.Header,{children:"Table of Contents"}),Object(A.jsx)(O.a.Body,{children:t.length>0&&t.map((function(e){return Object(A.jsx)(f.a.Item,{action:!0,href:"#"+e.name,children:e.name},e.name)}))})]})})})}),Object(A.jsx)(p.a,{s:12,m:8,lg:8,className:"col-container",children:t.length>0&&t.map((function(e){return Object(A.jsxs)(x.a,{id:e.name,className:"project-card",style:{width:"80%"},children:[Object(A.jsx)(x.a.Header,{children:Object(A.jsx)(x.a.Title,{children:e.name})}),Object(A.jsx)(x.a.Body,{children:Object(A.jsx)(x.a.Img,{className:"image",variant:"middle",src:e.img})}),Object(A.jsx)(x.a.Footer,{children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(p.a,{children:Object(A.jsx)(x.a.Link,{href:e.repo,children:"Repository"})}),Object(A.jsx)(p.a,{children:Object(A.jsx)(x.a.Link,{href:e.deployment,children:"Website"})})]})})]},"#"+e.name)}))})]})})})},v=a(23),w=a(66),y=a(64);var S=function(){var e=Object(v.b)("xyylldzy"),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1];if(a.succeeded)return Object(A.jsx)("p",{children:"We Received your Message!"});function j(e){if("email"===e.target.name){var t=(n=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase()));console.log(t),l(t?"":"Email is Invalid")}else e.target.value.length?l(null):l("".concat((a=e.target.name).charAt(0).toUpperCase()+a.slice(1)," is required"));var a,n}var h="Invalid"===o.split(" ")[2]?Object(A.jsxs)(w.a.Label,{className:"form-labels error",children:[" ","* "+o," "]}):"";return Object(A.jsx)(d.a,{children:Object(A.jsx)(w.a,{onSubmit:r,children:Object(A.jsxs)(w.a.Group,{children:[Object(A.jsx)(w.a.Label,{className:"form-labels",htmlFor:"name",children:"Full Name"}),Object(A.jsx)(w.a.Control,{placeholder:"Name"===o.split(" ")[0]?o:null,id:"name",type:"name",name:"name",onBlur:j}),Object(A.jsx)(v.a,{prefix:"name",field:"name",errors:a.errors}),Object(A.jsxs)(w.a.Label,{className:"form-labels",htmlFor:"email",children:["Email Address",h]}),Object(A.jsx)(w.a.Control,{placeholder:"Email"===o.split(" ")[0]?o:null,id:"email",type:"email",name:"email",onBlur:j}),Object(A.jsx)(v.a,{prefix:"Email",field:"email",errors:a.errors}),Object(A.jsx)(w.a.Label,{htmlFor:"message",children:"Message"}),Object(A.jsx)(w.a.Control,{as:"textarea",placeholder:"Message"===o.split(" ")[0]?o:null,id:"message",name:"message",onBlur:j}),Object(A.jsx)(v.a,{prefix:"Message",field:"message",errors:a.errors}),Object(A.jsx)(y.a,{type:"submit",disabled:a.submitting,children:"Submit"})]})})})},L=a.p+"static/media/m2.f39ee154.jpg";var k=function(e){return Object(A.jsx)(d.a,{id:"aboutContainer",children:Object(A.jsx)(x.a,{id:"aboutCard",children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(p.a,{md:3,children:Object(A.jsx)(j.a,{id:"aboutImage",src:L,roundedCircle:!0})}),Object(A.jsxs)(p.a,{id:"aboutText",md:9,children:[Object(A.jsx)(x.a.Title,{id:"aboutTitle",children:"My name is Hamzah Ullah, and I love to code!"}),Object(A.jsxs)(x.a.Body,{children:[Object(A.jsx)("p",{children:" I am currently pursuing a Bachelor's Degree in Computer Engineering from the University of Central Florida with an emphasis on machine learning and robotics. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease."}),Object(A.jsx)("p",{id:"mission",children:' "Life is about the constant pursuit of knowledge, if you stop learning, you stop growing."'}),Object(A.jsx)("p",{children:"  Currently, I am looking for new career opportunities my current job position cannot provide."})]})]})]})})})};var W=function(e){var t=e.resume;return t+="#zoom=65",Object(A.jsx)(d.a,{id:"resume-container",children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(p.a,{children:Object(A.jsx)(O.a,{defaultActiveKey:"3",children:Object(A.jsxs)(O.a.Item,{eventKey:"3",children:[Object(A.jsx)(O.a.Header,{children:"Technical Skills"}),Object(A.jsx)(O.a.Body,{children:Object(A.jsxs)(O.a,{flush:!0,children:[Object(A.jsxs)(O.a.Item,{eventKey:"0",children:[Object(A.jsx)(O.a.Header,{children:"Web Development"}),Object(A.jsx)(O.a.Body,{children:Object(A.jsxs)(f.a,{variant:"flush",children:[Object(A.jsx)(f.a.Item,{children:"HTML5 and the Document Object Model"}),Object(A.jsx)(f.a.Item,{children:"CSS and the Box Model"}),Object(A.jsx)(f.a.Item,{children:"JQuery"}),Object(A.jsx)(f.a.Item,{children:"Materialize"}),Object(A.jsx)(f.a.Item,{children:"Bootstrap/React-Bootstrap"}),Object(A.jsx)(f.a.Item,{children:"SQL - mySQL"}),Object(A.jsx)(f.a.Item,{children:"MongoDB "}),Object(A.jsx)(f.a.Item,{children:"Express"}),Object(A.jsx)(f.a.Item,{children:"React"}),Object(A.jsx)(f.a.Item,{children:"NodeJS "}),Object(A.jsx)(f.a.Item,{children:"Visual Studio Code "}),Object(A.jsx)(f.a.Item,{children:"Partials and Layouts with Handlebars "}),Object(A.jsx)(f.a.Item,{children:"API Development and Integration"}),Object(A.jsx)(f.a.Item,{children:"Database Structure and Routing"}),Object(A.jsx)(f.a.Item,{children:"MVC - Model View Controller Model"}),Object(A.jsx)(f.a.Item,{children:"Progressive Web Applications"}),Object(A.jsx)(f.a.Item,{children:"Site Optimization - Compression, Service Workers and IndexedDb "}),Object(A.jsx)(f.a.Item,{children:"Version Control using Git CLI and Github "})]})})]}),Object(A.jsxs)(O.a.Item,{eventKey:"1",children:[Object(A.jsx)(O.a.Header,{children:"Languages"}),Object(A.jsx)(O.a.Body,{children:Object(A.jsxs)(f.a,{variant:"flush",children:[Object(A.jsx)(f.a.Item,{children:"Javascript - Full Stack Web Development"}),Object(A.jsx)(f.a.Item,{children:"Python - Machine Learning, Computer Vision, Mathematical and Data Analysis"}),Object(A.jsx)(f.a.Item,{children:"C, Java - Algorithms"}),Object(A.jsx)(f.a.Item,{children:"C# - Game Development in Unity"}),Object(A.jsx)(f.a.Item,{children:"Verilog and Assembly with TI-MSP Board Family"})]})})]})]})})]})})}),Object(A.jsx)(p.a,{children:Object(A.jsx)("iframe",{id:"resume-iframe",src:t})})]})})},C=a(31);var I=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){return c(Object(A.jsx)("svg",{height:"34",width:"25",children:Object(A.jsx)("path",{d:"M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z",fill:"#03EF62",fillRule:"evenodd"})}))}),[]),Object(A.jsx)(l.a,{id:"footerNav",fixed:"bottom",expand:"lg",bg:"dark",variant:"dark",children:Object(A.jsxs)(d.a,{className:"footer-container",children:[Object(A.jsx)(h.a.Link,{href:"https://github.com/brobro10000",target:"_blank",children:Object(A.jsx)(C.a,{fill:"#6e5494",size:48})}),Object(A.jsx)(h.a.Link,{href:"https://www.linkedin.com/in/hamzahullah/",target:"_blank",children:Object(A.jsx)(C.b,{fill:"#0077b5",size:48})}),Object(A.jsx)(h.a.Link,{href:"https://www.datacamp.com/profile/hamzahullah",target:"_blank",children:r}),Object(A.jsx)(h.a.Link,{href:"https://www.troubleshoottinker.com",target:"_blank",children:Object(A.jsx)(C.c,{fill:"#ff0000",size:48})})]})})},z=a.p+"static/media/budget-analysis-and-visualizer.872d3480.png",V=a.p+"static/media/Crypto-Tycoon.f7a824d8.png",P=a.p+"static/media/potluck-chefs.03fb9fe9.png",T=a.p+"static/media/repository-of-thought.05a60190.png",N=a.p+"static/media/weather-dashboard.b03be8f4.png",E=a.p+"static/media/UllahHamzahResume.767805bf.pdf";var K=function(){var e,t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("About"),l=Object(s.a)(i,2),d=l[0],j=l[1],h=[z,V,P,"data:image/png;base64,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",T,N],b=indexedDB.open("apiCalls",1);function m(t){e.transaction(["api"],"readwrite").objectStore("api").add(t)}return b.onupgradeneeded=function(e){e.target.result.createObjectStore("api",{autoIncrement:!0})},b.onerror=function(e){console.log(e.target.errorCode)},console.log(d),Object(n.useEffect)((function(){b.onsuccess=function(t){var a=(e=t.target.result).transaction(["api"],"readwrite").objectStore("api").getAll();a.onsuccess=function(){return 6===a.result.length?c(a.result):fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=brobro10000").then((function(e){return e.text()})).then((function(e){var t=[];e.split('"repo":"').forEach((function(e){t.push(e.split('",')[0])})),delete t[0],t.filter((function(){return!0})).forEach((function(e){fetch("https://api.github.com/repos/brobro10000/".concat(e,"/deployments")).then((function(e){return e.json()})).then((function(t){return t.length<1&&"potluck-chefs"===e?(m({name:e,repo:"https://www.github.com/".concat(e),deployment:"https://potluck-chef.herokuapp.com/"}),c((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/".concat(e),deployment:"https://potluck-chef.herokuapp.com/"}])}))):"github-pages"===t[0].environment?"brobro10000.github.io"===e?(m({name:e,repo:"https://www.github.com/".concat(e),deployment:"https://www.brobro10000.github.io"}),c((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/".concat(e),deployment:"https://www.brobro10000.github.io"}])}))):(m({name:e,repo:"https://www.github.com/".concat(e),deployment:"https://www.brobro10000.github.io/".concat(e)}),c((function(t){return[].concat(Object(o.a)(t),[{name:e,repo:"https://www.github.com/".concat(e),deployment:"https://www.brobro10000.github.io/".concat(e)}])}))):"Heroku"===t[0].description?(m({name:e,repo:"https://www.github.com/".concat(e),deployment:t[0].payload.web_url}),c((function(a){return[].concat(Object(o.a)(a),[{name:e,repo:"https://www.github.com/".concat(e),deployment:t[0].payload.web_url}])}))):void 0}))}))}))}}}),[]),Object(A.jsxs)("div",{children:[Object(A.jsx)("header",{children:Object(A.jsx)(u,{currentPage:d,handlePageChange:j})}),Object(A.jsx)("main",{children:function(){switch(d){case"Contact":return Object(A.jsx)(S,{});case"Portfolio":return r.length>0?Object(A.jsx)(g,{portfolioData:r,images:h}):Object(A.jsx)(A.Fragment,{});case"Resume":return Object(A.jsx)(W,{resume:E});default:return Object(A.jsx)(k,{})}}()}),Object(A.jsx)("footer",{children:Object(A.jsx)(I,{})})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(K,{})}),document.getElementById("root")),M(),function(e){if("serviceWorker"in navigator){if(new URL("/react-profile",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-profile","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.9744bd3f.chunk.js.map