document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  
    // Menu mobile
    mobileBtn.addEventListener('click', function() {
      header.classList.toggle('mobile-nav-open');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });
  
    // Dropdown mobile
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const dropdown = this.closest('.mobile-dropdown');
        dropdown.classList.toggle('active');
        
        // Fermer les autres dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(item => {
          if (item !== dropdown) item.classList.remove('active');
        });
      });
    });
  
    // Fermeture en cliquant sur l'overlay
    overlay.addEventListener('click', function() {
      header.classList.remove('mobile-nav-open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  
    // Fermeture en cliquant sur un lien
    document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item').forEach(link => {
      link.addEventListener('click', function() {
        header.classList.remove('mobile-nav-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  
    // Fermeture avec la touche ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && header.classList.contains('mobile-nav-open')) {
        header.classList.remove('mobile-nav-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  