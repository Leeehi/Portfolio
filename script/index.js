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

  button.addEventListener( 'click', () => {
    const link = document.createElement('a');
    link.href = "http://lehigalabo.c1.biz/Galabo, Lehi - Resume.pdf";
    link.download = 'Galabo, Lehi - Resume.pdf';
    link.click();
  })
}

indexHTML();