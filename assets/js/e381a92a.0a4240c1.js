"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9874],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),l=n(2389),o=n(3725),i=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,f=e.groupId,b=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=m[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),x=g.tabGroupChoices,k=g.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],I=w[1],O=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=x[f];null!=N&&N!==T&&v.some((function(e){return e.value===N}))&&I(N)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==T&&(C(t),I(r),null!=f&&k(f,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(m.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},2457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return f},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],c={title:"TextUI"},s=void 0,p={unversionedId:"ox_lib/Client/Interface/textui",id:"ox_lib/Client/Interface/textui",title:"TextUI",description:"lib.showTextUI",source:"@site/docs/ox_lib/Client/Interface/textui.md",sourceDirName:"ox_lib/Client/Interface",slug:"/ox_lib/Client/Interface/textui",permalink:"/docs/ox_lib/Client/Interface/textui",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Client/Interface/textui.md",tags:[],version:"current",frontMatter:{title:"TextUI"},sidebar:"docs",previous:{title:"Progress",permalink:"/docs/ox_lib/Client/Interface/progress"},next:{title:"Cache",permalink:"/docs/ox_lib/Client/cache"}},d={},f=[{value:"lib.showTextUI",id:"libshowtextui",level:3},{value:"lib.hideTextUI",id:"libhidetextui",level:3}],b={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"libshowtextui"},"lib.showTextUI"),(0,l.kt)("p",null,"Show the TextUI window."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DO NOT")," run this every tick, it's intented to be used as a toggle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- text: string\n-- options: table (optional)\n    -- position: "right-center" or "left-center" or "top-center" (default - "right-center")\n    -- icon: string or table\n    -- iconColor: string\n    -- style: React.CSSProperties\nlib.showTextUI(text, options)\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{label:"Default",value:"default",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'lib.showTextUI(\'[E] - Fuel vehicle\', {\n    position = "top-center",\n    icon = "gas-pump",\n})\n'))),(0,l.kt)(i.Z,{label:"Custom style",value:"custom",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showTextUI('[E] - Pick apple', {\n    position = \"top-center\",\n    icon = 'hand',\n    iconColor = \"red\",\n    style = {\n        borderRadius = 0,\n        backgroundColor = 'blue',\n        color = 'red'\n    }\n})\n")))),(0,l.kt)("p",null,"The icon library used is Font Awesome 6.0, if for the icon you define only a string\nthe default icon type will be ",(0,l.kt)("inlineCode",{parentName:"p"},"solid"),".",(0,l.kt)("br",{parentName:"p"}),"\n","If you want to use a different icon type, i.e\napple as a brand, you need to define icon as a table with the first value being\nthe icon type as a string, and the second being the icon name."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"icon = {'fab', 'apple'}")),(0,l.kt)("h3",{id:"libhidetextui"},"lib.hideTextUI"),(0,l.kt)("p",null,"Hides the currently visible TextUI window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideTextUI()\n")))}m.isMDXComponent=!0}}]);