/* =====================
   script.js
   ===================== */

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const animatedElements = document.querySelectorAll(".animate");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

animatedElements.forEach((el) => observer.observe(el));
