var Afar = require('./Afar');
var assert = require('assert');

// SF lat/lon
var lat1 = '37.7749';
var lon1 = '122.4194';

// LA lat/lon
var lat2 = '34.0522';
var lon2 = '118.2437';


describe('distance', function(){
  it('returns distance between sf and la', function(){
    assert.equal(Afar(lat1, lon1, lat2, lon2), 559.1205770615537);
  });
});
