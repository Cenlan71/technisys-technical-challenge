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
});
