'use strict'
var fs = require('fs');

'use strict'
var fs = require('fs');

var source = process.argv.splice(2)[0];
var target = source.substring(0, source.lastIndexOf('.')) + '.css';

fs.readFile(source, 'utf-8', function(err, data){ 
  if err throw err;

  fs.writeFile(target, data, function(err, data) {
    if err throw err;

    console.log('Wrote ' + target + '!'); 
  };
});
var source = process.argv.splice(2)[0];
var target = source.substring(0, source.lastIndexOf('.')) + '.css';

fs.readFile(source, 'utf-8', function(err, data){ 
  if err throw err;

  fs.writeFile(target, data, function(err, data) {
    if err throw err;

    console.log('Wrote ' + target + '!'); 
  };
});
