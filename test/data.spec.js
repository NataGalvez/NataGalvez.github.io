global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('../src/data/rickandmorty');



describe('workData', () => {
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
		"name": "Gear Cop",
   		"status": "Dead"
	},
		
	]

  it('debería ser un objeto', () => {
    assert.equal(typeof workData, 'object');
  });

  describe('workData.showCard', () => {

    it('debería ser una función', () => {
      assert.equal(typeof workData.showCard, 'function');
    });

    it('debería debería retornar el objeto Rick Sanchez al filtrar por status Alive', ()=>{
      assert.deepequal(workData.showCard(show, "Alive"), [{"name": "Rick Sanchez","status": "Alive"}])
    })
    
  })
  