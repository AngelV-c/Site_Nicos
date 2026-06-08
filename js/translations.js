/**
 * translations.js — Nico's Restaurante & Pizzaria
 *
 * Todas as traduções do site em PT, EN e ES.
 * Para editar um texto: encontre a chave e altere o valor.
 * Para adicionar um novo idioma: copie o bloco "pt" e traduza.
 *
 * As chaves correspondem ao atributo data-i18n no HTML.
 *
 * Exemplo de uso no HTML:
 *   <span data-i18n="hero.sub">Sabor à beira-mar</span>
 */

const translations = {

  /* ── PORTUGUÊS ──────────────────────────────────────────── */
  pt: {
    /* Navbar */
    'nav.about':    'Sobre',
    'nav.menu':     'Cardápio',
    'nav.gallery':  'Galeria',
    'nav.location': 'Localização',
    'nav.contact':  'Contato',

    /* Hero */
    'hero.eyebrow': 'Restaurante & Pizzaria · Bombinhas, SC',
    'hero.sub':     'Sabor à beira-mar',
    'hero.cta1':    'Ver Cardápio',
    'hero.cta2':    'Como Chegar',
    'hero.scroll':  'scroll',

    /* Info strip */
    'strip.address': 'Av. Água Marinha, 1204 — Mariscal, Bombinhas/SC',
    'strip.hours':   'Sex · Sáb · Dom · 10h–22h  |  Seg · Ter · Qui · 10h–17h',
    'strip.payment': 'Cartão · Pix · Dinheiro',

    /* Sobre */
    'sobre.eyebrow': 'Nossa história',
    'sobre.title':   'Tradição e sabor em Bombinhas',
    'sobre.since':   'Desde',
    'sobre.h1':      'Pratos no cardápio',
    'sobre.h2':      'Anos de experiência',
    'sobre.h3':      'Sabores de pizza',
    'sobre.h4':      'Avaliação no Google',

    /* Cardápio */
    'menu.eyebrow':       'Nosso Cardápio',
    'menu.title':         'Escolha o seu favorito',
    'menu.desc':          'Ingredientes frescos, receitas tradicionais',
    'menu.tab.all':       'Todos',
    'menu.tab.starters':  'Entradas',
    'menu.tab.pizzas':    'Pizzas',
    'menu.tab.pasta':     'Massas',
    'menu.tab.mains':     'Pratos Principais',
    'menu.tab.desserts':  'Sobremesas',
    'menu.tab.drinks':    'Bebidas',
    'menu.tag.starter':   'Entrada',
    'menu.tag.pizza':     'Pizza',

    /* Galeria */
    'gallery.eyebrow': 'Veja mais',
    'gallery.title':   'Galeria',

    /* Localização */
    'location.eyebrow':       'Venha nos visitar',
    'location.title':         'Onde estamos',
    'location.address_label': 'Endereço',
    'location.hours_label':   'Horário de Funcionamento',
    'location.contact_label': 'Contato',

    /* Dias da semana */
    'days.mon_fri':  'Seg – Sex',
    'days.sat':      'Sábado',
    'days.sun':      'Domingo',
    'days.holidays': 'Feriados',

    /* Contato */
    'contact.eyebrow': 'Fale conosco',
    'contact.title':   'Entre em contato',
    'contact.desc':    'Reservas, eventos ou dúvidas — estamos aqui para ajudar.',
    'contact.name':    'Nome',
    'contact.email':   'E-mail',
    'contact.phone':   'Telefone / WhatsApp',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send':    'Enviar Mensagem',
  },

  /* ── ENGLISH ────────────────────────────────────────────── */
  en: {
    /* Navbar */
    'nav.about':    'About',
    'nav.menu':     'Menu',
    'nav.gallery':  'Gallery',
    'nav.location': 'Location',
    'nav.contact':  'Contact',

    /* Hero */
    'hero.eyebrow': 'Restaurant & Pizzeria · Bombinhas, SC · Brazil',
    'hero.sub':     'Flavor by the sea',
    'hero.cta1':    'See Menu',
    'hero.cta2':    'Get Directions',
    'hero.scroll':  'scroll',

    /* Info strip */
    'strip.address': 'Av. Água Marinha, 1204 — Mariscal, Bombinhas/SC',
    'strip.hours':   'Fri · Sat · Sun · 10am–10pm  |  Mon · Tue · Thu · 10am–5pm',
    'strip.payment': 'Card · Pix · Cash',

    /* About */
    'sobre.eyebrow': 'Our story',
    'sobre.title':   'Tradition & flavor in Bombinhas',
    'sobre.since':   'Since',
    'sobre.h1':      'Menu items',
    'sobre.h2':      'Years of experience',
    'sobre.h3':      'Pizza flavors',
    'sobre.h4':      'Google rating',

    /* Menu */
    'menu.eyebrow':       'Our Menu',
    'menu.title':         'Choose your favorite',
    'menu.desc':          'Fresh ingredients, traditional recipes',
    'menu.tab.all':       'All',
    'menu.tab.starters':  'Starters',
    'menu.tab.pizzas':    'Pizzas',
    'menu.tab.pasta':     'Pasta',
    'menu.tab.mains':     'Main Courses',
    'menu.tab.desserts':  'Desserts',
    'menu.tab.drinks':    'Drinks',
    'menu.tag.starter':   'Starter',
    'menu.tag.pizza':     'Pizza',

    /* Gallery */
    'gallery.eyebrow': 'See more',
    'gallery.title':   'Gallery',

    /* Location */
    'location.eyebrow':       'Come visit us',
    'location.title':         'Where we are',
    'location.address_label': 'Address',
    'location.hours_label':   'Opening Hours',
    'location.contact_label': 'Contact',

    /* Days */
    'days.mon_fri':  'Mon – Fri',
    'days.sat':      'Saturday',
    'days.sun':      'Sunday',
    'days.holidays': 'Holidays',

    /* Contact */
    'contact.eyebrow': 'Get in touch',
    'contact.title':   'Contact us',
    'contact.desc':    'Reservations, events or questions — we\'re here to help.',
    'contact.name':    'Name',
    'contact.email':   'E-mail',
    'contact.phone':   'Phone / WhatsApp',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send':    'Send Message',
  },

  /* ── ESPAÑOL ────────────────────────────────────────────── */
  es: {
    /* Navbar */
    'nav.about':    'Sobre',
    'nav.menu':     'Menú',
    'nav.gallery':  'Galería',
    'nav.location': 'Ubicación',
    'nav.contact':  'Contacto',

    /* Hero */
    'hero.eyebrow': 'Restaurante & Pizzería · Bombinhas, SC · Brasil',
    'hero.sub':     'Sabor junto al mar',
    'hero.cta1':    'Ver Menú',
    'hero.cta2':    'Cómo llegar',
    'hero.scroll':  'scroll',

    /* Info strip */
    'strip.address': 'Av. Água Marinha, 1204 — Mariscal, Bombinhas/SC',
    'strip.hours':   'Vie · Sáb · Dom · 10h–22h  |  Lun · Mar · Jue · 10h–17h',
    'strip.payment': 'Tarjeta · Pix · Efectivo',

    /* Sobre */
    'sobre.eyebrow': 'Nuestra historia',
    'sobre.title':   'Tradición y sabor en Bombinhas',
    'sobre.since':   'Desde',
    'sobre.h1':      'Platos en el menú',
    'sobre.h2':      'Años de experiencia',
    'sobre.h3':      'Sabores de pizza',
    'sobre.h4':      'Calificación en Google',

    /* Menú */
    'menu.eyebrow':       'Nuestro Menú',
    'menu.title':         'Elige tu favorito',
    'menu.desc':          'Ingredientes frescos, recetas tradicionales',
    'menu.tab.all':       'Todos',
    'menu.tab.starters':  'Entradas',
    'menu.tab.pizzas':    'Pizzas',
    'menu.tab.pasta':     'Pastas',
    'menu.tab.mains':     'Platos Principales',
    'menu.tab.desserts':  'Postres',
    'menu.tab.drinks':    'Bebidas',
    'menu.tag.starter':   'Entrada',
    'menu.tag.pizza':     'Pizza',

    /* Galería */
    'gallery.eyebrow': 'Ver más',
    'gallery.title':   'Galería',

    /* Ubicación */
    'location.eyebrow':       'Visítanos',
    'location.title':         'Dónde estamos',
    'location.address_label': 'Dirección',
    'location.hours_label':   'Horario de Atención',
    'location.contact_label': 'Contacto',

    /* Días */
    'days.mon_fri':  'Lun – Vie',
    'days.sat':      'Sábado',
    'days.sun':      'Domingo',
    'days.holidays': 'Feriados',

    /* Contacto */
    'contact.eyebrow': 'Háblanos',
    'contact.title':   'Contáctanos',
    'contact.desc':    'Reservas, eventos o consultas — estamos aquí para ayudarte.',
    'contact.name':    'Nombre',
    'contact.email':   'Correo',
    'contact.phone':   'Teléfono / WhatsApp',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send':    'Enviar Mensaje',
  },
};
