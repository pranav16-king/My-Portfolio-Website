// Mobile menu logic: hide desktop nav when mobile menu is open, show desktop nav when closed/resized
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-mobile-menu');
const desktopNav = document.querySelector('.desktop-nav');

function showMobileMenu() {
  mobileMenu.style.display = "flex";
  if (window.innerWidth <= 768) desktopNav.style.display = "none";
}
function hideMobileMenu() {
  mobileMenu.style.display = "none";
  if (window.innerWidth <= 768) desktopNav.style.display = "flex";
}
mobileBtn.onclick = showMobileMenu;
closeBtn.onclick = hideMobileMenu;
function closeMobileMenu() { hideMobileMenu(); }

// Ensure nav resets on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.style.display = "none";
    desktopNav.style.display = "flex";
  }
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  document.body.className = theme === 'dark' ? 'dark' : '';
  themeIcon.innerText = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  let current = document.body.getAttribute('data-theme');
  let next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Initialize theme (default = light)
(function initializeTheme() {
  let saved = localStorage.getItem('theme');
  setTheme(saved || 'light');
})();

// Floating particles animation (Home section)
function createParticles(num = 50) {
  const container = document.getElementById('particles-bg');
  container.innerHTML = '';
  for (let i = 0; i < num; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${6 + Math.random() * 10}px`;
    particle.style.height = `${6 + Math.random() * 10}px`;
    particle.style.animationDuration = `${2 + Math.random() * 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(particle);
  }
}
createParticles(50);

// Fade-up animation for sections (triggered on scroll)
const fadeEls = document.querySelectorAll('.fade-up');
function fadeOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('DOMContentLoaded', fadeOnScroll);
const videos = document.querySelectorAll('video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    // Pause all other videos
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
      }
    });
  });
});