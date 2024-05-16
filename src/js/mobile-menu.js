document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuButton = document.querySelectorAll('#burger-button');

  burgerMenuButton.forEach(function (burgerMenuButton) {
    burgerMenuButton.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });
  });
});
