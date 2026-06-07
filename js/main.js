/**
 * main.js — Nico's Restaurante & Pizzaria
 * Depende de: translations.js (carregado antes deste arquivo no HTML)
 */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const mobileNav = document.getElementById('mobileNav');

function openMobileNav() {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});

function filterMenu(category, event) {
  const cards = document.querySelectorAll('.menu-card');
  const tabs  = document.querySelectorAll('.menu-tab');

  tabs.forEach(tab => tab.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  cards.forEach(card => {
    const show = category === 'todos' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });
}

let currentLang = 'pt';

function setLang(lang) {
  if (!translations[lang]) {
    console.warn(`Idioma "${lang}" não encontrado em translations.js`);
    return;
  }
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const form     = e.target;
  const btn      = form.querySelector('[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '…';
  btn.disabled    = true;
  setTimeout(() => {
    alert('Mensagem enviada! Em breve entraremos em contato.');
    form.reset();
    btn.textContent = original;
    btn.disabled    = false;
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  setLang('pt');
});
