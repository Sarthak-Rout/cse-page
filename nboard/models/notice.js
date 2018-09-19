var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< Updated upstream
var noticeSchema = new Schema({
title : { type: String, default: 'title' },
body : { type: String, default: 'notice here' },
date: { type: Date, default: Date.now }
});
var notice = mongoose.model('notice', noticeSchema);
module.exports= notice;
=======
var noticeschema = new Schema({
name: String,
email: String,
psw: String,
psw-repeat: String,
remember: String,
})

var note= mongoose.model('note', noticeschema);
>>>>>>> Stashed changes
