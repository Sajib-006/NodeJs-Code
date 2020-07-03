const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Request made.');
    console.log(req.url , req.method); //comma gives a space in-between parameters
    //console.log(res);
    res.setHeader('Content-Type', 'text/html');
    res.write('<head> <link rel="stylesheet" href="www.facebook.com"> </head>');
    res.write('<p> Hello <a href="www.google.com"> google </a> </p>');
    res.write('<p> My name is xyz.</p>');
    res.end();
})

server.listen(3000, 'localhost', () =>{
    console.log('Server is listening at port 3000.');
})