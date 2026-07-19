
const WAGONS = [
  { title: "Obertura", subtitle: "Visión general" },
  { title: "Pilares", subtitle: "Fundamento moral" },
  { title: "Naciones", subtitle: "Clanes y facciones" },
  { title: "Historia", subtitle: "Mito y capítulos" },
  { title: "Sistemas", subtitle: "Combate y reacciones" },
  { title: "Personajes", subtitle: "Fichas y preview" },
  { title: "Gacha", subtitle: "Monetización temática" },
  { title: "Endgame", subtitle: "Isla sin reino" },
  { title: "Roadmap", subtitle: "Versiones 1.0 a 1.6" },
  { title: "Cierre", subtitle: "Preparado para portafolio" }
];

const PRINCIPLES = [
  {
    tag: "01",
    title: "Juicio",
    body: "Se traduce en estructura política, sentencias, equilibrio y autoridad. El clan arcano lo encarna como poder frío y disciplinado."
  },
  {
    tag: "02",
    title: "Perdón",
    body: "La piedad se vuelve un ideal ambiguo: bondad, orgullo y superioridad convivien en el reino arcángel."
  },
  {
    tag: "03",
    title: "Castigo",
    body: "El caos, la deuda y la condena se concentran en Tsuiho y en la mafia como nación rota y subterránea."
  },
  {
    tag: "04",
    title: "Sabiduría",
    body: "Kitsune sostiene la lectura moral del mundo, la visión, la diplomacia y la armonía con la naturaleza."
  }
];

const AUDIENCE = [
  { label: "Jugadores en Asia", value: 60 },
  { label: "Perfil gacha 18–34", value: 70 },
  { label: "Meta de tracción", value: 50 }
];

const CLANS = [
  {
    title: "Arcanos",
    tone: "linear-gradient(135deg, rgba(126, 162, 255, 0.16), rgba(15, 18, 32, 0.16))",
    body: "Justicia fría, moral, condena y juicio. Nación elegante con raíz inglesa, teslapunk y gótico industrial.",
    tags: ["Arcanus Codex", "Cadenas del juicio", "8 familias", "Consejo monárquico"]
  },
  {
    title: "Arcángeles",
    tone: "linear-gradient(135deg, rgba(240, 220, 162, 0.18), rgba(22, 22, 34, 0.15))",
    body: "Piedad, perdón, orgullo y vanidad. Arquitectura gótica europea con peso religioso, gris y ceremonial.",
    tags: ["Iluminate Codex", "Lanza de la culpa", "Cardinales", "Juicio del perdón"]
  },
  {
    title: "Mafia",
    tone: "linear-gradient(135deg, rgba(255, 128, 128, 0.16), rgba(20, 12, 18, 0.16))",
    body: "Nación colmena, caótica y subterránea. Oscuridad, demonios, jinetes y una jerarquía violenta por dominio.",
    tags: ["Grimorio Tsuiho", "Sellos de la venganza", "Jinetes", "Ciudad colmena"]
  },
  {
    title: "Bestias",
    tone: "linear-gradient(135deg, rgba(122, 214, 172, 0.16), rgba(15, 25, 18, 0.18))",
    body: "Sabiduría, serenidad y naturaleza. Una nación armónica donde la evolución convive con el conocimiento.",
    tags: ["Predicciones Kitsune", "Árbol de la sabiduría", "Condes", "Karma"]
  }
];

const SUBCLANS = [
  { title: "Shinigami", body: "Transporte férreo, equilibrio entre vida y muerte, vigilancia del flujo entre clanes." },
  { title: "Escritores", body: "Custodian la historia real del mundo y escriben la verdad desde una mirada neutral." },
  { title: "Tormentum Poenae", body: "Prisión de los muertos, seguridad superior y lugar donde también terminan los dioses." },
  { title: "Circo de la media luna", body: "Nómadas, asesinos y posibles aliados. Regresan de forma errante cada uno o dos años." },
  { title: "Ministerio de los susurros", body: "Diplomacia, mediación y equilibrio entre clanes mayores." },
  { title: "Verdugos de las aves", body: "Brazo punitivo entre purgatorio y ministerio; principales villanos en el relato mayor." }
];

const MYTH = [
  { title: "Soplo del universo", body: "El mundo nace junto a dioses y criaturas mortales, pero el universo limita su poder." },
  { title: "Cuatro hijos del juicio", body: "Sabiduría, juicio, castigo y perdón sostienen el equilibrio del mundo." },
  { title: "Traición del perdón", body: "Iluminate asesina a dos de sus hermanos buscando reconocimiento absoluto." },
  { title: "Resistencia de Arcanus", body: "Arcanus sobrevive, derrota a su hermana y funda una nueva línea de justicia." },
  { title: "Fragmentación del mundo", body: "De la guerra nacen los clanes mayores, las facciones menores y la política actual." }
];

const CHAPTERS = [
  { title: "Capítulo 0 · Sangre del mismo árbol", body: "Presentación de los gemelos, de las visiones y de un mundo que llama al protagonista desde otro lugar." },
  { title: "Capítulo 1 · Arcanos… justos o injustos", body: "Niels es confundido con su hermana Kanao, conoce a Rosho, Kathy y Alexander, y queda envuelto en el proyecto Osiris." },
  { title: "Capítulo 2 · Palomas de poca moral", body: "La caída del DDD, la rebelión arcángel y la intervención del ministerio abren una guerra política y mediática." },
  { title: "Historia secundaria", body: "El internado, los amantes, Williams, las alcantarillas angelicales y las rutas del ministerio amplían el mundo." }
];

const SYSTEMS = [
  {
    title: "Árbol de habilidades",
    body: "Cada personaje se define por profesión, dominio elemental, talento único y maestría. No es solo daño: es utilidad, sinergia y forma de jugar."
  },
  {
    title: "Batalla por turnos",
    body: "La velocidad ordena los turnos; el personaje decide entre ataques físicos, elementales y definitiva, con variaciones según su kit."
  },
  {
    title: "Profesiones y sinergias",
    body: "Guerrero, clérigo, ladrón, chef, alquimista, verdugo, juez, explorador, mayordomo y muchas más, con combinaciones elementales propias."
  },
  {
    title: "Magias puras",
    body: "Chaos reduce resistencias, Iluminate aumenta daño, Spectrum encapsula un elemento, Sellos crea daño sostenido y Time Clock altera la lectura temporal."
  }
];

const REACTION_MATRIX = {
  headers: ["Agua", "Fuego", "Hielo", "Electro", "Planta"],
  rows: [
    { axis: "Agua", values: ["—", "Escaldar", "Congelar", "Zona eléctrica", "Pantano"] },
    { axis: "Fuego", values: ["Escaldar", "—", "Debilidad", "Ionización", "Enredaderas carmesí"] },
    { axis: "Hielo", values: ["Congelar", "Derretido", "—", "Resistencias puras", "Escarcha"] },
    { axis: "Electro", values: ["Zona eléctrica", "Ionización", "Resistencias puras", "—", "Doton"] },
    { axis: "Planta", values: ["Pantano", "Quemadura", "Fragilidad", "Doton", "—"] }
  ]
};

const CHARACTERS = [
  {
    id: "niels-darkmoon",
    name: "Niels Darkmoon",
    alias: "Explorador del Horizonte",
    rarity: "5★",
    role: "Peleador explosivo",
    branches: ["Profesión: Explorador", "Elemento: multielemental", "Maestría: tiempo / movilidad"],
    look: "Joven de 17 años, mirada de visión permanente y silueta pensada para contraste entre inocencia y destino.",
    memory: "Busca a la chica de las visiones mientras desentraña el mundo y el proyecto Osiris."
  },
  {
    id: "kanao-darkmoon",
    name: "Kanao Darkmoon",
    alias: "La chica de las visiones",
    rarity: "5★",
    role: "Figura espejo / narrativa",
    branches: ["Profesión: oculta", "Elemento: desconocido", "Maestría: vínculo dual"],
    look: "Figura gemela y enigmática, diseñada para funcionar como reflejo y ruptura del protagonista.",
    memory: "Su presencia mueve el misterio central y altera la percepción de Niels."
  },
  {
    id: "rosho-shadow",
    name: "Rosho Shadow",
    alias: "Profesor arcano",
    rarity: "5★",
    role: "Líder táctico",
    branches: ["Profesión: profesor", "Elemento: iluminación / viento", "Maestría: cadenas y estrategia"],
    look: "Líder elegante y severo, con presencia académica y autoridad del clan arcano.",
    memory: "Actúa como puente entre el orden institucional y el caos que despierta el proyecto."
  },
  {
    id: "alexander-shadow",
    name: "Alexander Shadow",
    alias: "Heredero del juicio",
    rarity: "5★",
    role: "Luchador terco",
    branches: ["Profesión: guardián", "Elemento: físico / sellos", "Maestría: cadenas de deuda"],
    look: "Figura severa, de linaje pesado y energía de ejecutor disciplinado.",
    memory: "Carga el pasado de su clan y confronta a King Shadow y Zileus."
  },
  {
    id: "haruko-gardiend",
    name: "Haruko Gardiend",
    alias: "El amante del circo",
    rarity: "4★",
    role: "Soporte híbrido",
    branches: ["Profesión: guardián", "Elemento: espectro", "Maestría: apoyo / infiltración"],
    look: "Diseño nómada, ligado al circo y al pasado del internado.",
    memory: "Compañero de viaje, mediador entre la historia y el lado más íntimo del mundo."
  },
  {
    id: "williams-arukana-ophiuchus",
    name: "Williams Arukana Ophiuchus",
    alias: "Arquitecto del tiempo roto",
    rarity: "5★",
    role: "Mago estratega",
    branches: ["Profesión: arcanólogo", "Elemento: time clock", "Maestría: manipulación narrativa"],
    look: "Figura refinada, peligrosa y cerebral; visualmente debe sentirse casi fuera de época.",
    memory: "Opera como cerebro de la intriga y pieza mayor del renacimiento del quinto poder."
  },
  {
    id: "juro-ministerio",
    name: "Juro",
    alias: "Líder del Ministerio",
    rarity: "5★",
    role: "Tanque centinela",
    branches: ["Profesión: juez", "Elemento: sellos / físico", "Maestría: sentencia y control"],
    look: "Perfil sobrio, ceremonial y temible. Debe inspirar legalidad, poder y agotamiento.",
    memory: "Sostiene el ministerio, media la paz y ejecuta justicia cuando el sistema colapsa."
  },
  {
    id: "draken-shadow",
    name: "Draken Shadow",
    alias: "Rebelde del ala cardinal",
    rarity: "5★",
    role: "Tirador explosivo",
    branches: ["Profesión: tirador", "Elemento: caos", "Maestría: asedio"],
    look: "Presencia dura y trágica, marcada por el pasado del internado y el conflicto político.",
    memory: "Su alianza con Isabell empuja la rebelión arcángel y revela la otra cara del perdón."
  }
];

const GACHA = [
  {
    title: "Banner promocional",
    tag: "Personaje",
    list: [
      "100 tiradas para 5★ garantizado",
      "50/50 para personaje promocional",
      "Sub pity desde 60 en multis y 75 en individuales"
    ]
  },
  {
    title: "Banner de artillería",
    tag: "Armas",
    list: [
      "80 tiradas para 5★ garantizado",
      "75% de probabilidad del arma promocional",
      "Sub pity desde 50 en multis y 65 en individuales"
    ]
  },
  {
    title: "Banner temático",
    tag: "Versión 2.5+",
    list: [
      "Modalidades elemental, nacional y artillería",
      "Probabilidades adaptadas a nación / arma / personaje",
      "Diseñado para profundizar identidad del mundo"
    ]
  },
  {
    title: "Cadenas de Legado",
    tag: "Manga + pase",
    list: [
      "Pase gratuito, pago, completo y de legado",
      "Acceso al manga y contenido complementario",
      "Potencia la transmedia del proyecto"
    ]
  }
];

const ENDGAME = [
  { title: "Supervivencia a los jefes", body: "Escalado de jefes, mecánicas extra y dificultad creciente para grupos." },
  { title: "Caída de mazmorras", body: "Exploración, cofres, artefactos y materiales para quienes no priorizan bosses." },
  { title: "Torre infinita", body: "Formato híbrido entre jefes y exploración, con progresión de pisos y rutas." },
  { title: "Economía globalizada", body: "Mercado entre jugadores para comida, pociones, materiales, libros y armas 4★." }
];

const LOOPS = [
  {
    title: "Refugio de la paz",
    list: ["Red social entre aventureros", "Hogar y decoraciones", "Tradeo y cooperación"]
  },
  {
    title: "Cacería y gremio",
    list: ["Misiones diarias por puntaje", "Encargos variables", "Apoyo al progreso y la exploración"]
  },
  {
    title: "Biblioteca / GBEPF",
    list: ["Base de datos del mundo", "Debilidades y estadísticas", "Registro de enemigos, cofres y rutas"]
  }
];

const ROADMAP = [
  { version: "1.0", tag: "Lanzamiento", body: "Capítulos iniciales, evento de bienvenida, cacería y profundización de dungeons e isla sin reino." },
  { version: "1.1", tag: "Relleno útil", body: "Lore de ángeles, circo de la luna, ritmo, escondite y memoria." },
  { version: "1.2", tag: "Ministerio", body: "Traición interna, jefe semanal, investigación, sigilo y cacería." },
  { version: "1.3", tag: "Mascotas", body: "Evento tipo TFT con enemigos, purificación y nuevas relaciones dentro del clan arcano." },
  { version: "1.4", tag: "Raiko", body: "Evento rítmico, concierto del ministerio y cruce entre Niels y Raiko." },
  { version: "1.5", tag: "Submundo", body: "Bajos mundos angelicales, tren shinigami y revelación del destino de la hermana." },
  { version: "1.6", tag: "Isla sin reino", body: "Apertura del endgame social, casas, decoraciones, PVE y PVP." }
];

let activeIndex = 0;

const track = document.getElementById("sjTrack");
const rail = document.getElementById("sjRail");
const prevBtn = document.getElementById("sjPrevBtn");
const nextBtn = document.getElementById("sjNextBtn");
const stationLabel = document.getElementById("sjStationLabel");
const journey = document.getElementById("sjJourney");

function renderRail() {
  rail.innerHTML = "";
  WAGONS.forEach((wagon, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "sj-rail-item";
    item.innerHTML = `
      <span class="sj-rail-item-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="sj-rail-item-copy">
        <strong>${wagon.title}</strong>
        <small>${wagon.subtitle}</small>
      </span>
    `;
    item.addEventListener("click", () => goToWagon(index));
    rail.appendChild(item);
  });
}

function updateRailState() {
  const items = rail.querySelectorAll(".sj-rail-item");
  items.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
}

function updateControls() {
  if (!window.matchMedia("(max-width: 980px)").matches) {
    prevBtn.disabled = activeIndex === 0;
    nextBtn.disabled = activeIndex === WAGONS.length - 1;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
  stationLabel.textContent = `Vagón ${String(activeIndex + 1).padStart(2, "0")} · ${WAGONS[activeIndex].title}`;
}

function updateTrackPosition() {
  if (window.matchMedia("(max-width: 980px)").matches) {
    track.style.transform = "none";
    return;
  }
  const wagonWidth = track.querySelector(".sj-wagon")?.getBoundingClientRect().width || 0;
  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
  const translate = -activeIndex * (wagonWidth + gap);
  track.style.transform = `translateX(${translate}px)`;
}

function goToWagon(index) {
  activeIndex = Math.max(0, Math.min(WAGONS.length - 1, index));
  updateRailState();
  updateControls();
  updateTrackPosition();
}

function nextWagon() { goToWagon(activeIndex + 1); }
function prevWagon() { goToWagon(activeIndex - 1); }

function renderPrinciples() {
  const grid = document.getElementById("sjPrincipleGrid");
  grid.innerHTML = PRINCIPLES.map(principle => `
    <article class="sj-principle-node">
      <small>${principle.tag}</small>
      <strong>${principle.title}</strong>
      <p>${principle.body}</p>
    </article>
  `).join("");
}

function renderAudience() {
  const meter = document.getElementById("sjAudienceMeter");
  meter.innerHTML = AUDIENCE.map(item => `
    <div class="sj-meter">
      <div class="sj-meter-head">
        <span>${item.label}</span>
        <strong>${item.value}%</strong>
      </div>
      <div class="sj-meter-track">
        <div class="sj-meter-bar" style="width:${item.value}%"></div>
      </div>
    </div>
  `).join("");
}

function renderClans() {
  const grid = document.getElementById("sjClanGrid");
  grid.innerHTML = CLANS.map(clan => `
    <article class="sj-clan-card" style="background:${clan.tone}">
      <p class="sj-section-kicker">${clan.title}</p>
      <h3>${clan.title}</h3>
      <p>${clan.body}</p>
      <div class="sj-clan-tags">${clan.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    </article>
  `).join("");

  const list = document.getElementById("sjSubClanList");
  list.innerHTML = SUBCLANS.map(sub => `
    <article class="sj-subclan">
      <strong>${sub.title}</strong>
      <span>${sub.body}</span>
    </article>
  `).join("");
}

function renderStory() {
  document.getElementById("sjMythTimeline").innerHTML = MYTH.map(node => `
    <article class="sj-timeline-node">
      <strong>${node.title}</strong>
      <p>${node.body}</p>
    </article>
  `).join("");

  document.getElementById("sjStoryChapters").innerHTML = CHAPTERS.map(chapter => `
    <article class="sj-chapter">
      <strong>${chapter.title}</strong>
      <p>${chapter.body}</p>
    </article>
  `).join("");
}

function renderSystems() {
  document.getElementById("sjSystemsGrid").innerHTML = SYSTEMS.map(system => `
    <article class="sj-system-card">
      <strong>${system.title}</strong>
      <p>${system.body}</p>
    </article>
  `).join("");

  const matrix = document.getElementById("sjReactionMatrix");
  const cells = [];
  cells.push(`<div class="sj-reaction-cell sj-reaction-cell--head">Reacciones</div>`);
  REACTION_MATRIX.headers.forEach(header => {
    cells.push(`<div class="sj-reaction-cell sj-reaction-cell--head">${header}</div>`);
  });
  REACTION_MATRIX.rows.forEach(row => {
    cells.push(`<div class="sj-reaction-cell sj-reaction-cell--axis">${row.axis}</div>`);
    row.values.forEach(value => {
      cells.push(`<div class="sj-reaction-cell">${value}</div>`);
    });
  });
  matrix.innerHTML = cells.join("");
}

function renderCharacterRail() {
  const railEl = document.getElementById("sjCharacterRail");
  railEl.innerHTML = CHARACTERS.map((character, index) => `
    <article class="sj-character-card ${index === 0 ? 'is-active' : ''}" data-character="${character.id}">
      <div class="sj-character-portrait">
        <img src="../../assets/img/projects/symphony-of-justice/characters/${character.id}.png" alt="${character.name}" loading="lazy" />
        <div class="sj-character-placeholder">${character.name.split(" ").map(part => part[0]).slice(0,2).join("")}</div>
      </div>
      <div class="sj-character-body">
        <strong>${character.name}</strong>
        <small>${character.alias}</small>
        <div class="sj-character-tags">
          <span>${character.rarity}</span>
          <span>${character.role}</span>
        </div>
      </div>
    </article>
  `).join("");

  railEl.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("sj-hidden");
    });
    img.addEventListener("load", () => {
      img.nextElementSibling?.classList.add("sj-hidden");
    });
  });

  railEl.querySelectorAll(".sj-character-card").forEach(card => {
    card.addEventListener("click", () => {
      const selected = CHARACTERS.find(character => character.id === card.dataset.character);
      railEl.querySelectorAll(".sj-character-card").forEach(node => node.classList.remove("is-active"));
      card.classList.add("is-active");
      renderDossier(selected);
    });
  });

  renderDossier(CHARACTERS[0]);
}

function renderDossier(character) {
  const dossier = document.getElementById("sjDossier");
  dossier.innerHTML = `
    <div class="sj-dossier-portrait">
      <img src="../../assets/img/projects/symphony-of-justice/characters/${character.id}.png" alt="${character.name}" />
      <div class="sj-character-placeholder">${character.name.split(" ").map(part => part[0]).slice(0,2).join("")}</div>
    </div>

    <div class="sj-dossier-meta">
      <div>
        <p class="sj-section-kicker">${character.rarity} · ${character.role}</p>
        <h3>${character.name}</h3>
        <p><strong>${character.alias}</strong></p>
      </div>

      <p>${character.memory}</p>

      <div class="sj-dossier-grid">
        <div class="sj-data-block">
          <span>Árbol 1</span>
          <strong>${character.branches[0]}</strong>
        </div>
        <div class="sj-data-block">
          <span>Árbol 2</span>
          <strong>${character.branches[1]}</strong>
        </div>
        <div class="sj-data-block">
          <span>Árbol 3</span>
          <strong>${character.branches[2]}</strong>
        </div>
        <div class="sj-data-block">
          <span>Apariencia</span>
          <strong>${character.look}</strong>
        </div>
      </div>

      <div class="sj-data-block">
        <span>Lectura rápida del kit</span>
        <div class="sj-branch-list">
          ${character.branches.map(branch => `<span>${branch}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  dossier.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("sj-hidden");
    });
    img.addEventListener("load", () => {
      img.nextElementSibling?.classList.add("sj-hidden");
    });
  });
}

function renderGacha() {
  document.getElementById("sjGachaGrid").innerHTML = GACHA.map(item => `
    <article class="sj-gacha-card">
      <small>${item.tag}</small>
      <strong>${item.title}</strong>
      <ul>
        ${item.list.map(point => `<li>${point}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderPityChart() {
  const svg = document.getElementById("sjPityChart");
  const data = [
    { label: "Promo personaje", pity: 100, sub: 60, color: "#d7b35a" },
    { label: "Armas", pity: 80, sub: 50, color: "#7dcfe1" },
    { label: "Temático", pity: 90, sub: 60, color: "#d780c8" },
    { label: "Permanente", pity: 100, sub: 60, color: "#8b7eff" }
  ];
  const width = 640;
  const height = 360;
  const margin = { top: 32, right: 32, bottom: 56, left: 150 };
  const plotW = width - margin.left - margin.right;
  const barHeight = 28;
  const rowGap = 48;

  svg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" rx="22" fill="rgba(255,255,255,0.03)"></rect>
    <g id="sjPityChartGroup"></g>
  `;

  const group = svg.querySelector("#sjPityChartGroup");
  const max = 110;

  data.forEach((item, index) => {
    const y = margin.top + index * rowGap;
    const pityW = (item.pity / max) * plotW;
    const subW = (item.sub / max) * plotW;

    group.innerHTML += `
      <text x="${margin.left - 16}" y="${y + 18}" text-anchor="end" fill="#edf0f6" font-size="14" font-weight="700">${item.label}</text>
      <rect x="${margin.left}" y="${y}" width="${plotW}" height="${barHeight}" rx="14" fill="rgba(255,255,255,0.06)"></rect>
      <rect x="${margin.left}" y="${y}" width="${subW}" height="${barHeight}" rx="14" fill="rgba(255,255,255,0.12)"></rect>
      <rect x="${margin.left}" y="${y}" width="${pityW}" height="${barHeight}" rx="14" fill="${item.color}"></rect>
      <text x="${margin.left + pityW - 12}" y="${y + 18}" text-anchor="end" fill="#11151f" font-size="12" font-weight="800">${item.pity}</text>
      <text x="${margin.left + subW + 8}" y="${y + 18}" fill="#edf0f6" font-size="12">sub pity ${item.sub}</text>
    `;
  });

  for (let step = 0; step <= 100; step += 20) {
    const x = margin.left + (step / max) * plotW;
    group.innerHTML += `
      <line x1="${x}" y1="${margin.top - 12}" x2="${x}" y2="${height - margin.bottom}" stroke="rgba(255,255,255,0.08)"></line>
      <text x="${x}" y="${height - margin.bottom + 24}" text-anchor="middle" fill="#b7bfd1" font-size="12">${step}</text>
    `;
  }
}

function renderEndgame() {
  document.getElementById("sjEndgameGrid").innerHTML = ENDGAME.map(item => `
    <article class="sj-endgame-card">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");

  document.getElementById("sjLoopBoard").innerHTML = LOOPS.map(loop => `
    <article class="sj-loop-node">
      <strong>${loop.title}</strong>
      <ul>${loop.list.map(point => `<li>${point}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderRoadmap() {
  document.getElementById("sjRoadmapTrack").innerHTML = ROADMAP.map(item => `
    <article class="sj-roadmap-card">
      <small>${item.version}</small>
      <strong>${item.tag}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function attachDirectButtons() {
  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
      goToWagon(Number(button.dataset.go));
    });
  });
}

function bindNavigation() {
  prevBtn.addEventListener("click", prevWagon);
  nextBtn.addEventListener("click", nextWagon);

  let wheelLock = false;
  journey.addEventListener("wheel", event => {
    if (window.matchMedia("(max-width: 980px)").matches) return;
    if (wheelLock) return;
    const absX = Math.abs(event.deltaX);
    const absY = Math.abs(event.deltaY);
    if (absX < 20 && absY < 20) return;
    event.preventDefault();
    wheelLock = true;
    if ((absX > absY ? event.deltaX : event.deltaY) > 0) {
      nextWagon();
    } else {
      prevWagon();
    }
    window.setTimeout(() => { wheelLock = false; }, 750);
  }, { passive: false });

  document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") nextWagon();
    if (event.key === "ArrowLeft") prevWagon();
  });

  let touchStartX = 0;
  let touchStartY = 0;
  journey.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });

  journey.addEventListener("touchend", event => {
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 52) {
      if (dx < 0) nextWagon();
      else prevWagon();
    }
  }, { passive: true });

  window.addEventListener("resize", updateTrackPosition);
}

function init() {
  renderRail();
  renderPrinciples();
  renderAudience();
  renderClans();
  renderStory();
  renderSystems();
  renderCharacterRail();
  renderGacha();
  renderPityChart();
  renderEndgame();
  renderRoadmap();
  attachDirectButtons();
  bindNavigation();
  goToWagon(0);
}

document.addEventListener("DOMContentLoaded", init);
