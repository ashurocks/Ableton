addEventListener("DOMContentLoaded", () => {
    const $btnNavbar = document.querySelector(".btn-navbar");
  
    if ($btnNavbar) {
      $btnNavbar.addEventListener("click", () => {
        const $navbar_menus = document.querySelector(".navbar-menus");
        const $color = document.querySelector('.menu')
        $navbar_menus.classList.toggle("show");
        $color.classList.toggle("color");
      });
    }
  });