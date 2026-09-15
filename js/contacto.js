document.addEventListener('DOMContentLoaded', () => {

  const style = document.createElement('style');
  style.textContent = `
    .contact-panel,
    .contact-side,
    .comment,
    .social-link {
      will-change: transform;
    }

    .contact-panel {
      animation: contactFloat 6s ease-in-out infinite;
    }

    .contact-side {
      animation: contactFloat 7s ease-in-out infinite 0.35s;
    }

    .social-link,
    .comment {
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .social-link:hover,
    .comment:hover {
      transform: translateY(-2px);
    }

    @keyframes contactFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
  `;
  document.head.appendChild(style);

  const subtleHover = (selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-2px)';
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });
  };

  subtleHover('.social-link');
  subtleHover('.comment');

  // ── ENVIAR MENSAJE ──
  const btnEnviar = document.getElementById('btnEnviar');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value.trim();
      const email  = document.getElementById('email').value.trim();
      const msg    = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !msg) {
        alert('Por favor completa todos los campos.');
        return;
      }

      const confirm = document.getElementById('msgConfirm');
      confirm.style.display = 'block';
      confirm.innerHTML = `<span style="color:var(--accent2)">✓</span> Mensaje enviado, ${nombre}. Te responderemos a <strong>${email}</strong> pronto.`;

      document.getElementById('nombre').value  = '';
      document.getElementById('email').value   = '';
      document.getElementById('mensaje').value = '';
    });
  }

  // ── COMENTARIOS ──
  const btnComentario = document.getElementById('btnComentario');
  if (btnComentario) {
    btnComentario.addEventListener('click', agregarComentario);
  }

  function agregarComentario() {
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();
    if (!name || !text) return;

    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const list = document.getElementById('commentList');

    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `
      <div class="avatar">${initials}</div>
      <div>
        <div class="comment-meta"><strong>${name}</strong> · ahora</div>
        <p class="comment-body">${text}</p>
      </div>`;
    list.prepend(div);

    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';
    subtleHover('.comment');
  }
});
