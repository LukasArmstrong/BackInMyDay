


var async = require('async')

var Photo = require('./../../models/Photo')

//main function-----------------------------------------------------------------
module.exports = function (user_id, photoname, desc, datecap, datepost, fileloc, scrape_id, exifdata_id,cb){
  photoCreate(user_id, photoname, desc, datecap, datepost, fileloc, scrape_id, exifdata_id, cb);
}

//create photo add to database--------------------------------------------------
function photoCreate(user_id, photoname, desc, datecap, datepost, fileloc, scrape_id, exifdata_id, cb){
  photoDetail = {user: user_id, photoName: photoname, description: desc, dateC:datecap, dateP: datepost, fileLocation: fileloc, scrapedData: scrape_id, exifData:exifdata_id};
  var photo = new Photo(photoDetail);
  photo.save(function(err) {
    if(err){
      cb(err,null)
      return}
    cb(null, photo)
  });
};
