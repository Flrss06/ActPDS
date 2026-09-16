// Inyecta el nav y footer en cada página
document.addEventListener('DOMContentLoaded', () => {
  // ── NAV ──
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="../index.html" class="nav-logo">Nexus</a>
    <div class="nav-links">
      <div class="dropdown">
        <a href="#">Secciones ▾</a>
        <div class="dropdown-menu">
          <a href="../pages/info.html">Información</a>
          <a href="../pages/historia.html">Historia</a>
          <a href="../pages/tecnologia.html">Tecnología</a>
          <a href="../pages/contacto.html">Contacto</a>
          <a href="../pages/galeria.html">Galería</a>
          <a href="../pages/noticias.html">Noticias</a>
        </div>
      </div>
      <a href="../pages/contacto.html" class="nav-cta hide-mobile">Contáctanos</a>
    </div>`;
  document.body.prepend(nav);

  // ── FOOTER ──
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>© 2026 Proyecto Nexus · Ingeniería en Tecnologías de la Información · UTSC</p>
    <p>Desarrollado por los 6 integrantes del equipo como proyecto final.</p>`;
  document.body.append(footer);

  // Marcar link activo
  const links = nav.querySelectorAll('.dropdown-menu a');
  links.forEach(a => {
    if (a.href === location.href) a.style.color = 'var(--accent)';
  });
});
