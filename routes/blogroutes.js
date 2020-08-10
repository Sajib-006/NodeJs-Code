const express = require("express");
const router = express.Router();
const Blog = require("../models/blogs");

router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index2", { title: "See Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname}); //here path is to be real path,so root is needed
  //mongoose.Types.ObjectId("5f29502d12fe5043ac5acf9d");
  res.render("create", { title: "Create new blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  //console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("full_blog", { title: "See full blog", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
