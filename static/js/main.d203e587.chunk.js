(this["webpackJsonpmarkdown-preview-react"]=this["webpackJsonpmarkdown-preview-react"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=n(5),l=n(6),o=n(12),d=n(10),j=n(11),b=Object(c.createContext)(),h=n(7),u=n(0),m=function(){var e=Object(c.useContext)(b),t=e.previewType,n=e.toggleType;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row mt-4",children:Object(u.jsx)("div",{className:"col text-center",children:Object(u.jsx)("h1",{children:Object(u.jsx)(j.a,{className:"text-align-center bg-light text-dark",variant:"light",children:"Markdown Previewer"})})})}),!h.isMobile&&Object(u.jsx)("div",{className:"my-4 text-center",children:Object(u.jsxs)("button",{className:"btn btn-primary",onClick:function(){console.log(t),n()},children:["Preview ",t]})})]})},O=n(2),x=n(9),g=n.n(x),p=function(){var e=Object(c.useContext)(b).colSize,t={width:"12"===e?"60%":"90%",height:"60vh",margin:"auto",padding:"10px"},n={width:"12"===e?"75%":"90%",margin:"auto",padding:"1.3rem",backgroundColor:"#DCDCDC",borderRadius:"20px",border:"none",minHeight:"60vh",overflowWrap:"anywhere",textAlign:"start"},r=Object(c.useState)(""),a=Object(O.a)(r,2),i=a[0],s=a[1];return Object(u.jsxs)("div",{className:"row mt-4 text-center",children:[Object(u.jsxs)("div",{className:"col-md-".concat(e," my-3 col-sm-10"),children:[Object(u.jsx)("h2",{children:Object(u.jsx)("label",{htmlFor:"input",children:Object(u.jsx)("span",{className:"badge bg-secondary",bg:"secondary",children:" Markdown Input "})})}),Object(u.jsx)("div",{className:"mark-input",children:Object(u.jsx)("textarea",{name:"area",onChange:function(e){!function(e){s(e)}(e.target.value)},value:i,className:"input",id:"input",style:t,cols:"30",rows:"10"})})]}),Object(u.jsxs)("div",{className:"col-md-".concat(e," my-3 col-sm-10"),children:[Object(u.jsx)("h2",{children:Object(u.jsx)("span",{className:"badge bg-secondary",bg:"dark",children:" Preview "})}),Object(u.jsx)("div",{name:"preview",id:"preview",style:n,dangerouslySetInnerHTML:{__html:g()(i)}})]})]})},v=function(e){var t=Object(c.useState)("seperate"),n=Object(O.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)("6"),s=Object(O.a)(i,2),l=s[0],o=s[1];return Object(u.jsx)(b.Provider,{value:{toggleType:function(){"side by side"===r?(a("seperate"),o("6")):(a("side by side"),o("12"))},previewType:r,colSize:l},children:e.children})},w=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(v,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(p,{})]})})}}]),n}(c.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(19);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.d203e587.chunk.js.map