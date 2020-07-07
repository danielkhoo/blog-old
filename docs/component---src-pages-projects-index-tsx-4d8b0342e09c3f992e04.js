(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a(207),l=a(219),o=a.n(l),s=a(220),m=a.n(s),d=a(210),v=function(e){return r.a.createElement("div",{className:"overview-project-card"},r.a.createElement("a",{className:"overview-project-card-title",href:e.href},r.a.createElement("h4",null,e.title)),r.a.createElement("div",{className:"overview-project-card-shields"},e.shield&&r.a.createElement("img",{src:e.shield})),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"overview-project-card-content"},r.a.createElement("div",{className:"tags"},r.a.createElement("span",{className:"language-color tag-icon",style:{backgroundColor:e.dotColor}}),r.a.createElement("span",null,e.tags[0])),r.a.createElement("div",{className:"tags"},r.a.createElement("span",{className:"tag-icon"},r.a.createElement(d.a,{width:12,height:16,SVG:m.a})),r.a.createElement("span",null,e.tags[1])),r.a.createElement("div",{className:"tags"},r.a.createElement("span",{className:"tag-icon"},r.a.createElement(d.a,{width:14,height:16,SVG:o.a})),r.a.createElement("span",null,e.year))))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Projects"}),r.a.createElement("div",{className:"overview-projects"},r.a.createElement(v,{title:"nric",href:"https://www.npmjs.com/package/nric",description:"An npm library for generating and validating Singapore NRIC numbers",dotColor:"#f1e05a",tags:["Javascript","NPM"],year:"2019",shield:"https://img.shields.io/npm/dw/nric?label=npm%20downloads&style=flat-square"}),r.a.createElement(v,{title:"Graduate Employment Visualisation",href:"https://danielkhoo.github.io/ges",description:"A visualisation of employmenet and salary data by school and degree from GES 2018",dotColor:"rgb(97, 218, 251)",tags:["React","d3"],year:"2019"}),r.a.createElement(v,{title:"TRUN",href:"https://www.youtube.com/watch?v=ZVCYgMpj1ks",description:"A TRON-inspired GPS-based Multiplayer Android Game. Like Snake but players have to run for real",dotColor:"#689f38",tags:["Android","Firebase"],year:"2018"})))}},203:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(66),i=a.n(c);a.d(t,"a",function(){return i.a});a(203),a(9).default.enqueue,r.a.createContext({})},205:function(e,t,a){"use strict";a(132),a(133);var n,r=a(0),c=a(204);a(194);!function(e){e.Blog="blog",e.Projects="projects",e.About="about"}(n||(n={}));t.a=function(e){var t=Object(r.useState)(n.Blog),a=t[0],i=t[1];return Object(r.useEffect)(function(){window.location.pathname.includes(n.Projects)&&i(n.Projects),window.location.pathname.includes(n.About)&&i(n.About)},[]),r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement("div",{className:"header-content"},r.createElement("nav",null,r.createElement(c.a,{to:"/"},r.createElement("div",{className:"navitem "+(a==n.Blog?"active":"")},"Blog")),r.createElement(c.a,{to:"/projects"},r.createElement("div",{className:"navitem "+(a==n.Projects?"active":"")},"Projects")),r.createElement(c.a,{to:"/about"},r.createElement("div",{className:"navitem "+(a==n.About?"active":"")},"About"))))),r.createElement("div",{className:"container"},r.createElement("div",{className:"main-wrapper"},e.children)))}},206:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),c=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var n=a(208),r=a(0),c=a.n(r),i=a(209),l=a.n(i);function o(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,s=t||o.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:o.siteMetadata.title+" - %s",meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r),link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"}]})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel",description:"A blog, portfolio and digital garage for all my work, side-projects, procrastinations from work.",author:"@danieljkhoo"}}}}},210:function(e,t,a){"use strict";var n=a(0),r=(a(195),function(e){return n.createElement("span",{className:"icon icon-wrapper"},n.createElement(e.SVG,{style:{width:e.width,height:e.height}}))});a.d(t,"a",function(){return r})},219:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{style:{fill:"#586069"},fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"}))}r.defaultProps={"aria-label":"calendar",className:"mr-1",width:"14",height:"16",viewBox:"0 0 14 16",role:"img"},e.exports=r,r.default=r},220:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{fill:"#586069",fillRule:"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}))}r.defaultProps={"aria-label":"git-repo",width:"12",height:"16",viewBox:"0 0 12 16",role:"img"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-4d8b0342e09c3f992e04.js.map