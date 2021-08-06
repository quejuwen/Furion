"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[519],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(k,l(l({ref:n},p),{},{components:t})):i.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3857:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=t(4996),o=["components"],s={id:"unittest",title:"36.1 \u5355\u5143\u6d4b\u8bd5",sidebar_label:"36.1 \u5355\u5143\u6d4b\u8bd5"},c=void 0,p={unversionedId:"unittest",id:"unittest",isDocsHomePage:!1,title:"36.1 \u5355\u5143\u6d4b\u8bd5",description:"\u3010\u5355\u5143\u6d4b\u8bd5\u89c6\u9891\u6559\u7a0b\u3011",source:"@site/docs/unittest.mdx",sourceDirName:".",slug:"/unittest",permalink:"/furion/docs/unittest",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/unittest.mdx",version:"current",lastUpdatedBy:"\u83ab\u51e1",lastUpdatedAt:1628228447,formattedLastUpdatedAt:"8/6/2021",frontMatter:{id:"unittest",title:"36.1 \u5355\u5143\u6d4b\u8bd5",sidebar_label:"36.1 \u5355\u5143\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"35.2 \u6301\u7eed\u90e8\u7f72\u96c6\u6210",permalink:"/furion/docs/devops"},next:{title:"36.2 \u8d1f\u8f7d\u538b\u6d4b",permalink:"/furion/docs/performance"}},u=[{value:"36.1.1 \u5173\u4e8e\u5355\u5143\u6d4b\u8bd5",id:"3611-\u5173\u4e8e\u5355\u5143\u6d4b\u8bd5",children:[]},{value:"36.1.2 \u5355\u5143\u6d4b\u8bd5\u597d\u5904",id:"3612-\u5355\u5143\u6d4b\u8bd5\u597d\u5904",children:[]},{value:"36.1.3 \u5355\u5143\u6d4b\u8bd5\u7c7b\u578b",id:"3613-\u5355\u5143\u6d4b\u8bd5\u7c7b\u578b",children:[]},{value:"36.1.4 \u4e3b\u6d41\u7684\u5355\u5143\u6d4b\u8bd5\u5e93",id:"3614-\u4e3b\u6d41\u7684\u5355\u5143\u6d4b\u8bd5\u5e93",children:[]},{value:"36.2 \u7b2c\u4e00\u4e2a\u4f8b\u5b50",id:"362-\u7b2c\u4e00\u4e2a\u4f8b\u5b50",children:[{value:"36.2.1 \u521b\u5efa <code>xUnit</code> \u5355\u5143\u6d4b\u8bd5\u9879\u76ee",id:"3621-\u521b\u5efa-xunit-\u5355\u5143\u6d4b\u8bd5\u9879\u76ee",children:[]},{value:"36.2.2 \u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u65b9\u6cd5",id:"3622-\u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u65b9\u6cd5",children:[]},{value:"36.2.3 \u8fd0\u884c\u6d4b\u8bd5",id:"3623-\u8fd0\u884c\u6d4b\u8bd5",children:[]},{value:"36.2.4 \u591a\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6d4b\u8bd5",id:"3624-\u591a\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6d4b\u8bd5",children:[]},{value:"36.2.5 \u91cd\u590d/\u56de\u5f52\u6d4b\u8bd5",id:"3625-\u91cd\u590d\u56de\u5f52\u6d4b\u8bd5",children:[]}]},{value:"36.3 \u96c6\u6210 <code>Furion</code> \u5f3a\u5927\u529f\u80fd",id:"363-\u96c6\u6210-furion-\u5f3a\u5927\u529f\u80fd",children:[{value:"36.3.1 \u5b89\u88c5 <code>Furion</code> \u5305",id:"3631-\u5b89\u88c5-furion-\u5305",children:[]},{value:"36.3.2 \u6dfb\u52a0 <code>Startup.cs</code> \u7c7b",id:"3632-\u6dfb\u52a0-startupcs-\u7c7b",children:[]},{value:"36.3.3 \u4f7f\u7528 <code>Furion</code> \u5b8c\u6574\u529f\u80fd",id:"3633-\u4f7f\u7528-furion-\u5b8c\u6574\u529f\u80fd",children:[]}]},{value:"36.4 \u5e26\u53c2\u6570\u7684\u6d4b\u8bd5\u65b9\u6cd5",id:"364-\u5e26\u53c2\u6570\u7684\u6d4b\u8bd5\u65b9\u6cd5",children:[]},{value:"36.5 \u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165",id:"365-\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165",children:[{value:"36.5.1 \u7f16\u5199\u4e00\u4e2a <code>ICalcService</code> \u63a5\u53e3\u53ca\u5b9e\u73b0\u7c7b",id:"3651-\u7f16\u5199\u4e00\u4e2a-icalcservice-\u63a5\u53e3\u53ca\u5b9e\u73b0\u7c7b",children:[]},{value:"36.5.2 \u5728\u6d4b\u8bd5\u7c7b\u4e2d\u8c03\u7528",id:"3652-\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u8c03\u7528",children:[]},{value:"36.5.3 \u5173\u4e8e\u975e\u6258\u7ba1\u670d\u52a1",id:"3653-\u5173\u4e8e\u975e\u6258\u7ba1\u670d\u52a1",children:[]}]},{value:"36.6 <code>Assert</code> \u65ad\u8a00",id:"366-assert-\u65ad\u8a00",children:[]},{value:"36.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"367-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u89c6\u9891\u6559\u7a0b")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u3010",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Qy4y1j7aZ/"},"\u5355\u5143\u6d4b\u8bd5\u89c6\u9891\u6559\u7a0b"),"\u3011"))),(0,r.kt)("h2",{id:"3611-\u5173\u4e8e\u5355\u5143\u6d4b\u8bd5"},"36.1.1 \u5173\u4e8e\u5355\u5143\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5f15\u7528\u81ea\u767e\u5ea6\u767e\u79d1\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5355\u5143\u6d4b\u8bd5\uff08unit testing\uff09\uff0c\u662f\u6307\u5bf9\u8f6f\u4ef6\u4e2d\u7684\u6700\u5c0f\u53ef\u6d4b\u8bd5\u5355\u5143\u8fdb\u884c\u68c0\u67e5\u548c\u9a8c\u8bc1\u3002\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u4e2d\u5355\u5143\u7684\u542b\u4e49\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u53bb\u5224\u5b9a\u5176\u5177\u4f53\u542b\u4e49\uff0c\u5982 C \u8bed\u8a00\u4e2d\u5355\u5143\u6307\u4e00\u4e2a\u51fd\u6570\uff0cJava \u91cc\u5355\u5143\u6307\u4e00\u4e2a\u7c7b\uff0c\u56fe\u5f62\u5316\u7684\u8f6f\u4ef6\u4e2d\u53ef\u4ee5\u6307\u4e00\u4e2a\u7a97\u53e3\u6216\u4e00\u4e2a\u83dc\u5355\u7b49\u3002\u603b\u7684\u6765\u8bf4\uff0c\u5355\u5143\u5c31\u662f\u4eba\u4e3a\u89c4\u5b9a\u7684\u6700\u5c0f\u7684\u88ab\u6d4b\u529f\u80fd\u6a21\u5757\u3002\u5355\u5143\u6d4b\u8bd5\u662f\u5728\u8f6f\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8981\u8fdb\u884c\u7684\u6700\u4f4e\u7ea7\u522b\u7684\u6d4b\u8bd5\u6d3b\u52a8\uff0c\u8f6f\u4ef6\u7684\u72ec\u7acb\u5355\u5143\u5c06\u5728\u4e0e\u7a0b\u5e8f\u7684\u5176\u4ed6\u90e8\u5206\u76f8\u9694\u79bb\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"3612-\u5355\u5143\u6d4b\u8bd5\u597d\u5904"},"36.1.2 \u5355\u5143\u6d4b\u8bd5\u597d\u5904"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6d88\u706d\u4f4e\u7ea7\u9519\u8bef"))),(0,r.kt)("p",null,"\u57fa\u672c\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u5728\u7cfb\u7edf\u6d4b\u8bd5\u4e4b\u524d\uff0c\u628a\u5927\u90e8\u5206\u6bd4\u8f83\u4f4e\u7ea7\u7684\u9519\u8bef\u90fd\u6d88\u706d\u6389\uff0c\u51cf\u5c11\u7cfb\u7edf\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u7684\u95ee\u9898\uff0c\u8fd9\u6837\u4e5f\u5c31\u51cf\u5c11\u4e86\u7cfb\u7edf\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u7684\u65f6\u95f4\u6210\u672c\u4e86\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u627e\u51fa\u6f5c\u5728\u7684 bug"))),(0,r.kt)("p",null,"\u67d0\u4e9b\u7c7b\u578b\u7684 bug\uff0c\u9760\u7cfb\u7edf\u6d4b\u8bd5\u662f\u5f88\u96be\u627e\u5230\u7684\u3002\u4f8b\u5982\u4e00\u4e9b\u4ee3\u7801\u5206\u652f\uff0c\u5e73\u65f6 99%\u7684\u573a\u666f\u57fa\u672c\u4e0a\u90fd\u8d70\u4e0d\u5230\uff0c\u4f46\u4e00\u65e6\u8d70\u5230\u4e86\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u524d\u6d4b\u8bd5\u597d\uff0c\u90a3\u4e48\u53ef\u80fd\u5c31\u662f\u4e00\u4e2a\u707e\u96be\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0a\u7ebf\u524d\u7684\u4fdd\u8bc1"))),(0,r.kt)("p",null,"\u52a0\u4e86\u65b0\u4ee3\u7801\uff0c\u4e0a\u7ebf\u524d\u8dd1\u4e00\u628a\u5355\u5143\u6d4b\u8bd5\uff0c\u90fd\u901a\u8fc7\uff0c\u8bf4\u660e\u4ee3\u7801\u53ef\u80fd\u6ca1\u6709\u5f71\u54cd\u5230\u4e4b\u524d\u7684\u903b\u8f91\uff0c\u8fd9\u6837\u4e0a\u7ebf\u4e5f\u6bd4\u8f83\u653e\u5fc3\u3002\u5982\u679c\u4e4b\u524d\u7684\u5355\u5143\u6d4b\u8bd5\u8dd1\u4e0d\u8fc7\uff0c\u90a3\u4e48\u5f88\u6709\u53ef\u80fd\u65b0\u7684\u4ee3\u7801\u6709\u6f5c\u5728\u7684\u95ee\u9898\uff0c\u8d76\u7d27\u4fee\u590d\u53bb\u5427\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u91cd\u6784\u4ee3\u7801\u7684\u673a\u4f1a"))),(0,r.kt)("p",null,"\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u987a\u624b\u628a\u4e00\u4e9b code \u91cd\u6784\u4e86\uff0c\u4e3a\u4ec0\u4e48\uff1f\u4e3e\u4f8b\uff0c\u4e00\u4e9b\u957f\u5f97\u975e\u5e38\u50cf\u7684\u4ee3\u7801\uff0c\u5982\u679c\u6bcf\u6b21\u90fd\u8981\u5199\u4e00\u5806\u6d4b\u8bd5\u4ee3\u7801\u53bb\u6d4b\u540c\u6837\u7684 code\uff0c\u4f60\u4f1a\u4e0d\u4f1a\u6293\u72c2\uff1f\u4e0d\u6d4b\u5427\uff0c\u8986\u76d6\u7387\u53c8\u4e0a\u4e0d\u53bb\uff0c\u4e8e\u662f\u6211\u5c31\u4f1a\u60f3\u65b9\u8bbe\u6cd5\u628a\u5f85\u6d4b\u8bd5\u7684 code \u6539\u5f97\u5c3d\u91cf\u7684\u7cbe\u7b80\uff0c\u91cd\u590d\u4ee3\u7801\u51cf\u5c11\uff0c\u8fd9\u6837\u8986\u76d6\u7387\u4e0a\u53bb\u4e86\uff0c\u6d4b\u8bd5\u4e5f\u597d\u6d4b\u4e86\uff0c\u4ee3\u7801\u4e5f\u7b80\u6d01\u4e86\u3002\u5982\u679c\u6ca1\u6709\u5355\u5143\u6d4b\u8bd5\u548c\u8986\u76d6\u7387\u7684\u8981\u6c42\u7684\u8bdd\uff0c\u5766\u767d\u8bf4\u53ef\u80fd\u4e00\u6765\u81ea\u5df1\u4e0d\u4f1a\u53d1\u73b0\u8fd9\u4e9b\u91cd\u590d\u7684 code\uff0c\u53e6\u4e00\u65b9\u9762\u5373\u4f7f\u53d1\u73b0\u4e86\uff0c\u53ef\u80fd\u4e5f\u6ca1\u6709\u592a\u5927\u7684\u52a8\u529b\u53bb\u6539\u8fdb\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u7531\u4e8e\u5355\u5143\u6d4b\u8bd5\u4e2d\uff0c\u4f60\u9700\u8981\u5c1d\u8bd5\u53bb\u8986\u76d6\u4e00\u4e9b\u5f02\u5e38\u5206\u652f\uff0c\u8fd9\u662f\u7cfb\u7edf\u6d4b\u8bd5\u5e38\u5e38\u8d70\u4e0d\u5230\u7684\u5730\u65b9\uff0c\u4e8e\u662f\u5c31\u4f1a\u5f15\u8d77\u4f60\u7684\u4e00\u4e9b\u601d\u8003\uff0c\u4f8b\u5982\u8fd9\u4e2a\u5f02\u5e38\u5206\u652f\u662f\u5426\u771f\u7684\u9700\u8981\uff1f\u662f\u5426\u771f\u7684\u4f1a\u53d1\u751f\uff1f\u5bf9\u4e8e\u4e00\u4e9b\u5b9e\u9645\u4e0a\u7edd\u5bf9\u4e0d\u4f1a\u51fa\u9519\u7684\u51fd\u6570\uff0c\u90a3\u4e48\u6211\u89c9\u5f97\u53ef\u80fd\u5f02\u5e38\u5206\u652f\u662f\u6ca1\u5fc5\u8981\u5b58\u5728\u7684\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u91cd\u65b0 review \u4ee3\u7801\u7684\u673a\u4f1a"))),(0,r.kt)("p",null,"\u5199 UT \u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u603b\u662f\u4f1a\u597d\u597d\u770b\u54ea\u4e9b\u4ee3\u7801\u6267\u884c\u5230\u4e86\uff0c\u54ea\u4e9b\u4ee3\u7801\u6ca1\u6709\u6267\u884c\u5230\uff0c\u8fd9\u5176\u5b9e\u4e5f\u662f\u4e00\u4e2a review \u81ea\u5df1\u4ee3\u7801\u7684\u673a\u4f1a\uff0c\u6709\u4e9b\u65f6\u5019\uff0c\u5e76\u4e0d\u662f UT \u672c\u8eab\u5e2e\u6211\u627e\u5230 bug\uff0c\u800c\u662f\u56de\u5934 review \u81ea\u5df1\u4ee3\u7801\u7684\u65f6\u5019\u53d1\u73b0\u7684\u3002"),(0,r.kt)("h2",{id:"3613-\u5355\u5143\u6d4b\u8bd5\u7c7b\u578b"},"36.1.3 \u5355\u5143\u6d4b\u8bd5\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e API \u63a5\u53e3\u6d4b\u8bd5\uff08\u767d\u76d2 + \u6d45\u5ea6\u9ed1\u76d2\u6d4b\u8bd5\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u9879\u76ee\u4ee3\u7801\u6d4b\u8bd5\uff08\u6df1\u5ea6\u9ed1\u76d2\u6d4b\u8bd5\uff09")),(0,r.kt)("h2",{id:"3614-\u4e3b\u6d41\u7684\u5355\u5143\u6d4b\u8bd5\u5e93"},"36.1.4 \u4e3b\u6d41\u7684\u5355\u5143\u6d4b\u8bd5\u5e93"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xUnit"),"\uff08",(0,r.kt)("strong",{parentName:"li"},"\u6700\u6d41\u884c\u7684\u5e93\uff0c\u63a8\u8350"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NUnit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MSTest"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u672c\u7ae0\u8282\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6846\u67b6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"xUnit")," \u5e93\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"362-\u7b2c\u4e00\u4e2a\u4f8b\u5b50"},"36.2 \u7b2c\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("h3",{id:"3621-\u521b\u5efa-xunit-\u5355\u5143\u6d4b\u8bd5\u9879\u76ee"},"36.2.1 \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"xUnit")," \u5355\u5143\u6d4b\u8bd5\u9879\u76ee"),(0,r.kt)("img",{src:(0,l.Z)("img/ut1.png")}),(0,r.kt)("h3",{id:"3622-\u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u65b9\u6cd5"},"36.2.2 \u7b2c\u4e00\u4e2a\u6d4b\u8bd5\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,7,10}","{1,7,10}":!0},"using Xunit;\n\nnamespace TestProject1\n{\n    public class UnitTest1\n    {\n        [Fact]\n        public void Test1()\n        {\n            Assert.Equal(2, 1 + 1);\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u5b9e\u9645\u4e0a\u662f\u901a\u8fc7\u666e\u901a\u7684\u7c7b\u7684\u65b9\u6cd5\u8fdb\u884c\u6a21\u5757\u529f\u80fd\u6d4b\u8bd5\uff0c\u5177\u4f53\u6d4b\u8bd5\u5219\u662f\u6807\u8bb0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"[Fact]")," \u7279\u6027\u7684\u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Assert")," \u7c7b\u63d0\u4f9b\u7684\u9759\u6001\u65b9\u6cd5\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u65ad\u8a00"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u65ad\u8a00")," \u6210\u529f\uff0c\u5219\u6d4b\u8bd5\u901a\u8fc7\uff0c\u5426\u5219\u6d4b\u8bd5\u4e0d\u901a\u8fc7\u3002"),(0,r.kt)("h3",{id:"3623-\u8fd0\u884c\u6d4b\u8bd5"},"36.2.3 \u8fd0\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5728\u5355\u5143\u6d4b\u8bd5\u9879\u76ee\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"\u53f3\u952e")," \u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u6d4b\u8bd5")," \u5e76\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u8d44\u6e90\u7ba1\u7406\u5668")," \u5373\u53ef\u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,r.kt)("img",{src:(0,l.Z)("img/ut2.png")}),(0,r.kt)("img",{src:(0,l.Z)("img/ut3.png")}),(0,r.kt)("h3",{id:"3624-\u591a\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6d4b\u8bd5"},"36.2.4 \u591a\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6d4b\u8bd5"),(0,r.kt)("img",{src:(0,l.Z)("img/ut4.png")}),(0,r.kt)("h3",{id:"3625-\u91cd\u590d\u56de\u5f52\u6d4b\u8bd5"},"36.2.5 \u91cd\u590d/\u56de\u5f52\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u540e\u7eed\u6dfb\u52a0\u66f4\u591a\u6d4b\u8bd5\u65b9\u6cd5\u53ea\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u8d44\u6e90\u7ba1\u7406\u5668")," \u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5728\u89c6\u56fe\u4e2d\u8fd0\u884c\u6240\u6709\u6d4b\u8bd5")," \u64ad\u653e\u6309\u94ae\u5373\u53ef\uff0c\u5982\u4e0b\u56fe"),(0,r.kt)("img",{src:(0,l.Z)("img/ut5.png")}),(0,r.kt)("h2",{id:"363-\u96c6\u6210-furion-\u5f3a\u5927\u529f\u80fd"},"36.3 \u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Furion")," \u5f3a\u5927\u529f\u80fd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u662f\u8de8\u5e73\u53f0\u3001\u8de8\u9879\u76ee\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u652f\u6301\u4efb\u610f\u9879\u76ee\u7c7b\u578b\uff0c\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u9879\u76ee\u3002"),(0,r.kt)("h3",{id:"3631-\u5b89\u88c5-furion-\u5305"},"36.3.1 \u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Furion")," \u5305"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuget")," \u7a0b\u5e8f\u5305\u63a7\u5236\u53f0\uff0c\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305"),(0,r.kt)("img",{src:(0,l.Z)("img/ut6.png")}),(0,r.kt)("h3",{id:"3632-\u6dfb\u52a0-startupcs-\u7c7b"},"36.3.2 \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Startup.cs")," \u7c7b"),(0,r.kt)("p",null,"\u5728\u5355\u5143\u6d4b\u8bd5\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7c7b\uff0c\u5e76\u5199\u4e0b\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8,16,18,21-26}","{8,16,18,21-26}":!0},'using Furion;\nusing Microsoft.Extensions.DependencyInjection;\nusing Xunit;\nusing Xunit.Abstractions;\nusing Xunit.Sdk;\n\n// \u914d\u7f6e\u542f\u52a8\u7c7b\u7c7b\u578b\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Startup \u7c7b\u5b8c\u6574\u9650\u5b9a\u540d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5f53\u524d\u9879\u76ee\u7a0b\u5e8f\u96c6\u540d\u79f0\n[assembly: TestFramework("TestProject1.Startup", "TestProject1")]\n\nnamespace TestProject1\n{\n    /// <summary>\n    /// \u5355\u5143\u6d4b\u8bd5\u542f\u52a8\u7c7b\n    /// </summary>\n    /// <remarks>\u5728\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528 Furion \u51e0\u4e4e\u6240\u6709\u529f\u80fd</remarks>\n    public sealed class Startup : XunitTestFramework\n    {\n        public Startup(IMessageSink messageSink) : base(messageSink)\n        {\n            // \u521d\u59cb\u5316 IServiceCollection \u5bf9\u8c61\n            var services = Inject.Create();\n\n            // \u5728\u8fd9\u91cc\u53ef\u4ee5\u548c .NET Core \u4e00\u6837\u6ce8\u518c\u670d\u52a1\u4e86\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\n\n            // \u6784\u5efa ServiceProvider \u5bf9\u8c61\n            services.Build();\n        }\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u4ee3\u7801\u662f\u5fc5\u987b\u7684\uff01\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TestFramework")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u7c7b\u5b8c\u5168\u9650\u5b9a\u540d\uff08\u542b\u547d\u540d\u7a7a\u95f4\uff09"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5355\u5143\u6d4b\u8bd5\u7a0b\u5e8f\u96c6\u540d\u79f0")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[assembly: TestFramework("TestProject1.Startup", "TestProject1")]\n')))),(0,r.kt)("h3",{id:"3633-\u4f7f\u7528-furion-\u5b8c\u6574\u529f\u80fd"},"36.3.3 \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Furion")," \u5b8c\u6574\u529f\u80fd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u662f\u8de8\u5e73\u53f0\u3001\u8de8\u9879\u76ee\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u4e0b\u9762\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u6f14\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8fdc\u7a0b\u8bf7\u6c42")," \u5e76\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.baidu.com")," \u6570\u636e\uff0c\u5e76\u6d4b\u8bd5\u662f\u5426\u8bf7\u6c42\u6210\u529f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"li"},"\u8fdc\u7a0b\u8bf7\u6c42\u670d\u52a1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{7}","{7}":!0},"public Startup(IMessageSink messageSink) : base(messageSink)\n{\n    // \u521d\u59cb\u5316 IServiceCollection \u5bf9\u8c61\n    var services = Inject.Create();\n\n    // \u5728\u8fd9\u91cc\u53ef\u4ee5\u548c .NET Core \u4e00\u6837\u6ce8\u518c\u670d\u52a1\u4e86\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\n    services.AddRemoteRequest();\n\n    // \u6784\u5efa ServiceProvider \u5bf9\u8c61\n    services.Build();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u5199\u6d4b\u8bd5\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Fact]\npublic async Task \u6d4b\u8bd5\u8bf7\u6c42\u767e\u5ea6()\n{\n    var rep = await "https://www.baidu.com".GetAsync();\n    Assert.True(rep.IsSuccessStatusCode);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c")),(0,r.kt)("img",{src:(0,l.Z)("img/ut7.png")}),(0,r.kt)("p",null,"\u5f88\u795e\u5947\u5427\uff01",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u652f\u6301\u4efb\u4f55\u9879\u76ee\u7c7b\u578b\uff0c\u4efb\u4f55\u5e73\u53f0\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"364-\u5e26\u53c2\u6570\u7684\u6d4b\u8bd5\u65b9\u6cd5"},"36.4 \u5e26\u53c2\u6570\u7684\u6d4b\u8bd5\u65b9\u6cd5"),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6d4b\u8bd5\u65b9\u6cd5\u90fd\u662f\u6ca1\u6709\u53c2\u6570\u7684\uff0c\u6709\u65f6\u5019\u9700\u8981\u540c\u4e00\u4e2a\u65b9\u6cd5\u8f93\u5165\u591a\u4e2a\u4e0d\u540c\u7684\u503c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"[Theory]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"[InlineData]")," \u7279\u6027\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\uff0c\u4e0b\u9762\u6d4b\u8bd5\u4e24\u4e2a\u6570\u7684\u548c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5947\u6570"),"\uff0c\u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1-4}","{1-4}":!0},"[Theory]\n[InlineData(1, 2)]\n[InlineData(3, 4)]\n[InlineData(5, 7)]\npublic void \u5e26\u53c2\u6570\u6d4b\u8bd5(int i, int j)\n{\n    Assert.NotEqual(0, (i + j) % 2);\n}\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\uff1a"),(0,r.kt)("img",{src:(0,l.Z)("img/ut8.png")}),(0,r.kt)("h2",{id:"365-\u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165"},"36.5 \u5982\u4f55\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165"),(0,r.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u6d4b\u8bd5\u67d0\u63a5\u53e3\uff0c\u6216\u8005\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f\u89e3\u6790\u670d\u52a1\u5e76\u8c03\u7528\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.GetService<>()")," \u9759\u6001\u7c7b\u65b9\u5f0f\u4e86\uff0c\u5982\uff1a"),(0,r.kt)("h3",{id:"3651-\u7f16\u5199\u4e00\u4e2a-icalcservice-\u63a5\u53e3\u53ca\u5b9e\u73b0\u7c7b"},"36.5.1 \u7f16\u5199\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"h3"},"ICalcService")," \u63a5\u53e3\u53ca\u5b9e\u73b0\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,8}","{3,8}":!0},"namespace TestProject1.Services\n{\n    public interface ICalcService\n    {\n        int Plus(int i, int j);\n    }\n\n    public class CalcService : ICalcService, ITransient\n    {\n        public int Plus(int i, int j)\n        {\n            return i + j;\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"3652-\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u8c03\u7528"},"36.5.2 \u5728\u6d4b\u8bd5\u7c7b\u4e2d\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9,16,22}","{9,16,22}":!0},"using Furion;\nusing TestProject1.Services;\nusing Xunit;\n\nnamespace TestProject1\n{\n    public class UnitTest1\n    {\n        private readonly ICalcService _calcService;\n\n        /// <summary>\n        /// \u8fd9\u91cc\u4e0d\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\uff0c\u800c\u662f\u91c7\u7528 App.GetService<> \u65b9\u5f0f\n        /// </summary>\n        public UnitTest1()\n        {\n            _calcService = App.GetService<ICalcService>();\n        }\n\n        [Fact]\n        public void \u6d4b\u8bd5\u4e24\u4e2a\u6570\u7684\u548c()\n        {\n            Assert.Equal(3, _calcService.Plus(1, 2));\n        }\n    }\n}\n")),(0,r.kt)("img",{src:(0,l.Z)("img/ut9.png")}),(0,r.kt)("h3",{id:"3653-\u5173\u4e8e\u975e\u6258\u7ba1\u670d\u52a1"},"36.5.3 \u5173\u4e8e\u975e\u6258\u7ba1\u670d\u52a1"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u975e\u6258\u7ba1\u8d44\u6e90")," \u6216\u9700\u8981\u624b\u52a8\u91ca\u653e\u7684\u5bf9\u8c61\u8fdb\u884c\u670d\u52a1\u89e3\u6790\u5e76\u6d4b\u8bd5\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u6784\u5efa\u4f5c\u7528\u57df\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"// \u652f\u6301\u5f02\u6b65\u65b9\u6cd5\u6d4b\u8bd5\n[Fact]\npublic async Task \u6d4b\u8bd5\u6570\u636e\u5e93()\n{\n    Scoped.Create((f,s) => {\n        var otherService = s.ServiceProvider.GetService<IOtherService>();\n        var repository = Db.GetRepository<Person>(s.ServiceProvider);\n\n        var isTrue = repository.Any(u => u.Id > 10);\n        Assert.True(isTrue);\n    });\n}\n")),(0,r.kt)("h2",{id:"366-assert-\u65ad\u8a00"},"36.6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Assert")," \u65ad\u8a00"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Assert")," \u662f\u5355\u5143\u6d4b\u8bd5\u5224\u5b9a\u6210\u529f\u7684\u4f9d\u636e\uff0c\u901a\u5e38\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u671f\u671b\u503c"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5b9e\u9645\u503c"),"\uff0c\u5bf9\u6bd4\u8fd9\u4e24\u4e2a\u503c\u662f\u5426\u4e00\u81f4\u5373\u53ef\u5224\u65ad\u6210\u529f\u4e0e\u5426\u3002\u8be6\u7ec6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Assert")," \u9759\u6001\u65b9\u6cd5\u53ef\u67e5\u9605\u5b98\u65b9\u5e93 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xunit/assert.xunit"},"Assert \u65b9\u6cd5")),(0,r.kt)("h2",{id:"367-\u53cd\u9988\u4e0e\u5efa\u8bae"},"36.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5355\u5143\u6d4b\u8bd5")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/core/testing/"},"\u5728 .NET \u4e2d\u6d4b\u8bd5")," \u7ae0\u8282\u3002"))))}m.isMDXComponent=!0}}]);