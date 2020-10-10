var fs=require('fs')
var http=require('http')

http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        if (err) throw err;

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080)

console.log('running server http://localhost:8080')