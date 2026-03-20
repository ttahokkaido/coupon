const coupons = [
  { id: 1,  name: '永旺超市',      nameEN: 'AEON',              category: 'supermarket', file: 'aeon.jpg',
    rules: [
      '請於收銀台結算時出示此優惠券。',
      '掃描優惠券上的條碼，即可打 95 折。',
      '本優惠券僅限來訪日本的外國遊客使用。',
      '本券在日本 AEON/AEON STYLE 店鋪可以使用 (北海道 / 東北 / 九州 / 沖繩地區除外)。',
      '不可與其他優惠同時使用 (不能列印及截圖使用)。',
      '不適用：書包、啤酒、氣泡酒、低濃度酒精飲料、書籍、雜誌、遊戲機、香菸、郵票、商品券、化妝品等、餐廳。'
    ] },
  { id: 2,  name: '必酷相機',      nameEN: 'Bic Camera',        category: 'electronics', file: 'bic_camera.jpg',
    rules: [
      '部分商品消費稅為 8 %。本優惠券僅限於免稅結帳時使用。',
      '蘋果商品、進口品牌手錶、Grand Seiko 系列商品、各遊戲主機及官方配件、遊戲軟體不適用。',
      'PlayStation VR、Meta Quest、Panasonic、DJI等部分商品不適用。',
      'FUJIFILM 部分商品、特價商品、Outlet 商品、二手商品等無法享受折扣。',
      '酒類商品（威士忌、獺祭、八海山除外）可享免稅 + 3% OFF 折扣 (只能於酒類專櫃結帳)。',
      '本優惠券不能與其他優惠活動、折扣券同時使用。持有日本護照辦理一時歸國免稅也可使用。'
    ] },
  { id: 3,  name: '可可卡精品藥妝', nameEN: 'Cocokara Fine',     category: 'pharmacy',    file: 'cocokara_fine.jpg',
    rules: [
      '1萬日圓～未滿3萬享 3% OFF。3萬日圓～未滿5萬享 5% OFF。5萬日圓以上享 7% OFF。',
      '結帳前出示 QR 碼即可享受折扣，此優惠券不能與其他折扣或活動同時使用。',
      '高級化妝品（提供皮膚諮詢服務）、香菸、雜誌、酒類、指定垃圾袋、尿布、嬰兒食品等不在範圍內。',
      '截圖、列印等方式均不可使用。僅限日本本地實體店鋪使用。',
      '根據法律規定只有藥劑師在場的情況下，才可購買第一類醫藥品。'
    ] },
  { id: 4,  name: '宇宙藥妝',      nameEN: 'Drugstore COSMOS',  category: 'pharmacy',    file: 'drugstore_cosmos.png',
    rules: [
      '10,000日圓～29,999日圓享 5% OFF。30,000日圓～49,999日圓享 7% OFF。50,000日圓以上享 9% OFF。',
      '此優惠券每天只能使用一次，不能與其他優惠券同時使用。',
      '請務必在收銀台付款前出示。如果您無法出示，您將無法使用折扣。',
      '有些香菸、酒精飲料、預付卡和其他一些產品不符合資格。',
      '如果沒有藥劑師在場，一級藥品和需要指導的藥品就不能銷售。',
      '付款後，無法退貨或換貨。只能在免稅購買時使用。'
    ] },
  { id: 5,  name: '宜電家電',      nameEN: 'Edion',             category: 'electronics', file: 'edion.jpg',
    rules: [
      '免稅10% + 最高7% OFF 或 5% OFF。請在結帳前向工作人員出示優惠券。',
      '7% OFF 對象：家電產品、手錶、相機、不銹鋼真空杯等。',
      '5% OFF 對象：食品、藥品、化妝品等。',
      '持護照的遊客，僅限非居住於日本的人士為免稅適用對象。',
      '消耗品除外的一般商品，購買金額達 5,000日圓以上可享免稅。',
      'DM掲載品、日替品、台數限定品、清倉品、手機、Surface、Apple、PC等部分商品不在折扣列。'
    ] },
  { id: 6,  name: '樂天百貨',      nameEN: 'LOTTE',             category: 'department',  file: 'lotte.jpg',
    rules: [
      '購物滿10,000日圓折1,000日圓。滿20,000日圓折2,000日圓。',
      '本優惠券僅限於樂天免稅銀座店（Lotte Duty Free Ginza）使用。',
      '每次出境限用一次此優惠券。',
      '本優惠券不可與其他優惠券或禮品券合併使用。',
      '本優惠券不可用於購買折扣商品。',
      '本優惠券不可用於部分免稅商品及特定品牌商品。'
    ] },
  { id: 7,  name: '崇光西武百貨',  nameEN: 'SOGO SEIBU',        category: 'department',  file: 'sogo_seibu.jpg',
    rules: [
      '凡於日本西武・SOGO百貨指定店鋪消費滿1,000日圓(不含稅)及以上，即可享 95 折優惠。',
      '結帳前請將此優惠券 QR 碼畫面與本人護照出示給店員。',
      '不適用折扣對象：商品券、禮券、香菸、郵票印花類、金塊銀塊、食品、降價打折品、專賣店、餐廳及咖啡廳。',
      'Louis Vuitton, Hermes, Celine, Chanel, Rolex等指定品牌不適用折扣。',
      '購物金額(不含消費稅)的不足100日圓的部分，不參與折扣計算。',
      '恕無法與本公司其他折扣、點數服務並用。95折優惠購買之商品恕無法更換退貨。'
    ] },
  { id: 8,  name: '三德藥妝',      nameEN: 'SUNDRUG',           category: 'pharmacy',    file: 'sundrug.png',
    rules: [
      '免稅10% + 3% OFF (消費1萬日圓以上)',
      '免稅10% + 5% OFF (消費3萬日圓以上)',
      '免稅10% + 7% OFF (消費5萬日圓以上)',
      '品牌化妝品等一部分商品不能享受折扣。',
      '請在櫃台結算時出示此畫面。不能和其他優惠一起使用。',
      '此優惠券只適用於免稅結算。本公司旗下的 Direx 店鋪不參加此活動。'
    ] },
  { id: 9,  name: '近鐵百貨',      nameEN: 'Kintetsu',          category: 'department',  file: 'kintetsu.jpg',
    rules: [
      '一次購物滿2000日圓(不含稅)以上時，可享 95折優惠。請在購物及退稅時出示本券。',
      '本券可在使用電子支付、現金、各種信用卡付款時使用。不可同時使用其他優惠券。',
      '不能享受優惠的商品：食品、特價品、福袋、商品券、餐廳、咖啡店以及部分指定店。',
      '適用店鋪：海闊天空總店、上本町店、和歌山店、橿原店、奈良店、四日市店、生駒店、草津店。',
      '在近鐵百貨海闊天空總店辦理退稅手續時出示本優惠券的顧客，將獲贈品牌手帕一枚。'
    ] },
  { id: 10, name: '大丸百貨',      nameEN: 'Daimaru',           category: 'department',  file: 'daimaru.jpg',
    rules: [
      '購物時享有9.5折優惠。購物金額必須滿3,000日圓(含稅)以上。',
      '9.5折優惠不適用於國際精品館、手錶專櫃、食品及特價品等賣場。',
      '辦理退稅手續即贈送美食券。一次辦理10萬日圓(含稅)以上的退稅手續，即贈送適用於食品賣場或餐廳的2,000日圓美食券。',
      '出示本畫面時，請務必出示本人的護照。僅限本人及入境未滿6個月的外國籍顧客使用。',
      '僅能以現金或在大丸・松坂屋使用的禮券、銀聯卡、信用卡、行動支付購買原價商品時適用。'
    ] },
  { id: 11, name: '松本清藥妝',    nameEN: 'Matsumoto Kiyoshi', category: 'pharmacy',    file: 'matsukiyo.jpg',
    rules: [
      '免稅 + 3% OFF (1萬～3萬日圓)',
      '免稅 + 5% OFF (3萬～5萬日圓)',
      '免稅 + 7% OFF (5萬日圓以上)',
      '務必於結帳前用手機出示本優惠券圖片。',
      '此優惠券可與外國旅客享有的10%免稅福利合併使用。',
      '折扣對象外商品：高級化妝品之專櫃商品、香菸、雜誌、POSA儲值卡、指定垃圾袋、尿布、嬰兒食品等。'
    ] },
  { id: 12, name: '鶴羽藥妝',      nameEN: 'Tsuruha Drug',      category: 'pharmacy',    file: 'tsuruha.png',
    rules: [
      '10,000日圓～29,999日圓享 免稅10% + 3% OFF。',
      '30,000日圓～49,999日圓享 免稅10% + 5% OFF。',
      '50,000日圓以上享 免稅10% + 7% OFF。',
      '僅適用於免稅對象。請出示護照。',
      '付款前請出示優惠券。(付款後不可享折扣)',
      '某些產品不符合資格。優惠券不可兌換現金。'
    ] },
];

const categoryLabels = {
  all:         '全部',
  department:  '百貨公司',
  pharmacy:    '藥妝店',
  electronics: '家電量販',
  supermarket: '超市',
};

const categoryIcons = {
  all:         '🛍️',
  department:  '🏬',
  pharmacy:    '💊',
  electronics: '📱',
  supermarket: '🛒',
};

// ─── State ───────────────────────────────────────────────────
let currentFilter = 'all';
let usedSet       = new Set(JSON.parse(localStorage.getItem('usedCoupons') || '[]'));
let lightboxIndex = -1;
let filteredList  = [];

// ─── DOM refs ────────────────────────────────────────────────
const grid        = document.getElementById('coupon-list');
const tabsEl      = document.getElementById('category-tabs');
const lightbox    = document.getElementById('lightbox');
const lbImg       = document.getElementById('lb-img');
const lbTitle     = document.getElementById('lb-title');
const lbSub       = document.getElementById('lb-sub');
const lbUsedBtn   = document.getElementById('lb-used-btn');
const lbClose     = document.getElementById('lb-close');
const counter     = document.getElementById('counter');
const rulesOverlay = document.getElementById('rules-overlay');
const rulesTitle   = document.getElementById('rules-title');
const rulesIcon    = document.getElementById('rules-icon');
const rulesList    = document.getElementById('rules-list');
const rulesClose   = document.getElementById('rules-close');

// ─── Build tabs ──────────────────────────────────────────────
function buildTabs() {
  const cats = ['all', 'department', 'pharmacy', 'electronics', 'supermarket'];
  tabsEl.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (cat === currentFilter ? ' active' : '');
    btn.dataset.cat = cat;
    btn.innerHTML = `<span class="tab-icon">${categoryIcons[cat]}</span><span>${categoryLabels[cat]}</span>`;
    btn.addEventListener('click', () => {
      currentFilter = cat;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
    tabsEl.appendChild(btn);
  });
}

// ─── Render list ─────────────────────────────────────────────
function render() {
  filteredList = coupons.filter(c =>
    currentFilter === 'all' || c.category === currentFilter
  );

  const usedCount = filteredList.filter(c => usedSet.has(c.id)).length;
  counter.textContent = `${filteredList.length} 張優惠券・已使用 ${usedCount} 張`;

  if (filteredList.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔍</div>
      <p>找不到符合的優惠券</p>
    </div>`;
    return;
  }

  grid.innerHTML = '';
  filteredList.forEach((c, idx) => {
    const used = usedSet.has(c.id);
    const row  = document.createElement('button');
    row.className = 'coupon-row' + (used ? ' used' : '');
    row.innerHTML = `
      <div class="row-icon">${categoryIcons[c.category]}</div>
      <div class="row-text">
        <p class="row-name">${c.name}</p>
        <p class="row-en">${c.nameEN}</p>
        <span class="row-cat">${categoryLabels[c.category]}</span>
      </div>
      <button class="rules-btn" aria-label="使用規範">📋 規範</button>
      <span class="row-arrow">›</span>`;
    row.querySelector('.rules-btn').addEventListener('click', e => {
      e.stopPropagation();
      showRules(c);
    });
    row.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(row);
  });
}

// ─── Lightbox ────────────────────────────────────────────────
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbReset();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const c    = filteredList[lightboxIndex];
  const used = usedSet.has(c.id);
  lbImg.style.opacity = '0'; // Hide immediately to prevent flashing old image
  lbImg.onload = () => { lbImg.style.opacity = '1'; }; // Show when loaded
  lbImg.src          = encodeURIComponent(c.file);
  lbImg.alt          = c.name;
  lbTitle.textContent = c.name;
  lbSub.textContent   = c.nameEN + ' ／ ' + categoryLabels[c.category];
  lbUsedBtn.textContent = used ? '✔ 已使用' : '標記為已使用';
  lbUsedBtn.className   = 'lb-used-btn' + (used ? ' done' : '');
}

function toggleUsed() {
  const c = filteredList[lightboxIndex];
  if (usedSet.has(c.id)) {
    usedSet.delete(c.id);
  } else {
    usedSet.add(c.id);
  }
  localStorage.setItem('usedCoupons', JSON.stringify([...usedSet]));
  updateLightbox();
  render();
}

lbClose.addEventListener('click',   closeLightbox);
lbUsedBtn.addEventListener('click', toggleUsed);

// Close when tapping backdrop
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

// ─── Rules sheet ─────────────────────────────────────────────
function showRules(c) {
  rulesIcon.textContent  = categoryIcons[c.category];
  rulesTitle.textContent = c.name + '・使用規範';
  rulesList.innerHTML    = c.rules.map(r => `<li>${r}</li>`).join('');
  rulesOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRules() {
  rulesOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

rulesClose.addEventListener('click', closeRules);
rulesOverlay.addEventListener('click', e => { if (e.target === rulesOverlay) closeRules(); });

// ─── Zoom / Pan / Swipe gestures ───────────────────────────────
let lbScale = 1, lbTx = 0, lbTy = 0;
let lastTapTime = 0;
let pinchStartDist = 0, pinchStartScale = 1;
let pinchStartTx = 0, pinchStartTy = 0, pinchRefX = 0, pinchRefY = 0;
let dragStartX = 0, dragStartY = 0, dragStartTx = 0, dragStartTy = 0;
let swipeStartX = 0;
let isMultiTouch = false;
const MAX_SCALE = 4;

function lbApply(animate = false) {
  lbImg.style.transition = animate ? 'transform .28s ease' : 'none';
  lbImg.style.transform  = `translate(${lbTx}px,${lbTy}px) scale(${lbScale})`;
}

function lbReset(animate = false) {
  lbScale = 1; lbTx = 0; lbTy = 0;
  lbApply(animate);
}

function lbClamp() {
  if (lbScale <= 1) { lbTx = 0; lbTy = 0; return; }
  const maxX = (lbScale - 1) * lbImg.clientWidth  / 2;
  const maxY = (lbScale - 1) * lbImg.clientHeight / 2;
  lbTx = Math.min(maxX, Math.max(-maxX, lbTx));
  lbTy = Math.min(maxY, Math.max(-maxY, lbTy));
}

function touchDist(a, b) { return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY); }
function touchMid(a, b)  { return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 }; }

lbImg.addEventListener('touchstart', e => {
  e.preventDefault();
  const ts = [...e.touches];

  if (ts.length === 1) {
    const t = ts[0];
    const now = Date.now();
    if (now - lastTapTime < 260) {       // double-tap
      lastTapTime = 0;
      lbScale > 1 ? lbReset(true) : (() => {
        lbScale = 2.5;
        lbTx = (lbImg.clientWidth  / 2 - (t.clientX - lbImg.getBoundingClientRect().left)) * (1 - lbScale) / lbScale;
        lbTy = (lbImg.clientHeight / 2 - (t.clientY - lbImg.getBoundingClientRect().top))  * (1 - lbScale) / lbScale;
        lbClamp(); lbApply(true);
      })();
      return;
    }
    lastTapTime = now;
    swipeStartX  = t.clientX;
    dragStartX   = t.clientX; dragStartY  = t.clientY;
    dragStartTx  = lbTx;      dragStartTy = lbTy;
    isMultiTouch = false;

  } else if (ts.length >= 2) {
    isMultiTouch    = true;
    pinchStartDist  = touchDist(ts[0], ts[1]);
    pinchStartScale = lbScale;
    pinchStartTx    = lbTx; pinchStartTy = lbTy;
    const m = touchMid(ts[0], ts[1]);
    pinchRefX = m.x; pinchRefY = m.y;
  }
}, { passive: false });

lbImg.addEventListener('touchmove', e => {
  e.preventDefault();
  const ts = [...e.touches];

  if (ts.length >= 2) {
    isMultiTouch = true;
    const d  = touchDist(ts[0], ts[1]);
    lbScale  = Math.min(MAX_SCALE, Math.max(1, pinchStartScale * d / pinchStartDist));
    const m  = touchMid(ts[0], ts[1]);
    lbTx = pinchStartTx + (m.x - pinchRefX);
    lbTy = pinchStartTy + (m.y - pinchRefY);
    lbClamp(); lbApply();

  } else if (ts.length === 1 && lbScale > 1 && !isMultiTouch) {
    const t = ts[0];
    lbTx = dragStartTx + (t.clientX - dragStartX);
    lbTy = dragStartTy + (t.clientY - dragStartY);
    lbClamp(); lbApply();
  }
}, { passive: false });

lbImg.addEventListener('touchend', e => {
  if (e.touches.length < 2) isMultiTouch = false;
  if (lbScale < 1) lbReset(true);
}, { passive: true });

// ─── Init ────────────────────────────────────────────────────
function preloadImages() {
  coupons.forEach(c => {
    const img = new Image();
    img.src = encodeURIComponent(c.file);
  });
}

buildTabs();
render();
setTimeout(preloadImages, 500); // 延遲500ms背景載入，避免卡住主畫面
