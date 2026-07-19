const gcWorldLaws = [
  {
    title: 'Materia viva comestible',
    body: 'Todo ser forma parte del Gran Ciclo de la Cocina. El entorno no es biología clásica, sino gastronomía viva.'
  },
  {
    title: 'La comida es ley',
    body: 'Religión, ciencia, guerra y política están construidas alrededor del acto de cocinar, consumir o impedir que otros coman.'
  },
  {
    title: 'Evolución hacia el plato',
    body: 'Los seres no evolucionan hacia la fuerza abstracta, sino hacia ingredientes, platos, técnicas y roles culinarios.'
  },
  {
    title: 'Supervivencia como sacrificio',
    body: 'Morir no quita experiencia, pero sí ingredientes valiosos. El hambre y el costo de vivir son el verdadero castigo.'
  }
];

const gcEmpires = [
  {
    name: "Imperio d'Haute",
    cuisine: 'Cocina Francesa',
    idea: 'Perfección del arte',
    lifestyle: 'Refinamiento, nobleza y ceremonia',
    history: 'Renacimiento · Revolución Francesa',
    tags: ['Arte', 'Élite', 'Etiqueta']
  },
  {
    name: 'Dinastía Wok',
    cuisine: 'Cocina China',
    idea: 'Equilibrio eterno',
    lifestyle: 'Tradición, filosofía y estabilidad',
    history: 'Antigüedad · Tres Reinos',
    tags: ['Equilibrio', 'Tradición', 'Disciplina']
  },
  {
    name: 'Sultanato de Sahan',
    cuisine: 'Cocina Turca',
    idea: 'Fusión entre mundos',
    lifestyle: 'Riqueza comercial y mezcla cultural',
    history: 'Edad Media · Imperio Otomano',
    tags: ['Mercado', 'Puente', 'Opulencia']
  },
  {
    name: 'Confederación Masala',
    cuisine: 'Cocina India',
    idea: 'Espiritualidad del sabor',
    lifestyle: 'Resistencia, rito y sentido interior',
    history: 'Época Védica · Colonialismo',
    tags: ['Especias', 'Espíritu', 'Resistencia']
  },
  {
    name: 'República Pasta di Vita',
    cuisine: 'Cocina Italiana',
    idea: 'Amor por la vida',
    lifestyle: 'Pasión, creatividad y reunión',
    history: 'Renacimiento · Unificación italiana',
    tags: ['Vida', 'Pasión', 'Mesa']
  }
];

const gcRevolutions = [
  {
    title: 'Revolución Francesa',
    body: 'Inspiración para un levantamiento contra autoridades culinarias corruptas y jerarquías del gusto.'
  },
  {
    title: 'Revolución Industrial',
    body: 'Maquinaria contra cocina artesanal. La eficiencia amenaza la memoria del alimento.'
  },
  {
    title: 'Revolución Científica',
    body: 'Los ingredientes se entienden como entidades vivas que pueden reescribirse, manipularse o volverse armas.'
  },
  {
    title: 'Gastronomía Molecular',
    body: 'Chefs alquimistas rompen texturas, apariencias y reglas. Aquí nace la cocina como transgresión.'
  },
  {
    title: 'Slow Food / Retorno a la raíz',
    body: 'Respuesta contra la industrialización total. Cocinar vuelve a ser identidad, comunidad y resistencia.'
  }
];

const gcTechniques = [
  {
    id: 'instantaneos',
    kicker: 'Instantáneos',
    title: 'Velocidad extrema y adaptabilidad',
    body: 'Estilo de combate rápido y volátil, basado en sellados, evaporaciones y movimientos casi teleportantes. Resuelve el peligro antes de que el mundo pueda procesarlo.',
    weapon: 'Bastón de Sellado',
    summon: 'Maruchan Viviente',
    visual: 'Vapor rápido, distorsión y cuerpo que parece rearmarse en un segundo',
    colors: ['rgba(120, 190, 214, 0.28)', 'rgba(240, 168, 95, 0.16)']
  },
  {
    id: 'salteados',
    kicker: 'Salteados y Fritos',
    title: 'Aceite, fuego y caos controlado',
    body: 'Ataques giratorios, movilidad aérea y golpes con gran rango. La técnica abraza el riesgo del calor y convierte el movimiento en danza marcial ardiente.',
    weapon: 'Sartén de Aceite',
    summon: 'Gran Wok',
    visual: 'Torbellinos de fuego y grasa con estela naranja ardiente',
    colors: ['rgba(200, 76, 47, 0.25)', 'rgba(240, 168, 95, 0.20)']
  },
  {
    id: 'fermentados',
    kicker: 'Fermentados',
    title: 'Tiempo, maduración y acumulación',
    body: 'Lento al inicio, insoportable al final. Sus golpes no explotan de inmediato: fermentan debuffs, fatiga y presión constante sobre el oponente.',
    weapon: 'Empaque de Selladura',
    summon: 'Gran Jamón Curado',
    visual: 'Burbujas densas, hilos suspendidos y vapores espesos',
    colors: ['rgba(106, 191, 119, 0.22)', 'rgba(120, 190, 214, 0.14)']
  },
  {
    id: 'azucar',
    kicker: 'Fiesta de Azúcar',
    title: 'Encanto, exceso y traición brillante',
    body: 'La dulzura atrae, atrapa y engaña. La escuela usa texturas pegajosas, señuelos visuales y golpes que ocultan fuerza detrás de lo adorable.',
    weapon: 'Palo de Miel',
    summon: 'Manzana Caramelizada',
    visual: 'Cristales, colores pastel y caramelo endurecido',
    colors: ['rgba(255, 190, 214, 0.22)', 'rgba(240, 168, 95, 0.18)']
  },
  {
    id: 'salsas',
    kicker: 'Salsas y Condimentos',
    title: 'Adaptación total y control de terreno',
    body: 'No ataca igual dos veces. Pinta el aire, modifica el arma y transforma la arena de combate en una receta improvisada a favor del usuario.',
    weapon: 'Pincel de Especias',
    summon: 'Gran Mortero Ancestral',
    visual: 'Pinceladas aromáticas y constelaciones de condimentos',
    colors: ['rgba(120, 190, 214, 0.22)', 'rgba(106, 191, 119, 0.18)']
  },
  {
    id: 'tradicional',
    kicker: 'Cocina Tradicional',
    title: 'Técnica ancestral y precisión sobria',
    body: 'No necesita florituras. Se apoya en paradas, contragolpes y una fuerza terrenal que defiende la memoria del alimento original.',
    weapon: 'Katana de Masa Madre',
    summon: 'Pan Primordial',
    visual: 'Calor de horno antiguo, tierra y firmeza',
    colors: ['rgba(240, 168, 95, 0.18)', 'rgba(106, 191, 119, 0.15)']
  },
  {
    id: 'cortes',
    kicker: 'Cortes',
    title: 'Velocidad, combos y distribución perfecta',
    body: 'El arte de dividir la materia viva con exactitud quirúrgica. Favorece cadenas de golpes, movilidad fluida y ráfagas cortantes.',
    weapon: 'Artillería de Cuchillos',
    summon: 'Lluvia de cuchillos ceremoniales',
    visual: 'Relámpagos metálicos y líneas de corte fugaces',
    colors: ['rgba(255, 255, 255, 0.16)', 'rgba(120, 190, 214, 0.14)']
  },
  {
    id: 'silvestre',
    kicker: 'Silvestre',
    title: 'Instinto puro y supervivencia brutal',
    body: 'Sin armas formales, sin filtro y sin promesas de civilidad. Usa el cuerpo, el entorno y el impulso enemigo como materia de combate.',
    weapon: 'Manos, garras y momentum',
    summon: 'Aliados silvestres temporales',
    visual: 'Raíces, viento salvaje y siluetas animales',
    colors: ['rgba(106, 191, 119, 0.24)', 'rgba(240, 168, 95, 0.12)']
  }
];

const gcEcosystems = [
  {
    name: 'Bosque de Hierbas Eternas',
    desc: 'Bosque templado donde árboles, hongos y raíces funcionan como especia, medicina y amenaza viva.',
    creatures: ['Bestias aromáticas', 'Hongos sapientes', 'Raíces móviles'],
    resources: ['Especias raras', 'Medicinas naturales', 'Potenciadores de platos'],
    tags: ['Bosque', 'Hierbas', 'Recolecta']
  },
  {
    name: 'Tierras Caldosas',
    desc: 'Llanuras y charcas donde el suelo hierve lentamente y las bases de sopa brotan del terreno.',
    creatures: ['Ranas de caldo', 'Pez-sopa', 'Plantas de fideos silvestres'],
    resources: ['Bases de sopa', 'Ingredientes calientes', 'Recetas de resistencia'],
    tags: ['Caldos', 'Líquidos', 'Calor']
  },
  {
    name: 'Imperio de los Quesos',
    desc: 'Montañas endurecidas, mohos conscientes y cuevas de fermentación antigua.',
    creatures: ['Ratones de parmesano', 'Carneros de roquefort', 'Colonias de moho viviente'],
    resources: ['Fermentados', 'Resistencia', 'Materias maduras'],
    tags: ['Queso', 'Montaña', 'Fermento']
  },
  {
    name: 'Páramo Caramelizado',
    desc: 'Desierto brillante de azúcar y caramelo donde la belleza se vuelve dependencia y veneno.',
    creatures: ['Escarabajos de miel', 'Lombrices de regaliz', 'Flores de algodón de azúcar'],
    resources: ['Azúcares especiales', 'Velocidad', 'Cebo y trampa'],
    tags: ['Dulce', 'Desierto', 'Adicción']
  },
  {
    name: 'Marinaje de las Profundidades',
    desc: 'Océano oscuro de salsas y caldos salinos con fauna agresiva adaptada a sabores extremos.',
    creatures: ['Tiburones de soya', 'Medusas de vinagre', 'Crustáceos de mostaza'],
    resources: ['Salsas únicas', 'Ataque', 'Ingredientes raros'],
    tags: ['Mar', 'Salsas', 'Riesgo']
  },
  {
    name: 'Praderas de Pan Vivo',
    desc: 'Campos dorados donde los panes tienen ciclo de crecimiento y la energía dura más que la razón.',
    creatures: ['Lobos de masa madre', 'Golems de centeno', 'Aves de miga'],
    resources: ['Construcción comestible', 'Energía duradera', 'Rutas seguras'],
    tags: ['Pan', 'Pradera', 'Energía']
  },
  {
    name: 'Selva de los Frutos Prohibidos',
    desc: 'Jungla exuberante donde cada fruta puede curarte, intoxicarte o alterar el combate.',
    creatures: ['Monos de plátano amargo', 'Dragones de lichi', 'Lianas de granada'],
    resources: ['Frutas raras', 'Venenos', 'Curaciones'],
    tags: ['Frutas', 'Selva', 'Mutación']
  },
  {
    name: 'Cordillera del Fuego Glaseado',
    desc: 'Volcanes que expulsan azúcar quemada, vainilla y postres capaces de derretir armaduras.',
    creatures: ['Salamandras de caramelo', 'Cóndores de crema tostada', 'Lagartos de canela'],
    resources: ['Postres raros', 'Magia térmica', 'Recursos de alto nivel'],
    tags: ['Volcán', 'Postres', 'Fuego']
  }
];

const gcCivilizations = [
  { name: 'Calderos de la Raíz', base: 'Cocina Tradicional', philosophy: 'Recetas sagradas y clanes familiares', relation: 'Respetan poco, comparten menos', tags: ['Tradición', 'Clanes', 'Memoria'] },
  { name: 'Sagrada Llama Roja', base: 'Cocina Picante', philosophy: 'La vida es combustión y resistencia', relation: 'Temidos por su agresividad', tags: ['Picante', 'Fuego', 'Furia'] },
  { name: 'Hijos del Abismo Salado', base: 'Mariscos', philosophy: 'Toda vida proviene de la sal y la profundidad', relation: 'Comercian con quien respeta el mar', tags: ['Sal', 'Océano', 'Misterio'] },
  { name: 'Artífices de Vapor', base: 'Cocina Molecular', philosophy: 'La ciencia culinaria como religión de pureza', relation: 'Desprecian lo tradicional', tags: ['Vapor', 'Ciencia', 'Alquimia'] },
  { name: 'Vía del Horno Roto', base: 'Cocina Italiana', philosophy: 'Reparar una república caída mediante la mesa', relation: 'Ruinas con deseo de reconstrucción', tags: ['Horno', 'Ruina', 'Arte'] },
  { name: 'Refugio de la Mesa Humilde', base: 'Cocina Hogareña', philosophy: 'La comida como hogar portátil', relation: 'Queridos pero poco expansivos', tags: ['Hogar', 'Comunidad', 'Cuidado'] },
  { name: 'Cortesanos de la Sopa de Mantequilla', base: 'Cocina Francesa', philosophy: 'Comer como ceremonia y jerarquía', relation: 'Altivos y culturalmente selectivos', tags: ['Corte', 'Etiqueta', 'Exceso'] },
  { name: 'Senda del Kashi No Kami', base: 'Comida Japonesa', philosophy: 'Simplicidad, karma culinario y respeto', relation: 'Pacíficos hasta ser ofendidos', tags: ['Equilibrio', 'Honor', 'Filo'] },
  { name: 'Sabios de la Sazón Errante', base: 'Comida India', philosophy: 'Dominar sentidos para acercarse a la verdad', relation: 'Pacíficos pero complejos', tags: ['Especias', 'Iluminación', 'Ritual'] },
  { name: 'Tribu del Caldero Silvestre', base: 'Cocina Silvestre', philosophy: 'Vivir con lo que el mundo ofrece hoy', relation: 'Protegen zonas vírgenes y chocan con el progreso', tags: ['Naturaleza', 'Nómadas', 'Instinto'] },
  { name: 'Banquetes de lo Prohibido', base: 'Cocina Exótica', philosophy: 'Lo desconocido expande mente y paladar', relation: 'Temidos por sus festivales mortales', tags: ['Prohibido', 'Riesgo', 'Límite'] },
  { name: 'Confederación del Azúcar Eterna', base: 'Dulces', philosophy: 'El placer como herramienta política', relation: 'Manipulan con adicción y ofrendas', tags: ['Dulce', 'Dependencia', 'Encanto'] }
];

const gcMapDescriptions = {
  hero: 'La portada establece el tono: cocina como campo de batalla, estructura social y motor existencial del mundo.',
  fundamentos: 'Resume las leyes universales del mundo y fija por qué el alimento aquí es religión, ciencia y guerra.',
  imperios: 'Presenta los cinco grandes imperios gastronómicos y su idea de poder culinario.',
  revolucion: 'Explica el conflicto entre tradición, industria, alienación y revolución del sabor.',
  pilares: 'Muestra las ocho técnicas base como árboles de combate y formas de identidad jugable.',
  ecosistemas: 'Detalla biomas culinarios, recursos, criaturas e ingredientes clave del mapa del juego.',
  civilizaciones: 'Expone facciones nacidas de filosofías culinarias, estilos de vida y formas de cocinar.',
  metroidvania: 'Resume el loop principal: explorar, cosechar, cocinar, perder y volver a abrir rutas.',
  cierre: 'Cierra el concepto con la propuesta única del proyecto y su promesa estética y filosófica.'
};

function createCard(html) {
  const div = document.createElement('article');
  div.innerHTML = html.trim();
  return div.firstElementChild;
}

function renderWorldLaws() {
  const container = document.getElementById('gcLawStrip');
  if (!container) return;
  gcWorldLaws.forEach((law) => {
    container.appendChild(createCard(`
      <article class="gc-law-card">
        <strong>${law.title}</strong>
        <p>${law.body}</p>
      </article>
    `));
  });
}

function renderEmpires() {
  const container = document.getElementById('gcEmpireGrid');
  if (!container) return;
  gcEmpires.forEach((empire) => {
    container.appendChild(createCard(`
      <article class="gc-empire-card">
        <h3>${empire.name}</h3>
        <p><strong>${empire.cuisine}</strong></p>
        <p>${empire.idea}</p>
        <p>${empire.lifestyle}</p>
        <p>${empire.history}</p>
        <div class="gc-empire-badges">
          ${empire.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `));
  });
}

function renderRevolutions() {
  const container = document.getElementById('gcRevolutionTimeline');
  if (!container) return;
  gcRevolutions.forEach((item) => {
    container.appendChild(createCard(`
      <article class="gc-revolution-card">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </article>
    `));
  });
}

function renderTechniques() {
  const list = document.getElementById('gcTechniqueList');
  const art = document.getElementById('gcTechniqueArt');
  const kicker = document.getElementById('gcTechniqueKicker');
  const title = document.getElementById('gcTechniqueTitle');
  const body = document.getElementById('gcTechniqueBody');
  const weapon = document.getElementById('gcTechniqueWeapon');
  const summon = document.getElementById('gcTechniqueSummon');
  const visual = document.getElementById('gcTechniqueVisual');
  if (!list || !art) return;

  function applyTechnique(technique) {
    kicker.textContent = technique.kicker;
    title.textContent = technique.title;
    body.textContent = technique.body;
    weapon.textContent = technique.weapon;
    summon.textContent = technique.summon;
    visual.textContent = technique.visual;
    art.style.background = `radial-gradient(circle at 30% 25%, ${technique.colors[0]}, transparent 35%), radial-gradient(circle at 72% 68%, ${technique.colors[1]}, transparent 28%), linear-gradient(180deg, rgba(42, 22, 16, 0.95), rgba(18, 12, 10, 0.96))`;
  }

  gcTechniques.forEach((technique, index) => {
    const button = createCard(`
      <button type="button" class="gc-technique-button ${index === 0 ? 'is-active' : ''}">
        <strong>${technique.kicker}</strong>
        <small>${technique.title}</small>
      </button>
    `);
    button.addEventListener('click', () => {
      list.querySelectorAll('.gc-technique-button').forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      applyTechnique(technique);
    });
    list.appendChild(button);
  });

  applyTechnique(gcTechniques[0]);
}

function renderEcosystems() {
  const container = document.getElementById('gcEcosystemGrid');
  if (!container) return;
  gcEcosystems.forEach((eco) => {
    container.appendChild(createCard(`
      <article class="gc-ecosystem-card">
        <h3>${eco.name}</h3>
        <p>${eco.desc}</p>
        <ul>
          <li><strong>Criaturas:</strong> ${eco.creatures.join(', ')}</li>
          <li><strong>Recursos:</strong> ${eco.resources.join(', ')}</li>
        </ul>
        <div class="gc-ecosystem-badges">
          ${eco.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `));
  });
}

function renderCivilizations() {
  const container = document.getElementById('gcCivilizationTrack');
  if (!container) return;
  gcCivilizations.forEach((civil) => {
    container.appendChild(createCard(`
      <article class="gc-civil-card">
        <h3>${civil.name}</h3>
        <p><strong>${civil.base}</strong></p>
        <p>${civil.philosophy}</p>
        <p>${civil.relation}</p>
        <div class="gc-civil-badges">
          ${civil.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `));
  });
}

function setupMapNavigation() {
  const nodes = document.querySelectorAll('.gc-map-node');
  const sections = document.querySelectorAll('.gc-section');
  const mapDescription = document.getElementById('gcMapDescription');
  const indexLinks = document.querySelectorAll('.gc-index a');

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      const targetId = node.dataset.target;
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      nodes.forEach((node) => node.classList.toggle('is-active', node.dataset.target === id));
      indexLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
      if (mapDescription && gcMapDescriptions[id]) {
        mapDescription.textContent = gcMapDescriptions[id];
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: '-10% 0px -35% 0px'
  });

  sections.forEach((section) => observer.observe(section));
}

function renderLoopLine() {
  const container = document.getElementById('gcLoopLine');
  if (!container) return;
  const steps = [
    'Descubrir ruta cerrada',
    'Conseguir técnica o ingrediente clave',
    'Cocinar / forjar nueva respuesta',
    'Volver y reabrir el mapa'
  ];
  container.innerHTML = steps.map((step, index) => `
    <div class="gc-loop-step" style="padding:0.9rem 1rem; display:grid; gap:0.3rem; margin-top:1rem;">
      <span class="gc-section-tag">0${index + 1}</span>
      <strong>${step}</strong>
    </div>
  `).join('');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
  container.style.gap = '0.8rem';
}

document.addEventListener('DOMContentLoaded', () => {
  renderWorldLaws();
  renderEmpires();
  renderRevolutions();
  renderTechniques();
  renderEcosystems();
  renderCivilizations();
  renderLoopLine();
  setupMapNavigation();
});
