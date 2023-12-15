(() => {
  const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const mobileMenuRef = document.querySelector('[data-mobile-menu]');
  const body = document.querySelector('body');

  openMenuBtnRef.addEventListener('click', () => {
    body.classList.add('overflow-hidden','is-open');
  });

  closeMenuBtnRef.addEventListener('click', () => {
    body.classList.remove('overflow-hidden', 'is-open');
  });
})();


