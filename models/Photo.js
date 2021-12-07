//schema------------------------------------------------------------------------
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectID, ref : 'User', required: true},
    photoName: {type: String, required: true},
    description: String,
    dateC: {type: Date, required: true},
    dateP: {type: Date, required: true},
    fileLocation: {type: String, required: true},
    scrapedData:{type: Schema.Types.ObjectID, ref : 'Scrape'},
    exifData: {type: Schema.Types.ObjectID, ref : 'EXIFData', required : true},
  }
);

module.exports = mongoose.model('Photo',photoSchema);
