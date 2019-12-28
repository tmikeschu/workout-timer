(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{54:function(n,e,t){n.exports=t(63)},63:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t.n(r),o=t(44),a=t(22),c=t(23),u=t(14),l=t(51),s=t(52),m=t(46),d=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},i.a.createElement("path",{d:"M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6m0-7l2 3a7 7 0 00-4 0l2-3M3 7h5a7 7 0 00-3 4L3 7m0 10l2-4a7 7 0 003 4H3M21 7l-2 4a7 7 0 00-2-4h4m0 10h-4a7 7 0 002-4l2 4m-9 5l-2-3h4l-2 3z"}))},f=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},i.a.createElement("path",{d:"M18 4l-3 2 1 3-2-2-3 2 1-3-3-2h3l2-3 1 3h3m3 7l-1 1v2l-1-1-2 1v-2l-1-1h2l1-2v2h2m-2 5c1 0 2 1 1 2l-1 1c-4 4-10 4-14 0A10 10 0 016 4c1-1 2 0 2 1a10 10 0 0011 11m-2 2c-2 0-5-1-7-3-3-3-4-5-4-8a8 8 0 0011 11z"}))};function h(){var n=Object(u.a)(["\n  background-color: transparent;\n  border: none;\n  svg {\n    fill: ",";\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n    transition: background-color 300ms;\n  }\n"]);return b=function(){return n},n}var g="#FBFEF9",p="#F3EFF5",v="#1C2826",T="#ef3054",w="#43AA8B",E="#3454D1",y="#F49390";Object(s.a)(b());var k={error:T,success:w},O=Object(c.a)({},k,{background:p,body:v,primary:y,primaryAlt:g}),x=Object(c.a)({},k,{background:v,body:g,primary:E,primaryAlt:g}),j={mode:"light",setTheme:function(){}},S=r.createContext(j),I=l.a,N=I.button(h(),(function(n){return n.theme.body})),C=function(){var n=r.useContext(S),e=n.mode,t=n.setTheme;return r.createElement(N,{onClick:function(){t()}},"light"===e?r.createElement(d,null):r.createElement(f,null))},M=t(41),A=t(49),F=t(3),_=t(38),W=t(65),z=t(67),R=t(68),D=t(53),U=t(66),P=function(n){return 1e3*n},B=function(n){return P(60*n)},L=W.a((function(n,e,t){return t.padStart(n,e)})),J=z.a([function(n){return Math.floor(n/36e5%24)},function(n){return Math.floor(n/6e4%60)},function(n){return Math.floor(n/1e3%60)}]),H=R.a(J,D.a(R.a(String,L(2,"0"))),U.a(":")),$={initial:"idle",id:"main",context:{initialTime:B(6),currentTime:B(6),notificationTimes:[]},states:{idle:{on:{START:"running",RESET:{actions:["reset"]},SET_TIME:{actions:["setTime"]},SET_NOTIFICATION_TIMES:{internal:!1,actions:["setNotifications"]}}},running:{invoke:[{src:"timer",id:"timer"},{src:"plantNotifications",id:"plantNotifications"}],on:{"":{target:"idle",cond:function(n){return n.currentTime<=0}},STOP:"idle",COUNT_DOWN:{actions:["countDown"]}}}}},q={actions:{setNotifications:Object(F.b)({notificationTimes:function(n,e){return"SET_NOTIFICATION_TIMES"===e.type?e.payload.notificationTimes:n.notificationTimes}}),setTime:Object(F.b)({initialTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.initialTime},currentTime:function(n,e){return"SET_TIME"===e.type?e.payload.time:n.currentTime}}),countDown:Object(F.b)({currentTime:function(n){return n.currentTime-P(1)}}),reset:Object(F.b)({currentTime:function(n){return n.initialTime}})},services:{timer:function(){return function(n){var e=setInterval((function(){n("COUNT_DOWN")}),P(1));return function(){clearInterval(e)}}}}},G=Object(_.a)($,q);function K(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  padding: 1.5rem;\n  width: 100%;\n  max-width: 414px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  & > div {\n    label {\n      font-size: 1rem;\n    }\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem;\n  justify-content: space-between;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  font-size: 3rem;\n  text-align: center;\n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding: 0.5rem 1rem;\n  font-family: inherit;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  max-width: 414px;\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    filter: brightness(0.75);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    filter: brightness(1);\n    cursor: default;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  label {\n    position: absolute;\n    top: -0.8rem;\n    left: 1rem;\n    background-color: ",";\n    padding: 2px;\n  }\n\n  input {\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    border: 2px solid ",";\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  input {\n    transform: scale(2);\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  h2 {\n    width: 100%;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",';\n  min-height: 100vh;\n  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */\n  width: 100vw;\n  max-width: 414px;\n  margin: 0 auto;\n\n  &:after {\n    width: 100vw;\n    height: 100vh;\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ',";\n    filter: brightness(0.75);\n    z-index: -1;\n  }\n"]);return en=function(){return n},n}var tn=I.div(en(),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.body})),rn=I.div(nn()),on=I.div(Z()),an=I.div(Y(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.body}),(function(n){return n.theme.primary})),cn=I.button(X(),(function(n){return n.theme.primary}),(function(n){return n.theme.primaryAlt})),un=I.h2(V()),ln=I.div(Q()),sn=I.div(K(),(function(n){return n.theme.background}),(function(n){return n.theme.body})),mn=function(){var n=Object(A.useMachine)(G,{services:{plantNotifications:function(n){return function(){var e=(new Date).getTime(),t=n.notificationTimes.map((function(t){var r=(t.interval?setInterval:setTimeout)((function(){var r=new SpeechSynthesisUtterance(t.message||function(n){var e=J(n),t=Object(a.a)(e,3),r=t[0],i=t[1],o=t[2],c="";return r>0&&(c+="".concat(r," hour").concat(1===r?"":"s",". ")),i>0&&(c+="".concat(i," minute").concat(1===i?"":"s",". ")),o>0&&(c+="".concat(o," second").concat(1===o?"":"s")),c}(function(){var t=(new Date).getTime();return n.initialTime-(t-e-1e3)}()));window.speechSynthesis.speak(r)}),P(t.time));return Object(c.a)({},t,{id:r})}));return function(){t.forEach((function(n){(n.interval?clearInterval:clearTimeout)(n.id)}))}}}}}),e=Object(a.a)(n,2),t=e[0],i=e[1],o=function(n){return function(e){var r=Object(M.a)(t.context.notificationTimes);switch(e.target.type){case"checkbox":r[n].interval=e.target.checked;break;case"number":r[n].time=Number(e.target.value);break;case"text":r[n].message=e.target.value}i({type:"SET_NOTIFICATION_TIMES",payload:{notificationTimes:r}})}},u=t.context.initialTime===t.context.currentTime;return r.createElement(tn,null,r.createElement(rn,null,r.createElement("h1",null,"Workout Timer"),r.createElement(C,null),r.createElement(un,null,H(t.context.currentTime))),r.createElement(ln,null,r.createElement(cn,{disabled:t.matches("running"),onClick:function(){i("START")}},"Start"),r.createElement(cn,{disabled:!t.matches("running"),onClick:function(){i("STOP")}},"Stop"),r.createElement(cn,{disabled:u||t.matches("running"),onClick:function(){i("RESET")}},"Reset"),r.createElement(cn,{onClick:function(){var n=Object(M.a)(t.context.notificationTimes);n.push({time:0,interval:!1}),i({type:"SET_NOTIFICATION_TIMES",payload:{notificationTimes:n}})},disabled:!u||t.matches("running")},"Add Notification"),t.context.notificationTimes.map((function(n,e){return r.createElement(sn,{key:"".concat(e)},r.createElement(an,null,r.createElement("label",{htmlFor:"seconds:".concat(e)},"Seconds"),r.createElement("input",{disabled:t.matches("running"),type:"number",value:n.time,onChange:o(e)})),r.createElement(an,null,r.createElement("label",{htmlFor:"message:".concat(e)},"Message"),r.createElement("input",{disabled:t.matches("running"),placeholder:"Woohoo!",id:"interval:".concat(e),type:"text",value:n.message||"",onChange:o(e)})),r.createElement(on,null,r.createElement("label",{htmlFor:"interval:".concat(e)},"Interval:"),r.createElement("input",{disabled:t.matches("running"),id:"interval:".concat(e),type:"checkbox",checked:n.interval,onChange:o(e)})))}))))},dn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var hn=document.getElementById("root");Object(o.render)(r.createElement((function(n){var e=n.children,t=function(){var n=r.useState({mode:j.mode,hasMounted:!1}),e=Object(a.a)(n,2)[1];return r.useEffect((function(){var n=localStorage.getItem("mode")||"light";e((function(e){return Object(c.a)({},e,{mode:n,hasMounted:!0})}))}),[e]),n}(),i=Object(a.a)(t,2),o=i[0],u=i[1];if(!o.hasMounted)return r.createElement("div",null);var l;return r.createElement(m.a,{theme:(l=o.mode,"dark"===l?x:O)},r.createElement(S.Provider,{value:{mode:o.mode,setTheme:function(n){n||(n={light:"dark",dark:"light"}[o.mode]),u((function(e){return Object(c.a)({},e,{mode:n})}))}}},e))}),null,r.createElement(mn,null)),hn),function(n){if("serviceWorker"in navigator){if(new URL("/workout-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/workout-timer","/service-worker.js");dn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):fn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fn(e,n)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.21664e38.chunk.js.map