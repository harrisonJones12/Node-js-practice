var http = require('http')

http.createServer( (req, res) => {

    res.setHeader("Content-Type", "text/html");

    var url = req.url;

    if(url === 'about') {
        res.write(' Welcome to about us page')
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    } 
    else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, () => {
    console.log("server start at port 3000")
});