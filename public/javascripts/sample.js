var fs = require('fs');
var path = require('path');
var process = require('process');
var exif = require('exif')

var addexif = require('./exifAddDB')
var pullexif = require('./exifPull')

var dirname =  './../images';

/*fs.readdir(dirname ,{withFileTypes: true} , function(err, files){
  var filesnames = files
    .filter(files => files.isFile())
    .map(files => files.name);
  if (err){console.error('Directory error: ', err);process.exit(1)}

  filesnames.forEach(function(file, index){

    pullexif(file, function(error, exifdata){
      if(error){console.error(error, 'couldnt get exif data')}
      else{

        addexif(exifdata, function(err){console.log(file)
          if(err){console.error(err, "something went wrong calling the write to DB function")}
          else{console.log('exif was added successfully')}
        });
      }
    });
  });
});*/

fs.readdir(dirname ,{withFileTypes: true} , function(err, files){
  var filesnames = files
    .filter(files => files.isFile())
    .map(files => files.name);
  if (err){console.error('Directory error: ', err);process.exit(1)}

  filesnames.forEach(function(file, index){console.log(file)

    pullexif(file, function(error, exifdata){
      if(error){console.error(error, 'couldnt get exif data')}
      else{

        addexif(exifdata, function(err){console.log(file)
          if(err){console.error(err, "something went wrong calling the write to DB function")}
          else{console.log('exif was added successfully')}
        });
      }
    });
  });
});
