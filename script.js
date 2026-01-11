// DOM Elements
const loader = document.querySelector('.terminal-loader');
const cursorTrail = document.querySelector('.cursor-trail');
const fillBars = document.querySelectorAll('.fill');

// Hide loader after delay
setTimeout(() => {
  loader.style.display = 'none';
}, 2800);

// Create cursor trail
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const distX = mouseX - posX;
  const distY = mouseY - posY;
  
  posX += distX / 8;
  posY += distY / 8;
  
  cursorTrail.style.left = `${posX}px`;
  cursorTrail.style.top = `${posY}px`;
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Animate skill bars on scroll
function animateOnScroll() {
  fillBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (barPosition < screenPosition) {
      const width = bar.parentElement.style.width || getComputedStyle(bar).width;
      bar.style.width = width;
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Message sent securely! (This is a demo)');
    contactForm.reset();
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
