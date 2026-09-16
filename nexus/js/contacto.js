document.addEventListener('DOMContentLoaded', () => {

  // ── ENVIAR MENSAJE ──
  document.getElementById('btnEnviar').addEventListener('click', () => {
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

  // ── COMENTARIOS ──
  document.getElementById('btnComentario').addEventListener('click', agregarComentario);

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
  }
});
