const isPrime = require('../../isPrime').isPrime;

exports.evaluate = function (req, res) {
  let inputNumber = parseInt(req.body.inputNumber);
  let baseNumber = parseInt(req.body.baseNumber);

  if (inputNumber !== parseInt(inputNumber, 10)) { //Si el input no es un número, no permite seguir, y muestra un mensaje al usuario.
    let answer = '<h1>Solo puedes introducir números</h1>';
    answer += '<hr>';
    answer += '<p>Si lo deseas, puedes evaluar otro número.</p>';
    answer += '<form method="POST" action="/api/evaluate">';
    answer += '<input type="text" name="inputNumber"/>';
    answer += '<input type="hidden" name="baseNumber" value="'+baseNumber+'"/>';
    answer += '<button type="submit"/>Enviar</button>';
    answer += '</form>';
    res.send(answer);
  }

  if (inputNumber < baseNumber || inputNumber <= 1) { //Si el número introducido por input es menor al número base, el algoritmo no permite seguir, y le advierte de esto al usuario.
    let answer = '<h1>Debes introducir un número mayor o igual a '+baseNumber+'</h1>';
    answer += '<hr>';
    answer += '<p>Si lo deseas, puedes evaluar otro número.</p>';
    answer += '<form method="POST" action="/api/evaluate">';
    answer += '<input type="text" name="inputNumber"/>';
    answer += '<input type="hidden" name="baseNumber" value="'+baseNumber+'"/>';
    answer += '<button type="submit"/>Enviar</button>';
    answer += '</form>';
    res.send(answer);
  }

  let printableNumbers = [];
  for(var i = inputNumber; i >= baseNumber; -- i) { //Este FOR permite iterar desde el número introducido por el usuario, descendiendo hasta el número base.
    if(isPrime(i)) {
      printableNumbers.push('<p>' + i + '</p>');
    }
  }

  let answer = '<h1>Los numeros primos entre '+baseNumber+' y '+inputNumber+' son:</h1>';
  answer += '<hr>';
  printableNumbers.forEach(print => {
    answer += print;
  });
  answer += '<hr>';
  answer += '<p>Si lo deseas, puedes evaluar otro número.</p>';
  answer += '<form method="POST" action="/api/evaluate">';
  answer += '<input type="text" name="inputNumber"/>';
  answer += '<input type="hidden" name="baseNumber" value="'+baseNumber+'"/>';
  answer += '<button type="submit"/>Enviar</button>';
  answer += '</form>';

  res.send(answer);
};
