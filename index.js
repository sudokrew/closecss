'use strict';
var postcss   = require('postcss');
var fs        = require('fs');
var closecss  = require('closecss');

var source = 'src/styles.close';
var target = 'dest/styles.css';

var processor = postcss([closecss]);
var css = fs.readFile(source, 'utf-8', function (err, data){
  if(err) return console.log(err);
  processor
    .process(data, {from: source, to: target})
    .then(function(result) {
      fs.writeFile(target, result);
    });
});

