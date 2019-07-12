global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('../src/data/rickandmorty');

	const show=[
	{
		"name": "Rick Sanchez",
		"status": "Alive"
	},
	{
		"name": "Retired General Rick",
		"status": "unknown"
	},
	{
		"name":"Gear Cop",
		"status":"Dead"
	},
		
	];

describe('workData', () => {


  it('debería ser un objeto', () => {
    assert.equal(typeof workData, 'object');
  });

  describe('workData.filterCondition', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.filterCondition, 'function');
    });

    it('debería retornar el objeto Alive al filtrar por "status"', ()=>{
      assert.deepequal(window.filterCondition(show, "status"), status)
    })
    
  })
});