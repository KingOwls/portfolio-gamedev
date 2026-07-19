const BOT_MODULES = [
  {
    id: "origen",
    index: "01",
    navTitle: "Evolución",
    navSubtitle: "Dos iteraciones del RPG",
    title: "Una misma visión, dos respuestas técnicas",
    summary: "Profesor Luther permitió implementar y probar una gran cantidad de mecánicas dentro de Discord. Thaddeus Morrowind reorganizó esos aprendizajes sobre una arquitectura más modular, separando persistencia estable, estados temporales y lógica ejecutable.",
    kicker: "Proceso iterativo",
    heading: "Del prototipo funcional a una base escalable",
    body: "El valor del proyecto no está solamente en la cantidad de comandos, sino en la comparación entre dos decisiones de desarrollo. Profesor Luther priorizó velocidad de implementación, datos JSON y amplitud jugable. Thaddeus Morrowind priorizó entidades, servicios, MySQL, Entity Framework Core y una separación más clara de responsabilidades. Juntos documentan cómo una idea de Game Design se prueba, falla, se ajusta y vuelve a construirse.",
    highlights: [
      { title: "Profesor Luther", text: "Validó personajes, inventario, economía, mascotas, tienda, banners, comercio, batalla y administración." },
      { title: "Thaddeus Morrowind", text: "Reorganizó usuarios, personajes, estadísticas, habilidades e inventario sobre servicios y persistencia SQL." },
      { title: "Aprendizaje transferible", text: "Los errores de integración se transformaron en decisiones de arquitectura y experiencia de usuario." }
    ],
    supportTitle: "Pilares del caso",
    supportItems: [
      "Discord utilizado como interfaz jugable y laboratorio social.",
      "C# y Discord.Net como base común de las dos iteraciones.",
      "JSON para prototipado o estados variables; SQL para datos estructurados.",
      "Game Design técnico unido a implementación, pruebas y refactorización."
    ],
    achievements: [
      "Dos prototipos comparables con objetivos técnicos diferentes.",
      "Sistemas RPG convertidos en flujos reales de Discord.",
      "Evolución documentable desde amplitud funcional hacia escalabilidad.",
      "Caso de estudio útil para Game Design técnico y desarrollo backend."
    ],
    visual: "origin"
  },
  {
    id: "servidor",
    index: "02",
    navTitle: "Servidor",
    navSubtitle: "Canales, ciudades y staff",
    title: "El servidor como mapa vivo del mundo",
    summary: "Cada canal o agrupación de canales funciona como ciudad, región o sección administrativa. La estructura del servidor es, en sí misma, una interfaz jugable del proyecto.",
    kicker: "Estructura de entorno",
    heading: "Canales como ciudades, mundos y capas de gestión",
    body: "La previsión del servidor planteaba un general estable, zonas de ficha y actualización permanentes, secciones para staff y canales-mundo capaces de representar regiones, mercados, rituales o historias. No era un simple orden de chats: era la forma de convertir la navegación del usuario en exploración diegética.",
    highlights: [
      { title: "Ciudades por canal", text: "Las regiones podían existir como categorías o canales específicos, reforzando ambientación y accesibilidad." },
      { title: "Capas de staff", text: "Comandos delicados y revisión de fichas necesitaban espacios reservados y flujos con permisos claros." },
      { title: "Paneles y ayuda", text: "Se planteaban paneles de navegación para moverse entre secciones, lore, mercados y progresión." }
    ],
    supportTitle: "Qué se ordenó desde el inicio",
    supportItems: [
      "General, fichas y actualizaciones se mantienen como ejes fijos.",
      "Canales complementarios para staff, tickets y revisión interna.",
      "Mercados, regiones y farmeo dependen de ubicación y clasificación.",
      "El bot debía dialogar con la estructura del servidor, no pelear contra ella."
    ],
    achievements: [
      "Diseño del servidor pensado como UI narrativa.",
      "Canales ligados a mundos, ciudades y tipos de actividad.",
      "Permisos de roles incorporados desde la lógica de comandos.",
      "Base preparada para tickets, seguimiento y administración."
    ],
    visual: "server"
  },
  {
    id: "personajes",
    index: "03",
    navTitle: "Personajes",
    navSubtitle: "Fichas, árboles y JSON",
    title: "Cada jugador, un archivo; cada personaje, una build",
    summary: "La creación de personaje se transformó en uno de los núcleos del proyecto: flujo visual, selección de rol, profesión y nación, inventario propio y límite de personajes pensados para dungeons y continuidad.",
    kicker: "Sistema de personaje",
    heading: "Creación visual, persistencia y límites útiles",
    body: "El flujo priorizó crear fichas claras y sostenibles: nombre y apodo por modal, selección interactiva de rol, profesión y pathway, estadísticas base fijas, habilidades iniciales y un archivo JSON por usuario con personajes internos. Más adelante se definieron topes de hasta cuatro personajes por usuario para acompasar dungeons, continuidad narrativa y control del abuso.",
    highlights: [
      { title: "CRUD funcional", text: "Crear, consultar y mantener personajes fue uno de los primeros sistemas estables del bot." },
      { title: "JSON por usuario", text: "Cada usuario posee su archivo y dentro de él viven sus personajes, inventarios y estado." },
      { title: "Naturaleza y escalado", text: "Se empezó a pensar un reparto de puntos tipo IV/Naturaleza para dar identidad a cada build." }
    ],
    supportTitle: "Flujo y datos",
    supportItems: [
      "Slash recomendado para crear personaje con interfaz más cómoda.",
      "Soporte de prefijo para consultas rápidas.",
      "Límite de personajes pensado por balance y dungeons.",
      "Inventario y dinero debían convertirse en secciones explícitas del JSON."
    ],
    achievements: [
      "Sistema visual de creación con botones y modales.",
      "Persistencia local por usuario/personaje.",
      "Preparación para árboles de habilidades, nación y secuencias.",
      "Base útil para exportar la lógica a sistemas mayores."
    ],
    visual: "character"
  },
  {
    id: "objetos",
    index: "04",
    navTitle: "Objetos",
    navSubtitle: "Profesiones y economía",
    title: "Materia prima, craft, mercado y progreso regional",
    summary: "Uno de los apartados más complejos del bot fue la clasificación de objetos, profesiones y recursos regionales. El sistema se fue reconstruyendo varias veces hasta llegar a una lógica más clara basada en JSON y categorías.",
    kicker: "Economía jugable",
    heading: "Objetos, profesiones y un mundo que obliga a viajar",
    body: "El proyecto terminó separando objetos primordiales, crafteables, equipables, consumibles, papiros, recetas y materiales regionales. Las profesiones se repartieron tareas específicas, y las regiones pasaron a condicionar el acceso a recursos y ascensos. La economía no era un simple contador de oro: buscaba empujar al jugador a explorar, comerciar y especializarse.",
    highlights: [
      { title: "Profesiones con rol real", text: "Minero, cazador, bibliotecario, herrero, sacerdote o sastre tenían permisos, loops y objetivos diferentes." },
      { title: "JSON de objetos", text: "La solución final apuntó a crear y mantener objetos desde JSON, no a mano uno por uno." },
      { title: "Regiones con identidad", text: "Cada mundo o isla debía tener materiales, recetas y ventajas particulares." }
    ],
    supportTitle: "Notas clave del sistema",
    supportItems: [
      "Clasificación por destino: poción, preparación, materia prima, arma, vestimenta, artefacto.",
      "Mercados regionales y diferencias de acceso según ciudad o continente.",
      "Costos de elaboración, refinado y evolución por tiers.",
      "Papiros como llave de recetas, historia y desbloqueos."
    ],
    achievements: [
      "Profesiones definidas con materias primas asociadas.",
      "Economía pensada con limitantes de repetición y progresión.",
      "Sistema híbrido preparado para comandos o inserción por JSON.",
      "Base conceptual para mercados, tradeo y crafting a gran escala."
    ],
    visual: "economy"
  },
  {
    id: "combate",
    index: "05",
    navTitle: "Combate",
    navSubtitle: "Stats, palabras clave y equipo",
    title: "Del caos inicial a un lenguaje claro de estadísticas",
    summary: "El bot fue ampliando sus estadísticas y equipamiento: daño físico y mágico, resistencias, estamina, armas con atributo principal y secundario, palabras clave y un inventario más pensado para batalla.",
    kicker: "Mecánicas de lucha",
    heading: "Stats visibles, stats base y reglas de equipo",
    body: "El sistema combatió contra sus propias ambiciones. Se redefinieron atributos, se reestructuró la forma de mostrar estadísticas finales frente a las básicas, y se asumió que las armas y equipos debían comunicar claramente qué modifican. Inspiraciones como League of Legends, Genshin Impact y Legends of Runeterra aparecieron en la variedad de stats, palabras clave, slots y efectos especiales.",
    highlights: [
      { title: "Base + extra + total", text: "La lectura de stats se separó entre valor base, adicionales y total final visible." },
      { title: "Equipamiento con slots", text: "Arma, artefacto, armadura y consumibles se pensaron como capas con límites concretos." },
      { title: "Palabras clave", text: "Efectos especiales y arquetipos necesitaban un lenguaje común para no hundirse en puro texto." }
    ],
    supportTitle: "Lo que definió esta etapa",
    supportItems: [
      "Resistencia física y mágica como pares naturales del daño.",
      "Estamina como recurso central en vez de maná.",
      "Armas con atributo plano y bono secundario, pasivo o activa.",
      "Comparación entre stats básicas y finales en ficha/actualización."
    ],
    achievements: [
      "Cálculo dinámico de estadísticas implementado.",
      "Base para futuras batallas, keywords y escalados.",
      "Pensamiento de equipamiento más cercano a un RPG sistémico.",
      "Base lista para migrar a combate más completo."
    ],
    visual: "combat"
  },
  {
    id: "arquitectura",
    index: "06",
    navTitle: "Arquitectura",
    navSubtitle: "C#, servicios y persistencia",
    title: "Dos arquitecturas para dos etapas del proyecto",
    summary: "Profesor Luther utiliza .NET 8, Discord.Net y almacenamiento JSON modular. Thaddeus Morrowind utiliza .NET 9, Discord.Net, MySQL y Entity Framework Core para separar entidades, servicios, vistas y estados temporales.",
    kicker: "Infraestructura",
    heading: "C# como puente entre diseño y sistemas",
    body: "La primera iteración permitió integrar sistemas rápidamente mediante módulos de comandos, servicios y archivos JSON. La segunda reorganizó el dominio mediante entidades, contratos de servicio, vistas de Discord y una base MySQL. La regla técnica resultante es simple: SQL guarda lo estable, JSON conserva estados vivos o generados y C# valida, calcula y ejecuta.",
    highlights: [
      { title: "Profesor Luther", text: "Commands, Services, Models y JsonDataStore para construir un prototipo amplio y portable." },
      { title: "Thaddeus", text: "Features, Data, Discord Views y EF Core para crecer sin mezclar la lógica del dominio." },
      { title: "Seguridad", text: "Tokens y configuración sensible deben permanecer en variables de entorno o secretos locales." }
    ],
    supportTitle: "Detalles técnicos visibles",
    supportItems: [
      "C# con .NET 8 y .NET 9.",
      "Discord.Net 3.19.1 y comandos Slash.",
      "JSON local en Profesor Luther; MySQL y EF Core en Thaddeus.",
      "Preparación para Linux, Bash, Git, Docker y despliegue futuro."
    ],
    achievements: [
      "Arquitectura modular en ambas iteraciones.",
      "Separación progresiva entre datos, lógica y presentación.",
      "Persistencia ajustada según la naturaleza del dato.",
      "Base técnica preparada para ampliar combate, dungeons y progresión."
    ],
    visual: "architecture"
  },
  {
    id: "errores",
    index: "07",
    navTitle: "Errores y recuperación",
    navSubtitle: "Caídas, refactor y victorias",
    title: "Un proyecto que se rompió varias veces, y aprendió",
    summary: "Buena parte del valor del bot vino de reconfigurarlo tras errores, acumulación de funciones, cambios de stats y ampliaciones que lo volvían inestable. La recuperación también es un logro de diseño.",
    kicker: "Seguimiento y resiliencia",
    heading: "Depuración, logging y reconstrucción consciente",
    body: "La documentación deja claro algo importante: el proyecto no fue lineal. Se amplió demasiado, se desconfiguró, hubo que rehacer vistas, volver a pensar los atributos y reconstruir partes enteras. Pero también se recuperaron errores previos, se estabilizaron comandos y se dejó un sistema de logging y manejo de errores mucho más maduro.",
    highlights: [
      { title: "Recuperación", text: "Hubo momentos donde se decidió pausar, rehacer y reiniciar con mejores estándares." },
      { title: "Logging útil", text: "Los errores dejaron de ser solo ruido; empezaron a ser información accionable." },
      { title: "Registro de diseño", text: "El propio seguimiento de ideas, frustraciones y notas ayudó a no perder el hilo del proyecto." }
    ],
    supportTitle: "Errores que se aprendieron",
    supportItems: [
      "Sobreacumulación de lógica en un solo punto.",
      "Necesidad de separar mejor stats, inventario y permisos.",
      "Suspensión temporal de dungeons por complejidad y estrés.",
      "Valor de reiniciar sistemas con estructura más sana."
    ],
    achievements: [
      "Manejo estructurado de errores implementado.",
      "Mensajes claros para fallos de extensión, sync o permisos.",
      "Consola útil para debugging real.",
      "Victoria explícita al recuperar el bot tras fallos previos."
    ],
    visual: "logs"
  },
  {
    id: "legado",
    index: "08",
    navTitle: "Legado",
    navSubtitle: "Hacia Arcane Island",
    title: "De bot narrativo a fundamento de un juego más grande",
    summary: "Este bot no es un desvío menor. Es una pieza del proceso con la que se probaron estructuras, mundos, profesiones, estadísticas, narrativas y maneras de sostener un juego social antes de llevarlo a otro formato.",
    kicker: "Proyección y herencia",
    heading: "Lo que este proyecto deja para Arcane Island y Fantasy Returns",
    body: "Thaddeus Morrowind permitió ensayar mundos, regiones, historias paralelas, profesiones, pathways, objetos y un sistema social persistente. La lógica de Fantasy Returns, las islas, los pergaminos, las historias fragmentadas y la administración de personajes encontró aquí una forma primitiva pero funcional. En ese sentido, el bot es tanto una prueba técnica como un documento jugable de diseño.",
    highlights: [
      { title: "Precuela funcional", text: "Antes del mundo grande, se necesitaba un lugar donde probar cómo vive un sistema." },
      { title: "Diseño con memoria", text: "Muchos elementos de lore, regiones y progresión se consolidaron gracias a esta etapa." },
      { title: "Escalamiento posible", text: "Docker, dashboards, SQL y nuevos frontales son extensiones naturales del trabajo hecho." }
    ],
    supportTitle: "Lo que deja sembrado",
    supportItems: [
      "Base para dashboards administrativos y herramientas externas.",
      "Puente entre rol de Discord y videojuego online más ambicioso.",
      "Sistema de personajes, mundos y objetos con identidad propia.",
      "Ejemplo de cómo un prototipo puede hablar bien del diseñador que lo impulsa."
    ],
    achievements: [
      "Proyecto personal defendible como estudio de diseño de videojuegos.",
      "Conexión directa con Arcane Island y otras ideas del portafolio.",
      "Lore, mecánicas y administración articuladas en un solo sistema.",
      "Una base viva, imperfecta, pero muy útil para seguir construyendo."
    ],
    visual: "legacy"
  }
];

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.innerHTML = content;
  return node;
}

function renderOriginVisual() {
  const wrap = el("div", "tdm-flow-steps");
  [
    ["Profesor Luther", "Prototipo funcional con numerosos sistemas RPG y persistencia JSON."],
    ["Prueba real", "Comandos, botones, economía, inventario y administración dentro de Discord."],
    ["Aprendizajes", "Errores de integración, datos duplicados y necesidad de separar responsabilidades."],
    ["Thaddeus", "Reconstrucción modular con servicios, MySQL, EF Core y estados temporales en JSON."]
  ].forEach(([a, b]) => {
    wrap.appendChild(el("div", "tdm-flow-step", `<strong>${a}</strong><span>${b}</span>`));
  });
  return wrap;
}

function renderServerVisual() {
  const mock = el("div", "tdm-discord-mock");
  const guildBar = el("div", "tdm-guild-bar");
  ["TM", "FR", "ARC", "STF", "??"].forEach((name, i) => {
    const pill = el("div", `tdm-guild-pill ${i === 0 ? "is-active" : ""}`, name);
    guildBar.appendChild(pill);
  });

  const board = el("div", "tdm-channel-board");
  const groups = [
    ["Base", [
      ["# general", "Reglas, anuncios y coordinación global."],
      ["# fichas", "Creación y revisión de personajes."],
      ["# actualizaciones", "Cambios del sistema y notas de versión."]
    ]],
    ["Mundos / Ciudades", [
      ["# forsaken-land", "Ruinas, historia astral y arqueología."],
      ["# silva-veil", "Bosque dual, espíritus y exploración."],
      ["# cyber-nexus", "Tecnología, neón y zonas modernas."]
    ]],
    ["Staff", [
      ["# revisión-staff", "Permisos, tickets y validaciones."],
      ["# mercados-admin", "Control de objetos, loot y precios."],
      ["# acta-seguimiento", "Bitácora de ideas y decisiones."]
    ]]
  ];

  groups.forEach(([name, channels]) => {
    const group = el("section", "tdm-channel-group");
    group.appendChild(el("header", "", name));
    const list = el("div", "tdm-channel-list");
    channels.forEach(([title, desc]) => {
      list.appendChild(el("div", "tdm-server-channel", `<strong>${title}</strong><span>${desc}</span>`));
    });
    group.appendChild(list);
    board.appendChild(group);
  });

  mock.append(guildBar, board);
  return mock;
}

function renderCharacterVisual() {
  const wrap = el("div", "tdm-visual-stack");
  const flow = el("div", "tdm-character-flow");
  [
    ["01 / Modal", "Nombre y apodo"],
    ["02 / Selección", "Rol y profesión"],
    ["03 / Nación", "Pathway o vía"],
    ["04 / Resultado", "Stats, habilidades e inventario"]
  ].forEach(([a,b]) => flow.appendChild(el("div", "tdm-flow-step", `<strong>${a}</strong><span>${b}</span>`)));
  wrap.appendChild(flow);

  const jsonCard = el("pre", "tdm-json-card", `{
  "1234567890": {
    "personajes": {
      "Crow": {
        "rol": "Explorador",
        "profesion": "Bibliotecario",
        "pathway": "Silva Veil",
        "nivel": 1,
        "dinero": 100,
        "inventario": []
      }
    }
  }
}`);
  wrap.appendChild(jsonCard);
  return wrap;
}

function renderEconomyVisual() {
  const wrap = el("div", "tdm-profession-grid");
  [
    ["Minero", "Materia prima mineral, aleaciones y rutas profundas."],
    ["Cazador", "Material animal, drops extra y crafteo dependiente de criatura."],
    ["Herrero", "Armas, refinado y evolución por tiers."],
    ["Bibliotecario", "Papiros, textos, recetas ocultas y recuperación."],
    ["Sacerdote", "Artefactos, rituales y afinidades especiales."],
    ["Cartógrafo", "Mapas, acceso a rutas y lectura de regiones."]
  ].forEach(([a,b]) => wrap.appendChild(el("div", "tdm-profession-card", `<strong>${a}</strong><span>${b}</span>`)));
  return wrap;
}

function renderCombatVisual() {
  const wrap = el("div", "tdm-visual-stack");
  const stats = el("div", "tdm-stats-board");
  [
    ["Base", "100", "Stat inicial + arma o atributo plano."],
    ["Extra", "+24", "Porcentajes, artefactos y pasivas."],
    ["Total", "124", "Valor visible en ficha o combate."]
  ].forEach(([a,b,c]) => {
    stats.appendChild(el("div", "tdm-stat-box", `<strong>${a}</strong><span>${b}</span><small>${c}</small>`));
  });
  wrap.appendChild(stats);

  const cloud = el("div", "tdm-keyword-cloud");
  ["Daño físico", "Daño mágico", "Resistencia física", "Resistencia mágica", "Estamina", "Palabras clave", "Artefacto", "Arma", "Soporte", "Amplificador"].forEach(item => {
    cloud.appendChild(el("span", "", item));
  });
  wrap.appendChild(cloud);
  return wrap;
}

function renderArchitectureVisual() {
  const grid = el("div", "tdm-code-grid");
  [
    ["Discord / Commands", "Slash Commands, componentes, modales y vistas para la interacción."],
    ["Features / Services", "Reglas de usuarios, personajes, inventario, habilidades y economía."],
    ["JSON + MySQL", "Datos locales o temporales frente a persistencia estructurada con EF Core."],
    [".env / Secrets", "Token, servidor y configuración sensible fuera del código público."]
  ].forEach(([a,b]) => grid.appendChild(el("div", "tdm-code-card", `<strong>${a}</strong><span>${b}</span>`)));
  return grid;
}

function renderLogsVisual() {
  const board = el("div", "tdm-log-board");
  [
    ["INFO", "Discord.Net conectado y comandos registrados"],
    ["INFO", "Servicios de usuarios, personajes e inventario cargados"],
    ["INFO", "Migración y contexto de MySQL disponibles"],
    ["WARNING", "Estados temporales conservados fuera de las entidades persistentes"],
    ["ERROR", "Configuración inválida detectada y aislada antes de iniciar"],
    ["DEBUG", "Guardando cambios y registrando actividad del sistema"]
  ].forEach(([a,b]) => {
    const tone = a === "ERROR" ? "err" : a === "WARNING" ? "warn" : "ok";
    board.appendChild(el("div", "tdm-log-row", `<span class="${tone}">${a}</span><span>${b}</span>`));
  });
  return board;
}

function renderLegacyVisual() {
  const wrap = el("div", "tdm-visual-stack");
  const roadmap = el("div", "tdm-roadmap");
  [
    ["Discord RPG Bot", "Validación de comandos, progresión, fichas y economía."],
    ["Fantasy Returns", "Lore, mundos, pergaminos y profesiones con identidad."],
    ["Arcane Island", "Escalamiento hacia una experiencia social más compleja."],
    ["Herramientas futuras", "Docker, dashboards y persistencia más robusta."]
  ].forEach(([a,b]) => roadmap.appendChild(el("div", "tdm-roadmap-card", `<strong>${a}</strong><span>${b}</span>`)));
  wrap.appendChild(roadmap);

  const links = el("div", "tdm-link-grid");
  [
    ["Repo del bot", "Agregar cuando exista o quede público."],
    ["Documento largo", "Pitch técnico, README o investigación completa."],
    ["Video / GIF", "Flujo de creación de personaje o revisión visual."],
    ["Arcane Island", "Vínculo al proyecto grande relacionado."]
  ].forEach(([a,b]) => links.appendChild(el("div", "tdm-link-card", `<strong>${a}</strong><span>${b}</span>`)));
  wrap.appendChild(links);
  return wrap;
}

function renderVisual(type) {
  switch (type) {
    case "origin": return renderOriginVisual();
    case "server": return renderServerVisual();
    case "character": return renderCharacterVisual();
    case "economy": return renderEconomyVisual();
    case "combat": return renderCombatVisual();
    case "architecture": return renderArchitectureVisual();
    case "logs": return renderLogsVisual();
    case "legacy": return renderLegacyVisual();
    default: return el("div", "tdm-flow-step", "<strong>Sin visual</strong><span>Este módulo no tiene una visual activa.</span>");
  }
}

function renderSupportList(items) {
  const ul = el("ul", "");
  items.forEach(item => ul.appendChild(el("li", "", item)));
  return ul;
}

(function initBotDiscordProject() {
  const nav = document.getElementById("moduleNav");
  if (!nav) return;

  const view = document.querySelector(".tdm-view");
  const elements = {
    index: document.getElementById("viewIndex"),
    title: document.getElementById("viewTitle"),
    summary: document.getElementById("viewSummary"),
    kicker: document.getElementById("panelKicker"),
    heading: document.getElementById("panelHeading"),
    body: document.getElementById("panelBody"),
    highlights: document.getElementById("highlightStack"),
    visual: document.getElementById("visualMount"),
    supportTitle: document.getElementById("supportTitle"),
    support: document.getElementById("supportMount"),
    achievements: document.getElementById("achievementList"),
    prev: document.getElementById("prevModule"),
    next: document.getElementById("nextModule")
  };

  let current = 0;
  let animating = false;

  function renderNav() {
    nav.innerHTML = "";
    BOT_MODULES.forEach((module, index) => {
      const button = el("button", `tdm-module-link ${index === current ? "is-active" : ""}`);
      button.type = "button";
      button.innerHTML = `
        <span class="index">${module.index}</span>
        <span class="title">${module.navTitle}</span>
        <span class="subtitle">${module.navSubtitle}</span>
      `;
      button.addEventListener("click", () => setModule(index));
      nav.appendChild(button);
    });
  }

  function fillModule(module) {
    elements.index.textContent = `${module.index} · ${module.navTitle}`;
    elements.title.textContent = module.title;
    elements.summary.textContent = module.summary;
    elements.kicker.textContent = module.kicker;
    elements.heading.textContent = module.heading;
    elements.body.textContent = module.body;

    elements.highlights.innerHTML = "";
    module.highlights.forEach(item => {
      const card = el("article", "tdm-highlight-card", `<strong>${item.title}</strong><span>${item.text}</span>`);
      elements.highlights.appendChild(card);
    });

    elements.visual.innerHTML = "";
    elements.visual.appendChild(renderVisual(module.visual));

    elements.supportTitle.textContent = module.supportTitle;
    elements.support.innerHTML = "";
    elements.support.appendChild(renderSupportList(module.supportItems));

    elements.achievements.innerHTML = "";
    module.achievements.forEach(item => {
      elements.achievements.appendChild(el("li", "", item));
    });
  }

  function setModule(index) {
    if (animating) return;
    animating = true;
    view.classList.add("is-switching");

    window.setTimeout(() => {
      current = (index + BOT_MODULES.length) % BOT_MODULES.length;
      fillModule(BOT_MODULES[current]);
      renderNav();

      requestAnimationFrame(() => {
        view.classList.remove("is-switching");
      });

      window.setTimeout(() => {
        animating = false;
      }, 380);
    }, 180);
  }

  elements.prev.addEventListener("click", () => setModule(current - 1));
  elements.next.addEventListener("click", () => setModule(current + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") setModule(current - 1);
    if (event.key === "ArrowRight") setModule(current + 1);
  });

  fillModule(BOT_MODULES[current]);
  renderNav();
})();
