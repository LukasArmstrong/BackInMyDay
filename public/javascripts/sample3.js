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

addScrape('https://www.at40.com/charts/top-40-238/latest/','https://www.nbcnews.com/', 'https://www.foxsports.com/scores',cb )
