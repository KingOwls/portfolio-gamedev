
const EJU_SECTIONS = [
  {
    id: "inicio",
    kicker: "Tramo 01 · Premisa",
    badge: "Inicio",
    title: "Un corredor de fe, deuda y condena",
    intro: "El proyecto plantea un RPG de evolución narrativa donde las decisiones del protagonista deforman su estado interno y preparan distintos finales.",
    body: "La propuesta mezcla una estructura capitular con ramificaciones morales, un árbol de habilidades y un tono de horror teológico. La base del sistema gira en torno a cinco estados: Humanidad, Moralidad, Justicia, Santificación y Avaricia.",
    highlights: [
      "RPG narrativo con progresión por capítulos.",
      "Cinco ramas internas que alteran habilidades, lectura del mundo y final.",
      "Tono oscuro: exorcismo, teología, filosofía, demonios y tiempo."
    ],
    tags: ["RPG", "Narrativa", "Horror", "Árbol de habilidades", "Finales múltiples"],
    visual: { type: "sigil" }
  },
  {
    id: "ellis",
    kicker: "Tramo 02 · Protagonista",
    badge: "Ellis",
    title: "Ellis Baneblood, el exorcista del último juicio",
    intro: "Ellis es un sacerdote británico especializado en exorcismo, graduado en teología y psicología, desgastado por el estrés, la abstinencia, la culpa y una paz mental que nunca termina de llegar.",
    body: "Su perfil mezcla oficio religioso, trabajo terapéutico y una tensión constante entre humanidad y condena. Tiene 27 años, cabello negro con mechones blancos, ojos grises y una postura cansada. La carga emocional del personaje define el tono entero del juego.",
    highlights: [
      "Sacerdote exorcista con pensamiento agnóstico y referencias budistas.",
      "Ambición: encontrar paz en mente y alma mientras las deudas lo consumen.",
      "Síndrome del impostor, del guardián y fuerte miedo a la vulnerabilidad, al abandono y al fracaso."
    ],
    tags: ["Ellis Baneblood", "Sacerdote", "Psicología", "Exorcismo", "Británico"],
    visual: {
      type: "character",
      image: "../../assets/img/projects/exorcista-del-ultimo-juicio/ellis-baneblood.png",
      fallback: "ELLIS",
      role: "Protagonista",
      tree: ["Humanidad", "Moralidad", "Justicia"],
      appearance: "Cabello oscuro con mechones blancos, ojos grises, porte cansado, sotana o abrigo de exorcista contemporáneo."
    }
  },
  {
    id: "ramas",
    kicker: "Tramo 03 · Ramas del alma",
    badge: "Ramas",
    title: "Cinco deformaciones del alma, cinco maneras de terminar",
    intro: "El árbol de habilidades se divide en Humanidad, Moralidad, Justicia, Santificación y Avaricia. No solo cambian el combate: también definen el final del protagonista.",
    body: "Cada rama impulsa una forma distinta de leer el sufrimiento, la culpa, la fe y el pacto con lo demoníaco. La estructura funciona como una versión ideológica del progreso: en vez de ganar solo poder, Ellis gana una forma de ser.",
    highlights: [
      "Humanidad: perdón, sanación y retorno a una vida simple.",
      "Moralidad: servicio, equilibrio y recuerdo silencioso del sirviente del tiempo.",
      "Justicia, Santificación y Avaricia llevan la historia hacia sacrificio, jerarquía religiosa o pacto inmortal."
    ],
    tags: ["Humanidad", "Moralidad", "Justicia", "Santificación", "Avaricia"],
    visual: { type: "radar" }
  },
  {
    id: "capitulos",
    kicker: "Tramo 04 · Viaje",
    badge: "Capítulos",
    title: "Ocho capítulos como estaciones de una condena",
    intro: "El juego se organiza en ocho capítulos con lugares, antagonistas y conflictos específicos: manicomio, bruja, juicio, tiempo, herejía, secta, asesino maldito y especialistas del mundo.",
    body: "El Capítulo 1, dedicado a un antiguo manicomio construido sobre un cementerio, funciona como punto de partida y tutorial narrativo. Ahí se activan enemigos, exploración, saqueo, inventario y los primeros márgenes de crecimiento del árbol.",
    highlights: [
      "Capítulo 1: antiguo manicomio, enemigos espectrales y purificación.",
      "Capítulos posteriores: bruja, juicio, investigación del tiempo, teólogo hereje, secta satánica y asesino maldito.",
      "La progresión por capítulo desbloquea nuevas ramas, técnicas y decisiones."
    ],
    tags: ["Capítulo 1", "Manicomio", "Bruja", "Juicio", "Tiempo", "Herejía"],
    visual: { type: "minimap" }
  },
  {
    id: "personajes",
    kicker: "Tramo 05 · Reparto",
    badge: "Reparto",
    title: "Aliados, testigos y ecos del mismo mundo roto",
    intro: "El proyecto ya delimita figuras clave como el sirviente del tiempo, el ingeniero tarotista, el bartender, el bibliotecario y la periodista adoptada por el protagonista.",
    body: "Estos personajes sirven como nodos emocionales, puentes de información o reflejos del estado de Ellis. La periodista funciona casi como hija adoptiva; el bibliotecario conecta con la investigación y el sirviente del tiempo con el eje temporal del proyecto.",
    highlights: [
      "Sirviente del tiempo: vínculo directo con el eje cronológico del juego.",
      "Bibliotecario y periodista: apoyo narrativo, investigación y humanidad.",
      "Ingeniero tarotista y bartender: color de mundo, rutas paralelas y tono."
    ],
    tags: ["Sirviente del tiempo", "Periodista", "Bibliotecario", "Tarotista", "Bartender"],
    visual: {
      type: "characters-grid",
      items: [
        { name: "Sirviente del tiempo", role: "Custodio del eje temporal" },
        { name: "Ingeniero tarotista", role: "Tecnología ritual y símbolos" },
        { name: "Bartender", role: "Red social y rumores" },
        { name: "Bibliotecario", role: "Textos, archivos, investigación" },
        { name: "Periodista", role: "Hija adoptiva y testigo" }
      ]
    }
  },
  {
    id: "tecnicas",
    kicker: "Tramo 06 · Técnicas",
    badge: "Combate",
    title: "Técnicas rituales, heridas del alma y combate por turnos",
    intro: "Las habilidades principales aparecen como técnicas rituales: Cadena de las Almas Migrantes, Libro de los 7 Principios, Cartas de la Última Visión, El Tiempo y el Relojero, Los Ojos de Dios, Acuerdo Ligado y Último Exorcismo.",
    body: "A esto se suman técnicas secundarias ganadas mediante misiones: Extensión de Alma Oscura, Corrupted Kingdom y Jardinero de las Almas. El combate funciona por turnos y combina oficio religioso, ocultismo, psicología y pactos.",
    highlights: [
      "Técnicas principales ligadas a la historia y al rol de exorcista.",
      "Técnicas secundarias obtenidas por rutas paralelas y misiones específicas.",
      "Las habilidades secundarias pueden complementar o alterar ciertos finales."
    ],
    tags: ["Turnos", "Último Exorcismo", "Cadena", "Libro", "Acuerdo Ligado"],
    visual: { type: "tech-tree" }
  },
  {
    id: "finales",
    kicker: "Tramo 07 · Desenlaces",
    badge: "Finales",
    title: "Cada voluntad abre un final distinto y una condena distinta",
    intro: "Los finales responden a la expansión del árbol. Humanidad regresa al mundo simple; Moralidad continúa el servicio; Justicia sella su propia vida; Santificación asciende dentro de la fe; Avaricia acepta el pacto inmortal.",
    body: "La estructura evita un cierre único. Cada ruta empuja a Ellis hacia una interpretación del deber, la pérdida, el amor no dicho y la presencia demoníaca. El final no solo responde a poder acumulado, sino a la clase de persona que se volvió.",
    highlights: [
      "Humanidad: abandonar votos y volver a ayudar como psicólogo.",
      "Moralidad: seguir sirviendo mientras el mundo lo olvida.",
      "Justicia, Santificación y Avaricia: sacrificio, jerarquía o inmortalidad errante."
    ],
    tags: ["Finales", "Condena", "Pacto", "Sacrificio", "Religión"],
    visual: { type: "endings" }
  },
  {
    id: "cierre",
    kicker: "Tramo 08 · Síntesis",
    badge: "Cierre",
    title: "Un proyecto de pasillos, voluntad y teología jugable",
    intro: "Como pieza de portafolio, este proyecto se sostiene sobre un protagonista fuerte, una estructura por capítulos, una lógica de ramas morales y un tono visual de horror religioso contemporáneo.",
    body: "La mejor forma de presentarlo es como una travesía de profundidad: un corredor con luz al fondo donde cada viñeta no es solo una sección del GDD, sino una etapa en la degradación o redención del protagonista.",
    highlights: [
      "Identidad visual clara: pasillos, luz final, capítulos y estaciones.",
      "Mecánica central basada en ramas ideológicas más que en simple nivel.",
      "Base muy útil para convertirse en RPG narrativo, metroidvania de pasillos o aventura por actos."
    ],
    tags: ["Portafolio", "Diseño narrativo", "Pasillo", "Luz al fondo", "RPG oscuro"],
    visual: { type: "sigil" }
  }
];

(() => {
  const experience = document.getElementById("ejuExperience");
  if (!experience) return;

  const panel = document.getElementById("ejuPanel");
  const title = document.getElementById("ejuPanelTitle");
  const kicker = document.getElementById("ejuPanelKicker");
  const badge = document.getElementById("ejuPanelBadge");
  const intro = document.getElementById("ejuPanelIntro");
  const body = document.getElementById("ejuPanelBody");
  const highlights = document.getElementById("ejuHighlights");
  const tags = document.getElementById("ejuTags");
  const indexNav = document.getElementById("ejuIndexNav");
  const slices = document.getElementById("ejuCorridorSlices");
  const runner = document.getElementById("ejuRunner");
  const visualFrame = document.getElementById("ejuVisualFrame");
  const visualTitle = document.getElementById("ejuVisualTitle");
  const prevBtn = document.getElementById("ejuPrevBtn");
  const nextBtn = document.getElementById("ejuNextBtn");

  const state = {
    index: 0,
    animating: false,
    buttons: []
  };

  function createIndex() {
    indexNav.innerHTML = "";
    state.buttons = [];
    EJU_SECTIONS.forEach((section, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "eju-index-btn";
      btn.innerHTML = `<small>${String(index + 1).padStart(2, "0")}</small><span>${section.title}</span>`;
      btn.addEventListener("click", () => goTo(index));
      indexNav.appendChild(btn);
      state.buttons.push(btn);
    });
  }

  function createSlices() {
    slices.innerHTML = "";
    EJU_SECTIONS.forEach((section, index) => {
      const slice = document.createElement("div");
      slice.className = `eju-slice ${index % 2 === 0 ? "is-left" : "is-right"}`;
      slice.dataset.index = index;
      slice.innerHTML = `
        <div class="eju-slice-card">
          <strong>${String(index + 1).padStart(2, "0")} · ${section.badge}</strong>
          <small>${section.title}</small>
        </div>
      `;
      slices.appendChild(slice);
    });
  }

  function updateSlices() {
    const all = [...slices.children];
    all.forEach((slice, index) => {
      const distance = index - state.index;
      const abs = Math.abs(distance);
      const z = 520 - abs * 120;
      const scale = Math.max(0.4, 1 - abs * 0.12);
      const y = distance * 42;
      const x = distance * 12;
      slice.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) scale(${scale})`;
      slice.style.opacity = `${Math.max(.16, 1 - abs * .18)}`;
      slice.style.filter = `blur(${Math.min(3, abs * .7)}px)`;
    });

    const total = EJU_SECTIONS.length - 1 || 1;
    const progress = state.index / total;
    runner.style.bottom = `${20 + progress * 38}%`;
    runner.style.transform = `translateX(-50%) scale(${1 - progress * 0.12})`;
  }

  function renderTags(items) {
    tags.innerHTML = "";
    items.forEach(item => {
      const el = document.createElement("span");
      el.textContent = item;
      tags.appendChild(el);
    });
  }

  function renderHighlights(items) {
    highlights.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      highlights.appendChild(li);
    });
  }

  function buildSigil() {
    return `
      <svg class="eju-stat-svg" viewBox="0 0 300 220" aria-hidden="true">
        <defs>
          <radialGradient id="ejuGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(185,210,107,0.9)"/>
            <stop offset="55%" stop-color="rgba(121,184,255,0.25)"/>
            <stop offset="100%" stop-color="rgba(121,184,255,0)"/>
          </radialGradient>
        </defs>
        <circle cx="150" cy="110" r="68" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
        <circle cx="150" cy="110" r="42" fill="url(#ejuGlow)" />
        <path d="M150 24 L177 82 L239 90 L192 132 L205 194 L150 162 L95 194 L108 132 L61 90 L123 82 Z"
          fill="none" stroke="rgba(185,210,107,.75)" stroke-width="3"/>
        <circle cx="150" cy="110" r="9" fill="rgba(255,255,255,.92)"/>
      </svg>`;
  }

  function buildRadar() {
    const labels = ["Humanidad", "Moralidad", "Justicia", "Santificación", "Avaricia"];
    const values = [82, 64, 73, 58, 49];
    const centerX = 150, centerY = 110, radius = 70;
    const points = values.map((v, i) => {
      const angle = (-90 + (360 / values.length) * i) * Math.PI / 180;
      const r = radius * (v / 100);
      return `${centerX + Math.cos(angle) * r},${centerY + Math.sin(angle) * r}`;
    }).join(" ");
    const axes = labels.map((label, i) => {
      const angle = (-90 + (360 / labels.length) * i) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const lx = centerX + Math.cos(angle) * (radius + 18);
      const ly = centerY + Math.sin(angle) * (radius + 18);
      return `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,.15)" />
              <text x="${lx}" y="${ly}" fill="rgba(238,242,248,.78)" font-size="11" text-anchor="middle">${label}</text>`;
    }).join("");
    return `
      <svg class="eju-stat-svg" viewBox="0 0 300 220" aria-hidden="true">
        <polygon points="150,40 206,79 185,145 115,145 94,79" fill="none" stroke="rgba(255,255,255,.12)"/>
        <polygon points="150,58 190,86 175,132 125,132 110,86" fill="none" stroke="rgba(255,255,255,.08)"/>
        ${axes}
        <polygon points="${points}" fill="rgba(185,210,107,.25)" stroke="rgba(185,210,107,.88)" stroke-width="2.5"/>
      </svg>`;
  }

  function buildMinimap() {
    const nodes = [
      {x:58, y:114, label:"Manicomio"},
      {x:104, y:74, label:"Bruja"},
      {x:146, y:122, label:"Juicio"},
      {x:188, y:70, label:"Tiempo"},
      {x:230, y:124, label:"Hereje"},
      {x:264, y:86, label:"Secta"}
    ];
    const lines = nodes.slice(1).map((n, i) => {
      const prev = nodes[i];
      return `<line x1="${prev.x}" y1="${prev.y}" x2="${n.x}" y2="${n.y}" stroke="rgba(121,184,255,.45)" stroke-width="3" stroke-linecap="round" />`;
    }).join("");
    const circles = nodes.map((n, i) => `
      <g>
        <circle cx="${n.x}" cy="${n.y}" r="${i === 0 ? 10 : 8}" fill="${i === 0 ? 'rgba(185,210,107,.9)' : 'rgba(121,184,255,.86)'}"/>
        <circle cx="${n.x}" cy="${n.y}" r="${i === 0 ? 18 : 15}" fill="none" stroke="rgba(255,255,255,.15)" />
        <text x="${n.x}" y="${n.y + 30}" fill="rgba(238,242,248,.8)" font-size="11" text-anchor="middle">${n.label}</text>
      </g>`).join("");
    return `<svg class="eju-minimap-svg" viewBox="0 0 320 220" aria-hidden="true">
      <rect x="14" y="16" width="292" height="188" rx="18" fill="rgba(9,12,20,.25)" stroke="rgba(255,255,255,.06)" />
      ${lines}${circles}
    </svg>`;
  }

  function buildTechTree() {
    const nodes = [
      ["Cadena de las almas migrantes", 42, 42],
      ["Libro de los 7 principios", 170, 36],
      ["Cartas de la última visión", 254, 88],
      ["El tiempo y el relojero", 132, 112],
      ["Los ojos de Dios", 58, 170],
      ["Acuerdo ligado", 198, 170],
      ["Último exorcismo", 136, 200]
    ];
    const lines = [
      [0,3],[1,3],[3,2],[3,4],[3,5],[4,6],[5,6]
    ].map(([a,b]) => {
      const na = nodes[a], nb = nodes[b];
      return `<line x1="${na[1]}" y1="${na[2]}" x2="${nb[1]}" y2="${nb[2]}" stroke="rgba(185,210,107,.35)" stroke-width="2" />`;
    }).join("");
    const circles = nodes.map((n, i) => `
      <g>
        <circle cx="${n[1]}" cy="${n[2]}" r="${i===6?12:10}" fill="${i===6?'rgba(185,210,107,.92)':'rgba(121,184,255,.88)'}"/>
        <circle cx="${n[1]}" cy="${n[2]}" r="${i===6?20:17}" fill="none" stroke="rgba(255,255,255,.14)" />
        <text x="${n[1]}" y="${n[2] + 28}" fill="rgba(238,242,248,.8)" font-size="10" text-anchor="middle">${n[0]}</text>
      </g>`).join("");
    return `<svg class="eju-stat-svg" viewBox="0 0 300 240" aria-hidden="true">${lines}${circles}</svg>`;
  }

  function buildEndings() {
    const items = [
      {name:"Humanidad", color:"rgba(185,210,107,.9)"},
      {name:"Moralidad", color:"rgba(121,184,255,.9)"},
      {name:"Justicia", color:"rgba(248,221,125,.9)"},
      {name:"Santificación", color:"rgba(211,211,241,.9)"},
      {name:"Avaricia", color:"rgba(180,105,105,.9)"}
    ];
    return `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:.55rem;padding:.75rem;height:100%;align-items:end;">
      ${items.map((item, i) => `
        <div style="display:grid;gap:.55rem;justify-items:center;">
          <div style="width:100%;height:${90 + i*18}px;border-radius:14px 14px 6px 6px;background:linear-gradient(180deg, ${item.color}, rgba(8,11,21,.95));border:1px solid rgba(255,255,255,.08)"></div>
          <small style="text-align:center;color:rgba(238,242,248,.78);font-size:.68rem;line-height:1.2">${item.name}</small>
        </div>`).join("")}
    </div>`;
  }

  function buildCharactersGrid(items) {
    return `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:.55rem;padding:.7rem;">
      ${items.map((item, idx) => `
        <div style="padding:.7rem;border-radius:14px;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.03);">
          <strong style="display:block;font-size:.84rem;">${item.name}</strong>
          <small style="display:block;margin-top:.2rem;color:rgba(185,210,107,.85);font-size:.68rem;">${item.role}</small>
        </div>`).join("")}
    </div>`;
  }

  function renderVisual(section) {
    visualFrame.innerHTML = "";
    visualTitle.textContent = "Visual";
    const visual = section.visual || {type:"sigil"};

    if (visual.type === "character") {
      visualTitle.textContent = "Ficha previa";
      const wrap = document.createElement("div");
      wrap.className = "eju-character-card";
      wrap.innerHTML = `
        <div class="eju-character-portrait">
          <img src="${visual.image}" alt="${section.title}" />
          <div class="eju-character-placeholder">${visual.fallback || "PNG"}</div>
        </div>
        <div class="eju-character-copy">
          <strong>${section.title}</strong>
          <small>${visual.role || ""}</small>
          <p>${visual.appearance || ""}</p>
          <div class="eju-character-list">
            ${(visual.tree || []).map(item => `<span>${item}</span>`).join("")}
          </div>
        </div>
      `;
      const img = wrap.querySelector("img");
      img.addEventListener("load", () => {
        const ph = wrap.querySelector(".eju-character-placeholder");
        if (ph) ph.style.display = "none";
      });
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
      visualFrame.appendChild(wrap);
      return;
    }

    const map = {
      sigil: buildSigil,
      radar: buildRadar,
      minimap: buildMinimap,
      "tech-tree": buildTechTree,
      endings: buildEndings,
      "characters-grid": () => buildCharactersGrid(visual.items || [])
    };
    visualFrame.innerHTML = (map[visual.type] || buildSigil)();
  }

  function renderSection() {
    const section = EJU_SECTIONS[state.index];
    panel.classList.add("is-switching");
    setTimeout(() => {
      kicker.textContent = section.kicker;
      badge.textContent = section.badge;
      title.textContent = section.title;
      intro.textContent = section.intro;
      body.textContent = section.body;
      renderHighlights(section.highlights);
      renderTags(section.tags);
      renderVisual(section);
      state.buttons.forEach((btn, idx) => btn.classList.toggle("is-active", idx === state.index));
      updateSlices();
      prevBtn.disabled = state.index === 0;
      nextBtn.disabled = state.index === EJU_SECTIONS.length - 1;
      panel.classList.remove("is-switching");
    }, 180);
  }

  function goTo(index) {
    const total = EJU_SECTIONS.length;
    state.index = Math.max(0, Math.min(index, total - 1));
    renderSection();
  }

  function handleWheel(event) {
    if (window.innerWidth <= 960) return;
    event.preventDefault();
    if (state.animating) return;
    state.animating = true;
    if (event.deltaY > 0) {
      goTo(state.index + 1);
    } else if (event.deltaY < 0) {
      goTo(state.index - 1);
    }
    setTimeout(() => state.animating = false, 420);
  }

  function bind() {
    createIndex();
    createSlices();
    renderSection();

    prevBtn.addEventListener("click", () => goTo(state.index - 1));
    nextBtn.addEventListener("click", () => goTo(state.index + 1));

    experience.addEventListener("wheel", handleWheel, { passive: false });

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") goTo(state.index + 1);
      if (event.key === "ArrowUp" || event.key === "PageUp") goTo(state.index - 1);
    });

    document.querySelectorAll("[data-jump]").forEach(btn => {
      btn.addEventListener("click", () => goTo(Number(btn.dataset.jump || 0)));
    });
  }

  bind();
})();
