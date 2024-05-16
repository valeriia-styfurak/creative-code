document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const burgerMenuButton = document.querySelectorAll('#burger-button');

  burgerMenuButton.forEach(function(burgerMenuButton) {
    burgerMenuButton.addEventListener('click', () => {
      body.classList.toggle('is-open');
    });
  });
});
