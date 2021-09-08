"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5374],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9769:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),i={title:"\u5b89\u88c5"},o=void 0,c={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"NPM",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/zh-hans/docs/introduction/installation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/installation.md",version:"current",frontMatter:{title:"\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh-hans/docs/introduction/core-concepts"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh-hans/docs/introduction/getting-started"}},p=[{value:"NPM",id:"npm",children:[{value:"Bundler",id:"bundler",children:[]},{value:"\u652f\u6301 ES5",id:"\u652f\u6301-es5",children:[]}]},{value:"CDN",id:"cdn",children:[]},{value:"ESLint",id:"eslint",children:[]},{value:"Nightly Builds",id:"nightly-builds",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"npm"},"NPM"),(0,l.kt)("p",null,"Recoil \u7684 package \u5df2\u4e0a\u4f20\u81f3 ",(0,l.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),"\u3002\u6b32\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff0c\u8bf7\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),(0,l.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),(0,l.kt)("h3",{id:"bundler"},"Bundler"),(0,l.kt)("p",null,"\u901a\u8fc7 npm \u5b89\u88c5\u7684 Recoil \u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup")," \u7b49\u6a21\u5757 bunlder \u53ef\u4ee5\u8f7b\u677e\u5339\u914d\u3002"),(0,l.kt)("h3",{id:"\u652f\u6301-es5"},"\u652f\u6301 ES5"),(0,l.kt)("p",null,"Recoil \u7684\u6784\u5efa\u6ca1\u6709\u8f6c\u8bd1\u6210 ES5\uff0c\u6211\u4eec\u4e5f\u4e0d\u652f\u6301\u5728 ES5 \u4e0b\u4f7f\u7528 Recoil\u3002\u5982\u679c\u4f60\u9700\u8981\u517c\u5bb9\u4e0d\u652f\u6301 ES6 \u7684\u6d4f\u89c8\u5668\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," \u7f16\u8bd1\u4f60\u7684\u4ee3\u7801\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env")," \u7684 preset\u3002\u7136\u800c\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f60\u8fd9\u6837\u505a\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4e3b\u8981\u662f\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/javascript-environment-requirements.html"},"\u50cf React \u8fd9\u7c7b\u7684\u5e93"),"\uff0cRecoil \u4f9d\u8d56\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Set")," \u7c7b\u578b\u4ee5\u53ca\u5176\u4ed6 ES6 \u7684\u7279\u6027\u3002\u4f7f\u7528 polyfill \u6765\u6a21\u62df\u8fd9\u4e9b\u7279\u6027\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u5927\u5927\u964d\u4f4e\u3002"),(0,l.kt)("h2",{id:"cdn"},"CDN"),(0,l.kt)("p",null,"\u4ece 0.0.11 \u7248\u672c\u5f00\u59cb\uff0cRecoil \u63d0\u4f9b\u4e86 UMD \u6784\u5efa\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," \u4e2d\u4f7f\u7528\uff0c\u5e76\u5c06\u7b26\u53f7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Recoil")," \u66b4\u9732\u7ed9\u5168\u5c40\u7684\u547d\u540d\u7a7a\u95f4\u3002\u6211\u4eec\u5efa\u8bae\u94fe\u63a5\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u7248\u672c\u53f7\u548c\u6784\u5efa\uff0c\u4ee5\u907f\u514d\u8f83\u65b0\u7248\u672c\u5e26\u6765\u7684\u7834\u574f\u6027\u66f4\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"><\/script>\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6d4f\u89c8 ",(0,l.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/recoil"},"jsdelivr")," CDN \u4e0a\u6240\u6709\u7684 Recoil \u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"eslint"},"ESLint"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks"),"\u3002\u4f8b\u5982\uff0c\u5728 eslint \u4e2d\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// previous .eslint config\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}\n')),(0,l.kt)("p",null,"\u5efa\u8bae\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,l.kt)("inlineCode",{parentName:"a"},"'useRecoilCallback'"))," \u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"additionalHooks")," \u5217\u8868\u4e2d\u3002\u8fd9\u6837\u505a\uff0c\u5f53\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()")," \u7684\u4f9d\u8d56\u5173\u7cfb\u51fa\u9519\u65f6\uff0cESLint \u4f1a\u53d1\u51fa\u8b66\u544a\uff0c\u5e76\u5efa\u8bae\u8fdb\u884c\u4fee\u590d\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"additionalHooks")," \u7684\u683c\u5f0f\u662f\u4e00\u4e2a regex \u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// modified .eslint config\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": [\n      "warn", {\n        "additionalHooks": "useRecoilCallback"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"nightly-builds"},"Nightly Builds"),(0,l.kt)("p",null,"\u6211\u4eec\u6bcf\u5929\u4f1a\u57fa\u4e8e\u5f53\u524d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\u6784\u5efa\u4e00\u6b21 package\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"nightly")," \u5206\u652f\u5e76\u53d1\u5e03\u5230 Github \u4e0a\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," \u6765\u4f7f\u7528\u6b64\u5206\u652f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,l.kt)("p",null," \u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,l.kt)("p",null," \u6216\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u9879\uff0c\u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  "recoil": "facebookexperimental/Recoil.git#nightly",\n')))}u.isMDXComponent=!0}}]);