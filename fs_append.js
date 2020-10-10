var fs = require('fs');

//create file named newfile.txt
fs.appendFile('newfile.txt', 'Hello world', (err) => {
  if (err) throw err;
  console.log('Saved');
})