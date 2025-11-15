// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// Template data
const templates = {
  resume: [
    { img: 'resume1.jpeg', id: 'resume1' },
    { img: 'resume1.jpeg', id: 'resume2' }
  ],

  'cover-letter': [
    { img: 'template1.png', id: 'cover1' },
    { img: 'template2.png', id: 'cover2' }
  ],

  'resignation-letter': [
    { img: 'template1.png', id: 'resign1' },
    { img: 'template2.png', id: 'resign2' }
  ]
};
