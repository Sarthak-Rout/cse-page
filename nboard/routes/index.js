var express = require('express');
var router = express.Router();

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

router.get('/blog-stld', function(req, res) {
  res.render('blog-stld');
});

router.get('/notice', function(req, res) {
  res.render('notice');
});

router.get('/file', function(req, res) {
  res.render('file', { title: 'Express' });
});

router.post('/', function(req, res) {
  res.render('file', { title: 'Express' });
  console.log(req.body);
});
module.exports = router;
