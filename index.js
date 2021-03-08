const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require("./src/routes/primeRoutes");
const isPrime = require('./isPrime').isPrime;  // Requerimos el modulo para calcular si un numero en particular es primo, separado de esta forma para las pruebas unitarias.

const baseNumber = 2; // Número base, este sera el número más bajo para calcular un intervalo de números primos.

let app = express();
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var port = 8080;

const prompt = require('prompt-sync')(); // Modulo para obtener inputs del usuario en Node.

app.get('/', (req, res) => {
  let form = '<h1>Bienvenido al Technisys Technical Challenge</h1>';
  form += '<p>Por favor, introduce un número y presiona "Enviar" para imprimir todos los numeros primos entre el mismo y 2.</p>';
  form += '<form method="POST" action="/api/evaluate">';
  form += '<input type="text" name="inputNumber"/>';
  form += '<input type="hidden" name="baseNumber" value="'+baseNumber+'"/>';
  form += '<button type="submit"/>Enviar</button>';
  form += '</form>';
  res.send(form);
});

app.use('/api', routes); // Use api routes in the APP

app.listen(port, () => {
  console.log(`Bienvenido`);
  // console.log(`----------------------------------------------------------------------------------------------------`);
  //
  // do {
  //   getPrimeNumbers(baseNumber);
  //   r = prompt('¿Desea evaluar otro número? (y/n): ');
  //   console.log(`----------------------------------------------------------------------------------------------------`);
  // } while(r == 'y');
  //
  // console.log(`Gracias, hasta luego`);
  // console.log(`----------------------------------------------------------------------------------------------------`);
  //
  // function getPrimeNumbers(baseNumber) {
  //   var inputNumber = parseInt(prompt('Introduzca un número para obtener todos los números primos entre si mismo y 2: '));
  //   console.log(`----------------------------------------------------------------------------------------------------`);
  //
  //   if (inputNumber !== parseInt(inputNumber, 10)) { //Si el input no es un número, no permite seguir, y muestra un mensaje al usuario.
  //     console.log(`Solo puedes introducir números, que sean mayores o iguales a ${baseNumber}.`);
  //     console.log(`----------------------------------------------------------------------------------------------------`);
  //     return false;
  //   }
  //
  //   if (inputNumber < baseNumber || inputNumber <= 1) { //Si el número introducido por input es menor al número base, el algoritmo no permite seguir, y le advierte de esto al usuario.
  //     console.log(`Número inválido. Introduce un número mayor o igual ${baseNumber}.`);
  //     console.log(`----------------------------------------------------------------------------------------------------`);
  //     return false;
  //   }
  //
  //   console.log(`Los números primos entre ${baseNumber} y ${inputNumber} son: `);
  //
  //   for(let i = inputNumber; i >= baseNumber; i--) { //Este FOR permite iterar desde el número introducido por el usuario, descendiendo hasta el número base.
  //     if(isPrime(i)) {
  //       console.log(i);
  //     }
  //   }
  //
  //   console.log(`----------------------------------------------------------------------------------------------------`);
  // }
});
