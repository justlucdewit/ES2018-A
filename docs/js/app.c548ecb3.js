(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ES2018-A/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c11":function(e,t,n){},"2c9c":function(e,t,n){},"54c8":function(e,t,n){"use strict";n("2c11")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{on:{toggleAbout:e.toggleOpen}}),n("AboutPopupOver",{attrs:{open:e.aboutOpened}}),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner",class:e.aboutOpened?"flipped":""},[n("div",{staticClass:"flip-card-front"},[n("EasingWidget",{attrs:{aboutOpened:e.aboutOpened}})],1),n("div",{staticClass:"flip-card-back"},[n("AboutPopupFlip")],1)])])],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[n("span",{attrs:{id:"title"}},[e._v("CSS Ease")]),n("span",{attrs:{id:"nav"}},[n("span",{staticClass:"nav-item",on:{click:function(t){return e.$emit("toggleAbout")}}},[n("span",{attrs:{id:"abt-desktop"}},[e._v("About")]),n("span",{attrs:{id:"abt-mobile"}},[e._v("i")])])])])},s=[],c={},u=c,l=(n("54c8"),n("2877")),d=Object(l["a"])(u,o,s,!1,null,"eef4d956",null),p=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inner-content"},[e._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])])}],b=(n("ad66"),{}),g=Object(l["a"])(b,f,v,!1,null,"d1e77984",null),h=g.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.open?n("div",[n("div",{attrs:{id:"arrow"}}),n("div",{attrs:{id:"wrapper"}},[e._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])]):e._e()},O=[],_={props:{open:{type:Boolean,required:!0}}},y=_,x=(n("d38d"),Object(l["a"])(y,m,O,!1,null,null,null)),w=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.aboutOpened?"flipped":"",attrs:{id:"easing"}},[n("div",{attrs:{id:"options"}},e._l(e.easingFunctions,(function(t){return n("div",{key:t.text,staticClass:"function",on:{click:function(n){return e.toggleFunc(t)}}},[n("div",{staticClass:"select"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"func.selected"}],attrs:{id:"checkbox-"+t.text,type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?e._i(t.selected,null)>-1:t.selected},on:{change:function(n){var i=t.selected,r=n.target,a=!!r.checked;if(Array.isArray(i)){var o=null,s=e._i(i,o);r.checked?s<0&&e.$set(t,"selected",i.concat([o])):s>-1&&e.$set(t,"selected",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(t,"selected",a)}}})]),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[e._v(" "+e._s(e._f("capitalize")(t.text))+" ")]),n("div",{staticClass:"description"},[e._v(" "+e._s(t.description)+" ")])])])})),0),e._m(0)])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center","padding-top":"40px"},attrs:{id:"graphing"}},[e._v(" Graph goes here :p "),n("br"),n("input",{attrs:{type:"range",min:"0",max:"3",step:"0.1"}}),n("br"),n("button",[e._v("Play")])])}],S=(n("b64b"),n("d81d"),n("4de4"),n("d3b7"),n("4fad"),n("5b6e")),k={props:{aboutOpened:{type:Boolean,required:!0}},mounted:function(){this.easingFunctions=S.easingFunctions;for(var e=0,t=Object.keys(this.easingFunctions);e<t.length;e++){var n=t[e];this.easingFunctions[n].selected=!1}},data:function(){return{easingFunctions:[{text:"😎",selected:!0}],update:1}},filters:{capitalize:function(e){return e[0].toUpperCase()+e.substr(1)}},computed:{selectedFuncs:function(){return this.update,Object.entries(this.easingFunctions).filter((function(e){return e[1].selected})).map((function(e){return e[1]}))}},methods:{toggleFunc:function(e){e.selected=!e.selected,this.update+=1,this.$forceUpdate()}}},E=k,F=(n("89e7"),Object(l["a"])(E,j,C,!1,null,"4d5ba8c6",null)),P=F.exports,$={components:{Header:p,AboutPopupFlip:h,EasingWidget:P,AboutPopupOver:w},data:function(){return{aboutOpened:!1}},methods:{toggleOpen:function(){this.aboutOpened=!this.aboutOpened}}},A=$,Q=(n("5c0b"),Object(l["a"])(A,r,a,!1,null,null,null)),q=Q.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(q)}}).$mount("#app")},"5b6e":function(e){e.exports=JSON.parse('{"description":"In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294","easingFunctions":{"linear":{"text":"linear","description":"no easing, no acceleration","formula":"t","equation":"t"},"easeInQuad":{"text":"easeInQuad","description":"accelerating from zero velocity","formula":"t^2","equation":"t*t"},"easeOutQuad":{"text":"easeOutQuad","description":"decelerating to zero velocity","formula":"t*(2-t)","equation":"t*(2-t)"},"easeInOutQuad":{"text":"easeInOutQuad","description":"acceleration until halfway, then deceleration","formula":"t<.5 ? 2t^2 : -1+(4-2t)t","equation":"t<.5 ? 2*t*t : -1+(4-2*t)*t"},"easeInQuint":{"text":"easeInQuint","description":"accelerating from zero velocity","formula":"t^5","equation":"t*t*t*t*t"},"easeOutQuint":{"text":"easeOutQuint","description":"decelerating to zero velocity","formula":"1+(--t)t^4","equation":"1+(--t)*t*t*t*t"}}}')},"5c0b":function(e,t,n){"use strict";n("9c0c")},"89e7":function(e,t,n){"use strict";n("2c9c")},"92ef":function(e,t,n){},"9c0c":function(e,t,n){},ad66:function(e,t,n){"use strict";n("b587")},b587:function(e,t,n){},d38d:function(e,t,n){"use strict";n("92ef")}});
//# sourceMappingURL=app.c548ecb3.js.map