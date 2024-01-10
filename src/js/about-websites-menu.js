(() => {

  const aboutItems= document.querySelectorAll('.about-item');

  aboutItems.forEach((item)=> {
    item.addEventListener('click', function() {
      this.querySelector('.about-info').classList.toggle('is-open');
    })
  })

})();
