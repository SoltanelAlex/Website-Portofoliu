// MENU TOGGLE + close on link click
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
const navAnchors = navLinks.querySelectorAll('a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    // accessibility
    const expanded = menuToggle.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

// Close menu when a link is clicked (mobile)
navAnchors.forEach(a => {
    a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});