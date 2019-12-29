(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{54:function(n,e,t){n.exports=t(63)},63:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t.n(r),o=t(44),a=t(17),c=t(23),l=t(14),u=t(51),s=t(52),m=t(46),d=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},i.a.createElement("path",{d:"M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6m0-7l2 3a7 7 0 00-4 0l2-3M3 7h5a7 7 0 00-3 4L3 7m0 10l2-4a7 7 0 003 4H3M21 7l-2 4a7 7 0 00-2-4h4m0 10h-4a7 7 0 002-4l2 4m-9 5l-2-3h4l-2 3z"}))},f=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},i.a.createElement("path",{d:"M18 4l-3 2 1 3-2-2-3 2 1-3-3-2h3l2-3 1 3h3m3 7l-1 1v2l-1-1-2 1v-2l-1-1h2l1-2v2h2m-2 5c1 0 2 1 1 2l-1 1c-4 4-10 4-14 0A10 10 0 016 4c1-1 2 0 2 1a10 10 0 0011 11m-2 2c-2 0-5-1-7-3-3-3-4-5-4-8a8 8 0 0011 11z"}))};function h(){var n=Object(l.a)(["\n  background-color: transparent;\n  border: none;\n  svg {\n    fill: ",";\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Inconsolata', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    transition: background-color 300ms;\n  }\n"]);return b=function(){return n},n}var g="#FBFEF9",p="#F3EFF5",v="#1C2826",T="#ef3054",E="#43AA8B",w="#3454D1",y="#F49390";Object(s.a)(b());var k={error:T,success:E},O=Object(c.a)({},k,{background:p,body:v,primary:y,primaryAlt:g}),x=Object(c.a)({},k,{background:v,body:g,primary:w,primaryAlt:g}),S={mode:"light",setTheme:function(){}},j=r.createContext(S),I=u.a,M=I.button(h(),(function(n){return n.theme.body})),N=function(){var n=r.useContext(j),e=n.mode,t=n.setTheme;return r.createElement(M,{onClick:function(){t()}},"light"===e?r.createElement(d,null):r.createElement(f,null))},_=t(41),C=t(49),A=t(3),F=t(38),W=t(65),z=t(66),R=t(67),B=t(68),D=t(70),L=t(71),U=t(53),P=t(69),H=W.a(1e3),J=W.a(6e4),$=W.a(36e5),q=z.a(R.a,1e3),G=z.a(R.a,6e4),K=z.a(R.a,36e5),Q=B.a((function(n,e,t){return t.padStart(n,e)})),V=D.a([function(n){return Math.floor(K(n)%24)},function(n){return Math.floor(G(n)%60)},function(n){return Math.floor(q(n)%60)}]),X=function(n){var e=Object(a.a)(n,3),t=e[0],r=e[1],i=e[2];return $(t)+J(r)+H(i)},Y=function(n){var e=V(n),t=Object(a.a)(e,3),r=t[0],i=t[1],o=t[2],c="";return r>0&&(c+="".concat(r," hour").concat(1===r?"":"s",". ")),i>0&&(c+="".concat(i," minute").concat(1===i?"":"s",". ")),o>0&&(c+="".concat(o," second").concat(1===o?"":"s")),c},Z=(L.a(V,U.a(L.a(String,Q(2,"0"))),P.a(":")),{initial:"idle",id:"main",context:{initialTime:J(6),currentTime:J(6),notificationTimes:[]},states:{idle:{on:{START:"running",RESET:{actions:["reset"]},SET_TIME:{actions:["setTime"]},SET_NOTIFICATION_TIMES:{internal:!1,actions:["setNotifications"]}}},running:{invoke:[{src:"timer",id:"timer"},{src:"plantNotifications",id:"plantNotifications"}],on:{"":{target:"idle",cond:function(n){return n.currentTime<=0}},STOP:"idle",COUNT_DOWN:{actions:["countDown"]}}}}}),nn={actions:{setNotifications:Object(A.b)({notificationTimes:function(n,e){return"SET_NOTIFICATION_TIMES"===e.type?e.payload.notificationTimes:n.notificationTimes}}),setTime:Object(A.b)({initialTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.initialTime},currentTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.currentTime}}),countDown:Object(A.b)({currentTime:function(n){return n.currentTime-H(1)}}),reset:Object(A.b)({currentTime:function(n){return n.initialTime}})},services:{timer:function(){return function(n){var e=setInterval((function(){n("COUNT_DOWN")}),H(1));return function(){clearInterval(e)}}}}},en=Object(F.a)(Z,nn);function tn(){var n=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 414px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  & > div {\n    label {\n      font-size: 1rem;\n    }\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n  justify-content: space-between;\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n  font-size: 5rem;\n  text-align: center;\n  margin: 1rem 0;\n  display: flex;\n"]);return on=function(){return n},n}function an(){var n=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 0.5rem 1rem;\n  font-family: inherit;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  max-width: 414px;\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    filter: brightness(0.75);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    filter: brightness(1);\n    cursor: default;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  label {\n    position: absolute;\n    top: -0.8rem;\n    left: 1rem;\n    background-color: ",";\n    padding: 2px;\n  }\n\n  input {\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    border: 2px solid ",";\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  input {\n    transform: scale(2);\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(l.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  h2 {\n    width: 100%;\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(l.a)(["\n  background-color: ",";\n  color: ",';\n  min-height: 100vh;\n  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */\n  width: 100vw;\n  max-width: 414px;\n  margin: 0 auto;\n\n  &:after {\n    width: 100vw;\n    height: 100vh;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ',";\n    filter: brightness(0.75);\n    z-index: -1;\n  }\n"]);return sn=function(){return n},n}var mn=I.div(sn(),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.body})),dn=I.div(un()),fn=I.div(ln()),hn=I.div(cn(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.primary})),bn=I.button(an(),(function(n){return n.theme.primary}),(function(n){return n.theme.primaryAlt})),gn=I.h2(on()),pn=I.div(rn()),vn=I.div(tn(),(function(n){return n.theme.background}),(function(n){return n.theme.body})),Tn=function(){var n=r.useState(""),e=Object(a.a)(n,2),t=e[0],i=e[1],o=r.useRef(null);r.useEffect((function(){o.current&&o.current.click()}),[t]);var l=Object(C.useMachine)(en,{services:{plantNotifications:function(n){return function(){var e=(new Date).getTime(),t=function(){var t=(new Date).getTime();return n.initialTime-(t-e-1e3)},r=n.notificationTimes.map((function(n){var e=(n.interval?setInterval:setTimeout)((function(){var e=[Y(t()),n.message].filter(Boolean).join(". ").concat(".");i(e)}),H(n.time));return Object(c.a)({},n,{id:e})}));return function(){r.forEach((function(n){(n.interval?clearInterval:clearTimeout)(n.id)}))}}}}}),u=Object(a.a)(l,2),s=u[0],m=u[1],d=function(n){return function(e){var t=Object(_.a)(s.context.notificationTimes);switch(e.target.type){case"checkbox":t[n].interval=e.target.checked;break;case"number":t[n].time=Number(e.target.value);break;case"text":t[n].message=e.target.value}m({type:"SET_NOTIFICATION_TIMES",payload:{notificationTimes:t}})}},f=s.context.initialTime===s.context.currentTime,h=V(s.context.currentTime),b=h.map((function(n){return String(n).padStart(2,"0")})),g=Object(a.a)(b,3),p=g[0],v=g[1],T=g[2];return r.createElement(mn,null,r.createElement("button",{ref:o,onClick:function(){var n=new SpeechSynthesisUtterance(t);window.speechSynthesis.speak(n)},style:{display:"none"}}),r.createElement(dn,null,r.createElement("h1",null,"Workout Timer"),r.createElement(N,null),r.createElement(gn,null,r.createElement("div",{contentEditable:!0,onBlur:function(n){var e=Number(n.target.innerText),t=X([e,h[1],h[2]]);m({type:"SET_TIME",payload:{time:t}})},dangerouslySetInnerHTML:{__html:p}}),":",r.createElement("div",{contentEditable:!0,onBlur:function(n){var e=Number(n.target.innerText),t=X([h[0],e,h[2]]);m({type:"SET_TIME",payload:{time:t}})},dangerouslySetInnerHTML:{__html:v}}),":",r.createElement("div",{contentEditable:!0,onBlur:function(n){var e=Number(n.target.innerText),t=X([h[0],h[1],e]);m({type:"SET_TIME",payload:{time:t}})},dangerouslySetInnerHTML:{__html:T}}))),r.createElement(pn,null,r.createElement(bn,{disabled:s.matches("running"),onClick:function(){m("START")}},"Start"),r.createElement(bn,{disabled:!s.matches("running"),onClick:function(){m("STOP")}},"Stop"),r.createElement(bn,{disabled:f||s.matches("running"),onClick:function(){m("RESET")}},"Reset"),r.createElement(bn,{onClick:function(){var n=Object(_.a)(s.context.notificationTimes);n.push({time:0,interval:!1}),m({type:"SET_NOTIFICATION_TIMES",payload:{notificationTimes:n}})},disabled:!f||s.matches("running")},"Add Notification"),s.context.notificationTimes.map((function(n,e){return r.createElement(vn,{key:"".concat(e)},r.createElement(hn,null,r.createElement("label",{htmlFor:"seconds:".concat(e)},"Seconds"),r.createElement("input",{disabled:s.matches("running"),type:"number",value:n.time,onChange:d(e)})),r.createElement(hn,null,r.createElement("label",{htmlFor:"message:".concat(e)},"Message"),r.createElement("input",{disabled:s.matches("running"),placeholder:"Woohoo!",id:"interval:".concat(e),type:"text",value:n.message||"",onChange:d(e)})),r.createElement(fn,null,r.createElement("label",{htmlFor:"interval:".concat(e)},"Interval:"),r.createElement("input",{disabled:s.matches("running"),id:"interval:".concat(e),type:"checkbox",checked:n.interval,onChange:d(e)})))}))))},En=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function wn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var yn=document.getElementById("root");Object(o.render)(r.createElement((function(n){var e=n.children,t=function(){var n=r.useState({mode:S.mode,hasMounted:!1}),e=Object(a.a)(n,2)[1];return r.useEffect((function(){var n=localStorage.getItem("mode")||"light";e((function(e){return Object(c.a)({},e,{mode:n,hasMounted:!0})}))}),[e]),n}(),i=Object(a.a)(t,2),o=i[0],l=i[1];if(!o.hasMounted)return r.createElement("div",null);var u;return r.createElement(m.a,{theme:(u=o.mode,"dark"===u?x:O)},r.createElement(j.Provider,{value:{mode:o.mode,setTheme:function(n){n||(n={light:"dark",dark:"light"}[o.mode]),l((function(e){return Object(c.a)({},e,{mode:n})}))}}},e))}),null,r.createElement(Tn,null)),yn),function(n){if("serviceWorker"in navigator){if(new URL("/workout-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/workout-timer","/service-worker.js");En?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):wn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):wn(e,n)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.554f194c.chunk.js.map