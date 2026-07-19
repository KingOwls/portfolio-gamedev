const EPIC_CHAPTERS = [
  { id: "concepto", label: "01 · Concepto", short: "Concepto" },
  { id: "protagonista", label: "02 · Protagonista", short: "Héroe" },
  { id: "corvin", label: "03 · Corvin", short: "Corvin" },
  { id: "mundos", label: "04 · Mundos", short: "Mundos" },
  { id: "baston", label: "05 · Bastón", short: "Bastón" },
  { id: "legado", label: "06 · Legado", short: "Legado" },
  { id: "mercado", label: "07 · Pitch", short: "Pitch" },
  { id: "assets", label: "08 · Activos", short: "Activos" }
];

(function initEpicMcDuckProject() {
  const track = document.getElementById("epicTrack");
  const stopsHost = document.getElementById("epicStops");
  const prevBtn = document.getElementById("epicPrevBtn");
  const nextBtn = document.getElementById("epicNextBtn");
  const chapters = document.getElementById("epicChapters");
  const stageLabel = document.getElementById("epicStageLabel");
  const stageHint = document.getElementById("epicStageHint");
  const page = document.documentElement;

  if (!track || !stopsHost || !prevBtn || !nextBtn || !chapters) return;

  let activeIndex = 0;
  let wheelLocked = false;

  page.style.setProperty("--em-stage-count", EPIC_CHAPTERS.length);

  function buildStops() {
    EPIC_CHAPTERS.forEach((chapter, index) => {
      const stop = document.createElement("button");
      stop.type = "button";
      stop.className = "em-stop";
      stop.setAttribute("aria-label", `Ir a ${chapter.short}`);
      stop.style.left = `calc(5% + ((90% / ${EPIC_CHAPTERS.length - 1}) * ${index}))`;
      stop.innerHTML = `
        <span class="em-stop-dot"></span>
        <small>${chapter.short}</small>
      `;
      stop.addEventListener("click", () => goToStage(index, true));
      stopsHost.appendChild(stop);
    });
  }

  function updateStops() {
    [...stopsHost.children].forEach((stop, index) => {
      stop.classList.toggle("is-active", index === activeIndex);
    });
    page.style.setProperty("--em-active-index", activeIndex);
    stageLabel.textContent = EPIC_CHAPTERS[activeIndex].label;
    stageHint.textContent = `Estación ${activeIndex + 1} de ${EPIC_CHAPTERS.length} • transición lateral tipo vagón.`;
  }

  function updateTrack() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    updateStops();
  }

  function goToStage(index, userInitiated = false) {
    const total = EPIC_CHAPTERS.length;
    activeIndex = (index + total) % total;
    updateTrack();

    if (userInitiated) {
      chapters.focus?.();
    }
  }

  function nextStage() {
    goToStage(activeIndex + 1, true);
  }

  function prevStage() {
    goToStage(activeIndex - 1, true);
  }

  prevBtn.addEventListener("click", prevStage);
  nextBtn.addEventListener("click", nextStage);

  chapters.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      if (wheelLocked) return;

      wheelLocked = true;
      if (event.deltaY > 0 || event.deltaX > 0) {
        nextStage();
      } else {
        prevStage();
      }

      window.setTimeout(() => {
        wheelLocked = false;
      }, 650);
    },
    { passive: false }
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextStage();
    if (event.key === "ArrowLeft") prevStage();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  chapters.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  chapters.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    const delta = touchEndX - touchStartX;

    if (Math.abs(delta) < 40) return;
    if (delta < 0) nextStage();
    if (delta > 0) prevStage();
  });

  buildStops();
  updateTrack();
})();
