/* Navegación global y medición segura del encabezado/pie. */
(() => {
  "use strict";

  function normalizePathname(value) {
    return value.replace(/\/+$/, "") || "/";
  }

  function initNavigation() {
    const header = document.querySelector("[data-site-header], .site-header, .sj-header");
    const footer = document.querySelector("[data-site-footer], .site-footer, .sj-footer");
    const menu = document.getElementById("navMenu");
    const toggle = document.getElementById("menuToggle");

    const measureChrome = () => {
      const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
      const footerHeight = footer ? Math.ceil(footer.getBoundingClientRect().height) : 0;

      if (headerHeight) {
        document.documentElement.style.setProperty("--site-header-height", `${headerHeight}px`);
        document.documentElement.style.setProperty("--header-h", `${headerHeight}px`);
      }
      if (footerHeight) document.documentElement.style.setProperty("--footer-h", `${footerHeight}px`);
    };

    measureChrome();

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(measureChrome);
      if (header) observer.observe(header);
      if (footer) observer.observe(footer);
    } else {
      window.addEventListener("resize", measureChrome, { passive: true });
    }

    document.querySelectorAll("a[href]").forEach((link) => {
      const raw = link.getAttribute("href");
      if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      try {
        const target = new URL(raw, window.location.href);
        if (target.origin !== window.location.origin && window.location.protocol !== "file:") return;
        if (normalizePathname(target.pathname) === normalizePathname(window.location.pathname)) {
          link.setAttribute("aria-current", "page");
        }
      } catch (_) {
        // Un enlace mal formado no debe romper el resto de la navegación.
      }
    });

    if (!menu || !toggle) return;

    const setOpen = (open) => {
      menu.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      toggle.textContent = open ? "×" : "☰";
      header?.classList.toggle("menu-open", open);
      document.documentElement.classList.toggle("menu-is-open", open);
    };

    setOpen(false);
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("active")));
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("active")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (menu.classList.contains("active") && header && !header.contains(event.target)) setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setOpen(false);
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavigation, { once: true });
  } else {
    initNavigation();
  }
})();
