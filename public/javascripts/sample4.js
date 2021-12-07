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

var file = './../images/25591803_1524849954217252_6624497429169138712_n.jpg'

getExif(file, function(error, exifdata){
  if(error){console.error(error, 'couldnt get exif data')}
  else{
    console.log('exifdata');
  }
});
