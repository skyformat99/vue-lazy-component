webpackJsonp([6],[,function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,n){function o(e){r||n(6)}var r=!1,i=n(4)(n(1),n(5),o,null,null);i.options.__file="/Users/benzhao/Sites/@xunlei/vue-lazy-component/src/VueLazyComponent.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] VueLazyComponent.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VueLazyComponent",props:{timeout:{type:Number},tagName:{type:String,default:"div"},viewport:{type:window.HTMLElement,default:function(){return null}},threshold:{type:String,default:"0px"},direction:{type:String,default:"vertical"},maxWaitingTime:{type:Number,default:50}},data:function(){return{isInit:!1,timer:null,io:null,loading:!1}},created:function(){var e=this;this.timeout&&(this.timer=setTimeout(function(){e.init()},this.timeout))},mounted:function(){if(!this.timeout){var e=void 0;switch(this.direction){case"vertical":e=this.threshold+" 0px";break;case"horizontal":e="0px "+this.threshold}this.io=new window.IntersectionObserver(this.intersectionHandler,{rootMargin:e,root:this.viewport,threshold:[Number.MIN_VALUE]}),this.io.observe(this.$el)}},beforeDestroy:function(){this.io&&this.io.unobserve(this.$el)},methods:{intersectionHandler:function(e){(e[0].isIntersecting||e[0].intersectionRatio)&&(this.init(),this.io.unobserve(this.$el))},init:function(){var e=this;this.$emit("beforeInit"),this.$emit("before-init"),this.loading=!0,this.requestAnimationFrame(function(){e.isInit=!0,e.$emit("init")})},requestAnimationFrame:function(e){var t=this;return setTimeout(function(){t.isInit||e()},this.maxWaitingTime),(window.requestAnimationFrame||function(e){return setTimeout(e,1e3/60)})(e)}}}},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.i,"\n.lazy-component-enter {\n  opacity: 0;\n}\n.lazy-component-enter-to {\n   opacity: 1;\n}\n.lazy-component-enter-active {\n  transition: opacity 0.3s 0.2s;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.lazy-component-leave {\n  opacity: 1;\n}\n.lazy-component-leave-to {\n  opacity: 0;\n}\n.lazy-component-leave-active {\n  transition: opacity 0.5s;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),o&&(u._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:a,options:u}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{staticStyle:{position:"relative"},attrs:{tag:e.tagName,name:"lazy-component"},on:{"before-enter":function(t){return e.$emit("before-enter",t)},"before-leave":function(t){return e.$emit("before-leave",t)},"after-enter":function(t){return e.$emit("after-enter",t)},"after-leave":function(t){return e.$emit("after-leave",t)}}},[e.isInit?n("div",{key:"component"},[e._t("default",null,{loading:e.loading})],2):e.$slots.skeleton?n("div",{key:"skeleton"},[e._t("skeleton")],2):n("div",{key:"loading"})])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(7)("2be1d0dd",o,!1)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return m;o.parentNode.removeChild(o)}if(v){var i=d++;o=p||(p=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=l[a.id];s.refs--,n.push(s)}t?(r=c(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],u=i[2],c=i[3],l={id:e+":"+r,css:s,media:u,sourceMap:c};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}},function(e,t,n){/**
  * vue-lazy-component
  * (c) 2017 赵兵
  * @license MIT
  */
const o=n(0),r={};r.install=function(e,t){e.component(o.name,o)},r.component=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.exports=r}])})},function(e,t,n){"use strict";var o=n(0),r=n(14);o.a.use(r.a);var i=new r.a({routes:[{path:"/large-page",name:"LargePage",alias:"/",component:function(e){return n.e(2).then(function(){var t=[n(20)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/large-page-chunks",name:"LargePageChunks",component:function(e){return n.e(5).then(function(){var t=[n(21)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/large-page-not-lazy",name:"LargePageNotLazy",component:function(e){return n.e(3).then(function(){var t=[n(22)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/timeout",name:"Timeout",component:function(e){return n.e(1).then(function(){var t=[n(24)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/custom-transition",name:"CustomTransition",component:function(e){return n.e(0).then(function(){var t=[n(19)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/specific-viewport",name:"SpecificViewport",component:function(e){return n.e(4).then(function(){var t=[n(23)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});t.a=i},function(e,t,n){function o(e){n(12)}var r=n(4)(n(10),n(13),o,null,null);e.exports=r.exports},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(3),i=n.n(r),a=n(2),s=n(1);o.a.config.productionTip=!1,o.a.use(s),new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=(n.n(o),n(6)),i=(n.n(r),n(11)),a=(n.n(i),n(8)),s=(n.n(a),n(7));n.n(s);n(0).a.directive("highlightjs",{deep:!0,bind:function(e,t){e.querySelectorAll("code").forEach(function(e){t.value&&(e.textContent=t.value),window.hljs.highlightBlock(e)})},componentUpdated:function(e,t){e.querySelectorAll("code").forEach(function(e){t.value&&(e.textContent=t.value,window.hljs.highlightBlock(e))})}}),t.default={}},function(e,t){},function(e,t){},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"page-header"},[n("h1",[e._v("Vue Lazy Component Demos")]),e._v(" "),n("router-link",{staticClass:"link",attrs:{to:"/large-page"}},[e._v("Demo1: 超长页面懒加载")]),e._v(" "),n("router-link",{staticClass:"link",attrs:{to:"/timeout"}},[e._v("Demo2: 延时加载")]),e._v(" "),n("router-link",{staticClass:"link",attrs:{to:"/custom-transition"}},[e._v("Demo3: 自定义过渡效果")]),e._v(" "),n("router-link",{staticClass:"link",attrs:{to:"/large-page-chunks"}},[e._v("Demo4: 超长页面懒加载（分包）")]),e._v(" "),n("router-link",{staticClass:"link",attrs:{to:"/specific-viewport"}},[e._v("Demo5: 特定视口内懒加载 ")])],1),e._v(" "),n("router-view",{staticClass:"page-container"}),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://github.com/xunleif2e/vue-lazy-component",target:"_blank"}},[n("img",{staticStyle:{position:"fixed",top:"0",right:"0",border:"0","z-index":"1000"},attrs:{src:"https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"}})])}]}},,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/img/spr-d3.068dda5.png"}],[9]);
//# sourceMappingURL=app.dc2da1b08bdc088928e9.js.map