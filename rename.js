var fs = require('fs');

fs.rename('newfile.txt', 'renamedfile.txt', (err) => {
  if (err) throw err;
  console.log('Reanamed.')
})