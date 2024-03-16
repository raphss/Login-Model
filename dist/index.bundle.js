"use strict";(self.webpackChunklogin_model=self.webpackChunklogin_model||[]).push([[57],{208:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(601),a=t.n(o),d=t(314),r=t.n(d)()(a());r.push([e.id,":root {\n    --backgroundGray: rgb(39, 39, 39);\n    --foregroundGray: rgb(20, 20, 20);\n    --foregroundLightGray: rgba(65, 65, 65, 0.851);\n}\n\nbody,\nhtml {\n    height: 100%;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    color: whitesmoke;\n    font-family: sans-serif;\n    font-size: 2vh;\n}\n\nbody {\n    background-color: var(--backgroundGray);\n    margin: 0px;\n}\n\nbutton,\na,\n.btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.navbar {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    background-color: var(--foregroundGray);\n    height: 7.5vh;\n    overflow: hidden;\n}\n\n.navbar ul {\n    list-style-type: none;\n}\n\n.navbar-hlinks {\n    font-size: 2vh;\n    padding: 4vh;\n    text-decoration: none;\n}\n\n.navbar-hlinks:hover {\n    background-color: var(--foregroundLightGray);\n}\n\n.list-items {\n    float: left;\n}\n\n.submenu {\n    display: none;\n    position: absolute;\n    background-color: var(--foregroundGray);\n    width: 25vh;\n    text-align: center;\n    padding: 0vh;\n    z-index: 2;\n}\n\n.register-submenu {\n    margin: -1.5vh -4.5vh -1.5vh -4.5vh;\n}\n\n.about-submenu {\n    margin: -1.5vh 0vh -1.5vh -11.8vh;\n}\n\n.register-submenu li,\n.about-submenu li {\n    list-style: none;\n}\n\n.register-submenu a,\n.about-submenu a {\n    text-decoration: none;\n    font-size: 1.7vh;\n    padding: 2vh;\n    display: block;\n}\n\n.register-submenu li a:hover,\n.about-submenu li a:hover {\n    background-color: var(--foregroundLightGray);\n}\n\n\n.list-items:hover .register-submenu,\n.list-items:hover .about-submenu {\n    display: block;\n}\n\n.divContent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--foregroundGray);\n    margin: 12vh 35vw 12vh 35vw;\n    padding: 7vh;\n    border-radius: 2vh;\n    height: 70vh;\n    min-width: 40vh;\n    max-height: 58vh;\n    z-index: 1;\n}\n\n.divContent label,\ninput {\n    margin: 1vh;\n    font-size: 2.3vh;\n}\n\n.divContent input {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--foregroundLightGray);\n    min-width: 40vh;\n    min-height: 3vh;\n    color: whitesmoke;\n    border: 0.2vh solid black;\n    border-radius: 0.4vh;\n    padding: 1vh;\n}\n\n\n.divContent input.btn {\n    min-width: 20vh;\n    min-height: 6.5vh;\n    font-size: 3vh;\n    margin: 3vh auto;\n}\n\n.divContent input.btn:hover {\n    filter: brightness(1.3);\n}\n\n.divContent a:hover {\n    text-decoration: underline;\n}\n\nh1 {\n    text-align: center;\n    margin: 4vh;\n}\n\np {\n    max-width: 100%;\n    text-align: justify;\n    margin: 2vh 0vh;\n}\n\n.footer {\n    font-size: 1.7vh;\n    bottom: 0%;\n    position: fixed;\n    align-self: center;\n    z-index: 0;\n}\n\n@media only screen and (max-width: 480px) {\n    .divContent {\n        margin: 5vh 5vw 5vh 5vw;\n        padding: 9vh 0vh;\n        max-height: 53vh;\n    }\n\n    .divContent label,\n    input {\n        margin: 1vh;\n        font-size: 2.3vh;\n    }\n\n    .divContent input {\n        min-width: 32vh;\n        min-height: 2vh;\n        padding: 1vh;\n    }\n\n    .navbar {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .navbar-hlinks {\n        padding: 2.5vh 2vh 2.5vh 2vh;\n    }\n\n    .navbar ul {\n        margin: 0vh;\n        padding: 2vh 0vh 2vh 0vh;\n    }\n\n    .submenu {\n        width: 16vh;\n    }\n\n    .register-submenu a,\n    .about-submenu a {\n        padding: 1vh;\n    }\n\n    p {\n        margin: 2.4vh;\n    }\n\n    .footer {\n        position: absolute;\n        padding: 1vh;\n    }\n}\n\n@media only screen and (min-width: 481px) and (max-width: 600px) {}\n\n@media only screen and (min-width: 601px) and (max-width: 768px) {}\n\n@media only screen and (min-width: 769px) and (max-width: 1024px) {}\n\n@media only screen and (min-width: 1025px) and (max-width: 1440px) {}",""]);const i=r},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,d){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var d={},r=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],s=d[l]||0,u="".concat(l," ").concat(s);d[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var d=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<d.length;r++){var i=t(d[r]);n[i].references--}for(var c=o(e,a),l=0;l<d.length;l++){var s=t(d[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}d=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},584:(e,n,t)=>{var o=t(72),a=t.n(o),d=t(825),r=t.n(d),i=t(659),c=t.n(i),l=t(56),s=t.n(l),u=t(540),p=t.n(u),m=t(113),h=t.n(m),v=t(208),C={};C.styleTagTransform=h(),C.setAttributes=s(),C.insert=c().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=p(),a()(v.A,C),v.A&&v.A.locals&&v.A.locals;const f=function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("registerDiv");const n=document.createElement("form");n.enctype="multipart/form-data",n.method="POST";const t=document.createElement("label");t.setAttribute("for","username"),t.textContent="Full Name:";const o=document.createElement("input");o.type="text",o.required=!0;const a=document.createElement("label");a.setAttribute("for","email"),a.textContent="Email:";const d=document.createElement("input");d.type="email",d.required=!0;const r=document.createElement("label");r.setAttribute("for","password"),r.textContent="Password:";const i=document.createElement("input");i.type="password",i.minLength=8,i.required=!0;const c=document.createElement("label");c.setAttribute("for","password"),c.textContent="Confirm Password:";const l=document.createElement("input");l.type="password",l.minLength=8,l.required=!0;const s=document.createElement("a");s.textContent="Back to Login",s.addEventListener("click",(()=>{g()}));const u=document.createElement("input");return u.classList.add("register-btn","btn"),u.value="Register",u.type="submit",n.appendChild(t),n.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(document.createElement("br")),n.appendChild(a),n.appendChild(document.createElement("br")),n.appendChild(d),n.appendChild(document.createElement("br")),n.appendChild(r),n.appendChild(document.createElement("br")),n.appendChild(i),n.appendChild(document.createElement("br")),n.appendChild(c),n.appendChild(document.createElement("br")),n.appendChild(l),n.appendChild(document.createElement("br")),n.appendChild(u),n.appendChild(document.createElement("br")),n.appendChild(s),e.appendChild(n),e}())},b=function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("managerDiv");const n=document.createElement("form");n.enctype="multipart/form-data",n.method="POST";const t=document.createElement("label");t.setAttribute("for","email"),t.textContent="Email:";const o=document.createElement("input");o.type="email",o.required=!0;const a=document.createElement("label");a.setAttribute("for","password"),a.textContent="Password or Backup Code:";const d=document.createElement("input");d.type="password",d.minLength=8,d.required=!0;const r=document.createElement("label");r.setAttribute("for","email"),r.textContent="New Email:";const i=document.createElement("input");i.type="email",i.required=!1,i.placeholder="not required, optional";const c=document.createElement("label");c.setAttribute("for","password"),c.textContent="New Password:";const l=document.createElement("input");l.type="password",l.minLength=8,l.required=!0;const s=document.createElement("label");s.setAttribute("for","password"),s.textContent="Confirm New Password:";const u=document.createElement("input");u.type="password",u.minLength=8,u.required=!0;const p=document.createElement("a");p.textContent="Back to Login",p.addEventListener("click",(()=>{g()}));const m=document.createElement("input");return m.classList.add("update-btn","btn"),m.value="Update",m.type="submit",n.appendChild(t),n.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(document.createElement("br")),n.appendChild(a),n.appendChild(document.createElement("br")),n.appendChild(d),n.appendChild(document.createElement("br")),n.appendChild(r),n.appendChild(document.createElement("br")),n.appendChild(i),n.appendChild(document.createElement("br")),n.appendChild(c),n.appendChild(document.createElement("br")),n.appendChild(l),n.appendChild(document.createElement("br")),n.appendChild(m),n.appendChild(document.createElement("br")),n.appendChild(p),e.appendChild(n),e}())},g=function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("loginDiv");const n=document.createElement("form");n.enctype="multipart/form-data",n.method="POST";const t=document.createElement("label");t.setAttribute("for","email"),t.textContent="User:";const o=document.createElement("input");o.type="email",o.placeholder="email address",o.required=!0;const a=document.createElement("label");a.setAttribute("for","password"),a.textContent="Password:";const d=document.createElement("input");d.type="password",d.minLength=8,d.required=!0;const r=document.createElement("a");r.textContent="Forgot your password?",r.addEventListener("click",(()=>{b()}));const i=document.createElement("a");i.textContent="Register new account",i.addEventListener("click",(()=>{f()}));const c=document.createElement("input");return c.classList.add("login-btn","btn"),c.value="Login",c.type="submit",n.appendChild(t),n.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(document.createElement("br")),n.appendChild(a),n.appendChild(document.createElement("br")),n.appendChild(d),n.appendChild(document.createElement("br")),n.appendChild(r),n.appendChild(document.createElement("br")),n.appendChild(c),n.appendChild(document.createElement("br")),n.appendChild(i),e.appendChild(n),e}())},E=function(){const e=document.createElement("header");e.appendChild(function(){const e=document.createElement("nav");e.classList.add("navbar");const n=document.createElement("ul"),t=document.createElement("li");t.classList.add("list-items");const o=document.createElement("a");o.classList.add("navbar-hlinks"),o.textContent="Login",o.addEventListener("click",(()=>{g()}));const a=document.createElement("li");a.classList.add("list-items");const d=document.createElement("a");d.classList.add("navbar-hlinks"),d.textContent="Register";const r=document.createElement("ul");r.classList.add("register-submenu","submenu");const i=document.createElement("li"),c=document.createElement("a");c.textContent="New User",c.addEventListener("click",(()=>{f()})),i.appendChild(c);const l=document.createElement("li"),s=document.createElement("a");s.textContent="Edit Account",s.addEventListener("click",(()=>{b()})),l.appendChild(s);const u=document.createElement("li"),p=document.createElement("a");p.textContent="Delete Account",p.addEventListener("click",(()=>{!function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("deleteDiv");const n=document.createElement("form");n.enctype="multipart/form-data",n.method="POST";const t=document.createElement("label");t.setAttribute("for","email"),t.textContent="Email:";const o=document.createElement("input");o.type="email",o.required=!0;const a=document.createElement("label");a.setAttribute("for","password"),a.textContent="Password:";const d=document.createElement("input");d.type="password",d.minLength=8,d.required=!0;const r=document.createElement("label");r.setAttribute("for","password"),r.textContent="Confirm Password:";const i=document.createElement("input");i.type="password",i.minLength=8,i.required=!0;const c=document.createElement("a");c.textContent="Back to Login",c.addEventListener("click",(()=>{g()}));const l=document.createElement("input");return l.classList.add("delete-btn","btn"),l.value="Delete",l.type="submit",n.appendChild(t),n.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(document.createElement("br")),n.appendChild(a),n.appendChild(document.createElement("br")),n.appendChild(d),n.appendChild(document.createElement("br")),n.appendChild(r),n.appendChild(document.createElement("br")),n.appendChild(i),n.appendChild(document.createElement("br")),n.appendChild(l),n.appendChild(document.createElement("br")),n.appendChild(c),e.appendChild(n),e}())}()})),u.appendChild(p),r.appendChild(i),r.appendChild(l),r.appendChild(u);const m=document.createElement("li");m.classList.add("list-items");const h=document.createElement("a");h.classList.add("navbar-hlinks"),h.textContent="About";const v=document.createElement("ul");v.classList.add("about-submenu","submenu");const C=document.createElement("li"),E=document.createElement("a");E.textContent="About Us",E.addEventListener("click",(()=>{!function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("aboutUsDiv");const n=document.createElement("h1");n.textContent="About Us";const t=document.createElement("p");t.textContent="Our company is dedicated to providing innovative and high-quality solutions to meet the needs of our clients. With a highly skilled and experienced team, we are focused on delivering exceptional services at every stage, from conception to implementation and ongoing support. We are committed to fostering strong and lasting relationships with our customers, partners, and communities, while continuing to drive growth and success in a dynamic and ever-evolving market.";const o=document.createElement("p");return o.textContent="At our company, we continuously strive for excellence in everything we do. From our dedication to the highest standards of quality to our commitment to innovation and sustainability, we are dedicated to making a positive impact in all aspects of our business. With a customer-centric culture and a proactive approach to addressing challenges, we are poised to meet the needs of our clients and exceed expectations in an increasingly competitive landscape.",e.appendChild(n),e.appendChild(t),e.appendChild(o),e}())}()})),C.appendChild(E);const y=document.createElement("li"),x=document.createElement("a");return x.textContent="Our Products",x.addEventListener("click",(()=>{!function(){const e=document.querySelector(".divContent");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("ourProductsDiv");const n=document.createElement("h1");n.textContent="Our Products";const t=document.createElement("p");t.textContent="Introducing our latest line of innovative products, meticulously crafted to elevate your everyday experiences. From sleek designs to cutting-edge technology, our products are engineered to exceed expectations and enhance your lifestyle. Discover the perfect blend of style and functionality with our premium collection.";const o=document.createElement("p");return o.textContent="Explore our diverse range of solutions designed to meet the unique needs of modern living. Whether you’re looking to streamline your workflow or elevate your entertainment experience, our products are tailored to deliver exceptional performance and versatility. Discover how our innovative technology can transform your home and simplify your life.",e.appendChild(n),e.appendChild(t),e.appendChild(o),e}())}()})),y.appendChild(x),v.appendChild(C),v.appendChild(y),t.appendChild(o),a.appendChild(d),a.appendChild(r),m.appendChild(h),m.appendChild(v),n.appendChild(t),n.appendChild(a),n.appendChild(m),e.appendChild(n),e}());const n=document.createElement("div");n.classList.add("divContent");const t=document.createElement("div");t.classList.add("footer");const o=document.createElement("p");return o.innerHTML=`Copyright &copy; ${(new Date).getFullYear()} Raphael Vilete`,t.appendChild(o),{header:e,divContent:n,footer:t}}();document.body.appendChild(E.header),document.body.appendChild(E.divContent),document.body.appendChild(E.footer),g()}},e=>{e(e.s=584)}]);