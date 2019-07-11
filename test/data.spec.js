global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('workData', () => {
  
  it('debería ser una función', () => {
    assert.deepequal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
