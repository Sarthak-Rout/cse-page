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

router.get('/notice', function(req, res) {
  res.render('notice');
});
router.get('/enter', function(req, res) {
  res.render('enter');
});
router.post('/enter', function(req, res) {
  console.log(req.body);
  let newNotice = new Notice(req.body);
  console.log(newNotice);
  newNotice.save()
    .then(res.send("saved succesfully"))
    .catch((err) => console.log(err))
});

module.exports = router;
