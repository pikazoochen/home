// Scroll-based 導覽高亮 (scroll-spy)
document.addEventListener("DOMContentLoaded", function () {
  // 1. 定義目標區塊，順序由上到下
  const sections = [
    { id: 'portfolio', navId: 'nav_portfolio' },
    { id: 'about', navId: 'nav_about' },
    { id: 'contact', navId: 'nav_contact' }
  ];

  // 獲取所有導航元素 (<a> 和 <li>)
  const allNavItems = document.querySelectorAll('#nav-links a, #nav-links li');
  const navHomeLi = document.getElementById('nav_home');
  const navHomeLink = navHomeLi?.querySelector('a');

  // 觸發線：必須 ≥ 點擊導覽時的最大捲動偏移量 (134px)
  // Portfolio 捲到 top-84，About/Contact 捲到 top-134
  // 設 140 (= 134 + 6 緩衝) 確保點擊後目標區塊一定通過觸發線
  const TRIGGER_LINE = 140;

  // requestAnimationFrame 節流旗標
  let ticking = false;

  // 2. 核心函數：根據捲動位置決定高亮哪個區塊
  function updateActiveNav() {
    ticking = false;
    const scrollY = window.scrollY;

    // 找出「頂部已通過觸發線」的最後一個區塊
    // 跳過 display:none 的區塊（例如初始隱藏的 About）
    let activeSection = null;

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      if (window.getComputedStyle(el).display === 'none') continue;

      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;

      if (sectionTop - TRIGGER_LINE <= scrollY) {
        activeSection = section;
      }
    }

    // 3. 清除所有高亮，只保留當前區塊
    allNavItems.forEach(item => item.classList.remove('bg_gray'));

    if (activeSection) {
      const navLi = document.getElementById(activeSection.navId);
      const navA = navLi?.querySelector('a');
      navA?.classList.add('bg_gray');
      navLi?.classList.add('bg_gray');
    } else {
      // 沒有區塊通過觸發線（例如在輪播區）→ 高亮 HOME
      navHomeLink?.classList.add('bg_gray');
      navHomeLi?.classList.add('bg_gray');
    }
  }

  // 4. 用 requestAnimationFrame 節流，避免 scroll 事件過度觸發
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateActiveNav);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // 頁面載入時先執行一次
  updateActiveNav();

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
    // About 顯示後版面變動，立即更新高亮狀態
    updateActiveNav();
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
    window.open("https://pikazoochen.com/blog", "_blank", "noopener,noreferrer");
  });

  $('#nav_shop').click(function (e) {
    e.preventDefault();
    navLinks.classList.remove("show");
    window.open("https://shop.pikazoochen.com?utm_source=home&utm_medium=referral&utm_campaign=home_nav", "_blank", "noopener,noreferrer");
  });
  
});