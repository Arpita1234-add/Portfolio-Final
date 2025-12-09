/* BACK TO TOP */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 250 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* SMOOTH SCROLL */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* CLOSE NAVBAR ON MOBILE */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).toggle();
    }
  });
});
