var color = require('./randomizers/Color.js');
var border = require('./randomizers/Border.js');
var borderRadius = require('./randomizers/BorderRadius.js');
var width = require('./randomizers/Width.js');
var height = require('./randomizers/Height.js');
var margin = require('./randomizers/Margin.js');
var padding = require('./randomizers/Padding.js');
var fontSize = require('./randomizers/FontSize.js');
var fontWeight = require('./randomizers/FontWeight.js');

module.exports = {
  'color': color,
  'border': border,
  'borderRadius': borderRadius,
  'width': width,
  'height': height,
  'margin': margin,
  'padding': padding,
  'fontSize': fontSize,
  'fontWeight': fontWeight,
  'flip': function (){
    var x = (Math.floor(Math.random() * 2) === 0);
      if (x){
        return 1;
      }else{
        return 0;
      }
  }
};
