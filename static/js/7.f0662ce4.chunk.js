(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{205:function(e,t,c){},216:function(e,t,c){"use strict";c.r(t);var n=c(37),r=c(29),s=c(4),i=c(1),a=c(5),o=c(9),j=c(24),u=c(30),l=(c(205),c(0)),b=function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(o.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(o.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(j.a,{});default:throw new Error("Unexpected process state")}},m=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(!1),j=Object(s.a)(o,2),m=j[0],d=j[1],O=Object(i.useState)(210),f=Object(s.a)(O,2),h=f[0],x=f[1],p=Object(i.useState)(!1),v=Object(s.a)(p,2),_=v[0],y=v[1],g=Object(u.a)(),w=g.getAllComics,N=g.process,S=g.setProcess;Object(i.useEffect)((function(){k(h,!0)}),[]);var k=function(e,t){d(!t),w(e).then(A).then((function(){return S("confirmed")}))},A=function(e){var t=!1;e.length<8&&(t=!0),n((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))})),d(!1),x(h+8),y(t)};return Object(l.jsxs)("div",{className:"comics__comicslist",children:[b(N,(function(){return e=c,Object(l.jsx)("ul",{className:"comics__flex",children:e.map((function(e,t){return Object(l.jsxs)("li",{className:"comics__comicsitem",children:[Object(l.jsxs)(a.b,{to:"/comics/".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title}),Object(l.jsx)("div",{className:"comics__comicsname",children:e.title})]}),Object(l.jsx)("div",{className:"comics__price",children:e.price})]},t)}))});var e}),m),Object(l.jsx)("button",{className:"button button__main button__long",disabled:m,style:{display:_?"none":"block"},onClick:function(){return k(h)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},d=c(87);t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(l.jsx)("title",{children:"Comics Page"})]}),Object(l.jsx)(d.a,{}),Object(l.jsx)(m,{})]})}},29:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(8);var r=c(6);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.f0662ce4.chunk.js.map