(this["webpackJsonpmatches-mini-game"]=this["webpackJsonpmatches-mini-game"]||[]).push([[0],[,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=(c(9),c(2)),u=(c(10),c(11),c(12),c(13),c(0)),o=function(t){var e=t.isPlayerWon;return Object(u.jsx)("div",{className:"end",children:Object(u.jsxs)("div",{className:"end__title",children:[e?"\u2728You won!\u2728":"",e?"":"\ud83d\ude2dComputer won!\ud83d\ude2d"]})})},j=function(t){var e=t.firstTurn,c=t.maxMatches,a=t.activeMatches,s=Object(n.useState)(1===e),r=Object(i.a)(s,2),j=r[0],l=r[1],b=Object(n.useState)(!1),m=Object(i.a)(b,2),d=m[0],O=m[1],h=Object(n.useState)(0),_=Object(i.a)(h,2),x=_[0],f=_[1],v=Object(n.useState)(0),p=Object(i.a)(v,2),N=p[0],g=p[1],C=Object(n.useRef)(),y=2*c+1||25,M=Object(n.useMemo)((function(){return y-x-N}),[x,N,y]);C.current=M;var S=Object(n.useCallback)((function(){setTimeout((function(){var t,e=C.current;e>3&&((e-1)%4===0||(e-1)%4===1?t=1:(e-3)%4!==0&&(e-3)%4!==1||(t=3),(N+3)%2!==0&&e-3===3?t=3:(N+2)%2!==0&&e-2===3?t=2:(N+1)%2!==0&&e-1===3&&(t=1)),3===e&&(t=N%2===0?2:3),1!==e&&2!==e||(t=1),g((function(e){return e+t})),l(!0)}),1e3)}),[N]),k=function(t){var e=Number(t.target.value);!j||M-e<0||(M-e!==0?(l(!1),f(x+e),S()):(f(x+e),l(!1)))};Object(n.useEffect)((function(){0===M&&x%2===0&&O(!0)}),[M,x]);return Object(n.useEffect)((function(){2===e&&S()}),[e,S]),Object(u.jsx)("div",{className:"game",children:0===M?Object(u.jsx)(o,{isPlayerWon:d}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"game__counters-container",children:[Object(u.jsxs)("div",{className:"game__counter",children:["Computer score: ",N]}),Object(u.jsxs)("div",{className:"game__counter",children:["Matches left:",M,Object(u.jsx)("div",{className:"game__emodji-container",children:M>0?Array(M).fill().map((function(){return Object(u.jsx)("span",{role:"img",children:"\ud83d\udd25"})})):""})]}),Object(u.jsxs)("div",{className:"game__counter",children:["Player score: ",x]})]}),Object(u.jsx)("div",{className:"game__title",children:j?"Your Turn now!":"Computer Turn now!"}),Object(u.jsx)("div",{className:"game__title",children:"Choose amount of matches to take"}),Object(u.jsx)("button",{type:"button",className:"game__reset button",onClick:function(){O(!1),f(0),g(0),l(!0),2===e&&S()},children:"Restart Game"}),Object(u.jsx)("div",{className:"game__buttons-container",children:Array(a||3).fill().map((function(t,e){return Object(u.jsx)("button",{type:"button",className:"game__button button",value:e+1,onClick:k,children:e+1})}))})]})})},l=(c(15),function(t){var e=t.startGame,c=Object(n.useState)(12),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(3),j=Object(i.a)(o,2),l=j[0],b=j[1];return Object(u.jsxs)("div",{className:"start",children:[Object(u.jsx)("div",{className:"start__title",children:"Standart Game Mode"}),Object(u.jsxs)("div",{className:"start__container",children:[Object(u.jsx)("button",{type:"button",className:"start__button",onClick:function(){e(1)},children:"Player First Turn"}),Object(u.jsx)("button",{type:"button",className:"start__button",onClick:function(){e(2)},children:"Computer First Turn"})]}),Object(u.jsxs)("div",{className:"start__custom",children:[Object(u.jsx)("div",{className:"start__title",children:"Custom Game Mode"}),Object(u.jsxs)("div",{className:"start__container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"start__input-title",children:"Enter Max Matches here :"}),Object(u.jsx)("input",{type:"number",className:"start__input max-matches",placeholder:"Enter Amount of matches",value:s,onChange:function(t){return r(t.target.value)},min:"2",max:"99"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"start__input-title",children:"Enter Active Matches here :"}),Object(u.jsx)("input",{type:"number",className:"start__input active-matches",placeholder:"Enter Amount of active matches",value:l,onChange:function(t){return b(t.target.value)},min:"1",max:"99"})]})]}),Object(u.jsxs)("div",{className:"start__container",children:[Object(u.jsx)("button",{type:"button",className:"start__button",onClick:function(){e(1,s,l)},children:"Player First Turn"}),Object(u.jsx)("button",{type:"button",className:"start__button",onClick:function(){e(2,s,l)},children:"Computer First Turn"})]})]})]})}),b=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(0),r=Object(i.a)(s,2),o=r[0],b=r[1],m=Object(n.useState)(14),d=Object(i.a)(m,2),O=d[0],h=d[1],_=Object(n.useState)(3),x=Object(i.a)(_,2),f=x[0],v=x[1],p=Object(n.useCallback)((function(t,e,c){a(!0),b(t),e!==O&&h(+e),c!==f&&v(+c)}),[O,f]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"game-window",children:Object(u.jsxs)("div",{className:"game-window__container",children:[c?"":Object(u.jsx)(l,{startGame:p}),c&&Object(u.jsx)(j,{firstTurn:o,maxMatches:O,activeMatches:f})]})})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.a4af5c8e.chunk.js.map