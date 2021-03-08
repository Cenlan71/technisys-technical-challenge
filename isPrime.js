function isPrime(i = 0) {
  if (i !== parseInt(i, 10) || parseInt(i) <= 1) return false; // Detecta si el input es un nùmero entero, en caso de que no, retorna false.

  let flag = false; // Esta variable indica si el número iterado es primo o no.
  for (let j = 2; j < i; j++) { // Itera cada número del intervalo entre el número base y el número introducido, entre cada posible número del mismo intervalo.
    if(i % j == 0) { // Evalua si el número iterado (i) es primo o no, y almacena este valor booleano en "flag".
      flag = true;
      break; // Como ya detectó que no es primo, no es necesario continuar iterando este número.
    }
  }
  if (i > 1 && !flag) return true; // Si el numero es mayor que 1, y pasó todas las pruebas de arriba, retorna true para imprimirlo.

  return false; // Retorna false por defecto, en caso de que el numero no sea primo.
}

module.exports.isPrime = isPrime; // Exporto mi función para utilizarla en diversos módulos.
