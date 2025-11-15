// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

  // Selectors
  const preview = document.querySelector('.document-preview');
  const docItems = document.querySelectorAll('.doc-item');

  // Template data (resumes only for now)
  const templates = {
    resume: [
      { img: 'resume1.png', id: 'resume1', name: 'Modern Resume' },
      { img: 'resume2.png', id: 'resume2', name: 'Classic Resume' }
    ],
    'cover-letter': [],
    'resignation-letter': []
  };

  // Render templates
  function renderTemplates(type) {
    preview.innerHTML = ''; // Clear previous content

    if (!templates[type] || templates[type].length === 0) {
      const msg = document.createElement('p');
      msg.classList.add('preview-message');
      msg.textContent = 'No templates available.';
      preview.appendChild(msg);
      return;
    }

    const grid = document.createElement('div');
    grid.classList.add('template-grid');

    templates[type].forEach(t => {
      const card = document.createElement('div');
      card.classList.add('template-card');

      const img = document.createElement('img');
      img.src = t.img;
      img.alt = `${type} template`;

      const title = document.createElement('p');
      title.textContent = t.name;
      title.classList.add('template-name');

      const btn = document.createElement('button');
      btn.textContent = 'Build';
      btn.classList.add('build-btn');

      // Save selection and go to build page
      btn.onclick = () => {
        localStorage.setItem('selectedTemplate', JSON.stringify({
          docType: type,
          templateId: t.id
        }));
        window.location.href = 'build.html';
      };

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(btn);
      grid.appendChild(card);
    });

    preview.appendChild(grid);
  }

  // Sidebar click events
  docItems.forEach(item => {
    item.addEventListener('click', () => {
      docItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderTemplates(item.dataset.doc);
    });
  });

  // Initial load: resume templates
  renderTemplates('resume');

});
