 const testimonials = [
      {
        name: "Adam Young",
        stars: 5,
        text: " Great experience working with Mango I.T. Very knowledgeable and professional, really made this project a stress-free experience. They were very responsive and were able to adjust to changes in the project quickly as we went. Looking forward to working with them again!"
      },
      {
        name: "Sophie Lee",
        stars: 4,
        text: "The team was very cooperative and helpful. They delivered our website on time and with excellent quality. Would definitely recommend them to others!"
      },
      {
        name: "Michael Scott",
        stars: 5,
        text: "Truly amazing service! The attention to detail and professionalism stood out. We will be returning for future projects without a doubt."
      }
    ];

    let currentIndex = 0;

    const container = document.getElementById("testimonial-container");

    function renderTestimonial(index) {
      const t = testimonials[index];
      const stars = "★".repeat(t.stars) + "☆".repeat(5 - t.stars);

      container.innerHTML = `
        <div>
          <div class="text-yellow-400 text-xl mb-4">${stars}</div>
          <h3 class="text-xl font-semibold mb-2">${t.name}</h3>
          <p class="text-white  text-[20px] leading-relaxed max-w-3xl mx-auto">“${t.text}”</p>
        </div>
      `;
    }

    // Initial render
    renderTestimonial(currentIndex);

    // Button listeners
    document.getElementById("prevBtn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(currentIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      renderTestimonial(currentIndex);
    });

    // our tech start

     const slider = document.getElementById('slider');

  let scrollAmount = 0;
  let maxScroll = slider.scrollWidth - slider.clientWidth;
  let speed = 1;
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      scrollAmount += speed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    requestAnimationFrame(autoScroll);
  }

  window.onload = () => {
    maxScroll = slider.scrollWidth - slider.clientWidth;
    autoScroll();
  };

  window.onresize = () => {
    maxScroll = slider.scrollWidth - slider.clientWidth;
  };

  slider.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  slider.addEventListener('mouseleave', () => {
    isPaused = false;
  });

    // our tech end

  const sliderTwo = document.getElementById('sliderTwo');
  let scrollAmountTwo = 0;


function getBoxWidthWithGap() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1280) return 525 + 40; // xl
  if (screenWidth >= 1024) return 420 + 40; // lg
  if (screenWidth >= 768)  return 400 + 40; // md
  if (screenWidth >= 640)  return 350 + 40; // sm
  return 300 + 40; // mobile
}

// function autoScrollSliderTwo() {
//   const scrollStep = getBoxWidthWithGap();
//   scrollAmountTwo += scrollStep;

//   if (scrollAmountTwo >= sliderTwo.scrollWidth - sliderTwo.clientWidth) {
//     scrollAmountTwo = 0;
//   }

//   sliderTwo.scrollTo({
//     left: scrollAmountTwo,
//     behavior: 'smooth',
//   });
// }

// setInterval(autoScrollSliderTwo, 3000);

 function scrollSlider(direction) {
    const slider = document.getElementById('sliderTwo');
    const scrollAmount = 400; // px to scroll on button click

    if (direction === 'left') {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  } 
   function flipCard(button) {
    const card = button.closest('.group').querySelector('.flip-card');
    const isFlipped = card.classList.toggle('rotate-y-180');
  }

  function showMoreCards(button) {
    const extraCards = document.getElementById("extra-cards");
    if (extraCards) {
      extraCards.classList.remove("hidden");
    }
    button.style.display = "none"; // Optional: hide the button that was clicked
  }

  function flipCard(btn) {
    const card = btn.closest('.flip-card');
    card.classList.toggle('rotate-y-180');
  }

   let groupIndex = 0;
    let isExpanded = false;

    function toggleCardGroups() {
        const groups = document.querySelectorAll('.card-group');
        const button = document.getElementById('toggle-btn');

        if (!isExpanded) {
            // Show one group at a time
            if (groupIndex < groups.length) {
                groups[groupIndex].classList.remove('hidden');
                groupIndex++;
                if (groupIndex === groups.length) {
                    // All shown, change to Read Less
                    button.textContent = "Read Less";
                    isExpanded = true;
                }
            }
        } else {
            // Hide all groups
            groups.forEach(group => group.classList.add('hidden'));
            groupIndex = 0;
            isExpanded = false;
            button.textContent = "Read More";
        }
    }

     let step = 0;

  function toggleCards() {
    const moreCards1 = document.getElementById("moreCards1");
    const moreCards2 = document.getElementById("moreCards2");
    const btn = document.getElementById("toggleBtn");

    if (step === 0) {
      moreCards1.classList.remove("hidden");
      step = 1;
    } else if (step === 1) {
      moreCards2.classList.remove("hidden");
      btn.innerText = "Read Less";
      step = 2;
    } else {
      moreCards1.classList.add("hidden");
      moreCards2.classList.add("hidden");
      btn.innerText = "Read More";
      step = 0;
    }
  }


  // RCM
 // Select all Read more buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling; // hidden span
        content.classList.toggle('hidden');
        button.textContent = content.classList.contains('hidden') ? 'Read more' : 'Read less';
    });
});


  // hero section 
 const slides = document.querySelectorAll(".hero-slide");
  let currenti = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.zIndex = i === index ? "10" : "0";
    });
  }

  function nextSlide() {
    currenti = (currenti + 1) % slides.length;
    showSlide(currenti);
  }

  function prevSlide() {
    currenti = (currenti - 1 + slides.length) % slides.length;
    showSlide(currenti);
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 6000); // 6 sec
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  showSlide(currenti);
  startAutoSlide();


  // digital marketing
   function openModal(title, desc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("serviceModal").classList.remove("hidden");
    document.getElementById("serviceModal").classList.add("flex");
  }
  function closeModal() {
    document.getElementById("serviceModal").classList.add("hidden");
    document.getElementById("serviceModal").classList.remove("flex");
  }

  // about us start 
   function showMore() {
    document.getElementById("moreContent").classList.remove("hidden");
    document.getElementById("readMoreBtn").classList.add("hidden");
  }

  function hideMore() {
    document.getElementById("moreContent").classList.add("hidden");
    document.getElementById("readMoreBtn").classList.remove("hidden");
  }
  // about us end

  // our tech
function toggleCardContent(button) {
  const card = button.closest('.card');
  const extraInfo = card.querySelector('.extra-info');
  const readMoreBtn = card.querySelector('.read-more-btn');
  const desc = card.querySelector('.desc');

  if (extraInfo.classList.contains('hidden')) {
    // Show extra info, hide description and Read more button
    extraInfo.classList.remove('hidden');
    desc.classList.remove('hidden');
    readMoreBtn.classList.add('hidden');
  } else {
    // Hide extra info, show description and Read more button
    extraInfo.classList.add('hidden');
    desc.classList.remove('hidden');
    readMoreBtn.classList.remove('hidden');
  }
}




