// --- Mobile Navigation Menu Logic ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-links-active');
        burger.classList.remove('toggle');
    });
});

// --- Dynamic Typing Effect using Typed.js ---
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring AI/ML Engineer', 'Web Developer', 'Tech Enthusiast'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// --- Active Link Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navAnchorTags = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navAnchorTags.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// --- Basic Form Submission Alert ---
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully (Simulation).');
    this.reset();
});