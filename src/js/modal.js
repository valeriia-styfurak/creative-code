(() => {
  const closeFormButton = document.querySelector('#close-button');
  const openFormButtons = document.querySelectorAll('.open-form-button');

  openFormButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.body.classList.add('modal-open');
    });
  });

  closeFormButton.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
  });

  document.querySelector('#modal-overlay').addEventListener('click', () => {
    document.body.classList.remove('modal-open');
  });
})();

