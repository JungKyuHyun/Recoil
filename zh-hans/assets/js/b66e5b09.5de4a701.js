(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1471],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?t.createElement(d,c(c({ref:r},s),{},{components:n})):t.createElement(d,c({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5756:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),c={title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},i={unversionedId:"api-reference/core/isRecoilValue",id:"api-reference/core/isRecoilValue",isDocsHomePage:!1,title:"isRecoilValue(value)",description:"\u5982\u679c value \u662f\u4e00\u4e2a atom \u6216\u8005 selector \u5219\u8fd4\u56de true\uff0c\u53cd\u4e4b\uff0c\u8fd4\u56de false\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/isRecoilValue",permalink:"/zh-hans/docs/api-reference/core/isRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",version:"current",sidebar_label:"isRecoilValue()",frontMatter:{title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},sidebar:"docs",previous:{title:"useGetRecoilValueInfo_UNSTABLE()",permalink:"/zh-hans/docs/api-reference/core/useGetRecoilValueInfo"},next:{title:"useRecoilCallback(callback, deps)",permalink:"/zh-hans/docs/api-reference/core/useRecoilCallback"}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:l};function s(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u662f\u4e00\u4e2a atom \u6216\u8005 selector \u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u53cd\u4e4b\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function isRecoilValue(value: mixed): boolean\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, isRecoilValue} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nconst strCounter = selector({\n  key: 'myCounterStr',\n  get: ({get}) => String(get(counter)),\n});\n\nisRecoilValue(counter); // true\nisRecoilValue(strCounter); // true\n\nisRecoilValue(5); // false\nisRecoilValue({}); // false\n")))}s.isMDXComponent=!0}}]);