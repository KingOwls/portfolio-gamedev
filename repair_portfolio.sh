#!/usr/bin/env bash
# Repara navegación, estructura visual, páginas faltantes y el caso de estudio
# de los bots de Discord del portafolio JCrow.
#
# Uso:
#   chmod +x repair_portfolio.sh
#   ./repair_portfolio.sh /ruta/al/portfolio-gamedev
#
# También puede copiarse dentro de tools/ y ejecutarse sin argumentos.

set -Eeuo pipefail

info()  { printf '\033[1;36m[INFO]\033[0m %s\n' "$*"; }
ok()    { printf '\033[1;32m[OK]\033[0m   %s\n' "$*"; }
warn()  { printf '\033[1;33m[AVISO]\033[0m %s\n' "$*"; }
fail()  { printf '\033[1;31m[ERROR]\033[0m %s\n' "$*" >&2; exit 1; }

command -v python3 >/dev/null 2>&1 || fail "Se necesita Python 3 para editar HTML y JSON de forma segura."
command -v tar >/dev/null 2>&1 || fail "No se encontró el comando tar para crear la copia de seguridad."

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ROOT_INPUT="${1:-}"

resolve_root() {
  local candidate

  if [[ -n "$ROOT_INPUT" ]]; then
    candidate="$(cd -- "$ROOT_INPUT" 2>/dev/null && pwd)" || fail "La ruta indicada no existe: $ROOT_INPUT"
    [[ -f "$candidate/index.html" ]] || fail "La ruta no parece ser el portafolio: falta index.html"
    printf '%s\n' "$candidate"
    return
  fi

  for candidate in \
    "$PWD" \
    "$SCRIPT_DIR" \
    "$SCRIPT_DIR/.." \
    "$PWD/portfolio-gamedev" \
    "$PWD/portfolio-gamedev-fixed"; do
    if [[ -f "$candidate/index.html" ]]; then
      (cd -- "$candidate" && pwd)
      return
    fi
  done

  fail "No pude encontrar index.html. Ejecuta: ./repair_portfolio.sh /ruta/al/portfolio-gamedev"
}

ROOT="$(resolve_root)"
ROOT_NAME="$(basename "$ROOT")"
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP="$(dirname "$ROOT")/${ROOT_NAME}-backup-${STAMP}.tar.gz"

info "Portafolio detectado: $ROOT"
info "Creando respaldo: $BACKUP"

tar \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='bin' \
  --exclude='obj' \
  --exclude='__pycache__' \
  -czf "$BACKUP" \
  -C "$(dirname "$ROOT")" "$ROOT_NAME"

export PORTFOLIO_ROOT="$ROOT"

python3 - <<'PY'
from __future__ import annotations

import json
import os
import re
import shutil
from html import escape
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(os.environ["PORTFOLIO_ROOT"]).resolve()

ROUTES = {
    "home": ROOT / "index.html",
    "about": ROOT / "pages/about/about.html",
    "projects": ROOT / "pages/about/proyectos.html",
    "analysis": ROOT / "pages/analista/analista.html",
    "cv": ROOT / "assets/pdf/Hoja_de_vida.pdf",
}

NAV_ITEMS = (
    ("home", "Inicio"),
    ("about", "Sobre mí"),
    ("projects", "Proyectos / Áreas"),
    ("analysis", "Análisis de juegos"),
    ("cv", "Hoja de vida"),
)

# Páginas canónicas que deben existir aunque todavía estén en construcción.
EXPECTED_PAGES: dict[str, dict[str, str]] = {
    "pages/juegos/symphony-of-justice.html": {
        "title": "Symphony of Justice",
        "category": "Game Design · Proyecto principal",
        "description": "Caso de estudio sobre justicia, sistemas, naciones, progresión y experiencia multijugador.",
    },
    "pages/juegos/arcane-island.html": {
        "title": "Arcane Island",
        "category": "Game Design · MMORPG social",
        "description": "Página reservada para documentar el mundo, las mecánicas sociales, la memoria y la exploración del proyecto.",
    },
    "pages/juegos/la-isla-sin-reino.html": {
        "title": "La isla sin reino",
        "category": "Game Design técnico · MMORPG",
        "description": "Caso de estudio del MMORPG insular, su arquitectura, combate, economía y experiencia comunitaria.",
    },
    "pages/juegos/bot-de-discord.html": {
        "title": "Bots RPG de Discord",
        "category": "Game Design técnico · Desarrollo en C#",
        "description": "Comparación entre Profesor Luther y Thaddeus Morrowind como iteraciones de un RPG social dentro de Discord.",
    },
    "pages/juegos/semillero-de-videojuegos.html": {
        "title": "Semillero de Diseño y Desarrollo de Videojuegos",
        "category": "Investigación · Liderazgo académico",
        "description": "Página reservada para actividades, charlas, investigación, metodologías y resultados del semillero.",
    },
    "pages/juegos/arcane-butler.html": {
        "title": "Arcane Butler",
        "category": "Game Design · Concepto original",
        "description": "Página reservada para el concepto, pilares jugables, narrativa, mecánicas y evolución visual de Arcane Butler.",
    },
    "pages/juegos/juegos-web.html": {
        "title": "Juegos Web",
        "category": "Desarrollo · Prototipos jugables",
        "description": "Página reservada para prototipos web, recreación de mecánicas y experimentos de programación de videojuegos.",
    },
    "pages/juegos/epic-mcduck.html": {
        "title": "Epic McDuck",
        "category": "Game Design · Fan concept no comercial",
        "description": "Caso conceptual inspirado en aventuras de plataformas y exploración.",
    },
    "pages/juegos/gastronomia-corrupta.html": {
        "title": "Gastronomía Corrupta",
        "category": "Game Design · Metroidvania",
        "description": "Caso conceptual centrado en combate, recolección de recursos y métodos alternativos para vencer enemigos.",
    },
    "pages/juegos/exorcista-del-ultimo-juicio.html": {
        "title": "Exorcista del Juicio",
        "category": "Game Design · Acción narrativa",
        "description": "Caso conceptual sobre moral, exorcismo, decisiones y una falsa paz sostenida por instituciones ambiguas.",
    },
    # Rutas heredadas. Se conservan para que ningún enlace antiguo termine en 404.
    "pages/analista/semillero.html": {
        "title": "Semillero de Videojuegos",
        "category": "Ruta heredada · Investigación",
        "description": "Esta ruta queda reservada para el archivo de investigación del semillero.",
        "canonical": "pages/juegos/semillero-de-videojuegos.html",
    },
    "pages/diseno/SymJust.html": {
        "title": "Symphony of Justice",
        "category": "Ruta heredada · Game Design",
        "description": "Ruta histórica conservada para referencias anteriores del proyecto.",
        "canonical": "pages/juegos/symphony-of-justice.html",
    },
    "pages/diseno/arcaneIsland.html": {
        "title": "Arcane Island",
        "category": "Ruta heredada · Game Design",
        "description": "Ruta histórica conservada para referencias anteriores del proyecto.",
        "canonical": "pages/juegos/arcane-island.html",
    },
    "pages/diseno/islasinreino.html": {
        "title": "La isla sin reino",
        "category": "Ruta heredada · Documento base",
        "description": "Ruta reservada para la documentación y materiales de diseño del MMORPG.",
        "canonical": "pages/juegos/la-isla-sin-reino.html",
    },
    "pages/diseno/proyectosWeb.html": {
        "title": "Proyectos Web",
        "category": "Ruta heredada · Desarrollo",
        "description": "Ruta histórica conservada para los prototipos y juegos creados con tecnologías web.",
        "canonical": "pages/juegos/juegos-web.html",
    },
}

LAYOUT_CSS = r'''/* ===== MARCO GLOBAL DEL PORTAFOLIO ===== */
:root {
  --site-header-height: 82px;
  --site-footer-min-height: 74px;
}

html {
  scroll-padding-top: calc(var(--site-header-height) + 1rem);
}

.site-layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: clip;
}

.site-layout > main {
  width: 100%;
  flex: 1 0 auto;
}

[id] {
  scroll-margin-top: calc(var(--site-header-height) + 1rem);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  flex: 0 0 auto;
  min-height: var(--site-header-height);
  background: linear-gradient(180deg, rgba(7, 11, 22, 0.97), rgba(7, 11, 22, 0.91));
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.18);
  isolation: isolate;
}

.site-header::after {
  content: "";
  position: absolute;
  inset: auto 0 -1px;
  height: 1px;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.42), transparent);
}

.nav-container {
  position: relative;
  min-height: var(--site-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  padding-block: 0.65rem;
}

.logo {
  flex: 0 0 auto;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-shadow: 0 0 24px rgba(212, 175, 55, 0.18);
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(0.55rem, 1.5vw, 1.25rem);
  min-width: 0;
}

.nav-menu a {
  position: relative;
  color: var(--muted);
  font-size: clamp(0.86rem, 1.25vw, 0.97rem);
  line-height: 1.2;
  padding: 0.65rem 0.12rem;
  transition: color 0.22s ease, transform 0.22s ease;
}

.nav-menu a::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 0.3rem;
  height: 2px;
  border-radius: 999px;
  background: var(--primary);
  transition: left 0.22s ease, right 0.22s ease;
}

.nav-menu a:hover,
.nav-menu a:focus-visible,
.nav-menu a[aria-current="page"] {
  color: var(--text);
  transform: translateY(-1px);
}

.nav-menu a:hover::after,
.nav-menu a:focus-visible::after,
.nav-menu a[aria-current="page"]::after {
  left: 0;
  right: 0;
}

.menu-toggle {
  display: none;
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.045);
  color: var(--text);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.menu-toggle:hover,
.menu-toggle:focus-visible,
.menu-toggle[aria-expanded="true"] {
  background: rgba(212, 175, 55, 0.11);
  border-color: rgba(212, 175, 55, 0.42);
  transform: translateY(-1px);
}

.site-footer {
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  min-height: var(--site-footer-min-height);
  margin-top: auto;
  padding: 1.35rem 0 max(1.35rem, env(safe-area-inset-bottom));
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(4, 8, 17, 0.82), rgba(3, 6, 13, 0.96));
  box-shadow: 0 -14px 34px rgba(0, 0, 0, 0.14);
}

.site-footer::before {
  content: "";
  position: absolute;
  inset: -1px 0 auto;
  height: 1px;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.34), transparent);
}

.footer-content {
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.93rem;
}

.footer-content p { margin: 0; }
.footer-content strong { color: var(--text); font-weight: 650; }

/* Páginas reservadas para proyectos todavía en construcción. */
.placeholder-page {
  background:
    radial-gradient(circle at 18% 10%, rgba(212, 175, 55, 0.10), transparent 28%),
    radial-gradient(circle at 82% 80%, rgba(102, 126, 234, 0.10), transparent 30%),
    linear-gradient(180deg, #070b16, #0b1020);
}

.placeholder-main {
  display: grid;
  place-items: center;
  padding: clamp(3rem, 8vw, 7rem) 0;
}

.placeholder-card {
  position: relative;
  overflow: hidden;
  max-width: 880px;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid var(--border);
  border-radius: 30px;
  background: linear-gradient(150deg, rgba(255,255,255,0.065), rgba(255,255,255,0.025));
  box-shadow: var(--shadow);
}

.placeholder-card::before {
  content: "";
  position: absolute;
  width: 220px;
  aspect-ratio: 1;
  right: -90px;
  top: -100px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.22);
  box-shadow: 0 0 70px rgba(212, 175, 55, 0.10);
}

.placeholder-card h1 {
  max-width: 760px;
  margin: 0.3rem 0 1rem;
  font-size: clamp(2.2rem, 6vw, 4.7rem);
  line-height: 1;
}

.placeholder-description {
  max-width: 680px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.placeholder-status {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 18px;
  background: rgba(212, 175, 55, 0.06);
  color: var(--muted);
}

.placeholder-status strong { color: var(--text); }
.placeholder-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; }

@media (max-width: 900px) {
  :root { --site-header-height: 72px; }

  .nav-container {
    min-height: var(--site-header-height);
    flex-wrap: nowrap;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-menu {
    position: absolute;
    top: calc(100% + 0.55rem);
    left: 0;
    right: 0;
    z-index: 1100;
    width: 100%;
    max-height: calc(100dvh - var(--site-header-height) - 1.25rem);
    overflow-y: auto;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 0.7rem;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: rgba(8, 13, 25, 0.985);
    box-shadow: 0 22px 54px rgba(0, 0, 0, 0.42);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px) scale(0.985);
    transform-origin: top center;
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  }

  .nav-menu.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .nav-menu a {
    width: 100%;
    padding: 0.85rem 0.9rem;
    border-radius: 12px;
  }

  .nav-menu a::after { display: none; }

  .nav-menu a:hover,
  .nav-menu a:focus-visible,
  .nav-menu a[aria-current="page"] {
    transform: none;
    background: rgba(212, 175, 55, 0.10);
  }
}

@media (max-width: 600px) {
  .footer-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .nav-menu, .nav-menu a, .menu-toggle { transition: none; }
}
'''

NAVIGATION_JS = r'''/* Navegación global y medición segura del encabezado/pie. */
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
'''

SYMPHONY_PATCH = r'''

/* ===== PARCHE DE NAVEGACIÓN RESPONSIVA ===== */
.sj-menu-toggle { display: none; }

@media (max-width: 720px) {
  .sj-header {
    position: relative;
    min-height: var(--header-h);
    gap: 0.75rem;
  }

  .sj-brand-copy small { max-width: 34ch; }

  .sj-menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  .sj-top-nav {
    position: absolute;
    top: calc(100% + 0.55rem);
    left: 0.75rem;
    right: 0.75rem;
    z-index: 1200;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.2rem;
    padding: 0.7rem;
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 18px;
    background: rgba(8, 10, 20, 0.985);
    box-shadow: 0 22px 54px rgba(0,0,0,0.46);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  }

  .sj-top-nav.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  .sj-top-nav a { padding: 0.8rem 0.9rem; border-radius: 12px; }
  .sj-top-nav a:hover,
  .sj-top-nav a:focus-visible,
  .sj-top-nav a[aria-current="page"] { background: rgba(215, 179, 90, 0.11); }
}
'''

BOT_CSS_PATCH = r'''

/* ===== COMPARACIÓN DE ITERACIONES DEL BOT ===== */
.tdm-evolution {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 0 0 1.5rem;
}

.tdm-evolution-card {
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
}

.tdm-evolution-card::after {
  content: "";
  position: absolute;
  width: 150px;
  aspect-ratio: 1;
  right: -70px;
  bottom: -80px;
  border-radius: 50%;
  border: 1px solid rgba(110, 231, 255, 0.15);
}

.tdm-evolution-card h2 {
  margin: 0.35rem 0 0.55rem;
  font-size: clamp(1.35rem, 2.4vw, 2rem);
}

.tdm-evolution-card p {
  color: var(--tdm-muted);
  line-height: 1.7;
}

.tdm-evolution-list {
  display: grid;
  gap: 0.55rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.tdm-evolution-list li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--tdm-muted);
}

.tdm-evolution-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tdm-gold);
}

@media (max-width: 860px) {
  .tdm-evolution { grid-template-columns: 1fr; }
}
'''


def relative_url(source_html: Path, target: Path) -> str:
    value = os.path.relpath(target, source_html.parent).replace(os.sep, "/")
    if not value.startswith("."):
        value = f"./{value}"
    return value


def active_section(path: Path) -> str:
    rel = path.relative_to(ROOT).as_posix()
    if rel == "index.html":
        return "home"
    if rel == "pages/about/about.html":
        return "about"
    if rel == "pages/about/proyectos.html" or rel.startswith(("pages/juegos/", "pages/desarrollo/", "pages/diseno/", "pages/areas/")):
        return "projects"
    if rel.startswith("pages/analista/"):
        return "analysis"
    return ""


def canonical_header(path: Path) -> str:
    current = active_section(path)
    links: list[str] = []
    for key, label in NAV_ITEMS:
        attrs: list[str] = []
        if key == current:
            attrs.append('aria-current="page"')
        if key == "cv":
            attrs.extend(('target="_blank"', 'rel="noopener noreferrer"'))
        suffix = (" " + " ".join(attrs)) if attrs else ""
        links.append(f'        <a href="{escape(relative_url(path, ROUTES[key]))}"{suffix}>{escape(label)}</a>')

    return f'''<header class="site-header" data-site-header>
    <div class="container nav-container">
      <a href="{escape(relative_url(path, ROUTES['home']))}" class="logo" aria-label="JCrow, volver al inicio">JCrow</a>

      <nav class="nav-menu" id="navMenu" aria-label="Navegación principal">
{chr(10).join(links)}
      </nav>

      <button class="menu-toggle" id="menuToggle" type="button" aria-label="Abrir menú" aria-controls="navMenu" aria-expanded="false">☰</button>
    </div>
  </header>'''


def canonical_footer() -> str:
    return '''<footer class="site-footer" data-site-footer>
    <div class="container footer-content">
      <p><strong>© 2026 · JCrow</strong> · Portafolio profesional</p>
      <p>Game Design técnico · Desarrollo · Investigación</p>
    </div>
  </footer>'''


def symphony_header(path: Path) -> str:
    links: list[str] = []
    for key, label in NAV_ITEMS[:-1]:
        links.append(f'        <a href="{escape(relative_url(path, ROUTES[key]))}">{escape(label)}</a>')
    links.append(
        f'        <a href="{escape(relative_url(path, ROUTES["cv"]))}" target="_blank" rel="noopener noreferrer">Hoja de vida</a>'
    )
    return f'''<header class="sj-header" data-site-header>
      <a class="sj-brand" href="{escape(relative_url(path, ROUTES['home']))}" aria-label="Volver al portafolio">
        <span class="sj-brand-mark">JC</span>
        <span class="sj-brand-copy">
          <strong>Symphony of Justice</strong>
          <small>Faith Balance Project · Portafolio conceptual</small>
        </span>
      </a>

      <nav class="sj-top-nav" id="navMenu" aria-label="Navegación principal">
{chr(10).join(links)}
      </nav>

      <button class="menu-toggle sj-menu-toggle" id="menuToggle" type="button" aria-label="Abrir menú" aria-controls="navMenu" aria-expanded="false">☰</button>
    </header>'''


def symphony_footer() -> str:
    return '''<footer class="sj-footer" data-site-footer>
      <p>© 2026 · Portafolio conceptual de Jorge Osorio</p>
      <p>Symphony of Justice · Caso de estudio interactivo</p>
    </footer>'''


def add_body_class(html: str, class_name: str) -> str:
    def repl(match: re.Match[str]) -> str:
        attrs = match.group(1)
        class_match = re.search(r'\bclass\s*=\s*(["\'])(.*?)\1', attrs, flags=re.I | re.S)
        if class_match:
            classes = class_match.group(2).split()
            if class_name not in classes:
                classes.append(class_name)
            new_attr = f'class={class_match.group(1)}{" ".join(classes)}{class_match.group(1)}'
            attrs = attrs[:class_match.start()] + new_attr + attrs[class_match.end():]
        else:
            attrs = f'{attrs} class="{class_name}"'
        return f"<body{attrs}>"

    return re.sub(r"<body([^>]*)>", repl, html, count=1, flags=re.I)


def inject_navigation_script(html: str, path: Path) -> str:
    if "assets/js/navigation.js" in html:
        return html
    src = relative_url(path, ROOT / "assets/js/navigation.js")
    return re.sub(r"\s*</body>", f'\n  <script src="{escape(src)}"></script>\n</body>', html, count=1, flags=re.I)


def make_placeholder(path: Path, meta: dict[str, str]) -> str:
    title = meta["title"]
    category = meta["category"]
    description = meta["description"]
    canonical = meta.get("canonical")

    extra_action = ""
    status_text = "La página ya tiene una ruta estable y queda preparada para recibir su caso de estudio."
    if canonical:
        target = ROOT / canonical
        status_text = "Esta ruta heredada se conserva para que los enlaces antiguos sigan funcionando."
        extra_action = f'\n        <a class="btn btn-primary" href="{escape(relative_url(path, target))}">Abrir página principal</a>'

    return f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{escape(title)} | JCrow</title>
  <meta name="description" content="{escape(description)}" />
  <link rel="stylesheet" href="{escape(relative_url(path, ROOT / 'assets/css/main.css'))}" />
</head>
<body class="site-layout placeholder-page">
  {canonical_header(path)}

  <main class="placeholder-main">
    <section class="container placeholder-card">
      <p class="eyebrow">{escape(category)}</p>
      <h1>{escape(title)}</h1>
      <p class="placeholder-description">{escape(description)}</p>

      <div class="placeholder-status">
        <span aria-hidden="true">◈</span>
        <p><strong>Página preparada.</strong> {escape(status_text)}</p>
      </div>

      <div class="placeholder-actions">{extra_action}
        <a class="btn btn-secondary" href="{escape(relative_url(path, ROUTES['projects']))}">Volver a proyectos</a>
      </div>
    </section>
  </main>

  {canonical_footer()}
  <script src="{escape(relative_url(path, ROOT / 'assets/js/navigation.js'))}"></script>
</body>
</html>
'''


def create_expected_pages() -> tuple[list[str], list[str]]:
    created: list[str] = []
    filled: list[str] = []
    for rel, meta in EXPECTED_PAGES.items():
        path = ROOT / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        if not path.exists():
            path.write_text(make_placeholder(path, meta), encoding="utf-8")
            created.append(rel)
        elif path.stat().st_size == 0:
            path.write_text(make_placeholder(path, meta), encoding="utf-8")
            filled.append(rel)
    return created, filled


def repair_html(path: Path) -> bool:
    original = path.read_text(encoding="utf-8", errors="replace")
    if not original.strip():
        return False

    html = original
    is_symphony = path.name == "symphony-of-justice.html"

    if is_symphony:
        html = re.sub(
            r'<header\b[^>]*class=["\'][^"\']*\bsj-header\b[^"\']*["\'][^>]*>.*?</header>',
            symphony_header(path), html, count=1, flags=re.I | re.S,
        )
        html = re.sub(
            r'<footer\b[^>]*class=["\'][^"\']*\bsj-footer\b[^"\']*["\'][^>]*>.*?</footer>',
            symphony_footer(), html, count=1, flags=re.I | re.S,
        )
    else:
        header_pattern = r'<header\b[^>]*class=["\'][^"\']*\bsite-header\b[^"\']*["\'][^>]*>.*?</header>'
        footer_pattern = r'<footer\b[^>]*class=["\'][^"\']*\bsite-footer\b[^"\']*["\'][^>]*>.*?</footer>'

        if re.search(header_pattern, html, flags=re.I | re.S):
            html = re.sub(header_pattern, canonical_header(path), html, count=1, flags=re.I | re.S)
        else:
            html = re.sub(r'(<body[^>]*>)', r'\1\n  ' + canonical_header(path), html, count=1, flags=re.I)

        if re.search(footer_pattern, html, flags=re.I | re.S):
            html = re.sub(footer_pattern, canonical_footer(), html, count=1, flags=re.I | re.S)
        else:
            html = re.sub(r'\s*</body>', '\n  ' + canonical_footer() + '\n</body>', html, count=1, flags=re.I)

        html = add_body_class(html, "site-layout")

    html = inject_navigation_script(html, path)

    if html != original:
        path.write_text(html, encoding="utf-8")
        return True
    return False


def patch_json() -> None:
    featured_path = ROOT / "data/proyectos.json"
    if featured_path.exists():
        data = json.loads(featured_path.read_text(encoding="utf-8"))
        changes = {
            1: {"link": "./pages/juegos/symphony-of-justice.html"},
            2: {"link": "./pages/juegos/arcane-island.html"},
            3: {"link": "./pages/juegos/semillero-de-videojuegos.html"},
            4: {"link": "./pages/juegos/juegos-web.html"},
            5: {
                "title": "Bots RPG de Discord",
                "category": "Game Design técnico y desarrollo",
                "synopsis": "Dos iteraciones de un RPG social en Discord: Profesor Luther priorizó sistemas jugables funcionales y Thaddeus Morrowind reorganizó la experiencia sobre una arquitectura escalable en C#.",
                "buttonText": "Caso de estudio de los bots",
                "link": "./pages/juegos/bot-de-discord.html",
            },
        }
        for item in data:
            item.update(changes.get(item.get("id"), {}))
        featured_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    catalog_path = ROOT / "data/projects-catalog.json"
    if catalog_path.exists():
        data = json.loads(catalog_path.read_text(encoding="utf-8"))
        links = {
            "symphony-of-justice": "../juegos/symphony-of-justice.html",
            "arcane-island": "../juegos/arcane-island.html",
            "bot-de-discord": "../juegos/bot-de-discord.html",
            "semillero": "../juegos/semillero-de-videojuegos.html",
            "arcane-butler": "../juegos/arcane-butler.html",
            "juegos-web": "../juegos/juegos-web.html",
            "Epic-Mcduck": "../juegos/epic-mcduck.html",
            "Gastronomia-Corrupta": "../juegos/gastronomia-corrupta.html",
            "Exorcista-Juicio": "../juegos/exorcista-del-ultimo-juicio.html",
        }
        for item in data:
            slug = item.get("slug")
            if slug in links:
                item["link"] = links[slug]
            if slug == "bot-de-discord":
                item["title"] = "Bots RPG de Discord"
                item["description"] = "Profesor Luther y Thaddeus Morrowind documentan dos iteraciones complementarias de un RPG social en Discord, desde sistemas jugables funcionales hasta una arquitectura escalable en C#."
            if slug == "arcane-butler":
                item["preview"] = "../../assets/video/demos/ArcaneButler.gif"
        catalog_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def patch_dynamic_fallbacks() -> None:
    replacements: dict[Path, list[tuple[str, str]]] = {
        ROOT / "index.html": [
            ('id="featuredProjectLink"\n                  href="#"', 'id="featuredProjectLink"\n                  href="./pages/about/proyectos.html"'),
        ],
        ROOT / "pages/about/about.html": [
            ('<a href="#" class="btn btn-primary">Ver proyecto</a>', '<a href="../juegos/symphony-of-justice.html" class="btn btn-primary">Ver proyecto</a>'),
            ('<a href="#" class="btn btn-secondary">Ver análisis</a>', '<a href="../analista/analista.html" class="btn btn-secondary">Ver análisis</a>'),
            ('<a href="#" class="btn btn-secondary">Hoja de vida</a>', '<a href="../../assets/pdf/Hoja_de_vida.pdf" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Hoja de vida</a>'),
        ],
        ROOT / "pages/about/proyectos.html": [
            ('id="projectsFocusLink" href="#"', 'id="projectsFocusLink" href="../juegos/symphony-of-justice.html"'),
        ],
        ROOT / "pages/juegos/la-isla-sin-reino.html": [
            ('id="linkBackPortfolio" class="btn btn-primary" href="#"', 'id="linkBackPortfolio" class="btn btn-primary" href="../about/proyectos.html"'),
            ('id="linkProjectDoc" class="btn btn-secondary" href="#"', 'id="linkProjectDoc" class="btn btn-secondary" href="../diseno/islasinreino.html"'),
            ('id="linkPrototype" href="#" class="btn btn-primary"', 'id="linkPrototype" href="../desarrollo/index.html" class="btn btn-primary"'),
            ('id="linkAnalysis" href="#" class="btn btn-secondary"', 'id="linkAnalysis" href="../analista/analista.html" class="btn btn-secondary"'),
        ],
    }

    for path, pairs in replacements.items():
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        for old, new in pairs:
            text = text.replace(old, new)
        path.write_text(text, encoding="utf-8")

    mmo_js = ROOT / "assets/js/projects/la-isla-sin-reino.js"
    if mmo_js.exists():
        text = mmo_js.read_text(encoding="utf-8")
        text = re.sub(
            r'const PROJECT_LINKS = \{.*?\};',
            '''const PROJECT_LINKS = {
  backPortfolio: "../about/proyectos.html",
  projectDoc: "../diseno/islasinreino.html",
  prototype: "../desarrollo/index.html",
  analysis: "../analista/analista.html"
};''',
            text, count=1, flags=re.S,
        )
        mmo_js.write_text(text, encoding="utf-8")


def patch_project_catalog_interaction() -> None:
    html_path = ROOT / "pages/about/proyectos.html"
    if html_path.exists():
        text = html_path.read_text(encoding="utf-8")
        text = text.replace(
            "Hover pausa la rueda y muestra preview. Doble click abre el proyecto.",
            "Pasa el cursor para ver el preview. Un clic selecciona; vuelve a pulsar la tarjeta central para abrirla.",
        )
        html_path.write_text(text, encoding="utf-8")

    js_path = ROOT / "assets/js/projects.js"
    if not js_path.exists():
        return
    text = js_path.read_text(encoding="utf-8")
    text = text.replace("  let lastClickTime = 0;\n", "")
    old = '''      card.addEventListener("click", () => {
        const now = Date.now();

        if (activeIndex !== index) {
          activeIndex = index;
          renderWheel();
          updateFocus(project);
          lastClickTime = 0;
          return;
        }

        if (now - lastClickTime < 350) {
          window.location.href = project.link || "#";
          return;
        }

        lastClickTime = now;
      });'''
    new = '''      card.addEventListener("click", () => {
        if (activeIndex !== index) {
          activeIndex = index;
          renderWheel();
          updateFocus(project);
          return;
        }

        window.location.href = project.link || "../../index.html";
      });'''
    text = text.replace(old, new)
    js_path.write_text(text, encoding="utf-8")


def patch_bot_page() -> None:
    page = ROOT / "pages/juegos/bot-de-discord.html"
    if not page.exists():
        return
    text = page.read_text(encoding="utf-8")
    text = re.sub(r'<title>.*?</title>', '<title>Profesor Luther &amp; Thaddeus Morrowind | Bots RPG de Discord</title>', text, count=1, flags=re.S)
    text = re.sub(
        r'<meta name="description" content=".*?"\s*/>',
        '<meta name="description" content="Caso de estudio comparativo de dos bots RPG desarrollados en C# con Discord.Net: Profesor Luther y Thaddeus Morrowind." />',
        text, count=1, flags=re.S,
    )

    hero = '''<section class="tdm-hero">
      <div class="tdm-hero-copy">
        <p class="tdm-kicker">Caso de estudio · Dos iteraciones de un RPG social</p>
        <h1>Profesor Luther &amp;<br />Thaddeus Morrowind</h1>
        <p class="tdm-lead">
          Dos bots desarrollados en C# para convertir Discord en un entorno jugable. Profesor Luther priorizó
          mecánicas funcionales, inventario, economía, personajes y administración; Thaddeus Morrowind retomó
          esos aprendizajes para construir una arquitectura más escalable, con SQL, servicios y separación de responsabilidades.
        </p>

        <div class="tdm-hero-tags">
          <span>C#</span>
          <span>.NET 8 / 9</span>
          <span>Discord.Net 3.19.1</span>
          <span>JSON + MySQL</span>
          <span>EF Core</span>
          <span>Slash Commands</span>
        </div>

        <div class="tdm-hero-actions">
          <a class="btn btn-primary" href="#evolution">Comparar iteraciones</a>
          <a class="btn btn-secondary" href="#workspace">Explorar sistemas</a>
        </div>
      </div>

      <div class="tdm-hero-panels">
        <article class="tdm-glass-card tdm-hero-card">
          <span class="tdm-card-label">Resultado del proceso</span>
          <h2>Del prototipo abundante a una base escalable</h2>
          <p>
            La comparación muestra cómo cambiaron las decisiones de persistencia, arquitectura, experiencia de usuario
            y alcance después de implementar sistemas reales y enfrentarse a errores de integración.
          </p>

          <div class="tdm-status-list">
            <div><strong>Profesor Luther</strong><span>Prototipo jugable y amplio</span></div>
            <div><strong>Thaddeus</strong><span>Arquitectura modular y SQL</span></div>
            <div><strong>Discord UI</strong><span>Comandos, botones y modales</span></div>
            <div><strong>Game Design</strong><span>Economía, combate y progresión</span></div>
          </div>
        </article>

        <article class="tdm-glass-card tdm-hero-card tdm-hero-card--console">
          <span class="tdm-card-label">Consola C#</span>
          <div class="tdm-console-lines">
            <div><span class="ok">✔</span> Discord.Net 3.19.1 conectado</div>
            <div><span class="ok">✔</span> Servicios de personajes e inventario cargados</div>
            <div><span class="ok">✔</span> Slash Commands sincronizados</div>
            <div><span class="warn">!</span> Datos sensibles excluidos del repositorio</div>
            <div><span class="ok">✔</span> JSON local y MySQL documentados por alcance</div>
          </div>
        </article>
      </div>
    </section>

    <section class="tdm-evolution" id="evolution" aria-label="Comparación entre los dos bots">
      <article class="tdm-glass-card tdm-evolution-card">
        <span class="tdm-card-label">Iteración funcional</span>
        <h2>Profesor Luther</h2>
        <p>
          Construido en .NET 8 con persistencia JSON local. Su fortaleza es la cantidad de sistemas jugables
          integrados y demostrables dentro de Discord.
        </p>
        <ul class="tdm-evolution-list">
          <li>Usuarios, personajes, fichas públicas y privadas.</li>
          <li>Inventario, equipamiento, consumibles y mascotas.</li>
          <li>Economía, tienda, comercio, daily y banners.</li>
          <li>Batallas, dados, permisos y auditoría.</li>
        </ul>
      </article>

      <article class="tdm-glass-card tdm-evolution-card">
        <span class="tdm-card-label">Iteración arquitectónica</span>
        <h2>Thaddeus Morrowind</h2>
        <p>
          Reconstruido en .NET 9 con MySQL y Entity Framework Core. Su fortaleza es separar entidades,
          servicios, vistas y estados temporales para sostener un crecimiento más ordenado.
        </p>
        <ul class="tdm-evolution-list">
          <li>Usuarios y personajes como entidades independientes.</li>
          <li>Datos persistentes en SQL y estados vivos en JSON.</li>
          <li>Servicios de inventario, habilidades y crecimiento de estadísticas.</li>
          <li>Arquitectura preparada para dungeons, combate y despliegue.</li>
        </ul>
      </article>
    </section>'''

    # Elimina una comparación previa para que ejecutar el script varias veces no la duplique.
    text = re.sub(
        r'\s*<section class="tdm-evolution"[^>]*>.*?</section>\s*',
        "\n\n", text, flags=re.S,
    )
    text = re.sub(r'<section class="tdm-hero">.*?</section>', hero, text, count=1, flags=re.S)
    page.write_text(text, encoding="utf-8")

    css_path = ROOT / "assets/css/projects/bot-de-discord.css"
    if css_path.exists():
        css = css_path.read_text(encoding="utf-8")
        marker = "/* ===== COMPARACIÓN DE ITERACIONES DEL BOT ===== */"
        if marker not in css:
            css = css.rstrip() + BOT_CSS_PATCH + "\n"
        css_path.write_text(css, encoding="utf-8")

    js_path = ROOT / "assets/js/projects/bot-de-discord.js"
    if not js_path.exists():
        return
    js = js_path.read_text(encoding="utf-8")

    origin_object = '''  {
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
  },'''

    js = re.sub(
        r'  \{\n    id: "origen",.*?\n    visual: "origin"\n  \},',
        origin_object, js, count=1, flags=re.S,
    )

    architecture_object = '''  {
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
  },'''

    js = re.sub(
        r'  \{\n    id: "arquitectura",.*?\n    visual: "architecture"\n  \},',
        architecture_object, js, count=1, flags=re.S,
    )

    origin_visual = '''function renderOriginVisual() {
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
}'''
    js = re.sub(r'function renderOriginVisual\(\) \{.*?\n\}', origin_visual, js, count=1, flags=re.S)

    architecture_visual = '''function renderArchitectureVisual() {
  const grid = el("div", "tdm-code-grid");
  [
    ["Discord / Commands", "Slash Commands, componentes, modales y vistas para la interacción."],
    ["Features / Services", "Reglas de usuarios, personajes, inventario, habilidades y economía."],
    ["JSON + MySQL", "Datos locales o temporales frente a persistencia estructurada con EF Core."],
    [".env / Secrets", "Token, servidor y configuración sensible fuera del código público."]
  ].forEach(([a,b]) => grid.appendChild(el("div", "tdm-code-card", `<strong>${a}</strong><span>${b}</span>`)));
  return grid;
}'''
    js = re.sub(r'function renderArchitectureVisual\(\) \{.*?\n\}', architecture_visual, js, count=1, flags=re.S)

    logs_visual = '''function renderLogsVisual() {
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
}'''
    js = re.sub(r'function renderLogsVisual\(\) \{.*?\n\}', logs_visual, js, count=1, flags=re.S)

    # Limpia restos técnicos incorrectos de la antigua versión en Python.
    replacements = {
        "Python, cogs y ejecución": "C#, servicios y persistencia",
        "Python 3.12/3.13 recomendado.": "C# con .NET 8 y .NET 9.",
        "discord.py 2.x, python-dotenv y ejecución desde módulo principal.": "Discord.Net 3.19.1, variables de entorno y servicios registrados por inyección de dependencias.",
        "cogs.personaje": "Features.Characters",
        "src.bot.main": "Program / BotRuntime",
        "src.bot.cogs.personaje": "Features.Characters",
        "data/users/1234567890.json": "data/users/{discordUserId}.json",
    }
    for old, new in replacements.items():
        js = js.replace(old, new)

    js_path.write_text(js, encoding="utf-8")


def patch_symphony_css() -> None:
    path = ROOT / "assets/css/projects/symphony-of-justice.css"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    marker = "/* ===== PARCHE DE NAVEGACIÓN RESPONSIVA ===== */"
    if marker not in text:
        text = text.rstrip() + SYMPHONY_PATCH + "\n"
    path.write_text(text, encoding="utf-8")


def create_epic_placeholders() -> None:
    page = ROOT / "pages/juegos/epic-mcduck.html"
    if not page.exists():
        return

    folder = ROOT / "assets/img/projects/epic-mcduck/characters"
    folder.mkdir(parents=True, exist_ok=True)

    def write_svg(name: str, label: str, subtitle: str) -> None:
        target = folder / name
        if target.exists():
            return
        svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111a31"/>
      <stop offset="1" stop-color="#080d1b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <circle cx="960" cy="160" r="220" fill="none" stroke="#d4af37" stroke-opacity="0.22" stroke-width="3"/>
  <circle cx="200" cy="680" r="270" fill="none" stroke="#6d8cff" stroke-opacity="0.16" stroke-width="3"/>
  <text x="90" y="350" fill="#d4af37" font-family="Segoe UI, sans-serif" font-size="34" letter-spacing="6">CONCEPT ART PENDIENTE</text>
  <text x="90" y="445" fill="#f3f4f6" font-family="Segoe UI, sans-serif" font-size="76" font-weight="700">{escape(label)}</text>
  <text x="94" y="505" fill="#b8c0d4" font-family="Segoe UI, sans-serif" font-size="30">{escape(subtitle)}</text>
</svg>'''
        target.write_text(svg, encoding="utf-8")

    write_svg("hero-mcduck.svg", "Héroe aventurero", "Espacio reservado para la ilustración final")
    write_svg("corvin-thornsworth.svg", "Lord Corvin Thornsworth", "Espacio reservado para la ilustración final")

    text = page.read_text(encoding="utf-8")
    text = text.replace("characters/hero-mcduck.png", "characters/hero-mcduck.svg")
    text = text.replace("characters/corvin-thornsworth.png", "characters/corvin-thornsworth.svg")
    page.write_text(text, encoding="utf-8")


def audit_links() -> list[str]:
    issues: list[str] = []
    html_files = [p for p in ROOT.rglob("*.html") if ".git" not in p.parts and p.stat().st_size]
    id_cache: dict[Path, set[str]] = {}

    def ids_for(path: Path) -> set[str]:
        if path not in id_cache:
            text = path.read_text(encoding="utf-8", errors="replace")
            id_cache[path] = set(re.findall(r'\bid\s*=\s*["\']([^"\']+)["\']', text, flags=re.I))
        return id_cache[path]

    pattern = re.compile(r'\b(?:href|src)\s*=\s*["\']([^"\']+)["\']', flags=re.I)
    for html_path in sorted(html_files):
        text = html_path.read_text(encoding="utf-8", errors="replace")
        for value in pattern.findall(text):
            if value.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:")):
                continue
            if value == "#":
                issues.append(f"PLACEHOLDER  {html_path.relative_to(ROOT)} -> #")
                continue
            parsed = urlsplit(value)
            target = (html_path.parent / parsed.path).resolve() if parsed.path else html_path.resolve()
            try:
                target.relative_to(ROOT)
            except ValueError:
                continue
            if parsed.path and not target.exists():
                issues.append(f"NO EXISTE    {html_path.relative_to(ROOT)} -> {value}")
            elif parsed.fragment and target.suffix.lower() == ".html" and parsed.fragment not in ids_for(target):
                issues.append(f"SIN ANCLA    {html_path.relative_to(ROOT)} -> {value}")
    return issues


def audit_json_project_links() -> list[str]:
    issues: list[str] = []
    catalog = ROOT / "data/projects-catalog.json"
    if catalog.exists():
        data = json.loads(catalog.read_text(encoding="utf-8"))
        base = ROOT / "pages/about"
        for item in data:
            link = item.get("link", "")
            if link and not (base / link).resolve().exists():
                issues.append(f"CATÁLOGO     {item.get('slug')} -> {link}")
    return issues


def main() -> None:
    for directory in (
        ROOT / "assets/css",
        ROOT / "assets/js",
        ROOT / "pages/juegos",
        ROOT / "pages/diseno",
        ROOT / "pages/analista",
        ROOT / "data",
    ):
        directory.mkdir(parents=True, exist_ok=True)

    (ROOT / "assets/css/layout.css").write_text(LAYOUT_CSS, encoding="utf-8")
    (ROOT / "assets/js/navigation.js").write_text(NAVIGATION_JS, encoding="utf-8")

    created, filled = create_expected_pages()

    changed = 0
    for path in sorted(ROOT.rglob("*.html")):
        if ".git" in path.parts or path.stat().st_size == 0:
            continue
        changed += int(repair_html(path))

    patch_json()
    patch_dynamic_fallbacks()
    patch_project_catalog_interaction()
    patch_bot_page()
    patch_symphony_css()
    create_epic_placeholders()

    # Una segunda pasada normaliza también los bloques modificados o creados.
    for path in sorted(ROOT.rglob("*.html")):
        if ".git" in path.parts or path.stat().st_size == 0:
            continue
        changed += int(repair_html(path))

    issues = audit_links() + audit_json_project_links()
    remaining_empty = [
        p.relative_to(ROOT).as_posix()
        for p in sorted(ROOT.rglob("*.html"))
        if ".git" not in p.parts and p.stat().st_size == 0
    ]

    report = [
        "REPORTE DE REPARACIÓN DEL PORTAFOLIO",
        "=" * 44,
        f"Páginas creadas: {len(created)}",
        f"Páginas vacías completadas: {len(filled)}",
        f"Documentos HTML normalizados: {changed}",
        f"HTML todavía vacíos: {len(remaining_empty)}",
        f"Referencias pendientes: {len(issues)}",
    ]

    if created:
        report.append("\nPáginas nuevas:")
        report.extend(f"- {item}" for item in created)
    if filled:
        report.append("\nPáginas antes vacías que recibieron plantilla:")
        report.extend(f"- {item}" for item in filled)
    if remaining_empty:
        report.append("\nHTML todavía vacíos:")
        report.extend(f"- {item}" for item in remaining_empty)
    if issues:
        report.append("\nPendientes detectados:")
        report.extend(f"- {item}" for item in issues)
    else:
        report.append("\nNo se detectaron enlaces o recursos internos rotos.")

    report.append("\nEl script es idempotente: puede ejecutarse nuevamente sin duplicar componentes.")
    output = "\n".join(report) + "\n"
    (ROOT / "repair-report.txt").write_text(output, encoding="utf-8")
    print(output)


if __name__ == "__main__":
    main()
PY

ok "Reparación aplicada."
ok "Respaldo guardado en: $BACKUP"
ok "Reporte disponible en: $ROOT/repair-report.txt"

if command -v node >/dev/null 2>&1; then
  info "Verificando sintaxis de los JavaScript modificados..."
  JS_ERRORS=0
  while IFS= read -r -d '' file; do
    if ! node --check "$file" >/dev/null 2>&1; then
      warn "Node detectó un posible error en: ${file#$ROOT/}"
      JS_ERRORS=$((JS_ERRORS + 1))
    fi
  done < <(find "$ROOT/assets/js" -type f -name '*.js' -print0)

  if [[ "$JS_ERRORS" -eq 0 ]]; then
    ok "Sintaxis JavaScript verificada."
  else
    warn "Se detectaron $JS_ERRORS archivo(s) JavaScript para revisar. Consulta node --check manualmente."
  fi
else
  warn "Node.js no está instalado; se omitió la comprobación automática de JavaScript."
fi

printf '\nEjecuta el portafolio con un servidor local, por ejemplo:\n'
printf '  cd %q\n' "$ROOT"
printf '  python3 -m http.server 8000\n\n'
printf 'Luego abre: http://localhost:8000\n'
