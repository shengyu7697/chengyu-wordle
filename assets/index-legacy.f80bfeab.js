!function(){function e(e,o,r,t,n,a,i){try{var c=e[a](i),l=c.value}catch(d){return void r(d)}c.done?o(l):Promise.resolve(l).then(t,n)}function o(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,n,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!o||a.length!==o);i=!0);}catch(l){c=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw n}}return a}(e,o)||i(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,o){if(e){if("string"==typeof e)return c(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,o):void 0}}function c(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=e[r];return t}var l=document.createElement("style");l.innerHTML=':root{--text-color: #111;--inverse-text-color: #fff;--bg-color: #fff;--border-color: #ccc;--green-color: green;--primary-color: var(--green-color);--primary-bg-color: rgba(0, 128, 0, .178);--primary-active-bg-color: rgba(0, 128, 0, .432);--text-strong-color: #000;--text-strong-decoration-color: rgba(0, 0, 0, .2);--letter-border-color: var(--border-color);--letter-error-border-color: lightcoral;--correct-color: var(--green-color);--present-color: orange;--absent-color: gray;--letter-state-text-color: var(--inverse-text-color);--letter-state-border-color: rgba(0, 0, 0, .2);--keyboard-bg-color: #fafafa;--keyboard-border-color: var(--border-color);--key-bg-color: #d3d6da;--key-shadow-color: rgba(0, 0, 0, .25);--key-state-text-color: var(--inverse-text-color);--key-active-text-color: var(--inverse-text-color);--key-active-bg-color: #686868;--modal-backdrop-color: rgba(255, 255, 255, .7);--modal-bg-color: var(--bg-color);--modal-shadow-color: rgba(0, 0, 0, .2);--results-bg-color: #eee;--button-text-color: var(--primary-color);--button-bg-color: var(--primary-bg-color);--button-active-bg-color: var(--primary-active-bg-color);--button-strong-text-color: var(--inverse-text-color);--button-strong-bg-color: var(--green-color);--twitter-color: #1da1f2;--text-field-bg-color: var(--bg-color);--text-field-border-color: var(--primary-active-bg-color);--text-insignificant-color: rgba(0, 0, 0, .5)}@media screen and (prefers-color-scheme: dark){:root:not(.light-mode){--text-color: #eee;--bg-color: #121213;--border-color: #555;--primary-color: lightgreen;--text-strong-color: #fff;--text-strong-decoration-color: rgba(255, 255, 255, .2);--letter-border-color: #555;--absent-color: #444;--keyboard-bg-color: #333;--key-bg-color: #707375;--key-shadow-color: #000;--key-active-bg-color: #333;--modal-backdrop-color: rgba(37, 37, 37, .7);--modal-shadow-color: var(--primary-bg-color);--results-bg-color: #333;--text-field-bg-color: #222;--text-field-border-color: #999;--text-insignificant-color: rgba(255, 255, 255, .5)}}@media screen{:root.dark-mode{--text-color: #eee;--bg-color: #121213;--border-color: #555;--primary-color: lightgreen;--text-strong-color: #fff;--text-strong-decoration-color: rgba(255, 255, 255, .2);--letter-border-color: #555;--absent-color: #444;--keyboard-bg-color: #333;--key-bg-color: #707375;--key-shadow-color: #000;--key-active-bg-color: #333;--modal-backdrop-color: rgba(37, 37, 37, .7);--modal-shadow-color: var(--primary-bg-color);--results-bg-color: #333;--text-field-bg-color: #222;--text-field-border-color: #999;--text-insignificant-color: rgba(255, 255, 255, .5)}}html,body{padding:0;margin:0;background-color:#fff;background-color:var(--bg-color);color:#111;color:var(--text-color);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;transition:background-color .2s ease-in-out}body,button,input{font-family:Nunito,Helvetica Neue,Helvetica,Arial,PingFang SC,Microsoft YaHei,sans-serif}a{color:green;color:var(--primary-color);font-weight:700;text-underline-offset:.15em}*{box-sizing:border-box}button,input{touch-action:manipulation;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button,svg{vertical-align:middle}header{border-bottom:1px solid #ccc;border-bottom:1px solid var(--border-color);padding:.5em;margin-bottom:2px;-webkit-animation:header-appear .5s ease-in-out both;animation:header-appear .5s ease-in-out both}@-webkit-keyframes header-appear{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes header-appear{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}header .inner{margin-top:env(safe-area-inset-top);margin-left:env(safe-area-inset-left);margin-right:env(safe-area-inset-right);max-width:30em;margin:auto;display:flex;justify-content:space-between;gap:.5em;align-items:center}header button{border:0;padding:.2em 1em;margin:0;background-color:rgba(0,128,0,.176);background-color:var(--primary-bg-color);color:green;color:var(--primary-color);font-weight:700;border-radius:.5em;cursor:pointer}header button:active{background-color:rgba(0,128,0,.43);background-color:var(--primary-active-bg-color)}header a,header button{font-size:.8em}header h1{text-transform:uppercase;font-size:1em;margin:0;padding:0}.locale-selector a:not(.selected){font-weight:400}.locale-selector a.selected{color:#000;color:var(--text-strong-color);font-weight:700;-webkit-text-decoration-color:rgba(0,0,0,.2);text-decoration-color:rgba(0,0,0,.2);-webkit-text-decoration-color:var(--text-strong-decoration-color);text-decoration-color:var(--text-strong-decoration-color)}.color-scheme-selector{float:right}.color-scheme-selector button{padding:.25em .5em!important;border:2px solid #ccc!important;border:2px solid var(--border-color)!important;background-color:rgba(255,255,255,.5)!important}.color-scheme-selector button.active{border-color:green!important;border-color:var(--primary-color)!important}#app{display:flex;flex-direction:column;position:fixed;top:0;right:0;bottom:0;left:0}#board{line-height:1;font-size:1.75em;flex-grow:1;display:flex;flex-direction:column;overflow:auto;-webkit-animation:board-appear .5s ease-in-out both;animation:board-appear .5s ease-in-out both}@-webkit-keyframes board-appear{0%{opacity:0;transform:scale(1.2) translateY(5%)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes board-appear{0%{opacity:0;transform:scale(1.2) translateY(5%)}to{opacity:1;transform:scale(1) translateY(0)}}#board .row{line-height:1;flex-grow:1;display:flex;justify-content:center;max-height:3em;perspective:1000px}#board .row.current~.row{opacity:.5}#board .row.error{-webkit-animation:shake .5s;animation:shake .5s}@-webkit-keyframes shake{10%,90%{transform:translate(-2px)}20%,80%{transform:translate(4px)}30%,50%,70%{transform:translate(-8px)}40%,60%{transform:translate(8px)}}@keyframes shake{10%,90%{transform:translate(-2px)}20%,80%{transform:translate(4px)}30%,50%,70%{transform:translate(-8px)}40%,60%{transform:translate(8px)}}#board .letter{border:2px solid #ccc;border:2px solid var(--letter-border-color);display:inline-block;min-width:2em;min-height:2em;text-align:center;line-height:1.5em;margin:1px 2px;aspect-ratio:1;justify-content:center;align-items:center;display:flex}#board .row.error .letter{-webkit-animation:erroring .5s;animation:erroring .5s;-webkit-animation-delay:0s!important;animation-delay:0s!important}@-webkit-keyframes erroring{0%{border-color:#ccc;border-color:var(--letter-border-color)}50%{border-color:#f08080;border-color:var(--letter-error-border-color)}to{border-color:#ccc;border-color:var(--letter-border-color)}}@keyframes erroring{0%{border-color:#ccc;border-color:var(--letter-border-color)}50%{border-color:#f08080;border-color:var(--letter-error-border-color)}to{border-color:#ccc;border-color:var(--letter-border-color)}}#board .letter ruby,#board .letter ruby *{line-height:1em}#board .letter.lettered{-webkit-animation:appear .2s ease-in-out;animation:appear .2s ease-in-out}@-webkit-keyframes appear{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes appear{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}#board .letter.\\1f7e9 {background-color:green;background-color:var(--correct-color)}#board .letter.\\1f7e7 {background-color:orange;background-color:var(--present-color)}#board .letter.\\2b1c {background-color:gray;background-color:var(--absent-color)}#board .letter.\\1f7e9 ,#board .letter.\\1f7e7 ,#board .letter.\\2b1c {color:#fff;color:var(--letter-state-text-color);border-color:rgba(0,0,0,.2);border-color:var(--letter-state-border-color);transition:all .3s .15s;-webkit-animation:flip .3s ease-in-out both;animation:flip .3s ease-in-out both}@-webkit-keyframes flip{0%{transform:rotateX(0)}to{transform:rotateX(180deg)}}@keyframes flip{0%{transform:rotateX(0)}to{transform:rotateX(180deg)}}#board .letter.\\1f7e9 >*,#board .letter.\\1f7e7 >*,#board .letter.\\2b1c >*{-webkit-animation:flip-back .3s ease-in-out both;animation:flip-back .3s ease-in-out both}@-webkit-keyframes flip-back{0%{transform:rotateX(0)}to{transform:rotateX(-180deg)}}@keyframes flip-back{0%{transform:rotateX(0)}to{transform:rotateX(-180deg)}}#board .letter.\\1f308 +.letter.\\1f308 ,#board .letter.\\1f308 +.letter.\\1f308 >*{-webkit-animation-delay:.1s;animation-delay:.1s}#board .letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 ,#board .letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 >*{-webkit-animation-delay:.2s;animation-delay:.2s}#board .letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 ,#board .letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 +.letter.\\1f308 >*{-webkit-animation-delay:.3s;animation-delay:.3s}#keyboard{background-color:#fafafa;background-color:var(--keyboard-bg-color);border-top:1px solid #ccc;border-top:1px solid var(--keyboard-border-color);-webkit-animation:keyboard-appear .5s ease-in-out both;animation:keyboard-appear .5s ease-in-out both}@-webkit-keyframes keyboard-appear{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes keyboard-appear{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}#keyboard .inner{padding:2px;margin-bottom:env(safe-area-inset-bottom);margin-left:env(safe-area-inset-left);margin-right:env(safe-area-inset-right)}#keyboard button{font-size:1.5em;margin:.1em;border:0;padding:.2em;background-color:#d3d6da;background-color:var(--key-bg-color);border-radius:.2em;cursor:pointer;box-shadow:inset 0 -2px 0 -1px rgba(0,0,0,.25);box-shadow:inset 0 -2px 0 -1px var(--key-shadow-color)}#keyboard button.\\2b1c {background-color:gray;background-color:var(--absent-color);color:#fff;color:var(--key-state-text-color)}#keyboard button.\\1f7e7 {background-color:orange;background-color:var(--present-color);color:#fff;color:var(--key-state-text-color)}#keyboard button.\\1f7e9 {background-color:green;background-color:var(--correct-color);color:#fff;color:var(--key-state-text-color)}#keyboard button:active{color:#fff;color:var(--key-active-text-color);background-color:#686868;background-color:var(--key-active-bg-color)}#keyboard .row{display:flex;justify-content:space-between;max-width:30em;margin:auto}#keyboard .row button{padding:.3em 1em;font-size:1em;text-transform:uppercase;font-weight:700}#keyboard .row button.stuck{background-color:transparent;opacity:.6;font-size:.8em;margin-top:1em;padding:0}#keyboard .row button.stuck:hover{opacity:1}#keyboard .row button.stuck:active{color:inherit}#modal{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(255,255,255,.7);background-color:var(--modal-backdrop-color);display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:all 1s}#modal.appear{pointer-events:auto;opacity:1}#modal h2{margin:0;padding:0}#modal .content{border-radius:8px;box-shadow:0 4px 23px rgba(0,0,0,.2);box-shadow:0 4px 23px 0 var(--modal-shadow-color);background-color:#fff;background-color:var(--modal-bg-color);margin:1em;padding:1em;position:relative;width:calc(100% - 2em);max-width:30em;transform:translateY(80vh);transition:transform .3s ease-in-out;overflow:auto}#modal.appear .content{transition-delay:.3s;transform:translateY(0)}#modal .close{position:absolute;top:.25em;right:.25em;cursor:pointer;z-index:1}#modal .answer{font-size:2em}#modal .results{white-space:pre-wrap;padding:1em;margin-bottom:.5em;background-color:#eee;background-color:var(--results-bg-color);border-radius:.2em;line-height:1.05em;text-align:left;font-size:.8em}#modal a.button,#modal button,#info-modal button{color:green;color:var(--button-text-color);background-color:rgba(0,128,0,.176);background-color:var(--button-bg-color);font-size:1.5em;margin:.2em 0;border-radius:.5em;padding:.5em 1em;font-size:1em;text-transform:uppercase;font-weight:700;cursor:pointer;border:0;font-size:.8em}#modal button:active,#info-modal button:active{background-color:rgba(0,128,0,.43);background-color:var(--button-active-bg-color)}#modal button#share{color:#fff;color:var(--button-strong-text-color);background-color:green;background-color:var(--button-strong-bg-color)}#modal a.tweet{color:#fff;color:var(--button-strong-text-color);background-color:#1da1f2;background-color:var(--twitter-color)}#modal .idiom-code{font-size:16px;border:0;padding:.2em;border-radius:.5em;width:10ex;text-align:center;background-color:#fff;background-color:var(--text-field-bg-color);border:1px solid rgba(0,128,0,.432);border:1px solid var(--text-field-border-color);font-weight:700}#modal .footer{margin-top:1em}.countdown{font-feature-settings:"tnum";font-variant-numeric:tabular-nums;font-weight:700}#info-modal{pointer-events:none;opacity:0;position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(255,255,255,.7);background-color:var(--modal-backdrop-color);-webkit-backdrop-filter:blur(10px) saturate(180%);backdrop-filter:blur(10px) saturate(180%);transition:opacity .3s;z-index:100;overflow:auto;display:flex}#info-modal.appear{pointer-events:auto;opacity:1}#info-modal .content{max-width:30em;margin:auto;padding:1.5em 1em 1em;text-align:left;font-size:.9em}#info-modal h2{margin-top:0;padding-top:0;font-size:1em}#info-modal ul{margin-left:0;padding-left:1.2em}#info-modal .close{position:absolute;top:.25em;right:.25em;cursor:pointer;z-index:1}#info-modal button.large{font-size:1.2em}a.button{display:inline-block;text-decoration:none}a.button.strong{font-size:1em!important;border:2px dashed!important}#debugging-container{margin-top:2em}#debugging-container summary{font-weight:700;color:rgba(0,0,0,.5);color:var(--text-insignificant-color);cursor:pointer;margin-bottom:.5em}@media (max-height: 480px){#board{font-size:1.25em}#keyboard .keys{white-space:nowrap;overflow-x:auto}#keyboard .row button{font-size:.8em;padding:.1em 1em}#keyboard .row button svg{transform:scale(.8)}}@media (max-height: 500px){#board{font-size:1.5em}#keyboard button{font-size:1.25em;padding:.15em}#keyboard .row button{font-size:.9em;padding:.2em 1em}#keyboard .row button svg{transform:scale(.9)}}@media (min-height: 700px){#board{justify-content:center;font-size:1.85em}header a,header button{font-size:1em}header h1{font-size:1.2em}}@media (min-height: 750px){#board{font-size:1.95em}}@media (min-height: 800px){#keyboard .inner{padding-top:5px;padding-bottom:5px}#keyboard button{padding-top:.3em;padding-bottom:.3em}}@media (min-height: 850px){#keyboard .inner{padding-top:10px;padding-bottom:10px}#keyboard button{padding-top:.4em;padding-bottom:.4em}}@media (min-width: 500px){#modal .content{padding:2em}#keyboard .inner{padding-left:5px;padding-right:5px}#keyboard button{padding-left:.35em;padding-right:.35em}}@media (min-width: 600px){#keyboard .inner{padding-left:10px;padding-right:10px}#keyboard button{padding-left:.5em;padding-right:.5em}}\n',document.head.appendChild(l),System.register(["./vendor-legacy.ff95538a.js","./pinyin-legacy.b7161ba0.js","./all-idioms-legacy.abed5233.js","./game-idioms-legacy.c8cfa8ba.js"],(function(){"use strict";var r,n,i,c,l,d,s,u,m,b,f,h,g,p,v,y,k;return{setters:[function(e){r=e.j,n=e.a,i=e.F,c=e.u,l=e.l,d=e.y,s=e.d,u=e.s,m=e.T,b=e.t,f=e.i,h=e.B,g=e.b,p=e.S},function(e){v=e.p},function(e){y=e.i},function(e){k=e.d}],execute:function(){var w=r,x=n,z=i,C=function(e){return v(e,{segment:!0,group:!0}).flat().join(" ").trim()},S=b,I=function(e){try{return localStorage.getItem(e)}catch(o){return null}},L=function(e,o){try{return localStorage.setItem(e,o)}catch(r){return null}},P=function(e){try{return localStorage.removeItem(e)}catch(o){return null}},j=y.split("\n"),T=k.slice(1).map((function(e){return{id:e[0],idiom:e[1]}})),A=20,D="cywd-";window.clearGames=function(){for(var e=0;e<localStorage.length;e++){var o=localStorage.key(e);o.startsWith(D)&&localStorage.removeItem(o)}},window.allGames=function(){for(var e=new Map,o=0;o<localStorage.length;o++){var r=localStorage.key(o);if(r.startsWith(D)){var t=JSON.parse(localStorage.getItem(r));e.set(r.replace(D,""),t)}}return e};var O=function(e,o){var r="string"==typeof o?o.split(""):o,t="string"==typeof e?e.split(""):e,n=r.length,a=Array.from({length:n},(function(){return"⬜"}));if(n!==t.length)throw new Error("idioms must have the same length");for(var i=[],c=0;c<n;c++){r[c]===t[c]&&(a[c]="🟩",i.push(c))}for(var l=[],d=0;d<n;d++){var s=r[d];if(s!==t[d]){var u=t.indexOf(s);-1===u||i.includes(u)||l.includes(u)||(a[d]="🟧",l.push(u))}}return a};window.getIdiomStates=O;var M=function(e){var o=e.some((function(e){return!!e.length&&e.every((function(e){return"🟩"===e}))}));if(o)return"won";var r=e[e.length-1],t=!!r.length&&r.every((function(e){return"🟩"!==e}));return t?"lost":null},R=function(){return Array.from({length:6},(function(){return{v:Array.from({length:4},(function(){return""})),s:!1}}))},E=function e(o,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=r||new Set;i.add(o);var c=t||new Set,l=o.split("");l.forEach((function(e){return c.add(e)}));var d=0,s=function(e){var o=l[(e+1)%4],r=T.find((function(e){var r=e.idiom;return!i.has(r)&&r.includes(o)}));if(r){for(var t=0;t<r.idiom.length;t++)if(c.add(r.idiom[t]),c.size>=A)return"break|lettersCycle";i.add(r.idiom),d=0}else{if(d>=5)return"break|lettersCycle";d+=1}};e:for(var u=0;u<T.length;u++){var m=s(u);if("break|lettersCycle"===m)break e}if(c.size<A||i.size<6){var b=a(i)[++n];if(b){var f=e(b,i,c,n),h=f.passedIdioms,g=f.keys;i=h,c=g}}if(c.size<A||i.size<6){var p=T[Math.floor(Math.random()*T.length)].idiom;if(p){var v=e(p,i,c,0),y=v.passedIdioms,k=v.keys;i=y,c=k}}if(c.size<A||i.size<6){var w,x=null===(w=T.find((function(e){return e.idiom===o})))||void 0===w?void 0:w.id;console.error(x,{possibleIdioms:i.size,keySize:c.size,consecutiveFailures:d})}return{passedIdioms:i,keys:c}},G=function(e){return x("svg",t(t({viewBox:"0 0 20 20",fill:"currentColor"},e),{},{children:[w("title",{children:"▶️"}),w("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"})]}))},N=function(e){return x("svg",t(t({viewBox:"0 0 24 24"},e),{},{children:[w("title",{children:"✖️"}),w("path",{fill:"currentColor",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]}))},H=new Date(2022,0,27),B=function(){var e=(new Date).setHours(0,0,0,0)-H,o=Math.floor(e/864e5);return T[Math.max(0,o%T.length)]},Y=function(){var e=c().t,r=(new Date).setHours(0,0,0,0)+864e5,t=new Date(+H+864e5);r<t&&(r=t);var n=o(l("00"),2),a=n[0],i=n[1],s=o(l("00"),2),u=s[0],m=s[1],b=o(l("00"),2),f=b[0],h=b[1],g=o(l(!1),2),p=g[0],v=g[1];return d((function(){var e=setInterval((function(){var o=r-new Date;if(o<=0)return v(!0),void clearInterval(e);i(Math.floor(o/36e5).toString().padStart(2,"0")),m(Math.floor(o/6e4%60).toString().padStart(2,"0")),h(Math.floor(o/1e3%60).toString().padStart(2,"0"))}),1e3);return function(){return clearInterval(e)}}),[]),p?w("a",{href:"./",children:e("ui.countdownNow")}):x("time",{class:"countdown",children:[a,":",u,":",f]})},W=function(e){var o=e.code,r=e.url,t=c().t;return o&&w("input",{readOnly:!0,value:o,class:"idiom-code",onClick:function(e){var n;e.target.focus(),e.target.select(),null!==(n=navigator.clipboard)&&void 0!==n&&n.writeText?navigator.clipboard.writeText(r||o).then((function(){alert(t("ui.copiedURL"))})).catch((function(e){})):(S(r||o),alert(t("ui.copiedURL")))}})},_="matchMedia"in window&&"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media;var U={about:{about1:"<0>Built</0> by <1>Chee Aun</1>. <2>Wordle</2> © <3>Josh Wardle</3>.",heading:"About"},app:{description:"Wordle, for Chinese idioms - 成语 (chéngyǔ). Guess the idiom in 6 tries.",title:"Chengyu Wordle"},common:{choose:"Choose",enter:"Enter",play:"Play",random:"Random",share:"Share",tweet:"Tweet"},debugging:{clearDB:"Clear database",confirmClearDB:"Are you sure?",confirmResetGame:"Are you sure?",heading:"Debugging",resetGame:"Reset current idiom game"},feedback:{githubDiscussions:"<0>GitHub Discussions</0> (for developers)",githubIssues:"<0>GitHub Issues</0> (for bugs)",heading:"Feedback",telegram:"@cheeaun on Telegram",telegramGroup:"Telegram Group",twitter:"@cheeaun on Twitter"},glossary:{baidu:"Baidu",zdic:"ZDIC"},hints:{abbreviatedPinyin:"✨ Abbreviated pinyin: {{pinyinHint}}",absentLetter:"❌ The letter {{letter}} ({{pinyin}}) is NOT in the idiom.",presentLetter:"✅ The letter {{letter}} ({{pinyin}}) is in the idiom."},howToPlay:{heading:"How to play",how1:"Guess the idiom in 6 tries.",how2:"Each guess must be a valid 4-letter idiom. Hit the enter button to submit.",how3:"After each guess, the color of the tiles will change to show how close your guess was to the idiom.",how4:"A new idiom will be available every day.",spotAbsent:"Gray = not in any spot",spotCorrect:"Green = correct spot",spotPresent:"Yellow = wrong spot"},ui:{confirmRandom:"Are you sure you want to start a new random game?",copiedResults:"Copied results to clipboard",copiedURL:"Copied URL to clipboard",countdownNow:"Now!",hint:"I'm stuck",nextIdiom:"Next Idiom: <0/>",playTodayGame:"Play today's game!",promptIdiom:"Enter idiom ID/URL:",startPlay:"Let's play!"}},X={about:{about1:"由 <1>志安</1> <0>建造</0>。 <2>Wordle</2> © <3>Josh Wardle</3>。",heading:"关于"},app:{description:"Wordle，用于汉语成语——成语（chéngyǔ）。在 6 次尝试中猜出成语。",title:"成语Wordle"},common:{choose:"选择",enter:"Enter",play:"玩",random:"随机的",share:"分享",tweet:"鸣叫"},debugging:{clearDB:"清除数据库",confirmClearDB:"你确定吗？",confirmResetGame:"你确定吗？",heading:"调试",resetGame:"重置当前的成语游戏"},feedback:{githubDiscussions:"<0>GitHub 讨论</0>（针对开发者）",githubIssues:"<0>GitHub 问题</0>（针对错误）",heading:"回馈",telegram:"电报上的 @cheeaun",telegramGroup:"电报群",twitter:"推特上的 @cheeaun"},glossary:{baidu:"百度",zdic:"汉典"},hints:{abbreviatedPinyin:"✨ 缩写拼音：{{pinyinHint}}",absentLetter:"❌ 成语中没有字母 {{letter}} ({{pinyin}})。",presentLetter:"✅ 字母 {{letter}} ({{pinyin}}) 在成语中。"},howToPlay:{heading:"怎么玩",how1:"在 6 次尝试中猜出成语。",how2:"每个猜测都必须是有效的 4 字母习语。点击回车按钮提交。",how3:"每次猜测后，图块的颜色会发生变化，以显示您的猜测与成语的接近程度。",how4:"每天都会有一个新的成语出现。",spotAbsent:"灰色 = 不在任何地方",spotCorrect:"绿色 = 正确位置",spotPresent:"黄色 = 错误的位置"},ui:{confirmRandom:"您确定要开始新的随机游戏吗？",copiedResults:"将结果复制到剪贴板",copiedURL:"将 URL 复制到剪贴板",countdownNow:"现在！",hint:"我被困住了",nextIdiom:"下一个成语：<0/>",playTodayGame:"玩今天的游戏！",promptIdiom:"输入成语 ID/URL：",startPlay:"让我们玩！"}};f.use(h).use(g).init({resources:{en:{translation:U},zh:{translation:X}},fallbackLng:"en",debug:/localhost/i.test(location.hostname),detection:{lookupLocalStorage:"locale",lookupCookie:"locale"},interpolation:{escapeValue:!1}}).then((function(e){var o=function(){document.documentElement.lang=f.resolvedLanguage,document.title=document.querySelector('meta[name="title"]').content=e("app.title"),document.querySelector('meta[name="description"]').content=e("app.description")};f.on("languageChanged",o),o()})),p(w((function(){var r,t=c(),n=t.t,i=t.i18n,b=o(l(I("".concat(D,"colorScheme"))||"auto"),2),f=b[0],h=b[1];d((function(){if(_){var e=document.querySelector("html");"dark"===f?(e.classList.add("dark-mode"),e.classList.remove("light-mode")):"light"===f?(e.classList.add("light-mode"),e.classList.remove("dark-mode")):e.classList.remove("dark-mode","light-mode")}}),[f]);var g=o(l(I("".concat(D,"skipFirstTime"))||!1),2),p=g[0],v=g[1],y=o(l(T.find((function(e){return e.id===location.hash.slice(1)}))||B()),2),k=y[0],A=y[1];d((function(){window.addEventListener("hashchange",(function(){A(T.find((function(e){return e.id===location.hash.slice(1)}))||B())}))}),[]);var H=o(l((null===(r=JSON.parse(I("".concat(D).concat(k.id))))||void 0===r?void 0:r.board)||R()),2),U=H[0],X=H[1];d((function(){var e=I("".concat(D).concat(k.id));X(e?JSON.parse(e).board:R())}),[k.id]);var F=s((function(){return U.map((function(e,o){return e.s?O(k.idiom,e.v):[]}))}),[U]);d((function(){U&&U.some((function(e){return e.v.some((function(e){return e}))}))&&L("".concat(D).concat(k.id),JSON.stringify({board:U,gameState:M(F)}))}),[F]);var J=o(l(null),2),K=J[0],q=J[1];d((function(){q(null),fetch("https://baidu-hanyu-idiom.cheeaun.workers.dev/?wd=".concat(k.idiom)).then((function(e){return e.json()})).then((function(e){e.definition&&q(e.definition)})).catch((function(){}))}),[k.idiom]);var V=(null==U?void 0:U.findIndex((function(e){return!1===e.s})))||0,Z=o(l(!1),2),$=Z[0],Q=Z[1],ee=o(l(!1),2),oe=ee[0],re=ee[1],te=o(l(!1),2),ne=te[0],ae=te[1],ie=s((function(){var e=E(k.idiom).keys,o=j.filter((function(o){return o.split("").every((function(o){return e.has(o)}))})).map((function(e){return"".concat(e," (").concat(C(e),")")})).sort((function(e,o){return e.localeCompare(o,"zh")}));return console.groupCollapsed&&(console.groupCollapsed("".concat(o.length," Possible Idioms [").concat(k.id,"] (").concat(e.size," keys):")),console.log("".concat(o.map((function(e,o){return"".concat(o+1,". ").concat(e)})).join("\n"),"\n\n🚨SPOILER🚨 Type 'ANSWER' to see the answer.")),console.groupEnd()),window.ANSWER="".concat(k.idiom," (").concat(C(k.idiom),")"),a(e).sort((function(e,o){return e.localeCompare(o,"zh")}))}),[k.idiom]),ce=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(U[V]&&!me){var r=a(U),t=r[V].v.findIndex((function(e){return""===e}));o&&(-1===t?t=3:t--),-1!==t&&(r[V].v[t]=e,X(r))}},le=new Set,de=new Set,se=new Set;U.forEach((function(e,o){e.s&&e.v.forEach((function(e,r){var t=F[o][r];"🟩"===t?le.add(e):"🟧"===t?de.add(e):"⬜"===t&&se.add(e)}))}));var ue=function(){if(!me){console.log("handleEnter"),Q(!1);var e=U[V];if(e){var o=e.v.join(""),r=j.includes(o);r?(e.s=!0,X(a(U))):setTimeout((function(){Q(!0)}),10),console.log({currentIdiom:o,valid:r})}}},me=s((function(){return M(F)}),[F]);d((function(){re("won"===me?"won":"lost"===me&&"lost")}),[me]);var be=function(){if(!me){var e=a(U),o=e[V];if(o&&!o.s){for(var r=-1,t=o.v.length-1;t>=0;t--)if(""!==o.v[t]){r=t;break}-1!==r&&(o.v[r]="",X(e))}}};d((function(){var e=function(e){if(!me&&!e.metaKey&&!e.ctrlKey&&e.key){var o=e.key.toLowerCase();if("enter"===o)e.preventDefault(),e.stopPropagation(),ue();else if("backspace"===o)e.preventDefault(),be();else if(/^arrow(left|right)/i.test(o)){var r=a(U[V].v).reverse().find((function(e){return""!==e}));if(r){var t=C(r)[0],n=ie.filter((function(e){return C(e)[0]===t}));if(n.length<=1)return;var i=n.indexOf(r),c="arrowright"===o?n[(i+1)%n.length]:n[(i+n.length-1)%n.length];c&&ce(c,!0)}}else{var l=ie.find((function(e){return 0===C(e)[0].localeCompare(o,"en",{sensitivity:"base"})}));l&&(e.preventDefault(),ce(l))}}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[ie,U,V,me]);var fe,he,ge=location.origin+location.pathname+"#"+k.id,pe=F.map((function(e){return e.join("")})).join("\n").trim(),ve="won"===me?pe.split("\n").length:"X",ye="".concat(n("app.title")," [").concat(k.id,"] ").concat(ve,"/6\n\n").concat(pe),ke="".concat(ye,"\n\n").concat(ge),we=s((function(){var e=[],o=k.idiom.split(""),r=ie.filter((function(e){return!o.includes(e)&&!se.has(e)})).slice(0,-1).slice(0,3).map((function(e){return n("hints.absentLetter",{letter:e,pinyin:C(e)})})).sort((function(){return Math.random()-.5}));e.push.apply(e,a(r)),null!=K&&K.zh&&o.filter((function(e){return K.zh.includes(e)})).length<=2&&e.push("ℹ️ ".concat(K.zh)),null!=K&&K.en&&e.push("ℹ️ ".concat(K.en));var t=o.filter((function(e){return!le.has(e)&&!de.has(e)})).slice(0,-1).map((function(e){return n("hints.presentLetter",{letter:e,pinyin:C(e)})})).sort((function(){return Math.random()-.5}));e.push.apply(e,a(t));var i=o.map((function(e){return C(e)[0]})).join("").normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.push(n("hints.abbreviatedPinyin",{pinyinHint:i})),e}),[le,k.idiom,K]),xe=u(0);return d((function(){xe.current=0}),[k.idiom]),x(z,{children:[w("header",{children:x("div",{class:"inner",children:[w("button",{type:"button",onClick:function(){ae(!0)},children:x("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[w("title",{children:"ℹ️"}),w("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})}),w("h1",{children:n("app.title")}),w("button",{type:"button",onClick:function(){re(me||"play")},children:n("common.play")})]})}),w("div",{id:"board",children:U.map((function(e,o){return w("div",{className:"row ".concat(V===o&&$?"error":""," ").concat(V===o?"current":""),children:e.v.map((function(e,r){var t;return w("div",{className:"letter ".concat(e?"lettered":""," ").concat(null!==(t=F[o][r])&&void 0!==t?t:""," ").concat(F[o][r]?"🌈":""),children:x("ruby",{children:[e||w("span",{style:{opacity:0},children:"一"}),w("rp",{children:"("}),w("rt",{children:C(e)||w(z,{children:" "})}),w("rp",{children:")"})]})},r)}))},o)}))}),w("div",{id:"keyboard",children:x("div",{class:"inner",children:[w("div",{class:"keys",children:ie.map((function(e,o){return w("button",{class:"".concat(le.has(e)?"🟩":""," ").concat(de.has(e)?"🟧":""," ").concat(se.has(e)?"⬜":""),type:"button",tabIndex:-1,onClick:function(){ce(e)},children:x("ruby",{children:[e,w("rp",{children:"("}),w("rt",{children:C(e)}),w("rp",{children:")"})]})})}))}),x("div",{class:"row",children:[w("button",{type:"button",onClick:ue,tabIndex:-1,children:n("common.enter")}),w("button",{type:"button",class:"stuck",onClick:function(){if(!me){var e=we[xe.current];xe.current=(xe.current+1)%we.length,alert(e)}},children:n("ui.hint")}),w("button",{type:"button",onClick:be,tabIndex:-1,children:w("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:w("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})})})]})]})}),x("div",{id:"modal",class:oe?"appear":"",onClick:function(e){e.target===e.currentTarget&&re(null)},children:[w(N,{height:"24",width:"24",class:"close",onClick:function(){re(null)}}),x("div",{class:"content",children:[w("h2",{children:"won"===oe?"🎉🎉🎉":"lost"===oe?"😭😭😭":"👾👾👾"}),"play"===oe&&w("p",{children:w(W,{code:k.id,url:ge})}),/(won|lost)/i.test(oe)&&x(z,{children:[x("p",{children:[w("b",{class:"answer",children:x("ruby",{children:[k.idiom,w("rp",{children:"("}),w("rt",{children:C(k.idiom)}),w("rp",{children:")"})]})}),x("div",{class:"definition",children:[null!=K&&K.zh?K.zh.split("").map((function(e){return C(e)===e?e:x("ruby",{children:[e,w("rp",{children:"("}),w("rt",{children:C(e)}),w("rp",{children:")"})]})})):"",(null==K?void 0:K.zh)&&(null==K?void 0:K.en)&&w("br",{}),null==K?void 0:K.en]}),x("small",{children:[x("a",{href:"https://hanyu.baidu.com/s?wd=".concat(k.idiom,"&from=zici"),target:"_blank",children:["📖 ",n("glossary.baidu")]}),"   ",x("a",{href:"https://www.zdic.net/hans/".concat(k.idiom),target:"_blank",children:["📖 ",n("glossary.zdic")]})]})]}),w("div",{class:"results",children:ke}),x("button",{id:"share",onClick:(fe=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!/edge?\//i.test(navigator.userAgent)&&!/windows/.test(navigator.userAgent)){e.next=3;break}throw new Error("Web Share API not working well here");case 3:return e.next=5,navigator.share({text:ke});case 5:e.next=19;break;case 7:return e.prev=7,e.t0=e.catch(0),e.prev=9,e.next=12,navigator.clipboard.writeText(ke);case 12:alert(n("ui.copiedResults")),e.next=19;break;case 15:e.prev=15,e.t1=e.catch(9),S(ke),alert(n("ui.copiedResults"));case 19:case"end":return e.stop()}}),e,null,[[0,7],[9,15]])})),he=function(){var o=this,r=arguments;return new Promise((function(t,n){var a=fe.apply(o,r);function i(o){e(a,t,n,i,c,"next",o)}function c(o){e(a,t,n,i,c,"throw",o)}i(void 0)}))},function(){return he.apply(this,arguments)}),children:[n("common.share")," ",w("svg",{height:"16",width:"16",viewBox:"0 0 24 24",children:w("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"})})]}),"  ",w("a",{class:"button tweet",href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(ke)),target:"_blank",children:x("svg",{height:"16",width:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[w("title",{children:n("common.tweet")}),w("path",{fill:"currentColor",d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]})}),"  ",w(W,{code:k.id,url:ge})]}),x("div",{class:"footer",children:[/won|lost/i.test(me)&&B().id===k.id&&w("p",{children:w("big",{children:w(m,{i18nKey:"ui.nextIdiom",components:[w(Y,{})]})})}),x("div",{children:[B().id!==k.id&&x(z,{children:[x("a",{href:"./",class:"button strong",children:[w(G,{width:20,height:20})," ",n("ui.playTodayGame")]}),w("br",{})]}),x("button",{type:"button",onClick:function(){if(confirm(n("ui.confirmRandom"))){var e=Math.round(Math.random()*(T.length-1)),o=T[e];location.hash="#".concat(o.id),re(null)}},children:[w(G,{width:20,height:20})," ",n("common.random")]})," ",x("button",{type:"button",onClick:function(){var e=prompt(n("ui.promptIdiom"));try{e=new URL(e).hash.slice(1)}catch(r){}if(e){var o=T.find((function(o){return o.id===e}));o?(location.hash="#".concat(o.id),re(null)):alert("Invalid idiom ID")}},children:[w(G,{width:20,height:20})," ",n("common.choose")]})]})]})]})]}),x("div",{id:"info-modal",class:ne||!p?"appear":"",children:[p&&w(N,{height:"32",width:"32",class:"close",onClick:function(){ae(!1)}}),x("div",{class:"content",children:[_&&x("p",{class:"color-scheme-selector",children:[w("button",{type:"button",class:"dark"===f?"active":"",onClick:function(){L("".concat(D,"colorScheme"),"dark"),h("dark")},children:"🌑"})," ",w("button",{type:"button",class:"auto"===f?"active":"",onClick:function(){P("".concat(D,"colorScheme")),h("auto")},children:"🌓"})," ",w("button",{type:"button",class:"light"===f?"active":"",onClick:function(){L("".concat(D,"colorScheme"),"light"),h("light")},children:"🌕"})]})," ",x("p",{class:"locale-selector",children:["🌐"," ",w("a",{href:"./?lng=en",hreflang:"en",rel:"en"===i.resolvedLanguage?void 0:"alternate",class:"".concat("en"===i.resolvedLanguage?"selected":""),onClick:function(e){e.preventDefault(),i.changeLanguage("en")},children:"English"})," ","⋅"," ",w("a",{href:"./?lng=zh-CN",hreflang:"zh-CN",rel:"zh"===i.resolvedLanguage?void 0:"alternate",class:"".concat("zh"===i.resolvedLanguage?"selected":""),onClick:function(e){e.preventDefault(),i.changeLanguage("zh-CN")},children:"中文"})]}),w("h2",{children:n("howToPlay.heading")}),w("p",{children:n("howToPlay.how1")}),w("p",{children:n("howToPlay.how2")}),w("p",{children:n("howToPlay.how3")}),x("ul",{children:[x("li",{children:["🟩⬜⬜⬜ ",n("howToPlay.spotCorrect")]}),x("li",{children:["⬜🟧⬜⬜ ",n("howToPlay.spotPresent")]}),x("li",{children:["⬜⬜",w("span",{style:{filter:"contrast(0)"},children:"⬛"}),"⬜"," ",n("howToPlay.spotAbsent")]})]}),w("p",{children:n("howToPlay.how4")}),p?x(z,{children:[w("h2",{children:n("about.heading")}),w("p",{children:w(m,{i18nKey:"about.about1",components:[w("a",{href:"https://github.com/cheeaun/chengyu-wordle/",target:"_blank"}),w("a",{href:"https://cheeaun.com",target:"_blank"}),w("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank"}),w("a",{href:"https://powerlanguage.co.uk/",target:"_blank"})]})}),w("h2",{children:n("feedback.heading")}),x("ul",{children:[w("li",{children:w("a",{href:"https://t.me/+ykuhfiImLd1kNjk1",target:"_blank",children:n("feedback.telegramGroup")})}),w("li",{children:w(m,{i18nKey:"feedback.githubDiscussions",components:[w("a",{href:"https://github.com/cheeaun/chengyu-wordle/discussions",target:"_blank"})]})}),w("li",{children:w(m,{i18nKey:"feedback.githubIssues",components:[w("a",{href:"https://github.com/cheeaun/chengyu-wordle/issues",target:"_blank"})]})}),w("li",{children:w("a",{href:"https://twitter.com/cheeaun",target:"_blank",children:n("feedback.twitter")})}),w("li",{children:w("a",{href:"https://t.me/cheeaun",target:"_blank",children:n("feedback.telegram")})})]}),x("details",{id:"debugging-container",children:[x("summary",{children:[n("debugging.heading")," (","53d7e6c",")"]}),w("button",{type:"button",onClick:function(){confirm(n("debugging.confirmResetGame"))&&(P(D+k.id),location.reload())},children:n("debugging.resetGame")})," ",w("button",{type:"button",onClick:function(){confirm(n("debugging.confirmClearDB"))&&(clearGames(),location.reload())},children:n("debugging.clearDB")})]})]}):w("p",{children:x("button",{type:"button",class:"large",onClick:function(){ae(!1),L("cywd-skipFirstTime",1),v(!0)},children:[w(G,{width:"20",height:"20"})," ",n("ui.startPlay")]})})]})]})]})}),{}),document.getElementById("app"))}}}))}();
//# sourceMappingURL=index-legacy.f80bfeab.js.map
