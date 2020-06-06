(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(1),r=(n(0),n(157));const a={title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},i={id:"api-reference/core/RecoilRoot",title:"<RecoilRoot ...props />",description:"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots.",source:"@site/docs/api-reference/core/RecoilRoot.md",permalink:"/docs/api-reference/core/RecoilRoot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/RecoilRoot.md",sidebar_label:"<RecoilRoot />",sidebar:"someSidebar",previous:{title:"State Persistence",permalink:"/docs/guides/persistence"},next:{title:"atom(options)",permalink:"/docs/api-reference/core/atom"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots."),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"props"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initializeState?"),": ",Object(r.b)("inlineCode",{parentName:"li"},"({set, setUnvalidatedAtomValues}) => void"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A function that will be called when RecoilStore is first rendered which can set initial values for atoms. It is provided with two arguments:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set"),": ",Object(r.b)("inlineCode",{parentName:"li"},"<T>(RecoilValue<T>, T) => void"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Sets the initial value of a single atom to the provided value."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setUnvalidatedAtomValues"),": ",Object(r.b)("inlineCode",{parentName:"li"},"(Map<string, mixed>) => void"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Sets the initial value for any number of atoms whose keys are the keys in the provided map. As with ",Object(r.b)("inlineCode",{parentName:"li"},"useSetUnvalidatedAtomValues"),", the validator for each atom will be called when it is next read, and setting an atom without a configured validator will result in an exception.")))))))))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {RecoilRoot} from 'recoil';\n\nfunction AppRoot() {\n  return (\n    <RecoilRoot>\n      <ComponentThatUsesRecoil />\n    </RecoilRoot>\n  );\n}\n")))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);