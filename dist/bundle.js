(()=>{"use strict";var t={};function e(){const t=document.getElementById("content"),e=document.createElement("div"),n=document.createElement("button");n.textContent="Home",n.setAttribute("id","home-tab"),n.style.backgroundColor="#FFA500",n.style.color="black",n.style.padding="20px",n.addEventListener("click",(()=>{}));const o=document.createElement("button");o.textContent="Menu",o.setAttribute("id","main-tab"),o.style.backgroundColor="#FFA500",o.style.color="black",o.style.padding="20px",o.addEventListener("click",(()=>{}));const c=document.createElement("button");c.textContent="Contact",c.setAttribute("id","contact-tab"),c.style.backgroundColor="#FFA500",c.style.color="black",c.style.padding="20px",c.addEventListener("click",(()=>{})),e.appendChild(n),e.appendChild(o),e.appendChild(c),t.appendChild(e)}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const n=t.p+"images/cat.png";function o(){const t=document.getElementById("content"),e=document.createElement("div");e.style.backgroundColor="blue";const o=document.createElement("h1");o.textContent="Welcome to the cat cafe!",o.style.fontSize="70px";const c=document.createElement("img");c.src=n,c.style.width="100%",e.appendChild(o),e.appendChild(c),t.appendChild(e)}document.body.appendChild(function(){const t=document.createElement("div");return document.addEventListener("DOMContentLoaded",e),document.addEventListener("DOMContentLoaded",o),t}())})();