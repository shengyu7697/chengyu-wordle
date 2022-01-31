var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,a=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))r.call(t,n)&&l(e,n,t[n]);return e},s=(e,i)=>t(e,n(i));export function __vite_legacy_guard(){import("data:text/javascript,")}import{j as c,a as d,F as h,u,l as p,y as m,d as g,s as f,T as w,t as y,i as b,B as v,b as k,S as C}from"./vendor.c6eac1f1.js";import{p as L}from"./pinyin.5987fa53.js";import{i as I}from"./all-idioms.effcc4de.js";import{d as z}from"./game-idioms.4b614f9d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const S=c,$=d,P=h,T=e=>L(e,{segment:!0,group:!0}).flat().join(" ").trim(),D=y,x=e=>{try{return localStorage.getItem(e)}catch(t){return null}},M=(e,t)=>{try{return localStorage.setItem(e,t)}catch(n){return null}},R=e=>{try{return localStorage.removeItem(e)}catch(t){return null}},G=I.split("\n"),A=z.slice(1).map((e=>({id:e[0],idiom:e[1]})));window.clearGames=()=>{for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);t.startsWith("cywd-")&&localStorage.removeItem(t)}},window.allGames=()=>{const e=new Map;for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n.startsWith("cywd-")){const t=JSON.parse(localStorage.getItem(n));e.set(n.replace("cywd-",""),t)}}return e};const E=(e,t)=>{const n="string"==typeof t?t.split(""):t,i="string"==typeof e?e.split(""):e,o=n.length,r=Array.from({length:o},(()=>"⬜"));if(o!==i.length)throw new Error("idioms must have the same length");const l=[];for(let s=0;s<o;s++){n[s]===i[s]&&(r[s]="🟩",l.push(s))}const a=[];for(let s=0;s<o;s++){const e=n[s];if(e!==i[s]){const t=i.indexOf(e);-1===t||l.includes(t)||a.includes(t)||(r[s]="🟧",a.push(t))}}return r};window.getIdiomStates=E;const N=e=>{if(e.some((e=>!!e.length&&e.every((e=>"🟩"===e)))))return"won";const t=e[e.length-1];return!!t.length&&t.every((e=>"🟩"!==e))?"lost":null},j=()=>Array.from({length:6},(()=>({v:Array.from({length:4},(()=>"")),s:!1}))),O=(e,t,n,i=0)=>{var o;let r=t||new Set;r.add(e);let l=n||new Set;const a=e.split("");a.forEach((e=>l.add(e)));let s=0;e:for(let c=0;c<A.length;c++){const e=a[(c+1)%4],t=A.find((({idiom:t})=>!r.has(t)&&t.includes(e)));if(t){for(let e=0;e<t.idiom.length;e++)if(l.add(t.idiom[e]),l.size>=20)break e;r.add(t.idiom),s=0}else{if(s>=5)break e;s+=1}}if(l.size<20||r.size<6){const e=[...r][++i];if(e){const{passedIdioms:t,keys:n}=O(e,r,l,i);r=t,l=n}}if(l.size<20||r.size<6){const e=A[Math.floor(Math.random()*A.length)].idiom;if(e){const{passedIdioms:t,keys:n}=O(e,r,l,0);r=t,l=n}}if(l.size<20||r.size<6){const t=null==(o=A.find((t=>t.idiom===e)))?void 0:o.id;console.error(t,{possibleIdioms:r.size,keySize:l.size,consecutiveFailures:s})}return{passedIdioms:r,keys:l}},B=e=>$("svg",s(a({viewBox:"0 0 20 20",fill:"currentColor"},e),{children:[S("title",{children:"▶️"}),S("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"})]})),_=e=>$("svg",s(a({viewBox:"0 0 24 24"},e),{children:[S("title",{children:"✖️"}),S("path",{fill:"currentColor",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})),H=new Date(2022,0,27),W=()=>{const e=(new Date).setHours(0,0,0,0)-H,t=Math.floor(e/864e5);return A[Math.max(0,t%A.length)]},U=()=>{const{t:e}=u();let t=(new Date).setHours(0,0,0,0)+864e5;const n=new Date(+H+864e5);t<n&&(t=n);const[i,o]=p("00"),[r,l]=p("00"),[a,s]=p("00"),[c,d]=p(!1);return m((()=>{const e=setInterval((()=>{const n=t-new Date;if(n<=0)return d(!0),void clearInterval(e);o(Math.floor(n/36e5).toString().padStart(2,"0")),l(Math.floor(n/6e4%60).toString().padStart(2,"0")),s(Math.floor(n/1e3%60).toString().padStart(2,"0"))}),1e3);return()=>clearInterval(e)}),[]),c?S("a",{href:"./",children:e("ui.countdownNow")}):$("time",{class:"countdown",children:[i,":",r,":",a]})},K=({code:e,url:t})=>{const{t:n}=u();return e&&S("input",{readOnly:!0,value:e,class:"idiom-code",onClick:i=>{var o;i.target.focus(),i.target.select(),(null==(o=navigator.clipboard)?void 0:o.writeText)?navigator.clipboard.writeText(t||e).then((()=>{alert(n("ui.copiedURL"))})).catch((e=>{})):(D(t||e),alert(n("ui.copiedURL")))}})},F="matchMedia"in window&&"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media;var J={about:{about1:"<0>Built</0> by <1>Chee Aun</1>. <2>Wordle</2> © <3>Josh Wardle</3>.",heading:"About"},app:{description:"Wordle, for Chinese idioms - 成语 (chéngyǔ). Guess the idiom in 6 tries.",title:"Chengyu Wordle"},common:{choose:"Choose",enter:"Enter",play:"Play",random:"Random",share:"Share",tweet:"Tweet"},debugging:{clearDB:"Clear database",confirmClearDB:"Are you sure?",confirmResetGame:"Are you sure?",heading:"Debugging",resetGame:"Reset current idiom game"},feedback:{githubDiscussions:"<0>GitHub Discussions</0> (for developers)",githubIssues:"<0>GitHub Issues</0> (for bugs)",heading:"Feedback",telegram:"@cheeaun on Telegram",telegramGroup:"Telegram Group",twitter:"@cheeaun on Twitter"},glossary:{baidu:"Baidu",zdic:"ZDIC"},hints:{abbreviatedPinyin:"✨ Abbreviated pinyin: {{pinyinHint}}",absentLetter:"❌ The letter {{letter}} ({{pinyin}}) is NOT in the idiom.",presentLetter:"✅ The letter {{letter}} ({{pinyin}}) is in the idiom."},howToPlay:{heading:"How to play",how1:"Guess the idiom in 6 tries.",how2:"Each guess must be a valid 4-letter idiom. Hit the enter button to submit.",how3:"After each guess, the color of the tiles will change to show how close your guess was to the idiom.",how4:"A new idiom will be available every day.",spotAbsent:"Gray = not in any spot",spotCorrect:"Green = correct spot",spotPresent:"Yellow = wrong spot"},ui:{confirmRandom:"Are you sure you want to start a new random game?",copiedResults:"Copied results to clipboard",copiedURL:"Copied URL to clipboard",countdownNow:"Now!",hint:"I'm stuck",nextIdiom:"Next Idiom: <0/>",playTodayGame:"Play today's game!",promptIdiom:"Enter idiom ID/URL:",startPlay:"Let's play!"}};var q={about:{about1:"由 <1>志安</1> <0>建造</0>。 <2>Wordle</2> © <3>Josh Wardle</3>。",heading:"关于"},app:{description:"Wordle，用于汉语成语——成语（chéngyǔ）。在 6 次尝试中猜出成语。",title:"成语Wordle"},common:{choose:"选择",enter:"Enter",play:"玩",random:"随机的",share:"分享",tweet:"鸣叫"},debugging:{clearDB:"清除数据库",confirmClearDB:"你确定吗？",confirmResetGame:"你确定吗？",heading:"调试",resetGame:"重置当前的成语游戏"},feedback:{githubDiscussions:"<0>GitHub 讨论</0>（针对开发者）",githubIssues:"<0>GitHub 问题</0>（针对错误）",heading:"回馈",telegram:"电报上的 @cheeaun",telegramGroup:"电报群",twitter:"推特上的 @cheeaun"},glossary:{baidu:"百度",zdic:"汉典"},hints:{abbreviatedPinyin:"✨ 缩写拼音：{{pinyinHint}}",absentLetter:"❌ 成语中没有字母 {{letter}} ({{pinyin}})。",presentLetter:"✅ 字母 {{letter}} ({{pinyin}}) 在成语中。"},howToPlay:{heading:"怎么玩",how1:"在 6 次尝试中猜出成语。",how2:"每个猜测都必须是有效的 4 字母习语。点击回车按钮提交。",how3:"每次猜测后，图块的颜色会发生变化，以显示您的猜测与成语的接近程度。",how4:"每天都会有一个新的成语出现。",spotAbsent:"灰色 = 不在任何地方",spotCorrect:"绿色 = 正确位置",spotPresent:"黄色 = 错误的位置"},ui:{confirmRandom:"您确定要开始新的随机游戏吗？",copiedResults:"将结果复制到剪贴板",copiedURL:"将 URL 复制到剪贴板",countdownNow:"现在！",hint:"我被困住了",nextIdiom:"下一个成语：<0/>",playTodayGame:"玩今天的游戏！",promptIdiom:"输入成语 ID/URL：",startPlay:"让我们玩！"}};b.use(v).use(k).init({resources:{en:{translation:J},zh:{translation:q}},fallbackLng:"en",debug:/localhost/i.test(location.hostname),detection:{lookupLocalStorage:"locale",lookupCookie:"locale"},interpolation:{escapeValue:!1}}).then((e=>{const t=()=>{document.documentElement.lang=b.resolvedLanguage,document.title=document.querySelector('meta[name="title"]').content=e("app.title"),document.querySelector('meta[name="description"]').content=e("app.description")};b.on("languageChanged",t),t()})),C(S((function(){var e;const{t:t,i18n:n}=u(),[i,o]=p(x("cywd-colorScheme")||"auto");m((()=>{if(!F)return;const e=document.querySelector("html");"dark"===i?(e.classList.add("dark-mode"),e.classList.remove("light-mode")):"light"===i?(e.classList.add("light-mode"),e.classList.remove("dark-mode")):e.classList.remove("dark-mode","light-mode")}),[i]);const[r,l]=p(x("cywd-skipFirstTime")||!1),[a,s]=p(A.find((e=>e.id===location.hash.slice(1)))||W());m((()=>{window.addEventListener("hashchange",(()=>{s(A.find((e=>e.id===location.hash.slice(1)))||W())}))}),[]);const[c,d]=p((null==(e=JSON.parse(x(`cywd-${a.id}`)))?void 0:e.board)||j());m((()=>{const e=x(`cywd-${a.id}`);d(e?JSON.parse(e).board:j())}),[a.id]);const h=g((()=>c.map(((e,t)=>e.s?E(a.idiom,e.v):[]))),[c]);m((()=>{c&&c.some((e=>e.v.some((e=>e))))&&M(`cywd-${a.id}`,JSON.stringify({board:c,gameState:N(h)}))}),[h]);const[y,b]=p(null);m((()=>{b(null),fetch(`https://baidu-hanyu-idiom.cheeaun.workers.dev/?wd=${a.idiom}`).then((e=>e.json())).then((e=>{e.definition&&b(e.definition)})).catch((()=>{}))}),[a.idiom]);const v=(null==c?void 0:c.findIndex((e=>!1===e.s)))||0,[k,C]=p(!1),[L,I]=p(!1),[z,H]=p(!1),J=g((()=>{const{keys:e}=O(a.idiom),t=G.filter((t=>t.split("").every((t=>e.has(t))))).map((e=>`${e} (${T(e)})`)).sort(((e,t)=>e.localeCompare(t,"zh")));return console.groupCollapsed&&(console.groupCollapsed(`${t.length} Possible Idioms [${a.id}] (${e.size} keys):`),console.log(`${t.map(((e,t)=>`${t+1}. ${e}`)).join("\n")}\n\n🚨SPOILER🚨 Type 'ANSWER' to see the answer.`),console.groupEnd()),window.ANSWER=`${a.idiom} (${T(a.idiom)})`,[...e].sort(((e,t)=>e.localeCompare(t,"zh")))}),[a.idiom]),q=(e,t=!1)=>{if(!c[v])return;if(Q)return;const n=[...c];let i=n[v].v.findIndex((e=>""===e));t&&(-1===i?i=3:i--),-1!==i&&(n[v].v[i]=e,d(n))},V=new Set,X=new Set,Y=new Set;c.forEach(((e,t)=>{e.s&&e.v.forEach(((e,n)=>{const i=h[t][n];"🟩"===i?V.add(e):"🟧"===i?X.add(e):"⬜"===i&&Y.add(e)}))}));const Z=()=>{if(Q)return;console.log("handleEnter"),C(!1);const e=c[v];if(!e)return;const t=e.v.join(""),n=G.includes(t);n?(e.s=!0,d([...c])):setTimeout((()=>{C(!0)}),10),console.log({currentIdiom:t,valid:n})},Q=g((()=>N(h)),[h]);m((()=>{I("won"===Q?"won":"lost"===Q&&"lost")}),[Q]);const ee=()=>{if(Q)return;const e=[...c],t=e[v];if(!t||t.s)return;let n=-1;for(let i=t.v.length-1;i>=0;i--)if(""!==t.v[i]){n=i;break}-1!==n&&(t.v[n]="",d(e))};m((()=>{const e=e=>{if(Q)return;if(e.metaKey||e.ctrlKey||!e.key)return;const t=e.key.toLowerCase();if("enter"===t)e.preventDefault(),e.stopPropagation(),Z();else if("backspace"===t)e.preventDefault(),ee();else if(/^arrow(left|right)/i.test(t)){const e=[...c[v].v].reverse().find((e=>""!==e));if(e){const n=T(e)[0],i=J.filter((e=>T(e)[0]===n));if(i.length<=1)return;const o=i.indexOf(e),r="arrowright"===t?i[(o+1)%i.length]:i[(o+i.length-1)%i.length];r&&q(r,!0)}}else{const n=J.find((e=>0===T(e)[0].localeCompare(t,"en",{sensitivity:"base"})));n&&(e.preventDefault(),q(n))}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[J,c,v,Q]);const te=location.origin+location.pathname+"#"+a.id,ne=h.map((e=>e.join(""))).join("\n").trim(),ie="won"===Q?ne.split("\n").length:"X",oe=`${`${t("app.title")} [${a.id}] ${ie}/6\n\n${ne}`}\n\n${te}`,re=g((()=>{const e=[],n=a.idiom.split(""),i=J.filter((e=>!n.includes(e)&&!Y.has(e))).slice(0,-1).slice(0,3).map((e=>t("hints.absentLetter",{letter:e,pinyin:T(e)}))).sort((()=>Math.random()-.5));e.push(...i),(null==y?void 0:y.zh)&&n.filter((e=>y.zh.includes(e))).length<=2&&e.push(`ℹ️ ${y.zh}`),(null==y?void 0:y.en)&&e.push(`ℹ️ ${y.en}`);const o=n.filter((e=>!V.has(e)&&!X.has(e))).slice(0,-1).map((e=>t("hints.presentLetter",{letter:e,pinyin:T(e)}))).sort((()=>Math.random()-.5));e.push(...o);const r=n.map((e=>T(e)[0])).join("").normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.push(t("hints.abbreviatedPinyin",{pinyinHint:r})),e}),[V,a.idiom,y]),le=f(0);return m((()=>{le.current=0}),[a.idiom]),$(P,{children:[S("header",{children:$("div",{class:"inner",children:[S("button",{type:"button",onClick:()=>{H(!0)},children:$("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[S("title",{children:"ℹ️"}),S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})}),S("h1",{children:t("app.title")}),S("button",{type:"button",onClick:()=>{I(Q||"play")},children:t("common.play")})]})}),S("div",{id:"board",children:c.map(((e,t)=>S("div",{className:`row ${v===t&&k?"error":""} ${v===t?"current":""}`,children:e.v.map(((e,n)=>{var i;return S("div",{className:`letter ${e?"lettered":""} ${null!=(i=h[t][n])?i:""} ${h[t][n]?"🌈":""}`,children:$("ruby",{children:[e||S("span",{style:{opacity:0},children:"一"}),S("rp",{children:"("}),S("rt",{children:T(e)||S(P,{children:" "})}),S("rp",{children:")"})]})},n)}))},t)))}),S("div",{id:"keyboard",children:$("div",{class:"inner",children:[S("div",{class:"keys",children:J.map(((e,t)=>S("button",{class:`${V.has(e)?"🟩":""} ${X.has(e)?"🟧":""} ${Y.has(e)?"⬜":""}`,type:"button",tabIndex:-1,onClick:()=>{q(e)},children:$("ruby",{children:[e,S("rp",{children:"("}),S("rt",{children:T(e)}),S("rp",{children:")"})]})})))}),$("div",{class:"row",children:[S("button",{type:"button",onClick:Z,tabIndex:-1,children:t("common.enter")}),S("button",{type:"button",class:"stuck",onClick:()=>{if(Q)return;const e=re[le.current];le.current=(le.current+1)%re.length,alert(e)},children:t("ui.hint")}),S("button",{type:"button",onClick:ee,tabIndex:-1,children:S("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:S("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})})})]})]})}),$("div",{id:"modal",class:L?"appear":"",onClick:e=>{e.target===e.currentTarget&&I(null)},children:[S(_,{height:"24",width:"24",class:"close",onClick:()=>{I(null)}}),$("div",{class:"content",children:[S("h2",{children:"won"===L?"🎉🎉🎉":"lost"===L?"😭😭😭":"👾👾👾"}),"play"===L&&S("p",{children:S(K,{code:a.id,url:te})}),/(won|lost)/i.test(L)&&$(P,{children:[$("p",{children:[S("b",{class:"answer",children:$("ruby",{children:[a.idiom,S("rp",{children:"("}),S("rt",{children:T(a.idiom)}),S("rp",{children:")"})]})}),$("div",{class:"definition",children:[(null==y?void 0:y.zh)?y.zh.split("").map((e=>T(e)===e?e:$("ruby",{children:[e,S("rp",{children:"("}),S("rt",{children:T(e)}),S("rp",{children:")"})]}))):"",(null==y?void 0:y.zh)&&(null==y?void 0:y.en)&&S("br",{}),null==y?void 0:y.en]}),$("small",{children:[$("a",{href:`https://hanyu.baidu.com/s?wd=${a.idiom}&from=zici`,target:"_blank",children:["📖 ",t("glossary.baidu")]}),"   ",$("a",{href:`https://www.zdic.net/hans/${a.idiom}`,target:"_blank",children:["📖 ",t("glossary.zdic")]})]})]}),S("div",{class:"results",children:oe}),$("button",{id:"share",onClick:async()=>{try{if(/edge?\//i.test(navigator.userAgent)||/windows/.test(navigator.userAgent))throw new Error("Web Share API not working well here");await navigator.share({text:oe})}catch(e){try{await navigator.clipboard.writeText(oe),alert(t("ui.copiedResults"))}catch(n){D(oe),alert(t("ui.copiedResults"))}}},children:[t("common.share")," ",S("svg",{height:"16",width:"16",viewBox:"0 0 24 24",children:S("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"})})]}),"  ",S("a",{class:"button tweet",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(oe)}`,target:"_blank",children:$("svg",{height:"16",width:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[S("title",{children:t("common.tweet")}),S("path",{fill:"currentColor",d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]})}),"  ",S(K,{code:a.id,url:te})]}),$("div",{class:"footer",children:[/won|lost/i.test(Q)&&W().id===a.id&&S("p",{children:S("big",{children:S(w,{i18nKey:"ui.nextIdiom",components:[S(U,{})]})})}),$("div",{children:[W().id!==a.id&&$(P,{children:[$("a",{href:"./",class:"button strong",children:[S(B,{width:20,height:20})," ",t("ui.playTodayGame")]}),S("br",{})]}),$("button",{type:"button",onClick:()=>{if(confirm(t("ui.confirmRandom"))){const e=Math.round(Math.random()*(A.length-1)),t=A[e];location.hash=`#${t.id}`,I(null)}},children:[S(B,{width:20,height:20})," ",t("common.random")]})," ",$("button",{type:"button",onClick:()=>{let e=prompt(t("ui.promptIdiom"));try{e=new URL(e).hash.slice(1)}catch(n){}if(e){const t=A.find((t=>t.id===e));t?(location.hash=`#${t.id}`,I(null)):alert("Invalid idiom ID")}},children:[S(B,{width:20,height:20})," ",t("common.choose")]})]})]})]})]}),$("div",{id:"info-modal",class:z||!r?"appear":"",children:[r&&S(_,{height:"32",width:"32",class:"close",onClick:()=>{H(!1)}}),$("div",{class:"content",children:[F&&$("p",{class:"color-scheme-selector",children:[S("button",{type:"button",class:"dark"===i?"active":"",onClick:()=>{M("cywd-colorScheme","dark"),o("dark")},children:"🌑"})," ",S("button",{type:"button",class:"auto"===i?"active":"",onClick:()=>{R("cywd-colorScheme"),o("auto")},children:"🌓"})," ",S("button",{type:"button",class:"light"===i?"active":"",onClick:()=>{M("cywd-colorScheme","light"),o("light")},children:"🌕"})]})," ",$("p",{class:"locale-selector",children:["🌐"," ",S("a",{href:"./?lng=en",hreflang:"en",rel:"en"===n.resolvedLanguage?void 0:"alternate",class:""+("en"===n.resolvedLanguage?"selected":""),onClick:e=>{e.preventDefault(),n.changeLanguage("en")},children:"English"})," ","⋅"," ",S("a",{href:"./?lng=zh-CN",hreflang:"zh-CN",rel:"zh"===n.resolvedLanguage?void 0:"alternate",class:""+("zh"===n.resolvedLanguage?"selected":""),onClick:e=>{e.preventDefault(),n.changeLanguage("zh-CN")},children:"中文"})]}),S("h2",{children:t("howToPlay.heading")}),S("p",{children:t("howToPlay.how1")}),S("p",{children:t("howToPlay.how2")}),S("p",{children:t("howToPlay.how3")}),$("ul",{children:[$("li",{children:["🟩⬜⬜⬜ ",t("howToPlay.spotCorrect")]}),$("li",{children:["⬜🟧⬜⬜ ",t("howToPlay.spotPresent")]}),$("li",{children:["⬜⬜",S("span",{style:{filter:"contrast(0)"},children:"⬛"}),"⬜"," ",t("howToPlay.spotAbsent")]})]}),S("p",{children:t("howToPlay.how4")}),r?$(P,{children:[S("h2",{children:t("about.heading")}),S("p",{children:S(w,{i18nKey:"about.about1",components:[S("a",{href:"https://github.com/cheeaun/chengyu-wordle/",target:"_blank"}),S("a",{href:"https://cheeaun.com",target:"_blank"}),S("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank"}),S("a",{href:"https://powerlanguage.co.uk/",target:"_blank"})]})}),S("h2",{children:t("feedback.heading")}),$("ul",{children:[S("li",{children:S("a",{href:"https://t.me/+ykuhfiImLd1kNjk1",target:"_blank",children:t("feedback.telegramGroup")})}),S("li",{children:S(w,{i18nKey:"feedback.githubDiscussions",components:[S("a",{href:"https://github.com/cheeaun/chengyu-wordle/discussions",target:"_blank"})]})}),S("li",{children:S(w,{i18nKey:"feedback.githubIssues",components:[S("a",{href:"https://github.com/cheeaun/chengyu-wordle/issues",target:"_blank"})]})}),S("li",{children:S("a",{href:"https://twitter.com/cheeaun",target:"_blank",children:t("feedback.twitter")})}),S("li",{children:S("a",{href:"https://t.me/cheeaun",target:"_blank",children:t("feedback.telegram")})})]}),$("details",{id:"debugging-container",children:[$("summary",{children:[t("debugging.heading")," (","53d7e6c",")"]}),S("button",{type:"button",onClick:()=>{confirm(t("debugging.confirmResetGame"))&&(R("cywd-"+a.id),location.reload())},children:t("debugging.resetGame")})," ",S("button",{type:"button",onClick:()=>{confirm(t("debugging.confirmClearDB"))&&(clearGames(),location.reload())},children:t("debugging.clearDB")})]})]}):S("p",{children:$("button",{type:"button",class:"large",onClick:()=>{H(!1),M("cywd-skipFirstTime",1),l(!0)},children:[S(B,{width:"20",height:"20"})," ",t("ui.startPlay")]})})]})]})]})}),{}),document.getElementById("app"));
//# sourceMappingURL=index.fc0beb4f.js.map
