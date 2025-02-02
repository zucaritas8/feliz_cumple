function bloquearMoviles() {
  const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  
  if (esMovil) {
      const advertencia = document.createElement("div");
      advertencia.classList.add("mensaje-advertencia");
      advertencia.innerHTML = `
          <h2>⚠️ Acceso restringido</h2>
          <p>Esta página solo está disponible en computadoras.</p>
      `;
      
      document.body.innerHTML = "";
      document.body.appendChild(advertencia);
  }
}

bloquearMoviles();
