var express = require('express');
var router = express.Router();
const Notice = require('../models/notice')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/faculty', function(req, res) {
  res.render('faculty');
});

router.get('/holidays', function(req, res) {
  res.render('holidays');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/blog-stld', function(req, res) {
  res.render('blog-stld');
});

router.get('/syllabus', function(req, res) {
  res.render('syllabus');
});

router.get('/blog-ds', function(req, res) {
  res.render('blog-ds');
});

router.get('/blog-ee', function(req, res) {
  res.render('blog-ee');
});

router.get('/blog-java', function(req, res) {
  res.render('blog-java');
});

router.get('/blog-se', function(req, res) {
  res.render('blog-se');
});

router.get('/blog-sp', function(req, res) {
  res.render('blog-sp');
});

router.get('/smoke', function(req, res) {
  res.render('smoke');
});

router.get('/blog-ai', function(req, res) {
  res.render('blog-ai');
});
// router.post('/login', function(req, res) {
//   res.render('login');
//   console.log(res.body);
// });

router.get('/notice', function(req, res) {
  var query = Notice.find({})
  query.select('title body date');
  query.exec((err,data) => {
    console.log(data);
    res.render('notice', {data: data});
  })
});
router.get('/verify', function(req, res) {
  res.render('enter', {message: req.flash('message')});
});
router.post('/login', (req, res) => {
  if(req.body.email === "admin@xyz.com" && req.body.pass=== "admin"){
    res.redirect('enter');
  } else {
    req.flash("message", "wrong username or password")
    res.redirect('login');
  }
})
router.get('/enter', (req, res)=> {
  res.render('add')
})
router.post('/enter', function(req, res) {
  console.log(req.body);
  let newNotice = new Notice(req.body);
  console.log(newNotice);
  newNotice.save()
    .then(res.send("saved succesfully"))
    .catch((err) => console.log(err))
});

module.exports = router;
