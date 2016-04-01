'use strict';
var postcss = require('postcss');
var random = require('./Randomizer.js');
var closecss = postcss.plugin('closecss', function (opts){
  return function (css) {
    opts = opts || {};
    css.walkRules(function (rule){
      css.walkDecls(function (decl, i) {

        if (decl.value.indexOf('somewhat(') > -1 ){
          var value = decl.value;
          var regex = /["']([^)]+)["']/g;
          var val = regex.exec(value)[1];

          switch(decl.prop){
            case 'color':
              decl.value = random.color(val);
              break;
            case 'background-color':
              decl.value = random.color(val);
              break;
            case 'border':
              decl.value = random.border(val);
              break;
            case 'border-radius':
              decl.value = random.borderRadius(val);
              break;
            case 'width':
              decl.value = random.width(val);
              break;
            case 'height':
              decl.value = random.height(val);
              break;
            case 'margin':
              decl.value = random.margin(val);
              break;
            case 'padding':
              decl.value = random.padding(val);
              break;
            case 'font-size':
              decl.value = random.fontSize(val);
              break;
            case 'font-weight':
              decl.value = random.fontWeight(val);
              break;
          }
        }

      });
    });
  };
});

var processor = postcss([closecss]);

module.exports = processor;
