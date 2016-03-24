'use strict'
var fs = require('fs');
var CSSJSON = require('cssjson');

var source = process.argv.splice(2)[0];
var target = source.substring(0, source.lastIndexOf('.')) + '.css';

fs.readFile(source, 'utf-8', function(err, data){
  if (err){throw err;}

  var parser = function (input){
    var css = CSSJSON.toJSON(input);
    for (var key in css.children){
      var val = css.children[key].attributes;
      switch (val.somewhat){
        case '"blueish"':
          val.somewhat = '"blue"';
          break;
        case '"redish"':
          val.somewhat = '"red"';
          break;
        default:
      }
    }
    return CSSJSON.toCSS(css);
  };

  var output = parser(data);

  fs.writeFile(target, output, function(err) {
      if (err) {throw err;}
      console.log('Wrote ' + target + '!');
   });
});
