(this["webpackJsonpreact-todolist-test"]=this["webpackJsonpreact-todolist-test"]||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),i=a.n(l),r=a(1),s=a(6),o=function(e){return c.a.createElement("div",{className:"todolist ".concat(e.checkStyle),id:e.id},c.a.createElement("div",{onClick:function(){return e.checkClick(e.id)},className:"todolist__content ".concat(e.checkStyle)},e.value),!e.checked&&c.a.createElement("div",{className:"todolist__buttons"},c.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.onDelete(e.id)}}),c.a.createElement("i",{className:"fas fa-pen",onClick:function(){return e.onEdit(e.id)}})))},m=a(10),d=a.n(m),u=a(2),f=a.n(u),I=function(e){return c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement("form",{onSubmit:e.onSubmit},c.a.createElement("input",{type:e.type,onChange:e.onChange,placeholder:e.placeholder,value:e.value}))))},g=function(){return c.a.createElement(f.a,{left:!0,cascade:!0},c.a.createElement("header",{className:"mainpage__header"},c.a.createElement("a",{href:"#!"},"React Todo List")))},v=a(11),E=a.n(v),p=function(){return c.a.createElement("div",{className:"mainpage__main--title"},c.a.createElement(E.a,null,c.a.createElement("p",null,"todo",c.a.createElement("span",null,"list")),c.a.createElement("p",null,"A simple todolist app built with React Hooks & Context")))},b=function(){var e=Object(n.useState)({value:"",id:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)({list:sessionStorage.getItem("addedItem")?JSON.parse(sessionStorage.getItem("addedItem")):[]}),m=Object(s.a)(i,2),u=m[0],v=m[1];function E(e){return{newItems:u.list.slice(),selectedItem:u.list.find((function(t){return t.id===e})),selectedIndex:u.list.findIndex((function(t){return t.id===e}))}}var b=function(e){var t=E(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{animate:!t.selectedItem.animate}),v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})})),console.log(t.newItems);var a=t.newItems.filter((function(t){return t.id!==e}));v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:a})})),sessionStorage.setItem("addedItem",JSON.stringify(a))},O=function(e){var t=E(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{animate:!t.selectedItem.animate}),v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})}));var a=t.newItems.filter((function(t){return t.id!==e}));v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:a})})),l({value:t.selectedItem.value}),sessionStorage.setItem("addedItem",JSON.stringify(a))},h=function(e){var t=E(e);t.newItems[t.selectedIndex]=Object(r.a)(Object(r.a)({},t.newItems[t.selectedIndex]),{},{trigger:!t.selectedItem.trigger}),v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t.newItems})})),sessionStorage.setItem("addedItem",JSON.stringify(t.newItems))};return c.a.createElement("div",{className:"mainpage__container"},c.a.createElement(g,null),c.a.createElement("main",{className:"mainpage__main"},c.a.createElement("div",{className:"mainpage__main--content"},c.a.createElement(p,null),c.a.createElement("div",null,c.a.createElement(I,{placeholder:"Add you task here...",onSubmit:function(e){e.preventDefault();var t=u.list.slice();a.value&&(t.push({value:a.value,id:a.id,trigger:!1,animate:!0}),v((function(e){return Object(r.a)(Object(r.a)({},e),{},{list:t})})),localStorage.setItem("addedItem",JSON.stringify(u)),l({value:"",id:""}),sessionStorage.setItem("addedItem",JSON.stringify(t)))},onChange:function(e){l({value:e.target.value,id:d.a.generate()})},type:"text",value:a.value})),c.a.createElement("div",{className:"todolist__container"},u.list.map((function(e){return c.a.createElement(f.a,{left:!0},c.a.createElement(o,{value:e.value,key:e.id,id:e.id,onDelete:b,onEdit:O,checkStyle:e.trigger&&"check-style check-color",checkClick:h,show:e.animate,checked:e.trigger}))}))))),c.a.createElement("footer",{className:"mainpage__footer"},"All rights reserved"))};var O=function(){return c.a.createElement("div",null,c.a.createElement(b,null))};a(28),a(29);i.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.22f97a1f.chunk.js.map