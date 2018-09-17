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

router.get('/notice', function(req, res) {
  res.render('notice');
});

module.exports = router;
