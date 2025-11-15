// --- Fullscreen overlay menu ---
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openMenu.addEventListener('click', () => menuOverlay.classList.add('active'));
closeMenu.addEventListener('click', () => menuOverlay.classList.remove('active'));

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // Selectors
  // =========================
  const preview = document.querySelector('.document-preview');
  const docItems = document.querySelectorAll('.doc-item');

  // =========================
  // Template data
  // =========================
  const templates = {
    resume: [
      { img: 'templates/resume1.png', id: 'resume1', name: 'Modern Resume' },
      { img: 'templates/resume2.png', id: 'resume2', name: 'Classic Resume' }
    ],
    'cover-letter': [],
    'resignation-letter': []
  };

  // =========================
  // Render main preview templates
  // =========================
  function renderTemplates(type) {
    preview.innerHTML = '';

    const typeTemplates = templates[type];

    if (!typeTemplates || typeTemplates.length === 0) {
      const msg = document.createElement('p');
      msg.classList.add('preview-message');
      msg.textContent = 'No templates available.';
      preview.appendChild(msg);
      return;
    }

    const grid = document.createElement('div');
    grid.classList.add('template-grid');

    typeTemplates.forEach(template => {
      const card = document.createElement('div');
      card.classList.add('template-card');

      const img = document.createElement('img');
      img.src = template.img;
      img.alt = `${type} template`;

      const title = document.createElement('p');
      title.textContent = template.name;
      title.classList.add('template-name');

      const btn = document.createElement('button');
      btn.textContent = 'Build';
      btn.classList.add('build-btn');
      btn.onclick = () => {
        localStorage.setItem('selectedTemplate', JSON.stringify({
          docType: type,
          templateId: template.id
        }));
        window.location.href = 'build.html';
      };

      card.append(img, title, btn);
      grid.appendChild(card);
    });

    preview.appendChild(grid);
  }

  // =========================
  // Render sidebar thumbnails
  // =========================
  function renderSidebarPreviews() {
    docItems.forEach(item => {
      const type = item.dataset.doc;
      let container = item.querySelector('.sidebar-preview');

      // Create container if not exists
      if (!container) {
        container = document.createElement('div');
        container.classList.add('sidebar-preview');
        item.appendChild(container);
      }

      container.innerHTML = ''; // Clear previous images

      if (templates[type] && templates[type].length > 0) {
        templates[type].forEach(t => {
          const img = document.createElement('img');
          img.src = t.img;
          img.alt = t.name;
          container.appendChild(img);
        });
      }
    });
  }

  // =========================
  // Sidebar click events
  // =========================
  docItems.forEach(item => {
    item.addEventListener('click', () => {
      docItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const selectedType = item.dataset.doc;
      renderTemplates(selectedType);
    });
  });

  // =========================
  // Initial load
  // =========================
  renderSidebarPreviews();
  renderTemplates('resume');

});
