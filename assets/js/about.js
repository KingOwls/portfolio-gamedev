const aboutSections = [
  {
    id: "presentacion",
    shortLabel: "Inicio",
    badge: "Bloque 01 · Presentación",
    kicker: "Jorge Osorio / JCrow",
    title: "Diseño, desarrollo y análisis como forma de leer los videojuegos",
    intro:
      "Mi nombre es Jorge Osorio, también conocido como JCrow. Soy estudiante de Ingeniería de Sistemas e Informática, líder del Semillero de Diseño y Desarrollo de Videojuegos y escritor de medio tiempo.",
    body:
      "Mi área de interés y estudio se encuentra profundamente vinculada a los videojuegos, a los que siempre he considerado una de las expresiones artísticas más completas de la era contemporánea, hasta el punto de entenderlos como el octavo arte.",
    highlights: [
      "Identidad principal del portafolio: JCrow como figura creativa y técnica.",
      "Interés sostenido por videojuegos como medio artístico y sistema interactivo.",
      "Trabajo entre diseño, estructura, observación y construcción de experiencias."
    ],
    tags: ["JCrow", "Semillero", "Octavo arte", "Narrativa", "Perfil híbrido"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-presentacion.jpg",
      figure: "../../assets/img/about/figures/crow-main.png",
      companion: "../../assets/img/about/companions/crow-idle.gif",
      sprite: null
    }
  },
  {
    id: "enfoque",
    shortLabel: "Proceso",
    badge: "Bloque 02 · Enfoque profesional",
    kicker: "Diseño · Desarrollo · Documentación",
    title: "Pensar un videojuego implica estudiar mucho más que su apariencia",
    intro:
      "Mis principales áreas de especialización son el desarrollo de videojuegos, el diseño de experiencias interactivas y la documentación de proyectos.",
    body:
      "Cuando construyo o diseño los pilares de un videojuego, no me limito a su funcionamiento técnico o visual. Procuro investigar todo lo que puede influir en su identidad y en su resultado final: su historia, sus referencias, el estado del género, la recepción del público, su modelo de monetización y los costos que puede implicar su desarrollo.",
    highlights: [
      "Diseño conceptual de mecánicas, estructura y tono de experiencia.",
      "Documentación de pilares, referencias, contexto y sistemas.",
      "Lectura del género y del entorno antes de construir una propuesta."
    ],
    tags: ["Blueprint", "Sistemas", "Documentación", "Referencias", "Investigación"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-enfoque.jpg",
      figure: "../../assets/img/about/figures/design-board.png",
      companion: "",
      sprite: null
    }
  },
  {
    id: "curiosidad",
    shortLabel: "Curiosidad",
    badge: "Bloque 03 · Relación con los videojuegos",
    kicker: "Jugar también es observar",
    title: "Siempre regreso a la misma pregunta: ¿cómo funciona esto?",
    intro:
      "Siempre he amado los videojuegos, tanto por la experiencia de jugarlos como por la posibilidad de entender cómo funcionan.",
    body:
      "Muchas de las obras que he podido disfrutar, tanto clásicas como modernas, me han llevado siempre al mismo punto de curiosidad: ¿cómo funciona esto?, ¿cómo lograron esta mecánica?, ¿qué pasaría si este sistema cambiara? Esa necesidad de comprender los videojuegos desde dentro ha sido una de las fuerzas que más ha impulsado mi interés por diseñarlos, analizarlos y desarrollarlos.",
    highlights: [
      "Curiosidad técnica y creativa frente a sistemas, géneros y decisiones de diseño.",
      "Observación constante de mecánicas, ritmo, progresión e intención.",
      "Uso de preguntas como motor para imaginar variaciones y nuevas fórmulas."
    ],
    tags: ["Kirby", "Curiosidad", "Mecánicas", "Diseño", "Observación"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-curiosidad.jpg",
      figure: "../../assets/img/about/figures/curiosity-collage.png",
      companion: "../../assets/img/about/companions/undertale-soul.gif",
      sprite: {
        url: "../../assets/img/about/sprites/kirby-walk.png",
        frameCount: 8,
        duration: 800,
        renderWidth: 64,
        renderHeight: 64,
        travelDuration: 12
      }
    }
  },
  {
    id: "herramientas",
    shortLabel: "Herramientas",
    badge: "Bloque 04 · Entornos y prototipos",
    kicker: "Construcción y validación",
    title: "Las herramientas no son el centro, pero sí amplían lo que una idea puede llegar a ser",
    intro:
      "Mi trabajo se apoya en distintas herramientas y entornos que me permiten construir, documentar y experimentar con proyectos interactivos.",
    body:
      "Entre ellos destacan Unity, RPG Maker MV, el desarrollo de bots para Discord, el desarrollo web y distintas herramientas de documentación, planeación y gestión de proyectos. Cada una cumple un papel distinto dentro del proceso: prototipar ideas, organizar sistemas, construir experiencias o validar conceptos.",
    highlights: [
      "Unity y RPG Maker MV para prototipos y sistemas jugables.",
      "Bots de Discord y desarrollo web como espacios de experimentación funcional.",
      "Herramientas de documentación y planeación para sostener el proceso creativo."
    ],
    tags: ["Unity", "RPG Maker MV", "Discord", "Web", "Gestión"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-tools.jpg",
      figure: "../../assets/img/about/figures/tools-hub.png",
      companion: "",
      sprite: {
        url: "../../assets/img/about/sprites/clubpenguin-slide.png",
        frameCount: 6,
        duration: 760,
        renderWidth: 72,
        renderHeight: 72,
        travelDuration: 14
      }
    }
  },
  {
    id: "proyectos",
    shortLabel: "Proyectos",
    badge: "Bloque 05 · Líneas destacadas",
    kicker: "Ideas que ya tienen forma",
    title: "Cada proyecto abre una forma distinta de pensar, construir o documentar un videojuego",
    intro:
      "A lo largo de este recorrido he trabajado y desarrollado ideas en distintas líneas de proyecto, desde conceptos narrativos hasta propuestas técnicas e infraestructura multijugador.",
    body:
      "Entre ellas se encuentran Symphony of Justice, Arcane Island, Bot de Discord, conceptos y trabajos del semillero y servidores en línea. Cada una responde a una inquietud distinta: diseño de mundo, sistemas interactivos, documentación, automatización o experiencia multijugador.",
    highlights: [
      "Symphony of Justice como propuesta de diseño centrada en cuatro ramas de la justicia.",
      "Arcane Island como proyecto MMO de memoria, origen e incertidumbre.",
      "Bot de Discord, semillero y servidores en línea como líneas complementarias de exploración."
    ],
    tags: ["Symphony of Justice", "Arcane Island", "Bot de Discord", "Semillero", "Servidores"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-projects.jpg",
      figure: "../../assets/img/about/figures/projects-collage.png",
      companion: "",
      sprite: null
    }
  },
  {
    id: "filosofia",
    shortLabel: "Visión",
    badge: "Bloque 06 · Filosofía",
    kicker: "Los videojuegos como obra viva",
    title: "Todo videojuego puede estudiarse, reinterpretarse y transformarse",
    intro:
      "Considero que los videojuegos son una de las expresiones artísticas más representativas de la era contemporánea y que cada uno de ellos puede ser visto como una obra que merece ser comprendida en profundidad.",
    body:
      "Creo que un videojuego puede construirse desde la innovación directa, desde la reinterpretación de fórmulas existentes o incluso desde la deconstrucción de las bases que dieron forma a un género. Por eso me interesa tanto la observación, la ingeniería inversa y la manera en que los géneros cambian, se mezclan y se transforman con el tiempo.",
    highlights: [
      "Los videojuegos como arte contemporáneo y objeto de análisis.",
      "La ingeniería inversa y la reinterpretación como herramientas creativas.",
      "La evolución de los géneros como uno de los aspectos más fascinantes del medio."
    ],
    tags: ["Octavo arte", "Ingeniería inversa", "Géneros", "Comunidad", "Evolución"],
    visual: {
      background: "../../assets/img/about/backgrounds/about-philosophy.jpg",
      figure: "../../assets/img/about/figures/philosophy-sigil.png",
      companion: "../../assets/img/about/companions/crow-idle.gif",
      sprite: null
    }
  }
];

(function initAboutPage() {
  const ring = document.getElementById("aboutWheelRing");
  if (!ring) return;

  const elements = {
    scene: document.getElementById("aboutScene"),
    ring,
    prevBtn: document.getElementById("aboutPrevBtn"),
    nextBtn: document.getElementById("aboutNextBtn"),
    badge: document.getElementById("aboutDisplayBadge"),
    kicker: document.getElementById("aboutDisplayKicker"),
    title: document.getElementById("aboutDisplayTitle"),
    intro: document.getElementById("aboutDisplayIntro"),
    body: document.getElementById("aboutDisplayBody"),
    highlights: document.getElementById("aboutDisplayHighlights"),
    tags: document.getElementById("aboutDisplayTags"),
    bg: document.getElementById("aboutDisplayBg"),
    figure: document.getElementById("aboutDisplayFigure"),
    companion: document.getElementById("aboutDisplayCompanion"),
    spriteTrack: document.getElementById("aboutDisplaySpriteTrack"),
    sprite: document.getElementById("aboutDisplaySprite")
  };

  const state = {
    activeIndex: 0,
    autoRotate: null,
    paused: false,
    nodeButtons: [],
    isAnimating: false,
    isFirstRender: true
  };

  function safeImage(img, src, alt = "") {
    if (!img) return;

    if (!src) {
      img.classList.add("about-hidden");
      img.removeAttribute("src");
      return;
    }

    img.classList.remove("about-hidden");
    img.src = src;
    img.alt = alt;
    img.onerror = () => {
      img.classList.add("about-hidden");
    };
  }

  function shortestOffset(index, active, total) {
    let offset = index - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  }

  function createWheelNodes() {
    ring.innerHTML = "";
    state.nodeButtons = [];

    aboutSections.forEach((section, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "about-wheel-node";
      button.setAttribute("aria-label", `Ir a ${section.title}`);

      button.innerHTML = `
        <span class="about-wheel-node-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="about-wheel-node-label">${section.shortLabel}</span>
      `;

      button.addEventListener("click", () => {
        setActiveIndex(index, true);
      });

      ring.appendChild(button);
      state.nodeButtons.push(button);
    });
  }

  function positionWheelNodes() {
    const total = aboutSections.length;

    const centerX = 92;
    const centerY = 210;
    const radius = 154;
    const step = 38;

    state.nodeButtons.forEach((button, index) => {
      const offset = shortestOffset(index, state.activeIndex, total);
      const angleDeg = offset * step;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = centerX + Math.cos(angleRad) * radius;
      const y = centerY + Math.sin(angleRad) * radius;

      const scale = offset === 0 ? 1.12 : Math.max(0.78, 1 - Math.abs(offset) * 0.1);
      const opacity = Math.max(0.42, 1 - Math.abs(offset) * 0.12);

      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.style.transform = `translate(-50%, -50%) scale(${scale})`;
      button.style.opacity = `${opacity}`;
      button.style.zIndex = `${100 - Math.abs(offset)}`;

      button.classList.toggle("is-active", index === state.activeIndex);
    });
  }

  function renderHighlights(items) {
    elements.highlights.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      elements.highlights.appendChild(li);
    });
  }

  function renderTags(items) {
    elements.tags.innerHTML = "";
    items.forEach((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      elements.tags.appendChild(tag);
    });
  }

  function setSprite(spriteData) {
    if (!spriteData) {
      elements.spriteTrack.classList.remove("is-active");
      elements.sprite.classList.add("about-hidden");
      elements.sprite.style.removeProperty("--sprite-url");
      return;
    }

    elements.spriteTrack.classList.add("is-active");
    elements.sprite.classList.remove("about-hidden");

    elements.sprite.style.setProperty("--sprite-url", `url("${spriteData.url}")`);
    elements.sprite.style.setProperty("--sprite-frame-count", spriteData.frameCount || 1);
    elements.sprite.style.setProperty("--sprite-duration", `${spriteData.duration || 800}ms`);
    elements.sprite.style.setProperty("--sprite-render-width", `${spriteData.renderWidth || 64}px`);
    elements.sprite.style.setProperty("--sprite-render-height", `${spriteData.renderHeight || 64}px`);
    elements.sprite.style.setProperty("--travel-duration", `${spriteData.travelDuration || 12}s`);
  }

  function applySectionContent(section) {
    elements.badge.textContent = section.badge;
    elements.kicker.textContent = section.kicker;
    elements.title.textContent = section.title;
    elements.intro.textContent = section.intro;
    elements.body.textContent = section.body;

    renderHighlights(section.highlights);
    renderTags(section.tags);

    if (section.visual?.background) {
      elements.bg.style.backgroundImage = `
        linear-gradient(180deg, rgba(3, 7, 18, 0.25), rgba(3, 7, 18, 0.7)),
        radial-gradient(circle at 30% 25%, rgba(255,255,255,0.06), transparent 30%),
        url("${section.visual.background}")
      `;
    } else {
      elements.bg.style.backgroundImage = `
        linear-gradient(180deg, rgba(3, 7, 18, 0.25), rgba(3, 7, 18, 0.7)),
        radial-gradient(circle at 30% 25%, rgba(255,255,255,0.06), transparent 30%)
      `;
    }

    safeImage(elements.figure, section.visual?.figure, section.title);
    safeImage(elements.companion, section.visual?.companion, `${section.title} companion`);
    setSprite(section.visual?.sprite);

    positionWheelNodes();
  }

  function renderSection(animate = true) {
    const section = aboutSections[state.activeIndex];

    if (state.isFirstRender || !animate) {
      applySectionContent(section);
      state.isFirstRender = false;
      return;
    }

    if (state.isAnimating) return;
    state.isAnimating = true;

    elements.scene.classList.add("is-switching");

    window.setTimeout(() => {
      applySectionContent(section);

      requestAnimationFrame(() => {
        elements.scene.classList.remove("is-switching");
        window.setTimeout(() => {
          state.isAnimating = false;
        }, 520);
      });
    }, 220);
  }

  function setActiveIndex(index, userTriggered = false) {
    const total = aboutSections.length;
    state.activeIndex = (index + total) % total;
    renderSection(!state.isFirstRender);

    if (userTriggered) {
      restartAutoplay();
    }
  }

  function nextSection(userTriggered = false) {
    setActiveIndex(state.activeIndex + 1, userTriggered);
  }

  function prevSection(userTriggered = false) {
    setActiveIndex(state.activeIndex - 1, userTriggered);
  }

  function startAutoplay() {
    stopAutoplay();
    state.autoRotate = setInterval(() => {
      if (!state.paused && !state.isAnimating) {
        nextSection(false);
      }
    }, 9000);
  }

  function stopAutoplay() {
    if (state.autoRotate) {
      clearInterval(state.autoRotate);
      state.autoRotate = null;
    }
  }

  function restartAutoplay() {
    startAutoplay();
  }

  function bindEvents() {
    elements.prevBtn?.addEventListener("click", () => prevSection(true));
    elements.nextBtn?.addEventListener("click", () => nextSection(true));

    elements.scene?.addEventListener("mouseenter", () => {
      state.paused = true;
    });

    elements.scene?.addEventListener("mouseleave", () => {
      state.paused = false;
    });

    window.addEventListener("resize", positionWheelNodes);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        nextSection(true);
      }

      if (event.key === "ArrowLeft") {
        prevSection(true);
      }
    });
  }

  createWheelNodes();
  bindEvents();
  renderSection(false);
  startAutoplay();
})();