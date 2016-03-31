var sizes = ['smallish', 'mediumish', 'biggish', 'whatever'];

var randomFontSize = function(size){
  switch(size){
    case 'smallish':
      return (Math.floor(Math.random() * 16) + 4) + 'px';
      break;
    case 'mediumish':
      return (Math.floor(Math.random() * 32) + 17)  + 'px';
      break;
    case 'biggish':
      return (Math.floor(Math.random() * 48) + 33)  + 'px';
      break;
    case 'whatever':
      return (Math.floor(Math.random() * 100) + 1) + 'px';
      break;
  }
};

module.exports = randomFontSize;