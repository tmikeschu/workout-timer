(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{57:function(n){n.exports=JSON.parse('{"a":"1.0.8"}')},62:function(n,e,t){n.exports=t(74)},74:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),o=t(49),i=t(12),c=t(16),u=t(10),l=t(59),s=t(60),m=t(51),d=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},a.a.createElement("path",{d:"M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6m0-7l2 3a7 7 0 00-4 0l2-3M3 7h5a7 7 0 00-3 4L3 7m0 10l2-4a7 7 0 003 4H3M21 7l-2 4a7 7 0 00-2-4h4m0 10h-4a7 7 0 002-4l2 4m-9 5l-2-3h4l-2 3z"}))},f=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},a.a.createElement("path",{d:"M18 4l-3 2 1 3-2-2-3 2 1-3-3-2h3l2-3 1 3h3m3 7l-1 1v2l-1-1-2 1v-2l-1-1h2l1-2v2h2m-2 5c1 0 2 1 1 2l-1 1c-4 4-10 4-14 0A10 10 0 016 4c1-1 2 0 2 1a10 10 0 0011 11m-2 2c-2 0-5-1-7-3-3-3-4-5-4-8a8 8 0 0011 11z"}))};function p(){var n=Object(u.a)(["\n  background-color: transparent;\n  border: none;\n  svg {\n    fill: ",";\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Inconsolata', sans-serif;\n    overflow-x: hidden;\n  }\n\n  * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    transition: background-color 300ms;\n  }\n"]);return b=function(){return n},n}var g="#FBFEF9",h="#F3EFF5",v="#1C2826",E="#ef3054",y="#43AA8B",T="#3454D1",x="#F49390";Object(s.a)(b());var w={error:E,success:y},O=Object(c.a)(Object(c.a)({},w),{},{background:h,body:v,primary:x,primaryAlt:g}),j=Object(c.a)(Object(c.a)({},w),{},{background:v,body:g,primary:T,primaryAlt:g}),S={mode:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",setTheme:function(){}},k=r.createContext(S),N=function(n){var e=n.children,t=function(){var n=r.useState({mode:S.mode,hasMounted:!1}),e=Object(i.a)(n,2)[1];return r.useEffect((function(){var n=localStorage.getItem("mode")||"dark";e((function(e){return Object(c.a)(Object(c.a)({},e),{},{mode:n,hasMounted:!0})}))}),[e]),n}(),a=Object(i.a)(t,2),o=a[0],u=a[1];if(!o.hasMounted)return r.createElement("div",null);var l;return r.createElement(m.a,{theme:(l=o.mode,"dark"===l?j:O)},r.createElement(k.Provider,{value:{mode:o.mode,setTheme:function(n){n||(n={light:"dark",dark:"light"}[o.mode]),localStorage.setItem("mode",n),u((function(e){return Object(c.a)(Object(c.a)({},e),{},{mode:n})}))}}},e))},A=l.a,C=A.button(p(),(function(n){return n.theme.body})),M=function(){var n=r.useContext(k),e=n.mode,t=n.setTheme;return r.createElement(C,{onClick:function(){t()}},"light"===e?r.createElement(d,null):r.createElement(f,null))},_=t(76),I=t(77),U=t(78),F=t(79),z=t(88),W=t(89),D=t(80),L=t(81),R=t(90),B=t(82),P=t(61),H=t(83),J=t(84),q=t(85),G=t(86),V=t(58),K=t(87),$=_.a(1e3),Q=_.a(6e4),X=_.a(36e5),Y=I.a(U.a,1e3),Z=I.a(U.a,6e4),nn=I.a(U.a,36e5),en=F.a((function(n,e,t){return t.padStart(n,e)})),tn=z.a([W.a(nn,D.a(U.a,24),Math.floor),W.a(Z,D.a(U.a,60),Math.floor),W.a(Y,D.a(U.a,60),Math.floor)]);var rn=W.a(L.a((function(n,e){return n(e)}),[X,Q,$]),R.a),an=W.a(tn,B.a(["hour","minute","second"]),P.a(H.a(W.a(J.a,q.a(U.a,0)),(function(n){var e=Object(i.a)(n,2),t=e[0],r=e[1];return"".concat(r," ").concat(t).concat(1===r?"":"s")}),G.a(""))),V.a(Boolean),K.a(". "),(function(n){return n.concat(".")}));W.a(tn,P.a(W.a(String,en(2,"0"))),K.a(":"));function on(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)}))}var cn,un=t(34),ln=t(56),sn=t(54),mn=t.n(sn),dn=t(3),fn=t(45);!function(n){n.DEFAULT_TIME="defaultTime"}(cn||(cn={}));var pn=Number(localStorage.getItem(cn.DEFAULT_TIME)||Q(6)),bn={initial:"idle",id:"main",context:{initialTime:pn,currentTime:pn,announcementTimes:[]},invoke:[{src:"announcer",id:"announcer"},{src:"noSleep",id:"noSleep"}],states:{idle:{on:{START:"running",RESET:{actions:["reset"]},SET_TIME:{actions:["setTime","storeTime"]},SET_ANNOUNCEMENT_TIMES:{internal:!1,actions:["setAnnouncements"]}}},running:{entry:["announceStart"],invoke:[{src:"timer",id:"timer"},{src:"plantAnnouncements",id:"plantAnnouncements"}],on:{"":{target:"complete",cond:function(n){return n.currentTime<=0}},STOP:"idle",COUNT_DOWN:{actions:["countDown"]},ANNOUNCE:{actions:Object(dn.i)("announcer")}}},complete:{entry:["announceEnd"],on:{ANNOUNCE:{actions:Object(dn.i)("announcer")}},after:{500:"idle"}}}},gn={actions:{setAnnouncements:Object(dn.b)({announcementTimes:function(n,e){return"SET_ANNOUNCEMENT_TIMES"===e.type?e.payload.announcementTimes:n.announcementTimes}}),setTime:Object(dn.b)({initialTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.initialTime},currentTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.currentTime}}),countDown:Object(dn.b)({currentTime:function(n){return n.currentTime-$(1)}}),reset:Object(dn.b)({currentTime:function(n){return n.initialTime}}),announceStart:Object(dn.q)({type:"ANNOUNCE",payload:{message:"Let's go"}}),announceEnd:Object(dn.q)({type:"ANNOUNCE",payload:{message:"Time. Great job!"}})},services:{noSleep:function(){return function(){return function(){}}},announcer:function(){return function(){return function(){}}},timer:function(){return function(n){var e=setInterval((function(){n("COUNT_DOWN")}),$(1));return function(){clearInterval(e)}}}}},hn=Object(fn.a)(bn,gn),vn=Object(un.b)(hn);vn.start();var En=[vn.initialState,vn.send.bind(vn),vn],yn=a.a.createContext(En),Tn=function(n){var e=n.children,t=Object(ln.useMachine)(hn,{actions:{storeTime:function(n,e){"SET_TIME"===e.type&&localStorage.setItem(cn.DEFAULT_TIME,String(e.payload.time))}},services:{plantAnnouncements:function(n){return function(e){var t=(new Date).getTime(),r=function(){var e=(new Date).getTime();return n.initialTime-(e-t-1e3)},a=n.announcementTimes.map((function(n){var t=(n.interval?setInterval:setTimeout)((function(){var t=[an(r()),n.message].filter(Boolean).join(". ").concat(".");e({type:"ANNOUNCE",payload:{message:t}})}),$(n.time));return Object(c.a)(Object(c.a)({},n),{},{id:t})}));return function(){a.forEach((function(n){(n.interval?clearInterval:clearTimeout)(n.id)}))}}},announcer:function(){return function(n,e){var t=new SpeechSynthesisUtterance;return e((function(n){"ANNOUNCE"===n.type&&(t.text=n.payload.message,window.speechSynthesis.speak(t))})),function(){window.speechSynthesis.cancel()}}},noSleep:function(){return function(){var n=new mn.a;return document.addEventListener("click",(function e(){document.removeEventListener("click",e,!1),n.enable()}),!1),function(){n.disable()}}}}});return a.a.createElement(yn.Provider,{value:t},e)},xn=(yn.Consumer,t(42));function wn(){var n=Object(u.a)(["\n  border: none;\n  background: transparent;\n  color: ",';\n  /* Chrome, Safari, Edge, Opera */\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n']);return wn=function(){return n},n}var On=A.select(wn(),(function(n){return n.theme.body})),jn=function(n){var e=n.range,t=void 0===e?[1,10]:e,a=n.display,o=void 0===a?String:a,c=Object(xn.a)(n,["range","display"]),u=Object(i.a)(t,2),l=u[0],s=u[1];return r.createElement(On,Object.assign({type:"number"},c),Array(s-l+1).fill(null).map((function(n,e){return r.createElement("option",{value:e+l,key:e+l},o(e+l))})))};function Sn(){var n=Object(u.a)(["\n  width: 100%;\n  font-size: 2rem;\n  select {\n    font-size: 4rem;\n  }\n  text-align: center;\n  margin: 1rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & > input {\n    padding: 0;\n    max-width: 25%;\n  }\n"]);return Sn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return kn=function(){return n},n}var Nn=A.div(kn()),An=A.div(Sn()),Cn=function(){var n=r.useContext(yn),e=Object(i.a)(n,2),t=e[0],a=e[1],o=tn(t.context.currentTime),c=Object(i.a)(o,3),u=c[0],l=c[1],s=c[2];return r.createElement(Nn,{"data-testid":"Header"},r.createElement("h1",null,"Workout Timer"),r.createElement(M,null),r.createElement(An,null,r.createElement(jn,{range:[0,24],"data-testid":"Header__hours",onChange:function(n){var e=Number(n.target.value),t=rn([e,o[1],o[2]]);a({type:"SET_TIME",payload:{time:t}})},value:u,display:function(n){return String(n).padStart(2,"0")}}),r.createElement("span",null,":"),r.createElement(jn,{range:[0,59],"data-testid":"Header__minutes",onChange:function(n){var e=Number(n.target.value),t=rn([o[0],e,o[2]]);a({type:"SET_TIME",payload:{time:t}})},value:l,display:function(n){return String(n).padStart(2,"0")}}),r.createElement("span",null,":"),r.createElement(jn,{range:[0,59],"data-testid":"Header__seconds",onChange:function(n){var e=Number(n.target.value),t=rn([o[0],o[1],e]);console.log(t),a({type:"SET_TIME",payload:{time:t}})},value:s,display:function(n){return String(n).padStart(2,"0")}})))},Mn=t(32);function _n(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 0.5rem 1rem;\n  font-family: inherit;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  max-width: 414px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    filter: brightness(0.75);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    filter: brightness(1);\n    cursor: default;\n  }\n"]);return _n=function(){return n},n}var In=A.button(_n(),(function(n){return n.theme.primary}),(function(n){return n.theme.primaryAlt})),Un=function(n){n.type;var e=Object(xn.a)(n,["type"]);return r.createElement(In,e)};function Fn(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n  justify-content: space-between;\n"]);return Fn=function(){return n},n}var zn=A.div(Fn()),Wn=function(){var n=r.useContext(yn),e=Object(i.a)(n,2),t=e[0],a=e[1],o=t.context.initialTime===t.context.currentTime;return r.createElement(zn,null,r.createElement(Un,{disabled:t.matches("running"),onClick:function(){a("START")}},"Start"),r.createElement(Un,{disabled:!t.matches("running"),onClick:function(){a("STOP")}},"Stop"),r.createElement(Un,{disabled:o||t.matches("running"),onClick:function(){a("RESET")}},"Reset"),r.createElement(Un,{"data-testid":"Actions__addAnnouncement",onClick:function(){var n=Object(Mn.a)(t.context.announcementTimes);n.push({time:0,interval:!1,id:on()}),a({type:"SET_ANNOUNCEMENT_TIMES",payload:{announcementTimes:n}})},disabled:!o||t.matches("running")},"Add Announcement"))};function Dn(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  label {\n    position: absolute;\n    top: -0.625rem;\n    left: 1rem;\n    background-color: ",";\n    padding: 0 0.25rem;\n  }\n\n  input,\n  select {\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    border: 2px solid ",";\n  }\n"]);return Dn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  input {\n    transform: scale(2);\n  }\n"]);return Ln=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 414px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  & > div {\n    label {\n      font-size: 1rem;\n    }\n  }\n"]);return Rn=function(){return n},n}var Bn=A.div(Rn(),(function(n){return n.theme.background}),(function(n){return n.theme.body})),Pn=A.div(Ln()),Hn=A.div(Dn(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.primary})),Jn=function(n){var e,t=n.config,a=r.useContext(yn),o=Object(i.a)(a,2),c=o[0],u=o[1],l=function(n){return function(e){var t=Object(Mn.a)(c.context.announcementTimes),r=t.findIndex((function(e){return n===e.id}));if(null!=r){switch(e.target.type){case"checkbox":t[r].interval=e.target.checked;break;case"text":t[r].message=e.target.value}u({type:"SET_ANNOUNCEMENT_TIMES",payload:{announcementTimes:t}})}}};return r.createElement(Bn,{"data-testid":"AnnouncementConfig"},r.createElement(Hn,null,r.createElement("label",{htmlFor:"seconds:".concat(t.id)},"Seconds"),r.createElement(jn,{"data-testid":"AnnouncementConfig__time",disabled:c.matches("running"),value:t.time,onChange:(e=t.id,function(n){var t=Object(Mn.a)(c.context.announcementTimes),r=t.findIndex((function(n){return e===n.id}));t[r].time=Number(n.target.value),u({type:"SET_ANNOUNCEMENT_TIMES",payload:{announcementTimes:t}})}),range:[1,60]})),r.createElement(Hn,null,r.createElement("label",{htmlFor:"message:".concat(t.id)},"Message"),r.createElement("input",{"data-testid":"AnnouncementConfig__message",disabled:c.matches("running"),placeholder:"Woohoo!",id:"interval:".concat(t.id),type:"text",value:t.message||"",onChange:l(t.id)})),r.createElement(Pn,null,r.createElement("label",{htmlFor:"interval:".concat(t.id)},"Interval:"),r.createElement("input",{"data-testid":"AnnouncementConfig__interval",disabled:c.matches("running"),id:"interval:".concat(t.id),type:"checkbox",checked:Boolean(t.interval),onChange:l(t.id)})))},qn=t(57),Gn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Vn(n){if("serviceWorker"in navigator){if(new URL("/workout-timer",window.location.href).origin!==window.location.origin)return;var e="".concat("/workout-timer","/worker.js");Gn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Kn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Kn(e,n)}}function Kn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function $n(){var n=Object(u.a)(["\n  width: 100%;\n  text-align: center;\n"]);return $n=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 1rem;\n  background-color: ",";\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  padding: 0 1rem;\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",';\n  min-height: 100vh;\n  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */\n  width: 100vw;\n  max-width: 414px;\n  margin: 0 auto;\n\n  &:after {\n    width: 100vw;\n    height: 100vh;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ',";\n    filter: brightness(0.75);\n    z-index: -1;\n  }\n"]);return Yn=function(){return n},n}var Zn=A.div(Yn(),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.body})),ne=A.div(Xn()),ee=A(Un)(Qn(),(function(n){return n.theme.success})),te=A.p($n()),re=function(){var n=r.useContext(yn),e=Object(i.a)(n,1)[0],t=r.useState(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],u=r.useState(null),l=Object(i.a)(u,2),s=l[0],m=l[1],d=function(n){c(!0),m(n.waiting)};r.useEffect((function(){Vn({onUpdate:d})}),[]);return r.createElement(Zn,{"data-testid":"App"},r.createElement(Cn,null),r.createElement(Wn,null),r.createElement(ne,null,e.context.announcementTimes.map((function(n){return r.createElement(Jn,{key:n.id,config:n})}))),r.createElement(ee,{id:"updateVersionButton",onClick:function(){null===s||void 0===s||s.postMessage({type:"SKIP_WAITING"}),c(!1),window.location.reload(!0)},hidden:!o},"Refresh for update"),r.createElement(te,null,"Version: ",qn.a))},ae=document.getElementById("root");Object(o.render)(r.createElement(N,null,r.createElement(Tn,null,r.createElement(re,null))),ae)}},[[62,1,2]]]);
//# sourceMappingURL=main.3612171a.chunk.js.map