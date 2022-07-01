const http = require('http')
const fs = require('fs');

http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Type':'text/html'});

    const url = req.url;
console.log(url)
    if(url === '/index') {
        fs.readFile('./index.html',(err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        });
    }
    else if (url === '/about') {
        fs.readFile('./about.html',(err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        });
    } 
    else if (url === '/contact') {
        fs.readFile('./contact-me.html',(err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        });
    } 
    else {
        fs.readFile('./404.html',(err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        });
    }
}).listen(3000, () => {
    console.log("server start at port 3000")
});