const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('../src/calculator');
 
test('add() adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
 
test('multiply() multiplies two numbers', () => {
  assert.strictEqual(multiply(4, 3), 12);
});
 
test('subtract() subtracts two numbers', () => {
  assert.strictEqual(subtract(5, 3), 2);
});
