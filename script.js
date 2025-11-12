// Simple scroll animation (optional)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
