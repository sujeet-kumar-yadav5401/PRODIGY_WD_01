const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Change navigation style after scrolling.
function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// Mobile navigation.
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
