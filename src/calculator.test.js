const test = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('../src/calculator');
 
test('add() adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
 
test('subtract() subtracts two numbers', () => {
  assert.strictEqual(subtract(5, 3), 2);
});
