const hamburgerIcon = document.querySelector('.hamburger ion-icon');
const closeIcon = document.querySelector('.close-menu ion-icon');
const navbar = document.querySelector('.navbar');

// Open menu
hamburgerIcon.addEventListener('click', () => {
  navbar.classList.add('open');
});

// Close menu
closeIcon.addEventListener('click', () => {
  navbar.classList.remove('open');
});




const carousel = document.querySelector('.events-carousel');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});



  // Wait for window load
  // Starfield Preloader
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
let starCount = 200; // number of particles
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Create stars
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 2 + 1, // size of star
    speed: Math.random() * 0.5 + 0.2
  });
}

// Animation
function animate() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < starCount; i++) {
    let s = stars[i];
    s.y -= s.speed;
    if (s.y < 0) s.y = h;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }

  requestAnimationFrame(animate);
}
animate();

// Remove preloader after 4 seconds
setTimeout(() => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  preloader.style.transition = "opacity 0.5s ease-out";
  setTimeout(() => preloader.style.display = "none", 500);
}, 3000);
