var colors = ['redish', 'blueish', 'yellowish', 'greenish', 'orangeish', 'purpleish', 'greyish', 'whiteish', 'blackish', 'whatever'];

var randomColor = function(color){
  var randomHex = Math.random().toString(16);
  switch (color){
    case 'whatever':
      return "#" + randomHex.slice(2, 8);
      break;
    case 'blueish':
      return "#" + randomHex.slice(2, 6) + 'ff';
      break;
    case 'redish':
      return "#ff" + randomHex.slice(4, 8);
      break;
    case 'greenish':
      return "#" + randomHex.slice(2, 4) + 'ff' + randomHex.slice(6, 8);
      break;
    case 'yellowish':
      return '#ffff' + randomHex.slice(6,8);
      break;
    case 'orangeish':
      return '#ffa5' + randomHex.slice(6,8);
      break;
    case 'purpleish':
      return '#80' + randomHex.slice(2,4) + '80';
      break;
    case 'greyish':
      var grey = randomHex.slice(2,4);
      return '#' + grey + grey + grey;
      break;
    case 'whiteish':
      return '#ffffff';
      break;
    case 'blackish':
      return '#000000';
      break;
  }
};

module.exports = randomColor;
