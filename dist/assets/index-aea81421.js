(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(d){if(d.ep)return;d.ep=!0;const o=e(d);fetch(d.href,o)}})();const f="/assets/delete_FILL0_wght400_GRAD0_opsz40-ae6bacf4.svg",i=document.querySelector("#todo-container"),p=document.querySelector("#projects-list"),y=document.querySelector("#heading");let n="Welcome!";const a={displayTodo:r=>{i.innerText="";for(let t of s[r]){const e=document.createElement("div"),c=document.createElement("input"),d=document.createElement("label");i.appendChild(e),e.classList.add("drac-box","drac-card","drac-bg-purple","drac-p-sm","drac-my-sm"),e.appendChild(c),e.appendChild(d),c.type="checkbox",c.classList.add("drac-checkbox","drac-checkbox-green"),d.classList.add("drac-text","drac-text-white","drac-pl-sm"),c.id=t.title,d.for=t.title,d.innerText=t.title;const o=s[n].indexOf(t);a.addPriority(t.priority,e),a.addDeleteButton(e,o)}},displayProjects:()=>{p.innerText="";for(let r in s){const t=document.createElement("p");t.classList.add("drac-box","drac-card","drac-bg-purple","drac-my-sm","drac-p-sm"),p.appendChild(t),t.innerText=r,t.id="project-item",t.addEventListener("click",()=>{n=r,y.innerText=r,a.displayTodo(n),document.querySelectorAll("#project-item").forEach(e=>{e.innerText===r?(e.classList.remove("drac-bg-purple"),e.classList.add("drac-bg-cyan-green")):(e.classList.remove("drac-bg-cyan-green"),e.classList.add("drac-bg-purple"))})})}},addPriority(r,t){const e=document.createElement("span"),c=document.createElement("span");e.classList.add("drac-badge"),r==="1"?(e.classList.add("drac-bg-red"),c.classList.add("drac-text-white")):r==="2"?(e.classList.add("drac-bg-orange"),c.classList.add("drac-text-white")):r==="3"?(e.classList.add("drac-bg-yellow"),c.classList.add("drac-text-purple")):r=="default"?(e.classList.add("drac-bg-purple"),c.classList.add("drac-text-purple")):(e.classList.add("drac-bg-cyan"),c.classList.add("drac-text-purple")),t.appendChild(e),e.appendChild(c),c.innerText=`P ${r}`},addDeleteButton(r,t){const e=document.createElement("img");e.src=f,r.appendChild(e),e.addEventListener("click",()=>{i.removeChild(r);for(let c in s[n]){let d=s[n].length-1;c==d?s[n].pop():c==t&&s[n].splice(c,1)}})}},g=document.querySelector("#todo-form"),u=document.querySelector("#todo-input"),L=document.querySelector("#todo-priority"),h=document.querySelector("#projects-form"),m=document.querySelector("#projects-input");let s={"Welcome!":[{title:"Welcome",priority:"default"}]};const b=r=>{r.preventDefault();let t=u.value,e=L.value;s[n].push({title:t,priority:e}),console.log(s),a.displayTodo(n),u.value=""},x=r=>{r.preventDefault();let t=m.value;for(let e in s)if(t===e)return;s[t]=[],a.displayProjects(),m.value=""};a.displayTodo(n);a.displayProjects();g.addEventListener("submit",b);h.addEventListener("submit",x);
