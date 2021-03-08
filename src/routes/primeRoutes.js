let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: '¡Éxito!',
    message: 'Las APIs están funcionando'
  });
});

var primeController = require('../controllers/primeController');

router.route('/evaluate')
  .post(primeController.evaluate);

module.exports = router;
