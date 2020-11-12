const http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!');
}).listen(8214,'localhost')

console.log("Server is running at 8214");