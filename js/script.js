const navItems = [...document.querySelectorAll(".nav-item")];
const dropdowns = [...document.querySelectorAll(".dropdown[data-dropdown]")];
const hamburger = document.getElementById("hamburger");
const hamburgerDropdown = document.getElementById("hamburgerDropdown");
const homeBrand = document.getElementById("homeBrand");

function closeAll() {
  navItems.forEach((btn) => btn.classList.remove("active"));
  dropdowns.forEach((menu) => menu.classList.remove("open"));
  hamburgerDropdown.classList.remove("open");
  hamburger.classList.remove("open");
}

navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-menu");
    const menu = document.querySelector(`.dropdown[data-dropdown="${key}"]`);

    if (!menu) return; // no dropdown, just follow the link

    const wasOpen = menu.classList.contains("open");

    closeAll();

    if (!wasOpen) {
      menu.classList.add("open");
      btn.classList.add("active");
    }
  });
});
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = hamburgerDropdown.classList.contains("open");

  navItems.forEach((btn) => btn.classList.remove("active"));
  dropdowns.forEach((menu) => menu.classList.remove("open"));

  if (isOpen) {
    hamburgerDropdown.classList.remove("open");
    hamburger.classList.remove("open");
  } else {
    hamburgerDropdown.classList.add("open");
    hamburger.classList.add("open");
  }
});

document.addEventListener("click", (e) => {
  const insideHeader = e.target.closest(".header-wrap");
  const insideFooter = e.target.closest(".footer-wrap");
  if (!insideHeader && !insideFooter) closeAll();
});

homeBrand.addEventListener("click", () => {
  window.location.href = "./maintenance.html";
});

homeBrand.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ")
    window.location.href = "./maintenance.html";
});

document.getElementById("footerHome").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./maintenance.html";
});

document.querySelectorAll("[data-link]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("pogi drive link", "_blank", "noopener");
  });
});

// Refresh dropdown state on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  dropdowns.forEach((menu) => menu.classList.remove("open"));
  hamburgerDropdown.classList.remove("open");
});

document.querySelectorAll(".card-link").forEach((card) => {
  card.addEventListener("pointerdown", () => card.classList.add("active"));
  card.addEventListener("pointerup", () => card.classList.remove("active"));
  card.addEventListener("pointerleave", () => card.classList.remove("active"));
  card.addEventListener("blur", () => card.classList.remove("active"));
});
