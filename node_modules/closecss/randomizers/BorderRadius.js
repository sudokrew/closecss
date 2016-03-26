var borderRadius = ['roundish', 'curvish', 'squarish'];

var randomBorderRadius = function (border){
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
};

module.exports = randomBorderRadius;