// script.js

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const email = form.querySelector('input[type="email"]').value;
    if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Event tracking functionality Example (Using Google Analytics)
function trackEvent(eventCategory, eventAction, eventLabel) {
    if (typeof gtag === 'function') {
        gtag('event', eventAction, {
            'event_category': eventCategory,
            'event_label': eventLabel
        });
    }
}

// Example usage of tracking an event
const button = document.querySelector('button.trackable');
button.addEventListener('click', () => {
    trackEvent('Button', 'Click', 'Trackable Button');
});
