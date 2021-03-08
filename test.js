const assert = require('assert');
const isPrime = require('./isPrime').isPrime;

describe('Test isPrime', function() {
  it('isPrime retorna TRUE para un número primo. De resto, retorna FALSE', function() {
    assert.equal(true, isPrime(7));
    assert.equal(true, isPrime(11));
    assert.equal(false, isPrime(15));
    assert.equal(false, isPrime(0));
    assert.equal(false, isPrime(1));
    assert.equal(false, isPrime(10));
    assert.equal(false, isPrime('7'));
    assert.equal(false, isPrime(true));
    assert.equal(false, isPrime([1, 7, '11']));
    assert.equal(false, isPrime());
  });
});
