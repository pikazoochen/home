// 核心：所有翻譯內容都集中在這裡
const translations = {
  'en': {
    "nav.language": "TW",
    "nav.home": "HOME",
    "nav.about": "ABOUT",
    "nav.contact": "CONTACT",
    "nav.portfolio": "PORTFOLIO",
    "nav.blog": "BLOG",
    "nav.shop": "SHOP",
    "carousel.text01": "HELLO & WELCOME",
    "carousel.text02": "ILLUSTRATION & COMMISSIONS",
    "carousel.text03": "FINE ARTS & EXHIBITIONS",
    "portfolio.work1": "Make Believe",
    "portfolio.work2": "Pippi's Airship",
    "portfolio.work3": "Happy Taiwan Leopard Cat",
    "portfolio.work4": "Baby Red Dove",
    "portfolio.work5": "The Examination System",
    "portfolio.work6": "Ship of Fools",
    "about.text_top": `<p>
          <strong>About Pikazoo Chen（陳冠瑜）</strong><br>
          Born in Taiwan, currently living and working in Taipei.<br><br>

          <strong>Education</strong><br>
          Tokyo University of the Arts, Mural Painting Lab, Research Student ( Non-Degree Research Student ), 2015 - 2016<br>
          National Taiwan Normal University, Bachelor of Fine Arts (BFA)
        </p>`,
    "about.text_bottom": `<p>
        <strong>Solo Exhibitions</strong><br>
        Taipei, Taiwan, A Sea in the Sky of Taipei – Independent Solo Exhibition, 2011<br>
        Taipei, Taiwan, GOD-D: Chen Kuan Yu Solo Exhibition – NTNU Library, 2009<br><br>

        <strong>Group Exhibitions</strong><br>
        Bologna, Italy, EU MAPPING Project "Children Spectators" Final Exhibition (Bologna Children's Book Fair), 2023<br>
        Tokyo, Japan, Tokyo Geidai Research Student Joint Exhibition, 2016<br><br>

        <strong>Awards and Honors</strong><br>
        Bologna Children's Book Fair, Italy, Selected Illustrator, EU MAPPING Project "Children Spectators" International Illustration Contest, 2020<br><br>

        <strong>Publications</strong><br>
        Artwork: "Make Believe." In: Roberto Frabetti (Ed.), <a href="https://www.pendragon.it/catalogo/produzione-varia/varia/il-bambino-spettatore-children-spectator-detail.html"
          target="_blank" style="color:#D65A31;">Children Spectators: Il Bambino Spettatore </a>(ISBN: 978-8833645599). Bologna, Italy: Edizioni Pendragon, 2023. Page: 75; Note: Artwork selected for the book cover image.<br><br>
      </p>`,
    "contact.text": `<strong>Inquiries</strong><br>
All requests regarding <strong>illustration commissions</strong>, <strong>commercial collaborations</strong>, <strong>exhibition opportunities</strong>, and <strong>licensing</strong> are welcome.<br>
Please direct all project inquiries to Pikazoo Chen via email at: <a href="mailto:pikazoo.truckski@gmail.com">pikazoo.truckski@gmail.com</a>`,
    "contact.shop_info": `I also run <a href="https://shop.pikazoochen.com?utm_source=home&utm_medium=referral&utm_campaign=home_shop_info" target="_blank"><strong>Pikazoo Chen Shop</strong></a>, an online store featuring original hand-painted artworks, art prints, and lifestyle products based on my illustrations.<br>
  The shop uses <strong>print-on-demand production</strong>, creating items only after orders are placed to reduce waste and ensure quality.<br>
  For shop inquiries and customer service: <a href="mailto:service@pikazoochen.com">service@pikazoochen.com</a>`
  },
  'tw': {
    "nav.language": "EN",
    "nav.home": "首頁",
    "nav.about": "關於",
    "nav.contact": "聯繫",
    "nav.portfolio": "作品集",
    "nav.blog": "部落格",
    "nav.shop": "商店",
    "carousel.text01": "HELLO & WELCOME",
    "carousel.text02": "插畫與委託合作",
    "carousel.text03": "純藝術與展覽",
    "portfolio.work1": "家家酒",
    "portfolio.work2": "皮皮的飛船",
    "portfolio.work3": "石虎樂園",
    "portfolio.work4": "紅鳩寶寶",
    "portfolio.work5": "升學主義",
    "portfolio.work6": "愚人船",
    "about.text_top": `<p>
          <strong>關於 Pikazoo Chen（陳冠瑜）</strong><br>
          台灣出生，目前生活創作於台北。<br><br>

          <strong>教育 (Education)</strong><br>
          東京藝術⼤學壁畫研究室，研究生 ( Non-Degree Research Student )，2015 - 2016<br>
          國立台灣師範⼤學，美術學⼠ ( BFA )
        </p>`,
    "about.text_bottom": `<p>
        <strong>個展 (Solo Exhibitions)</strong><br>
        台北，台灣，台北的天空有⼀片海 無所屬創作個展， 2011<br>
        台北，台灣，果-D 陳冠瑜個⼈作品展 師⼤圖書館， 2009<br><br>

        <strong>聯展 (Group Exhibitions)</strong><br>
        波隆那，義⼤利，波隆那書展 歐盟《繪製早期表演藝術美學地圖》計畫「兒童觀眾」2023 Mapping 聯展，2023<br>
        東京，日本，東京藝⼤ 研究⽣聯展，2016<br><br>

        <strong>獲獎與榮譽 (Awards and Honors)</strong><br>
        波隆那，義⼤利，波隆那書展 歐盟《繪製早期表演藝術美學地圖》計畫「兒童觀眾」國際插畫比賽 入選，2020<br><br>

        <strong>出版紀錄 (Publications)</strong><br>
        作品：《Make Believe》。載於： Roberto Frabetti 主編，
        <a href="https://www.pendragon.it/catalogo/produzione-varia/varia/il-bambino-spettatore-children-spectator-detail.html"
          target="_blank" style="color:#D65A31;">《Children Spectators: Il Bambino Spettatore》
        </a>
        ISBN：978-8833645599，義大利波隆那：Edizioni Pendragon，2023。頁碼： 75；備註：作品被選用為書籍封面圖像。<br><br>
      </p>`,
    "contact.text": `歡迎所有關於<strong>插畫委託</strong>、<strong>商業合作</strong>、<strong>展覽邀約</strong>，以及<strong>版權使用</strong>的需求與洽談。<br>
          任何合作諮詢，請直接透過以下電子郵件聯繫 Pikazoo Chen：<a href="mailto:pikazoo.truckski@gmail.com">pikazoo.truckski@gmail.com</a>`,
    "contact.shop_info": `我也經營 <a href="https://shop.pikazoochen.com?utm_source=home&utm_medium=referral&utm_campaign=home_shop_info" target="_blank"><strong>Pikazoo Chen Shop</strong></a> 線上商店，
        販售少量手繪原作，以及以我的作品為主題的藝術印刷品和生活用品。<br>
        商店採用<strong>按需印製 (Print-on-Demand)</strong> 方式生產，
        只在收到訂單後才開始製作，減少浪費並確保品質。<br>
        商店詢問與客服，請聯絡：<a href="mailto:service@pikazoochen.com">service@pikazoochen.com</a>`
  }
};

// 核心切換函數
function switchLanguage(langCode) {
  const currentLangPack = translations[langCode];

  // 1. 遍歷所有帶有 data-i18n 屬性的元素
  $('[data-i18n]').each(function () {
    const key = $(this).data('i18n');
    const translatedText = currentLangPack[key];

    // 2. 替換文字內容
    if (translatedText) {
      $(this).html(translatedText);
    }
  });

  // 3. 更新按鈕的狀態標記 (非常重要！)
  $('#nav_language').data('lang', langCode);
}

// 點擊事件處理
$("#nav_language").click(function (e) {
  e.preventDefault();

  // 取得當前語言代碼，並判斷下一個要切換的語言
  const currentLang = $(this).data('lang');
  const newLang = (currentLang === 'en') ? 'tw' : 'en';

  // 執行切換
  switchLanguage(newLang);
});

// 網頁載入完成時，確保先顯示預設語言 (假設 'en')
$(document).ready(function () {
  // 這一行確保即使沒點擊，所有文字也是正確的預設語言
  switchLanguage('en');
});