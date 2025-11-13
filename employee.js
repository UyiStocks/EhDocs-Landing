// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// Template data (2 templates each)
const templates = {
  resume: [
    { img: 'resume1.png', id: 'resume1' },
    { img: 'resume2.png', id: 'resume2' }
  ],

  'cover-letter': [
    { img: 'cover1.png', id: 'cover1' },
    { img: 'cover2.png', id: 'cover2' }
  ],

  'resignation-letter': [
    { img: 'resign1.png', id: 'resign1' },
    { img: 'resign2.png', id: 'resign2' }
  ]
};
