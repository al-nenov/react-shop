(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);a(77);var r=a(0),n=a.n(r),l=a(22),c=a.n(l),i=(a(82),a(31)),s=a(49),o=a(59);i.b.add(s.c,s.a,o.a,s.b);a(86);var u=a(109),m=a(103),p=a(75),d=a(8),g=a(6),f=a(7),E=a.n(f),h=a(13),b=a(23),v=localStorage.users?JSON.parse(localStorage.users):[],w={LOGIN:function(e,t){return O.apply(this,arguments)},LOGOUT:function(){return y.apply(this,arguments)},REGISTER:function(e,t){return j.apply(this,arguments)},TOGGLE_FAVORITE:function(e){return q.apply(this,arguments)},UPDATE_USER:k};function O(){return(O=Object(h.a)(E.a.mark((function e(t,a){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},e.prev=1,S(t)){e.next=4;break}throw new Error("User not Found");case 4:if(N(t,a)){e.next=6;break}throw new Error("Password incorect");case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),r={status:"Failed",message:e.t0.message},e.abrupt("return",r);case 12:return n=v.find((function(e){return e.username.toLowerCase()===t.toLowerCase()})),localStorage.user=JSON.stringify(n),r={status:"Success",message:"User logged in",user:n},Object(b.b)("Welcome, ".concat(t,"!")),e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function y(){return(y=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.removeItem("user"),t={},e.prev=2,!localStorage.user){e.next=5;break}throw new Error("Failed to log out");case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),t={status:"Failed",message:e.t0.message},e.abrupt("return",t);case 11:return t={status:"Success",message:"User logged out"},Object(b.b)(t.message),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function j(){return(j=Object(h.a)(E.a.mark((function e(t,a){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S(t)){e.next=3;break}throw new Error("Username taken");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{status:"Failed",message:e.t0.message});case 8:return r={id:v.length,username:t.toString(),password:a.toString(),favorites:[],user_cart:[],orders:[]},v.push(r),localStorage.users=JSON.stringify(v),e.abrupt("return",{status:"Success",message:"User created",user:r});case 12:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function q(){return(q=Object(h.a)(E.a.mark((function e(t){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.user),a.favorites.some((function(e){return e===t}))?(r=a.favorites.indexOf(t),a.favorites.splice(r,1)):a.favorites.push(t),k(a),e.abrupt("return",a.favorites);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){localStorage.user=JSON.stringify(e),function(e){var t=v.findIndex((function(t){return t.id===e.id}));v[t]=e,localStorage.users=JSON.stringify(v)}(e)}function S(e){var t=e.toString().toLowerCase();return v.some((function(e){return e.username.toLowerCase()===t}))}function N(e,t){return v.find((function(t){return t.username.toLowerCase()===e.toLowerCase()})).password===t.toString()}var T="LOG_IN_USER",P="LOG_OUT";var x=a(28);var A=function(){var e=Object(g.d)((function(e){return e.cart})),t=Object(g.d)((function(e){return e.userAuth})),a=Object(g.c)();function r(){a((function(e){w.LOGOUT().then((function(t){"Success"===t.status?e({type:P}):console.error(t.message)}))}))}var l=n.a.createElement(d.c,{onClick:function(){return r()}},"Log Out"),c=n.a.createElement(d.c,{to:"/login"},"Login"),i=e.length>0&&n.a.createElement("span",{className:"cart-items_counter"},e.length);return n.a.createElement(u.a,{bg:"dark",variant:"dark",expand:"md"},n.a.createElement(m.a,null,n.a.createElement(u.a.Brand,null,n.a.createElement(d.c,{to:"/"},"Home")),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,null,n.a.createElement(p.a,null,n.a.createElement(d.c,{to:"/about"},"About")),n.a.createElement(p.a,{className:"mr-auto"},n.a.createElement(d.c,{to:"/dashboard"},"My profile")),n.a.createElement(p.a,{className:"justify-content-end"},n.a.createElement(d.c,{to:"/cart",className:"cart-items"},n.a.createElement(x.a,{icon:"shopping-basket"}),i),t.loggedIn&&l,t.loggedIn?n.a.createElement(u.a.Text,null,"Signed in as: ",n.a.createElement(d.b,{to:"/dashboard"},t.user)):c))))},_=a(10);var R=function(){return n.a.createElement("div",{className:"page about-page"},n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Overview"),n.a.createElement("p",null,"Simple store app built with React. The purpoupse of this project is to learn and master the React and Redux foundations.")),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"What you can do with this app"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.b,{to:"/login",target:"blank"},"Create or login to your account")),n.a.createElement("li",null,"Add or remove products to your favorites list *"),n.a.createElement("li",null,"Add products to Cart"),n.a.createElement("li",null,"Remove products from cart"),n.a.createElement("li",null,"Empty cart"),n.a.createElement("li",null,"Complete order *"),n.a.createElement("li",null,"See your orders and favourited products in your ",n.a.createElement(d.b,{to:"/dashboard"},"dashboard")," *"),n.a.createElement("span",{className:"font-italic"},"* You need to be logged in"))),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Project on Github"),n.a.createElement("a",{href:"https://github.com/al-nenov/react-shop"},"https://github.com/al-nenov/react-shop")),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Packages"),n.a.createElement("ul",null,n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Redux"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/redux-thunk",target:"_blank",rel:"noopener noreferrer"},"Thunk")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/redux-persist",target:"_blank",rel:"noopener noreferrer"},"Persist"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-router-dom",target:"_blank",rel:"noopener noreferrer"},"Router")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/prop-types",target:"_blank",rel:"noopener noreferrer"},"Prop Types")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-hook-form",target:"_blank",rel:"noopener noreferrer"},"React Hook Form")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-js-pagination",target:"_blank",rel:"noopener noreferrer"},"React js pagination")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"React Bootstrap")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/@fortawesome/react-fontawesome",target:"_blank",rel:"noopener noreferrer"},"Font Awesome")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-toastify",target:"_blank",rel:"noopener noreferrer"},"React Toastify")))))},I=a(73);var C=function(e){var t=e.children,a=Object(I.a)(e,["children"]),r=Object(g.d)((function(e){return e.userAuth}));return n.a.createElement(_.b,Object.assign({},a,{render:function(e){var a=e.location;return r.loggedIn?t:n.a.createElement(_.a,{to:{pathname:"/login",state:{from:a}}})}}))},L=a(12),D=a(105),V=a(66),M=a.n(V),F=a(71),G=a(111),U=a(104),J=a(67),B=a(9),Y=a(20),H=a(56),W=a(68),X=a.n(W),z=a(69),K={allProducts:a(70)},Q={loggedIn:!!localStorage.user,user:localStorage.user?JSON.parse(localStorage.user):{}},$="ADD_PRODUCT_TO_CART",Z="EMOVE_ITEM_FROM_CART",ee="EMPTY_CART",te=[],ae="TOGLE_FAVORITE",re="SET_FAVORITES",ne="GET_FAVORITES",le=[],ce=Object(Y.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type,e},userAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loggedIn:!0,user:t.payload};case P:return{loggedIn:!1,user:{}};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:case Z:return Object(B.a)(t.payload);case ee:return[];default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:case re:case ne:return t.payload;default:return e}}}),ie={key:"root",storage:X.a,whitelist:["userAuth","cart","favorites"]},se=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e},oe=Object(H.a)(ie,ce),ue=Object(Y.e)(oe,Object(Y.d)(Object(Y.a)(z.a),se)),me=Object(H.b)(ue),pe={COMPLETE_ORDER:function(e){return de.apply(this,arguments)},ORDERS_LIST:function(){return JSON.parse(localStorage.user).orders}};function de(){return(de=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.length){e.next=3;break}throw new Error("No items in cart");case 3:if(localStorage.user){e.next=5;break}throw new Error("No user found");case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:"Failed",message:e.t0.message});case 10:return(a=JSON.parse(localStorage.user)).orders.push({id:a.orders.length+1,items:Object(B.a)(t)}),w.UPDATE_USER(a),e.abrupt("return",{status:"Success",user:a});case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ge(){return Object(B.a)(ue.getState().cart)}var fe=function(e){var t=Object(g.c)();return n.a.createElement("div",{className:"add-to-cart mx-auto my-2"},n.a.createElement(U.a,{variant:"primary btn-lg",onClick:function(){t(function(e){var t=ge(),a=Object(J.a)({},e),r=t.find((function(e){return e.id===a.id}));return r?r.qty+=1:(a.qty=1,t.push(a)),function(e){e({type:$,payload:t}),Object(b.b)("".concat(a.title," was added to your cart"))}}(e.product))}},"!Add to cart"))};var Ee=function(e){var t=e.price.toFixed(2),a=e.currency||"\u043b\u0432.";return n.a.createElement("span",{className:"product-price"},t," ",n.a.createElement("span",{className:"product-price-currency"},a))};var he=function(){var e=Object(r.useState)(!1),t=Object(L.a)(e,2),a=t[0],n=t[1],l=Object(r.useRef)(null);function c(){n(!0)}function i(){n(!1)}return Object(r.useEffect)((function(){var e=l.current;return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",i),function(){e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",i)}}),[]),[a,l]};var be=function(){var e=Object(g.d)((function(e){return e.favorites})),t=Object(g.c)();return Object(r.useEffect)((function(){t((function(e){var t=localStorage.user?JSON.parse(localStorage.user).favorites:[];e({type:ne,payload:t})}))}),[t]),[e]};var ve=function(e){var t=Object(g.c)(),a=he(),r=Object(L.a)(a,2),l=r[0],c=r[1],i=be(e.product),s=Object(L.a)(i,1)[0].some((function(t){return t===e.product})),o=l||s?["fas","heart"]:["far","heart"];function u(e){var a;t((a=e,function(e){w.TOGGLE_FAVORITE(a).then((function(t){e({type:ae,payload:t})}))}))}return n.a.createElement("span",{ref:c,className:"favorites-icon"},n.a.createElement(x.a,{onClick:function(){return u(e.product)},icon:o,size:"2x",style:{color:"red"}}))};var we=Object(g.b)((function(e){return{loggedIn:e.userAuth.loggedIn}}),{})((function(e){return n.a.createElement(F.a,{md:4,sm:"auto",className:"product mb-5"},n.a.createElement(G.a,null,e.loggedIn&&n.a.createElement(ve,{product:e.id}),n.a.createElement(d.b,{to:"product/".concat(e.id)},n.a.createElement(G.a.Img,{variant:"top",src:"/images/products/"+e.image}),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,e.title),n.a.createElement(G.a.Text,null,"Color: ",e.color),n.a.createElement(G.a.Text,null,"Price: ",n.a.createElement(Ee,{price:e.price})))),n.a.createElement(fe,{product:e})))}));var Oe=Object(g.b)((function(e){return{allProducts:e.products.allProducts}}),{})((function(e){var t=Object(r.useState)(1),a=Object(L.a)(t,2),l=a[0],c=a[1],i=Object(r.useState)(m(0,6)),s=Object(L.a)(i,2),o=s[0],u=s[1];function m(t,a){return e.allProducts.slice(t,a)}var p=o.map((function(e){return n.a.createElement(we,Object.assign({key:e.id},e))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{className:"justify-content-center products"},p),n.a.createElement(M.a,{activePage:l,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:6,totalItemsCount:e.allProducts.length,pageRangeDisplayed:5,onChange:function(e){c(e);var t=6*e;u(m(t-6,t))}}))})),ye=a(110);var je=Object(g.b)((function(e){return{products:e.products.allProducts,cart:e.cart}}))((function(e){var t=parseInt(e.match.params.id),a=e.products.find((function(e){return e.id===t}));return a?n.a.createElement(D.a,null,n.a.createElement(F.a,{md:6,sl:"auto"},n.a.createElement(ye.a,null,n.a.createElement(ye.a.Image,{src:"/images/products/"+a.image,fluid:!0}))),n.a.createElement(F.a,{md:6,sl:"auto"},n.a.createElement(G.a,null,n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,a.title),n.a.createElement(G.a.Text,null,a.description),n.a.createElement(G.a.Text,null,"Price: ",n.a.createElement(Ee,{price:a.price})),n.a.createElement(G.a.Text,null,"Color: ",a.color),n.a.createElement(fe,{product:a}))))):n.a.createElement(_.a,{to:"/not-found"})})),qe=a(108),ke=a(74);var Se=function(e){var t=Object(ke.a)({mode:"onBlur"}),a=t.register,r=t.handleSubmit,l=t.errors,c=t.setError;return n.a.createElement(qe.a,{onSubmit:r((function(t,a){e.action(t.username,t.password,c)}))},n.a.createElement(qe.a.Group,null,n.a.createElement(qe.a.Label,null,"Username"),n.a.createElement(qe.a.Control,{id:"username",ref:a({required:"Cannot be empty",maxLength:20}),type:"username",name:"username",placeholder:"Username"}),n.a.createElement("p",{className:"text-danger"},l.username&&l.username.message)),n.a.createElement(qe.a.Group,null,n.a.createElement(qe.a.Label,null,"Password"),n.a.createElement(qe.a.Control,{type:"password",name:"password",placeholder:"Password",ref:a({required:"Password can not be empty",validate:{passwordLength:function(e){return e.length>=6}}})}),n.a.createElement("p",{className:"text-danger"},l.password&&l.password.message,l.password&&"passwordLength"===l.password.type&&n.a.createElement("p",null,"Your password must be atleast 6 symbols"),l.login&&l.login.message)),n.a.createElement(U.a,{variant:"primary",type:"submit"},"Submit"))};var Ne=function(){var e=Object(g.c)();return n.a.createElement(G.a,{className:"p-5"},n.a.createElement("h3",null,"Log In to your account"),n.a.createElement(Se,{action:function(t,a,r){e(function(e,t,a){return function(r){w.LOGIN(e,t).then((function(e){"Success"===e.status?r({type:T,payload:e.user.username}):a("login","failed",e.message)}))}}(t,a,r))}}),n.a.createElement(d.b,{to:"/signup",className:"pt-3"},"Don't have an account? Signup here"))};var Te=function(){var e=Object(g.c)();return n.a.createElement(G.a,{className:"p-5"},n.a.createElement("h3",null,"Create new account"),n.a.createElement(Se,{action:function(t,a,r){e(function(e,t,a){return function(r){w.REGISTER(e,t).then((function(n){"Success"===n.status?w.LOGIN(e,t).then((function(e){r({type:T,payload:e.user.username})})):a("login","failed",n.message)}))}}(t,a,r))}}),n.a.createElement(d.b,{to:"/login",className:"pt-3"},"Already have an account? Login here"))};var Pe=function(e){var t=Object(g.c)(),a=Object(g.d)((function(e){return e.userAuth.loggedIn}));return n.a.createElement(G.a,{className:"p-4"},n.a.createElement("h5",null,"Cart Totals:"),n.a.createElement("p",null,"Total : ",n.a.createElement(Ee,{price:e.total})),!a&&n.a.createElement("div",null,n.a.createElement("p",{className:"text-warning"},"You need to be logged in to complete an order"),n.a.createElement(d.b,{to:"/login"},"Login here")),n.a.createElement(U.a,{variant:"secondary",onClick:function(){var r;a&&t((r=e.items,function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.COMPLETE_ORDER(r);case 2:"Success"===e.sent.status&&(t({type:ee}),Object(b.b)("Thank You for shopping with us"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},disabled:!a},"Complete order"))},xe=a(48);var Ae=function(e){var t=Object(g.c)();function a(e){t(function(e){var t=ge().filter((function(t){return t.id!==e}));return function(e){e({type:Z,payload:t}),Object(b.b)("Product was removed from your cart")}}(e))}var r=n.a.createElement("a",{href:"product/".concat(e.item.id)},n.a.createElement(ye.a,{className:"mx-2"},n.a.createElement(ye.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(xe.a,{onClick:function(){return a(e.item.id)}},n.a.createElement(x.a,{icon:"times"}))),n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,r),n.a.createElement("td",null,n.a.createElement(Ee,{price:e.item.price})),n.a.createElement("td",null,e.item.qty),n.a.createElement("td",null,n.a.createElement(Ee,{price:e.item.price*e.item.qty})))},_e=a(106);var Re=function(){var e=Object(r.useState)(0),t=Object(L.a)(e,2),a=t[0],l=t[1],c=Object(g.c)(),i=Object(g.d)((function(e){return e.cart}));if(Object(r.useEffect)((function(){var e=0;i.forEach((function(t){e+=t.price*t.qty})),l(e)}),[i]),!i.length)return n.a.createElement(_.a,{to:"/"});var s=i.map((function(e){return n.a.createElement(Ae,{key:e.id,item:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Cart page"),n.a.createElement(_e.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"id"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Total"))),n.a.createElement("tbody",null,s)),n.a.createElement(D.a,null,n.a.createElement(F.a,null,n.a.createElement(U.a,{variant:"outline-secondary",onClick:function(){c((function(e){e({type:ee})}))}},"Empty cart")),n.a.createElement(F.a,null,n.a.createElement(Pe,{total:a,items:i}))))};var Ie=function(e){var t=n.a.createElement(d.b,{to:"product/".concat(e.item.id)},n.a.createElement(ye.a,{className:"mx-2"},n.a.createElement(ye.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,t),n.a.createElement("td",null,n.a.createElement(Ee,{price:e.item.price})),n.a.createElement("td",null,e.item.qty),n.a.createElement("td",null,n.a.createElement(Ee,{price:e.item.price*e.item.qty})))};var Ce=function(e){var t=0,a=e.order.items.map((function(e){return t+=e.qty*e.price,n.a.createElement(Ie,{key:e.id,item:e})}));return n.a.createElement("div",null,n.a.createElement("h5",null,"Order # ",e.order.id),n.a.createElement(_e.a,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ID"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Total")),a),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3}),n.a.createElement("td",null," Order Total: "),n.a.createElement("td",null,n.a.createElement(Ee,{price:t}))))))};var Le=function(){var e=pe.ORDERS_LIST().map((function(e){return n.a.createElement(Ce,{key:e.id,order:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Your orders"),e)};var De=function(e){var t=n.a.createElement(d.b,{to:"product/".concat(e.item.id)},n.a.createElement(ye.a,{className:"mx-2"},n.a.createElement(ye.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,t),n.a.createElement("td",null,n.a.createElement(Ee,{price:e.item.price})))};var Ve=function(){var e=Object(g.d)((function(e){return e.favorites})),t=Object(g.d)((function(e){return e.products.allProducts})),a=e.map((function(e){return n.a.createElement(De,{key:e,item:t.find((function(t){return t.id===e}))})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Your favorites"),n.a.createElement(_e.a,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ID"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price")),a)))},Me=a(112),Fe=a(107);var Ge=function(){var e=Object(g.d)((function(e){return e.userAuth}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Hello, ",e.user),n.a.createElement(Me.a,{defaultActiveKey:"order",id:""},n.a.createElement(Fe.a,{eventKey:"order",title:"Orders"},n.a.createElement(Le,null)),n.a.createElement(Fe.a,{eventKey:"favorites",title:"Favorites"},n.a.createElement(Ve,null))))};var Ue=function(){var e=Object(g.d)((function(e){return e.userAuth})).loggedIn;return console.log("This is the process.env","/react-shop"),n.a.createElement(m.a,{className:"p-4"},n.a.createElement(_.d,null,n.a.createElement(_.b,{exact:!0,path:"/",component:Oe}),n.a.createElement(_.b,{path:"/about",component:R}),n.a.createElement(_.b,{path:"/product/:id",component:je}),n.a.createElement(_.b,{path:"/cart",component:Re}),n.a.createElement(C,{path:"/dashboard"},n.a.createElement(Ge,null)),n.a.createElement(_.b,{path:"/login",component:Ne},e&&n.a.createElement(_.a,{to:"/"})),n.a.createElement(_.b,{path:"/signup",component:Te},e&&n.a.createElement(_.a,{to:"/"}))))};var Je=function(){return n.a.createElement("footer",{className:"page-footer font-small",variant:"dark"},n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright"))};a(99);var Be=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{position:"top-right",autoClose:2500,closeOnClick:!0}),n.a.createElement(A,null),n.a.createElement(Ue,null),n.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=a(72);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g.a,{store:ue},n.a.createElement(Ye.a,{loading:"loading...",persistor:me},n.a.createElement(d.a,{basename:"/react-shop"},n.a.createElement(Be,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e){e.exports=JSON.parse('[{"id":1,"image":"beanie-2.jpg","price":25,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","hats"],"title":"Red beanie"},{"id":2,"image":"beanie-with-logo-1.jpg","price":25,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","hats"],"title":"Blue beanie"},{"id":3,"image":"belt-2.jpg","price":59,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"brown","categories":["clothing","accessories"],"title":"Belt"},{"id":4,"image":"cap-2.jpg","price":56,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"yellow","categories":["clothing","hats"],"title":"Yellow cap"},{"id":5,"image":"hoodie-2.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","tops"],"title":"Red hoodie"},{"id":6,"image":"hoodie-blue-1.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Blue hoodie"},{"id":7,"image":"hoodie-green-1.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Green hoodie"},{"id":8,"image":"hoodie-with-logo-2.jpg","price":96,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Hoodie with logo"},{"id":9,"image":"hoodie-with-pocket-2.jpg","price":106,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"grey","categories":["clothing","tops"],"title":"Hoodie with pocket"},{"id":10,"image":"hoodie-with-zipper-2.jpg","price":126,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Hoodie with zipper"},{"id":11,"image":"long-sleeve-tee-2.jpg","price":76,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Long sleeve tee"},{"id":13,"image":"polo-2.jpg","price":79,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Polo"},{"id":14,"image":"sunglasses-2.jpg","price":186,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"black","categories":["accessories"],"title":"Sunglasses"},{"id":15,"image":"tshirt-2.jpg","price":35,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"white","categories":["clothing","tops"],"title":"T-shirt"},{"id":16,"image":"t-shirt-with-logo-1.jpg","price":40,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"T-shirt"},{"id":17,"image":"vnech-tee-blue-1.jpg","price":50,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Vneck tee"},{"id":18,"image":"vnech-tee-green-1.jpg","price":50,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Vneck tee"},{"id":19,"image":"vneck-tee-2.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","tops"],"title":"Vneck tee"}]')},76:function(e,t,a){e.exports=a(100)},82:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.602d3e0f.chunk.js.map