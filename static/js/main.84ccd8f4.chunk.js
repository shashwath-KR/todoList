(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(7),o=n.n(r),a=n(8),s=n(2),u=(n(14),n(6)),l=n(9),b=n(0),j=function(t){var e=t.onSubmit,n=function(t){var e=Object(c.useState)(t),n=Object(s.a)(e,2),i=n[0],r=n[1];return{value:i,onChange:function(t){return r(t.target.value)},resetValue:function(){return r("")}}}(""),i=n.resetValue,r=Object(l.a)(n,["resetValue"]);return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r.value),i()},children:[Object(b.jsx)("input",Object(u.a)(Object(u.a)({type:"text",placeholder:"e.g toys"},r),{},{required:!0})),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})},d=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1],d=Object(c.useState)(""),x=Object(s.a)(d,2),O=x[0],p=x[1];return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h4",{style:{width:"30vw",backgroundColor:"chocolate",margin:"auto",fontSize:"15px",fontWeight:"300"},children:u}),Object(b.jsx)("h1",{children:"Grocery Bud"}),Object(b.jsx)(j,{onSubmit:function(t){t?(i([{text:t,complete:!1}].concat(Object(a.a)(n))),l("items added"),p("Clear List"),setTimeout((function(){l("")}),2e3)):t=!1}}),Object(b.jsx)("div",{children:n.map((function(t,e){var c=t.text;return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{style:{textAlign:"left",marginTop:"20px",marginLeft:"25px",width:"35vw",backgroundColor:"ghostwhite",border:"1px solid black",borderRadius:"2px",padding:"5px 0px 5px 25px"},children:c}),Object(b.jsx)("button",{onClick:function(){return function(t){i(n.filter((function(e){return e.id!==t})))}(e)},className:"del",children:"Delete"})]},c)}))}),Object(b.jsx)("span",{onClick:function(){i([]),p(""),l("empty list.."),setTimeout((function(){l("")}),2e3)},className:"btn",children:O})]})};n(16);o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.84ccd8f4.chunk.js.map