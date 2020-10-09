var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    switch(req.url){
        case '/about':
            res.write('ini halaman about');
            break;
        case '/home':
            res.write('ini halaman home');
            break;
        default:
            res.write('404 page nt found');
    }
    res.end();
}).listen(8080);
console.log('running server http://localhost:8080')