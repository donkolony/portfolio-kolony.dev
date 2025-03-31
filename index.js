// Global Variables
const mobileMenuToggle = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__links");

// Navbar Menu Toggle
mobileMenuToggle.addEventListener("click", () => {
  const isExpanded = mobileMenuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  mobileMenuToggle.setAttribute("aria-expanded", isExpanded);
  console.log(isExpanded);
});

// Close menu when clicking a menu link
document.addEventListener("click", (event) => {
  if (
    !mobileMenuToggle.contains(event.target) &&
    !navbar.contains(event.target)
  ) {
    navbar.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});

// Close menu when clicking a menu link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});
