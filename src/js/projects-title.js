const projectsTitle = document.querySelector('.projects-title');
const titleTarget = document.querySelector('.title-target');

window.addEventListener('scroll' , () => {
  const titleTop = projectsTitle.getBoundingClientRect().top;
  const targetTop = titleTarget.getBoundingClientRect().top;

  if (titleTop < targetTop) {
    projectsTitle.style.opacity = 1;
    projectsTitle.style.pointerEvents = 'auto';
  }
  else {
    projectsTitle.style.pointerEvents = 'none';
    projectsTitle.style.opacity = 0;
  }
});
