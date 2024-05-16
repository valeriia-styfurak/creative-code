document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.remove("mobile-menu-open"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}));
//# sourceMappingURL=index.d2c8eeb9.js.map
