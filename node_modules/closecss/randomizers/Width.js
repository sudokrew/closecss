var widths = ['thinish', 'smallish', 'mediumish', 'largish', 'whatever'];

var randomWidth = function(width){
  switch(width){
    case 'thinish':
      return (Math.floor(Math.random() * 5) + 1) + 'px';
      break;
    case 'smallish':
      return (Math.floor(Math.random() * 25) + 5) + 'px';
      break;
    case 'mediumish':
      return (Math.floor(Math.random() * 100) + 25) + 'px';
      break;
    case 'largish':
      return (Math.floor(Math.random() * 500) + 100) + 'px';
      break;
    case 'whatever':
      return (Math.floor(Math.random() * 2000)) + 'px';
      break;
  }

}

module.exports = randomWidth;
