(this["webpackJsonpborrel-beter"]=this["webpackJsonpborrel-beter"]||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),m=a(11),i=a(2),o=(a(32),a(4)),s=a(1);var u=function(e){return r.a.createElement("div",{className:"Plank",id:"plank-".concat(e.index)},r.a.createElement("div",{className:"plank-info"},r.a.createElement("div",{className:"plank-name"},e.plank.name),r.a.createElement("div",{className:"plank-description"},e.plank.description),"Make Your Own!"===e.plank.name?r.a.createElement(o.b,{to:"/borrel-beter/customize"},r.a.createElement("div",{className:"add-plank"}," Customize! ")):e.inCart?r.a.createElement("div",{className:"added-plank"},"In Cart"):r.a.createElement("div",{className:"add-plank",onClick:function(){e.addItem(e.plank)}},"Add to Cart")),r.a.createElement("div",{className:"plank-image"},r.a.createElement("img",{src:e.plank.imageUrl,alt:""})))},d=a(26),E=(a(37),a(42),d.initializeApp({apiKey:"AIzaSyDtFonDn0EfaxWF6mKHGNVwb4QJblbcRxI",authDomain:"borrelbeter.firebaseapp.com",databaseURL:"https://borrelbeter.firebaseio.com",projectId:"borrelbeter",storageBucket:"borrelbeter.appspot.com",messagingSenderId:"748726098284",appId:"1:748726098284:web:1ab52d81f041779bf7fb49"})),b=E.firestore();E.storage().ref();var f=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(null),s=Object(i.a)(m,2),d=s[0],E=s[1],f=Object(n.useRef)(null);function v(){E(Math.round((window.scrollX-window.innerWidth)/window.innerWidth))}function p(e){var t;gsap.to(window,{duration:1,scrollTo:{y:0,x:(t=100*e+100,parseFloat(t)/100*window.innerWidth)}})}function h(t){for(var a=!1,n=0;n<e.cart.length;n++)e.cart[n][0].name===t.name&&(a=!0);return a}return Object(n.useEffect)((function(){var e=[];b.collection("plankjes").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)})),v(),gsap.to(f,{opacity:1,duration:1,delay:.5})}),[]),Object(n.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]),r.a.createElement("div",{className:"Store"},r.a.createElement(o.b,{to:"/borrel-beter/cart"},r.a.createElement("div",{className:"menu-button"},"Cart")),r.a.createElement("div",{className:"store-title"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"title-border"}),r.a.createElement("h1",null,"Borrel Beter"),r.a.createElement("div",{className:"sub-title"},"Plankjes, Hapjes en meer")),r.a.createElement("div",{className:"see-plankjes-button",onClick:function(){return p(0)}},"See Plankjes")),c&&c.map((function(t,a){return r.a.createElement(u,{index:a,inCart:h(t),key:"_"+Math.random().toString(36).substr(2,9),plank:t,addItem:e.addItem})})),r.a.createElement("div",{className:"store-nav",ref:function(e){return f=e}},c&&c.map((function(e,t){return r.a.createElement("div",{className:"nav-circle",id:"".concat(d===t?"active":""),key:t,onClick:function(){return p(t)}})}))))};var v=function(e){return r.a.createElement("div",{className:"ItemCard",title:e.item.description,onClick:function(){e.addItem(e.item)}},r.a.createElement("div",{className:"item-image"},r.a.createElement("img",{src:e.item.imageUrl,alt:e.item.description})),r.a.createElement("div",{className:"item-name"},e.item.name))};var p=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=[];b.collection("items").where("category","==","beer").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)}))}),[]),r.a.createElement("div",{className:"Beers"},r.a.createElement("div",{className:"drawer beer ".concat(e.openState?"open":"closed")},c&&c.map((function(t){return r.a.createElement(v,{key:"_"+Math.random().toString(36).substr(2,9),item:t,addItem:e.addItem})}))))};var h=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=[];b.collection("items").where("category","==","cheese").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)}))}),[]),r.a.createElement("div",{className:"Cheeses"},r.a.createElement("div",{className:"drawer cheese ".concat(e.openState?"open":"closed")},c&&c.map((function(t){return r.a.createElement(v,{key:"_"+Math.random().toString(36).substr(2,9),item:t,addItem:e.addItem})}))))};var g=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=[];b.collection("items").where("category","==","meat").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)}))}),[]),r.a.createElement("div",{className:"Meats"},r.a.createElement("div",{className:"drawer meat ".concat(e.openState?"open":"closed")},c&&c.map((function(t){return r.a.createElement(v,{key:"_"+Math.random().toString(36).substr(2,9),item:t,addItem:e.addItem})}))))};var N=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=[];b.collection("items").where("category","==","snack").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)}))}),[]),r.a.createElement("div",{className:"Snacks"},r.a.createElement("div",{className:"drawer snack ".concat(e.openState?"open":"closed")},c&&c.map((function(t){return r.a.createElement(v,{key:"_"+Math.random().toString(36).substr(2,9),item:t,addItem:e.addItem})}))))};var k=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=[];b.collection("items").where("category","==","bread").get().then((function(t){t.forEach((function(t){e.push(t.data())})),l(e)}))}),[]),r.a.createElement("div",{className:"Breads"},r.a.createElement("div",{className:"drawer bread ".concat(e.openState?"open":"closed")},c&&c.map((function(t){return r.a.createElement(v,{key:"_"+Math.random().toString(36).substr(2,9),item:t,addItem:e.addItem})}))))};var y=function(e){var t=Object(n.useState)([!0,!1,!1,!1,!1]),a=Object(i.a)(t,2),c=a[0],l=a[1];function m(e,t){var a=[!1,!1,!1,!1];a[e]=!t,l(a)}return r.a.createElement("div",{className:"Drawers"},r.a.createElement("div",{className:"drawer-container"},r.a.createElement("div",{className:"drawer-titles"},r.a.createElement("div",{className:"drawer-title beer",onClick:function(){return m(0,c[0])}},r.a.createElement("h4",null,"Beers")),r.a.createElement("div",{className:"drawer-title cheese",onClick:function(){return m(1,c[1])}},r.a.createElement("h4",null,"Cheeses")),r.a.createElement("div",{className:"drawer-title meat",onClick:function(){return m(2,c[2])}},r.a.createElement("h4",null,"Meats")),r.a.createElement("div",{className:"drawer-title snack",onClick:function(){return m(3,c[3])}},r.a.createElement("h4",null,"Snacks")),r.a.createElement("div",{className:"drawer-title bread",onClick:function(){return m(4,c[4])}},r.a.createElement("h4",null,"Breads"))),r.a.createElement(p,{openState:c[0],addItem:e.addItem}),r.a.createElement(h,{openState:c[1],addItem:e.addItem}),r.a.createElement(g,{openState:c[2],addItem:e.addItem}),r.a.createElement(N,{openState:c[3],addItem:e.addItem}),r.a.createElement(k,{openState:c[4],addItem:e.addItem})))};var w=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!0),u=Object(i.a)(s,2),d=u[0],E=u[1],b=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;c.length>0&&(e=c[0].name,Draggable.create(".draggable",{bounds:b,onDragEnd:function(){var t=document.getElementById("".concat(e)).getBoundingClientRect().top,a=document.getElementById("".concat(e)).getBoundingClientRect().left;console.log(t),console.log(a)}}))})),r.a.createElement("div",{className:"CustomPlank"},r.a.createElement(o.b,{to:"/borrel-beter/"},r.a.createElement("div",{className:"menu-button"},"Store")),r.a.createElement(o.b,{to:"/borrel-beter/cart"},r.a.createElement("div",{className:"menu-button second"},"Cart")),r.a.createElement("div",{className:"add-plank",onClick:function(){c.length&&e.addItem(c)}},"Add to Cart"),d&&r.a.createElement("div",{className:"walkthrough-container"},r.a.createElement("h1",null,"Step One:"),r.a.createElement("h2",null,"Select the items you want below"),r.a.createElement("br",null),r.a.createElement("h1",null,"Step Two:"),r.a.createElement("h2",null,"Arrange them on the plank"),r.a.createElement("br",null),r.a.createElement("h1",null,"Step Three:"),r.a.createElement("h2",null,"Add the plank to your cart"),r.a.createElement("div",{className:"ok-button",onClick:function(){E(!1)}},"OK!")),r.a.createElement("div",{className:"plank-container",ref:function(e){return b=e}},r.a.createElement("img",{id:"plank-image",src:"https://firebasestorage.googleapis.com/v0/b/borrelbeter.appspot.com/o/RectanglePlank.png?alt=media&token=f6f2cd77-1e30-4f31-93bd-e1a2f7adc361",alt:""}),c&&c.map((function(e){return r.a.createElement("div",{className:"draggable",id:"".concat(e.name),key:"_"+Math.random().toString(36).substr(2,9)},r.a.createElement("img",{src:e.imageUrl,alt:""}),r.a.createElement("div",{className:"delete-button",onClick:function(){!function(e){var t=c.filter((function(t){return t.name!==e}));l(t)}(e.name)}},r.a.createElement("i",{className:"fa fa-lg fa-trash"})))}))),r.a.createElement(y,{addItem:function(e){l([].concat(Object(m.a)(c),[e]))}}))};var j=function(e){return r.a.createElement("div",{className:"CartItem"},r.a.createElement("div",{className:"item-name"},e.itemArray[0].name),r.a.createElement("div",{className:"item-image"},r.a.createElement("img",{src:e.itemArray[0].imageUrl,alt:""})),r.a.createElement("div",{className:"item-price"},"\u20ac ".concat(e.itemArray[0].price)),r.a.createElement("div",{className:"item-quantity"},r.a.createElement("input",{type:"number",min:"1",value:e.itemArray[1],onChange:function(t){e.changeQuantity(e.index,parseInt(t.target.value))}})),r.a.createElement("div",{className:"remove-button",onClick:function(){return e.removeItem(e.itemArray[0].name)}},r.a.createElement("i",{className:"fa fa-lg fa-trash"})))};var S=function(e){return r.a.createElement("div",{className:"Cart"},r.a.createElement(o.b,{to:"/borrel-beter/"},r.a.createElement("div",{className:"menu-button"},"Store")),r.a.createElement("div",{className:"cart-title"},"Your Order"),r.a.createElement("div",{className:"cart-headers"},r.a.createElement("div",{className:"item-name"},"Item"),r.a.createElement("div",{className:"item-price"},"Price"),r.a.createElement("div",{className:"item-quantity"},"#")),e.cart.map((function(t,a){return r.a.createElement(j,{key:"_"+Math.random().toString(36).substr(2,9),itemArray:t,index:a,removeItem:e.removeFunction,changeQuantity:e.changeQuantity})})),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h3",null," Total: "),r.a.createElement("h3",null," ","\u20ac ".concat(function(){var t=e.cart.reduce((function(e,t){return e+t[0].price*t[1]}),0);return Math.round(100*t)/100}())," ")),r.a.createElement(o.b,{to:"/borrel-beter/checkout"},r.a.createElement("div",{className:"checkout-button"},"Checkout")))};var I=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){gsap.to(t,{right:0,duration:.3})}),[]),r.a.createElement("div",{className:"CartSidePanel",ref:function(e){t=e}},r.a.createElement("div",{className:"subtotal"},r.a.createElement("div",{className:"text"},"Subtotal"),r.a.createElement("div",{className:"total"},"\u20ac ".concat(function(){var t=e.cart.reduce((function(e,t){return e+t[0].price*t[1]}),0);return Math.round(100*t)/100}()))),e.cart.map((function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("hr",null)," ",r.a.createElement("img",{src:e[0].imageUrl,key:"_"+Math.random().toString(36).substr(2,9),title:e[0].name,alt:""})," ")})))};var O=function(e){return r.a.createElement("div",{className:"Checkout"},r.a.createElement(o.b,{to:"/borrel-beter/"},r.a.createElement("div",{className:"menu-button"},"Store")),r.a.createElement(o.b,{to:"/borrel-beter/cart"},r.a.createElement("div",{className:"menu-button second"},"Cart")),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h3",null," Total: "),r.a.createElement("h3",null," ","\u20ac ".concat(function(){var t=e.cart.reduce((function(e,t){return e+t[0].price*t[1]}),0);return Math.round(100*t)/100}())," ")),r.a.createElement("div",{className:"checkout-form"},r.a.createElement("form",null,r.a.createElement("h1",null,"Billing Address"),r.a.createElement("label",{htmlFor:"full-name"},"Full Name:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"full-name",id:"full-name"})),r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",id:"email"})),r.a.createElement("label",{htmlFor:"address"},"Address:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"address",id:"address"})),r.a.createElement("label",{htmlFor:"city"},"City",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"city",id:"city"})),r.a.createElement("label",{htmlFor:"country"},"Country/State:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"country",id:"country"})),r.a.createElement("label",{htmlFor:"postal-code"},"Postal Code",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"postal-code",id:"postal-code"}))),r.a.createElement("form",null,r.a.createElement("h1",null,"Payment"),r.a.createElement("label",{htmlFor:"name-on-card"},"Name on Card:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name-on-card",id:"name-on-card"})),r.a.createElement("label",{htmlFor:"credit-card-number"},"Credit Card Number:",r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"credit-card-number",id:"credit-card-number"})),r.a.createElement("label",{htmlFor:"expiration"},"Expiration:",r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:"expiration",id:"expiration"})),r.a.createElement("label",{htmlFor:"cvv"},"CVV",r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"cvv",id:"cvv"})))),r.a.createElement("div",{className:"final-checkout-button",onClick:function(){alert("Enjoy your plankje!")}},"Pay Now!"))};var C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),d=u[0],E=u[1];function b(e){var t=Object(m.a)(a);if(e.length)Object(m.a)(e).forEach((function(e){if(v(e)){var n=a.findIndex((function(t){return t[0].name===e.name}));t[n][1]=parseInt(t[n][1])+1}else t.push([e,1])})),c(t);else if(v(e)){var n=a.findIndex((function(t){return t[0].name===e.name}));t[n][1]+=1,c(t)}else t.push([e,1]),c(t)}function v(e){for(var t=!1,n=0;n<a.length;n++)a[n][0].name===e.name&&(t=!0);return t}function p(){window.innerWidth>1100?E(!0):E(!1)}return Object(n.useEffect)((function(){return p(),window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[]),r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/borrel-beter/",exact:!0},r.a.createElement(f,{addItem:b,cart:a}),a.length>0&&d&&r.a.createElement(I,{cart:a})),r.a.createElement(s.a,{path:"/borrel-beter/cart",exact:!0},r.a.createElement(S,{cart:a,removeFunction:function(e){var t=a.filter((function(t){return t[0].name!==e}));c(t)},changeQuantity:function(e,t){var n=Object(m.a)(a);n[e][1]=t,c(n)}})),r.a.createElement(s.a,{path:"/borrel-beter/customize",exact:!0},r.a.createElement(w,{addItem:b})),r.a.createElement(s.a,{path:"/borrel-beter/checkout"},r.a.createElement(O,{cart:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bc41b6cc.chunk.js.map