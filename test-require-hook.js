require('babel-core/register');
require('./index');

var cache = require('./cache.json');

Object.keys(cache).forEach(function iterator (key) {
  console.log(cache[key].code);
});
