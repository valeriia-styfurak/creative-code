const projectsList = document.querySelectorAll('.project-item');
const projectImages = document.querySelectorAll('.projects-img-md');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function updateImagesVisibility() {
  projectsList.forEach((item, index) => {
    if (isElementInViewport(item)) {
      projectImages.forEach((img, imgIndex) => {
        img.style.opacity = imgIndex === index ? '1' : '0';
      });
    }
  });
}

window.addEventListener('scroll', updateImagesVisibility);

updateImagesVisibility();
