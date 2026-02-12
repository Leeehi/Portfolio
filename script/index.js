function indexHTML() {

  const button = document.querySelector('.btn');

  // window.addEventListener( 'scroll', () => {
  //   if (window.scrollY > 50) {
  //     // button.style.opacity = 1;
  //     button.classList.add('visible');
  //   } else {
  //     // button.style.opacity = 0;
  //     button.classList.remove('visible');
  //   }
  // })

  button.addEventListener( 'click', () => {
    const link = document.createElement('a');
    link.href = "http://lehigalabo.c1.biz/Galabo, Lehi - Resume.pdf";
    link.download = 'Galabo, Lehi - Resume.pdf';
    link.click();
  })

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".right-side a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.6 }); // 60% visible

  sections.forEach(section => observer.observe(section));

}

indexHTML();