(this["webpackJsonpreact-todolist-test"]=this["webpackJsonpreact-todolist-test"]||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),i=a.n(c),r=a(1),s=a(7),m=a(5),o=a.n(m),u=function(e){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"todolist ".concat(e.checkStyle),id:e.id},l.a.createElement("span",{onClick:function(){return e.checkClick(e.id)},className:"todolist__content"},e.value),l.a.createElement("span",null,l.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.onDelete(e.id)}}),l.a.createElement("i",{className:"fas fa-pen",onClick:function(){return e.onEdit(e.id)}}))))},d=a(10),f=a.n(d),I=function(e){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:e.onSubmit},l.a.createElement("input",{type:e.type,onChange:e.onChange,placeholder:e.placeholder,value:e.value})))},v=function(){return l.a.createElement(o.a,{left:!0,cascade:!0},l.a.createElement("header",{className:"mainpage__header"},l.a.createElement("a",{href:"#!"},"React Todo List")))},g=a(11),E=a.n(g),p=a(33),b=function(){return l.a.createElement("div",{className:"mainpage__main--title"},l.a.createElement(E.a,null,l.a.createElement("p",null,"todo",l.a.createElement("span",null,"list"))),l.a.createElement(p.a,{in:!0,timeout:1e3,classNames:"sub-title"},l.a.createElement("p",null,"A simple todolist app built with React Hooks & Context")))},O=function(){var e=Object(n.useState)({value:"",id:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({list:sessionStorage.getItem("addedItem")?JSON.parse(sessionStorage.getItem("addedItem")):[]}),m=Object(s.a)(i,2),o=m[0],d=m[1];function g(e){return{newItems:o.list.slice(),selectedItem:o.list.find((function(t){return t.id===e})),selectedIndex:o.list.findIndex((function(t){return t.id===e}))}}var E=function(e){var t=g(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{animate:!t.selectedItem.animate}),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})}));var a=t.newItems.filter((function(t){return t.id!==e}));d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:a})})),sessionStorage.setItem("addedItem",JSON.stringify(a))},p=function(e){var t=g(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{animate:!t.selectedItem.animate}),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})}));var a=t.newItems.filter((function(t){return t.id!==e}));d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:a})})),c({value:t.selectedItem.value}),sessionStorage.setItem("addedItem",JSON.stringify(a))},O=function(e){var t=g(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{trigger:!t.selectedItem.trigger}),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})})),sessionStorage.setItem("addedItem",JSON.stringify(t.newItems))};return l.a.createElement("div",{className:"mainpage__container"},l.a.createElement(v,null),l.a.createElement("main",{className:"mainpage__main"},l.a.createElement("div",{className:"mainpage__main--content"},l.a.createElement(b,null),l.a.createElement("div",null,l.a.createElement(I,{placeholder:"Add you task here...",onSubmit:function(e){e.preventDefault();var t=o.list.slice();a.value&&(t.push({value:a.value,id:a.id,trigger:!1,animate:!0}),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t})})),localStorage.setItem("addedItem",JSON.stringify(o)),c({value:"",id:""}),sessionStorage.setItem("addedItem",JSON.stringify(t)))},onChange:function(e){c({value:e.target.value,id:f.a.generate()})},type:"text",value:a.value})),l.a.createElement("div",{className:"todolist__container"},o.list.map((function(e){return l.a.createElement(u,{value:e.value,key:e.id,id:e.id,onDelete:E,onEdit:p,checkStyle:e.trigger&&"check-style check-color",checkClick:O})}))))),l.a.createElement("footer",{className:"mainpage__footer"},"All rights reserved"))};var h=function(){return l.a.createElement("div",null,l.a.createElement(O,null))};a(29),a(30);i.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5dade51d.chunk.js.map