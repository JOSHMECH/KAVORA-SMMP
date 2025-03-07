const mobileMenuIcon = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenuIcon = document.querySelector(".tabler-icon-x");
const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");

mobileMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("open-menu");
  mobileNav.classList.toggle("closed-menu");
});

closeMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("open-menu");
  mobileNav.classList.toggle("closed-menu");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("closed-menu");
    mobileNav.classList.remove("open-menu");
  });
});
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};
