(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{19:function(e,n,r){var t=r(20);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(6)(t,o);t.locals&&(e.exports=t.locals)},20:function(e,n,r){(e.exports=r(5)(!1)).push([e.i,".inp{border:none;box-shadow:none;outline-color:#ED3F00;background-color:#fff;border-bottom:1px solid;border-color:#333;height:22px;max-width:200px;margin-bottom:12px;outline:none}.inp:focus{border-color:#ED3F00}\n",""])},21:function(e,n,r){var t=r(22);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(6)(t,o);t.locals&&(e.exports=t.locals)},22:function(e,n,r){(e.exports=r(5)(!1)).push([e.i,".LoginWrapper{display:flex;flex-direction:column}\n",""])},23:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(3),i=r(8),c=(r(19),function(e){var n=e.onChange,r=e.value,t=e.type;return o.a.createElement("input",{className:"inp",type:t,onChange:function(e){var r=e.currentTarget.value;return n(r)},value:r})});function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(r,!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(e){o=!0,a=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=r(2),b=Object(a.a)(void 0,(function(e){return{onLogin:function(n){return e(Object(f.b)(n))}}}))((function(e){var n=e.onLogin,r=s(Object(t.useState)({name:"",password:""}),2),a=r[0],u=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{type:"text",value:a.name,onChange:function(e){return u(l({},a,{name:e}))}}),o.a.createElement(c,{type:"password",value:a.password,onChange:function(e){return u(l({},a,{password:e}))}}),o.a.createElement(i.a,{label:"login",onClick:function(){return n(a)}}))}));r(21);r.d(n,"LoginWrapper",(function(){return g}));var g=function(){return o.a.createElement("div",{className:"LoginWrapper"},o.a.createElement(b,null))};n.default=g}}]);
//# sourceMappingURL=3.bundle.js.map