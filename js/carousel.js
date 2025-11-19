document.addEventListener("DOMContentLoaded", () => {
  //Carousel
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  let index = 0;
  let timer;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === n) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    index = n;
  }

  function nextSlide() {
    showSlide((index + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((index - 1 + slides.length) % slides.length);
  }

  function startAutoPlay() {
    timer = setInterval(nextSlide, 8000);
  }

  function stopAutoPlay() {
    clearInterval(timer);
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // 初始化
  showSlide(index);
  startAutoPlay();
});



