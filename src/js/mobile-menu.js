(() => {
  const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const body = document.querySelector('body');
  const mobileLink = document.querySelector('.mobile-nav-link')

  openMenuBtnRef.addEventListener('click', () => {
    body.classList.add('overflow-hidden','is-open');
  });

  closeMenuBtnRef.addEventListener('click', () => {
    body.classList.remove('overflow-hidden', 'is-open');
  });

  mobileLink.addEventListener('click',() => {
    body.classList.remove('overflow-hidden', 'is-open');
  })
})();
