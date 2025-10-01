document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const close = document.getElementById('close');
    const nav = document.getElementById("navbar-menu");

    if (bar && nav) {
      bar.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
    if (close) {
      close.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    }
  });