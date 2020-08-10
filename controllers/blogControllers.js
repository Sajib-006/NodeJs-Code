//blog_index, blolg_details, blog_create_get, blog_create_post, blog_delete , rate
const Blog = require("../models/blogs");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index2", { title: "See Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const full_blog = (req, res) => {
  const id = req.params.id;
  //console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/full_blog", { title: "See full blog", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
  //mongoose.Types.ObjectId("5f29502d12fe5043ac5acf9d");
  res.render("blogs/create", { title: "Create new blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  blog_index,
  full_blog,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
