var http = require('http')
var url = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    res.end('kata kunci: '+q.keyword);
}).listen(8080);

console.log('ok');