const express = require("express");
// const ejsLint = require('ejs-lint');
// ejsLint(text, options);
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogroutes");
const { render } = require("ejs");

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://dip:jvk2okhskEJpfopJ@nodejs.1k7mq.mongodb.net/NodeJS?retryWrites=true&w=majority";
//using mongoose
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//listen for request
//app.listen(4000);

//middleware & static files
app.use(express.static("public"));
//middeleware for embedding all information in req.body
app.use(express.urlencoded({ extended: true }));
//use of middleware
// app.use((req, res, next)=>{
//     console.log('New request made:');
//     console.log('Host: ', req.hostname);
//     console.log('Path: ',req.path);
//     console.log('Method: ', req.method);
//     next();
// })

//use of 3rd party app morgan instead of next() and req.properties
// app.use(morgan('dev'));
app.use(morgan("tiny"));
// app.use(morgan('short'));
// app.use(morgan("combined"));
// app.use(morgan('common'));

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title: 'first blog',
//         snippet: 'this is my first blog in Blog House',
//         body: 'First blog is always impressive, exciting. Guys, please response my blog and give suggestion how i can improve my blog-writing skill.Thanks in advance!'
//     });
//     blog.save()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// })

// app.get('/one-blog',(req,res)=>{
//     Blog.findById('5f29509412fe5043ac5acf9e').then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

// //app will be executed top to bottom, so 404 page is at last when no expression will be executed.
// app.get('/', (req,res) =>{
//     //res.send('<p> Home page </p>');   //send() doesn't need to set header like write()
//     //res.sendFile('./views/index.html', { root: __dirname}); //here path is to be real path,so root is needed
//     const blogs = [
//         {title: 'How to keep fit', snippet: 'Health'},
//         {title: 'How to program in C', snippet: 'Programming'},
//         {title: 'Taking balance diet', snippet: 'Health'},
//         {title: 'How to learn node.js', snippet: 'Programming | Node.js'}
//     ];
//     var articles = [
//         {title: "Man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
//         {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
//         {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
//     ];
//     var comments = [
//         {author: "Adam", content: "I personally have never encountered a different opinion"},
//         {author: "Ryan", content: "But what about Ligers? Are they good pets?"},
//         {author: "Nick", content: "This woman is a genius!"}
//     ];
//     var color='red';
//     res.render('index2',{title: 'Home', articles: articles, color:'green'});
//     //res.render('index2',{title: 'Home', blogs: 'blogs', articles: 'articles',comments: 'comments'});
// })

// app.use((req,res,next)=>{
//     console.log('next middleware .....');
//     next();
// })
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
  res.render("about2", { title: "About" });
});

//handling post method

app.get("/rate", (req, res) => {
  res.render("rate", { title: " Rate Us" });
});

//use of routes:blog routes
app.use(blogRoutes);

app.use((req, res) => {
  //res.status(400).sendFile('./views/404.html', { root: __dirname}); //here path is to be real path,so root is needed
  res.status(404).render("404x", { title: "404" });
});
