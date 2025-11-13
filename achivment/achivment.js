
function achievementSlider() {
  return {
    current: 0,
    achievements: [
      {
        title: "🏅 Cogni-Sphere 2025 (Project Compition Winner)",
        description: "Certificate of Achievement awarded to <strong>Pranav Khaire</strong> for securing <strong>First Rank</strong>.",
        details: [
          "<strong>Event:</strong> Cogni-Sphere 2025 – 2-Day Tech & Non-Tech Event",
          "<strong>Category:</strong> Project Competition",
          "<strong>Organizer:</strong> IETE Student Forum, ECE Dept, MIT Chhatrapati Sambhajinagar",
          "<strong>Dates:</strong> 13-14 Oct 2025",
          "<strong>Location:</strong> MIT Chhatrapati Sambhajinagar, Maharashtra, India"
        ],
        images: ["img/project1 (1).jpg", "img/project1 (2).jpg", "img/project1 (3).jpg", "img/project1 (4).jpg"],
        team: [
          { name: "Pranav Khaire", role: "Project Lead(Backend,frontend Devloper)", photo: "member/pranav.webp" },
          { name: "Varad Deshpande", role: "Presentation", photo: "member/male.avif" },
          { name: "Satydeep kharat", role: "UI/UX Designer", photo: "member/male.avif" },
          { name: "Aniket", role: "Backend Developer", photo: "member/male.avif" }

        ]
      },
      {
        title: "Hacksphere Hackathon 🏅 (Participation)",
        description: "Certificate of Participation presented to <strong>Pranav Samadhan Khaire</strong> for participating in Hacksphere at Cogni-Sphere 2025.",
        details: [
          "<strong>Event:</strong> Cogni-Sphere 2025 – A 2-Day Technical and Non-Technical Event",
          "<strong>Segment:</strong> Hacksphere",
          "<strong>Organizer:</strong> IETE Student Forum, Department of ECE, G.S. Mandal's MIT, Chhatrapati Sambhajinagar (Autonomous)",
          "<strong>Dates:</strong> 13th & 14th October 2025",
          "<strong>Supported by:</strong> MIT CSN, TECH SURYA IT SOLUTION"
        ],
        signatories: [
          "🖊️ Dr. Priti Patil – IETE Faculty Coordinator",
          "🖊️ Dr. S. J. Nandedkar – Head of ECE Department",
          "🖊️ Dr. N. G. Patil – Director"
        ],
        images: ["img/hacksphere1.jpg", "img/hacksphere2.jpg", "img/hacksphere3.jpg"],
        team: [
          { name: "Pranav Khaire", role: "Team Leader", photo: "member/pranav.webp" },
          { name: "Varad Dehpande", role: "Team Member", photo: "member/male.avif" },
          { name: "Om Bute", role: "Team Member", photo: "member/male.avif" },
          { name: "Piyush Jayebhaye", role: "Team Member", photo: "member/piyush.jpg" }
        ]
      },
      {
        title: "Smart India Hackathon 2025 – Internal Hackathon 🏅 (Participation)",
        description: "Participate for <strong>Pranav Khaire</strong> and team members in the Internal Hackathon conducted in MIT, Chhatrapati Sambhajinagar.",
        details: [
          "<strong>Event:</strong> Smart India Hackathon (SIH) 2025 – Internal Hackathon",
          "<strong>Date:</strong> 24th September 2025",
          "<strong>Organizer:</strong> Maharashtra Institute of Technology, Chhatrapati Sambhajinagar (An Autonomous Institute)",
          "<strong>Coordinators:</strong> Umesh Shirale, Dr. Dipa Dharmadhikari",
          "<strong>SPOC:</strong> Dr. Prachi Deshpande",
          "<strong>Supported by:</strong> MIT CSN, Ministry of Education, AICTE, MoE's Innovation Cell (Government of India)"
        ],
        signatories: [
          "Dr. Nilesh Patil"
        ],
        images: ["img/sih (2).jpg", "img/sih (1).jpg","img/sih (3).jpg","img/sih (4).jpg"],
        team: [
          { name: "Pranav Khaire", role: "Group Leader (Backend,Frontend Devloper)", photo: "member/pranav.webp" },
          { name: "Piyush Jayebhaye", role: "Team Member", photo: "member/piyush.jpg" },
          { name: "Jaya Kharate", role: "Team Member", photo: "member/female.avif" },
          { name: "Sakshi Alane", role: "Team Member", photo: "member/female.avif" },
          { name: "Sakshi Bikkad", role: "Team Member", photo: "member/female.avif" },
          { name: "Satydeep Kharat", role: "Team Member", photo: "member/male.avif" }
        ]
      }


    ],
    nextAchievement() { this.current = (this.current + 1) % this.achievements.length; },
    prevAchievement() { this.current = (this.current - 1 + this.achievements.length) % this.achievements.length; },
    startAutoSlide() { setInterval(() => { this.nextAchievement(); }, 25000); }
  }
}

document.addEventListener('alpine:init', () => {
  Alpine.data('imageSlider', (images) => ({
    slides: images,
    currentImage: 0,
    init() { setInterval(() => this.nextImage(), 5000); },
    prevImage() { this.currentImage = (this.currentImage === 0 ? this.slides.length - 1 : this.currentImage - 1); },
    nextImage() { this.currentImage = (this.currentImage + 1) % this.slides.length; }
  }));
});
