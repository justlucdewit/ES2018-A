(function(t){function e(e){for(var a,r,o=e[0],s=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/ES2018-A/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"000e":function(t,e,n){n("ac1f"),n("5319"),n("d3b7"),n("159b"),n("a434"),n("cb29"),n("b680"),n("a9e3"),window.canvas=void 0,window.ctx=void 0;var a={x:3,y:10},i=.1,c=function(){ctx.lineWidth=1,ctx.fillStyle="#fff",ctx.fillRect(0,0,canvas.width,canvas.height)},r=function(){ctx.strokeStyle="#ccc",ctx.lineWidth=1;for(var t=canvas.width/a.x,e=canvas.height/a.y,n=0;n<=canvas.width;n+=t)ctx.beginPath(),ctx.moveTo(n,0),ctx.lineTo(n,canvas.height),ctx.stroke();for(var i=0;i<=canvas.height;i+=e)ctx.beginPath(),ctx.moveTo(0,i),ctx.lineTo(canvas.width,i),ctx.stroke()},o=function(t,e){t.replace(/t/g,e);return new Function("return t => ".concat(t))()(e)},s=function(t,e,n){ctx.strokeStyle=e;for(var a=[],c=0;c<=1;c+=i){var r={x:c*canvas.width,y:canvas.height-o(t,c)*canvas.height};a.push(r)}ctx.beginPath(),ctx.moveTo(a[0].x,a[0].y),a.splice(1,a.length).forEach((function(t){ctx.lineTo(t.x,t.y)})),ctx.lineWidth=1,ctx.stroke();var s=15,u=2*Math.PI+2.4,l=o(t,n),d=2;ctx.beginPath(),ctx.arc(n*canvas.width,canvas.height-l*canvas.height,s,s,u),ctx.fillStyle="white",ctx.strokeStyle=e,ctx.lineWidth=2,ctx.stroke,ctx.fill(),ctx.stroke(),ctx.font="12px Arial",ctx.fillStyle=e,ctx.fillText(Number(l).toFixed(d),n*canvas.width-10,canvas.height-l*canvas.height+4)},u=function(t,e){if(void 0!==ctx){c(),r(),l(e);var n=["red","blue","green","black","cyan","purple"];t.forEach((function(t,a){s(t,n[a%n.length],e)}))}},l=function(t){ctx.lineWidth=1,ctx.strokeStyle="red",ctx.beginPath(),ctx.moveTo(t*canvas.width,0),ctx.lineTo(t*canvas.width,canvas.height),ctx.stroke()};setTimeout((function(){canvas=document.getElementById("graph-canvas"),ctx=canvas.getContext("2d"),u([],.5)}),500),t.exports={renderFormulas:u}},"0a05":function(t,e,n){"use strict";n("7a7f")},"2c11":function(t,e,n){},"54c8":function(t,e,n){"use strict";n("2c11")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{on:{toggleAbout:t.toggleOpen}}),n("AboutPopupOver",{attrs:{open:t.aboutOpened}}),n("BackToTop"),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner",class:t.aboutOpened?"flipped":""},[n("div",{staticClass:"flip-card-front"},[n("EasingWidget",{attrs:{aboutOpened:t.aboutOpened}})],1),n("div",{staticClass:"flip-card-back"},[n("AboutPopupFlip")],1)])])],1)},c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("span",{attrs:{id:"title"}},[t._v("CSS Ease")]),n("span",{attrs:{id:"nav"}},[n("span",{staticClass:"nav-item",on:{click:function(e){return t.$emit("toggleAbout")}}},[n("span",{attrs:{id:"abt-desktop"}},[t._v("About")]),n("span",{attrs:{id:"abt-mobile"}},[t._v("i")])])])])},o=[],s={},u=s,l=(n("54c8"),n("2877")),d=Object(l["a"])(u,r,o,!1,null,"eef4d956",null),p=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inner-content"},[t._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])])}],h=(n("ad66"),{}),g=Object(l["a"])(h,f,v,!1,null,"d1e77984",null),x=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.open?n("div",[n("div",{attrs:{id:"arrow"}}),n("div",{attrs:{id:"wrapper"}},[t._v(" Welcome to CSS Ease, an online playground for web developers to use as a reference for easing functions ")])]):t._e()},m=[],y={props:{open:{type:Boolean,required:!0}}},_=y,w=(n("d38d"),Object(l["a"])(_,b,m,!1,null,null,null)),O=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.aboutOpened?"flipped":"",attrs:{id:"easing"}},[n("div",{attrs:{id:"options"}},t._l(t.easingFunctions,(function(e){return n("div",{key:e.text,staticClass:"function",attrs:{title:"value = "+e.formula},on:{click:function(n){return t.toggleFunc(e)}}},[n("div",{staticClass:"select"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"func.selected"}],attrs:{id:"checkbox-"+e.text,type:"checkbox"},domProps:{checked:Array.isArray(e.selected)?t._i(e.selected,null)>-1:e.selected},on:{change:function(n){var a=e.selected,i=n.target,c=!!i.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);i.checked?o<0&&t.$set(e,"selected",a.concat([r])):o>-1&&t.$set(e,"selected",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(e,"selected",c)}}})]),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v(" "+t._s(t._f("capitalize")(e.text))+" ")]),n("div",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")])])])})),0),n("div",{staticStyle:{"text-align":"center","padding-top":"40px"},attrs:{id:"graphing"}},[n("canvas",{attrs:{height:"300",width:"300",id:"graph-canvas"}}),n("br"),n("div",[t._v(" 0s "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.n,expression:"n"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.n},on:{change:function(e){return t.redrawSelectedFuncs()},__r:function(e){t.n=e.target.value}}}),t._v(" 3s ")]),n("button",{on:{click:function(e){t.playing=!t.playing}}},[t._v(" "+t._s(t.playing?"Pause":"Play")+" ")])])])},S=[],F=(n("b64b"),n("a9e3"),n("d81d"),n("4de4"),n("d3b7"),n("4fad"),n("5b6e")),P=n("000e"),T={props:{aboutOpened:{type:Boolean,required:!0}},mounted:function(){var t=this;this.easingFunctions=F.easingFunctions;for(var e=0,n=Object.keys(this.easingFunctions);e<n.length;e++){var a=n[e];this.easingFunctions[a].selected=!1}var i=50;this.$nextTick((function(){setInterval((function(){t.n=Number(t.n),t.playing&&(t.n+=Number(1/(3e3/i)),t.n>1&&(t.n=0)),t.redrawSelectedFuncs()}),i)}))},data:function(){return{easingFunctions:[{text:"😎",selected:!0}],update:1,playing:!1,n:.5}},filters:{capitalize:function(t){return t[0].toUpperCase()+t.substr(1)}},computed:{selectedFuncs:function(){return this.update,Object.entries(this.easingFunctions).filter((function(t){return t[1].selected})).map((function(t){return t[1]}))}},methods:{redrawSelectedFuncs:function(){Object(P["renderFormulas"])(this.selectedFuncs.map((function(t){return t.equation})),this.n)},toggleFunc:function(t){t.selected=!t.selected,this.update+=1,this.$forceUpdate(),this.redrawSelectedFuncs()}}},C=T,j=(n("0a05"),Object(l["a"])(C,k,S,!1,null,"dc8dd11a",null)),E=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-to-top",on:{click:function(e){return t.toTop()}}},[t._v(" ⬆ ")])},A=[],q={methods:{toTop:function(){window.scrollTo({top:0})}}},I=q,Q=(n("cf29"),Object(l["a"])(I,$,A,!1,null,null,null)),W=Q.exports,z={components:{Header:p,AboutPopupFlip:x,EasingWidget:E,AboutPopupOver:O,BackToTop:W},data:function(){return{aboutOpened:!1}},methods:{toggleOpen:function(){this.aboutOpened=!this.aboutOpened}}},N=z,B=(n("5c0b"),Object(l["a"])(N,i,c,!1,null,null,null)),M=B.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(M)}}).$mount("#app")},"5b6e":function(t){t.exports=JSON.parse('{"description":"In the provided equations, t has value range 0-1. Source: https://gist.github.com/gre/1650294","easingFunctions":{"linear":{"text":"linear","description":"no easing, no acceleration","formula":"t","equation":"t"},"easeInQuad":{"text":"easeInQuad","description":"accelerating from zero velocity","formula":"t^2","equation":"t*t"},"easeOutQuad":{"text":"easeOutQuad","description":"decelerating to zero velocity","formula":"t*(2-t)","equation":"t*(2-t)"},"easeInOutQuad":{"text":"easeInOutQuad","description":"acceleration until halfway, then deceleration","formula":"t<.5 ? 2t^2 : -1+(4-2t)t","equation":"t<.5 ? 2*t*t : -1+(4-2*t)*t"},"easeInQuint":{"text":"easeInQuint","description":"accelerating from zero velocity","formula":"t^5","equation":"t*t*t*t*t"},"easeOutQuint":{"text":"easeOutQuint","description":"decelerating to zero velocity","formula":"1+(--t)t^4","equation":"1+(--t)*t*t*t*t"}}}')},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7a7f":function(t,e,n){},"92ef":function(t,e,n){},"9c0c":function(t,e,n){},"9f25":function(t,e,n){},ad66:function(t,e,n){"use strict";n("b587")},b587:function(t,e,n){},cf29:function(t,e,n){"use strict";n("9f25")},d38d:function(t,e,n){"use strict";n("92ef")}});
//# sourceMappingURL=app.f66f0ee4.js.map