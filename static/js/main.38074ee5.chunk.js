(this["webpackJsonpjson-representation-component"]=this["webpackJsonpjson-representation-component"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(14)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c),l=t(1),s=(t(9),function(e){var n=e.initialUrlInput,t=e.fetchJson,c=e.isLoading,o=Object(a.useState)(""),s=Object(l.a)(o,2),u=s[0],i=s[1];return Object(a.useEffect)((function(){i(n)}),[]),r.a.createElement("div",{className:"header","data-testid":"header"},r.a.createElement("div",null,"URL:"),r.a.createElement("input",{className:"header__input",type:"text",value:u,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){t(u)}},c?r.a.createElement("div",{className:"spinner"},"\ud83e\uddd9\u200d\u2642\ufe0f"):"Fetch JSON"))}),u=(t(10),t(11),t(12),function(e){return e||0===e?"".concat(e," : "):""}),i=function(e){var n=e.typeOfJsonValue,t=e.open,a=e.setOpen,c=e.keyOfNode,o=e.jsonValue;return"object"===n&&null!==o&&Object.keys(o).length>0?r.a.createElement("span",{onClick:function(){return a(!t)},className:"key"},"".concat(t?"-":"+"," ").concat(u(c))):r.a.createElement("span",null,u(c))},m=(t(13),function(e){var n=e.jsonValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"value"},"["),n.map((function(e,n){return r.a.createElement(h,{key:n,keyOfNode:n,jsonValue:e})})),r.a.createElement("span",null,"]"))}),p=function(e){var n=e.jsonValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"value"},"{"),Object.keys(n).map((function(e){return r.a.createElement(h,{key:e,keyOfNode:e,jsonValue:n[e]})})),r.a.createElement("span",null,"}"))},f=function(e){var n=e.jsonValue;return r.a.createElement("span",{className:"boolean value"},"".concat(n?"True":"False"))},j=function(e){var n=e.jsonValue;return r.a.createElement("span",{className:"number value"},n)},E=function(e){var n=e.jsonValue;return r.a.createElement("span",{className:"string value"},'"'.concat(n,'"'))},v=function(e){var n=e.jsonValue,t=e.open;if(null===n)return r.a.createElement("span",{className:"null value"},"(null)");var a=Array.isArray(n);return t?a?r.a.createElement(m,{jsonValue:n}):r.a.createElement(p,{jsonValue:n}):r.a.createElement("span",{className:"object value"},a?"Array(".concat(n.length,")"):"Object(".concat(Object.keys(n).length,")"))},d=function(e){var n=e.typeOfJsonValue,t=e.open,a=e.jsonValue;return{boolean:r.a.createElement(f,{jsonValue:a}),string:r.a.createElement(E,{jsonValue:a}),number:r.a.createElement(j,{jsonValue:a}),object:r.a.createElement(v,{jsonValue:a,open:t})}[n]},h=function(e){var n=e.keyOfNode,t=e.jsonValue,c=Object(a.useState)(!1),o=Object(l.a)(c,2),s=o[0],u=o[1],m=typeof t;return r.a.createElement("div",{className:"jsonItem"},r.a.createElement(i,{typeOfJsonValue:m,open:s,setOpen:u,keyOfNode:n,jsonValue:t}),r.a.createElement(d,{typeOfJsonValue:m,open:s,jsonValue:t}))};var O=function(e){var n=e.initialUrlInput,t=Object(a.useState)({}),c=Object(l.a)(t,2),o=c[0],u=c[1],i=Object(a.useState)(!1),m=Object(l.a)(i,2),p=m[0],f=m[1],j=Object(a.useState)(""),E=Object(l.a)(j,2),v=E[0],d=E[1];return r.a.createElement("div",{className:"jsonRepresentation"},r.a.createElement(s,{initialUrlInput:n,fetchJson:function(e){u({}),f(!0),d("");var n={name:"mocked response",nested:{obj:{},arr:[],arrObj:[{c:2,d:3,e:{f:5}},{m:4}]}};fetch(e).then((function(e){return e.json()})).then((function(e){return u(n)})).catch((function(e){return d("ERROR : "+e+" --- please check that the url is valid")})).finally((function(){return f(!1)}))},isLoading:p}),r.a.createElement("div",{className:"error"},v),r.a.createElement("div",{className:"jsonHolder"},o&&Object.keys(o).length>0&&r.a.createElement(h,{jsonValue:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,{initialUrlInput:"https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.38074ee5.chunk.js.map