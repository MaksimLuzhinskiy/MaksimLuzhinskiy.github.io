(this["webpackJsonpsample-react"]=this["webpackJsonpsample-react"]||[]).push([[6],{166:function(e,t,r){"use strict";r(1);var c=r(33),s=r(0);t.a=function(e){var t=e.payment,r=e.delivery;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"orderItem__payment",children:["\u0412\u0438\u0434 \u043e\u043f\u043b\u0430\u0442\u044b: ",c.d[c.c[t]]]}),Object(s.jsxs)("div",{className:"orderItem__delivery",children:["\u0422\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",c.b[c.a[r]]]})]})}},167:function(e,t,r){"use strict";r(1);var c=r(0);t.a=function(e){var t=e.numberOrder,r=e.promocode,s=e.totalPrice;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"orderItem__id",children:["\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430: ",t]}),Object(c.jsxs)("div",{className:"orderItem__promocode",children:["\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434: ",r]}),Object(c.jsxs)("div",{className:"orderItem__promocode",children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ","".concat(s," \u20bd")]})]})}},310:function(e,t,r){},319:function(e,t,r){"use strict";r.r(t);var c=r(4),s=r(1),a=r(24),n=r(166),i=r(167),o=(r(310),r(0)),d=function(e){var t=e.cart,r=e.totalPrice;return Object(o.jsxs)("div",{className:"singleOrderContent",children:[Object(o.jsx)(a.a,{title:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430: ".concat(t.idOrder)}),Object(o.jsx)(i.a,{numberOrder:t.idOrder,promocode:t.promocode,totalPrice:r}),Object(o.jsx)(n.a,{payment:t.paymentChoose,delivery:t.deliveryChoose})]})},j=r(36),l=r(5),u=r(6),b=Object(l.b)((function(e){return{user:j.b(e)}}))((function(e){var t=Object(u.i)(),r=t.orderId,a=t.userId,n=Object(s.useState)(),i=Object(c.a)(n,2),j=i[0],l=i[1],b=Object(s.useState)(""),m=Object(c.a)(b,2),O=m[0],v=m[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("".concat(a))||"{}");r&&l(e[r])}),[]),Object(s.useEffect)((function(){var e=0;null===j||void 0===j||j.items.forEach((function(t){e+=t.counts*t.item.price})),v(String(e))}),[j]),Object(o.jsx)("div",{children:void 0!==j&&Object(o.jsx)(d,{totalPrice:O,cart:j})})}));t.default=b}}]);
//# sourceMappingURL=6.ad7ee10c.chunk.js.map