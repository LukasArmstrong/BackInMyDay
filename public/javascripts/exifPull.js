var fs = require('fs');
var path = require('path');
var process = require('process');
var exif = require('exif');

module.exports = function (imgName, callback){
  try {
       exif({ image :  './../images/' + imgName }, function (error, exifData) {
          if (error){console.log('Error in: ' + error.message + " " + imgName);}
          else{
              //console.log(exifData); // Do something with your data!
              console.log(imgName);
              console.log(typeof(exifData));
              exifData.image.ModifyDate = exifData.image.ModifyDate.replace(/ /, 'T')
              exifData.image.ModifyDate = exifData.image.ModifyDate.replace(/:/, '-')
              exifData.image.ModifyDate = exifData.image.ModifyDate.replace(/:/, '-')

              exifData.exif.DateTimeOriginal = exifData.exif.DateTimeOriginal.replace(/ /, 'T')
              exifData.exif.DateTimeOriginal = exifData.exif.DateTimeOriginal.replace(/:/, '-')
              exifData.exif.DateTimeOriginal = exifData.exif.DateTimeOriginal.replace(/:/, '-')

              exifData.exif.CreateDate = exifData.exif.CreateDate.replace(/ /, 'T')
              exifData.exif.CreateDate = exifData.exif.CreateDate.replace(/:/, '-')
              exifData.exif.CreateDate = exifData.exif.CreateDate.replace(/:/, '-')
              callback(error, exifData)
            }
      });
  } catch (error) {
      console.log('Error in out: ' + error.message);
  }

}
