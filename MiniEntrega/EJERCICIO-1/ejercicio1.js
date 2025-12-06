function sumaGanancias(importes) {
  return importes
    .filter(monto => monto > 0 && monto <= 1000)
    .reduce((acum, monto) => acum + monto, 0);
}

function calcularSuma() {
  const input = document.getElementById('importesInput').value;
  const importes = input.split(',').map(num => parseFloat(num.trim()));
  const resultado = sumaGanancias(importes);
  document.getElementById('resultado').textContent = isNaN(resultado) ? "Entrada inválida" : resultado;
}