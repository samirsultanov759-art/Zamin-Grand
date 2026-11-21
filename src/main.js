const ROOMS = [
  {
    id: 'room-garden-villa',
    wing: 'villa',
    wingLabel: '1-qavat · Bog‘ Qanoti',
    name: 'Shaxsiy Hovuzli Bog‘ Villasi',
    floor: '1-qavat',
    view: 'Shaxsiy sarv bog‘i va hovuz',
    area: 112,
    guests: 5,
    bed: '2 ta King xona + Yozgi ayvon',
    balcony: true,
    spa: true,
    pricePerNight: 4200000,
    dimensions: '14.0m x 8.0m',
    zones: ['Yotoqxona A', 'Yotoqxona B', 'Hovuz Terrasasi'],
    description: 'Sarv daraxtlari ichidagi shaxsiy isitiladigan hovuz, ochiq choyxona ayvoni va ikki alohida Master yotoqxona.',
    image: 'images/room_garden_villa_1795105940390.jpg'
  },
  {
    id: 'room-deluxe-king',
    wing: 'classic',
    wingLabel: '2–3-qavat · Classic Qanot',
    name: 'Deluxe Bog‘ Xonasi',
    floor: '2-qavat',
    view: 'Ichki hovli bog‘i',
    area: 42,
    guests: 2,
    bed: '1 ta King-size (200x200)',
    balcony: true,
    spa: true,
    pricePerNight: 1350000,
    dimensions: '7.0m x 6.0m',
    zones: ['King Yotoqxona', 'Marmar Hammom', 'Arka Balkon'],
    description: 'Travertin devorlar, yong‘oq yog‘ochi ish stoli, italyan kofe apparati va ichki hovliga qaragan balkon.',
    image: 'images/room_deluxe_king_1795105940182.jpg'
  },
  {
    id: 'room-twin-superior',
    wing: 'classic',
    wingLabel: '2–3-qavat · Classic Qanot',
    name: 'Superior Twin Xonasi',
    floor: '3-qavat',
    view: 'Shahar xiyoboni',
    area: 46,
    guests: 3,
    bed: '2 ta Queen-size',
    balcony: false,
    spa: true,
    pricePerNight: 1480000,
    dimensions: '7.6m x 6.0m',
    zones: ['Twin Zona', 'Ish Burchagi', 'Dush Xonasi'],
    description: 'Ikki keng Queen karavot, ovoz o‘tkazmaydigan panoramali derazalar va biznes mehmonlar uchun ergonomik burchak.',
    image: 'images/room_twin_superior_1795105940501.jpg'
  },
  {
    id: 'room-junior-suite',
    wing: 'suite',
    wingLabel: '4–7-qavat · Panorama Suitlar',
    name: 'Junior Velvet Suite',
    floor: '5-qavat',
    view: 'Markaziy atriyum',
    area: 64,
    guests: 3,
    bed: '1 ta King + Keng divan',
    balcony: true,
    spa: true,
    pricePerNight: 2150000,
    dimensions: '8.8m x 7.2m',
    zones: ['Qabul Zal', 'Master Yotoqxona', 'Kiyim Xonasi'],
    description: 'Alohida mehmonxona zali, jez chiroqli kutish hududi va keng kiyinish xonasi bilan jihozlangan nafis suit.',
    image: 'images/room_junior_suite_1795105940671.jpg'
  },
  {
    id: 'room-panoramic-corner',
    wing: 'suite',
    wingLabel: '4–7-qavat · Panorama Suitlar',
    name: 'Panorama Burchak Suiti',
    floor: '7-qavat',
    view: '270° Samarqand panoramasi',
    area: 78,
    guests: 4,
    bed: '1 ta King + Ovqatlanish zali',
    balcony: true,
    spa: true,
    pricePerNight: 2850000,
    dimensions: '10.4m x 7.5m',
    zones: ['Burchak Salon', 'Panorama Yotoqxona', 'Vanna + Dush'],
    description: 'Ikki tomondan poldan shiftgacha shisha devorlar, shahar chiroqlari manzarali vanna va keng burchak balkoni.',
    image: 'images/room_panoramic_corner_1795105941143.jpg'
  },
  {
    id: 'room-presidential',
    wing: 'penthouse',
    wingLabel: '8-qavat · Prezident Qavati',
    name: 'Prezident Penthouse',
    floor: '8-qavat',
    view: '360° Shahar va tog‘lar',
    area: 185,
    guests: 6,
    bed: '2 ta Master King + Kaminli zal',
    balcony: true,
    spa: true,
    pricePerNight: 6500000,
    dimensions: '18.5m x 10.0m',
    zones: ['Kaminli Rezidensiya', 'Shaxsiy Ochiq Terrasa', '2 ta Master Suite'],
    description: 'Butun sakkizinchi qavatning eng hashamatli rezidensiyasi: marmar kamin, xususiy kechki terrasa va shaxsiy konsyerj.',
    image: 'images/room_presidential_penthouse_1795105940891.jpg'
  }
];

const WINGS = [
  { id: 'penthouse', level: '8-qavat', title: 'Prezident Penthouse', meta: '185 m² · VIP Rezidensiya' },
  { id: 'suite', level: '4–7-qavat', title: 'Panorama Suitlar', meta: '64–78 m² · Shahar manzarasi' },
  { id: 'classic', level: '2–3-qavat', title: 'Deluxe va Twin Qanot', meta: '42–46 m² · Bog‘ va xiyobon' },
  { id: 'villa', level: '1-qavat', title: 'Bog‘ Villalari', meta: '112 m² · Shaxsiy basseyn' }
];

const HERO_SLIDES = [
  { tag: '01 / Markaziy Atriyum', title: 'Travertin hovli va tinch aks suv havzasi', img: 'images/hotel_hero_atrium_1795105940691.jpg' },
  { tag: '02 / Termal SPA', title: '34°C yopiq mineral hovuz va turk hammomi', img: 'images/hotel_spa_thermal_1795105941150.jpg' },
  { tag: '03 / Tomdagi Restoran', title: 'Quyosh botishida mualliflik kechki taomlari', img: 'images/hotel_rooftop_dining_1795105941144.jpg' }
];

const SERVICES = [
  {
    id: 'srv-spa',
    kicker: 'Wellness · 07:00 – 23:00',
    name: 'Juftliklar Termal SPA kursi',
    desc: '90 daqiqalik aromatik massaj, Gimalay tuzi saunasi va shaxsiy hammom.',
    price: 580000,
    image: 'images/hotel_spa_thermal_1795105941150.jpg'
  },
  {
    id: 'srv-dinner',
    kicker: 'Gastronomiya · 18:00 – 00:00',
    name: 'Tomdagi restoranda kechki ovqat',
    desc: '2 nafar mehmon uchun shahar manzarasida 3 bosqichli mualliflik menyusi.',
    price: 640000,
    image: 'images/hotel_rooftop_dining_1795105941144.jpg'
  },
  {
    id: 'srv-transfer',
    kicker: 'Transport va Qulaylik · 24/7',
    name: 'Aeroport VIP kutib olish + Kechki chiqish',
    desc: 'Biznes-klass mashinada kutib olish va xonani soat 18:00 gacha saqlash.',
    price: 490000,
    image: 'images/hotel_hero_atrium_1795105940691.jpg'
  }
];

const EXTRA_BASKET_SERVICES = [
  ...SERVICES,
  { id: 'srv-late', name: 'Kechki chiqish (18:00 gacha)', desc: 'Xonadan standart 12:00 o‘rniga kechgacha foydalanish', price: 390000 }
];

const MEAL_PLANS = [
  { id: 'ro', label: 'Faqat xona', extra: 0 },
  { id: 'bb', label: 'Nonushta (+180 ming)', extra: 180000 },
  { id: 'hb', label: '2 mahal (+490 ming)', extra: 490000 }
];

const FAQS = [
  { q: 'SAMARQAND10 promo-kodi qanday ishlaydi?', a: 'Bosh sahifa yoki bron shaklida SAMARQAND10 kodini kiritsangiz, xonalar va taomlanish qiymatidan avtomatik 10% chegirma hisoblanadi.' },
  { q: 'Qavat bo‘yicha xonani oldindan tanlash mumkinmi?', a: 'Ha, chap tomondagi me’moriy bino kesimidan istalgan qavat qanotini (1-qavat Villa, 2–3 Classic, 4–7 Suit yoki 8-qavat Penthouse) tanlashingiz mumkin.' },
  { q: 'Termal SPA va nonushta narxga kiradimi?', a: '34°C yopiq termal hovuz barcha mehmonlar uchun bepul. Nonushta va kechki ovqat rejasini har bir xona ichida alohida sozlash mumkin.' },
  { q: 'Bronni bepul bekor qilish shartlari qanday?', a: 'Kelish sanasidan 24 soat oldin xabar bersangiz, hech qanday jarimasiz sanalarni o‘zgartirish yoki bronni bekor qilish kafolatlanadi.' }
];

const PACKAGES = [
  {
    id: 'pkg-romantic',
    badge: '2 Tun · Juftliklar Uchun',
    title: 'Samarqand Oqshomi Paketi',
    roomId: 'room-junior-suite',
    nights: 2,
    mealLabel: 'Nonushta va kechki ovqat',
    mealExtra: 490000,
    serviceIds: ['srv-spa', 'srv-dinner'],
    savings: 'Tejash: 620 000 so‘m',
    featured: false,
    points: ['Junior Velvet Suitda 2 tun', 'Juftliklar Termal SPA kursi (90 daq)', 'Tomdagi restoranda kechki ovqat', 'Kechki chiqish 16:00 gacha']
  },
  {
    id: 'pkg-family',
    badge: '4 Tun · Oila va Dam Olish',
    title: 'Bog‘ Villasi Oilaviy Haftaligi',
    roomId: 'room-garden-villa',
    nights: 4,
    mealLabel: '2 mahal taomlanish',
    mealExtra: 490000,
    serviceIds: ['srv-transfer', 'srv-spa'],
    savings: 'Tejash: 1 150 000 so‘m',
    featured: true,
    points: ['Shaxsiy Hovuzli Bog‘ Villasi (4 tun)', 'Aeroportdan ikki tomonlama VIP transfer', 'Har kuni termal basseyn va hammom', '6 yoshgacha bolalar uchun bepul menyu']
  },
  {
    id: 'pkg-business',
    badge: '2 Tun · Xizmat Safari',
    title: 'Biznes Ekspress Rezidensiya',
    roomId: 'room-panoramic-corner',
    nights: 2,
    mealLabel: 'Shved stoli nonushta',
    mealExtra: 180000,
    serviceIds: ['srv-transfer'],
    savings: 'Tejash: 440 000 so‘m',
    featured: false,
    points: ['Panorama Burchak Suitida 2 tun', '1 Gbit/s kovorking va majlis zali', 'Vokzal yoki aeroportdan kutib olish', 'Kiyimlarni bepul dazmollash xizmati']
  }
];

const GALLERY_TABS = [
  { id: 'all', label: 'Barcha suratlar' },
  { id: 'rooms', label: 'Xonalar va Suitlar' },
  { id: 'spaces', label: 'Hovli va SPA' },
  { id: 'dining', label: 'Oshxona' }
];

const GALLERY_ITEMS = [
  { id: 'g1', cat: 'spaces', tag: 'Markaziy Hovli', title: 'Travertin arkali hovli va sokin aks suv havzasi', img: 'images/hotel_hero_atrium_1795105940691.jpg' },
  { id: 'g2', cat: 'spaces', tag: 'Wellness Hududi', title: '34°C yopiq mineral termal basseyn va kedr saunasi', img: 'images/hotel_spa_thermal_1795105941150.jpg' },
  { id: 'g3', cat: 'dining', tag: '8-qavat Restoran', title: 'Quyosh botishida shahar manzarasidagi kechki dasturxon', img: 'images/hotel_rooftop_dining_1795105941144.jpg' },
  { id: 'g4', cat: 'rooms', tag: '1-qavat Villa', title: 'Sarv daraxtlari ichidagi shaxsiy basseynli bog‘ villasi', img: 'images/room_garden_villa_1795105940390.jpg' },
  { id: 'g5', cat: 'rooms', tag: '7-qavat Suite', title: '270° panorama oynali burchak suit mehmonxonasi', img: 'images/room_panoramic_corner_1795105941143.jpg' },
  { id: 'g6', cat: 'rooms', tag: '8-qavat Penthouse', title: 'Marmar kaminli Prezident Penthouse zalining ko‘rinishi', img: 'images/room_presidential_penthouse_1795105940891.jpg' }
];

const TIMELINE_ITEMS = [
  { time: '07:00', title: 'Shved stoli tonggi nonushta', desc: 'Yangi pishirilgan nonlar, organik qishloq mahsulotlari va hovli ayvonida kofe.' },
  { time: '10:30', title: 'Termal hovuz va hammom soatlari', desc: '34°C mineral suv, Gimalay tuz saunasi va tinch dam olish kreslolari.' },
  { time: '16:00', title: 'Atriyumda choy va shirinlik marosimi', desc: 'Barcha mehmonlar uchun kunlik bepul samarqandcha ko‘k choy va quruq mevalar.' },
  { time: '19:30', title: 'Tomdagi restoranda kechki taomlar', desc: 'Jonli akustik musiqa ostida mualliflik milliy va O‘rta yer dengizi taomlari.' },
  { time: '22:00', title: 'Tungi sukunat va yostiq menyusi', desc: 'Ortopedik yoki gipoallergen yostiqlarni tanlash va xonaga choy yetkazib berish.' }
];

const LANDMARKS = [
  { name: 'Registon maydoni', mode: 'Avtomobilda yoki piyoda xiyobon orqali', dist: '8 daqiqa (3.1 km)' },
  { name: 'Amir Temur maqbarasi', mode: 'Markaziy bog‘ ko‘chasi orqali', dist: '9 daqiqa (3.4 km)' },
  { name: 'Shohi Zinda majmuasi', mode: 'Siyob tarixiy yo‘nalishi', dist: '11 daqiqa (4.6 km)' },
  { name: 'Samarqand Temir yo‘l vokzali', mode: 'Afrosiyob tezyurar poyezd bekati', dist: '12 daqiqa (5.8 km)' },
  { name: 'Samarqand Xalqaro Aeroporti', mode: 'VIP shaxsiy transfer yo‘lagi', dist: '18 daqiqa (9.5 km)' }
];

const RATING_METRICS = [
  { label: 'Xonalar tozaligi va tartibi', score: '9.9', pct: 99 },
  { label: 'Termal SPA va basseyn sifati', score: '9.8', pct: 98 },
  { label: 'Nonushta va restoran taomlari', score: '9.8', pct: 98 },
  { label: 'Joylashuv va tinch muhit', score: '9.9', pct: 99 },
  { label: 'Konsyerj va xodimlar e’tibori', score: '10.0', pct: 100 }
];

const REVIEWS = [
  {
    name: 'Malika Rustamova',
    role: 'Toshkent · Shaxsiy Hovuzli Bog‘ Villasi',
    quote: 'Qavat bo‘yicha oldindan villa qanotini tanlaganimiz juda qulay bo‘ldi. Hovuz suvi iliq, nonushta esa bog‘ o‘rtasidagi ayvonda unutilmas o‘tdi.'
  },
  {
    name: 'Bekzod Tursunov',
    role: 'Farg‘ona · Panorama Burchak Suiti',
    quote: 'Saytdagi SAMARQAND10 promo-kodi bilan darhol 10% chegirma oldik. 7-qavatdan kechki Samarqand manzarasi ajoyib, ish uchrashuvlari uchun internet juda tez.'
  },
  {
    name: 'Dilnoza Qosimova',
    role: 'Buxoro · Junior Velvet Suite',
    quote: 'Termal hammom va kechki tomdagi restoran xizmatlari hammasidan o‘tib tushdi. Xona chizmasi saytda ko‘rsatilganidek keng va yorug‘ ekan.'
  }
];

const fmt = n => `${n.toLocaleString('uz-UZ')} so‘m`;
const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const MINUS_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>`;
const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.8 6.1 6.7.8-5 4.6 1.3 6.6-5.8-3.3-5.8 3.3 1.3-6.6-5-4.6 6.7-.8L12 2.5z"/></svg>`;
const SPIN_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" class="spin-icon"><path d="M12 3a9 9 0 1 0 9 9" stroke-linecap="round"/></svg>`;

const toIsoDate = d => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const plusThree = new Date(today);
plusThree.setDate(plusThree.getDate() + 4);

let state = {
  checkIn: toIsoDate(tomorrow),
  checkOut: toIsoDate(plusThree),
  nights: 3,
  promoCode: 'SAMARQAND10',
  wing: 'all',
  maxPrice: 6500000,
  guestsFilter: 'all',
  balconyOnly: false,
  sort: 'default',
  search: '',
  heroSlide: 0,
  galleryCat: 'all',
  cmpA: ROOMS[1].id,
  cmpB: ROOMS[4].id,
  basketRooms: [],
  basketServices: [],
  orderVoucher: ''
};
let modalState = { roomId: null, mealId: 'bb', nights: 3 };

const hasPromoDiscount = () => state.promoCode.trim().toUpperCase() === 'SAMARQAND10';

const loaderEl = document.getElementById('loader');
const loaderPct = document.getElementById('loaderPct');
const loaderBar = document.getElementById('loaderBar');
const loaderStage = document.getElementById('loaderStage');
const stages = [
  'Me’moriy qabulxona tizimi yuklanmoqda...',
  '8 qavatli xona rejalari va tariflar tekshirilmoqda...',
  'ZAMIN GRAND sizni kutib olishga tayyor!'
];
let loaderTimer = null;
let loaderClosed = false;

const closeLoader = () => {
  if (!loaderEl || loaderClosed) return;
  loaderClosed = true;
  if (loaderTimer) clearTimeout(loaderTimer);
  loaderEl.classList.add('is-done');
};

const startLoader = () => {
  if (!loaderEl) return;
  loaderClosed = false;
  if (loaderTimer) clearTimeout(loaderTimer);
  loaderEl.classList.remove('is-done');
  loaderEl.querySelectorAll('.draw-stroke').forEach(el => {
    el.style.animation = 'none';
    void el.getBoundingClientRect();
    el.style.animation = '';
  });
  const startTs = performance.now();
  const duration = 2200;
  const tick = now => {
    if (loaderClosed) return;
    const prog = Math.min(1, (now - startTs) / duration);
    const pct = Math.round(prog * 100);
    if (loaderPct) loaderPct.textContent = `${pct}%`;
    if (loaderBar) loaderBar.style.width = `${pct}%`;
    if (loaderStage) loaderStage.textContent = pct < 38 ? stages[0] : pct < 78 ? stages[1] : stages[2];
    if (prog < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  loaderTimer = setTimeout(closeLoader, duration + 180);
};

startLoader();
document.getElementById('skipLoader')?.addEventListener('click', closeLoader);
document.getElementById('replayLoaderBtn')?.addEventListener('click', startLoader);

const scrollBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollBar && max > 0) scrollBar.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
}, { passive: true });

const renderHeroSlide = () => {
  const slide = HERO_SLIDES[state.heroSlide] || HERO_SLIDES[0];
  const img = document.getElementById('heroSlideImg');
  const tag = document.getElementById('heroSlideTag');
  const title = document.getElementById('heroSlideTitle');
  const dots = document.getElementById('heroSlideDots');
  if (img) img.src = slide.img;
  if (tag) tag.textContent = slide.tag;
  if (title) title.textContent = slide.title;
  if (dots) {
    dots.innerHTML = HERO_SLIDES.map((_, i) => `<button type="button" class="hg-btn ${i === state.heroSlide ? 'active' : ''}" data-slide="${i}">0${i + 1}</button>`).join('');
    dots.querySelectorAll('[data-slide]').forEach(b => b.addEventListener('click', () => {
      state.heroSlide = Number(b.dataset.slide);
      renderHeroSlide();
    }));
  }
};
renderHeroSlide();
setInterval(() => {
  state.heroSlide = (state.heroSlide + 1) % HERO_SLIDES.length;
  renderHeroSlide();
}, 6000);

const heroCheckIn = document.getElementById('heroCheckIn');
const heroCheckOut = document.getElementById('heroCheckOut');
const heroGuests = document.getElementById('heroGuests');
const heroPromo = document.getElementById('heroPromo');
const stayNote = document.getElementById('staySummaryNote');

const syncDatesAndPromo = () => {
  if (heroCheckIn && heroCheckOut) {
    const d1 = new Date(heroCheckIn.value);
    const d2 = new Date(heroCheckOut.value);
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    if (diff >= 1) {
      state.checkIn = heroCheckIn.value;
      state.checkOut = heroCheckOut.value;
      state.nights = diff;
    } else {
      const next = new Date(d1);
      next.setDate(next.getDate() + 1);
      state.checkIn = heroCheckIn.value;
      state.checkOut = toIsoDate(next);
      heroCheckOut.value = state.checkOut;
      state.nights = 1;
    }
  }
  const bkDate = document.getElementById('bkDate');
  const bkNights = document.getElementById('bkNights');
  const bkPromo = document.getElementById('bkPromo');
  if (bkDate) bkDate.value = state.checkIn;
  if (bkNights) bkNights.value = String(state.nights);
  if (bkPromo && document.activeElement !== bkPromo) bkPromo.value = state.promoCode;
  if (heroPromo && document.activeElement !== heroPromo) heroPromo.value = state.promoCode;

  if (stayNote) {
    const promoTag = hasPromoDiscount() ? ' · -10% promo faol' : '';
    stayNote.textContent = `${state.checkIn} → ${state.checkOut} (${state.nights} tun${promoTag})`;
  }
  renderRooms();
  renderBasket();
  updateEstimator();
};

if (heroCheckIn && heroCheckOut) {
  heroCheckIn.value = state.checkIn;
  heroCheckIn.min = toIsoDate(today);
  heroCheckOut.value = state.checkOut;
  heroCheckOut.min = toIsoDate(tomorrow);
  heroCheckIn.addEventListener('change', syncDatesAndPromo);
  heroCheckOut.addEventListener('change', syncDatesAndPromo);
}
heroPromo?.addEventListener('input', e => {
  state.promoCode = e.target.value;
  syncDatesAndPromo();
});

document.getElementById('heroSearchForm')?.addEventListener('submit', e => {
  e.preventDefault();
  if (heroGuests) {
    state.guestsFilter = heroGuests.value;
    const gf = document.getElementById('guestFilter');
    if (gf) gf.value = heroGuests.value;
  }
  syncDatesAndPromo();
  document.getElementById('xonalar')?.scrollIntoView({ behavior: 'smooth' });
});

const renderFloorDiagram = () => {
  const wrap = document.getElementById('floorDiagram');
  if (!wrap) return;
  wrap.innerHTML = WINGS.map(w => `
    <button type="button" class="floor-tier ${state.wing === w.id ? 'active' : ''}" data-wing="${w.id}">
      <div>
        <strong>${w.title}</strong>
        <span>${w.meta}</span>
      </div>
      <span class="font-mono-num" style="font-size:12px;font-weight:700;">${w.level}</span>
    </button>
  `).join('');

  wrap.querySelectorAll('[data-wing]').forEach(b => b.addEventListener('click', () => {
    state.wing = state.wing === b.dataset.wing ? 'all' : b.dataset.wing;
    renderFloorDiagram();
    renderRooms();
  }));
};

const renderRooms = () => {
  const listEl = document.getElementById('roomsList');
  const emptyEl = document.getElementById('roomsEmpty');
  const q = state.search.trim().toLowerCase();
  const discountRate = hasPromoDiscount() ? 0.9 : 1;

  let list = ROOMS.filter(r => {
    const matchWing = state.wing === 'all' || r.wing === state.wing;
    const matchPrice = r.pricePerNight <= state.maxPrice;
    const matchGuest = state.guestsFilter === 'all' || r.guests >= Number(state.guestsFilter);
    const matchBalcony = !state.balconyOnly || r.balcony;
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.view.toLowerCase().includes(q) || r.bed.toLowerCase().includes(q);
    return matchWing && matchPrice && matchGuest && matchBalcony && matchSearch;
  });

  if (state.sort === 'price-asc') list.sort((a, b) => a.pricePerNight - b.pricePerNight);
  else if (state.sort === 'price-desc') list.sort((a, b) => b.pricePerNight - a.pricePerNight);
  else if (state.sort === 'size-desc') list.sort((a, b) => b.area - a.area);

  if (!listEl || !emptyEl) return;
  if (!list.length) {
    listEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');

  listEl.innerHTML = list.map(r => {
    const inB = state.basketRooms.some(x => x.room.id === r.id);
    const finalNightly = Math.round(r.pricePerNight * discountRate);
    const staySum = finalNightly * state.nights;
    return `<article class="room-row">
      <button type="button" class="room-row-media" data-room-open="${r.id}">
        <img src="${r.image}" referrerpolicy="no-referrer" alt="${r.name}" />
      </button>
      <div class="room-row-content">
        <div>
          <p class="room-row-meta">${r.wingLabel} · ${r.view} · <span class="font-mono-num">${r.area} m²</span> · ${r.guests} mehmon</p>
          <h3 class="font-display room-row-title">${r.name}</h3>
          <p class="room-row-desc">${r.description}</p>
        </div>
        <div class="room-row-bottom">
          <div>
            <strong class="font-mono-num rr-price">${fmt(finalNightly)} <span style="font-size:12px;font-weight:400;color:var(--ink-muted);">/ tun</span></strong>
            <span class="font-mono-num rr-stay">${state.nights} tun jami: ${fmt(staySum)}${hasPromoDiscount() ? ' (-10%)' : ''}</span>
          </div>
          <div class="rr-btns">
            <button type="button" class="btn-sm-out" data-room-open="${r.id}">Loyiha & Tafsilot</button>
            <button type="button" class="btn-sm-navy ${inB ? 'added' : ''}" data-room-add="${r.id}">${inB ? 'Savatda' : 'Savatga qo‘shish'}</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');

  listEl.querySelectorAll('[data-room-open]').forEach(b => b.addEventListener('click', () => openRoomModal(b.dataset.roomOpen)));
  listEl.querySelectorAll('[data-room-add]').forEach(b => b.addEventListener('click', () => {
    const room = ROOMS.find(x => x.id === b.dataset.roomAdd);
    if (room) addRoomToBasket(room, 'Nonushta (+180 ming)', 180000, state.nights);
  }));
};

const addRoomToBasket = (room, mealLabel, mealExtra, nightsCount) => {
  state.orderVoucher = '';
  const nightlyRate = room.pricePerNight + mealExtra;
  const idx = state.basketRooms.findIndex(x => x.room.id === room.id);
  const entry = { room, mealLabel, nightlyRate, nights: nightsCount };
  if (idx >= 0) state.basketRooms[idx] = entry;
  else state.basketRooms.push(entry);
  renderRooms();
  renderBasket();
  document.getElementById('basketDrawer')?.classList.remove('hidden');
};

const renderRoomBlueprintSvg = r => `
  <svg viewBox="0 0 320 130" fill="none" style="width:100%;height:110px;margin-top:8px;" aria-hidden="true">
    <rect x="8" y="8" width="304" height="114" stroke="#F59E0B" stroke-width="1.6" stroke-dasharray="4 3" />
    <line x1="120" y1="8" x2="120" y2="122" stroke="rgba(255,255,255,0.28)" stroke-width="1.2" />
    <line x1="220" y1="8" x2="220" y2="122" stroke="rgba(255,255,255,0.28)" stroke-width="1.2" />
    <text x="64" y="68" text-anchor="middle" fill="#CBD5E1" font-family="sans-serif" font-size="10">${r.zones[0]}</text>
    <text x="170" y="68" text-anchor="middle" fill="#CBD5E1" font-family="sans-serif" font-size="10">${r.zones[1]}</text>
    <text x="266" y="68" text-anchor="middle" fill="#FCD34D" font-family="sans-serif" font-size="10">${r.zones[2]}</text>
    <text x="160" y="114" text-anchor="middle" fill="#94A3B8" font-family="monospace" font-size="9">${r.dimensions} · ${r.area} m²</text>
  </svg>
`;

const renderModalBody = () => {
  const r = ROOMS.find(x => x.id === modalState.roomId);
  const box = document.getElementById('roomModalContent');
  if (!r || !box) return;
  const meal = MEAL_PLANS.find(m => m.id === modalState.mealId) || MEAL_PLANS[1];
  const discountRate = hasPromoDiscount() ? 0.9 : 1;
  const nightly = Math.round(r.pricePerNight * discountRate) + meal.extra;
  const total = nightly * modalState.nights;

  box.innerHTML = `
    <div class="modal-visual">
      <img src="${r.image}" referrerpolicy="no-referrer" alt="${r.name}" />
      <div class="blueprint-mini">
        <p class="font-mono-num" style="font-size:11px;color:#F59E0B;">ME’MORIY CHIZMA · ${r.dimensions}</p>
        ${renderRoomBlueprintSvg(r)}
      </div>
    </div>
    <div class="modal-content">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
          <div>
            <p style="font-size:12px;font-weight:700;color:var(--cobalt);">${r.wingLabel}</p>
            <h3 class="font-display" style="font-size:30px;line-height:1.05;margin-top:4px;">${r.name}</h3>
          </div>
          <button id="closeModalBtn" type="button" class="icon-close" aria-label="Yopish">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <p style="margin-top:10px;font-size:13px;color:var(--ink-muted);">${r.description}</p>
        <div class="spec-boxes" style="margin-top:14px;">
          <div><span>Umumiy maydon</span><strong class="font-mono-num">${r.area} m²</strong></div>
          <div><span>Sig‘im</span><strong class="font-mono-num">${r.guests} mehmon</strong></div>
          <div><span>To‘shak turi</span><strong>${r.bed}</strong></div>
          <div><span>Manzara</span><strong>${r.view}</strong></div>
        </div>
        <div style="margin-top:12px;">
          <p style="font-size:12px;font-weight:600;color:var(--ink-muted);">Ovqatlanish dasturi</p>
          <div class="meal-seg">
            ${MEAL_PLANS.map(m => `<button type="button" class="meal-opt ${m.id === modalState.mealId ? 'active' : ''}" data-mp="${m.id}">${m.label}</button>`).join('')}
          </div>
        </div>
        <div style="margin-top:12px;display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:12px;font-weight:600;color:var(--ink-muted);">Tunlar soni</span>
          <div class="step-ctrl">
            <button type="button" class="step-btn" id="modNDec">-</button>
            <span class="font-mono-num" style="font-size:14px;font-weight:600;">${modalState.nights} tun</span>
            <button type="button" class="step-btn" id="modNInc">+</button>
          </div>
        </div>
      </div>
      <div style="padding-top:14px;border-top:1px solid var(--line-grid);">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:12px;color:var(--ink-muted);">Jami (${modalState.nights} tun):</span>
          <strong class="font-mono-num" style="font-size:20px;color:var(--cobalt);">${fmt(total)}</strong>
        </div>
        <button id="modAddBtn" type="button" class="btn-cobalt" style="width:100%;margin-top:12px;">Bron savatiga qo‘shish</button>
      </div>
    </div>`;

  document.getElementById('closeModalBtn')?.addEventListener('click', () => document.getElementById('roomModal')?.classList.add('hidden'));
  box.querySelectorAll('[data-mp]').forEach(b => b.addEventListener('click', () => { modalState.mealId = b.dataset.mp; renderModalBody(); }));
  document.getElementById('modNDec')?.addEventListener('click', () => { modalState.nights = Math.max(1, modalState.nights - 1); renderModalBody(); });
  document.getElementById('modNInc')?.addEventListener('click', () => { modalState.nights = Math.min(30, modalState.nights + 1); renderModalBody(); });
  document.getElementById('modAddBtn')?.addEventListener('click', () => {
    document.getElementById('roomModal')?.classList.add('hidden');
    addRoomToBasket(r, meal.label, meal.extra, modalState.nights);
  });
};

const openRoomModal = id => {
  modalState = { roomId: id, mealId: 'bb', nights: state.nights };
  renderModalBody();
  document.getElementById('roomModal')?.classList.remove('hidden');
};
document.getElementById('roomModal')?.addEventListener('click', e => { if (e.target.id === 'roomModal') e.currentTarget.classList.add('hidden'); });

const renderBentoServices = () => {
  const grid = document.getElementById('bentoGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => {
    const selected = state.basketServices.some(x => x.srv.id === s.id);
    return `<article class="bento-card">
      <div class="bento-img"><img src="${s.image}" referrerpolicy="no-referrer" alt="${s.name}" /></div>
      <div class="bento-body">
        <div>
          <p class="eyebrow">${s.kicker}</p>
          <h3 class="font-display" style="font-size:24px;line-height:1.12;margin-top:4px;">${s.name}</h3>
          <p style="margin-top:8px;font-size:13px;color:var(--ink-muted);">${s.desc}</p>
        </div>
        <div class="bento-foot">
          <strong class="font-mono-num" style="font-size:15px;">${fmt(s.price)}</strong>
          <button type="button" class="${selected ? 'btn-sm-navy added' : 'btn-sm-navy'}" data-srv-toggle="${s.id}">
            ${selected ? 'Savatda' : '+ Qo‘shish'}
          </button>
        </div>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('[data-srv-toggle]').forEach(b => b.addEventListener('click', () => adjustService(b.dataset.srvToggle, 1, true)));
};

const renderCompare = () => {
  const a = ROOMS.find(x => x.id === state.cmpA) || ROOMS[1];
  const b = ROOMS.find(x => x.id === state.cmpB) || ROOMS[4];
  const wrap = document.getElementById('compareSheet');
  if (!wrap) return;

  const mark = ok => `<span style="display:inline-flex;align-items:center;gap:6px;color:${ok ? 'var(--cobalt)' : 'var(--ink-muted)'};">${ok ? CHECK_SVG : MINUS_SVG}<span>${ok ? 'Mavjud' : 'Yo‘q'}</span></span>`;

  const rows = [
    { label: 'Qavat va manzara', va: `${a.floor} · ${a.view}`, vb: `${b.floor} · ${b.view}` },
    { label: 'Umumiy maydon va o‘lcham', va: `<span class="font-mono-num">${a.area} m² (${a.dimensions})</span>`, vb: `<span class="font-mono-num">${b.area} m² (${b.dimensions})</span>` },
    { label: 'Mehmonlar sig‘imi', va: `<span class="font-mono-num">${a.guests} nafar</span>`, vb: `<span class="font-mono-num">${b.guests} nafar</span>` },
    { label: 'To‘shak turi', va: a.bed, vb: b.bed },
    { label: 'Shaxsiy balkon / terrasa', va: mark(a.balcony), vb: mark(b.balcony) },
    { label: 'Termal SPA & hovuz', va: mark(a.spa), vb: mark(b.spa) },
    { label: '1 tunlik asosiy tarif', va: `<strong class="font-mono-num">${fmt(a.pricePerNight)}</strong>`, vb: `<strong class="font-mono-num">${fmt(b.pricePerNight)}</strong>` }
  ];

  wrap.innerHTML = `
    <table class="cmp-grid-table">
      <thead>
        <tr>
          <th style="width:28%;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;color:#94A3B8;">Parametr</th>
          <th style="width:36%;"><img src="${a.image}" referrerpolicy="no-referrer" alt="${a.name}" class="cmp-img-mini" />${a.name}</th>
          <th style="width:36%;"><img src="${b.image}" referrerpolicy="no-referrer" alt="${b.name}" class="cmp-img-mini" />${b.name}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `<tr>
          <td style="font-weight:600;color:var(--ink-muted);">${r.label}</td>
          <td>${r.va}</td>
          <td>${r.vb}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;
};

const adjustService = (id, delta, openDrawer) => {
  state.orderVoucher = '';
  const srv = EXTRA_BASKET_SERVICES.find(s => s.id === id);
  if (!srv) return;
  const item = state.basketServices.find(x => x.srv.id === id);
  if (!item && delta > 0) state.basketServices.push({ srv, qty: 1 });
  else if (item) {
    item.qty += delta;
    if (item.qty <= 0) state.basketServices = state.basketServices.filter(x => x.srv.id !== id);
  }
  renderBentoServices();
  renderBasket();
  if (openDrawer) document.getElementById('basketDrawer')?.classList.remove('hidden');
};

const renderBasket = () => {
  const badge = document.getElementById('basketBadge');
  if (badge) badge.textContent = String(state.basketRooms.length + state.basketServices.length);

  const body = document.getElementById('basketBody');
  const form = document.getElementById('checkoutForm');
  const totalEl = document.getElementById('basketTotal');
  if (!body || !form || !totalEl) return;

  const discountRate = hasPromoDiscount() ? 0.9 : 1;
  const roomSum = state.basketRooms.reduce((s, x) => s + Math.round(x.nightlyRate * discountRate) * x.nights, 0);
  const srvSum = state.basketServices.reduce((s, x) => s + x.srv.price * x.qty, 0);
  const total = roomSum + srvSum;
  totalEl.textContent = fmt(total);

  let topHtml = '';
  if (state.orderVoucher) {
    topHtml = `<div class="voucher-panel" style="margin-top:0;text-align:center;">
      <div class="voucher-top" style="justify-content:center;">${CHECK_SVG}<span>Bron #${state.orderVoucher} tasdiqlandi</span></div>
      <p style="margin-top:8px;font-size:13px;color:var(--ink-muted);">Tasdiqlangan elektron vaucher raqamingizga yuborildi.</p>
    </div>`;
  } else if (!state.basketRooms.length && !state.basketServices.length) {
    topHtml = `<div style="padding:20px 0;text-align:center;">
      <svg viewBox="0 0 120 84" fill="none" style="width:100px;height:72px;margin:0 auto;color:var(--cobalt);">
        <rect x="18" y="14" width="84" height="56" rx="4" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M40 52V36C40 29 48 25 60 23C72 25 80 29 80 36V52" stroke="#0B132B" stroke-width="2"/>
      </svg>
      <p style="margin-top:8px;font-size:14px;font-weight:700;">Bron savatingiz hozircha bo‘sh</p>
      <p style="margin-top:4px;font-size:12px;color:var(--ink-muted);">Xonalar yoki SPA xizmatlaridan birini tanlang.</p>
    </div>`;
  } else {
    const rHtml = state.basketRooms.map(x => `<div class="drawer-item">
      <img src="${x.room.image}" referrerpolicy="no-referrer" alt="${x.room.name}" class="drawer-img" />
      <div style="flex:1;min-width:0;">
        <h5 style="font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${x.room.name}</h5>
        <p style="font-size:11px;color:var(--ink-muted);">${x.mealLabel}</p>
        <p class="font-mono-num" style="font-size:12px;font-weight:600;color:var(--cobalt);margin-top:2px;">${fmt(Math.round(x.nightlyRate * discountRate) * x.nights)}</p>
      </div>
      <div class="step-ctrl">
        <button type="button" class="step-btn" data-rn-dec="${x.room.id}">-</button>
        <span class="font-mono-num" style="font-size:12px;font-weight:600;">${x.nights}t</span>
        <button type="button" class="step-btn" data-rn-inc="${x.room.id}">+</button>
      </div>
    </div>`).join('');

    const sHtml = state.basketServices.map(x => `<div class="drawer-item">
      <div style="flex:1;min-width:0;">
        <h5 style="font-size:13px;font-weight:700;">${x.srv.name}</h5>
        <p class="font-mono-num" style="font-size:12px;font-weight:600;color:var(--cobalt);">${fmt(x.srv.price)}</p>
      </div>
      <div class="step-ctrl">
        <button type="button" class="step-btn" data-sv-dec="${x.srv.id}">-</button>
        <span class="font-mono-num" style="font-size:12px;font-weight:600;">${x.qty}</span>
        <button type="button" class="step-btn" data-sv-inc="${x.srv.id}">+</button>
      </div>
    </div>`).join('');

    topHtml = `<div style="display:flex;flex-direction:column;gap:10px;">${rHtml}${sHtml}</div>`;
  }

  const extraHtml = `<div style="border-top:1px solid var(--line-grid);padding-top:14px;">
    <p style="font-size:12px;font-weight:700;">Qo‘shimcha xizmatlar</p>
    <div style="margin-top:10px;display:flex;flex-direction:column;gap:8px;">
      ${EXTRA_BASKET_SERVICES.map(s => `<div class="drawer-item" style="justify-content:space-between;">
        <div style="min-width:0;">
          <p style="font-size:12px;font-weight:600;">${s.name}</p>
          <p class="font-mono-num" style="font-size:11px;color:var(--cobalt);margin-top:2px;">${fmt(s.price)}</p>
        </div>
        <button type="button" data-sv-add="${s.id}" class="btn-sm-out" style="min-height:32px;padding:4px 10px;font-size:11px;">+ Qo‘shish</button>
      </div>`).join('')}
    </div>
  </div>`;

  body.innerHTML = topHtml + extraHtml;
  form.classList.toggle('hidden', (!state.basketRooms.length && !state.basketServices.length) || Boolean(state.orderVoucher));

  body.querySelectorAll('[data-rn-inc]').forEach(b => b.addEventListener('click', () => {
    const it = state.basketRooms.find(x => x.room.id === b.dataset.rnInc);
    if (it) { it.nights = Math.min(30, it.nights + 1); renderBasket(); }
  }));
  body.querySelectorAll('[data-rn-dec]').forEach(b => b.addEventListener('click', () => {
    const it = state.basketRooms.find(x => x.room.id === b.dataset.rnDec);
    if (!it) return;
    it.nights -= 1;
    if (it.nights <= 0) state.basketRooms = state.basketRooms.filter(x => x.room.id !== b.dataset.rnDec);
    renderRooms();
    renderBasket();
  }));
  body.querySelectorAll('[data-sv-add]').forEach(b => b.addEventListener('click', () => adjustService(b.dataset.svAdd, 1, false)));
  body.querySelectorAll('[data-sv-inc]').forEach(b => b.addEventListener('click', () => adjustService(b.dataset.svInc, 1, false)));
  body.querySelectorAll('[data-sv-dec]').forEach(b => b.addEventListener('click', () => adjustService(b.dataset.svDec, -1, false)));
};

document.getElementById('openBasketBtn')?.addEventListener('click', () => document.getElementById('basketDrawer')?.classList.remove('hidden'));
document.getElementById('closeBasketBtn')?.addEventListener('click', () => document.getElementById('basketDrawer')?.classList.add('hidden'));
document.getElementById('basketDrawer')?.addEventListener('click', e => { if (e.target.id === 'basketDrawer') e.currentTarget.classList.add('hidden'); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('roomModal')?.classList.add('hidden');
    document.getElementById('photoLightbox')?.classList.add('hidden');
    document.getElementById('basketDrawer')?.classList.add('hidden');
  }
});

document.getElementById('checkoutForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  if (!btn || btn.disabled) return;
  const orig = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `${SPIN_SVG}<span>Tasdiqlanmoqda...</span>`;
  setTimeout(() => {
    state.orderVoucher = `ZG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    state.basketRooms = [];
    state.basketServices = [];
    form.reset();
    btn.disabled = false;
    btn.innerHTML = orig;
    renderRooms();
    renderBentoServices();
    renderBasket();
  }, 600);
});

const updateEstimator = () => {
  const roomSel = document.getElementById('bkRoom');
  const mealSel = document.getElementById('bkMeal');
  const nightsIn = document.getElementById('bkNights');
  const promoIn = document.getElementById('bkPromo');
  const transChk = document.getElementById('bkTransfer');

  const r = ROOMS.find(x => x.id === roomSel?.value) || ROOMS[1];
  const mealExtra = Number(mealSel?.value || 0);
  const nights = Math.max(1, Number(nightsIn?.value || 1));
  const promoOk = (promoIn?.value ?? state.promoCode).trim().toUpperCase() === 'SAMARQAND10';
  const transCost = transChk?.checked ? 280000 : 0;

  const baseRoom = r.pricePerNight * nights;
  const mealCost = mealExtra * nights;
  const discount = promoOk ? Math.round((baseRoom + mealCost) * 0.1) : 0;
  const total = baseRoom + mealCost - discount + transCost;

  const titleEl = document.getElementById('estRoomTitle');
  const brkEl = document.getElementById('estBreakdown');
  const totEl = document.getElementById('estTotalVal');
  if (titleEl) titleEl.textContent = r.name;
  if (brkEl) {
    brkEl.innerHTML = `
      <div class="l-row"><span>Asosiy xona (${nights} tun x ${fmt(r.pricePerNight)})</span><b class="font-mono-num">${fmt(baseRoom)}</b></div>
      <div class="l-row"><span>Ovqatlanish dasturi</span><b class="font-mono-num">${fmt(mealCost)}</b></div>
      <div class="l-row"><span>Promo chegirma (${promoOk ? 'SAMARQAND10 -10%' : 'Yo‘q'})</span><b class="font-mono-num" style="color:${promoOk ? '#34D399' : '#94A3B8'};">-${fmt(discount)}</b></div>
      <div class="l-row"><span>Aeroport VIP transferi</span><b class="font-mono-num">${fmt(transCost)}</b></div>`;
  }
  if (totEl) totEl.textContent = fmt(total);
};

const initSelectors = () => {
  const opts = ROOMS.map(r => `<option value="${r.id}">${r.name} — ${fmt(r.pricePerNight)}</option>`).join('');
  const cmpA = document.getElementById('cmpSelectA');
  const cmpB = document.getElementById('cmpSelectB');
  const bkRoom = document.getElementById('bkRoom');
  if (cmpA) { cmpA.innerHTML = opts; cmpA.value = state.cmpA; cmpA.addEventListener('change', e => { state.cmpA = e.target.value; renderCompare(); }); }
  if (cmpB) { cmpB.innerHTML = opts; cmpB.value = state.cmpB; cmpB.addEventListener('change', e => { state.cmpB = e.target.value; renderCompare(); }); }
  if (bkRoom) { bkRoom.innerHTML = opts; bkRoom.value = ROOMS[1].id; bkRoom.addEventListener('change', updateEstimator); }

  document.getElementById('bkMeal')?.addEventListener('change', updateEstimator);
  document.getElementById('bkNights')?.addEventListener('input', updateEstimator);
  document.getElementById('bkPromo')?.addEventListener('input', e => {
    state.promoCode = e.target.value;
    syncDatesAndPromo();
  });
  document.getElementById('bkTransfer')?.addEventListener('change', updateEstimator);
};

document.getElementById('bkSaveBasketBtn')?.addEventListener('click', () => {
  const roomSel = document.getElementById('bkRoom');
  const mealSel = document.getElementById('bkMeal');
  const nightsIn = document.getElementById('bkNights');
  const transChk = document.getElementById('bkTransfer');
  const r = ROOMS.find(x => x.id === roomSel?.value) || ROOMS[1];
  const mealVal = Number(mealSel?.value || 0);
  const mealTxt = mealSel?.options[mealSel.selectedIndex]?.text || 'Standart';
  const nights = Math.max(1, Number(nightsIn?.value || 1));
  if (transChk?.checked) adjustService('srv-transfer', 1, false);
  addRoomToBasket(r, mealTxt, mealVal, nights);
});

const directForm = document.getElementById('directBookForm');
const directSuccess = document.getElementById('directSuccess');
directForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = directForm.querySelector('button[type="submit"]');
  if (!btn || btn.disabled) return;
  const orig = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `${SPIN_SVG}<span>Vaucher tayyorlanmoqda...</span>`;
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = orig;
    const code = `ZG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const guest = document.getElementById('bkName')?.value || 'Hurmatli mehmon';
    const roomSel = document.getElementById('bkRoom');
    const r = ROOMS.find(x => x.id === roomSel?.value) || ROOMS[1];
    const nights = document.getElementById('bkNights')?.value || '3';
    const codeEl = document.getElementById('voucherCode');
    const txtEl = document.getElementById('voucherText');
    if (codeEl) codeEl.textContent = `Bron #${code} tasdiqlandi`;
    if (txtEl) txtEl.textContent = `${guest} uchun ${r.name} (${nights} tun) rasman band qilindi. Konsyerj 10 daqiqada bog‘lanadi.`;
    directForm.classList.add('hidden');
    directSuccess?.classList.remove('hidden');
  }, 600);
});

document.getElementById('bkResetBtn')?.addEventListener('click', () => {
  directSuccess?.classList.add('hidden');
  directForm?.classList.remove('hidden');
});

const resetAllFilters = () => {
  state.wing = 'all';
  state.maxPrice = 6500000;
  state.guestsFilter = 'all';
  state.balconyOnly = false;
  state.sort = 'default';
  state.search = '';
  const ps = document.getElementById('priceSlider');
  const psv = document.getElementById('priceSliderVal');
  if (ps) ps.value = '6500000';
  if (psv) psv.textContent = '6 500 000';
  if (document.getElementById('roomSearch')) document.getElementById('roomSearch').value = '';
  if (document.getElementById('guestFilter')) document.getElementById('guestFilter').value = 'all';
  if (document.getElementById('sortSelect')) document.getElementById('sortSelect').value = 'default';
  if (document.getElementById('balconyOnlyChk')) document.getElementById('balconyOnlyChk').checked = false;
  renderFloorDiagram();
  renderRooms();
};

document.getElementById('floorResetBtn')?.addEventListener('click', () => {
  state.wing = 'all';
  renderFloorDiagram();
  renderRooms();
});
document.getElementById('resetAllFiltersBtn')?.addEventListener('click', resetAllFilters);

document.getElementById('priceSlider')?.addEventListener('input', e => {
  state.maxPrice = Number(e.target.value);
  const valEl = document.getElementById('priceSliderVal');
  if (valEl) valEl.textContent = state.maxPrice.toLocaleString('uz-UZ');
  renderRooms();
});
document.getElementById('roomSearch')?.addEventListener('input', e => { state.search = e.target.value; renderRooms(); });
document.getElementById('guestFilter')?.addEventListener('change', e => { state.guestsFilter = e.target.value; renderRooms(); });
document.getElementById('balconyOnlyChk')?.addEventListener('change', e => { state.balconyOnly = e.target.checked; renderRooms(); });
document.getElementById('sortSelect')?.addEventListener('change', e => { state.sort = e.target.value; renderRooms(); });

const faqList = document.getElementById('faqList');
if (faqList) {
  faqList.innerHTML = FAQS.map((f, i) => `<div class="faq-box ${i === 0 ? 'open' : ''}">
    <button type="button" class="faq-btn" aria-expanded="${i === 0 ? 'true' : 'false'}">
      <span>${f.q}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="faq-body ${i === 0 ? '' : 'hidden'}">${f.a}</div>
  </div>`).join('');
  faqList.querySelectorAll('.faq-btn').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const ans = item.querySelector('.faq-body');
    const willOpen = ans.classList.contains('hidden');
    faqList.querySelectorAll('.faq-box').forEach(x => {
      x.classList.remove('open');
      x.querySelector('.faq-body').classList.add('hidden');
      x.querySelector('.faq-btn')?.setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('open');
      ans.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    }
  }));
}

document.querySelectorAll('[data-f-wing]').forEach(link => link.addEventListener('click', () => {
  state.wing = link.dataset.fWing;
  renderFloorDiagram();
  renderRooms();
}));

document.getElementById('scrollTopBtn')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const makeSvgFallback = title => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#F4F6F9"/><rect x="30" y="30" width="340" height="240" stroke="#1D4ED8" stroke-width="2" fill="none"/><path d="M120 220V130C120 85 155 60 200 50C245 60 280 85 280 130V220" stroke="#0B132B" stroke-width="2.5" fill="none"/><text x="200" y="255" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="600" fill="#0B132B">${title}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

document.addEventListener('error', e => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  img.src = makeSvgFallback(img.alt || 'ZAMIN GRAND');
}, true);

const renderPackages = () => {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;
  grid.innerHTML = PACKAGES.map(p => {
    const r = ROOMS.find(x => x.id === p.roomId) || ROOMS[0];
    const srvSum = p.serviceIds.reduce((s, sid) => {
      const f = EXTRA_BASKET_SERVICES.find(x => x.id === sid);
      return s + (f ? f.price : 0);
    }, 0);
    const total = (r.pricePerNight + p.mealExtra) * p.nights + srvSum;
    return `<article class="pkg-card ${p.featured ? 'featured' : ''}">
      <div>
        <p class="eyebrow" style="${p.featured ? 'color:var(--amber);' : ''}">${p.badge} · ${p.savings}</p>
        <h3 class="font-display" style="font-size:26px;line-height:1.1;margin-top:6px;">${p.title}</h3>
        <ul class="pkg-list">
          ${p.points.map(pt => `<li>${CHECK_SVG}<span>${pt}</span></li>`).join('')}
        </ul>
      </div>
      <div class="pkg-foot">
        <div>
          <span style="display:block;font-size:11px;opacity:0.75;">To‘plam narxi</span>
          <strong class="font-mono-num" style="font-size:16px;">${fmt(total)}</strong>
        </div>
        <button type="button" class="${p.featured ? 'btn-cobalt' : 'btn-sm-navy'}" data-pkg-add="${p.id}">Savatga qo‘shish</button>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('[data-pkg-add]').forEach(b => b.addEventListener('click', () => {
    const p = PACKAGES.find(x => x.id === b.dataset.pkgAdd);
    if (!p) return;
    const room = ROOMS.find(x => x.id === p.roomId);
    if (!room) return;
    p.serviceIds.forEach(sid => adjustService(sid, 1, false));
    addRoomToBasket(room, p.mealLabel, p.mealExtra, p.nights);
  }));
};

const openLightbox = item => {
  const modal = document.getElementById('photoLightbox');
  const box = document.getElementById('lightboxContent');
  if (!modal || !box) return;
  box.innerHTML = `
    <img src="${item.img}" referrerpolicy="no-referrer" alt="${item.title}" />
    <div class="lightbox-foot">
      <div>
        <p style="font-size:11px;font-weight:700;color:var(--cobalt);">${item.tag}</p>
        <strong style="font-size:16px;display:block;margin-top:2px;">${item.title}</strong>
      </div>
      <button id="closeLightboxBtn" type="button" class="icon-close" aria-label="Yopish">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>`;
  modal.classList.remove('hidden');
  document.getElementById('closeLightboxBtn')?.addEventListener('click', () => modal.classList.add('hidden'));
};
document.getElementById('photoLightbox')?.addEventListener('click', e => {
  if (e.target.id === 'photoLightbox') e.currentTarget.classList.add('hidden');
});

const renderGallery = () => {
  const tabs = document.getElementById('galleryTabs');
  const grid = document.getElementById('galleryGrid');
  if (tabs) {
    tabs.innerHTML = GALLERY_TABS.map(t => `<button type="button" class="gal-tab ${state.galleryCat === t.id ? 'active' : ''}" data-gcat="${t.id}">${t.label}</button>`).join('');
    tabs.querySelectorAll('[data-gcat]').forEach(b => b.addEventListener('click', () => {
      state.galleryCat = b.dataset.gcat;
      renderGallery();
    }));
  }
  if (grid) {
    const items = GALLERY_ITEMS.filter(x => state.galleryCat === 'all' || x.cat === state.galleryCat);
    grid.innerHTML = items.map(x => `<button type="button" class="gal-tile" data-gal-open="${x.id}">
      <div class="gal-tile-img"><img src="${x.img}" referrerpolicy="no-referrer" alt="${x.title}" /></div>
      <div class="gal-tile-cap">
        <span>${x.tag}</span>
        <strong>${x.title}</strong>
      </div>
    </button>`).join('');
    grid.querySelectorAll('[data-gal-open]').forEach(b => b.addEventListener('click', () => {
      const found = GALLERY_ITEMS.find(x => x.id === b.dataset.galOpen);
      if (found) openLightbox(found);
    }));
  }
};

const renderItineraryAndLandmarks = () => {
  const tl = document.getElementById('timelineList');
  const lm = document.getElementById('landmarksList');
  if (tl) {
    tl.innerHTML = TIMELINE_ITEMS.map(item => `<div class="tl-row">
      <div class="font-mono-num tl-time">${item.time}</div>
      <div class="tl-desc">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>`).join('');
  }
  if (lm) {
    lm.innerHTML = LANDMARKS.map(item => `<div class="lm-row">
      <div>
        <strong>${item.name}</strong>
        <span>${item.mode}</span>
      </div>
      <span class="font-mono-num lm-dist">${item.dist}</span>
    </div>`).join('');
  }
  document.getElementById('addConciergeTransferBtn')?.addEventListener('click', () => adjustService('srv-transfer', 1, true));
};

const renderReviews = () => {
  const bars = document.getElementById('ratingBars');
  const grid = document.getElementById('reviewsGrid');
  if (bars) {
    bars.innerHTML = RATING_METRICS.map(m => `<div>
      <div class="rb-row-head">
        <span>${m.label}</span>
        <span class="font-mono-num" style="color:var(--cobalt);">${m.score}</span>
      </div>
      <div class="rb-track"><div class="rb-fill" style="width:${m.pct}%"></div></div>
    </div>`).join('');
  }
  if (grid) {
    const fiveStars = STAR_SVG.repeat(5);
    grid.innerHTML = REVIEWS.map(r => `<article class="rev-card">
      <div>
        <div class="rev-stars" aria-label="5 yulduz">${fiveStars}</div>
        <p class="rev-quote">“${r.quote}”</p>
      </div>
      <div class="rev-author">
        <strong>${r.name}</strong>
        <span>${r.role}</span>
      </div>
    </article>`).join('');
  }
};

initSelectors();
renderFloorDiagram();
syncDatesAndPromo();
renderPackages();
renderBentoServices();
renderGallery();
renderCompare();
renderItineraryAndLandmarks();
renderReviews();
renderBasket();
updateEstimator();
