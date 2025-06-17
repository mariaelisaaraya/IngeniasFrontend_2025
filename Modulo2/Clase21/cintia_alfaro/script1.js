/*
1) Necesitamos escribir una función que, recibiendo un array con importes,
nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia,
a excepción de los que superen un importe de $1.000.
*/

let importes = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1900]; //ventas
function cuentas(importess) {
    let pesos = 0;
    for (let monto of importess) { 
       monto > 0 && monto <= 1000 ? pesos += monto : null; // condicion? true : false
    }
    return pesos;
}
cuentas(importes);
console.log(cuentas(importes));

//otroPR