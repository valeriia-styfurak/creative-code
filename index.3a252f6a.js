const projectsTitle=document.querySelector(".projects-title"),titleTarget=document.querySelector(".title-target");window.addEventListener("scroll",(()=>{projectsTitle.getBoundingClientRect().top<titleTarget.getBoundingClientRect().top?(projectsTitle.style.opacity=1,projectsTitle.style.pointerEvents="auto"):(projectsTitle.style.pointerEvents="none",projectsTitle.style.opacity=0)}));
//# sourceMappingURL=index.3a252f6a.js.map
