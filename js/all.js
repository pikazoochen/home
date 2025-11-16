document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // 點選選單後收合
  document.querySelectorAll("#navbar li").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  $('.nav_home,a[href="#"]').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    $('html , body').animate({
      scrollTop: $('body').offset().top,
    }, 900);
  });

  $('.nav_about,a[href="#about"]').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    $('#about').show();
    $('html , body').animate({
      scrollTop: $('#about').offset().top - 104,
    }, 900);
  });

  $('.nav_blog').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    window.open("https://pikazoochen.blogspot.com/");
  });

  $('.nav_shop').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    window.open("https://8uifr1-d4.myshopify.com/");
  });

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



