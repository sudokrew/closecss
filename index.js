'use strict'
var fs = require('fs');dd
var postcss = require('postcss');

var source = process.argv.splice(2)[0];
var target = source.substring(0, source.lastIndexOf('.')) + '.css';

module.exports = postcss.plugin('closecss', function (opts){
  return function (css){
    opts = opts || {};

    css.walkRules(function(rule){
      rule.walkDecls(function(decl){
        if(value.indexOf('somewhat(') !== -1){
          console.log('somewhat found!');
        }
      });
    });

    css.eachDecl(function transformDecl(decl){
      console.log(decl.prop);
      console.log(decl.value);
    });
  };
});
