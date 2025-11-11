// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// --- Smooth scroll to category section when "Build" button clicked ---
document.addEventListener("DOMContentLoaded", () => {
  const buildBtn = document.getElementById("buildBtn");
  const categorySection = document.getElementById("categories");

  buildBtn.addEventListener("click", () => {
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
