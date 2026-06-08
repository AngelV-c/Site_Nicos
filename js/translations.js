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

    /* Pizzas — Tradicionais */
    'p.calabresa.desc':       'Mussarela e calabresa',
    'p.bacon.desc':           'Mussarela e bacon',
    'p.quatroqueijos.desc':   'Mussarela, provolone, parmesão e catupiry',
    'p.palmito.desc':         'Mussarela e palmito',
    'p.frangocatupiry.desc':  'Mussarela, frango temperado e catupiry',
    'p.strogonoff.desc':      'Mussarela, frango com champignon, creme de leite e batata palha',
    'p.portuguesa.desc':      'Mussarela, presunto, ovo, cebola e azeitona',
    'p.napolitana.desc':      'Mussarela, tomate, parmesão e cebola',
    'p.lombocanadense.desc':  'Mussarela, lombo fatiado e catupiry',
    'p.baconbrocolis.desc':   'Mussarela, bacon, brócolis e catupiry',
    'p.alhooleo.desc':        'Mussarela, alho e óleo e parmesão',
    'p.nicos.desc':           'Mussarela, palmito, frango, calabresa e catupiry',
    'p.marguerita.desc':      'Mussarela, tomate, parmesão e manjericão fresco',
    'p.cincoqueijos.desc':    'Mussarela, parmesão, provolone, gorgonzola e catupiry',
    'p.milho.desc':           'Mussarela, milho e catupiry',
    'p.vegetariana.desc':     'Mussarela, milho, ervilha, palmito, brócolis e tomate',

    /* Pizzas — Especiais */
    'p.atum.desc':            'Mussarela, atum, cebola e azeitona',
    'p.pepperoni.desc':       'Mussarela, pepperoni e azeitona preta',
    'p.tomateseco.desc':      'Mussarela, tomate seco, parmesão fino e rúcula',
    'p.camaraocatupiry.desc': 'Mussarela, camarão temperado e catupiry',
    'p.camarao.desc':         'Mussarela, camarão temperado e azeitona preta',
    'p.gorgonzola.desc':      'Mussarela e gorgonzola',

    /* Pizzas — Doces */
    'p.chocolatepreto.desc':  'Mussarela, chocolate preto e leite condensado',
    'p.chocolatebranco.desc': 'Mussarela, chocolate branco e leite condensado',
    'p.brigadeiro.desc':      'Mussarela, chocolate preto, chocolate granulado e leite condensado',
    'p.prestigio.desc':       'Mussarela, chocolate preto, coco ralado e leite condensado',
    'p.sensacao.desc':        'Mussarela, chocolate preto ou branco, morangos e leite condensado',
    'p.bananacanela.desc':    'Mussarela, banana, canela com açúcar e leite condensado',
    'p.confete.desc':         'Mussarela, chocolate preto, confete e leite condensado',
    'p.charge.desc':          'Mussarela, chocolate preto, amendoim e leite condensado',
    'p.viuvanegra.desc':      'Mussarela, chocolate preto, chocolate granulado, morango e leite condensado',

    /* Salão — Especiais */
    's.esp.sequencia.desc':    'Camarão ao bafo, camarão grelhado, camarão ao alho e óleo, camarão soltinho, risoto de camarão, fritas, bolinho de camarão e pirão de peixe',
    's.esp.setedelicias.desc': 'Lula a dorê, camarão soltinho, isca de peixe, bolinho de bacalhau, bolinho de siri, bolinho de camarão, bolinho de peixe e fritas',
    's.esp.deliciaspraia.desc':'Lula a dorê, isca de peixe, camarão soltinho, isca de frango, isca de mignon e batata frita',
    's.esp.lagosta.desc':      'Lagosta grelhada, camarão grelhado, côngrio grelhado, arroz branco, arroz a grega, batata soutê e pirão de peixe',

    /* Salão — Petiscos */
    's.pet.bolinhocaramao.desc':  '6 unidades',
    's.pet.bolinhosiri.desc':     '6 unidades',
    's.pet.bandejamista.desc':    'Polenta frita, isca de frango, contra-filé e fritas',
    's.pet.bolinhobacalhau.desc': '6 unidades',
    's.pet.bolinhopeixe.desc':    '6 unidades',
    's.pet.ostra.desc':           '12 unidades',
    's.pet.bandejamariscal.desc': 'Isca de peixe, camarão soltinho e fritas',

    /* Salão — Camarões */
    's.cam.nicos.desc':        'Camarão e linguado à milanesa, arroz à grega, batata frita, pirão de peixe e bananas à milanesa',
    's.cam.grelhado.desc':     'Camarão grelhado, molho de camarão, arroz branco, salada mista, batata soutê e pirão de peixe',
    's.cam.puntadeleste.desc': 'Camarões flambados com molho branco, azeitona, champignon, presunto, arroz branco, batata soutê e pirão de peixe',
    's.cam.strogonoff.desc':   'Camarões puxados na manteiga com creme de leite, ketchup, mostarda, champignon, arroz branco, batata frita e pirão de peixe',

    /* Salão — Peixes */
    's.pei.linguadotropical.desc': 'Linguado grelhado, molho com camarões, alcaparras, abacaxi e maçã ao creme de leite. Arroz branco, batata soutê e pirão de peixe',
    's.pei.linguadobelle.desc':    'Linguado grelhado, molho com camarões na manteiga, champignon, alcaparras e palmito. Arroz branco, batata soutê e pirão de peixe',
    's.pei.linguadomolho.desc':    'Linguado grelhado, molho de camarão, arroz branco, batata frita e pirão de peixe',
    's.pei.anchovachapa.desc':     'Anchova grelhada, arroz branco, batata soutê e pirão de peixe',
    's.pei.peixenicos.desc':       'Linguado a dorê com recheio de molho de camarão e palmito, gratinado com molho branco e catupiry, arroz branco, batata soutê e pirão de peixe',
    's.pei.salmamaracuja.desc':    'Salmão grelhado, molho com maracujá, arroz branco, batata soutê e pirão de peixe',
    's.pei.salmaocamarao.desc':    'Salmão grelhado, molho de camarão, arroz branco, batata frita e pirão de peixe',
    's.pei.polvo.desc':            'Polvo no azeite de oliva com lula, camarão e mariscos puxados no shoyu, arroz branco, batata soutê e pirão de peixe',
    's.pei.salmaoalcaparras.desc': 'Salmão grelhado, alcaparras puxadas na manteiga, arroz branco, batata soutê e pirão de peixe',
    's.pei.congriobelle.desc':     'Côngrio grelhado, molho com camarão na manteiga, champignon, alcaparras e palmito, arroz branco, batata soutê e pirão de peixe',
    's.pei.congrioport.desc':      'Côngrio grelhado, molho com cebola, pimentões, azeitona, batata, tomate e ovo ao azeite de oliva, arroz branco e pirão de peixe',
    's.pei.congriobaden.desc':     'Côngrio grelhado, molho branco com bacon e temperos especiais, arroz branco, batata soutê e pirão de peixe',
    's.pei.moqueca.desc':          'Camarão, peixe, lula e marisco ao azeite de oliva com leite de coco, dendê e pimentão, arroz branco, purê de batata e pirão de peixe',
    's.pei.anchovaesp.desc':       'Anchova grelhada, camarões na manteiga, champignon, alcaparras e palmito, arroz branco, legumes soutê e pirão de peixe',
    's.pei.filepeixe.desc':        'Peixe à milanesa, molho de camarão, arroz branco, batata frita e pirão de peixe',
    's.pei.garoupa.desc':          'Garoupa grelhada, camarões na manteiga, champignon, alcaparras e palmito, arroz branco, batata soutê e pirão de peixe',
    's.pei.paella.desc':           'Peixe, camarão, lula, marisco, pimentões e ervilha. Com arroz e pirão de peixe',

    /* Salão — Carnes */
    's.car.filemadeira.desc':  'Mignon grelhado, molho madeira com champignon e ervilhas, arroz branco e purê de batata',
    's.car.fileparm.desc':     'Mignon recheado com queijo e presunto, gratinado ao molho sugo, arroz branco e batata frita',
    's.car.picanha.desc':      'Picanha grelhada com cebola, arroz com alho, feijão, polenta frita, farofa e banana milanesa',
    's.car.contrafile.desc':   'Contra filé grelhado com cebola, arroz branco, feijão, batata frita e farofa',
    's.car.filemilanesa.desc': 'Filé mignon milanesa, arroz branco e batata frita',

    /* Salão — Frango */
    's.fra.saudade.desc':      'Frango ou carne grelhada, arroz branco, feijão, batata frita e ovo frito',
    's.fra.frangobaden.desc':  'Frango grelhado, molho branco com bacon, arroz branco e batata soutê',
    's.fra.frangocrocante.desc':'Frango empanado na farinha de panko, arroz branco, batata frita e banana milanesa',
    's.fra.frangoparm.desc':   'Frango recheado com queijo e presunto, gratinado com molho sugo, arroz branco e batata frita',
    's.fra.frangogrel.desc':   'Frango grelhado, milho puxado na manteiga, arroz branco e batata frita',

    /* Salão — Massas */
    's.mas.talharimfrutos.desc': 'Camarão, lula e marisco puxados em tempero com molho branco',
    's.mas.talharimalfredo.desc':'Creme de leite na manteiga com queijo parmesão',
    's.mas.risoto.desc':         'Camarão, peixe, lula e marisco puxados ao leite de coco com molho sugo',
    's.mas.spagfunghi.desc':     'Tiras de mignon ao molho branco e funghi',
    's.mas.spagcasa.desc':       'Salmão cozido ao molho de tomate e leite de coco',

    /* Salão — Vegetariano */
    's.veg.moquecapalmito.desc': 'Palmito puxado no azeite de oliva e leite de coco, dendê e pimentão, arroz branco, purê de batata e farofa',
    's.veg.legumes4q.desc':      'Parmesão, provolone, mussarela e gorgonzola com molho branco, brócolis, cenoura, ervilha, milho verde, palmito e champignon',

    /* Salão — Lanches */
    's.lan.burguresp.desc': 'Hambúrguer, calabresa, ovo, presunto, cheddar, tomate, alface, cebola roxa e molho especial',
    's.lan.cheddar.desc':   'Hambúrguer, presunto e cheddar. Acompanha fritas',
    's.lan.gales.desc':     'Frango grelhado, presunto, queijo, alface, tomate e cebola roxa',
    's.lan.colizeu.desc':   'Mignon grelhado, presunto, queijo, alface, tomate e molho barbecue',
    's.lan.turbo.desc':     'Hambúrguer, ovo, alface, tomate, cebola roxa e molho especial',
    's.lan.smash.desc':     'Hambúrguer, presunto, queijo e bacon. Acompanha fritas',
    's.lan.mariscal.desc':  'Mignon milanesa, presunto, queijo, tomate, alface, cebola caramelizada e molho especial',

    /* Salão — Kids */
    's.kid.papaleguas.desc': 'Filé de frango grelhado, arroz e purê de batata',
    's.kid.ben10.desc':      'Filé mignon grelhado, arroz branco e batata frita',
    's.kid.chapeuzinho.desc':'Espaguete ao molho sugo',

    /* Salão — Bebidas */
    's.beb.cervejas.desc':    'Spaten R$23 · Brahma R$23 · Skol R$23 · Original R$27 · Heineken R$28 · Corona R$30',
    's.beb.artesanal.desc':   'Saint Bier Pilsen · Saint Bier in Natura',
    's.beb.longneck.desc':    'Malzbier · Heineken · Heineken Zero · Corona long neck R$17 · Cerveja lata (Skol, Brahma) R$12',
    's.beb.refri.desc':       'Água com/sem gás R$7 · H2O R$12 · Coca-Cola · Coca Zero · Sprite · Fanta · Tônica · Guaraná · Guaraná Zero R$12',
    's.beb.sucos.desc':       'Laranja · Abacaxi · Manga · Uva · Maracujá · Morango · Acerola · Acerola com Laranja · Limão · Abacaxi com Hortelã · Frutas Vermelhas · Limonada Suíça',
    's.beb.caipirinhas.desc': 'Smirnoff · Steinhaeger · Bacardi · Cachaça · Vinho · Saquê R$38 · Absolut R$48',
    's.beb.batidas.desc':     'Maracujá · Morango · Coco R$45 · Amarula R$50',
    's.beb.doses.desc':       'Vodka · Bacardi · Steinhaeger · Campari R$28 · Red Label R$38 · Black Label 12 anos · Chivas 12 anos R$44 · Jack Daniel\'s R$48 · Gin Tônica R$45',
    's.beb.vinhos.desc':      'Seleção de vinhos nacionais e importados',

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

    /* Pizzas — Traditional */
    'p.calabresa.desc':       'Mozzarella and calabrese sausage',
    'p.bacon.desc':           'Mozzarella and bacon',
    'p.quatroqueijos.desc':   'Mozzarella, provolone, parmesan and catupiry cream cheese',
    'p.palmito.desc':         'Mozzarella and hearts of palm',
    'p.frangocatupiry.desc':  'Mozzarella, seasoned chicken and catupiry cream cheese',
    'p.strogonoff.desc':      'Mozzarella, chicken with mushrooms, cream and shoestring potatoes',
    'p.portuguesa.desc':      'Mozzarella, ham, egg, onion and olives',
    'p.napolitana.desc':      'Mozzarella, tomato, parmesan and onion',
    'p.lombocanadense.desc':  'Mozzarella, sliced pork loin and catupiry cream cheese',
    'p.baconbrocolis.desc':   'Mozzarella, bacon, broccoli and catupiry cream cheese',
    'p.alhooleo.desc':        'Mozzarella, garlic and olive oil, and parmesan',
    'p.nicos.desc':           'Mozzarella, hearts of palm, chicken, calabrese sausage and catupiry cream cheese',
    'p.marguerita.desc':      'Mozzarella, tomato, parmesan and fresh basil',
    'p.cincoqueijos.desc':    'Mozzarella, parmesan, provolone, gorgonzola and catupiry cream cheese',
    'p.milho.desc':           'Mozzarella, corn and catupiry cream cheese',
    'p.vegetariana.desc':     'Mozzarella, corn, peas, hearts of palm, broccoli and tomato',

    /* Pizzas — Specials */
    'p.atum.desc':            'Mozzarella, tuna, onion and olives',
    'p.pepperoni.desc':       'Mozzarella, pepperoni and black olives',
    'p.tomateseco.desc':      'Mozzarella, sun-dried tomato, shaved parmesan and arugula',
    'p.camaraocatupiry.desc': 'Mozzarella, seasoned shrimp and catupiry cream cheese',
    'p.camarao.desc':         'Mozzarella, seasoned shrimp and black olives',
    'p.gorgonzola.desc':      'Mozzarella and gorgonzola',

    /* Pizzas — Sweet */
    'p.chocolatepreto.desc':  'Mozzarella, dark chocolate and condensed milk',
    'p.chocolatebranco.desc': 'Mozzarella, white chocolate and condensed milk',
    'p.brigadeiro.desc':      'Mozzarella, dark chocolate, chocolate sprinkles and condensed milk',
    'p.prestigio.desc':       'Mozzarella, dark chocolate, shredded coconut and condensed milk',
    'p.sensacao.desc':        'Mozzarella, dark or white chocolate, strawberries and condensed milk',
    'p.bananacanela.desc':    'Mozzarella, banana, cinnamon sugar and condensed milk',
    'p.confete.desc':         'Mozzarella, dark chocolate, candy confetti and condensed milk',
    'p.charge.desc':          'Mozzarella, dark chocolate, peanuts and condensed milk',
    'p.viuvanegra.desc':      'Mozzarella, dark chocolate, chocolate sprinkles, strawberry and condensed milk',

    /* Restaurant — Specials */
    's.esp.sequencia.desc':    'Steamed shrimp, grilled shrimp, garlic shrimp, loose shrimp, shrimp risotto, fries, shrimp fritter and fish broth',
    's.esp.setedelicias.desc': 'Fried squid rings, loose shrimp, fish strips, bacalhau fritter, crab fritter, shrimp fritter, fish fritter and fries',
    's.esp.deliciaspraia.desc':'Fried squid rings, fish strips, loose shrimp, chicken strips, mignon strips and french fries',
    's.esp.lagosta.desc':      'Grilled lobster, grilled shrimp, grilled congrio, white rice, Greek-style rice, sautéed potatoes and fish broth',

    /* Restaurant — Appetizers */
    's.pet.bolinhocaramao.desc':  '6 pieces',
    's.pet.bolinhosiri.desc':     '6 pieces',
    's.pet.bandejamista.desc':    'Fried polenta, chicken strips, sirloin steak and fries',
    's.pet.bolinhobacalhau.desc': '6 pieces',
    's.pet.bolinhopeixe.desc':    '6 pieces',
    's.pet.ostra.desc':           '12 pieces',
    's.pet.bandejamariscal.desc': 'Fish strips, loose shrimp and fries',

    /* Restaurant — Shrimp */
    's.cam.nicos.desc':        'Shrimp and sole à milanesa, Greek-style rice, french fries, fish broth and fried bananas',
    's.cam.grelhado.desc':     'Grilled shrimp, shrimp sauce, white rice, mixed salad, sautéed potatoes and fish broth',
    's.cam.puntadeleste.desc': 'Flambéed shrimp in white sauce with olives, mushrooms, ham, white rice, sautéed potatoes and fish broth',
    's.cam.strogonoff.desc':   'Shrimp sautéed in butter with cream, ketchup, mustard, mushrooms, white rice, french fries and fish broth',

    /* Restaurant — Fish */
    's.pei.linguadotropical.desc': 'Grilled sole with shrimp sauce, capers, pineapple and apple in cream. White rice, sautéed potatoes and fish broth',
    's.pei.linguadobelle.desc':    'Grilled sole with butter shrimp sauce, mushrooms, capers and hearts of palm. White rice, sautéed potatoes and fish broth',
    's.pei.linguadomolho.desc':    'Grilled sole, shrimp sauce, white rice, french fries and fish broth',
    's.pei.anchovachapa.desc':     'Grilled bluefish, white rice, sautéed potatoes and fish broth',
    's.pei.peixenicos.desc':       'Battered sole stuffed with shrimp sauce and hearts of palm, gratinéed with white sauce and catupiry, white rice, sautéed potatoes and fish broth',
    's.pei.salmamaracuja.desc':    'Grilled salmon with passion fruit sauce, white rice, sautéed potatoes and fish broth',
    's.pei.salmaocamarao.desc':    'Grilled salmon with shrimp sauce, white rice, french fries and fish broth',
    's.pei.polvo.desc':            'Octopus in olive oil with squid, shrimp and shellfish in soy sauce, white rice, sautéed potatoes and fish broth',
    's.pei.salmaoalcaparras.desc': 'Grilled salmon with capers sautéed in butter, white rice, sautéed potatoes and fish broth',
    's.pei.congriobelle.desc':     'Grilled congrio with butter shrimp sauce, mushrooms, capers and hearts of palm, white rice, sautéed potatoes and fish broth',
    's.pei.congrioport.desc':      'Grilled congrio with onion, bell peppers, olives, potato, tomato and egg in olive oil, white rice and fish broth',
    's.pei.congriobaden.desc':     'Grilled congrio with white sauce, bacon and special seasonings, white rice, sautéed potatoes and fish broth',
    's.pei.moqueca.desc':          'Shrimp, fish, squid and shellfish in olive oil with coconut milk, dendê oil and bell pepper, white rice, mashed potatoes and fish broth',
    's.pei.anchovaesp.desc':       'Grilled bluefish with butter shrimp, mushrooms, capers and hearts of palm, white rice, sautéed vegetables and fish broth',
    's.pei.filepeixe.desc':        'Battered fish, shrimp sauce, white rice, french fries and fish broth',
    's.pei.garoupa.desc':          'Grilled grouper with butter shrimp, mushrooms, capers and hearts of palm, white rice, sautéed potatoes and fish broth',
    's.pei.paella.desc':           'Fish, shrimp, squid, shellfish, bell peppers and peas. With rice and fish broth',

    /* Restaurant — Meats */
    's.car.filemadeira.desc':  'Grilled mignon with Madeira mushroom and pea sauce, white rice and mashed potatoes',
    's.car.fileparm.desc':     'Mignon stuffed with cheese and ham, gratinéed in tomato sauce, white rice and french fries',
    's.car.picanha.desc':      'Grilled picanha with onion, garlic rice, beans, fried polenta, farofa and fried banana',
    's.car.contrafile.desc':   'Grilled sirloin with onion, white rice, beans, french fries and farofa',
    's.car.filemilanesa.desc': 'Breaded mignon, white rice and french fries',

    /* Restaurant — Chicken */
    's.fra.saudade.desc':      'Grilled chicken or meat, white rice, beans, french fries and fried egg',
    's.fra.frangobaden.desc':  'Grilled chicken with white bacon sauce, white rice and sautéed potatoes',
    's.fra.frangocrocante.desc':'Panko-breaded chicken, white rice, french fries and fried banana',
    's.fra.frangoparm.desc':   'Chicken stuffed with cheese and ham, gratinéed in tomato sauce, white rice and french fries',
    's.fra.frangogrel.desc':   'Grilled chicken with buttered corn, white rice and french fries',

    /* Restaurant — Pasta */
    's.mas.talharimfrutos.desc': 'Shrimp, squid and shellfish sautéed in seasoning with white sauce',
    's.mas.talharimalfredo.desc':'Cream in butter with parmesan cheese',
    's.mas.risoto.desc':         'Shrimp, fish, squid and shellfish sautéed in coconut milk with tomato sauce',
    's.mas.spagfunghi.desc':     'Mignon strips in white sauce with porcini mushrooms',
    's.mas.spagcasa.desc':       'Cooked salmon in tomato sauce and coconut milk',

    /* Restaurant — Vegetarian */
    's.veg.moquecapalmito.desc': 'Hearts of palm sautéed in olive oil with coconut milk, dendê oil and bell pepper, white rice, mashed potatoes and farofa',
    's.veg.legumes4q.desc':      'Parmesan, provolone, mozzarella and gorgonzola with white sauce, broccoli, carrots, peas, corn, hearts of palm and mushrooms',

    /* Restaurant — Sandwiches */
    's.lan.burguresp.desc': 'Burger, calabrese sausage, egg, ham, cheddar, tomato, lettuce, red onion and special sauce',
    's.lan.cheddar.desc':   'Burger, ham and cheddar. Served with fries',
    's.lan.gales.desc':     'Grilled chicken, ham, cheese, lettuce, tomato and red onion',
    's.lan.colizeu.desc':   'Grilled mignon, ham, cheese, lettuce, tomato and barbecue sauce',
    's.lan.turbo.desc':     'Burger, egg, lettuce, tomato, red onion and special sauce',
    's.lan.smash.desc':     'Burger, ham, cheese and bacon. Served with fries',
    's.lan.mariscal.desc':  'Breaded mignon, ham, cheese, tomato, lettuce, caramelized onion and special sauce',

    /* Restaurant — Kids */
    's.kid.papaleguas.desc': 'Grilled chicken fillet, rice and mashed potatoes',
    's.kid.ben10.desc':      'Grilled mignon fillet, white rice and french fries',
    's.kid.chapeuzinho.desc':'Spaghetti in tomato sauce',

    /* Restaurant — Drinks */
    's.beb.cervejas.desc':    'Spaten R$23 · Brahma R$23 · Skol R$23 · Original R$27 · Heineken R$28 · Corona R$30',
    's.beb.artesanal.desc':   'Saint Bier Pilsen · Saint Bier in Natura',
    's.beb.longneck.desc':    'Malzbier · Heineken · Heineken Zero · Corona long neck R$17 · Canned beer (Skol, Brahma) R$12',
    's.beb.refri.desc':       'Still/sparkling water R$7 · H2O R$12 · Coca-Cola · Coca Zero · Sprite · Fanta · Tonic · Guaraná · Guaraná Zero R$12',
    's.beb.sucos.desc':       'Orange · Pineapple · Mango · Grape · Passion Fruit · Strawberry · Acerola · Acerola with Orange · Lemon · Pineapple with Mint · Mixed Berries · Swiss Lemonade',
    's.beb.caipirinhas.desc': 'Smirnoff · Steinhaeger · Bacardi · Cachaça · Wine · Sake R$38 · Absolut R$48',
    's.beb.batidas.desc':     'Passion Fruit · Strawberry · Coconut R$45 · Amarula R$50',
    's.beb.doses.desc':       'Vodka · Bacardi · Steinhaeger · Campari R$28 · Red Label R$38 · Black Label 12yr · Chivas 12yr R$44 · Jack Daniel\'s R$48 · Gin Tonic R$45',
    's.beb.vinhos.desc':      'Selection of domestic and imported wines',

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

    /* Pizzas — Tradicionales */
    'p.calabresa.desc':       'Mozzarella y salchicha calabresa',
    'p.bacon.desc':           'Mozzarella y bacon',
    'p.quatroqueijos.desc':   'Mozzarella, provolone, parmesano y catupiry',
    'p.palmito.desc':         'Mozzarella y palmito',
    'p.frangocatupiry.desc':  'Mozzarella, pollo sazonado y catupiry',
    'p.strogonoff.desc':      'Mozzarella, pollo con champiñones, crema de leche y papas paja',
    'p.portuguesa.desc':      'Mozzarella, jamón, huevo, cebolla y aceitunas',
    'p.napolitana.desc':      'Mozzarella, tomate, parmesano y cebolla',
    'p.lombocanadense.desc':  'Mozzarella, lomo de cerdo en lonchas y catupiry',
    'p.baconbrocolis.desc':   'Mozzarella, bacon, brócoli y catupiry',
    'p.alhooleo.desc':        'Mozzarella, ajo con aceite de oliva y parmesano',
    'p.nicos.desc':           'Mozzarella, palmito, pollo, calabresa y catupiry',
    'p.marguerita.desc':      'Mozzarella, tomate, parmesano y albahaca fresca',
    'p.cincoqueijos.desc':    'Mozzarella, parmesano, provolone, gorgonzola y catupiry',
    'p.milho.desc':           'Mozzarella, maíz y catupiry',
    'p.vegetariana.desc':     'Mozzarella, maíz, arvejas, palmito, brócoli y tomate',

    /* Pizzas — Especiales */
    'p.atum.desc':            'Mozzarella, atún, cebolla y aceitunas',
    'p.pepperoni.desc':       'Mozzarella, pepperoni y aceitunas negras',
    'p.tomateseco.desc':      'Mozzarella, tomate seco, parmesano fino y rúcula',
    'p.camaraocatupiry.desc': 'Mozzarella, camarones sazonados y catupiry',
    'p.camarao.desc':         'Mozzarella, camarones sazonados y aceitunas negras',
    'p.gorgonzola.desc':      'Mozzarella y gorgonzola',

    /* Pizzas — Dulces */
    'p.chocolatepreto.desc':  'Mozzarella, chocolate negro y leche condensada',
    'p.chocolatebranco.desc': 'Mozzarella, chocolate blanco y leche condensada',
    'p.brigadeiro.desc':      'Mozzarella, chocolate negro, granillo de chocolate y leche condensada',
    'p.prestigio.desc':       'Mozzarella, chocolate negro, coco rallado y leche condensada',
    'p.sensacao.desc':        'Mozzarella, chocolate negro o blanco, fresas y leche condensada',
    'p.bananacanela.desc':    'Mozzarella, banana, azúcar con canela y leche condensada',
    'p.confete.desc':         'Mozzarella, chocolate negro, confites de colores y leche condensada',
    'p.charge.desc':          'Mozzarella, chocolate negro, maní y leche condensada',
    'p.viuvanegra.desc':      'Mozzarella, chocolate negro, granillo de chocolate, fresa y leche condensada',

    /* Restaurante — Especiales */
    's.esp.sequencia.desc':    'Camarones al vapor, camarones a la plancha, camarones al ajillo, camarones sueltos, risotto de camarones, papas fritas, bolita de camarones y pirão de pescado',
    's.esp.setedelicias.desc': 'Calamares rebozados, camarones sueltos, tiras de pescado, bolita de bacalao, bolita de cangrejo, bolita de camarones, bolita de pescado y papas fritas',
    's.esp.deliciaspraia.desc':'Calamares rebozados, tiras de pescado, camarones sueltos, tiras de pollo, tiras de mignon y papas fritas',
    's.esp.lagosta.desc':      'Langosta a la plancha, camarones a la plancha, congrio a la plancha, arroz blanco, arroz a la griega, papas salteadas y pirão de pescado',

    /* Restaurante — Aperitivos */
    's.pet.bolinhocaramao.desc':  '6 unidades',
    's.pet.bolinhosiri.desc':     '6 unidades',
    's.pet.bandejamista.desc':    'Polenta frita, tiras de pollo, lomo de res y papas fritas',
    's.pet.bolinhobacalhau.desc': '6 unidades',
    's.pet.bolinhopeixe.desc':    '6 unidades',
    's.pet.ostra.desc':           '12 unidades',
    's.pet.bandejamariscal.desc': 'Tiras de pescado, camarones sueltos y papas fritas',

    /* Restaurante — Camarones */
    's.cam.nicos.desc':        'Camarones y lenguado rebozados, arroz a la griega, papas fritas, pirão de pescado y bananas rebozadas',
    's.cam.grelhado.desc':     'Camarones a la plancha, salsa de camarones, arroz blanco, ensalada mixta, papas salteadas y pirão de pescado',
    's.cam.puntadeleste.desc': 'Camarones flameados en salsa blanca con aceitunas, champiñones, jamón, arroz blanco, papas salteadas y pirão de pescado',
    's.cam.strogonoff.desc':   'Camarones salteados en mantequilla con crema, ketchup, mostaza, champiñones, arroz blanco, papas fritas y pirão de pescado',

    /* Restaurante — Pescados */
    's.pei.linguadotropical.desc': 'Lenguado a la plancha con salsa de camarones, alcaparras, piña y manzana en crema. Arroz blanco, papas salteadas y pirão de pescado',
    's.pei.linguadobelle.desc':    'Lenguado a la plancha con salsa de camarones en mantequilla, champiñones, alcaparras y palmito. Arroz blanco, papas salteadas y pirão de pescado',
    's.pei.linguadomolho.desc':    'Lenguado a la plancha, salsa de camarones, arroz blanco, papas fritas y pirão de pescado',
    's.pei.anchovachapa.desc':     'Anchoa a la plancha, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.peixenicos.desc':       'Lenguado rebozado relleno de salsa de camarones y palmito, gratinado con salsa blanca y catupiry, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.salmamaracuja.desc':    'Salmón a la plancha con salsa de maracuyá, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.salmaocamarao.desc':    'Salmón a la plancha con salsa de camarones, arroz blanco, papas fritas y pirão de pescado',
    's.pei.polvo.desc':            'Pulpo en aceite de oliva con calamares, camarones y mariscos salteados en salsa de soja, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.salmaoalcaparras.desc': 'Salmón a la plancha con alcaparras salteadas en mantequilla, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.congriobelle.desc':     'Congrio a la plancha con salsa de camarones en mantequilla, champiñones, alcaparras y palmito, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.congrioport.desc':      'Congrio a la plancha con salsa de cebolla, pimientos, aceitunas, papa, tomate y huevo en aceite de oliva, arroz blanco y pirão de pescado',
    's.pei.congriobaden.desc':     'Congrio a la plancha con salsa blanca, bacon y especias especiales, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.moqueca.desc':          'Camarones, pescado, calamares y mariscos en aceite de oliva con leche de coco, aceite de dendê y pimiento, arroz blanco, puré de papa y pirão de pescado',
    's.pei.anchovaesp.desc':       'Anchoa a la plancha con camarones en mantequilla, champiñones, alcaparras y palmito, arroz blanco, verduras salteadas y pirão de pescado',
    's.pei.filepeixe.desc':        'Pescado rebozado, salsa de camarones, arroz blanco, papas fritas y pirão de pescado',
    's.pei.garoupa.desc':          'Mero a la plancha con camarones en mantequilla, champiñones, alcaparras y palmito, arroz blanco, papas salteadas y pirão de pescado',
    's.pei.paella.desc':           'Pescado, camarones, calamares, mariscos, pimientos y arvejas. Con arroz y pirão de pescado',

    /* Restaurante — Carnes */
    's.car.filemadeira.desc':  'Mignon a la plancha con salsa Madeira de champiñones y arvejas, arroz blanco y puré de papa',
    's.car.fileparm.desc':     'Mignon relleno de queso y jamón, gratinado en salsa de tomate, arroz blanco y papas fritas',
    's.car.picanha.desc':      'Picanha a la plancha con cebolla, arroz con ajo, frijoles, polenta frita, farofa y banana rebozada',
    's.car.contrafile.desc':   'Lomo de res a la plancha con cebolla, arroz blanco, frijoles, papas fritas y farofa',
    's.car.filemilanesa.desc': 'Mignon rebozado, arroz blanco y papas fritas',

    /* Restaurante — Pollo */
    's.fra.saudade.desc':      'Pollo o carne a la plancha, arroz blanco, frijoles, papas fritas y huevo frito',
    's.fra.frangobaden.desc':  'Pollo a la plancha con salsa blanca de bacon, arroz blanco y papas salteadas',
    's.fra.frangocrocante.desc':'Pollo empanado con panko, arroz blanco, papas fritas y banana rebozada',
    's.fra.frangoparm.desc':   'Pollo relleno de queso y jamón, gratinado con salsa de tomate, arroz blanco y papas fritas',
    's.fra.frangogrel.desc':   'Pollo a la plancha con maíz salteado en mantequilla, arroz blanco y papas fritas',

    /* Restaurante — Pastas */
    's.mas.talharimfrutos.desc': 'Camarones, calamares y mariscos salteados en condimentos con salsa blanca',
    's.mas.talharimalfredo.desc':'Crema en mantequilla con queso parmesano',
    's.mas.risoto.desc':         'Camarones, pescado, calamares y mariscos salteados en leche de coco con salsa de tomate',
    's.mas.spagfunghi.desc':     'Tiras de mignon en salsa blanca con hongos porcini',
    's.mas.spagcasa.desc':       'Salmón cocido en salsa de tomate y leche de coco',

    /* Restaurante — Vegetariano */
    's.veg.moquecapalmito.desc': 'Palmito salteado en aceite de oliva y leche de coco, aceite de dendê y pimiento, arroz blanco, puré de papa y farofa',
    's.veg.legumes4q.desc':      'Parmesano, provolone, mozzarella y gorgonzola con salsa blanca, brócoli, zanahoria, arvejas, choclo, palmito y champiñones',

    /* Restaurante — Sándwiches */
    's.lan.burguresp.desc': 'Hamburguesa, salchicha calabresa, huevo, jamón, cheddar, tomate, lechuga, cebolla morada y salsa especial',
    's.lan.cheddar.desc':   'Hamburguesa, jamón y cheddar. Acompañado de papas fritas',
    's.lan.gales.desc':     'Pollo a la plancha, jamón, queso, lechuga, tomate y cebolla morada',
    's.lan.colizeu.desc':   'Mignon a la plancha, jamón, queso, lechuga, tomate y salsa barbecue',
    's.lan.turbo.desc':     'Hamburguesa, huevo, lechuga, tomate, cebolla morada y salsa especial',
    's.lan.smash.desc':     'Hamburguesa, jamón, queso y bacon. Acompañado de papas fritas',
    's.lan.mariscal.desc':  'Mignon rebozado, jamón, queso, tomate, lechuga, cebolla caramelizada y salsa especial',

    /* Restaurante — Kids */
    's.kid.papaleguas.desc': 'Filete de pollo a la plancha, arroz y puré de papa',
    's.kid.ben10.desc':      'Filete mignon a la plancha, arroz blanco y papas fritas',
    's.kid.chapeuzinho.desc':'Espagueti en salsa de tomate',

    /* Restaurante — Bebidas */
    's.beb.cervejas.desc':    'Spaten R$23 · Brahma R$23 · Skol R$23 · Original R$27 · Heineken R$28 · Corona R$30',
    's.beb.artesanal.desc':   'Saint Bier Pilsen · Saint Bier in Natura',
    's.beb.longneck.desc':    'Malzbier · Heineken · Heineken Zero · Corona long neck R$17 · Cerveza en lata (Skol, Brahma) R$12',
    's.beb.refri.desc':       'Agua con/sin gas R$7 · H2O R$12 · Coca-Cola · Coca Zero · Sprite · Fanta · Tónica · Guaraná · Guaraná Zero R$12',
    's.beb.sucos.desc':       'Naranja · Piña · Mango · Uva · Maracuyá · Fresa · Acerola · Acerola con Naranja · Limón · Piña con Menta · Frutos Rojos · Limonada Suiza',
    's.beb.caipirinhas.desc': 'Smirnoff · Steinhaeger · Bacardi · Cachaça · Vino · Sake R$38 · Absolut R$48',
    's.beb.batidas.desc':     'Maracuyá · Fresa · Coco R$45 · Amarula R$50',
    's.beb.doses.desc':       'Vodka · Bacardi · Steinhaeger · Campari R$28 · Red Label R$38 · Black Label 12 años · Chivas 12 años R$44 · Jack Daniel\'s R$48 · Gin Tónica R$45',
    's.beb.vinhos.desc':      'Selección de vinos nacionales e importados',

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
