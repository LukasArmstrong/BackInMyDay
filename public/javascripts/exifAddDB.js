


var async = require('async')

var EXIF = require('./../../models/EXIF')

//create exif add to database---------------------------------------------------
function exifCreate(exifData, cb){
  exifDetail = exifData;
  var exif = new EXIF(exifDetail);
  exif.save(function (err) {
    if(err){
      cb(err, null)
      return}
    console.log('New Exif: ' + exif);
    cb(null, exif)
  });
};

//main function-----------------------------------------------------------------
module.exports = function (exifData, cb){
  //database setup and connection
  var mongoose = require('mongoose');
  var mongoDB = 'mongodb://127.0.0.1/BIMDDB';
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
  //call add function
  exifCreate(exifData, function (err){
    if(err){
      console.error(err, 'something went wrong adding to the database')
    }else{
        mongoose.connection.close();
    }
  });
}
