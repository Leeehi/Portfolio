function indexHTML() {

  const button = document.querySelector('.btn');

  window.addEventListener( 'scroll', () => {
    if (window.scrollY > 50) {
      // button.style.opacity = 1;
      button.classList.add('visible');
    } else {
      // button.style.opacity = 0;
      button.classList.remove('visible');
    }
  })
}

indexHTML();