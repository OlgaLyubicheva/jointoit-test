(window["webpackJsonpjointoit-test"]=window["webpackJsonpjointoit-test"]||[]).push([[0],{13:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(8),c=n.n(o),i=n(3),u=n(5),l=n(4),m=n(9),s=n(2),f=n(10),p=n(11),d=n(12);n(18);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=function(e){var t=e.onClouse,n=e.onSave,o=e.form,c=Object(r.useState)({title:"upd"===o.form?o.event.title:"",start:"upd"===o.form?o.event.start:"",time:"upd"===o.form?o.event.time:"",note:"upd"===o.form?o.event.note:""}),u=Object(l.a)(c,2),m=u[0],s=u[1],f=function(e){var t=e.target,n=t.name,r=t.value;s(v({},m,Object(i.a)({},n,r)))};return a.a.createElement("div",{className:"form-box"},a.a.createElement("form",{className:"form",action:"",onSubmit:function(e){e.preventDefault(),"upd"===o.form?n(v({},o.event,{},m),"upd"):n(m,"add"),t({form:"",event:{}})}},a.a.createElement("button",{className:"close form__button",type:"button",onClick:function(){return t({form:"",event:{}})}},"x"),a.a.createElement("input",{className:"form__input",type:"text",name:"title",value:m.title,onChange:f}),a.a.createElement("input",{className:"form__input",type:"date",name:"start",value:m.start,onChange:f}),a.a.createElement("input",{className:"form__input",type:"time",name:"time",value:m.time,onChange:f}),a.a.createElement("input",{className:"form__input",name:"note",value:m.note,onChange:f}),"upd"===o.form?a.a.createElement("button",{className:"form__button red-button",type:"button",onClick:function(){return n(o.event,"del")}},"DISCARD"):a.a.createElement("button",{className:"form__button red-button",type:"reset",onClick:function(){s({title:"",start:"",time:"",note:""})}},"Cansel"),a.a.createElement("button",{type:"submit",className:"form__button m-button"},"Save")))};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(){var e=Object(r.useState)([{id:1,title:"my event",start:"2019-08-29"},{id:2,title:"my event",start:"2019-08-30"}]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)({form:"",event:{}}),i=Object(l.a)(c,2),b=i[0],v=i[1];return a.a.createElement("div",null,a.a.createElement("div",null,"Calendar view"),a.a.createElement(m.a,{defaultView:"dayGridMonth",plugins:[s.d,f.a,p.a,d.a],header:{left:"dayGridMonth,timeGridWeek,timeGridDay,listWeek",center:"today,prev,next",right:"title"},buttonText:{prev:"Back",next:"Next",today:"Today",dayGridMonth:"Month",timeGridWeek:"Week",timeGridDay:"Day",listWeek:"Agenda"},events:n,eventClick:function(e){return function(e){var t=n.find(function(t){return t.id===+e});v({form:"upd",event:t})}(e.event.id)},dateClick:function(e){v({form:"add",event:{}})}}),""!==b.form&&a.a.createElement(O,{onSave:function(e,t){var r=n.filter(function(t){return t.id!==e.id});switch(t){case"upd":o([].concat(Object(u.a)(r),[e]));break;case"add":o([].concat(Object(u.a)(n),[j({},e,{id:n.length+1})]));break;case"del":o(Object(u.a)(r))}},onClouse:v,form:b}))};c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0bcc0f51.chunk.js.map