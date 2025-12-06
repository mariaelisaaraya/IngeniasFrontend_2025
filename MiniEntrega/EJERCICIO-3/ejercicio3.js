function pasajerosTren(cantEstaciones) {
  let pasajeros = 200;
  let reporte = [];
  for (let est = 1; est <= cantEstaciones; est++) {
    if (est === 1) {
      reporte.push(`Estación 1: ${pasajeros} pasajeros`);
    } else if (est === 5) {
      pasajeros += 120; // suben
      pasajeros -= 80;  // bajan
      reporte.push(`Estación Olimpo (5): ${pasajeros} pasajeros`);
    } else {
      pasajeros += 50; // suben
      pasajeros -= 30; // bajan
      reporte.push(`Estación ${est}: ${pasajeros} pasajeros`);
    }
  }
  return reporte;
}

function reporteTren() {
  const estaciones = parseInt(document.getElementById('estacionesInput').value);
  if (isNaN(estaciones) || estaciones < 1) {
    document.getElementById('reporte').textContent = "Por favor, ingresa una cantidad válida de estaciones.";
    return;
  }
  const resultado = pasajerosTren(estaciones);
  document.getElementById('reporte').innerHTML = resultado.map(e => `<div>${e}</div>`).join('');
}