(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.getElementById("form"),a="https://mytechatwallapi.onrender.com/";async function d(){return await(await fetch(a)).json()}async function l(c){const r=document.getElementById("posts-container");let s=await d();r.innerHTML="",s.reverse().forEach(o=>{let e=document.createElement("h3"),t=document.createElement("p"),n=document.createElement("div");e.textContent=o.username,t.textContent=o.message,n.appendChild(e),n.appendChild(t),r.appendChild(n)})}l();i.addEventListener("submit",async c=>{c.preventDefault(),console.log("clicked");const r=new FormData(i),s=Object.fromEntries(r);console.log(s);try{console.log("tried");const o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});o.ok?(console.log("api response ok"),l()):console.error("Failed to post message",o.status)}catch(o){console.error("Error during fetch",o)}});