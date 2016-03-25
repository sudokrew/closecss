'use strict'
var fs = require('fs');dd
var postcss = require('postcss');

var source = process.argv.splice(2)[0];
var target = source.substring(0, source.lastIndexOf('.')) + '.css';

module.exports = postcss.plugin('closecss', function (opts){
  opts = opts || {};

  return function (css){
    css.eachDecl(function transformDecl(decl){
      console.log(decl.prop);
      console.log(decl.value);
    });
  };
});