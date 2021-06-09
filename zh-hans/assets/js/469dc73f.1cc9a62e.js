(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8243],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1052:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={title:"class Loadable",sidebar_label:"Loadable"},l={unversionedId:"api-reference/core/Loadable",id:"api-reference/core/Loadable",isDocsHomePage:!1,title:"class Loadable",description:"Loadable \u5bf9\u8c61\u4ee3\u8868 Recoil atom \u6216 selector \u7684\u5f53\u524d\u72b6\u6001\u3002\u6b64\u72b6\u6001\u53ef\u80fd\u6709\u4e00\u4e2a\u53ef\u7528\u503c\uff0c\u4e5f\u53ef\u80fd\u5904\u4e8e\u9519\u8bef\u72b6\u6001\uff0c\u6216\u8005\u662f\u4ecd\u5904\u4e8e pending \u72b6\u6001\u7684\u5f02\u6b65\u89e3\u6790\u3002\u4e00\u4e2a Loadable \u6709\u5982\u4e0b\u63a5\u53e3\uff1a",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/Loadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/Loadable",permalink:"/zh-hans/docs/api-reference/core/Loadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/Loadable.md",version:"current",sidebar_label:"Loadable",frontMatter:{title:"class Loadable",sidebar_label:"Loadable"},sidebar:"docs",previous:{title:"selector(options)",permalink:"/zh-hans/docs/api-reference/core/selector"},next:{title:"useRecoilState(state)",permalink:"/zh-hans/docs/api-reference/core/useRecoilState"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],s={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Loadable")," \u5bf9\u8c61\u4ee3\u8868 Recoil ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atom")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector")," \u7684\u5f53\u524d\u72b6\u6001\u3002\u6b64\u72b6\u6001\u53ef\u80fd\u6709\u4e00\u4e2a\u53ef\u7528\u503c\uff0c\u4e5f\u53ef\u80fd\u5904\u4e8e\u9519\u8bef\u72b6\u6001\uff0c\u6216\u8005\u662f\u4ecd\u5904\u4e8e pending \u72b6\u6001\u7684\u5f02\u6b65\u89e3\u6790\u3002\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable")," \u6709\u5982\u4e0b\u63a5\u53e3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),"\uff1aatom \u6216 selector \u7684\u5f53\u524d\u72b6\u6001\u3002\u53ef\u80fd\u7684\u503c\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasValue'"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"'hasError'")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"li"},"'loading'"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contents"),"\uff1a\u6b64 ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),"\u8868\u793a\u7684\u503c\u3002\u5982\u679c state \u7684\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"hasValue"),"\uff0c\u5176\u503c\u4e3a\u5b9e\u9645\u503c\uff1b\u5982\u679c state \u7684\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"hasError"),"\uff0c\u5176\u503c\u4e3a\u88ab\u629b\u51fa ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," \u5bf9\u8c61\uff1b\u5982\u679c state \u7684\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),"\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"toPromise()")," \u5f97\u5230\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),"\u3002")),(0,o.kt)("p",null,"Loadable \u8fd8\u5305\u542b\u7528\u4e8e\u8bbf\u95ee\u5f53\u524d\u72b6\u6001\u7684 helper \u65b9\u6cd5\u3002",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8fd9\u4e9b API \u5e76\u4e0d\u7a33\u5b9a"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValue()")," - \u8bbf\u95ee\u4e0e React Suspense \u548c Recoil selectors \u8bed\u4e49\u5339\u914d\u7684\u503c\u7684\u65b9\u6cd5\u3002\u5982\u679c state \u6709\u503c\uff0c\u90a3\u4e48\u5b83\u4f1a\u8fd4\u56de\u8be5\u503c\uff1b\u5982\u679c\u5b83\u4e3a\u9519\u8bef\u4fe1\u606f\uff0c\u90a3\u4e48\u5b83\u4f1a\u629b\u51fa\u8be5\u9519\u8bef\uff1b\u5982\u679c\u5b83\u4ecd\u7136\u5904\u4e8e pending \u72b6\u6001\uff0c\u90a3\u4e48\u5b83\u4f1a\u6682\u505c\u6267\u884c\u6216\u8005\u6e32\u67d3\u4ee5\u4f20\u9012 pending \u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toPromise()"),"\uff1a\u8fd4\u56de\u503c\u4e3a selector \u6267\u884c\u5b8c\u6bd5\u540e\u6267\u884c\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),"\u3002\u5982\u679c\u6b64 selector \u662f\u540c\u6b65\u6267\u884c\u7684\u6216\u8005\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\uff0c\u5b83\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"valueMaybe()")," - \u5982\u679c\u6709\u503c\u5219\u8fd4\u56de\u8be5\u503c\uff0c\u5426\u5219\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"valueOrThrow()")," - \u5982\u679c\u6709\u503c\u5219\u8fd4\u56de\u8be5\u503c\uff0c\u5426\u5219\u629b\u51fa\u9519\u8bef\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"map()")," - \u63a5\u53d7\u4e00\u4e2a\u7528\u4ee5\u8f6c\u6362 Loadable \u503c\u7684\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709\u8f6c\u6362\u540e\u503c\u7684\u65b0 Loadable\u3002\u8f6c\u6362\u51fd\u6570\u53d6\u5f97\u8be5\u503c\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u65b0\u503c\uff0c\u5b83\u4e5f\u53ef\u4ee5\u629b\u51fa\u9519\u8bef\u6216\u8005 suspense\u3002")),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}p.isMDXComponent=!0}}]);