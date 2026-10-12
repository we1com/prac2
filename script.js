/* =========================================================
   ROBO SCHOOL — script.js
   ========================================================= */

/* ---------- TRANSLATIONS ---------- */
const I18N = {
  ru: {
    nav_about: 'О школе', nav_trainers: 'Тренеры', nav_price: 'Стоимость',
    hero_sub: 'Курсы повышения квалификации по робототехнике для педагогов начальной школы',
    hero_btn: 'Записаться на курс',
    about_lead: '<b>Robo School</b> — учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования',
    stat1: 'УМК по различным направлениям по робототехнике',
    stat2: 'Школ, в которых запущена робототехника',
    stat3: 'Педагогов прошедших курсы повышения квалификации',
    stat4: 'Обученных детей на базе собственных центров',
    get_title: 'Что вы получите после курса',
    get1_t: 'Удостоверение',
    get1_p: 'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
    get2_t: 'Знания',
    get2_p: 'По основам разработки учебно-методических комплексов по робототехнике и программированию',
    get3_t: 'Практику',
    get3_p: 'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',
    tip: 'При наличии свободных мест',
    tr_title: 'Профессиональные тренеры',
    n1: 'Ирина Лайм', n2: 'Марина Орлова', n3: 'Максим Петров', n4: 'Константин Назаров', n5: 'Анна Волкова',
    role: 'преподаватель по робототехнике',
    more: 'Подробнее',
    pk_title: 'Выберите нужный пакет',
    pk_pro: 'УМК по робототехнике<br>и программированию',
    pk_robo: 'УМК по робототехнике',
    pk_prog: 'УМК по программированию',
    pk_btn: 'Оставить заявку',
    form_title: 'Запишитесь на курс со скидкой 10%',
    form_sub: 'Акция действительна до 10 марта 2022 года',
    ph_name: 'Имя', ph_phone: 'Телефон',
    form_btn: 'Оформить заявку',
    form_ok: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    close: 'Закрыть',
    tab_edu: 'Образование', tab_exp: 'Опыт работы', tab_awd: 'Награды',
    m_edu: `Сентябрь 1995 — Июнь 2000<br>Санкт-Петербургский политехнический университет Петра Великого<br>Факультет: Компьютерных наук и технологий<br>Специальность: Математика и компьютерные науки<br>Форма обучения: Очная`,
    m_courses: 'Курсы и тренинги',
    m_courses_t: `<p>Ноябрь 2020 — Февраль 2021</p><p>Программа дополнительного образования «3D Моделирование»</p><p class="muted">Место проведения: Институт дополнительного образования «Политех»</p>`,
    m_exp: `Сентябрь 2005 — настоящее время<br>Преподаватель робототехники<br>Обучение детей 6–12 лет основам конструирования и программирования`
  },

  kk: {
    nav_about: 'Мектеп туралы', nav_trainers: 'Жаттықтырушылар', nav_price: 'Құны',
    hero_sub: 'Бастауыш сынып педагогтеріне арналған робототехника бойынша біліктілікті арттыру курстары',
    hero_btn: 'Курсқа жазылу',
    about_lead: '<b>Robo School</b> — робототехника және бағдарламалау саласында педагогикалық кадр резервін қалыптастыруға арналған мекеме',
    stat1: 'Робототехника бойынша әртүрлі бағыттағы ОӘК',
    stat2: 'Робототехника енгізілген мектептер',
    stat3: 'Біліктілікті арттыру курстарынан өткен педагогтер',
    stat4: 'Өз орталықтарымыздың базасында оқытылған балалар',
    get_title: 'Курстан кейін не аласыз',
    get1_t: 'Куәлік',
    get1_p: 'Білім беру мекемелерінде 6-12 жас аралығындағы балаларға робототехниканы оқытуға құқық беретін',
    get2_t: 'Білім',
    get2_p: 'Робототехника және бағдарламалау бойынша оқу-әдістемелік кешендерді әзірлеу негіздері бойынша',
    get3_t: 'Тәжірибе',
    get3_p: 'R:ED LAB базасында робототехниканы оқыту бойынша тәжірибеден өту мүмкіндігі (офлайн немесе онлайн форматта)',
    tip: 'Бос орындар болған жағдайда',
    tr_title: 'Кәсіби жаттықтырушылар',
    n1: 'Ирина Лайм', n2: 'Марина Орлова', n3: 'Максим Петров', n4: 'Константин Назаров', n5: 'Анна Волкова',
    role: 'робототехника бойынша оқытушы',
    more: 'Толығырақ',
    pk_title: 'Қажетті пакетті таңдаңыз',
    pk_pro: 'Робототехника және<br>бағдарламалау бойынша ОӘК',
    pk_robo: 'Робототехника бойынша ОӘК',
    pk_prog: 'Бағдарламалау бойынша ОӘК',
    pk_btn: 'Өтінім қалдыру',
    form_title: 'Курсқа 10% жеңілдікпен жазылыңыз',
    form_sub: 'Акция 2022 жылғы 10 наурызға дейін жарамды',
    ph_name: 'Аты', ph_phone: 'Телефон',
    form_btn: 'Өтінімді рәсімдеу',
    form_ok: 'Рахмет! Біз сізбен жақын арада байланысамыз.',
    close: 'Жабу',
    tab_edu: 'Білімі', tab_exp: 'Жұмыс тәжірибесі', tab_awd: 'Марапаттар',
    m_edu: `1995 жылғы қыркүйек — 2000 жылғы маусым<br>Ұлы Петр атындағы Санкт-Петербург политехникалық университеті<br>Факультет: Компьютерлік ғылымдар және технологиялар<br>Мамандығы: Математика және компьютерлік ғылымдар<br>Оқу түрі: Күндізгі`,
    m_courses: 'Курстар мен тренингтер',
    m_courses_t: `<p>2020 жылғы қараша — 2021 жылғы ақпан</p><p>«3D Модельдеу» қосымша білім беру бағдарламасы</p><p class="muted">Өткізілген орны: «Политех» қосымша білім беру институты</p>`,
    m_exp: `2005 жылғы қыркүйек — қазіргі уақытқа дейін<br>Робототехника оқытушысы<br>6–12 жас аралығындағы балаларға конструкциялау және бағдарламалау негіздерін оқыту`
  },

  en: {
    nav_about: 'About', nav_trainers: 'Trainers', nav_price: 'Pricing',
    hero_sub: 'Professional development courses in robotics for primary school teachers',
    hero_btn: 'Sign up for the course',
    about_lead: '<b>Robo School</b> is an institution that builds a teaching talent pool in the field of robotics and programming',
    stat1: 'Teaching kits across different robotics areas',
    stat2: 'Schools where robotics has been launched',
    stat3: 'Teachers who completed the training courses',
    stat4: 'Children trained at our own centers',
    get_title: 'What you will get after the course',
    get1_t: 'Certificate',
    get1_p: 'Giving the right to teach robotics to children aged 6-12 in educational institutions',
    get2_t: 'Knowledge',
    get2_p: 'On the basics of developing teaching and methodological kits for robotics and programming',
    get3_t: 'Practice',
    get3_p: 'An opportunity to do a robotics teaching internship at R:ED LAB (offline or online)',
    tip: 'Subject to availability',
    tr_title: 'Professional trainers',
    n1: 'Irina Lime', n2: 'Marina Orlova', n3: 'Maxim Petrov', n4: 'Konstantin Nazarov', n5: 'Anna Volkova',
    role: 'robotics teacher',
    more: 'Read more',
    pk_title: 'Choose your package',
    pk_pro: 'Teaching kit for robotics<br>and programming',
    pk_robo: 'Teaching kit for robotics',
    pk_prog: 'Teaching kit for programming',
    pk_btn: 'Leave a request',
    form_title: 'Sign up for the course with a 10% discount',
    form_sub: 'The offer is valid until March 10, 2022',
    ph_name: 'Name', ph_phone: 'Phone',
    form_btn: 'Submit request',
    form_ok: 'Thank you! We will contact you shortly.',
    close: 'Close',
    tab_edu: 'Education', tab_exp: 'Experience', tab_awd: 'Awards',
    m_edu: `September 1995 — June 2000<br>Peter the Great St. Petersburg Polytechnic University<br>Faculty: Computer Science and Technology<br>Major: Mathematics and Computer Science<br>Form of study: Full-time`,
    m_courses: 'Courses and trainings',
    m_courses_t: `<p>November 2020 — February 2021</p><p>Additional education program “3D Modeling”</p><p class="muted">Venue: Polytech Institute of Additional Education</p>`,
    m_exp: `September 2005 — present<br>Robotics teacher<br>Teaching children aged 6–12 the basics of construction and programming`
  }
};

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

let currentLang = 'ru';
try { currentLang = localStorage.getItem('robo-lang') || 'ru'; } catch (e) {}
if (!I18N[currentLang]) currentLang = 'ru';

/* ---------- LANGUAGE ---------- */
function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('robo-lang', lang); } catch (e) {}
  const t = I18N[lang];
  document.documentElement.lang = lang;

  $$('[data-i18n]').forEach(el => { if (t[el.dataset.i18n] != null) el.textContent = t[el.dataset.i18n]; });
  $$('[data-i18n-html]').forEach(el => { if (t[el.dataset.i18nHtml] != null) el.innerHTML = t[el.dataset.i18nHtml]; });
  $$('[data-i18n-ph]').forEach(el => { if (t[el.dataset.i18nPh] != null) el.placeholder = t[el.dataset.i18nPh]; });
  $$('.lang__btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // refresh modal if open
  if (modal.classList.contains('open')) renderModal();
}

/* ---------- SCROLL REVEAL + COUNTERS ---------- */
const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function countUp(el) {
  const target = +el.dataset.count;
  const dur = 1800;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    const num = $('.stat__num', e.target);
    if (num) countUp(num);
    io.unobserve(e.target);
  });
}, { threshold: .15 });
$$('.reveal').forEach(el => io.observe(el));

/* ---------- SCROLL TO TOP ---------- */
const totop = $('#totop');
window.addEventListener('scroll', () => {
  totop.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- INFO TOOLTIP (tap on mobile) ---------- */
const info = $('#info');
info.addEventListener('click', e => { e.stopPropagation(); info.classList.toggle('open'); });
document.addEventListener('click', () => info.classList.remove('open'));

/* ---------- CAROUSEL ---------- */
const carousel = $('#carousel');
const thumb = $('#thumb');
const prev = $('#prev');
const next = $('#next');

function stepSize() {
  const card = $('.card', carousel);
  return card.offsetWidth + parseFloat(getComputedStyle(carousel).columnGap || 24);
}
function updateProgress() {
  const max = carousel.scrollWidth - carousel.clientWidth;
  const ratio = carousel.clientWidth / carousel.scrollWidth;
  thumb.style.width = (ratio * 100) + '%';
  const pos = max > 0 ? carousel.scrollLeft / max : 0;
  thumb.style.left = (pos * (100 - ratio * 100)) + '%';
  prev.disabled = carousel.scrollLeft <= 2;
  next.disabled = carousel.scrollLeft >= max - 2;
}
carousel.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
prev.addEventListener('click', () => carousel.scrollBy({ left: -stepSize(), behavior: 'smooth' }));
next.addEventListener('click', () => carousel.scrollBy({ left:  stepSize(), behavior: 'smooth' }));

// mouse drag
let down = false, startX = 0, startLeft = 0, moved = false;
carousel.addEventListener('mousedown', e => {
  down = true; moved = false;
  startX = e.pageX; startLeft = carousel.scrollLeft;
});
window.addEventListener('mousemove', e => {
  if (!down) return;
  const dx = e.pageX - startX;
  if (Math.abs(dx) > 5) { moved = true; carousel.classList.add('dragging'); }
  carousel.scrollLeft = startLeft - dx;
});
window.addEventListener('mouseup', () => {
  if (!down) return;
  down = false;
  carousel.classList.remove('dragging');
  if (moved) {
    // snap to nearest card
    const s = stepSize();
    carousel.scrollTo({ left: Math.round(carousel.scrollLeft / s) * s, behavior: 'smooth' });
  }
});
carousel.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
updateProgress();

/* ---------- MODAL ---------- */
const modal = $('#modal');
const tabsBox = $('#tabs');
const selectBox = $('#select');
const selectList = $('#selectList');
const selectLabel = $('#selectLabel');
let currentTrainer = 0;
let currentTab = 'edu';

function renderModal() {
  const t = I18N[currentLang];
  // the photo is taken from the trainer's card, so the file name is always the same
  $('#mPhoto').src = $$('.card')[currentTrainer].querySelector('img').getAttribute('src');
  $('#mName').textContent = t['n' + (currentTrainer + 1)];

  const tabs = [
    { id: 'edu', label: t.tab_edu },
    { id: 'exp', label: t.tab_exp },
    { id: 'awd', label: t.tab_awd, disabled: true }
  ];

  tabsBox.innerHTML = tabs.map(x =>
    `<button class="tab ${x.id === currentTab ? 'active' : ''} ${x.disabled ? 'disabled' : ''}" data-tab="${x.id}">${x.label}</button>`
  ).join('');

  selectList.innerHTML = tabs.map(x =>
    `<button class="${x.id === currentTab ? 'active' : ''} ${x.disabled ? 'disabled' : ''}" data-tab="${x.id}">${x.label}</button>`
  ).join('');
  selectLabel.textContent = tabs.find(x => x.id === currentTab).label;

  let html = '';
  if (currentTab === 'edu') {
    html = `<div class="fade"><p>${t.m_edu}</p><h4>${t.m_courses}</h4>${t.m_courses_t}</div>`;
  } else if (currentTab === 'exp') {
    html = `<div class="fade"><p>${t.m_exp}</p></div>`;
  }
  const body = $('#mBody');
  body.innerHTML = html;
  body.scrollTop = 0;
}

function openModal(i) {
  currentTrainer = i; currentTab = 'edu';
  renderModal();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  selectBox.classList.remove('open');
  document.body.classList.remove('lock');
}

$$('[data-open]').forEach(b => b.addEventListener('click', () => openModal(+b.dataset.open)));
$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMenu(); } });

function pickTab(e) {
  const b = e.target.closest('[data-tab]');
  if (!b || b.classList.contains('disabled')) return;
  currentTab = b.dataset.tab;
  selectBox.classList.remove('open');
  renderModal();
}
tabsBox.addEventListener('click', pickTab);
selectList.addEventListener('click', pickTab);
$('#selectBtn').addEventListener('click', () => selectBox.classList.toggle('open'));

/* ---------- MOBILE MENU ---------- */
const menu = $('#menu');
function openMenu()  { menu.classList.add('open'); document.body.classList.add('lock'); }
function closeMenu() { menu.classList.remove('open'); if (!modal.classList.contains('open')) document.body.classList.remove('lock'); }
$('#burger').addEventListener('click', openMenu);
$('#menuClose').addEventListener('click', closeMenu);
$$('.menu__nav a').forEach(a => a.addEventListener('click', closeMenu));

/* ---------- LANGUAGE BUTTONS ---------- */
$$('.lang__btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- FORM ---------- */
const form = $('#leadForm');
const formOk = $('#formOk');

function gotoForm() {
  $('#form').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('#fName').focus({ preventScroll: true }), 700);
}
$$('[data-goto-form]').forEach(b => b.addEventListener('click', gotoForm));

form.addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  $$('input', form).forEach(inp => {
    const bad = !inp.value.trim() || (inp.type === 'email' && !/^\S+@\S+\.\S+$/.test(inp.value));
    inp.classList.remove('error');
    if (bad) { void inp.offsetWidth; inp.classList.add('error'); ok = false; }
  });
  if (!ok) return;
  // TODO: send data to your server here (fetch)
  form.reset();
  formOk.classList.add('show');
  setTimeout(() => formOk.classList.remove('show'), 5000);
});

/* ---------- INIT ---------- */
setLang(currentLang);
