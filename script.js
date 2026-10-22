const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("mobile-open", !isOpen);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (nav?.classList.contains("mobile-open")) {
      nav.classList.remove("mobile-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });
});
