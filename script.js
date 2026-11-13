(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toast = $('#toast');
  let toastTimeout;

  function inform(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3400);
  }

  // Basic progressive enhancement: content is visible even if JS fails.
  document.documentElement.classList.add('js-ready');
  const reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 70px 0px', threshold: 0.03 });
    reveals.forEach(element => observer.observe(element));
  } else {
    reveals.forEach(element => element.classList.add('revealed'));
  }

  const progress = $('#scrollProgress');
  let scrollPending = false;
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = max > 0 ? `${Math.max(0, Math.min(100, window.scrollY / max * 100))}%` : '0%';
    scrollPending = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollPending) { window.requestAnimationFrame(updateProgress); scrollPending = true; }
  }, {passive: true});
  updateProgress();

  const themeButton = $('#themeToggle');
  themeButton?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('kolf-v2-theme', next); } catch (_) {}
    themeButton.setAttribute('aria-label', next === 'light' ? 'Chuyển sang chế độ tối' : 'Chuyển sang chế độ sáng');
    inform(next === 'light' ? 'Đã chuyển sang nền sáng.' : 'Đã trở lại vũ trụ đêm.');
  });

  // Mobile nav is a functioning accessible disclosure.
  const menuButton = $('#mobileMenuButton');
  const mobileMenu = $('#mobileMenu');
  function closeMenu() {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Mở menu');
  }
  menuButton?.addEventListener('click', () => {
    mobileMenu.hidden = !mobileMenu.hidden;
    const expanded = !mobileMenu.hidden;
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Đóng menu' : 'Mở menu');
  });
  $$('#mobileMenu a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileMenu.hidden) closeMenu(); });
  window.matchMedia('(min-width: 921px)').addEventListener('change', event => { if(event.matches) closeMenu(); });

  const facetContent = window.KOLF_CONTENT?.facets ?? {};
  const facetDetail = $('#facetDetail');
  $$('.facet-card').forEach(button => button.addEventListener('click', () => {
    const data = facetContent[button.dataset.facet];
    if (!data) return;
    $$('.facet-card').forEach(card => {
      const isCurrent = card === button;
      card.classList.toggle('active', isCurrent);
      card.setAttribute('aria-pressed', String(isCurrent));
    });
    facetDetail.replaceChildren();
    const symbol = document.createElement('span');
    symbol.className = 'facet-detail-icon';
    symbol.textContent = data.symbol;
    const text = document.createElement('p');
    const bold = document.createElement('strong');
    bold.textContent = `${data.title} `;
    text.append(bold, document.createTextNode(data.description));
    const label = document.createElement('span');
    label.className = 'detail-label';
    label.textContent = data.label;
    facetDetail.append(symbol, text, label);
  }));

  // Native dialog provides focus management / escape support in modern browsers.
  const dialog = $('#storyDialog');
  const dialogClose = $('#storyClose');
  const stories = window.KOLF_CONTENT?.stories ?? {};
  $$('.world-card').forEach(button => button.addEventListener('click', () => {
    const story = stories[button.dataset.story];
    if (!story || !dialog) return;
    $('#storyDialogLabel').textContent = story.label;
    $('#storyDialogTitle').textContent = story.title;
    $('#storyDialogText').textContent = story.text;
    $('#storyDialogNote').textContent = story.note;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('dialog-open');
    } else {
      inform('Trình duyệt chưa hỗ trợ popup này.');
    }
  }));
  function closeDialog(){ if (dialog?.open) dialog.close(); }
  dialogClose?.addEventListener('click', closeDialog);
  dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });

  // Details can be explored individually without JS. On wide screens keep one chapter open.
  $$('.chapter-item').forEach(detail => detail.addEventListener('toggle', () => {
    if (!detail.open || window.innerWidth < 681) return;
    $$('.chapter-item').forEach(other => { if (other !== detail) other.open = false; });
  }));

  $('#shareBtn')?.addEventListener('click', async () => {
    const url = window.location.href.split('#')[0];
    try {
      if (navigator.share && location.protocol !== 'file:') {
        await navigator.share({title: document.title, url});
        return;
      }
      if (navigator.clipboard?.writeText && location.protocol !== 'file:') {
        await navigator.clipboard.writeText(url);
        inform('Đã sao chép liên kết!');
      } else {
        window.prompt('Sao chép đường dẫn này:', url);
      }
    } catch (err) {
      if (err?.name !== 'AbortError') inform('Không thể chia sẻ tự động; hãy sao chép URL trên thanh địa chỉ.');
    }
  });

  if ($('#year')) $('#year').textContent = String(new Date().getFullYear());
  // No external trackers, no hidden outgoing requests, no credentials in client code.
})();
