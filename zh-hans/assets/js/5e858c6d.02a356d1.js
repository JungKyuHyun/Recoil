(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5395],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return o},Z:function(){return i}});var r=a(2263),n=a(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,p=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(p)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+c:c}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4903:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=a(4996),p={title:"Recoil 0.0.11"},s={permalink:"/zh-hans/blog/2020/09/15/0.0.11-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-09-15-0.0.11-released.mdx",source:"@site/blog/2020-09-15-0.0.11-released.mdx",title:"Recoil 0.0.11",description:"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!",date:"2020-09-15T00:00:00.000Z",formattedDate:"2020\u5e749\u670814\u65e5",tags:[],readingTime:5.15,truncated:!0,prevItem:{title:"Recoil 0.1.1",permalink:"/zh-hans/blog/2020/10/30/0.1.1-released"},nextItem:{title:"Recoil 0.0.10",permalink:"/zh-hans/blog/2020/06/18/0.0.10-released"}},l=[{value:"Experimental Concurrent Mode Support",id:"experimental-concurrent-mode-support",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Types and Packaging",id:"types-and-packaging",children:[]},{value:"Support for Multiple React Roots",id:"support-for-multiple-react-roots",children:[]},{value:"Developer Tool APIs",id:"developer-tool-apis",children:[]},{value:"Other New APIs",id:"other-new-apis",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Future Work",id:"future-work",children:[]}],c={toc:l};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!"),(0,o.kt)("h2",{id:"experimental-concurrent-mode-support"},"Experimental Concurrent Mode Support"),(0,o.kt)("p",null,"Recoil now supports ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode")," when used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"experimental")," release of React. Please try this out and report any problems!"),(0,o.kt)("p",null,"Concurrent Mode, which enables smoother, more consistent user experiences, is the future of React. But up until now it's been incompatible with any kind of external state. This is because, in Concurrent Mode, renders can be spread out over time: React can pause the rendering of components, then later pick up where it left off, starting from the partial component tree that it already built:"),(0,o.kt)("img",{alt:"React pauses while rendering a tree of components. Some components are rendered before the pause while others are rendered after the pause.",src:(0,i.Z)("img/blog/2020-09-02-0.0.11-released/concurrent2.png")}),(0,o.kt)("p",null,"This presents a problem with external state. Since React now relinquishes control flow, anything could happen between the time when rendering starts and when it is completed. If the external state changes during this time, it will result in an inconsistent UI, as the earlier-rendered components will observe the older state, while the later-rendered components will observe the new state:"),(0,o.kt)("img",{alt:"If components depend on some external state, and that state changes while rendering is paused, then components rendered before the pause will observe the old state, while components rendered after the pause will observe the new state.",src:(0,i.Z)("img/blog/2020-09-02-0.0.11-released/concurrent3.png")}),(0,o.kt)("p",null,"This inconsistency could cause problems up to crashing the app."),(0,o.kt)("p",null,"Recoil now takes advantage of experimental APIs in React to handle this situation by restarting with a fresh tree when Recoil state has changed during a render. These APIs also make Recoil more efficient and remove the need to re-render components when they're first mounted."),(0,o.kt)("p",null,"Avoid using React experimental releases in production.  And, no matter what release of React or state management library you use, ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f"},"avoid bugs by always keeping side-effects in a ",(0,o.kt)("inlineCode",{parentName:"a"},"useEffect()")," hook, not during render"),"!  (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bvaughn"},"@bvaughn"),")"),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Several changes improve Recoil's performance. Previously, Recoil sometimes had to re-render components in certain circumstances: when reading from selectors that had unknown dependencies and when reading from atoms that had been initialized from external storage. Now, Recoil never has to perform a second render in response to reading an atom or selector. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,o.kt)("p",null,"Secondly, when used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"experimental")," release of React, Recoil no longer has to perform a second render when components are initially mounted. Recoil also no longer has to do any work to look up atom or selector values when it re-renders for reasons other than that atom or selector changing. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bvaughn"},"@bvaughn"),")."),(0,o.kt)("p",null,"The basic hooks such as ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilValue()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilState()")," have been optimized and are now about 8","\xd7"," faster. They now typically take less than 2","\xd7"," as long as ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," to execute. This improves the performance of apps that use a large number of atoms in many components. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,o.kt)("p",null,"Recoil recursively freezes the contents of atoms and selectors. This prevents bugs, but can be slow with large objects. It now happens only in the development build. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/361"},"#361")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),(0,o.kt)("p",null,"Recoil now avoids re-rendering components or re-evaluating selectors if you set an atom to its already-set value or reset it when it is already reset (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/399"},"#399"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/386"},"#386")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")."),(0,o.kt)("p",null,"Finally, this release also fixes a memory leak introduced in the previous release. If you've been experiencing poor performance in apps that frequently update atoms, this was likely the cause. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/471"},"#471")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,o.kt)("h2",{id:"types-and-packaging"},"Types and Packaging"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," are now exported with the package in addition to TypeScript. Flow is the type system used at Facebook and that Recoil is actually written in. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/338"},"#338"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/468"},"#468"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/541"},"#541")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Brianzchen"},"@Brianzchen"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Komalov"},"@Komalov"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),")"),(0,o.kt)("p",null,"TypeScript typing is also improved (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/492"},"#492"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/545"},"#545"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/548"},"#548"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/568"},"#568"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/575"},"#575")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SergeyVolynkin"},"@SergeyVolynkin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hachibeeDI"},"@hachibeeDI"),")."),(0,o.kt)("p",null,"In addition to NPM packages, we now provide ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/installation#cdn"},"Common JS and UMD modules via CDN")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/413"},"#413")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pocket7878"},"@pocket7878"),")."),(0,o.kt)("h2",{id:"support-for-multiple-react-roots"},"Support for Multiple React Roots"),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilBridgeAcrossReactRoots"},"share state between multiple React roots"),".  For example, if your app uses both React DOM and another renderer such as ThreeJS, you can now share Recoil state between them. As always when using multiple React roots, they may be momentarily out of sync. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/298"},"#298"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/516"},"#516")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/inlet"},"@inlet"),")"),(0,o.kt)("h2",{id:"developer-tool-apis"},"Developer Tool APIs"),(0,o.kt)("p",null,"This release includes ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#developer-tools"},"experimental APIs")," intended for developer tools. We are creating a set of developer tools internally and there are also multiple open-source projects underway. We are releasing these APIs to help validate their design. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),(0,o.kt)("h2",{id:"other-new-apis"},"Other New APIs"),(0,o.kt)("p",null,"You can now use a Promise as the default value of an atom. When read it will behave like an async selector. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("p",null,"This update has many fixes related to test infrastructure and differences between the open-source and Facebook-internal environments. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/368"},"#368"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/360"},"#360"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/362"},"#362"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/363"},"#363"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/392"},"#392"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/431"},"#431"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/402"},"#402"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/538"},"#538"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/539"},"#539"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/549"},"#549"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/561"},"#561"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/576"},"#576")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aaronabramov"},"@aaronabramov"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Komalov"},"@Komalov"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jacques-blom"},"@jacques-blom"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dsainati1"},"@dsainati1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/behnammodi"},"@behnammodi"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/habond"},"@habond"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benhalverson"},"@benhalverson"),")."),(0,o.kt)("p",null,"It also fixes bugs when using multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"s or pre-loading selectors in a snapshot (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/534"},"#534")," ","\u2014"," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davemccabe"},"@davemccabe"),")."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"This update may break certain tests that don't use the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-utils.html#act"},(0,o.kt)("inlineCode",{parentName:"a"},"act()")," function from ",(0,o.kt)("inlineCode",{parentName:"a"},"react-test-utils"))," to perform actions affecting React components. These tests sometimes worked anyway due to Recoil's extra renders. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"act()")," to fix any such tests."),(0,o.kt)("p",null,"Recoil will now throw an exception if a state updater function provided to Recoil causes another atom update within its own execution. State updater functions are supposed to be pure, so this has always been against the API contract. But it happened to work in some cases before, and now it doesn't. Code that does this can be changed to perform the effects with ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()"),"."),(0,o.kt)("h2",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"In a future release, Recoil will automatically free the memory used by atoms and selectors that are no longer used, and will perform better with larger numbers of atoms. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,o.kt)("p",null,"We are also working on APIs for synchronizing Recoil atoms with external data sources such as the URL, local storage, or a server. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),(0,o.kt)("p",null,"Developer tools are in development. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maxijb"},"@maxijb"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/habond"},"@habond"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),(0,o.kt)("p",null,"Thanks for reading this far and for using Recoil! More releases are coming soon."))}h.isMDXComponent=!0}}]);