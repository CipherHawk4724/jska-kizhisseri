// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav ul');

// Check if the navToggle and navMenu elements exist
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Add or remove 'active' class
    });
}

// Smooth Scrolling for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation (Basic Example)
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields before submitting the form.');
        }
    });
}
