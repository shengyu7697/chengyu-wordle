var de=Object.defineProperty,he=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var te=(n,l,i)=>l in n?de(n,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[l]=i,H=(n,l)=>{for(var i in l||(l={}))fe.call(l,i)&&te(n,i,l[i]);if(ee)for(var i of ee(l))me.call(l,i)&&te(n,i,l[i]);return n},P=(n,l)=>he(n,ue(l));import{j as pe,a as ge,F as we,l as C,y as S,d as A,p as ye,S as be}from"./vendor.cfb7979a.js";import{i as ve}from"./all-idioms.effcc4de.js";import{d as ke}from"./game-idioms.4b614f9d.js";const Ce=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&m(b)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};Ce();const e=pe,c=ge,D=we,I=n=>ye(n,{segment:!0,group:!0}).flat().join(" ").trim(),Ie=ve.split(`
`),k=ke.slice(1).map(n=>({id:n[0],idiom:n[1]})),R=4,T=20,z=6,x="cywd-";window.clearGames=()=>{for(let n=0;n<localStorage.length;n++){const l=localStorage.key(n);l.startsWith(x)&&localStorage.removeItem(l)}};window.allGames=()=>{const n=new Map;for(let l=0;l<localStorage.length;l++){const i=localStorage.key(l);if(i.startsWith(x)){const m=JSON.parse(localStorage.getItem(i));n.set(i.replace(x,""),m)}}return n};const ne=(n,l)=>{const i=typeof l=="string"?l.split(""):l,m=typeof n=="string"?n.split(""):n,o=i.length,r=Array.from({length:o},()=>"\u2B1C");if(o!==m.length)throw new Error("idioms must have the same length");const b=[];for(let y=0;y<o;y++){const u=i[y],p=m[y];u===p&&(r[y]="\u{1F7E9}",b.push(y))}const w=[];for(let y=0;y<o;y++){const u=i[y],p=m[y];if(u!==p){const h=m.indexOf(u);h!==-1&&!b.includes(h)&&!w.includes(h)&&(r[y]="\u{1F7E7}",w.push(h))}}return r};window.getIdiomStates=ne;const re=n=>{if(n.some(o=>!!o.length&&o.every(r=>r==="\u{1F7E9}")))return"won";const i=n[n.length-1];return!!i.length&&i.every(o=>o!=="\u{1F7E9}")?"lost":null},oe=()=>Array.from({length:z},()=>({v:Array.from({length:R},()=>""),s:!1})),K=(n,l,i,m=0)=>{var y;let o=l||new Set;o.add(n);let r=i||new Set;const b=n.split("");b.forEach(u=>r.add(u));let w=0;e:for(let u=0;u<k.length;u++){const p=b[(u+1)%R],h=k.find(({idiom:E})=>!o.has(E)&&E.includes(p));if(h){for(let E=0;E<h.idiom.length;E++)if(r.add(h.idiom[E]),r.size>=T)break e;o.add(h.idiom),w=0}else{if(w>=R+1)break e;w+=1}}if(r.size<T||o.size<z){const u=[...o][++m];if(u){const{passedIdioms:p,keys:h}=K(u,o,r,m);o=p,r=h}}if(r.size<T||o.size<z){const u=k[Math.floor(Math.random()*k.length)].idiom;if(u){const{passedIdioms:p,keys:h}=K(u,o,r,0);o=p,r=h}}if(r.size<T||o.size<z){const u=(y=k.find(p=>p.idiom===n))==null?void 0:y.id;console.error(u,{possibleIdioms:o.size,keySize:r.size,consecutiveFailures:w})}return{passedIdioms:o,keys:r}},W=n=>c("svg",P(H({viewBox:"0 0 20 20",fill:"currentColor"},n),{children:[e("title",{children:"\u25B6\uFE0F"}),e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"})]})),ie=n=>c("svg",P(H({viewBox:"0 0 24 24"},n),{children:[e("title",{children:"\u2716\uFE0F"}),e("path",{fill:"currentColor",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})),se=new Date(2022,1,1),j=()=>{const l=new Date().setHours(0,0,0,0)-se,i=Math.floor(l/(1e3*60*60*24));return k[Math.max(0,i%k.length)]},Se=()=>{let n=new Date().setHours(0,0,0,0)+24*60*60*1e3;const l=new Date(+se+24*60*60*1e3);n<l&&(n=l);const[i,m]=C("00"),[o,r]=C("00"),[b,w]=C("00"),[y,u]=C(!1);return S(()=>{const p=setInterval(()=>{const h=n-new Date;if(h<=0){u(!0),clearInterval(p);return}m(Math.floor(h/(1e3*60*60)).toString().padStart(2,"0")),r(Math.floor(h/(1e3*60)%60).toString().padStart(2,"0")),w(Math.floor(h/1e3%60).toString().padStart(2,"0"))},1e3);return()=>clearInterval(p)},[]),y?e("a",{href:"./",children:"Now!"}):c("time",{class:"countdown",children:[i,":",o,":",b]})};function Ee(){var V;const[n,l]=C(k.find(t=>t.id===location.hash.slice(1))||j());S(()=>{window.addEventListener("hashchange",()=>{l(k.find(t=>t.id===location.hash.slice(1))||j())})},[]);const[i,m]=C(((V=JSON.parse(localStorage.getItem(`${x}${n.id}`)))==null?void 0:V.board)||oe());S(()=>{const t=localStorage.getItem(`${x}${n.id}`);m(t?JSON.parse(t).board:oe())},[n.id]);const o=A(()=>i.map((t,s)=>t.s?ne(n.idiom,t.v):[]),[i]);S(()=>{i&&i.some(t=>t.v.some(s=>s))&&localStorage.setItem(`${x}${n.id}`,JSON.stringify({board:i,gameState:re(o)}))},[o]);const[r,b]=C(null);S(()=>{b(null),fetch(`https://baidu-hanyu-idiom.cheeaun.workers.dev/?wd=${n.idiom}`).then(t=>t.json()).then(t=>{t.definition&&b(t.definition)})},[n.idiom]);const w=(i==null?void 0:i.findIndex(t=>t.s===!1))||0,[y,u]=C(!1),[p,h]=C(!1),[E,J]=C(!1),$=A(()=>{const{passedIdioms:t,keys:s}=K(n.idiom),a=[...t].map(d=>`${d} (${I(d)})`).sort((d,f)=>d.localeCompare(f,"zh"));return console.log(`POSSIBLE IDOMS [${n.id}] (${s.size} keys):
${a.map((d,f)=>`${f+1}. ${d}`).join(`
`)}

\u{1F6A8}SPOILER\u{1F6A8} Type 'ANSWER' to see the answer.
`),window.ANSWER=`${n.idiom} (${I(n.idiom)})`,[...s].sort((d,f)=>d.localeCompare(f,"zh"))},[n.idiom]),_=(t,s=!1)=>{if(!i[w]||v)return;const a=[...i];let d=a[w].v.findIndex(f=>f==="");s&&(d===-1?d=3:d--),d!==-1&&(a[w].v[d]=t,m(a))},L=new Set,N=new Set,G=new Set;i.forEach((t,s)=>{!t.s||t.v.forEach((a,d)=>{const f=o[s][d];f==="\u{1F7E9}"?L.add(a):f==="\u{1F7E7}"?N.add(a):f==="\u2B1C"&&G.add(a)})});const X=()=>{if(v)return;console.log("handleEnter"),u(!1);const t=i[w],s=t.v.join(""),a=Ie.includes(s);a?(t.s=!0,m([...i])):setTimeout(()=>{u(!0)},10),console.log({currentIdiom:s,valid:a})},v=A(()=>re(o),[o]);S(()=>{h(v==="won"?"won":v==="lost"?"lost":!1)},[v]);const U=()=>{if(v)return;const t=[...i],s=t[w];if(!s||s.s)return;let a=-1;for(let d=s.v.length-1;d>=0;d--)if(s.v[d]!==""){a=d;break}a!==-1&&(s.v[a]="",m(t))};S(()=>{document.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),t.stopPropagation())})},[]),S(()=>{const t=s=>{if(v||s.metaKey||s.ctrlKey||!s.key)return;const a=s.key.toLowerCase();if(a==="enter")s.preventDefault(),s.stopPropagation(),X();else if(a==="backspace")s.preventDefault(),U();else if(/^arrow(left|right)/i.test(a)){const f=[...i[w].v].reverse().find(g=>g!=="");if(f){const g=I(f)[0],F=$.filter(ae=>I(ae)[0]===g);if(F.length<=1)return;const Q=F.indexOf(f),Z=a==="arrowright"?F[(Q+1)%F.length]:F[(Q+F.length-1)%F.length];Z&&_(Z,!0)}}else{const d=$.find(f=>I(f)[0].localeCompare(a,"en",{sensitivity:"base"})===0);d&&(s.preventDefault(),_(d))}};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[$,w,v]);const O=location.origin+location.pathname+"#"+n.id,Y=o.map(t=>t.join("")).join(`
`).trim(),le=v==="won"?Y.split(`
`).length:"X",M=`${`Chengyu Wordle [${n.id}] ${le}/6

${Y}`}

${O}`,q=A(()=>{const t=[],s=n.idiom.split(""),a=$.filter(g=>!s.includes(g)&&!G.has(g)).slice(0,-1).slice(0,3).map(g=>`\u274C The letter ${g} (${I(g)}) is NOT in the idiom.`).sort(()=>Math.random()-.5);t.push(...a),(r==null?void 0:r.zh)&&s.filter(g=>r.zh.includes(g)).length<=2&&t.push(`\u2139\uFE0F ${r.zh}`),(r==null?void 0:r.en)&&t.push(`\u2139\uFE0F ${r.en}`);const d=s.filter(g=>!L.has(g)&&!N.has(g)).slice(0,-1).map(g=>`\u2705 The letter ${g} (${I(g)}) is in the idiom.`).sort(()=>Math.random()-.5);t.push(...d);const f=s.map(g=>I(g)[0]).join("").normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.push(`\u2728 Abbreviated pinyin: ${f}`),t},[L,n.idiom,r]),B=C(0);S(()=>{B.current=0},[n.idiom]);const ce=()=>{if(v)return;const t=q[B.current];B.current=(B.current+1)%q.length,alert(t)};return c(D,{children:[c("header",{children:[e("button",{type:"button",onClick:()=>{J(!0)},children:c("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e("title",{children:"\u2139\uFE0F"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]})}),c("h1",{children:["Chengyu Wordle ",e("sup",{children:"beta"})]}),e("button",{type:"button",onClick:()=>{h(v||"play")},children:"Play"})]}),e("div",{id:"board",children:i.map((t,s)=>e("div",{className:`row ${w===s&&y?"error":""} ${w===s?"current":""}`,children:t.v.map((a,d)=>{var f;return e("div",{className:`letter ${a!=null?a:"lettered"} ${(f=o[s][d])!=null?f:""}`,children:c("ruby",{children:[a||e("span",{style:{opacity:0},children:"\u4E00"}),e("rp",{children:"("}),e("rt",{children:I(a)||e(D,{children:"\xA0"})}),e("rp",{children:")"})]})},d)})},s))}),e("div",{id:"keyboard",children:c("div",{class:"inner",children:[e("div",{class:"keys",children:$.map((t,s)=>e("button",{class:`${L.has(t)?"\u{1F7E9}":""} ${N.has(t)?"\u{1F7E7}":""} ${G.has(t)?"\u2B1C":""}`,type:"button",tabIndex:-1,onClick:()=>{_(t)},children:c("ruby",{children:[t,e("rp",{children:"("}),e("rt",{children:I(t)}),e("rp",{children:")"})]})}))}),c("div",{class:"row",children:[e("button",{type:"button",onClick:X,tabIndex:-1,children:"Enter"}),e("button",{type:"button",class:"stuck",onClick:ce,children:"I'm stuck"}),e("button",{type:"button",onClick:U,tabIndex:-1,children:e("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:e("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})})})]})]})}),c("div",{id:"modal",class:p?"appear":"",onClick:t=>{t.target===t.currentTarget&&h(null)},children:[e(ie,{height:"24",width:"24",class:"close",onClick:()=>{h(null)}}),c("div",{class:"content",children:[e("h2",{children:p==="won"?"\u{1F389}\u{1F389}\u{1F389}":p==="lost"?"\u{1F62D}\u{1F62D}\u{1F62D}":"\u{1F47E}\u{1F47E}\u{1F47E}"}),p==="play"&&c("a",{href:O,children:["\u{1F517} ",location.host+"/#"+n.id]}),/(won|lost)/i.test(p)&&c(D,{children:[c("p",{children:[e("b",{class:"answer",children:c("ruby",{children:[n.idiom,e("rp",{children:"("}),e("rt",{children:I(n.idiom)}),e("rp",{children:")"})]})}),c("div",{class:"definition",children:[r==null?void 0:r.zh,(r==null?void 0:r.zh)&&(r==null?void 0:r.en)&&e("br",{}),r==null?void 0:r.en]}),c("small",{children:[(r==null?void 0:r.zh)||(r==null?void 0:r.en)?"Source:":"\u{1F4D6}"," ",e("a",{href:`https://hanyu.baidu.com/s?wd=${n.idiom}&from=zici`,target:"_blank",children:"Baidu"})]})]}),e("div",{class:"results",children:M}),c("button",{id:"share",onClick:async()=>{try{await navigator.share({text:M})}catch{try{await navigator.clipboard.writeText(M),alert("Copied results to clipboard")}catch{}}},children:["Share"," ",e("svg",{height:"16",width:"16",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"})})]}),"\xA0\xA0",e("a",{class:"button tweet",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(M)}`,target:"_blank",children:c("svg",{height:"16",width:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e("title",{children:"Tweet"}),e("path",{fill:"currentColor",d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]})}),"\xA0\xA0",e("input",{readOnly:!0,value:n.id,class:"idiom-code",onClick:t=>{t.target.focus(),t.target.select(),navigator.clipboard.writeText(O).then(()=>{alert("Copied URL to clipboard")}).catch(s=>{})}})]}),c("div",{class:"footer",children:[/won|lost/i.test(v)&&j().id===n.id&&e("p",{children:c("big",{children:["Next idiom:"," ",e("b",{children:e(Se,{})})]})}),c("div",{children:[j().id!==n.id&&c(D,{children:[c("a",{href:"./",class:"button",children:[e(W,{width:20,height:20})," Play today's game!"]}),e("br",{})]}),c("button",{type:"button",onClick:()=>{if(confirm("Are you sure you want to start a new random game?")){const s=Math.round(Math.random()*(k.length-1)),a=k[s];location.hash=`#${a.id}`,h(null)}},children:[e(W,{width:20,height:20})," Random"]})," ",c("button",{type:"button",onClick:()=>{let t=prompt("Enter idiom ID/URL:");try{t=new URL(t).hash.slice(1)}catch{}if(t){const s=k.find(a=>a.id===t);s?(location.hash=`#${s.id}`,h(null)):alert("Invalid idiom ID")}},children:[e(W,{width:20,height:20})," Choose"]})]})]})]})]}),c("div",{id:"info-modal",class:E?"appear":"",children:[e(ie,{height:"24",width:"24",class:"close",onClick:()=>{J(!1)}}),c("div",{class:"content",children:[e("h2",{children:"How to play"}),c("p",{children:["Guess the idiom in ",z," tries."]}),e("p",{children:"Each guess must be a valid 4-letter idiom. Hit the enter button to submit."}),e("p",{children:"After each guess, the color of the tiles will change to show how close your guess was to the idiom."}),c("ul",{children:[e("li",{children:"\u{1F7E9}\u2B1C\u2B1C\u2B1C Green = correct spot"}),e("li",{children:"\u2B1C\u{1F7E7}\u2B1C\u2B1C Yellow = wrong spot"}),c("li",{children:["\u2B1C\u2B1C",e("span",{style:{opacity:.5},children:"\u2B1B"}),"\u2B1C Gray = not in any spot"]})]}),e("h2",{children:"About"}),c("p",{children:[e("a",{href:"https://github.com/cheeaun/chengyu-wordle/",target:"_blank",children:"Built"})," ","by"," ",e("a",{href:"https://cheeaun.com",target:"_blank",children:"Chee Aun"}),"."," ",e("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank",children:"Wordle"})," ","\xA9\uFE0F"," ",e("a",{href:"https://powerlanguage.co.uk/",target:"_blank",children:"Josh Wardle"}),"."]}),e("h2",{children:"Feedback channels"}),c("ul",{children:[e("li",{children:e("a",{href:"https://t.me/+ykuhfiImLd1kNjk1",target:"_blank",children:"Telegram group"})}),c("li",{children:[e("a",{href:"https://github.com/cheeaun/chengyu-wordle/discussions",target:"_blank",children:"GitHub Discussions"}),"(for developers)"]}),c("li",{children:[e("a",{href:"https://github.com/cheeaun/chengyu-wordle/issues",target:"_blank",children:"GitHub Issues"})," ","(for bugs)"]}),e("li",{children:e("a",{href:"https://twitter.com/cheeaun",target:"_blank",children:"@cheeaun on Twitter"})}),e("li",{children:e("a",{href:"https://t.me/cheeaun",target:"_blank",children:"@cheeaun on Telegram"})})]}),e("h2",{children:"Debugging"}),e("button",{type:"button",onClick:()=>{confirm("Are you sure?")&&(localStorage.removeItem(x+n.id),location.reload())},children:"Reset current idiom game"}),"\xA0",e("button",{type:"button",onClick:()=>{confirm("Are you sure?")&&(clearGames(),location.reload())},children:"Clear database"})]})]})]})}be(e(Ee,{}),document.getElementById("app"));
//# sourceMappingURL=index.cc64d002.js.map