(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(){const o=new Date;document.getElementById("currentDate").innerText=`Current Date: ${o.toLocaleString()}`}function f(){const o=document.getElementById("eventDate").value;if(!o){alert("Please select a date!");return}const r=new Date(o),s=document.getElementById("countdown");function c(){const n=r-new Date;if(n<=0){s.innerText="Event Time Reached!",clearInterval(e);return}const i=Math.floor(n/(1e3*60*60*24)),u=Math.floor(n/(1e3*60*60)%24),a=Math.floor(n/(1e3*60)%60),d=Math.floor(n/1e3%60);s.innerText=`Time Left: ${i}d ${u}h ${a}m ${d}s`}c();const e=setInterval(c,1e3)}window.onload=function(){l()};document.getElementById("startCountdown").addEventListener("click",f);
