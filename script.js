const slides = [
  { image: 'Images/slide1.jpeg', caption: 'EXCELLENT AMENITIES, BEAUTIFUL SURROUNDINGS' },
  { image: 'Images/slide2.jpeg', caption: 'A PERFECT VENUE FOR EVENTS' },
  { image: 'Images/slide3.jpeg', caption: 'RELAX BY THE POOL OR LAWN' }
];

let current = 0;
const img1 = document.getElementById('hero-img-1');
const img2 = document.getElementById('hero-img-2');
const heroCaption = document.getElementById('hero-caption');
let showingImg1 = true;

function showSlide(idx) {
  current = (idx + slides.length) % slides.length;
  const nextSlide = slides[current];

  // Fade caption
  heroCaption.style.opacity = 0;

  setTimeout(() => {
    heroCaption.textContent = nextSlide.caption;
    heroCaption.style.opacity = 1;
  }, 300);

  if (showingImg1) {
    img2.src = nextSlide.image;
    img2.classList.add('active');
    img1.classList.remove('active');
  } else {
    img1.src = nextSlide.image;
    img1.classList.add('active');
    img2.classList.remove('active');
  }
  showingImg1 = !showingImg1;
}

function prevSlide() { showSlide(current - 1); }
function nextSlide() { showSlide(current + 1); }

// Autoplay
setInterval(() => nextSlide(), 5500);

showSlide(0);


// Select ALL dropdown containers
const dropdowns = document.querySelectorAll('.dropdown-container');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown-menu');
  const items = menu.querySelectorAll('li a');

  dropdown.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('show');
      }, i * 120); // stagger timing
    });
  });

  dropdown.addEventListener('mouseleave', () => {
    items.forEach(item => item.classList.remove('show'));
    menu.style.display = 'none';
  });
});


//hamburger menu toggle

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Toggle submenu
document.querySelectorAll(".mobile-menu .has-submenu > a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.toggle("active");
  });
});

