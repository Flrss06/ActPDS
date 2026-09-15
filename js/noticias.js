document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('voted')) return;
      btn.classList.add('voted');
      const span = btn.querySelector('span');
      span.textContent = parseInt(span.textContent) + 1;
    });
  });
});
