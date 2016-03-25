var borders = ['thickish', 'thinish'];
var borderRadius = ['roundish', 'curvish', 'squarish'];

module.exports = {
  'randomBorderRadius': function (border){
    switch (border){
      case 'roundish':
        return '50%';
        break;
      case 'curvish':
        return '25%';
        break;
      case 'squarish':
        return '10%';
        break;
    }
  },
  'randomBorder': function(border){
    var sizeLarge = Math.floor(Math.random() * 25);
    var sizeSmall = Math.floor(Math.random() * 5);
    switch(border){
      case 'thickish':
        return sizeLarge + 'px solid black';
        break;
      case 'thinish':
        return sizeSmall + 'px solid black';
        break;
    }
  }
}
