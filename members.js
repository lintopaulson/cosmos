// ===== Committee members data (non-executive) =====
const otherMembers = [
  {
    name: "John Mathew",
    role: "Vice President",
    img: "Images/ARUN.jpg",
  },
  {
    name: "BIBIN GEORGE",
    role: "Joint Secretary",
    img: "Images/anita.jpg",
  },
  {
    name: "BIBIN THOMAS",
    role: "Committee Member",
    img: "Images/ARUN.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Committee Member",
    img: "Images/neha.jpg",
  },
  {
    name: "Vivek Menon",
    role: "Sports Coordinator",
    img: "Images/vivek.jpg",
  },
];

// ===== DOM elements =====
const searchInput = document.querySelector(".committee-input");
const searchResultsBox = document.querySelector(".search-results-box");

// ===== Default message =====
const defaultMessage = `
  <span>Use the search bar above to find other committee members. Results will be displayed here.</span>
`;

// ===== Set default view =====
if (searchResultsBox) {
  searchResultsBox.innerHTML = defaultMessage;
}

// ===== Search function =====
if (searchInput && searchResultsBox) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    // If input is empty — reset
    if (query === "") {
      searchResultsBox.innerHTML = defaultMessage;
      searchResultsBox.classList.remove("active");
      return;
    }

    // Filter members based on name or role
    const filtered = otherMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query)
    );

    // If results found
    if (filtered.length > 0) {
      searchResultsBox.classList.add("active");

      // Wrap cards inside `.b` to inherit same CSS as executive members
      searchResultsBox.innerHTML = `
        <section class="b">
          ${filtered
            .map(
              (member) => `
              <div class="card">
                <div class="circle">
                  <div class="imgbox">
                    <img src="${member.img}" alt="${member.name}">
                  </div>
                </div>
                <div class="content">
                  <h3>${member.name}</h3>
                  <div class="texticon">
                    <h4>${member.role}</h4>
                  </div>
                </div>
              </div>
            `
            )
            .join("")}
        </section>
      `;
    } else {
      // No results found
      searchResultsBox.classList.add("active");
      searchResultsBox.innerHTML = `<span>No members found for "${query}".</span>`;
    }
  });
}


// ===== about us  =====
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeElements.forEach(el => observer.observe(el));
});








document.addEventListener("DOMContentLoaded", () => {
  const progressFill = document.getElementById("progress-fill");
  const progressPercent = document.getElementById("progress-percent");
  const lineFill = document.getElementById("line-fill");
  const items = document.querySelectorAll(".timeline-item");

  function updateTimeline() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(),0,1);
    const endOfYear = new Date(now.getFullYear(),11,31,23,59,59);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;

    progressFill.style.width = `${yearProgress}%`;
    progressPercent.textContent = `${yearProgress.toFixed(1)}%`;

    let lastCompletedIndex = -1;

    items.forEach((item, i) => {
      const date = new Date(item.dataset.date);
      const dot = item.querySelector(".timeline-dot");
      if(date <= now){
        dot.classList.add("completed");
        lastCompletedIndex = i;
      } else {
        dot.classList.remove("completed");
      }
    });

    // Extend timeline line-fill to last completed
    if(lastCompletedIndex >= 0){
      const lastDot = items[lastCompletedIndex].querySelector(".timeline-dot");
      const timelineTop = document.querySelector(".timeline").getBoundingClientRect().top + window.scrollY;
      const dotTop = lastDot.getBoundingClientRect().top + window.scrollY;
      lineFill.style.height = `${dotTop - timelineTop + 10}px`; // extra 10px to align tick with card
    } else {
      lineFill.style.height = "0px";
    }
  }

  updateTimeline();
  setInterval(updateTimeline, 60000);
});



// Gallery 
const gallery = document.querySelector('.gallery');
const track = document.querySelector('.gallery-track');
const cards = document.querySelectorAll('.card');
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start,end,t) => start * (1-t) + end * t;

function updateScroll() {
  startY = lerp(startY, endY, easing);
  gallery.style.height = `${track.scrollHeight}px`; // use scrollHeight instead of clientHeight
  track.style.transform = `translateY(-${startY}px)`; // only vertical translate
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (Math.abs(startY - window.scrollY) < 0.1) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.card-image-wrapper');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const {top} = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`; // vertical only
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load', updateScroll, false);
window.addEventListener('scroll', init, false);
window.addEventListener('resize', updateScroll, false);



//accordion in amneties page

document.querySelectorAll('.accordion-title').forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector('ion-icon');

    // Close others
    document.querySelectorAll('.accordion-title').forEach(other => {
      if (other !== btn) {
        other.classList.remove('active');
        other.nextElementSibling.style.display = 'none';
      }
    });

    // Toggle current
    this.classList.toggle('active');
    content.style.display = this.classList.contains('active') ? 'block' : 'none';
  });
});


//contact form

 $(function () {
    const button = $("#animatedButton");
    const form = $(".contact-form");

    // Handle submit
    form.on("submit", async function (e) {
      e.preventDefault();
      button.addClass("onclic");

      const data = new FormData(this);
      const response = await fetch(form.attr("action"), {
        method: form.attr("method"),
        body: data,
      });

      setTimeout(() => {
        button.removeClass("onclic");
        if (response.ok) {
          button.addClass("validate");
          form[0].reset(); // ✅ Clear all fields after sending
        } else {
          alert("❌ Failed to send message. Please try again.");
        }

        // reset button style after short delay
        setTimeout(() => {
          button.removeClass("validate");
        }, 1500);
      }, 2000);
    });
  });