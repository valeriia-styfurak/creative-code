(() => {
const body = document.querySelector('body');
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeButton = document.querySelector('#close-button');
const openButtons = document.querySelectorAll('.open-button');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.remove('closed');
      modalOverlay.classList.remove('closed');
      body.classList.add('overflow-hidden');
    });
  });

closeButton.addEventListener('click', () => {
  modal.classList.add('closed');
  modalOverlay.classList.add('closed');
  body.classList.remove('overflow-hidden');
});

  modalOverlay.addEventListener('click', () => {
    modal.classList.add('closed');
    modalOverlay.classList.add('closed');
    body.classList.remove('overflow-hidden');
  });
})();

