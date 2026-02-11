function toggleHamburgerMenu(button) {
  const menu = document.getElementById("menu");
  if (!menu) return;

  const isOpen = menu.classList.toggle("active");
  button.setAttribute("aria-expanded", String(isOpen));
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  const menu = document.getElementById("menu");
  const button = document.querySelector(".hamburger-toggle");

  if (menu?.classList.contains("active")) {
    menu.classList.remove("active");
    button?.setAttribute("aria-expanded", "false");
  }
});