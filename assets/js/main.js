/* ===== HERO DE PROYECTOS DESTACADOS ===== */
async function loadFeaturedProjects() {
  const imageEl = document.getElementById("featuredProjectImage");
  const categoryEl = document.getElementById("featuredProjectCategory");
  const titleEl = document.getElementById("featuredProjectTitle");
  const synopsisEl = document.getElementById("featuredProjectSynopsis");
  const linkEl = document.getElementById("featuredProjectLink");
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");
  const dotsContainer = document.getElementById("projectDots");

  if (
    !imageEl ||
    !categoryEl ||
    !titleEl ||
    !synopsisEl ||
    !linkEl ||
    !prevBtn ||
    !nextBtn ||
    !dotsContainer
  ) {
    return;
  }

  try {
    const response = await fetch("./data/proyectos.json");
    const rawProjects = await response.json();

    const projects = rawProjects.filter(
      (project) => project.title && project.image
    );

    if (!projects.length) {
      categoryEl.textContent = "Portafolio";
      titleEl.textContent = "Próximamente";
      synopsisEl.textContent = "Aquí se mostrarán los proyectos destacados del portafolio.";
      linkEl.textContent = "Explorar";
      linkEl.href = "#";
      return;
    }

    let currentIndex = 0;

    function renderDots() {
      dotsContainer.innerHTML = "";

      projects.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "project-dot";
        dot.setAttribute("aria-label", `Ir al proyecto ${index + 1}`);

        if (index === currentIndex) {
          dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
          currentIndex = index;
          renderProject();
        });

        dotsContainer.appendChild(dot);
      });
    }

    function renderProject() {
      const project = projects[currentIndex];

      imageEl.src = project.image;
      imageEl.alt = project.title || "Proyecto destacado";

      categoryEl.textContent = project.category || "Proyecto";
      titleEl.textContent = project.title || "Sin título";
      synopsisEl.textContent = project.synopsis || "Sin descripción disponible.";

      linkEl.textContent = project.buttonText || "Ver proyecto";
      linkEl.href = project.link || "#";

      renderDots();
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      renderProject();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % projects.length;
      renderProject();
    });

    renderProject();
  } catch (error) {
    console.error("No se pudieron cargar los proyectos destacados:", error);
  }
}

loadFeaturedProjects();

/* ===== MODALES DE PERFIL ===== */
/* ===== PROFILE MODALS ===== */
const openProfileModalButtons = document.querySelectorAll(".open-profile-modal-btn");
const profileModals = document.querySelectorAll(".profile-modal");
const closeProfileModalButtons = document.querySelectorAll(".profile-modal-close");

openProfileModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

closeProfileModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".profile-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

profileModals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});