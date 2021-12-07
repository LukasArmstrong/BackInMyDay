var fs = require('fs');
var path = require('path');
var process = require('process');
var exif = require('exif');

var exifModels = require('./models/EXIF');

var dirname = __dirname + '/public/images';

fs.readdir(dirname, function(err, files){
  if (err){
    console.error('Directory error: ', err);
    process.exit(1);
  }
  files.forEach(function(file, index){
    var currentFile = path.join(dirname, file);
    console.log(currentFile);

    try {
        console.log('in try');
         exif({ image : currentFile }, function (error, exifData) {
            if (error)
                console.log('Error in: '+error.message);
            else
            console.log('inhere');
                console.log(exifData); // Do something with your data!
                //console.log(exifData.image.Make);
        });
    } catch (error) {
        console.log('Error in out: ' + error.message);
    }

  })
});

/*try {
     exif({ image : __dirname + '/images/image7.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error in: '+error.message);
        else
          var json = json.parse(exifData);
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error in out: ' + error.message);
}*/
