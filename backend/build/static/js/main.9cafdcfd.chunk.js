(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(15),i=e.n(r),a=e(6),u=e(3),s=function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:o})]})},l=e(4),j=e.n(l),d="/api/notes",f=function(){var t=j.a.get(d),n={id:1e4,content:" This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},b=function(t){return j.a.post(d,t).then((function(t){return t.data}))},m=function(t,n){return j.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},p=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},O=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:"1rem",background:"#121212",position:"fixed",bottom:0,textAlign:"center",width:"100vw",padding:"1rem"},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},h=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],i=Object(o.useState)(""),l=Object(u.a)(i,2),j=l[0],d=l[1],h=Object(o.useState)(!0),v=Object(u.a)(h,2),x=v[0],g=v[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),w=k[0],N=k[1];Object(o.useEffect)((function(){f().then((function(t){r(t)}))}),[]);var y=x?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(p,{message:w}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:y.map((function(t,n){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});console.log("CHANGED:",c),m(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n}))),console.log("Returned Note-1",n)})).catch((function(c){N("Note '".concat(n.content,"' was already deleted from server")),setTimeout((function(){N(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:e.length+1};b(n).then((function(t){r(e.concat(t)),d("")}))},children:[Object(c.jsx)("input",{value:j,onChange:function(t){d(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(O,{})]})};e(39);i.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9cafdcfd.chunk.js.map