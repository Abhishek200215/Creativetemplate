
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('show');
    this.classList.toggle('open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && event.target !== hamburger) {
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('open');
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        hamburger.classList.remove('open');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Back to top button functionality
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        
        // Reset floating labels
        const labels = this.querySelectorAll('label');
        labels.forEach(label => {
            label.style.top = '15px';
            label.style.fontSize = '1rem';
            label.style.background = '#f9f9f9';
            label.style.color = '#777';
        });
    });
}

// Animate elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .content > *').forEach(el => {
    observer.observe(el);
});

// Image hover effect
const images = document.querySelectorAll('.right-div img');
images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05) rotate(2deg)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0)';
    });
});
