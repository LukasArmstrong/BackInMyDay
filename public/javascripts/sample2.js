var User = require('../../models/User');
var Photo = require('../../models/Photo');
var Exif = require('../../models/EXIF');
var Scrape = require('../../models/Scrape');

var addUser = require('./userAddDB');
var addPhoto = require('./photoAddDB');
var addExif = require('./exifAddDB');
var addScrape = require('./scrapeAddDB');

var getExif = require('./exifPull');

var async = require('async');
var mongoose = require('mongoose');

//open DB
mongoose.connect('mongodb://127.0.0.1/BIMDDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

function cb(err, result){
  if(err){console.error(err, 'something went wrong');}
  else{console.log(result + 'is the result');}
mongoose.connection.close();}


var desc = 'a street in the town of in the evening'

addPhoto('615fb18ad8bedf6a672737b5', 'town', desc, '2008-10-22T20:44:01', '2021-10-08T08:15:06', 'C:\Users\kasmi\OneDrive\Documents\Development\My_HTML\BIMD\public\images', "615fd1b3469ed2a44566199a", '615a7469c419920cbc7a7fd5' , cb)
