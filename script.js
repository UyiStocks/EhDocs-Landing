// --- Smooth slow ease-in-out scrolling between sections ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      smoothScrollTo(target.offsetTop, 2000); // 2000ms = 2 seconds
    }
  });
});

function smoothScrollTo(targetY, duration) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease-in-out cubic
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + diff * ease);
    if (timeElapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

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

// --- Redirect first category card to employee.html ---
const employeeCard = document.querySelector('.category-card');
if (employeeCard) {
  employeeCard.addEventListener('click', () => {
    window.location.href = 'employee.html';
  });
}
