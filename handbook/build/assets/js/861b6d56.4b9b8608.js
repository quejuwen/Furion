"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7555],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8150:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=(n(4996),["components"]),p={slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},l=void 0,c={permalink:"/furion/blog/httpcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog/2021-02-01-httpcontext.mdx",title:"1. HttpContext \u5e94\u7528",description:"",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:"httpcontext",permalink:"/furion/blog/tags/httpcontext"}],readingTime:1.545,truncated:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},prevItem:{title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/furion/blog/fileupload-download"}},u={authorsImageUrls:[void 0]},s=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",level:2},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",level:2},{value:"\u5728 <code>ControllerBase</code> \u6d3e\u751f\u7c7b\u4e2d",id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",level:3},{value:"\u901a\u8fc7\u6ce8\u5165 <code>IHttpContextAccessor</code>",id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor",level:3},{value:"\u901a\u8fc7 <code>App.HttpContext</code>",id:"\u901a\u8fc7-apphttpcontext",level:3},{value:"<code>HttpContext</code> \u62d3\u5c55\u65b9\u6cd5",id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",level:3},{value:"\u8bbe\u7f6e <code>Swagger</code> \u81ea\u52a8\u6388\u6743",id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",level:3},{value:"\u9000\u51fa <code>Swagger</code> \u6388\u6743",id:"\u9000\u51fa-swagger-\u6388\u6743",level:3},{value:"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740",id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",level:3},{value:"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740",id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",level:3}],d={toc:s};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"httpcontext-\u91cd\u5927\u8c03\u6574"},"HttpContext \u91cd\u5927\u8c03\u6574"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET")," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u65b9\u5f0f\u83b7\u53d6\u3002"),(0,a.kt)("h2",{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"},"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"h3"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5c5e\u6027\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor"},"\u901a\u8fc7\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"h3"},"IHttpContextAccessor")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u5bf9\u8c61\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5}",showLineNumbers:!0,"":!0,"{3,5}":!0},"public class AppService\n{\n    public AppService(IHttpContextAccessor httpContextAccessor)\n    {\n        var httpContext = httpContextAccessor.HttpContext;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7-apphttpcontext"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"App.HttpContext")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"App")," \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.HttpContext")," \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5"},(0,a.kt)("inlineCode",{parentName:"h2"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"},"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var attribute = httpContext.GetMetadata<SomeAttribute>();\n")),(0,a.kt)("h3",{id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743"},"\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u81ea\u52a8\u6388\u6743"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'httpContext.SigninToSwagger("\u4f60\u7684token");\n')),(0,a.kt)("h3",{id:"\u9000\u51fa-swagger-\u6388\u6743"},"\u9000\u51fa ",(0,a.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u6388\u6743"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"httpContext.SignoutToSwagger();\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740"},"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var ipv4 = httpContext.GetLocalIpAddressToIPv4();\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740"},"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var ipv4 = httpContext.GetRemoteIpAddressToIPv4();\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\n")))}m.isMDXComponent=!0}}]);