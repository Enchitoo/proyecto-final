// El menu de hamburger
const btn = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
}

// Relojito
const clock = document.getElementById('clock');
if (clock) setInterval(() => { clock.textContent = new Date().toLocaleTimeString() + ' UIO'; }, 1000);

// El formulario
const form = document.getElementById('solicitudForm');
if (form) {
  const disp = document.getElementById('dispositivo');
  const serv = document.getElementById('servicio');
  const otroBox = document.getElementById('otro-field');
  const otroInput = document.getElementById('otro-text');

  function checkOtro() {
    const need = disp.value === 'otro' || serv.value === 'otro';
    otroBox.classList.toggle('active', need);
    if (need) otroInput.required = true; else otroInput.required = false;
  }
  disp.addEventListener('change', checkOtro);
  serv.addEventListener('change', checkOtro);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(inp => {
      if (!inp.value.trim()) { inp.classList.add('input-error'); ok = false; }
      else { inp.classList.remove('input-error'); }
    });
    const status = document.getElementById('status');
    if (ok) {
      status.style.color = 'green';
      status.textContent = '✓ Solicitud enviada correctamente';
      form.reset();
      otroBox.classList.remove('active');
    } else {
      status.style.color = 'red';
      status.textContent = '✕ Completa todos los campos';
    }
  });
}