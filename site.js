(() => {
  const menu = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  function closeMenu(returnFocus = false) {
    menu.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    mobileNav.hidden = open;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true);
  });
  const dialog = document.getElementById('image-dialog');
  const image = document.getElementById('viewer-image');
  const original = document.getElementById('original-link');
  const stage = dialog.querySelector('.viewer-stage');
  let zoom = 1;
  let trigger = null;
  function updateZoom() {
    image.style.width = (zoom * 100) + '%';
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  }
  document.querySelectorAll('[data-image]').forEach(el => el.addEventListener('click', event => {
    if (!dialog.showModal) return;
    event.preventDefault();
    trigger = el;
    const src = el.dataset.image;
    image.src = src;
    image.alt = el.dataset.alt || 'Orga Drone product screenshot';
    original.href = src;
    zoom = 1;
    updateZoom();
    dialog.showModal();
    document.getElementById('close-viewer').focus();
  }));
  document.getElementById('zoom-in').addEventListener('click', () => { zoom = Math.min(zoom + 0.25, 4); updateZoom(); });
  document.getElementById('zoom-out').addEventListener('click', () => { zoom = Math.max(zoom - 0.25, 0.5); updateZoom(); });
  document.getElementById('close-viewer').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (trigger) trigger.focus(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();