(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{57:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),o=t(46),i=t(13),c=t(24),u=t(11),l=t(53),m=t(54),s=t(48),d=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},a.a.createElement("path",{d:"M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6m0-7l2 3a7 7 0 00-4 0l2-3M3 7h5a7 7 0 00-3 4L3 7m0 10l2-4a7 7 0 003 4H3M21 7l-2 4a7 7 0 00-2-4h4m0 10h-4a7 7 0 002-4l2 4m-9 5l-2-3h4l-2 3z"}))},f=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},a.a.createElement("path",{d:"M18 4l-3 2 1 3-2-2-3 2 1-3-3-2h3l2-3 1 3h3m3 7l-1 1v2l-1-1-2 1v-2l-1-1h2l1-2v2h2m-2 5c1 0 2 1 1 2l-1 1c-4 4-10 4-14 0A10 10 0 016 4c1-1 2 0 2 1a10 10 0 0011 11m-2 2c-2 0-5-1-7-3-3-3-4-5-4-8a8 8 0 0011 11z"}))};function b(){var n=Object(u.a)(["\n  background-color: transparent;\n  border: none;\n  svg {\n    fill: ",";\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(u.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Inconsolata', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    transition: background-color 300ms;\n  }\n"]);return h=function(){return n},n}var g="#FBFEF9",p="#F3EFF5",v="#1C2826",E="#ef3054",x="#43AA8B",T="#3454D1",y="#F49390";Object(m.a)(h());var w={error:E,success:x},O=Object(c.a)({},w,{background:p,body:v,primary:y,primaryAlt:g}),k=Object(c.a)({},w,{background:v,body:g,primary:T,primaryAlt:g}),j={mode:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",setTheme:function(){}},S=r.createContext(j),N=l.a,A=N.button(b(),(function(n){return n.theme.body})),C=function(){var n=r.useContext(S),e=n.mode,t=n.setTheme;return r.createElement(A,{onClick:function(){t()}},"light"===e?r.createElement(d,null):r.createElement(f,null))},M=t(70),_=t(71),I=t(72),U=t(73),F=t(81),R=t(82),z=t(74),W=t(75),D=t(83),L=t(76),q=t(56),B=t(77),P=t(84),H=t(78),J=t(79),G=t(80),$=M.a(1e3),K=M.a(6e4),Q=M.a(36e5),V=_.a(I.a,1e3),X=_.a(I.a,6e4),Y=_.a(I.a,36e5),Z=U.a((function(n,e,t){return t.padStart(n,e)})),nn=F.a([R.a(Y,z.a(I.a,24),Math.floor),R.a(X,z.a(I.a,60),Math.floor),R.a(V,z.a(I.a,60),Math.floor)]);var en=R.a(W.a((function(n,e){return n(e)}),[Q,K,$]),D.a),tn=R.a(nn,L.a(["hour","minute","second"]),q.a(B.a(R.a(P.a,H.a(I.a,0)),(function(n){var e=Object(i.a)(n,2),t=e[0],r=e[1];return"".concat(r," ").concat(t).concat(1===r?"":"s")}),J.a(""))),G.a(". "),(function(n){return n.concat(".")}));R.a(nn,q.a(R.a(String,Z(2,"0"))),G.a(":"));function rn(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)}))}var an,on=t(32),cn=t(52),un=t(3),ln=t(41);!function(n){n.DEFAULT_TIME="defaultTime"}(an||(an={}));var mn=Number(localStorage.getItem(an.DEFAULT_TIME)||K(6)),sn={initial:"idle",id:"main",context:{initialTime:mn,currentTime:mn,announcementTimes:[]},invoke:[{src:"announcer",id:"announcer"}],states:{idle:{on:{START:"running",RESET:{actions:["reset"]},SET_TIME:{actions:["setTime","storeTime"]},SET_ANNOUNCEMENT_TIMES:{internal:!1,actions:["setAnnouncements"]}}},running:{entry:["announceStart"],invoke:[{src:"timer",id:"timer"},{src:"plantAnnouncements",id:"plantAnnouncements"}],on:{"":{target:"complete",cond:function(n){return n.currentTime<=0}},STOP:"idle",COUNT_DOWN:{actions:["countDown"]},ANNOUNCE:{actions:Object(un.h)("announcer")}}},complete:{entry:["announceEnd"],on:{ANNOUNCE:{actions:Object(un.h)("announcer")}},after:{500:"idle"}}}},dn={actions:{setAnnouncements:Object(un.b)({announcementTimes:function(n,e){return"SET_ANNOUNCEMENT_TIMES"===e.type?e.payload.announcementTimes:n.announcementTimes}}),setTime:Object(un.b)({initialTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.initialTime},currentTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.currentTime}}),countDown:Object(un.b)({currentTime:function(n){return n.currentTime-$(1)}}),reset:Object(un.b)({currentTime:function(n){return n.initialTime}}),announceStart:Object(un.q)({type:"ANNOUNCE",payload:{message:"Let's go"}}),announceEnd:Object(un.q)({type:"ANNOUNCE",payload:{message:"Time. Great job!"}})},services:{timer:function(){return function(n){var e=setInterval((function(){n("COUNT_DOWN")}),$(1));return function(){clearInterval(e)}}}}},fn=Object(ln.a)(sn,dn),bn=Object(on.b)(fn);bn.start();var hn=[bn.initialState,bn.send.bind(bn),bn],gn=a.a.createContext(hn);gn.Consumer;function pn(){var n=Object(u.a)(["\n  border: none;\n  background: transparent;\n  color: ",';\n  font-size: 4rem;\n  /* Chrome, Safari, Edge, Opera */\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n']);return pn=function(){return n},n}var vn=N.input(pn(),(function(n){return n.theme.body})),En=function(n){return r.createElement(vn,Object.assign({type:"number"},n))};function xn(){var n=Object(u.a)(["\n  width: 100%;\n  font-size: 4rem;\n  text-align: center;\n  margin: 1rem 0;\n  display: flex;\n  justify-content: center;\n"]);return xn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return Tn=function(){return n},n}var yn=N.div(Tn()),wn=N.div(xn()),On=function(){var n=r.useContext(gn),e=Object(i.a)(n,2),t=e[0],a=e[1],o=nn(t.context.currentTime),c=o.map((function(n){return String(n).padStart(2,"0")})),u=Object(i.a)(c,3),l=u[0],m=u[1],s=u[2];return r.createElement(yn,{"data-testid":"Header"},r.createElement("h1",null,"Workout Timer"),r.createElement(C,null),r.createElement(wn,null,r.createElement(En,{max:24,min:0,maxLength:2,"data-testid":"Header__hours",onChange:function(n){var e=Number(n.target.value),t=en([e,o[1],o[2]]);a({type:"SET_TIME",payload:{time:t}})},value:l}),r.createElement("span",null,":"),r.createElement(En,{max:59,min:0,"data-testid":"Header__minutes",onChange:function(n){var e=Number(n.target.value),t=en([o[0],e,o[2]]);a({type:"SET_TIME",payload:{time:t}})},value:m}),r.createElement("span",null,":"),r.createElement(En,{max:59,min:0,"data-testid":"Header__seconds",onChange:function(n){var e=Number(n.target.value),t=en([o[0],o[1],e]);a({type:"SET_TIME",payload:{time:t}})},value:s})))},kn=t(38),jn=t(55);function Sn(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 0.5rem 1rem;\n  font-family: inherit;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  max-width: 414px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    filter: brightness(0.75);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    filter: brightness(1);\n    cursor: default;\n  }\n"]);return Sn=function(){return n},n}var Nn=N.button(Sn(),(function(n){return n.theme.primary}),(function(n){return n.theme.primaryAlt})),An=function(n){n.type;var e=Object(jn.a)(n,["type"]);return r.createElement(Nn,e)};function Cn(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n  justify-content: space-between;\n"]);return Cn=function(){return n},n}var Mn=N.div(Cn()),_n=function(){var n=r.useContext(gn),e=Object(i.a)(n,2),t=e[0],a=e[1],o=t.context.initialTime===t.context.currentTime;return r.createElement(Mn,null,r.createElement(An,{disabled:t.matches("running"),onClick:function(){a("START")}},"Start"),r.createElement(An,{disabled:!t.matches("running"),onClick:function(){a("STOP")}},"Stop"),r.createElement(An,{disabled:o||t.matches("running"),onClick:function(){a("RESET")}},"Reset"),r.createElement(An,{"data-testid":"Actions__addAnnouncement",onClick:function(){var n=Object(kn.a)(t.context.announcementTimes);n.push({time:0,interval:!1,id:rn()}),a({type:"SET_ANNOUNCEMENT_TIMES",payload:{announcementTimes:n}})},disabled:!o||t.matches("running")},"Add Announcement"))},In=t(29),Un=t.n(In);function Fn(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  label {\n    position: absolute;\n    top: -0.625rem;\n    left: 1rem;\n    background-color: ",";\n    padding: 0 0.25rem;\n  }\n\n  input {\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    border: 2px solid ",";\n  }\n"]);return Fn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  input {\n    transform: scale(2);\n  }\n"]);return Rn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 414px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  & > div {\n    label {\n      font-size: 1rem;\n    }\n  }\n"]);return zn=function(){return n},n}var Wn=N.div(zn(),(function(n){return n.theme.background}),(function(n){return n.theme.body})),Dn=N.div(Rn()),Ln=N.div(Fn(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.primary})),qn=(Un.a.shape({id:Un.a.string.isRequired,time:Un.a.number.isRequired,message:Un.a.string,interval:Un.a.bool.isRequired}).isRequired,function(n){var e=n.config,t=r.useContext(gn),a=Object(i.a)(t,2),o=a[0],c=a[1],u=function(n){return function(e){var t=Object(kn.a)(o.context.announcementTimes),r=t.findIndex((function(e){return n===e.id}));if(null!=r){switch(e.target.type){case"checkbox":t[r].interval=e.target.checked;break;case"number":t[r].time=Number(e.target.value);break;case"text":t[r].message=e.target.value}c({type:"SET_ANNOUNCEMENT_TIMES",payload:{announcementTimes:t}})}}};return r.createElement(Wn,{"data-testid":"AnnouncementConfig"},r.createElement(Ln,null,r.createElement("label",{htmlFor:"seconds:".concat(e.id)},"Seconds"),r.createElement(En,{"data-testid":"AnnouncementConfig__time",disabled:o.matches("running"),value:e.time,onChange:u(e.id)})),r.createElement(Ln,null,r.createElement("label",{htmlFor:"message:".concat(e.id)},"Message"),r.createElement("input",{"data-testid":"AnnouncementConfig__message",disabled:o.matches("running"),placeholder:"Woohoo!",id:"interval:".concat(e.id),type:"text",value:e.message||"",onChange:u(e.id)})),r.createElement(Dn,null,r.createElement("label",{htmlFor:"interval:".concat(e.id)},"Interval:"),r.createElement("input",{"data-testid":"AnnouncementConfig__interval",disabled:o.matches("running"),id:"interval:".concat(e.id),type:"checkbox",checked:Boolean(e.interval),onChange:u(e.id)})))});function Bn(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 1rem;\n  left: 0;\n  right: 0;\n  background-color: ",";\n"]);return Bn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  padding: 0 1rem;\n"]);return Pn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",';\n  min-height: 100vh;\n  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */\n  width: 100vw;\n  max-width: 414px;\n  margin: 0 auto;\n\n  &:after {\n    width: 100vw;\n    height: 100vh;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ',";\n    filter: brightness(0.75);\n    z-index: -1;\n  }\n"]);return Hn=function(){return n},n}var Jn=N.div(Hn(),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.body})),Gn=N.div(Pn()),$n=N(An)(Bn(),(function(n){return n.theme.success})),Kn=function(){var n=r.useContext(gn),e=Object(i.a)(n,1)[0],t=r.useState(!1),a=Object(i.a)(t,2),o=a[0],c=a[1];r.useEffect((function(){isUpdateAvailable.then((function(n){c(n)}))}),[]);return r.createElement(Jn,{"data-testid":"App"},r.createElement(On,null),r.createElement(_n,null),r.createElement(Gn,null,e.context.announcementTimes.map((function(n){return r.createElement(qn,{key:n.id,config:n})}))),o&&r.createElement($n,{onClick:function(){window.location.reload()}},"Refresh for update"))},Qn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Vn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var Xn=document.getElementById("root");Object(o.render)(r.createElement((function(n){var e=n.children,t=function(){var n=r.useState({mode:j.mode,hasMounted:!1}),e=Object(i.a)(n,2)[1];return r.useEffect((function(){var n=localStorage.getItem("mode")||"dark";e((function(e){return Object(c.a)({},e,{mode:n,hasMounted:!0})}))}),[e]),n}(),a=Object(i.a)(t,2),o=a[0],u=a[1];if(!o.hasMounted)return r.createElement("div",null);var l;return r.createElement(s.a,{theme:(l=o.mode,"dark"===l?k:O)},r.createElement(S.Provider,{value:{mode:o.mode,setTheme:function(n){n||(n={light:"dark",dark:"light"}[o.mode]),localStorage.setItem("mode",n),u((function(e){return Object(c.a)({},e,{mode:n})}))}}},e))}),null,r.createElement((function(n){var e=n.children,t=Object(cn.useMachine)(fn,{actions:{storeTime:function(n,e){"SET_TIME"===e.type&&localStorage.setItem(an.DEFAULT_TIME,String(e.payload.time))}},services:{plantAnnouncements:function(n){return function(e){var t=(new Date).getTime(),r=function(){var e=(new Date).getTime();return n.initialTime-(e-t-1e3)},a=n.announcementTimes.map((function(n){var t=(n.interval?setInterval:setTimeout)((function(){var t=[tn(r()),n.message].filter(Boolean).join(". ").concat(".");e({type:"ANNOUNCE",payload:{message:t}})}),$(n.time));return Object(c.a)({},n,{id:t})}));return function(){a.forEach((function(n){(n.interval?clearInterval:clearTimeout)(n.id)}))}}},announcer:function(){return function(n,e){var t=new SpeechSynthesisUtterance;return e((function(n){"ANNOUNCE"===n.type&&(t.text=n.payload.message,window.speechSynthesis.speak(t))})),function(){window.speechSynthesis.cancel()}}}}});return a.a.createElement(gn.Provider,{value:t},e)}),null,r.createElement(Kn,null))),Xn),function(n){if("serviceWorker"in navigator){if(new URL("/workout-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/workout-timer","/service-worker.js");Qn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Vn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Vn(e,n)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.9bef792b.chunk.js.map