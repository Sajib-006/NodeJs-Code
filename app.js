const express = require('express');
// const ejsLint = require('ejs-lint');
// ejsLint(text, options);

//express app
const app = express();

//register view engine 
app.set('view engine', 'ejs');

//listen for request
app.listen(4000);

//use of middleware
app.use((req, res, next)=>{
    console.log('New request made:');
    console.log('Host: ', req.hostname);
    console.log('Path: ',req.path);
    console.log('Method: ', req.method);
    next();
})



//app will be executed top to bottom, so 404 page is at last when no expression will be executed.
app.get('/', (req,res) =>{
    //res.send('<p> Home page </p>');   //send() doesn't need to set header like write()
    //res.sendFile('./views/index.html', { root: __dirname}); //here path is to be real path,so root is needed
    const blogs = [
        {title: 'How to keep fit', snippet: 'Health'},
        {title: 'How to program in C', snippet: 'Programming'},
        {title: 'Taking balance diet', snippet: 'Health'},
        {title: 'How to learn node.js', snippet: 'Programming | Node.js'}
    ];
    var articles = [
        {title: "Man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
        {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
        {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
    ];
    var comments = [
        {author: "Adam", content: "I personally have never encountered a different opinion"},
        {author: "Ryan", content: "But what about Ligers? Are they good pets?"},
        {author: "Nick", content: "This woman is a genius!"}
    ];
    var color='red';
    res.render('index2',{title: 'Home', articles: articles, color:'green'});
    //res.render('index2',{title: 'Home', blogs: 'blogs', articles: 'articles',comments: 'comments'});
})

app.use((req,res,next)=>{
    console.log('next middleware .....');
    next();
})

app.get('/about', (req,res) =>{
    //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.render('about2',{title: 'About'});
})

app.get('/blogs/create', (req,res) =>{
    //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.render('create',{title: 'Create new blog'});
})

// app.get('/about-us', (req,res) =>{
//     res.redirect('/about');
// })

app.use( (req,res) =>{
    //res.status(400).sendFile('./views/404.html', { root: __dirname}); //here path is to be real path,so root is needed
    res.status(404).render('404x',{title: '404'});
})