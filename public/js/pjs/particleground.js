!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():e()}(function(){"use strict";function e(e){return parseInt(e,10)}function t(){return"#"+l().toString(16).slice(-6)}function n(e,t){return l()*(e-t)+t}function o(t,n){return e(p.getComputedStyle(t)[n])}function i(e){for(var t=e.offsetLeft||0,n=e.offsetTop||0;e=e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop;return{left:t,top:n}}function r(e,t){return Object.prototype.toString.call(e)===t}function c(){var e,t,n=arguments,o=n[0]||{},i=!1,a=n.length,u=1;for("boolean"==typeof o&&(i=o,o=n[1]||{},u++);a>u;u++)for(t in n[u])e=n[u][t],i&&(r(e,"[object Object]")||r(e,"[object Array]"))?o[t]=c(i,r(e,"[object Array]")?[]:{},e):o[t]=e;return o}function a(e,t,n){e.addEventListener(t,n)}function u(e,t,n){e.removeEventListener(t,n)}function f(e,t){if(!w)return!1;if("object"==typeof e)t.container=e;else if(!(t.container=m.querySelector(e)))throw new Error(e+" is not defined");return t.c=m.createElement("canvas"),t.cw=t.c.width=o(t.container,"width"),t.ch=t.c.height=o(t.container,"height"),t.cxt=t.c.getContext("2d"),t.paused=!1,!!t.container.appendChild(t.c)}function s(e,t){w&&!e.paused&&(e.paused=!0,t&&t.call(e))}function d(e,t){w&&e.paused&&(t&&t.call(e),e.paused=!1,e.draw())}function h(e,t){e.set.resize&&a(p,"resize",function(){var n=e.cw,i=e.ch;e.cw=e.c.width=o(e.container,"width"),e.ch=e.c.height=o(e.container,"height");var r=e.cw/n,c=e.ch/i;e.dots.forEach(function(e){e.x*=r,e.y*=c}),t&&t.call(e,r,c),e.paused&&e.draw()})}var p=window,m=document,l=Math.random,w=!!m.createElement("canvas").getContext;p.requestAnimationFrame=function(e){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}(p);var v={version:"1.0.0",canvasSupport:w,util:{pInt:e,randomColor:t,limitRandom:n,getCss:o,offset:i,typeChecking:r,extend:c,createCanvas:f,pause:s,open:d,resize:h},inherit:{pause:function(){s(this)},open:function(){d(this)},resize:function(){h(this)},requestAnimationFrame:function(){!this.paused&&p.requestAnimationFrame(this.draw.bind(this))}},event:{on:a,off:u},extend:function(e){return c(e,this.inherit),this}};return p.Particleground=v,v});
//# sourceMappingURL=../map/pjs/particleground.js.map
