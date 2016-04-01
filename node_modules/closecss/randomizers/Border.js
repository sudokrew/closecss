var borders = ['thickish', 'thinish'];

var randomBorder = function(border){
  var sizeLarge = Math.floor(Math.random() * 25) + 6;
  var sizeSmall = Math.floor(Math.random() * 5) + 1;
  switch(border){
    case 'thickish':
      return sizeLarge + 'px solid black';
      break;
    case 'thinish':
      return sizeSmall + 'px solid black';
      break;
  }
};

module.exports = randomBorder;