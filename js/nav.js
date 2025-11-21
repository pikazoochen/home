// Intersection Observer 實現導航高亮
document.addEventListener("DOMContentLoaded", function () {
  // 1. 定義要觀察的目標區塊 (Target Sections)
  const sections = [
    { id: 'portfolio', navId: 'nav_portfolio' },
    { id: 'about', navId: 'nav_about' },
    { id: 'contact', navId: 'nav_contact' }
  ];

  // 獲取所有目標區塊的 DOM 元素
  const observerTargets = sections
    .map(section => document.getElementById(section.id))
    .filter(el => el !== null);

  // 獲取所有導航元素 (<a> 和 <li>)
  const allNavItems = document.querySelectorAll('#nav-links a, #nav-links li');

  // 2. 定義 Intersection Observer 的選項
  const options = {
    root: null,
    rootMargin: '0px 0px -50% 0px',
    threshold: 0
  };

  // 3. 處理 Intersection Observer 回調函數
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const currentSectionId = entry.target.id;
      const correspondingNavId = sections.find(s => s.id === currentSectionId)?.navId;

      if (correspondingNavId) {
        const correspondingNavLinkA = document.getElementById(correspondingNavId)?.querySelector('a');
        const correspondingNavLinkLi = document.getElementById(correspondingNavId);

        if (entry.isIntersecting) {
          // 進入目標區塊：

          // a. 清除所有導航元素的高亮
          allNavItems.forEach(item => item.classList.remove('bg_gray'));

          // b. 為當前連結 (<a>) 和父級列表項 (<li>) 添加高亮
          if (correspondingNavLinkA) {
            correspondingNavLinkA.classList.add('bg_gray');
          }
          if (correspondingNavLinkLi) {
            correspondingNavLinkLi.classList.add('bg_gray');
          }
        }
      }
    });
  };

  // 4. 建立 Intersection Observer 實例
  const observer = new IntersectionObserver(observerCallback, options);

  // 5. 開始觀察所有目標區塊
  observerTargets.forEach(target => {
    observer.observe(target);
  });

  // 【針對 HOME 連結的特別處理】
  const navHomeLi = document.getElementById('nav_home');
  const navHomeLink = navHomeLi?.querySelector('a');

  if (navHomeLink && navHomeLi) {
    const toggleHomeHighlight = () => {
      // 檢查捲動位置是否在頂部 (例如，小於 100px)
      if (window.scrollY < 100) {
        // 移除所有高亮
        allNavItems.forEach(item => item.classList.remove('bg_gray'));

        // 高亮 HOME 連結 (<a> 和 <li>)
        navHomeLink.classList.add('bg_gray');
        navHomeLi.classList.add('bg_gray');
      }
    };

    window.addEventListener('scroll', toggleHomeHighlight);

    // 頁面載入時先執行一次
    toggleHomeHighlight();
  }

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

  $('#nav_home,#logo').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    $('html , body').animate({
      scrollTop: $('html').offset().top,
    }, 900);
  });

  $('#nav_about').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    $('#about').show();
    $('html , body').animate({
      scrollTop: $('#about').offset().top - 134,
    }, 900);
  });

  $('#nav_portfolio').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    // portfolio.scrollIntoView({ behavior: "smooth", block: "start"});
    $('html , body').animate({
      scrollTop: $('#portfolio').offset().top - 84,
    }, 900);
  });

$('#nav_contact').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    $('html , body').animate({
      scrollTop: $('#contact').offset().top - 134,
    }, 900);
  });

  $('#nav_blog').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    window.open("https://pikazoochen.com/blog");
  });

  $('#nav_shop').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    window.open("https://shop.pikazoochen.com");
  });
  
});