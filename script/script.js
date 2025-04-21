// mobile-header.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. Sélection des éléments
    const header = document.querySelector('.header');
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const navToggle = document.createElement('button');
    
    // 2. Création du bouton mobile (seulement si nécessaire)
    if (window.innerWidth <= 768) {
        // Configuration du bouton burger
        navToggle.innerHTML = `
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        `;
        navToggle.className = 'mobile-menu-toggle';
        navToggle.setAttribute('aria-label', 'Menu mobile');
        
        // Insertion dans le header
        header.insertBefore(navToggle, header.querySelector('.nav-links'));
        
        // 3. Gestion des événements
        navToggle.addEventListener('click', function() {
            header.classList.toggle('mobile-open');
        });
        
        // 4. Gestion des dropdowns mobile
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = this.closest('.dropdown');
                    dropdown.classList.toggle('active');
                    
                    // Ferme les autres dropdowns ouverts
                    document.querySelectorAll('.dropdown.active').forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });
                }
            });
        });
        
        // 5. Fermeture en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header') && header.classList.contains('mobile-open')) {
                header.classList.remove('mobile-open');
            }
        });
    }
    
    // 6. Adaptation au redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            header.classList.remove('mobile-open');
            document.querySelectorAll('.dropdown.active').forEach(d => {
                d.classList.remove('active');
            });
        }
    });
});

