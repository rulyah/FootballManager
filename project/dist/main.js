!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e){e.exports=JSON.parse('{"players":[{"firstName":"Lionel","lastName":"Messi","skillScore":99,"photo":"https://cdnimg.rg.ru/img/content/173/30/52/1_a8ab7a8a_d_850.jpg","id":0},{"firstName":"Cristiano","lastName":"Ronaldo","skillScore":98,"photo":"https://n1s2.starhit.ru/2e/43/a9/2e43a96894518b6454581ba4af6d2eca/480x496_0_6b88ac62a070a9d5f6bafe929f031e5e@480x496_0x0a330c9a_5562293391548161103.jpeg","id":1},{"firstName":"Robert","lastName":"Lewandowski","skillScore":97,"photo":"https://en.as.com/en/imagenes/2019/11/20/football/1574259356_569272_noticia_normal.jpg","id":2},{"firstName":"Kevin","lastName":"De Bruyne","skillScore":96,"photo":"https://cdn.theathletic.com/app/uploads/2020/02/27023834/De-Bruyne-City-1024x682.jpg","id":3},{"firstName":"Virgil","lastName":"van Dijk","skillScore":95,"photo":"https://i.pinimg.com/originals/a2/1b/da/a21bda83b06d0f0d213d982670ca8004.jpg","id":4},{"firstName":"Kylian","lastName":"Mbappe ","skillScore":94,"photo":"https://soccernews.ru/images/foto/20200507/211224_m.jpg","id":5},{"firstName":"Sadio","lastName":"Mane","skillScore":93,"photo":"https://upload.wikimedia.org/wikipedia/commons/a/ae/Mame_Biram_Diouf.jpg","id":6},{"firstName":"Neymar","lastName":"Neymar","skillScore":92,"photo":"https://www.footboom.net/img/upload/3/79b99-Nejmar.jpeg","id":7},{"firstName":"Sergio","lastName":"Aguero ","skillScore":91,"photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sergio_Ag%C3%BCero_2018.jpg/250px-Sergio_Ag%C3%BCero_2018.jpg","id":8},{"firstName":"Eden","lastName":"Hazard","skillScore":90,"photo":"https://upload.wikimedia.org/wikipedia/commons/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg","id":9}]}')},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var p=l(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:g(u,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,p=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,n){var t,r,o;if(n.singleton){var a=h++;t=m||(m=c(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=c(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=l(t[r]);i[o].references--}for(var a=s(e,n),c=0;c<t.length;c++){var d=l(t[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=a}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,".photo {\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\n.player {\r\n  background-color: honeydew;\r\n  border-radius: 4px;\r\n  box-shadow: 1px 1px #aaa;\r\n}\r\n\r\n/* body {\r\n    font-family: sans-serif;\r\n    background-color: #dedede;\r\n    color: #333;\r\n    padding: 20px 0 28px 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  img {\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n  \r\n  .app-title {\r\n    text-align: center;\r\n    font-weight: normal;\r\n    font-size: 2.6rem;\r\n  }\r\n  \r\n  .player {\r\n    max-width: 650px;\r\n    padding: 20px;\r\n    margin: 30px auto;\r\n    background-color: #fff;\r\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .photo {\r\n    float: left;\r\n    width: 40%;\r\n    margin-right: 15px;\r\n  }\r\n  \r\n  .player-name {\r\n    font-size: 2rem;\r\n    font-weight: normal;\r\n    margin: 0 0 1rem 0;\r\n  }\r\n\r\n  .footer {\r\n    font-size: 0.7rem;\r\n    color: #888;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n  \r\n  .checkbox {\r\n    float: left;\r\n    margin-right: 15px;\r\n  }\r\n\r\n .lable {\r\n    position: absolute;\r\n\t  z-index: -1;\r\n\t  opacity: 0;\r\n\t  margin: 10px 0 0 20px;\r\n  } */",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,l,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);t(0);const r=t(1);document.addEventListener("click",(function(e){if(e.target&&"submit"==e.target.id){let e=document.getElementsByClassName("player-radio"),n=Array.prototype.slice.call(e);console.log("Players count: "+n.length);let t=n.filter((function(e,n,t){return e.checked}));if(console.log("Active players: "+t.length),t.length<1)console.error("Nobody is active.");else{let e=t[0].parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML;console.log("First active player is: "+e)}}})),document.getElementById("app").innerHTML=`\n    <h1 class="app-title"> We have ${r.players.length} players </h1>\n    ${function(){let e='\n        <table border="1">\n            <tbody>\n    ';return r.players.forEach(n=>{e+=`\n            <tr>\n                <div class="player">\n                    <td>\n                        <img class="photo" src="${n.photo}">\n                    </td>\n                       <td valign="top">\n                          <table border="1" width="100%" height="100%">\n                            <tbody>\n                                <tr>\n                                    <td>\n                                    <input class="player-radio" type="checkbox">\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        ${n.firstName} ${n.lastName}\n                                    </td>\n                                 </tr>\n                                <tr>\n                                    <td>\n                                        Skill: ${n.skillScore}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </div>\n            </tr>\n        `}),e+="\n            </tbody>\n        </table>\n    ",e}()}\n    <button class="btn-small" type="submit" id="submit">Вперде!</button>\n    \n`;t(1)}]);