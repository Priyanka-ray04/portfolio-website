/* ================= MOBILE MENU ================= */

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

/* ================= SCROLL ANIMATION ================= */

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function () {
  hiddenElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
});
