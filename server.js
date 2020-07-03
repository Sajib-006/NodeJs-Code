const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log('Request made.');
    console.log(req.url , req.method); //comma gives a space in-between parameters
    //console.log(res);
     res.setHeader('Content-Type', 'text/html');
    // res.write('<head> <link rel="stylesheet" href="www.facebook.com"> </head>');
    // res.write('<p> Hello <a href="www.google.com"> google </a> </p>');
    // res.write('<p> My name is xyz.</p>');
    // res.end();
    let path ='./views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/aboutme':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    })

})

server.listen(3000, 'localhost', () =>{
    console.log('Server is listening at port 3000.');
})