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

  const projects = [
    {
      id: "blueCarbon",
      title: "Blue Carbon MRV System",
      emoji: "🌊",
      desc: "Advanced Carbon Monitoring Flask App",
      long:
        "Blue Carbon MRV System is a complete carbon monitoring and verification platform using satellite, drone, and sensor analytics. Includes MRV automation, mangrove health detection, geo mapping, pollution tracking, marine ecosystem insights, and government-friendly reporting features.",
      thumbnail: "/video/Blue_carbon_mrv.mp4",
      type: "video",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "AI"],
      github: "https://github.com/pranav16-king/Blue-Carbon-MRV",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" },
        { name: "", dp: "/achivment/member/male.avif", github: "https://github.com" },
        { name: "", dp: "/achivment/member/male.avif", github: "https://github.com" },
        { name: "", dp: "/achivment/member/male.avif", github: "https://github.com" }
      ],
      features: [
        "Satellite analytics",
        "Drone vegetation mapping",
        "AI-based carbon estimation",
        "MRV automation",
        "Geo dashboard",
        "PDF reporting"
      ]
    },

    {
      id: "lunabot",
      title: "Lunabot",
      emoji: "🚀",
      desc: "Space Robotics & Terrain AI",
      long:
        "A lunar rover system with autonomous navigation, obstacle detection, terrain AI mapping, and multi-sensor fusion.",
      thumbnail: "/video/lunabot.mp4",
      type: "video",
      tech: ["Python", "Robotics", "Sensors"],
      github: "https://github.com/pranav16-king/practice",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }
       
      ],
      features: ["Terrain AI", "Autonomous system", "Sensors integration"]
    },

    {
      id: "school",
      title: "School Counseling System",
      emoji: "🎓",
      desc: "Education Performance Platform",
      long:
        "A counseling and performance analysis system with login, tracking, dashboards, and MongoDB integration.",
      thumbnail: "images/school.png",
      tech: ["Python", "Flask", "MongoDB"],
      github: "https://github.com/pranav16-king/school-counseling-app",
      team: [
        { name: "Pranav Khaire ", dp: "images/pranav.jpg", github: "https://github.com/pranav16-king" }
      
      ],
      features: ["Student tracking", "Reports", "Login roles"]
    },

    {
      id: "intern",
      title: "PM Internship Allocator",
      emoji: "🗂️",
      desc: "Smart Internship Assignment Tool",
      long:
        "Automatically assigns students to internship roles using preference weighting and admin dashboards.",
      thumbnail: "images/internship.png",
      tech: ["Python", "Flask", "SQLite"],
      github: "https://github.com/pranav16-king/pm_internship_allocator",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }
      ],
      features: ["Auto allocation", "Admin panel"]
    },

    {
      id: "futureai",
      title: "Future Skills & AI Advisor",
      emoji: "🤖",
      desc: "AI Career Advisor Tool",
      long:
        "Evaluates user skills, preferences, and learning style to generate a personalized 6-month roadmap.",
      thumbnail: "images/future.png",
      tech: ["Python", "Flask", "AI"],
      github:
        "https://github.com/pranav16-king/Future-Skills-AI-Pathways-Advisordiv",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }
      ],
      features: ["AI roadmap", "Skill scoring"]
    },

    {
      id: "agri",
      title: "Agri Connect",
      emoji: "🌾",
      desc: "Agriculture Buyer–Seller Platform",
      long:
        "A marketplace for farmers to sell products with responsive UI and interactive features.",
      thumbnail: "images/agri.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/pranav16-king/Project/tree/main/Agriculture",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }
      ],
      features: ["Listings", "Filters"]
    },

    {
      id: "medicine",
      title: "Medicine NLP System",
      emoji: "💊",
      desc: "NLP Medical Identifier",
      long:
        "Identifies medical products using NLP, fast text recognition, and simple GUI output.",
      thumbnail: "images/medicine.png",
      tech: ["Python", "NLP"],
      github:
        "https://github.com/pranav16-king/Project/tree/main/Hospital%20Design%203",
      team: [
        { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }
      ],
      features: ["Text identification", "Product detection"]
    },

    {
      id: "hospital",
      title: "Hospital Dashboard",
      emoji: "🏥",
      desc: "Medical Analytics Dashboard",
      long:
        "A professional hospital dashboard for displaying medical analytics: patients, appointments, beds, nurses, and live charts.",
      thumbnail: "images/hospital.jpg",
      tech: ["React", "Tailwind"],
      github:
        "https://github.com/pranav16-king/Project/tree/main/Hospital%20Design%203",
      team: [
           { name: "Pranav Khaire ", dp: "/achivment/member/pranav.webp", github: "https://github.com/pranav16-king" }

      ],
      features: ["Charts", "Stats", "UI dashboard"]
    }
  ];

  const container = document.getElementById("projectContainer");

  container.innerHTML = projects
    .map(
      (p) => `
      <div class="bg-white shadow-xl rounded-3xl p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">

        <div class="text-2xl font-bold flex items-center gap-2 mb-3">
          <span>${p.emoji}</span> ${p.title}
        </div>

        <p class="text-gray-700 mb-3 text-lg">${p.desc}</p>

        ${
          p.type === "video"
            ? `<video src="${p.thumbnail}" controls class="w-full h-52 rounded-2xl shadow object-cover"></video>`
            : `<img src="${p.thumbnail}" class="w-full h-52 rounded-2xl shadow object-cover" />`
        }

        <div class="flex flex-wrap gap-2 mt-3">
          ${p.tech
            .map(
              (t) =>
                `<span class="px-3 py-1 bg-teal-200 text-[#111b32] rounded-lg font-semibold text-sm">${t}</span>`
            )
            .join("")}
        </div>

        <div class="flex gap-3 mt-5">
          <a href="${p.github}" class="btn-github w-full text-center">GitHub</a>
          <button onclick="openDetails('${p.id}')" class="btn-details w-full">Details</button>
        </div>

      </div>
    `
    )
    .join("");

  function openDetails(id) {
    const p = projects.find((x) => x.id === id);

    const teamGrid = p.team
      .map(
        (t) => `
      <div class="flex flex-col items-center text-center gap-3 bg-gray-100 p-5 rounded-2xl shadow">
        <img src="${t.dp}" class="w-20 h-20 rounded-full object-cover shadow" />
        <p class="font-bold text-lg">${t.name}</p>
        <a href="${t.github}" class="btn-github text-sm px-3 py-1">GitHub ID</a>
      </div>
    `
      )
      .join("");

    const featuresList = p.features
      .map((f) => `<li class="list-disc ml-6 mb-1 text-lg">${f}</li>`)
      .join("");

    document.getElementById("modalContent").innerHTML = `
      <h2 class="text-4xl font-bold mb-3 flex items-center gap-3">${p.emoji} ${p.title}</h2>

      <p class="text-gray-700 leading-relaxed text-lg mb-7">${p.long}</p>

      <h3 class="text-2xl font-semibold mb-4">Team Members</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">${teamGrid}</div>

      <h3 class="text-2xl font-semibold mb-4">Key Features</h3>
      <ul class="mb-5">${featuresList}</ul>
    `;

    document.getElementById("projectModal").classList.remove("hidden");
    document.getElementById("projectModal").classList.add("flex");
  }

  /* CLOSE MODAL */
  function closeDetails() {
    document.getElementById("projectModal").classList.add("hidden");
    document.getElementById("projectModal").classList.remove("flex");
  }

  