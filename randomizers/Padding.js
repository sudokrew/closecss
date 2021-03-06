var paddings = ['closeish', 'farish', 'fatish', 'tallish'];

var randomPadding = function(size){
  var sizeLarge = Math.floor(Math.random() * 25) + 6;
  var sizeSmall = Math.floor(Math.random() * 5) + 1;
  var rValue = Math.floor(Math.random() * 100) + 1
  switch(size){
    case 'closeish':
      return sizeSmall + 'px';
      break;
    case 'farish':
      return sizeLarge + 'px';
      break;
    case 'fatish':
      return '0 ' + rValue + 'px';
      break;
    case 'tallish':
      return rValue + 'px 0';
      break;
  }
};

module.exports = randomPadding;