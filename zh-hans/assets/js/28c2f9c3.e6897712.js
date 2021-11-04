"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6024],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,d=p["".concat(i,".").concat(h)]||p[h]||f[h]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7129:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return f}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),c={title:"useRecoilRefresher_UNSTABLE()",sidebar_label:"useRecoilRefresher()"},s=void 0,i={unversionedId:"api-reference/core/useRecoilRefresher",id:"api-reference/core/useRecoilRefresher",isDocsHomePage:!1,title:"useRecoilRefresher_UNSTABLE()",description:"The useRecoilRefresher_UNSTABLE() hook returns a callback which can be called with a selector to clear any caches associated with it.  If a selector makes any async requests this would cause it to re-evaluate and issue a new request.  This is useful, for example, if you wish to refresh with newer data or re-try after an error.  (See Asynchronous Data Queries Guide)",source:"@site/docs/api-reference/core/useRecoilRefresher.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilRefresher",permalink:"/zh-hans/docs/api-reference/core/useRecoilRefresher",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilRefresher.md",version:"current",frontMatter:{title:"useRecoilRefresher_UNSTABLE()",sidebar_label:"useRecoilRefresher()"},sidebar:"docs",previous:{title:"useGetRecoilValueInfo()",permalink:"/zh-hans/docs/api-reference/core/useGetRecoilValueInfo"},next:{title:"isRecoilValue()",permalink:"/zh-hans/docs/api-reference/core/isRecoilValue"}},l=[{value:"Example",id:"example",children:[]}],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useRecoilRefresher_UNSTABLE()")," hook returns a callback which can be called with a selector to clear any caches associated with it.  If a selector makes any async requests this would cause it to re-evaluate and issue a new request.  This is useful, for example, if you wish to refresh with newer data or re-try after an error.  (See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries#query-refresh"},"Asynchronous Data Queries Guide"),")"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type Refresher = (RecoilValue) => void;\n\nfunction useRecoilRefresher_UNSTABLE(): Refresher\n")),(0,a.kt)("p",null,'It is currently a no-op to "refresh" an atom, it will retain its current state.  Selectors will have their caches cleared.  Because wrapper selectors are often used as abstractions, refreshing a selector will also recursively refresh the caches of all selectors that it depends on.'),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: () => fetch(myQueryURL),\n});\n\nfunction MyComponent() {\n  const data = useRecoilValue(myQuery);\n  const refresh = useRecoilRefreshed_UNSTABLE();\n\n  return (\n    <div>\n      Data: {data}\n      <button onClick={() => refresh(myQuery)}>Refresh</button>\n    </div>\n  );\n}\n")))}f.isMDXComponent=!0}}]);