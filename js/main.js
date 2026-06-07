/**
 * main.js — Nico's Restaurante & Pizzaria
 *
 * Funções do site:
 *   1. Navbar — efeito de scroll
 *   2. Nav mobile — abrir / fechar
 *   3. Cardápio — filtro por categoria
 *   4. Idioma — troca PT / EN / ES
 *   5. Formulário de contato
 *
 * Depende de: translations.js (carregado antes deste arquivo no HTML)
 */


/* ─────────────────────────────────────────
   1. NAVBAR — efeito ao rolar a página
───────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


/* ─────────────────────────────────────────
   2. NAV MOBILE — abrir / fechar
───────────────────────────────────────── */
const mobileNav = document.getElementById('mobileNav');

function openMobileNav() {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden'; // trava o scroll da página
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// Fecha ao pressionar Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});


/* ─────────────────────────────────────────
   3. CARDÁPIO — filtro por categoria
───────────────────────────────────────── */

/**
 * Filtra os cards do cardápio pela categoria clicada.
 * @param {string} category - valor do data-category do card
 *                            ou 'todos' para mostrar todos
 * @param {Event}  event    - evento do clique (para atualizar a aba ativa)
 */
function filterMenu(category, event, gridId) {
  const grid = document.getElementById(gridId || 'menuGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.menu-card');
  const tabContainer = event && event.currentTarget
    ? event.currentTarget.closest('.menu-tabs')
    : null;
  const tabs = tabContainer ? tabContainer.querySelectorAll('.menu-tab') : [];

  tabs.forEach(tab => tab.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');

  cards.forEach(card => {
    const show = category === 'todos' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });
}


/* ─────────────────────────────────────────
   4. IDIOMA — troca PT / EN / ES
   Depende do objeto `translations` definido
   em js/translations.js
───────────────────────────────────────── */
let currentLang = 'pt';

/**
 * Troca o idioma da página.
 * @param {string} lang - 'pt' | 'en' | 'es'
 */
function setLang(lang) {
  if (!translations[lang]) {
    console.warn(`Idioma "${lang}" não encontrado em translations.js`);
    return;
  }

  currentLang = lang;

  // Atualiza o atributo lang do HTML (importante para acessibilidade e SEO)
  document.documentElement.lang = lang;

  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  // Atualiza o estado dos botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}


/* ─────────────────────────────────────────
   5. FORMULÁRIO DE CONTATO
───────────────────────────────────────── */

/**
 * Processa o envio do formulário de contato.
 *
 * Para integrar com um serviço real, substitua o alert
 * por uma das opções abaixo:
 *
 * Opção A — Formspree (sem back-end):
 *   Altere o action do <form> para:
 *   <form action="https://formspree.io/f/SEU_ID" method="POST">
 *   e remova o onsubmit e este handler.
 *
 * Opção B — EmailJS:
 *   https://www.emailjs.com/docs/sdk/send/
 *   emailjs.send('service_id', 'template_id', formData);
 *
 * Opção C — WhatsApp direto:
 *   const msg = encodeURIComponent(`Nome: ${nome}\nMensagem: ${mensagem}`);
 *   window.open(`https://wa.me/55SEUNUMERO?text=${msg}`);
 *
 * @param {Event} e - evento de submit do formulário
 */
function handleSubmit(e) {
  e.preventDefault();

  const form    = e.target;
  const btn     = form.querySelector('[type="submit"]');
  const original = btn.textContent;

  // Feedback visual durante o envio
  btn.textContent = '…';
  btn.disabled    = true;

  // ── Substitua este bloco pela lógica de envio real ──
  setTimeout(() => {
    alert('Mensagem enviada! Em breve entraremos em contato.');
    form.reset();
    btn.textContent = original;
    btn.disabled    = false;
  }, 800);
  // ────────────────────────────────────────────────────
}


/* ─────────────────────────────────────────
   INICIALIZAÇÃO
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Carrega PT por padrão
  setLang('pt');
});
