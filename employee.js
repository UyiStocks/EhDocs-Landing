// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// Template data
const templates = {
  resume: [
    { img: 'resume1.png', id: 'resume1' },
    { img: 'resume2.png', id: 'resume2' }
  ],

  'cover-letter': [],

  'resignation-letter': []
};
