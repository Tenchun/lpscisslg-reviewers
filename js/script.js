 const navItems = [...document.querySelectorAll('.nav-item')];
    const dropdowns = [...document.querySelectorAll('.dropdown[data-dropdown]')];
    const hamburger = document.getElementById('hamburger');
    const hamburgerDropdown = document.getElementById('hamburgerDropdown');
    const homeBrand = document.getElementById('homeBrand');

    function closeAll() {
      navItems.forEach(btn => btn.classList.remove('active'));
      dropdowns.forEach(menu => menu.classList.remove('open'));
      hamburgerDropdown.classList.remove('open');
      hamburger.classList.remove('open');
    }

   navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-menu');
    const menu = document.querySelector(`.dropdown[data-dropdown="${key}"]`);

    closeAll();

    // ✅ If dropdown exists → open it
    if (menu) {
      menu.classList.add('open');
    }

    // ✅ ALWAYS add underline
    btn.classList.add('active');
  });
});

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = hamburgerDropdown.classList.contains('open');

      navItems.forEach(btn => btn.classList.remove('active'));
      dropdowns.forEach(menu => menu.classList.remove('open'));

      if (isOpen) {
        hamburgerDropdown.classList.remove('open');
        hamburger.classList.remove('open');
      } else {
        hamburgerDropdown.classList.add('open');
        hamburger.classList.add('open');
      }
    });

    document.addEventListener('click', (e) => {
      const insideHeader = e.target.closest('.header-wrap');
      const insideFooter = e.target.closest('.footer-wrap');
      if (!insideHeader && !insideFooter) closeAll();
    });

    homeBrand.addEventListener('click', () => {
      window.location.href = 'pogi home';
    });

    homeBrand.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') window.location.href = 'pogi home';
    });

    document.getElementById('footerHome').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'pogi home footer';
    });

    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.open('pogi drive link', '_blank', 'noopener');
      });
    });

    document.querySelectorAll('.card-link').forEach(card => {
      card.addEventListener('pointerdown', () => card.classList.add('active'));
      card.addEventListener('pointerup', () => card.classList.remove('active'));
      card.addEventListener('pointerleave', () => card.classList.remove('active'));
      card.addEventListener('blur', () => card.classList.remove('active'));
    });