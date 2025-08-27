function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function openHome(){
    window.open("./../index.html");
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });