var fs = require('fs');

fs.unlink('newfile2.txt', (err) => {
  if (err) throw err;
  console.log('removed');
})