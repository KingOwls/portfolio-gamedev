(async function () {
  const catalogView = document.getElementById("projectsCatalogView");
  const gridView = document.getElementById("projectsGridView");
  const catalogBtn = document.getElementById("catalogViewBtn");
  const gridBtn = document.getElementById("gridViewBtn");
  const wheel = document.getElementById("projectsWheel");
  const grid = document.getElementById("projectsGrid");
  const prevBtn = document.getElementById("projectsPrevBtn");
  const nextBtn = document.getElementById("projectsNextBtn");

  const focusTag = document.getElementById("projectsFocusTag");
  const focusTitle = document.getElementById("projectsFocusTitle");
  const focusDescription = document.getElementById("projectsFocusDescription");
  const focusLink = document.getElementById("projectsFocusLink");

  if (!catalogView || !gridView || !wheel || !grid) return;

  let projects = [];
  let activeIndex = 0;
  let autoRotate = null;
  let isPaused = false;
  let lastClickTime = 0;

  function setView(view) {
    const isCatalog = view === "catalog";

    catalogView.classList.toggle("active", isCatalog);
    gridView.classList.toggle("active", !isCatalog);
    catalogBtn.classList.toggle("active", isCatalog);
    gridBtn.classList.toggle("active", !isCatalog);
  }

  function updateFocus(project) {
    focusTag.textContent = project.category || "Proyecto";
    focusTitle.textContent = project.title || "Proyecto";
    focusDescription.textContent = project.description || "";
    focusLink.textContent = `Abrir ${project.title}`;
    focusLink.href = project.link || "#";
  }

  function createMedia(project, className = "") {
    const wrapper = document.createElement("div");
    wrapper.className = className;

    const isVideo = project.previewType === "video";

    const image = document.createElement("img");
    image.src = project.cover;
    image.alt = project.title;

    if (!isVideo) {
      wrapper.appendChild(image);
      return { wrapper, image, video: null };
    }

    const video = document.createElement("video");
    video.src = project.preview;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.classList.add("projects-preview-hidden");

    wrapper.appendChild(image);
    wrapper.appendChild(video);

    return { wrapper, image, video };
  }

  function playPreview(media) {
    if (!media.video) return;
    media.image.classList.add("projects-preview-hidden");
    media.video.classList.remove("projects-preview-hidden");
    media.video.play().catch(() => {});
  }

  function stopPreview(media) {
    if (!media.video) return;
    media.video.pause();
    media.video.currentTime = 0;
    media.video.classList.add("projects-preview-hidden");
    media.image.classList.remove("projects-preview-hidden");
  }

  function renderWheel() {
    wheel.innerHTML = "";

    const total = projects.length;
    const centerX = 50;
    const centerY = 50;

    projects.forEach((project, index) => {
      let offset = index - activeIndex;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const card = document.createElement("article");
      card.className = "projects-wheel-card";
      if (offset === 0) card.classList.add("is-center");

      const translateX = offset * 230;
      const scale = offset === 0 ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.13);
      const rotateY = offset * -12;
      const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.15;
      const zIndex = 100 - Math.abs(offset);
      const blur = Math.abs(offset) * 1.1;

      card.style.transform = `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${zIndex}`;
      card.style.filter = `blur(${blur}px)`;

      const media = createMedia(project, "projects-wheel-media");
      card.appendChild(media.wrapper);

      const overlay = document.createElement("div");
      overlay.className = "projects-wheel-overlay";

      const title = document.createElement("div");
      title.className = "projects-wheel-title";
      title.textContent = project.title;

      overlay.appendChild(title);
      card.appendChild(overlay);

      card.addEventListener("mouseenter", () => {
        isPaused = true;
        playPreview(media);
      });

      card.addEventListener("mouseleave", () => {
        isPaused = false;
        stopPreview(media);
      });

      card.addEventListener("mousemove", () => {
        isPaused = true;
      });

      card.addEventListener("click", () => {
        const now = Date.now();

        if (activeIndex !== index) {
          activeIndex = index;
          renderWheel();
          updateFocus(project);
          lastClickTime = 0;
          return;
        }

        if (now - lastClickTime < 350) {
          window.location.href = project.link;
          return;
        }

        lastClickTime = now;
      });

      wheel.appendChild(card);
    });

    updateFocus(projects[activeIndex]);
  }

  function renderGrid() {
    grid.innerHTML = "";

    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "projects-grid-card";

      const media = createMedia(project, "projects-grid-media");
      const body = document.createElement("div");
      body.className = "projects-grid-body";

      const title = document.createElement("h3");
      title.textContent = project.title;

      const description = document.createElement("p");
      description.textContent = project.description;

      body.appendChild(title);
      body.appendChild(description);

      card.appendChild(media.wrapper);
      card.appendChild(body);

      card.addEventListener("mouseenter", () => playPreview(media));
      card.addEventListener("mouseleave", () => stopPreview(media));

      card.addEventListener("click", () => {
        window.location.href = project.link;
      });

      grid.appendChild(card);
    });
  }

  function nextProject() {
    activeIndex = (activeIndex + 1) % projects.length;
    renderWheel();
  }

  function prevProject() {
    activeIndex = (activeIndex - 1 + projects.length) % projects.length;
    renderWheel();
  }

  function startAutoRotate() {
    stopAutoRotate();
    autoRotate = setInterval(() => {
      if (!isPaused && catalogView.classList.contains("active")) {
        nextProject();
      }
    }, 2800);
  }

  function stopAutoRotate() {
    if (autoRotate) clearInterval(autoRotate);
  }

  catalogBtn?.addEventListener("click", () => setView("catalog"));
  gridBtn?.addEventListener("click", () => setView("grid"));
  nextBtn?.addEventListener("click", nextProject);
  prevBtn?.addEventListener("click", prevProject);

  try {
    const response = await fetch("../../data/projects-catalog.json");
    projects = await response.json();

    if (!Array.isArray(projects) || !projects.length) {
      focusTitle.textContent = "No hay proyectos cargados";
      focusDescription.textContent = "Agrega proyectos en data/projects-catalog.json";
      return;
    }

    renderWheel();
    renderGrid();
    startAutoRotate();
  } catch (error) {
    console.error("Error cargando catálogo de proyectos:", error);
    focusTitle.textContent = "No se pudo cargar el catálogo";
    focusDescription.textContent = "Revisa la ruta del JSON o la estructura de los datos.";
  }
})();