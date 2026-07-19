const PROJECT_LINKS = {
  backPortfolio: "../about/proyectos.html",
  projectDoc: "../diseno/islasinreino.html",
  prototype: "../desarrollo/index.html",
  analysis: "../analista/analista.html"
};

const ZONES = [
  {
    name: "Costas de Fools",
    role: "Entrada / social",
    vibe: "Pacífica, marítima y simbólica",
    description: "Puerta de entrada al mundo. Funciona como bienvenida, plaza inicial y primera lectura de la isla.",
    color: "#6cc5d8"
  },
  {
    name: "Forsaken",
    role: "Ruinas / legado",
    vibe: "Divino, antiguo, quebrado",
    description: "Tierra de dioses y ruinas. Se asocia con restos del pasado y con memoria civilizatoria.",
    color: "#d6b25c"
  },
  {
    name: "Abyssal Realm",
    role: "Océano / profundidad",
    vibe: "Acuático, misterioso, expansivo",
    description: "Zona sumergida que habilita exploración vertical, secretos submarinos y narrativa de profundidad.",
    color: "#54a8dc"
  },
  {
    name: "Vulcanio Mori",
    role: "Forja / poder",
    vibe: "Volcánico, primigenio, industrial",
    description: "Volcán activo y sellado, conectado a la forja de metales, armas y tensión del entorno.",
    color: "#df6a78"
  },
  {
    name: "Virelia",
    role: "Bosque / memoria",
    vibe: "Orgánico, secreto, introspectivo",
    description: "Bosque profundo asociado a secretos, recuerdos y rutas ocultas.",
    color: "#78c37b"
  },
  {
    name: "Umbrael",
    role: "Catacumbas / minas",
    vibe: "Subterráneo, oscuro, preservado",
    description: "Sistema de minas y catacumbas ligado al misterio, el legado y la preservación del mundo.",
    color: "#8f82e0"
  }
];

const SERVICES = [
  { name: "Autenticación", desc: "Acceso, sesiones seguras y gestión de usuarios.", x: 50, y: 18 },
  { name: "Salas", desc: "Persistencia social, densidad controlada y puertas.", x: 22, y: 42 },
  { name: "Batalla", desc: "Instanciación 4 vs 4, reglas y validación.", x: 50, y: 66 },
  { name: "Economía", desc: "Tradeos, mercado, subastas e impuestos.", x: 78, y: 42 },
  { name: "Eventos", desc: "Actividades periódicas y cambios temporales.", x: 22, y: 80 },
  { name: "Telemetría", desc: "Métricas, fraude, anomalías y balance.", x: 78, y: 80 }
];

const MOVEMENT_CHOICES = [
  {
    name: "Click to move",
    summary: "Simple de programar y claro en coordenadas, pero menos conveniente para mando o multisoporte."
  },
  {
    name: "Casillas",
    summary: "Muy directo y barato técnicamente, aunque rígido y poco natural para un MMORPG."
  },
  {
    name: "WASD",
    summary: "Tradicional y expresivo, aunque exige validación más constante y gestión de latencia."
  }
];

const CHARACTERS = [
  {
    name: "Auren Vale",
    alias: "El cronista de Fools",
    role: "Soporte táctico",
    appearance: "Cabello oscuro, gabardina marina, amuletos de tren acuático y guantes de cartógrafo.",
    trees: [
      { title: "Profesional", value: "Cartógrafo / Logista" },
      { title: "Nacional", value: "Fools" },
      { title: "Rol", value: "Soporte" }
    ],
    focus: ["8 activas", "4 pasivas", "6 exploración", "2 estadísticas"]
  },
  {
    name: "Serah Mori",
    alias: "La herrera sellada",
    role: "Bruiser / Forja",
    appearance: "Cabello cobrizo, delantal oscuro con placas volcánicas y máscara parcial de taller.",
    trees: [
      { title: "Profesional", value: "Herrera" },
      { title: "Nacional", value: "Vulcanio Mori" },
      { title: "Rol", value: "Luchadora" }
    ],
    focus: ["Escudos", "Ruptura", "Impacto", "Forja"]
  },
  {
    name: "Elyr Vire",
    alias: "La raíz que escucha",
    role: "Control / Exploración",
    appearance: "Capa vegetal, botas ligeras, máscara de madera y ornamentos de raíz luminosa.",
    trees: [
      { title: "Profesional", value: "Recolectora" },
      { title: "Nacional", value: "Virelia" },
      { title: "Rol", value: "Controladora" }
    ],
    focus: ["Enraizar", "Sigilo", "Luz", "Revelar"]
  },
  {
    name: "Noct Aster",
    alias: "El testigo de Umbrael",
    role: "Mago / Debuffer",
    appearance: "Traje oscuro, piezas de mina antigua, lentes rotos y lámpara espectral.",
    trees: [
      { title: "Profesional", value: "Archivista" },
      { title: "Nacional", value: "Umbrael" },
      { title: "Rol", value: "Mago" }
    ],
    focus: ["Silenciar", "Corromper", "Debilitar", "Profanar"]
  }
];

const INTERFACES = [
  {
    id: "usuario",
    title: "Interfaz del usuario",
    bullets: [
      "Mapa con transporte y navegación entre salas.",
      "Chat global por burbujas y mensajes directos.",
      "Logros, títulos, tablones y resumen de cuenta.",
      "Noticias, gremio, hogar y progreso general."
    ]
  },
  {
    id: "personaje",
    title: "Interfaz del personaje",
    bullets: [
      "Vista general con estadísticas y apariencia.",
      "Arma, artefactos y equipable central.",
      "Afinidad, habilidades activas, pasivas y explorativas.",
      "Formación de equipo y ajustes tácticos."
    ]
  },
  {
    id: "dungeon",
    title: "Interfaz de dungeon",
    bullets: [
      "Selección de ruta, cofre, objetivos y estado del grupo.",
      "Indicadores de misión, niebla, trampas y utilidad de mascota.",
      "Economía de recursos dentro de la exploración.",
      "Salida, punto de descanso y transición a combate."
    ]
  }
];

const BATTLE_ACTIONS = ["Atacar", "Defender", "Equipable", "Habilidad", "Items", "Huir"];
const BATTLE_ORDER = [
  { name: "Auren", team: "Aliado", speed: 94 },
  { name: "Noct", team: "Aliado", speed: 88 },
  { name: "Capitán de sal", team: "Enemigo", speed: 82 },
  { name: "Serah", team: "Aliado", speed: 76 },
  { name: "Bestia abisal", team: "Enemigo", speed: 68 },
  { name: "Elyr", team: "Aliado", speed: 64 },
  { name: "Mina viva", team: "Enemigo", speed: 58 },
  { name: "Custodio de ruina", team: "Enemigo", speed: 51 }
];

const KEYWORD_CATEGORIES = {
  ofensiva: ["Atacar", "Perforar", "Explosión", "Drenar", "Fragmentar", "Desgarrar", "Ruptura", "Marca"],
  defensa: ["Escudar", "Provocar", "Inmunidad", "Reflejar", "Resurrección", "Redirigir", "Bendecir", "Equilibrar"],
  control: ["Congelar", "Electrocutar", "Silenciar", "Interrumpir", "Enraizar", "Suspender", "Aturdir", "Desorientar"],
  economía: ["Consumir", "Robar", "Absorber", "Agotar", "Recargar", "Sacrificar", "Apostar", "Acumular"]
};

const DUNGEON_MODES = [
  {
    name: "Supervivencia a jefes",
    tag: "Jefes",
    text: "Encuentros escalados donde kit, estadísticas y escenario cambian de forma progresiva."
  },
  {
    name: "Caída de mazmorras",
    tag: "Exploración",
    text: "Búsqueda de cofres, artefactos y rutas con apoyo a jugadores que aún no vencen a ciertos jefes."
  },
  {
    name: "Torre infinita",
    tag: "Híbrido",
    text: "Modelo ascendente que junta exploración, recursos y jefes dentro de una progresión sostenida."
  }
];

const PETS = [
  { name: "Normal", text: "Detecta cofres ocultos y trampas.", utility: "Detección" },
  { name: "Volador", text: "Despeja niebla y revisa alturas.", utility: "Visión" },
  { name: "Espectral", text: "Atraviesa muros y anula objetos malditos.", utility: "Interacción" },
  { name: "Líquido", text: "Cruza ductos y separa zonas venenosas.", utility: "Movilidad" },
  { name: "Planta", text: "Abre rutas con raíces y activa lugares ocultos.", utility: "Acceso" },
  { name: "Rocoso", text: "Detecta muros frágiles y crea barreras.", utility: "Terreno" },
  { name: "Eléctrico", text: "Energiza mecanismos y activa trampas a favor.", utility: "Mecanismos" }
];

const PROFESSIONS = [
  { name: "Granjero", text: "Recolecta materia prima regional y sostiene cadenas productivas." },
  { name: "Herrero", text: "Convierte materiales raros en armas y componentes de valor." },
  { name: "Cocinero", text: "Produce buffs, curación y apoyo en puntos de descanso." },
  { name: "Archivista", text: "Interpreta memorias, textos y datos ocultos del mundo." }
];

const POLICIES = [
  {
    title: "Monetización limpia",
    text: "Cosméticos, pases y contenido opcional sin afectar el equilibrio competitivo."
  },
  {
    title: "Seguridad",
    text: "Validación de acciones en servidor, anti-exploit y monitoreo de anomalías."
  },
  {
    title: "Moderación",
    text: "Reportes, filtros y reglas claras contra acoso, fraude y toxicidad."
  },
  {
    title: "Consumidor",
    text: "Transparencia en compras, límites y separación entre rendimiento y gasto."
  }
];

const ROADMAP = [
  { version: "1.0", text: "Introducción al mundo, socialización y bases del MMO." },
  { version: "1.1", text: "Mapa, dungeons adicionales y primera puerta al combate grupal." },
  { version: "1.2", text: "Evento de mascotas, escondidas y roguelike cooperativo de cocina." },
  { version: "1.3", text: "Nuevo grupo enemigo, nuevas salas y vínculo con manga/historia." },
  { version: "1.4", text: "Casino, ludopatía como ficción de diseño y nuevas habilidades." },
  { version: "1.5", text: "Primera gran batalla y torre posgame con IA exigente." },
  { version: "1.6", text: "Aniversario, expansión de lugares y más lorecrafting." }
];

const MVP_ROOMS = [
  { name: "Hogar del usuario", text: "Persistencia individual y personalización básica." },
  { name: "Plaza", text: "Chat, mercado, interacción y presencia social." },
  { name: "Gremio", text: "Noticias, eventos y acceso organizado a actividades." },
  { name: "Introducción a dungeons", text: "Selección de evento y validación del loop central." }
];

const MVP_CHECKS = [
  "Persistencia de usuario y personaje principal.",
  "Chat global y mensajes directos.",
  "Formación de equipo y ficha de personaje.",
  "Tablón de dungeons.",
  "Tradeo y subastas básicas.",
  "Interfaz de usuario e interfaces de personaje.",
  "Prueba cooperativa elemental.",
  "Base de microservicios aislados."
];

const RESOURCE_LINKS = [
  { title: "Volver al portafolio", key: "backPortfolio", note: "Botón del índice lateral." },
  { title: "Documento del proyecto / PDF", key: "projectDoc", note: "Versión compartible del GDD o link interno." },
  { title: "Repositorio / demo técnica", key: "prototype", note: "GitHub, Notion o demo navegable." },
  { title: "Análisis relacionado", key: "analysis", note: "Artículo o sección editorial conectada al proyecto." }
];

const RESOURCE_ASSETS = [
  { title: "GIF opcional del tren acuático", note: "Si no se agrega, la portada ya usa una recreación CSS." },
  { title: "GIF opcional del personaje principal", note: "La ficha funciona con silueta generada y texto." },
  { title: "Mini iconos propios para naciones y profesiones", note: "Pueden agregarse luego sin romper el layout." },
  { title: "Exportar versión PDF del GDD", note: "Útil para enlazar desde el botón Documento base." }
];

const bookViewer = document.getElementById("bookViewer");
const pages = Array.from(document.querySelectorAll(".module-page"));
const navItems = Array.from(document.querySelectorAll(".mmo-index-item"));
const prevBtn = document.getElementById("prevModuleBtn");
const nextBtn = document.getElementById("nextModuleBtn");
const counter = document.getElementById("moduleCounter");
const label = document.getElementById("moduleLabel");
const dotTrack = document.getElementById("moduleDots");

let activeIndex = 0;
let wheelLock = false;
let keywordFilter = "ofensiva";
let activeCharacter = 0;
let activeInterface = 0;

function setLinks() {
  const map = {
    linkBackPortfolio: PROJECT_LINKS.backPortfolio,
    linkProjectDoc: PROJECT_LINKS.projectDoc,
    linkPrototype: PROJECT_LINKS.prototype,
    linkAnalysis: PROJECT_LINKS.analysis
  };

  Object.entries(map).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href || "#";
    if (!href) el.classList.add("is-disabled");
  });
}

function buildDots() {
  pages.forEach((page, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "mmo-dot" + (index === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Ir al módulo ${index + 1}`);
    dot.addEventListener("click", () => goToPage(index));
    dotTrack.appendChild(dot);
  });
}

function updateTopbar() {
  counter.textContent = String(activeIndex + 1).padStart(2, "0");
  label.textContent = pages[activeIndex].dataset.title || "Módulo";

  navItems.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
  Array.from(dotTrack.children).forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
}

function goToPage(nextIndex, direction = 1) {
  if (nextIndex === activeIndex || nextIndex < 0 || nextIndex >= pages.length) return;

  const current = pages[activeIndex];
  const next = pages[nextIndex];

  current.classList.remove("is-active", "is-leaving-left", "is-leaving-right");
  current.classList.add(direction > 0 ? "is-leaving-left" : "is-leaving-right");

  setTimeout(() => {
    pages.forEach((page) => page.classList.remove("is-active", "is-leaving-left", "is-leaving-right"));
    next.classList.add("is-active");
    activeIndex = nextIndex;
    updateTopbar();
  }, 180);
}

function handleWheel(event) {
  if (window.innerWidth <= 980) return;
  if (wheelLock) return;

  const delta = event.deltaY;
  if (Math.abs(delta) < 25) return;

  wheelLock = true;
  if (delta > 0) {
    goToPage(Math.min(activeIndex + 1, pages.length - 1), 1);
  } else {
    goToPage(Math.max(activeIndex - 1, 0), -1);
  }
  setTimeout(() => wheelLock = false, 650);
}

function attachNavigation() {
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      goToPage(index, index > activeIndex ? 1 : -1);
    });
  });

  prevBtn.addEventListener("click", () => goToPage(Math.max(activeIndex - 1, 0), -1));
  nextBtn.addEventListener("click", () => goToPage(Math.min(activeIndex + 1, pages.length - 1), 1));

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      goToPage(Math.min(activeIndex + 1, pages.length - 1), 1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      goToPage(Math.max(activeIndex - 1, 0), -1);
    }
  });

  bookViewer.addEventListener("wheel", handleWheel, { passive: true });
}

function createZoneCards() {
  const container = document.getElementById("zoneCards");
  container.innerHTML = ZONES.map(zone => `
    <article class="zone-card">
      <h3>${zone.name}</h3>
      <p>${zone.description}</p>
      <span class="zone-pill">${zone.role} · ${zone.vibe}</span>
    </article>
  `).join("");
}

function createWorldMap() {
  const container = document.getElementById("worldMap");
  const circles = ZONES.map((zone, i) => {
    const positions = [
      [18, 72], [42, 28], [66, 58], [62, 18], [36, 54], [76, 34]
    ];
    const [x, y] = positions[i];
    return `
      <g>
        <circle cx="${x}%" cy="${y}%" r="9%" fill="${zone.color}" fill-opacity="0.18" stroke="${zone.color}" stroke-width="1.5"></circle>
        <text x="${x}%" y="${y}%" dy=".35em" text-anchor="middle" fill="#f3f7ff" font-size="10">${zone.name}</text>
      </g>
    `;
  }).join("");

  container.innerHTML = `
    <svg viewBox="0 0 900 520" role="img" aria-label="Mapa estilizado de la isla">
      <defs>
        <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#0d1f34"/>
          <stop offset="100%" stop-color="#081320"/>
        </linearGradient>
      </defs>
      <rect width="900" height="520" rx="24" fill="url(#sea)"></rect>
      <path d="M158 402 C230 230, 380 164, 450 130 C610 52, 760 122, 824 282 C782 372, 700 432, 544 454 C380 476, 238 452, 158 402Z" fill="#133129" stroke="rgba(255,255,255,0.08)"></path>
      <path d="M160 406 C262 376, 394 376, 508 410 C622 444, 722 422, 826 286" fill="none" stroke="rgba(255,255,255,0.08)" stroke-dasharray="8 10" />
      ${circles}
    </svg>
  `;
}

function createServiceDiagram() {
  const container = document.getElementById("serviceDiagram");
  const nodes = SERVICES.map(service => `
    <g>
      <circle cx="${service.x}%" cy="${service.y}%" r="9%" fill="rgba(214,178,92,0.12)" stroke="rgba(214,178,92,0.52)" stroke-width="1.2"></circle>
      <text x="${service.x}%" y="${service.y}%" text-anchor="middle" fill="#f3f7ff" font-size="12" dy="-2">${service.name}</text>
    </g>
  `).join("");
  const lines = SERVICES.map(service => `
    <line x1="50%" y1="50%" x2="${service.x}%" y2="${service.y}%" stroke="rgba(255,255,255,0.14)" stroke-width="1.2" />
  `).join("");

  container.innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Arquitectura de microservicios">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      ${lines}
      <circle cx="50%" cy="50%" r="11%" fill="rgba(103,191,220,0.14)" stroke="rgba(103,191,220,0.45)" stroke-width="1.5"></circle>
      <text x="50%" y="50%" text-anchor="middle" fill="#f3f7ff" font-size="16" dy="-8">Server</text>
      <text x="50%" y="50%" text-anchor="middle" fill="#67bfdc" font-size="14" dy="14">Autoritario</text>
      ${nodes}
    </svg>
  `;
}

function createMovementChoices() {
  const container = document.getElementById("movementChoices");
  container.innerHTML = MOVEMENT_CHOICES.map(choice => `
    <article class="choice-card">
      <strong>${choice.name}</strong>
      <span>${choice.summary}</span>
    </article>
  `).join("");
}

function renderCharacterList() {
  const list = document.getElementById("characterList");
  list.innerHTML = CHARACTERS.map((character, index) => `
    <button type="button" class="character-chip ${index === activeCharacter ? "is-active" : ""}" data-character="${index}">
      ${character.name}
      <small>${character.alias} · ${character.role}</small>
    </button>
  `).join("");

  list.querySelectorAll(".character-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCharacter = Number(button.dataset.character);
      renderCharacterList();
      renderCharacterDossier();
    });
  });
}

function renderCharacterDossier() {
  const container = document.getElementById("characterDossier");
  const character = CHARACTERS[activeCharacter];
  container.innerHTML = `
    <div class="dossier-portrait">
      <div class="silhouette"></div>
    </div>
    <div class="dossier-details">
      <div class="dossier-head">
        <h3>${character.name}</h3>
        <p><strong>Apodo:</strong> ${character.alias}</p>
        <p class="trait-line"><strong>Apariencia:</strong> ${character.appearance}</p>
      </div>

      <div class="tree-grid">
        ${character.trees.map(tree => `
          <article class="tree-card">
            <strong>${tree.title}</strong>
            <p>${tree.value}</p>
          </article>
        `).join("")}
      </div>

      <article class="tree-card">
        <strong>Configuración base</strong>
        <p>${character.focus.join(" · ")}</p>
      </article>
    </div>
  `;
}

function renderInterfaceTabs() {
  const container = document.getElementById("interfaceTabs");
  container.innerHTML = INTERFACES.map((item, index) => `
    <button type="button" class="interface-tab ${index === activeInterface ? "is-active" : ""}" data-interface="${index}">
      ${item.title}
    </button>
  `).join("");

  container.querySelectorAll(".interface-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeInterface = Number(tab.dataset.interface);
      renderInterfaceTabs();
      renderInterfacePreview();
    });
  });
}

function renderInterfacePreview() {
  const container = document.getElementById("interfacePreview");
  const active = INTERFACES[activeInterface];
  container.innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Mockup de interfaz">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.03)"></rect>
      <rect x="28" y="28" width="844" height="60" rx="18" fill="rgba(255,255,255,0.04)"></rect>
      <rect x="28" y="108" width="220" height="384" rx="18" fill="rgba(255,255,255,0.04)"></rect>
      <rect x="270" y="108" width="602" height="384" rx="18" fill="rgba(255,255,255,0.035)"></rect>
      <text x="54" y="67" fill="#f3f7ff" font-size="22">${active.title}</text>
      ${active.bullets.map((line, idx) => `<text x="300" y="${160 + idx * 54}" fill="#b8c7de" font-size="18">• ${line}</text>`).join("")}
    </svg>
  `;
}

function renderBattle() {
  document.getElementById("battleArena").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Campo de batalla recreado">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      <rect x="80" y="110" width="280" height="300" rx="26" fill="rgba(103,191,220,0.10)" stroke="rgba(103,191,220,0.25)" />
      <rect x="540" y="110" width="280" height="300" rx="26" fill="rgba(223,106,120,0.10)" stroke="rgba(223,106,120,0.25)" />
      ${[0,1,2,3].map(i => `<circle cx="160" cy="${160 + i*62}" r="22" fill="rgba(103,191,220,0.35)"></circle>`).join("")}
      ${[0,1,2,3].map(i => `<circle cx="280" cy="${160 + i*62}" r="22" fill="rgba(103,191,220,0.22)"></circle>`).join("")}
      ${[0,1,2,3].map(i => `<circle cx="620" cy="${160 + i*62}" r="22" fill="rgba(223,106,120,0.35)"></circle>`).join("")}
      ${[0,1,2,3].map(i => `<circle cx="740" cy="${160 + i*62}" r="22" fill="rgba(223,106,120,0.22)"></circle>`).join("")}
      <text x="170" y="82" fill="#67bfdc" font-size="24">Equipo A</text>
      <text x="608" y="82" fill="#df6a78" font-size="24">Equipo B</text>
    </svg>
    <div class="battle-menu">
      ${BATTLE_ACTIONS.map(action => `<div class="battle-action">${action}</div>`).join("")}
    </div>
  `;

  document.getElementById("battleSidebar").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Cola de prioridad de batalla">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      <text x="40" y="54" fill="#f3f7ff" font-size="24">Cola de prioridad</text>
      ${BATTLE_ORDER.map((unit, idx) => `
        <rect x="40" y="${86 + idx*48}" width="${420 + unit.speed*3}" height="34" rx="17"
          fill="${unit.team === "Aliado" ? "rgba(103,191,220,0.18)" : "rgba(223,106,120,0.18)"}"
          stroke="${unit.team === "Aliado" ? "rgba(103,191,220,0.34)" : "rgba(223,106,120,0.34)"}" />
        <text x="56" y="${108 + idx*48}" fill="#f3f7ff" font-size="16">${idx+1}. ${unit.name} (${unit.speed})</text>
      `).join("")}
    </svg>
  `;
}

function renderKeywords() {
  const filterBar = document.getElementById("keywordFilterBar");
  filterBar.innerHTML = Object.keys(KEYWORD_CATEGORIES).map(key => `
    <button type="button" class="keyword-filter ${key === keywordFilter ? "is-active" : ""}" data-filter="${key}">
      ${key}
    </button>
  `).join("");

  filterBar.querySelectorAll(".keyword-filter").forEach(button => {
    button.addEventListener("click", () => {
      keywordFilter = button.dataset.filter;
      renderKeywords();
    });
  });

  const grid = document.getElementById("keywordGrid");
  grid.innerHTML = KEYWORD_CATEGORIES[keywordFilter].map(word => `
    <article class="keyword-card">
      <strong>${word}</strong>
      <span>${keywordDescription(word)}</span>
    </article>
  `).join("");

  document.getElementById("abilityBuilder").innerHTML = `
    <div class="builder-line">
      <strong>Ejemplo de construcción</strong>
      <p>Una habilidad puede formarse combinando palabras clave, condición y contexto.</p>
      <span class="builder-word">Atacar</span>
      <span class="builder-word">Si</span>
      <span class="builder-word">Sigilo</span>
      <span class="builder-word">Marca</span>
      <span class="builder-word">Detonar</span>
    </div>
    <div class="builder-line">
      <strong>Resultado posible</strong>
      <p>Inflige daño base. Si el usuario está en sigilo, aplica Marca y detona daño adicional sobre el objetivo vulnerado.</p>
    </div>
  `;
}

function keywordDescription(word) {
  const map = {
    "Atacar": "Inflige daño físico o mágico base.",
    "Perforar": "Ignora un porcentaje de defensa.",
    "Explosión": "Daño en área con caída por distancia.",
    "Drenar": "Convierte daño en recuperación o recurso.",
    "Fragmentar": "Divide el daño entre múltiples objetivos.",
    "Desgarrar": "Reduce curación o defensa efectiva.",
    "Ruptura": "Destruye escudos activos.",
    "Marca": "Prepara daño amplificado posterior.",
    "Escudar": "Otorga puntos de absorción.",
    "Provocar": "Redirige ataques al usuario.",
    "Inmunidad": "Evita cierto tipo de efecto.",
    "Reflejar": "Devuelve parte del daño recibido.",
    "Resurrección": "Revive con porcentaje de vida.",
    "Redirigir": "Cambia el objetivo de una acción.",
    "Bendecir": "Transforma debuffs en ventajas.",
    "Equilibrar": "Iguala estadísticas o recursos.",
    "Congelar": "Puede impedir actuar.",
    "Electrocutar": "Reduce velocidad e interrumpe.",
    "Silenciar": "Impide usar habilidades.",
    "Interrumpir": "Cancela habilidades canalizadas.",
    "Enraizar": "Bloquea movilidad o escape.",
    "Suspender": "Relega la acción al final de la cola.",
    "Aturdir": "Pierde turno garantizado.",
    "Desorientar": "Puede redirigir ataques a aliados.",
    "Consumir": "Destruye un recurso para potenciar un efecto.",
    "Robar": "Extrae un recurso o buffo enemigo.",
    "Absorber": "Convierte daño en mana o energía.",
    "Agotar": "Reduce el mana enemigo.",
    "Recargar": "Reduce enfriamientos o espera.",
    "Sacrificar": "Convierte vida propia en efecto.",
    "Apostar": "Aumenta efecto con riesgo.",
    "Acumular": "Suma cargas por condición."
  };
  return map[word] || "Palabra clave del sistema de habilidades.";
}

function renderDungeonModes() {
  document.getElementById("dungeonModes").innerHTML = DUNGEON_MODES.map(mode => `
    <article class="dungeon-card">
      <h3>${mode.name}</h3>
      <p>${mode.text}</p>
      <span class="zone-pill">${mode.tag}</span>
    </article>
  `).join("");

  document.getElementById("dungeonLoop").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Core loop de las dungeons">
      <defs>
        <marker id="arrowLoop" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(214,178,92,0.45)"></path>
        </marker>
      </defs>
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      <circle cx="180" cy="250" r="84" fill="rgba(103,191,220,0.12)" stroke="rgba(103,191,220,0.26)"></circle>
      <circle cx="450" cy="130" r="84" fill="rgba(214,178,92,0.12)" stroke="rgba(214,178,92,0.26)"></circle>
      <circle cx="720" cy="250" r="84" fill="rgba(223,106,120,0.12)" stroke="rgba(223,106,120,0.26)"></circle>
      <circle cx="450" cy="390" r="84" fill="rgba(125,115,212,0.12)" stroke="rgba(125,115,212,0.26)"></circle>
      <path d="M260 230 C330 180, 370 150, 390 146" stroke="rgba(255,255,255,0.18)" stroke-width="2" fill="none" marker-end="url(#arrowLoop)"></path>
      <path d="M530 146 C615 160, 670 192, 680 220" stroke="rgba(255,255,255,0.18)" stroke-width="2" fill="none" marker-end="url(#arrowLoop)"></path>
      <path d="M680 280 C650 330, 585 370, 520 382" stroke="rgba(255,255,255,0.18)" stroke-width="2" fill="none" marker-end="url(#arrowLoop)"></path>
      <path d="M380 382 C305 360, 235 318, 214 282" stroke="rgba(255,255,255,0.18)" stroke-width="2" fill="none" marker-end="url(#arrowLoop)"></path>
      <text x="180" y="250" text-anchor="middle" fill="#f3f7ff" font-size="20">Explorar</text>
      <text x="450" y="130" text-anchor="middle" fill="#f3f7ff" font-size="20">Resolver</text>
      <text x="720" y="250" text-anchor="middle" fill="#f3f7ff" font-size="20">Combatir</text>
      <text x="450" y="390" text-anchor="middle" fill="#f3f7ff" font-size="20">Mejorar</text>
    </svg>
  `;
}

function renderPets() {
  document.getElementById("petGrid").innerHTML = PETS.map(pet => `
    <article class="pet-card">
      <h3>${pet.name}</h3>
      <p>${pet.text}</p>
      <span class="zone-pill">${pet.utility}</span>
    </article>
  `).join("");

  document.getElementById("petUtilityBoard").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Tablero de utilidades de mascotas">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      <text x="44" y="54" fill="#f3f7ff" font-size="24">Utilidades de exploración</text>
      ${[
        ["Cofres", 70, 130, "#67bfdc"],
        ["Alturas", 250, 130, "#d6b25c"],
        ["Interruptores", 430, 130, "#8f82e0"],
        ["Ductos", 610, 130, "#54a8dc"],
        ["Raíces", 790, 130, "#78c37b"],
        ["Muros", 250, 330, "#c18e5c"],
        ["Energía", 610, 330, "#f2d868"]
      ].map(item => `
        <circle cx="${item[1]}" cy="${item[2]}" r="58" fill="${item[3]}" fill-opacity="0.16" stroke="${item[3]}" stroke-width="1.5"></circle>
        <text x="${item[1]}" y="${item[2]}" text-anchor="middle" fill="#f3f7ff" font-size="18">${item[0]}</text>
      `).join("")}
    </svg>
  `;
}

function renderEconomy() {
  document.getElementById("professionGrid").innerHTML = PROFESSIONS.map(prof => `
    <article class="profession-card">
      <h3>${prof.name}</h3>
      <p>${prof.text}</p>
    </article>
  `).join("");

  document.getElementById("economyFlow").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Flujo económico">
      <defs>
        <marker id="arrowEconomy" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(214,178,92,0.45)"></path>
        </marker>
      </defs>
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      ${[
        ["Profesiones", 130, 150],
        ["Mercado", 450, 110],
        ["Subasta", 760, 180],
        ["Tradeo", 730, 370],
        ["Sinks", 420, 410],
        ["Jugador", 150, 340]
      ].map(([name, x, y]) => `
        <rect x="${x-74}" y="${y-34}" width="148" height="68" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)"></rect>
        <text x="${x}" y="${y+6}" text-anchor="middle" fill="#f3f7ff" font-size="20">${name}</text>
      `).join("")}
      ${[
        [130,150,450,110],[450,110,760,180],[760,180,730,370],[730,370,420,410],[420,410,150,340],[150,340,130,150]
      ].map(([x1,y1,x2,y2]) => `
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(214,178,92,0.3)" stroke-width="2" marker-end="url(#arrowEconomy)"></line>
      `).join("")}
    </svg>
  `;
}

function renderSustainability() {
  document.getElementById("policyCards").innerHTML = POLICIES.map(policy => `
    <article class="policy-card">
      <h3>${policy.title}</h3>
      <p>${policy.text}</p>
    </article>
  `).join("");

  document.getElementById("complianceBoard").innerHTML = `
    <svg viewBox="0 0 900 520" aria-label="Esquema de sostenibilidad y seguridad">
      <rect width="900" height="520" rx="24" fill="rgba(255,255,255,0.02)"></rect>
      <circle cx="450" cy="260" r="92" fill="rgba(214,178,92,0.12)" stroke="rgba(214,178,92,0.35)"></circle>
      <text x="450" y="252" text-anchor="middle" fill="#f3f7ff" font-size="22">Comunidad</text>
      <text x="450" y="282" text-anchor="middle" fill="#d6b25c" font-size="16">experiencia justa</text>

      <rect x="90" y="84" width="170" height="70" rx="18" fill="rgba(103,191,220,0.12)" stroke="rgba(103,191,220,0.25)"></rect>
      <rect x="640" y="84" width="170" height="70" rx="18" fill="rgba(223,106,120,0.12)" stroke="rgba(223,106,120,0.25)"></rect>
      <rect x="90" y="366" width="170" height="70" rx="18" fill="rgba(125,115,212,0.12)" stroke="rgba(125,115,212,0.25)"></rect>
      <rect x="640" y="366" width="170" height="70" rx="18" fill="rgba(120,195,123,0.12)" stroke="rgba(120,195,123,0.25)"></rect>

      <text x="175" y="126" text-anchor="middle" fill="#f3f7ff" font-size="18">F2P limpio</text>
      <text x="725" y="126" text-anchor="middle" fill="#f3f7ff" font-size="18">Seguridad</text>
      <text x="175" y="408" text-anchor="middle" fill="#f3f7ff" font-size="18">Moderación</text>
      <text x="725" y="408" text-anchor="middle" fill="#f3f7ff" font-size="18">Consumidor</text>

      ${[[260,154,380,220],[640,154,520,220],[260,366,380,300],[640,366,520,300]].map(([x1,y1,x2,y2]) =>
        `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,0.14)" stroke-width="2"></line>`
      ).join("")}
    </svg>
  `;
}

function renderRoadmap() {
  document.getElementById("roadmapTrack").innerHTML = ROADMAP.map(item => `
    <article class="roadmap-card">
      <strong>${item.version}</strong>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderMVP() {
  document.getElementById("mvpRooms").innerHTML = MVP_ROOMS.map(room => `
    <article class="mvp-room">
      <h3>${room.name}</h3>
      <p>${room.text}</p>
    </article>
  `).join("");

  document.getElementById("mvpChecklist").innerHTML = `
    <div class="mini-section">
      <h3>Qué valida el MVP</h3>
      <ul class="info-list">
        ${MVP_CHECKS.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderResources() {
  document.getElementById("resourceLinks").innerHTML = RESOURCE_LINKS.map(item => {
    const href = PROJECT_LINKS[item.key];
    return `
      <article class="resource-card">
        <h3>${item.title}</h3>
        <p>${item.note}</p>
        <a class="resource-link ${!href ? 'is-disabled' : ''}" href="${href || '#'}">Completar enlace</a>
      </article>
    `;
  }).join("");

  document.getElementById("resourceAssets").innerHTML = RESOURCE_ASSETS.map(item => `
    <article class="resource-card">
      <h3>${item.title}</h3>
      <p>${item.note}</p>
    </article>
  `).join("");
}

function init() {
  setLinks();
  buildDots();
  updateTopbar();
  attachNavigation();
  createZoneCards();
  createWorldMap();
  createServiceDiagram();
  createMovementChoices();
  renderCharacterList();
  renderCharacterDossier();
  renderInterfaceTabs();
  renderInterfacePreview();
  renderBattle();
  renderKeywords();
  renderDungeonModes();
  renderPets();
  renderEconomy();
  renderSustainability();
  renderRoadmap();
  renderMVP();
  renderResources();
}

document.addEventListener("DOMContentLoaded", init);
