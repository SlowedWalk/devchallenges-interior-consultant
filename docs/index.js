// Get the navbar, hamburger icon and mobile menu
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const hamburger_open = document.getElementById("btn-open");
const hamburger_close = document.getElementById("btn-close");
const hamburger_close_icon = document.getElementById("btn-close-icon");

// Add a click event to the hamburger icon
hamburger_open.addEventListener("click", () => {
  console.log("clicked");
  // Toggle the "is-active" class on both the hamburger icon and mobile menu

  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("sm:hidden");
  hamburger_open.classList.toggle("hidden");
  hamburger_close.classList.remove("hidden");
  hamburger_close_icon.classList.remove("hidden");

  // If the mobile menu is active, add padding to the navbar
  if (mobileMenu.classList.contains("is-active")) {
    navbar.style.paddingBottom = "1rem";
  } else {
    navbar.style.paddingBottom = "0";
  }
});

hamburger_close.addEventListener("click", () => {
  console.log("clicked");
  // Toggle the "is-active" class on both the hamburger icon and mobile menu

  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("sm:hidden");
  hamburger_open.classList.toggle("hidden");
  hamburger_close.classList.add("hidden");
  hamburger_close_icon.classList.add("hidden");
});
