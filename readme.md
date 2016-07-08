## Afar

  Calculate the distance (km) between two latitude and longitude points.

## Install
  ~~~bash
  npm i afar
  ~~~

## Usage
  ~~~js
  var afar = require('afar')

  // SF lat/lon
  var lat1 = '37.7749';
  var lon1 = '122.4194';

  // LA lat/lon
  var lat2 = '34.0522';
  var lon2 = '118.2437';

  afar(lat1, lon1, lat2, lon2)
  // => 559.1205770615537 

  ~~~    
  