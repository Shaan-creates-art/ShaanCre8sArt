// Placeholder AOS script
window.AOS = {
  init: function () {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.transition = 'opacity 1s';
        el.style.opacity = 1;
      }, 500);
    });
  }
};