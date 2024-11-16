const hamburgerElement = document.getElementById("hamburger");
const menuElement = document.getElementById("menu");

const toggleMenu = () => {
  menuElement.classList.toggle("menu-show");
};

hamburgerElement.addEventListener("click", toggleMenu);
