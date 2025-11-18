//* ✅ Ejercicio 4 - FizzBuzz con `for` y `while`  /*

function fizzBuzzFor(max) {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      console.log(i);
    }
  }
}

//* Comentarios - Ejercicio: FizzBuzz con "for":

/*
Cree una funcion llamada fizzBuzzFor, que recibe un parametro llamado max. Este parametro representa el numero maximo hasta el cual quiero iterar, sin incluirlo.
Dentro de la funcion, inicialice un bucle for que comienza desde el numero 0 y se ejecuta mientras i sea menor que max, incrementando el valor de i en uno, en cada vuelta.
Luego, dentro del bucle, agregue una condicion if que verifica si el numero actual "i" es divisible por 3 o por 5, usando el operador modulo "%". Ademas, agregue una segunda condicion, para asegurarme que no sea divisible por ambos al mismo tiempo, es decir, que i no sea divisible por 15.
Si se cumple esta condicion, console.log(i) muestra ese numero por consola.
*/

function fizzBuzzWhile(max) {
  let i = 0;

  while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      console.log(i);
    }
    i++;
  }
}

//* Comentarios - Ejercicio: FizzBuzz con "While":
/*
Cree una funcion llamada fizzBuzzWhile, que recibe un parametro llamado max. Este valor indica hasta que numero quiero iterar, sin incluirlo.
Dentro de la funcion, declare una variable "i" y la inicialice en 0, que va a ser mi contador.
Seguido use un bucle while, que se ejecuta siempre que el valor i sea menor que max. Dentro del bucle, agregue una condicion if para verificar si el numero actual "i" es divisible por 3 o por 5, pero que no sea divisible por ambos a la vez, es decir, que no sea divisible por 15.
Si la condicion se cumple, se imprime el numero en consola.
Finalmente, fuera del if y dentro del while, incremento el valor de i en uno para continuar el ciclo.
*/
