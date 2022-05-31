"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6103],{8166:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6010),l=n(833),i=n(5281),o=n(9058),c=n(1860),s=n(3117),u=n(5999),m=n(2244);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(m.Z,(0,s.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(m.Z,(0,s.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var v=n(541);function f(e){var t,n=e.content,r=n.assets,i=n.metadata,o=i.title,c=i.description,s=i.date,u=i.tags,m=i.authors,d=i.frontMatter,v=d.keywords,f=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:o,description:c,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,s=l.prevItem,u=l.frontMatter,m=u.hide_table_of_contents,f=u.toc_min_heading_level,g=u.toc_max_heading_level;return a.createElement(o.Z,{sidebar:n,toc:!m&&t.toc&&t.toc.length>0?a.createElement(v.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:g}):void 0},a.createElement(c.Z,{frontMatter:u,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(i||s)&&a.createElement(d,{nextItem:i,prevItem:s}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(f,e),a.createElement(g,e))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3117),r=n(102),l=n(7294),i=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var g=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,s.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,H=null!=b?b:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:H});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:H}}),[m,f,N,H])),l.createElement(g,(0,a.Z)({toc:k,className:i,linkClassName:m},E))}},541:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(102),l=n(7294),i=n(6010),o=n(3743),c="tableOfContents_jeP5",s=n(4996),u=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,u);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(d,null),l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function d(){return l.createElement("a",{href:"https://gitee.com/dotnetchina",target:"_blank",style:{display:"block",position:"relative"},title:"\u4e86\u89e3 dotNET China \u7ec4\u7ec7"},l.createElement("img",{src:(0,s.Z)("img/chinadotnet.png"),style:{display:"block",width:"90%",margin:"0 auto"}}))}}}]);