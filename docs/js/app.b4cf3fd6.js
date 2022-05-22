(function(t){function e(e){for(var a,o,r=e[0],s=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ES2018-A/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"000e":function(t,e,n){n("ac1f"),n("5319"),n("d3b7"),n("159b"),n("a434"),window.canvas=void 0,window.ctx=void 0;var a={x:3,y:10},i=.1,c=function(){ctx.fillStyle="#fff",ctx.fillRect(0,0,canvas.width,canvas.height)},o=function(){ctx.strokeStyle="#ccc";for(var t=canvas.width/a.x,e=canvas.height/a.y,n=0;n<=canvas.width;n+=t)ctx.beginPath(),ctx.moveTo(n,0),ctx.lineTo(n,canvas.height),ctx.stroke();for(var i=0;i<=canvas.height;i+=e)ctx.beginPath(),ctx.moveTo(0,i),ctx.lineTo(canvas.width,i),ctx.stroke()},r=function(t,e){t.replace(/t/g,e);return new Function("return t => ".concat(t))()(e)},s=function(t,e,n){ctx.strokeStyle=e;for(var a=[],c=0;c<=1;c+=i){var o={x:c*canvas.width,y:canvas.height-r(t,c)*canvas.height};a.push(o)}ctx.beginPath(),ctx.moveTo(a[0].x,a[0].y),a.splice(1,a.length).forEach((function(t){ctx.lineTo(t.x,t.y)})),ctx.stroke(),ctx.ellipse(n*canvas.width,canvas.height-r(t,n)*canvas.height,5,5,0,0,2*Math.PI)},u=function(t,e){c(),o(),l(e);var n=["red","blue","green","black","cyan","purple"];t.forEach((function(t,a){s(t,n[a%n.length],e)}))},l=function(t){ctx.strokeStyle="red",ctx.beginPath(),ctx.moveTo(t*canvas.width,0),ctx.lineTo(t*canvas.width,canvas.height),ctx.stroke()};setTimeout((function(){canvas=document.getElementById("graph-canvas"),ctx=canvas.getContext("2d"),u([],.5)}),500),t.exports={renderFormulas:u}},2368:function(t,e,n){"use strict";n("351c")},"2c11":function(t,e,n){},"351c":function(t,e,n){},"54c8":function(t,e,n){"use strict";n("2c11")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{on:{toggleAbout:t.toggleOpen}}),n("AboutPopupOver",{attrs:{open:t.aboutOpened}}),n("BackToTop"),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner",class:t.aboutOpened?"flipped":""},[n("div",{staticClass:"flip-card-front"},[n("EasingWidget",{attrs:{aboutOpened:t.aboutOpened}})],1),n("div",{staticClass:"flip-card-back"},[n("AboutPopupFlip")],1)])])],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("span",{attrs:{id:"title"}},[t._v("CSS Ease")]),n("span",{attrs:{id:"nav"}},[n("span",{staticClass:"nav-item",on:{click:function(e){return t.$emit("toggleAbout")}}},[n("span",{attrs:{id:"abt-desktop"}},[t._v("About")]),n("span",{attrs:{id:"abt-mobile"}},[t._v("i")])])])])},r=[],s={},u=s,l=(n("54c8"),n("2877")),d=Object(l["a"])(u,o,r,!1,null,"eef4d956",null),p=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inner-content"},[t._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])])}],h=(n("ad66"),{}),g=Object(l["a"])(h,f,v,!1,null,"d1e77984",null),b=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.open?n("div",[n("div",{attrs:{id:"arrow"}}),n("div",{attrs:{id:"wrapper"}},[t._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])]):t._e()},m=[],y={props:{open:{type:Boolean,required:!0}}},_=y,O=(n("d38d"),Object(l["a"])(_,x,m,!1,null,null,null)),w=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.aboutOpened?"flipped":"",attrs:{id:"easing"}},[n("div",{attrs:{id:"options"}},t._l(t.easingFunctions,(function(e){return n("div",{key:e.text,staticClass:"function",on:{click:function(n){return t.toggleFunc(e)}}},[n("div",{staticClass:"select"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"func.selected"}],attrs:{id:"checkbox-"+e.text,type:"checkbox"},domProps:{checked:Array.isArray(e.selected)?t._i(e.selected,null)>-1:e.selected},on:{change:function(n){var a=e.selected,i=n.target,c=!!i.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);i.checked?r<0&&t.$set(e,"selected",a.concat([o])):r>-1&&t.$set(e,"selected",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(e,"selected",c)}}})]),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v(" "+t._s(t._f("capitalize")(e.text))+" ")]),n("div",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")])])])})),0),n("div",{staticStyle:{"text-align":"center","padding-top":"40px"},attrs:{id:"graphing"}},[n("canvas",{attrs:{height:"300",width:"300",id:"graph-canvas"}}),n("br"),n("div",[t._v(" 0s "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.n,expression:"n"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.n},on:{change:function(e){return t.redrawSelectedFuncs()},__r:function(e){t.n=e.target.value}}}),t._v(" 3s ")]),n("button",[t._v("Play")])])])},S=[],F=(n("b64b"),n("d81d"),n("4de4"),n("d3b7"),n("4fad"),n("5b6e")),C=n("000e"),P={props:{aboutOpened:{type:Boolean,required:!0}},mounted:function(){this.easingFunctions=F.easingFunctions;for(var t=0,e=Object.keys(this.easingFunctions);t<e.length;t++){var n=e[t];this.easingFunctions[n].selected=!1}},data:function(){return{easingFunctions:[{text:"😎",selected:!0}],update:1,n:.5}},filters:{capitalize:function(t){return t[0].toUpperCase()+t.substr(1)}},computed:{selectedFuncs:function(){return this.update,Object.entries(this.easingFunctions).filter((function(t){return t[1].selected})).map((function(t){return t[1]}))}},methods:{redrawSelectedFuncs:function(){Object(C["renderFormulas"])(this.selectedFuncs.map((function(t){return t.equation})),this.n)},toggleFunc:function(t){t.selected=!t.selected,this.update+=1,this.$forceUpdate(),this.redrawSelectedFuncs()}}},T=P,j=(n("2368"),Object(l["a"])(T,k,S,!1,null,"4db4d7cf",null)),E=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-to-top",on:{click:function(e){return t.toTop()}}},[t._v(" ⬆ ")])},A=[],q={methods:{toTop:function(){window.scrollTo({top:0})}}},Q=q,I=(n("cf29"),Object(l["a"])(Q,$,A,!1,null,null,null)),z=I.exports,B={components:{Header:p,AboutPopupFlip:b,EasingWidget:E,AboutPopupOver:w,BackToTop:z},data:function(){return{aboutOpened:!1}},methods:{toggleOpen:function(){this.aboutOpened=!this.aboutOpened}}},M=B,W=(n("5c0b"),Object(l["a"])(M,i,c,!1,null,null,null)),J=W.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(J)}}).$mount("#app")},"5b6e":function(t){t.exports=JSON.parse('{"description":"In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294","easingFunctions":{"linear":{"text":"linear","description":"no easing, no acceleration","formula":"t","equation":"t"},"easeInQuad":{"text":"easeInQuad","description":"accelerating from zero velocity","formula":"t^2","equation":"t*t"},"easeOutQuad":{"text":"easeOutQuad","description":"decelerating to zero velocity","formula":"t*(2-t)","equation":"t*(2-t)"},"easeInOutQuad":{"text":"easeInOutQuad","description":"acceleration until halfway, then deceleration","formula":"t<.5 ? 2t^2 : -1+(4-2t)t","equation":"t<.5 ? 2*t*t : -1+(4-2*t)*t"},"easeInQuint":{"text":"easeInQuint","description":"accelerating from zero velocity","formula":"t^5","equation":"t*t*t*t*t"},"easeOutQuint":{"text":"easeOutQuint","description":"decelerating to zero velocity","formula":"1+(--t)t^4","equation":"1+(--t)*t*t*t*t"}}}')},"5c0b":function(t,e,n){"use strict";n("9c0c")},"92ef":function(t,e,n){},"9c0c":function(t,e,n){},"9f25":function(t,e,n){},ad66:function(t,e,n){"use strict";n("b587")},b587:function(t,e,n){},cf29:function(t,e,n){"use strict";n("9f25")},d38d:function(t,e,n){"use strict";n("92ef")}});
//# sourceMappingURL=app.b4cf3fd6.js.map