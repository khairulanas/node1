var http = require('http');

var server = http.createServer(function(req,res){
    // res.end('hello node js');
    res.writeHead(200,{'Conten-Type':'text/html'});
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(8080);

// server.listen(8080);

console.log('running server http://localhost:8080')