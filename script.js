// =============================
// 📱 TOGGLE MENU (Mobile)
// =============================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
const navAnchors = document.querySelectorAll('.nav-links a');

// Deschide / închide meniul
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');

  const expanded = menuToggle.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

// Închide meniul când se apasă un link
navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


// =============================
// ✨ FADE + SLIDE-UP ANIMATION
// =============================

// Selectăm toate elementele cu clasa .fade-slide
const fadeEls = document.querySelectorAll('.fade-slide');

// Configurăm observerul
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // adaugă clasa "visible" pentru a porni animația CSS
      entry.target.classList.add('visible');

      // adăugăm un mic delay secvențial (0.15s între elemente)
      entry.target.style.transitionDelay = `${i * 0.15}s`;

      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0,            // declanșează imediat ce intră în viewport
  rootMargin: "0px 0px -10% 0px" // puțin mai devreme decât complet în ecran
});

// Activăm observerul pentru toate elementele fade-slide
fadeEls.forEach(el => observer.observe(el));
