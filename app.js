const express = require('express');

//express app
const app = express();

//register view engine 
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

//app will be executed top to bottom, so 404 page is at last when no expression will be executed.
app.get('/', (req,res) =>{
    //res.send('<p> Home page </p>');   //send() doesn't need to set header like write()
    //res.sendFile('./views/index.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.render('index2');
})

app.get('/about', (req,res) =>{
    //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.render('about2');
})

app.get('/about-us', (req,res) =>{
    res.redirect('/about');
})

app.use( (req,res) =>{
    //res.status(400).sendFile('./views/404.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.status(404).render('404x');
})