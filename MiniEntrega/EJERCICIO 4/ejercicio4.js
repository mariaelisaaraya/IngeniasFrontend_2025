function fizzBuzzFor(max) {
  let res = [];
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      res.push(i);
      console.log(i); 
    }
  }
  return res;
}

function fizzBuzzWhile(max) {
  let res = [];
  let i = 0;
  while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      res.push(i);
      console.log(i); 
    }
    i++;
  }
  return res;
}

function mostrarFizzBuzz() {
  const max = parseInt(document.getElementById('maxInput').value);
  if (isNaN(max) || max < 1) {
    document.getElementById('resultado').textContent = "Por favor, ingresa un número válido.";
    return;
  }

  const resultado = fizzBuzzFor(max);
  document.getElementById('resultado').textContent = resultado.join(', ');
}