function asientos(disponibles, buscado) {
  if (disponibles.includes(buscado)) {
    return `Felicitaciones, el asiento número ${buscado} está disponible`;
  } else {
    return `Lo sentimos, el asiento número ${buscado} está ocupado, pero aún quedan ${disponibles.length} asientos disponibles`;
  }
}

function verificarAsiento() {
  const disponibles = document.getElementById('asientosInput').value
    .split(',')
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));
  const buscado = parseInt(document.getElementById('buscadoInput').value);
  const resultado = asientos(disponibles, buscado);
  document.getElementById('resultado').textContent = resultado;
}
console.log(asientos([15, 28, 44, 45, 70], 15)); // disponible
console.log(asientos([15, 28, 44, 45, 70], 20)); // ocupado