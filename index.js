'use strict';
var fs        = require('fs');
var closecss  = require('closecss');

var source = 'src/styles.close';
var target = 'dest/styles.css';

var css = fs.readFile(source, 'utf-8', function (err, data){
  if(err) return console.log(err);
  closecss
    .process(data, {from: source, to: target})
    .then(function(result) {
      fs.writeFile(target, result);
    });
});

