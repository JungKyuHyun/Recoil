(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6506],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return g}});var o=n(2122),r=n(9756),a=n(7294),s=n(3905),i=n(9273),c=(0,i.cn)({key:"textState",default:""}),u=(0,i.nZ)({key:"charCountState",get:function(e){return(0,e.get)(c).length}});function l(){return a.createElement("div",null,a.createElement(p,null),a.createElement(d,null))}function d(){var e=(0,i.sJ)(u);return a.createElement(a.Fragment,null,"Character Count: ",e)}function p(){var e=(0,i.FV)(c),t=e[0],n=e[1];return a.createElement("div",null,a.createElement("input",{type:"text",value:t,onChange:function(e){n(e.target.value)}}),a.createElement("br",null),"Echo: ",t)}var f=function(){return a.createElement(i.Wh,null,a.createElement(l,null))},m={title:"Getting Started"},h={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Create React App",source:"@site/docs/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/docs/introduction/getting-started",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/getting-started.mdx",version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/introduction/installation"},next:{title:"Intro",permalink:"/docs/basic-tutorial/intro"}},g=[{value:"Create React App",id:"create-react-app",children:[]},{value:"Installation",id:"installation",children:[]},{value:"RecoilRoot",id:"recoilroot",children:[]},{value:"Atom",id:"atom",children:[]},{value:"Selector",id:"selector",children:[]},{value:"Demo",id:"demo",children:[]}],b={toc:g};function S(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-react-app"},"Create React App"),(0,s.kt)("p",null,"Recoil is a state management library for React, so you need to have React installed and running to use Recoil. The easiest and recommended way for bootstrapping a React application is to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app#creating-an-app"},"Create React App"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},(0,s.kt)("inlineCode",{parentName:"a"},"npx"))," is a package runner tool that comes with npm 5.2+ and higher, see ",(0,s.kt)("a",{parentName:"p",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"instructions for older npm versions"),".")),(0,s.kt)("p",null,"For more ways to install Create React App, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app#creating-an-app"},"official documentation"),"."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"The Recoil package lives in ",(0,s.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),". To install the latest stable version, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),(0,s.kt)("p",null,"Or if you're using ",(0,s.kt)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),(0,s.kt)("p",null,"Or if you're using ",(0,s.kt)("a",{href:"https://cloud.google.com/community/tutorials/install-bower-dependencies-on-google-app-engine",target:"_blank"},"bower"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bower install --save recoil\n")),(0,s.kt)("h2",{id:"recoilroot"},"RecoilRoot"),(0,s.kt)("p",null,"Components that use recoil state need ",(0,s.kt)("inlineCode",{parentName:"p"},"RecoilRoot")," to appear somewhere in the parent tree. A good place to put this is in your root component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {\n  RecoilRoot,\n  atom,\n  selector,\n  useRecoilState,\n  useRecoilValue,\n} from 'recoil';\n\nfunction App() {\n  return (\n    <RecoilRoot>\n      <CharacterCounter />\n    </RecoilRoot>\n  );\n}\n")),(0,s.kt)("p",null,"We'll implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"CharacterCounter")," component in the following section."),(0,s.kt)("h2",{id:"atom"},"Atom"),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"atom")," represents a piece of ",(0,s.kt)("strong",{parentName:"p"},"state"),". Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly ",(0,s.kt)("strong",{parentName:"p"},"subscribed")," to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const textState = atom({\n  key: 'textState', // unique ID (with respect to other atoms/selectors)\n  default: '', // default value (aka initial value)\n});\n")),(0,s.kt)("p",null,"Components that need to read from ",(0,s.kt)("em",{parentName:"p"},"and")," write to an atom should use ",(0,s.kt)("inlineCode",{parentName:"p"},"useRecoilState()")," as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'function CharacterCounter() {\n  return (\n    <div>\n      <TextInput />\n      <CharacterCount />\n    </div>\n  );\n}\n\nfunction TextInput() {\n  const [text, setText] = useRecoilState(textState);\n\n  const onChange = (event) => {\n    setText(event.target.value);\n  };\n\n  return (\n    <div>\n      <input type="text" value={text} onChange={onChange} />\n      <br />\n      Echo: {text}\n    </div>\n  );\n}\n')),(0,s.kt)("h2",{id:"selector"},"Selector"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"selector")," represents a piece of ",(0,s.kt)("strong",{parentName:"p"},"derived state"),". Derived state is a ",(0,s.kt)("strong",{parentName:"p"},"transformation")," of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"const charCountState = selector({\n  key: 'charCountState', // unique ID (with respect to other atoms/selectors)\n  get: ({get}) => {\n    const text = get(textState);\n\n    return text.length;\n  },\n});\n")),(0,s.kt)("p",null,"We can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"useRecoilValue()")," hook to read the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"charCountState"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"function CharacterCount() {\n  const count = useRecoilValue(charCountState);\n\n  return <>Character Count: {count}</>;\n}\n")),(0,s.kt)("h2",{id:"demo"},"Demo"),(0,s.kt)("p",null,"Below is the finished product:"),(0,s.kt)(f,{mdxType:"GettingStarted"}))}S.isMDXComponent=!0},9273:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=o(n(7294)),a=o(n(3935)),s={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}},i=function(e){return!!e&&"function"==typeof e.then},c=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!i(e)}(t)){Object.freeze(t);for(const n in t)t.hasOwnProperty(n)&&e(t[n]);Object.seal(t)}},u=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const l={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return i(t)?f(t):d(t)}catch(r){return i(r)?f(r.next((()=>e(this.contents)))):p(r)}if("loading"===this.state)return f(this.contents.then(e).catch((t=>{if(i(t))return t.then((()=>e(this.contents)));throw t})));throw new Error("Invalid Loadable state")}};function d(e){return Object.freeze({state:"hasValue",contents:e,...l})}function p(e){return Object.freeze({state:"hasError",contents:e,...l})}function f(e){return Object.freeze({state:"loading",contents:e,...l})}var m={loadableWithValue:d,loadableWithError:p,loadableWithPromise:f,loadableLoading:function(){return f(new Promise((()=>{})))},loadableAll:function(e){return e.every((e=>"hasValue"===e.state))?d(e.map((e=>e.contents))):e.some((e=>"hasError"===e.state))?p(u(e.find((e=>"hasError"===e.state)),"Invalid loadable passed to loadableAll").contents):f(Promise.all(e.map((e=>e.contents))))}};class h{constructor(e){var t;t=void 0,"key"in this?Object.defineProperty(this,"key",{value:t,enumerable:!0,configurable:!0,writable:!0}):this.key=t,this.key=e}}var g=h,b=class extends h{},S=class extends h{},y=Object.freeze({__proto__:null,AbstractRecoilValue:g,RecoilState:b,RecoilValueReadOnly:S});class v{}const w=new v;class R extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const k=new Map;class T extends Error{}var A={nodes:k,registerNode:function(e){return k.has(e.key)&&e.key,k.set(e.key,e),null==e.set?new y.RecoilValueReadOnly(e.key):new y.RecoilState(e.key)},getNode:function(e){const t=k.get(e);if(null==t)throw new T(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:T,DefaultValue:v,DEFAULT_VALUE:w,RecoilValueNotReady:R},E=function(e,t,n){return n()},V=function(e){return e};const{mapByDeletingFromMap:N,mapBySettingInMap:C,mapByUpdatingInMap:M,setByAddingToSet:x}=s,{getNode:_}=A,L=Object.freeze(new Map),O=Object.freeze(new Set);class B extends Error{}function U(e,t,n){return _(n).get(e,t)}let D=0;var j={getNodeLoadable:U,peekNodeLoadable:function(e,t,n){return U(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=_(n);if(null==r.set)throw new B("Attempt to set read-only RecoilValue: "+n);const[a,s]=r.set(e,t,o);return[a,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:N(e.atomValues,t),nonvalidatedAtoms:C(e.nonvalidatedAtoms,t,n),dirtyAtoms:x(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=D++;return[{...e,nodeToComponentSubscriptions:M(e.nodeToComponentSubscriptions,t,(e=>C(null!=e?e:L,o,["TODO debug name",n])))},function(e){return{...e,nodeToComponentSubscriptions:M(e.nodeToComponentSubscriptions,t,(e=>N(null!=e?e:L,o)))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let s=r.pop();s;s=r.pop()){var a;n.add(s),o.add(s);const t=null!==(a=e.nodeToNodeSubscriptions.get(s))&&void 0!==a?a:O;for(const e of t)o.has(e)||r.push(e)}return n}(r,t);for(const i of a){var s;(null!==(s=r.nodeToComponentSubscriptions.get(i))&&void 0!==s?s:[]).forEach((([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)}))}E("value became available, waking components",Array.from(t).join(", "),(()=>{const t=e.getState().suspendedComponentResolvers;t.forEach((e=>e())),t.clear()}))},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" \u2192 "));for(const s of r)e(t,[...n,s])}};const{getNodeLoadable:I,peekNodeLoadable:P,setNodeValue:z,setUnvalidatedAtomValue:F,subscribeComponentToNode:q}=j,{RecoilValue:W,AbstractRecoilValue:$,RecoilValueReadOnly:G,RecoilState:Z}=y;var X={AbstractRecoilValue:$,RecoilState:Z,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return P(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return E("get RecoilValue",t,(()=>e.replaceState(V((o=>{const[r,a]=I(e,o,t);return n=a,r}))))),n},setRecoilValue:function(e,{key:t},n){E("set RecoilValue",t,(()=>e.replaceState(V((o=>{const[r,a]=z(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r})))))},setUnvalidatedRecoilValue:function(e,{key:t},n){E("set unvalidated persisted atom",t,(()=>e.replaceState(V((o=>{const r=F(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r})))))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return E("subscribe component to RecoilValue",t,(()=>e.replaceState(V((e=>([o,r]=q(e,t,n),o)))))),{release:e=>e.replaceState(r)}},isRecoilValue:function(e){return e instanceof Z||e instanceof G}};const{mapByDeletingFromMap:J,mapBySettingInMap:K,setByAddingToSet:Y}=s,{loadableWithValue:H}=m,{DEFAULT_VALUE:Q,DefaultValue:ee,registerNode:te}=A,{isRecoilValue:ne}=X;var oe=function e(t){const{default:n,...o}=t;return ne(n)||i(n)?function(t){const n=e({...t,default:Q,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof ee?e:u(t.persistence_UNSTABLE).validator(e,Q)}});return selector({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof ee?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return te({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,u(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return[r,H(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,Q);return a instanceof ee?[{...r,nonvalidatedAtoms:J(r.nonvalidatedAtoms,t)},H(e.default)]:[{...r,atomValues:K(r.atomValues,t,H(a)),nonvalidatedAtoms:J(r.nonvalidatedAtoms,t)},H(a)]}return[r,H(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&c(r),[{...o,dirtyAtoms:Y(o.dirtyAtoms,t),atomValues:r instanceof ee?J(o.atomValues,t):K(o.atomValues,t,H(r)),nonvalidatedAtoms:J(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},re=function(e,t){t()};const{useContext:ae,useEffect:se,useRef:ie,useState:ce}=r,{fireNodeSubscriptions:ue,setNodeValue:le,setUnvalidatedAtomValue:de}=j;function pe(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const fe=Object.freeze({getState:pe,replaceState:pe,subscribeToTransactions:pe,addTransactionMetadata:pe,fireNodeSubscriptions:pe});function me(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const he=r.createContext({current:fe}),ge=()=>ae(he);function be(e){const t=ge(),[n,o]=ce([]);return e.setNotifyBatcherOfChange((()=>o({}))),se((()=>{re("Batcher",(()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach((e=>e(t.current,n))),e.queuedComponentCallbacks.forEach((e=>e(o))),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)}))})),null}let Se=0;var ye={useStoreRef:ge,RecoilRoot:function({initializeState:e,children:t}){let n;const o=ie(null),a={getState:()=>n.current,replaceState:e=>{const t=s.current.getState();me(t);const n=u(t.nextTree),r=e(n);r!==n&&(t.nextTree=r,u(o.current)())},subscribeToTransactions:e=>{const t=Se++;return s.current.getState().transactionSubscriptions.set(t,e),{release:()=>{s.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{me(s.current.getState());for(const t of Object.keys(e))u(s.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){ue(s.current,e,t)}},s=ie(a);return n=ie(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=le(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach(((e,t)=>{n.currentTree=de(n.currentTree,t,e)}))}}),n}(a,e)),r.createElement(he.Provider,{value:s},r.createElement(be,{setNotifyBatcherOfChange:function(e){o.current=e}}),t)}},ve=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},we=function(e,t){const n=new Map;return e.forEach(((e,o)=>{n.set(o,t(e,o))})),n};const{useCallback:Re,useEffect:ke,useMemo:Te,useRef:Ae,useState:Ee}=r,{setByAddingToSet:Ve}=s,{getNodeLoadable:Ne,peekNodeLoadable:Ce,setNodeValue:Me}=j,{DEFAULT_VALUE:xe,RecoilValueNotReady:_e,getNode:Le,nodes:Oe}=A,{useStoreRef:Be}=ye,{AbstractRecoilValue:Ue,getRecoilValueAsLoadable:De,setRecoilValue:je,setUnvalidatedRecoilValue:Ie,subscribeToRecoilValue:Pe}=X;function ze(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:we(e.nodeToNodeSubscriptions,(e=>new Set(e))),nodeToComponentSubscriptions:we(e.nodeToComponentSubscriptions,(e=>new Map(e)))}}function Fe(e,t,n,o){if("function"==typeof o){const r=Ce(e,t,n.key);if("loading"===r.state)throw new _e(n.key);if("hasError"===r.state)throw r.contents;return o(r.contents)}return o}function qe(){const e=Be(),[t,n]=Ee([]),o=Ae(new Set);o.current=new Set;const r=Ae(new Set),a=Ae(new Map),s=Re((t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))}),[e,a]);return ke((()=>{const t=e.current;function i(e,t){a.current.has(t)&&n([])}ve(o.current,r.current).forEach((e=>{if(a.current.has(e))return;const n=Pe(t,new Ue(e),(t=>{E("RecoilValue subscription fired",e,(()=>{i(0,e)}))}));a.current.set(e,n),E("initial update on subscribing",e,(()=>{i(t.getState(),e)}))})),ve(r.current,o.current).forEach((e=>{s(e)})),r.current=o.current})),ke((()=>{const e=a.current;return()=>e.forEach(((e,t)=>s(t)))}),[s]),Te((()=>{function t(t){return n=>{var o;const r=e.current.getState(),a=Fe(e.current,null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,t,n);je(e.current,t,a)}}function n(t){return o.current.has(t.key)||(o.current=Ve(o.current,t.key)),De(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise((e=>{n.current.getState().suspendedComponentResolvers.add(e)}));throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>je(e.current,t,xe)}}}),[o,e])}function We(e){const t=Be();ke((()=>t.current.subscribeToTransactions(e).release),[e,t])}function $e(e){const t=e.atomValues,n=we(function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n}(t,((e,t)=>{var n;const o=null===(n=Le(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state})),(e=>e.contents));return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t}(e.nonvalidatedAtoms,n)}class Ge{}const Ze=new Ge;var Xe={useRecoilCallback:function(e,t){const n=Be();return Re(((...t)=>{let o=ze(n.current.getState().currentTree,{isSnapshot:!0});function r(e){let t;return[o,t]=Ne(n.current,o,e.key),t}function s(e){return r(e).toPromise()}function i(e,t){const r=Fe(n.current,o,e,t);je(n.current,e,r)}function c(e){je(n.current,e,xe)}let u=Ze;return a.unstable_batchedUpdates((()=>{u=e({getPromise:s,getLoadable:r,set:i,reset:c},...t)})),function(e,t){if(!e)throw new Error(t)}(!(u instanceof Ge),"unstable_batchedUpdates should return immediately"),u}),null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return qe().getRecoilValue(e)},useRecoilValueLoadable:function(e){return qe().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=qe(),[n]=t.getRecoilState(e);return[n,Re(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=qe(),[n]=t.getRecoilStateLoadable(e);return[n,Re(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return Re(qe().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return Re(qe().getResetRecoilState(e),[e])},useRecoilInterface:qe,useTransactionSubscription:We,useSnapshotWithStateChange:function(e){const t=Be();let n=function(){const[e,t]=Ee(0);return We(Re((()=>t((e=>e+1))),[])),ze(Be().current.getState().currentTree,{isSnapshot:!0})}();e((({key:e},o)=>{[n]=Me(t.current,n,e,Ce(t.current,n,e).map(o))}));const o=we(n.atomValues,(e=>e.contents)),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionObservation:function(e){We(Re(((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=$e(o),a=$e(n),s=we(Oe,(e=>{var t,n,o,r,a,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(s=a.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==r&&r}}})),i=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})}),[e]))},useGoToSnapshot:function(){const e=Be();return t=>{a.unstable_batchedUpdates((()=>{t.updatedAtoms.forEach((n=>{je(e.current,new Ue(n),t.atomValues.get(n))}))}))}},useSetUnvalidatedAtomValues:function(){const e=Be();return(t,n={})=>{a.unstable_batchedUpdates((()=>{e.current.addTransactionMetadata(n),t.forEach(((t,n)=>Ie(e.current,new Ue(n),t)))}))}}};const Je=Symbol("ArrayKeyedMap"),Ke=new Map;class Ye{constructor(e){if(this._base=new Map,e instanceof Ye)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach((e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:Ke})),void 0===n?void 0:n.get(Je)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach((e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r})),r.set(Je,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach((e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o})),o.delete(Je),this}entries(){const e=[];return function t(n,o){n.forEach(((n,r)=>{r===Je?e.push([o,n]):t(n,o.concat(r))}))}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var He=Ye;Object.freeze(new Set);const{mapBySettingInMap:Qe,mapByUpdatingInMap:et,setByAddingToSet:tt,setByDeletingFromSet:nt}=s,{detectCircularDependencies:ot,getNodeLoadable:rt,setNodeValue:at}=j,{loadableWithError:st,loadableWithPromise:it,loadableWithValue:ct}=m,{DEFAULT_VALUE:ut,RecoilValueNotReady:lt,registerNode:dt}=A,{startPerfBlock:pt}={startPerfBlock:function(e){return()=>{}}},{isRecoilValue:ft}=X,mt=Object.freeze(new Set);function ht(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=u(e.get(n));t.push(n),t.push(o.contents)}return t}const{useRecoilCallback:gt,useRecoilState:bt,useRecoilStateLoadable:St,useRecoilValue:yt,useRecoilValueLoadable:vt,useResetRecoilState:wt,useSetRecoilState:Rt,useSetUnvalidatedAtomValues:kt,useTransactionObservation:Tt,useTransactionSubscription:At}=Xe,{DefaultValue:Et}=A,{RecoilRoot:Vt}=ye,{isRecoilValue:Nt}=X;var Ct={DefaultValue:Et,RecoilRoot:Vt,atom:oe,selector:function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:new He;function s(o,r){var u;let l=r;const d=null!==(u=r.nodeDeps.get(t))&&void 0!==u?u:mt,p=ht(new Map(Array.from(d).sort().map((e=>{const[t,n]=rt(o,l,e);return l=t,[e,n]})))),f=a.get(p);if(null!=f)return[l,f];const[m,h,g]=function(e,o){var r;const[a,c,u]=function(e,o){const r=pt(t);let a=o;const c=new Map;function u({key:t}){let n;if([a,n]=rt(e,o,t),c.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=ft(e)?u(e):e,o=i(t)?it(t.finally(r)):(r(),ct(t));return[a,o,c]}catch(t){const o=i(t)?it(t.then((()=>{let t=st(new Error("Internal Recoil Selector Error"));if(e.replaceState((n=>{let o;return[o,t]=s(e,n),o})),"hasError"===t.state)throw t.contents;return t.contents})).finally(r)):(r(),st(t));return[a,o,c]}}(e,o);let l=a;const d=null!==(r=o.nodeDeps.get(t))&&void 0!==r?r:mt,p=new Set(u.keys());l=function(e,t){return e.size===t.size&&function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const a=r.value;if(!t.call(n,a[1],a[0],e))return!1;r=o.next()}return!0}(e,(e=>t.has(e)))}(d,p)?l:{...l,nodeDeps:Qe(l.nodeDeps,t,p)};const f=ve(p,d),m=ve(d,p);for(const n of f)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,(e=>tt(null!=e?e:mt,t)))};for(const n of m)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,(e=>nt(null!=e?e:mt,t)))};return[l,c,u]}(o,l);l=m;const b=ht(g);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&c(r.contents):r.contents.then((r=>(1==!e.dangerouslyAllowMutability&&c(r),a=a.set(o,ct(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r))).catch((r=>(i(r)||(1==!e.dangerouslyAllowMutability&&c(r),a=a.set(o,st(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r))),a=a.set(o,r)}(o,b,h),[l,h]}function u(e,t){return s(e,t)}return dt(null!=r?{key:t,options:e,get:u,set:function(e,t,n){let o=t;const a=new Set;function s({key:t}){const[n,r]=rt(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new lt(t):r.contents}function i(t,n){const r="function"==typeof n?n(s(t)):n;let i;[o,i]=at(e,o,t.key,r),i.forEach((e=>a.add(e)))}return r({set:i,get:s,reset:function(e){i(e,ut)}},n),[o,a]}}:{key:t,options:e,get:u})},useRecoilValue:yt,useRecoilValueLoadable:vt,useRecoilState:bt,useRecoilStateLoadable:St,useSetRecoilState:Rt,useResetRecoilState:wt,useRecoilCallback:gt,useTransactionObservation_UNSTABLE:Tt,useTransactionSubscription_UNSTABLE:At,useSetUnvalidatedAtomValues_UNSTABLE:kt,isRecoilValue:Nt},Mt=Ct.RecoilRoot,xt=Ct.atom,_t=Ct.selector,Lt=Ct.useRecoilValue,Ot=Ct.useRecoilValueLoadable,Bt=Ct.useRecoilState,Ut=Ct.useRecoilStateLoadable,Dt=Ct.useSetRecoilState,jt=Ct.useResetRecoilState,It=Ct.useRecoilCallback,Pt=Ct.useTransactionObservation_UNSTABLE,zt=Ct.useTransactionSubscription_UNSTABLE,Ft=Ct.useSetUnvalidatedAtomValues_UNSTABLE,qt=Ct.isRecoilValue;t.Wh=Mt,t.cn=xt,t.nZ=_t,t.FV=Bt,t.sJ=Lt}}]);