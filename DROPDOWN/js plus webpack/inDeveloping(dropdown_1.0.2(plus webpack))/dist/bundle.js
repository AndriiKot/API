(()=>{"use strict";const e=(e,t)=>{e.classList.toggle(t)},t=e=>{if("checkbox"===e.target.type)return;const t=e.currentTarget.querySelector("input[type='checkbox']");t.checked=!t.checked},c=(e,t,c,n="")=>{const o=document.querySelectorAll(n);let r=0;o.forEach((e=>{e.checked&&r++})),e.textContent=r?c+r:t},n=new Set(["ruby","sql"]),o=new Set(["css","js","html"]),r=new Set([...n,...o]),l=document.querySelector(".select-btn"),s=l.querySelector(".text-content").innerText,d=document.querySelector(".list-items"),i=d.querySelectorAll(".item"),u=document.querySelector(".text-content");l.addEventListener("click",e.bind(void 0,l,"active")),l.addEventListener("click",e.bind(void 0,d,"exists")),i.forEach(((e,n)=>{e.addEventListener("click",t),e.addEventListener("click",c.bind(void 0,u,s,"Selected ",".list-items__item__checkbox"))})),((e,t=r,c=n,l=o)=>{console.log(t,c,l);const s=Array.from(e);e.forEach((e=>{console.log(e)})),console.log(s);const d=new Set(["Full Stack","Frontend","Backend","Backend for Frontend","Frontend for Backend"]);console.log(d)})(i)})();
//# sourceMappingURL=bundle.js.map