var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//user schema
var EXIFSchema = new Schema(
  {
    //add more EXIF later
    image:{
      ImageWidth: Number,
      ImageHeight: Number,
      Make: String,
      Model: String,
      Orientation: Number,
      XResolution: Number,
      YResolution: Number,
      ResolutionUnit: Number,
      Software: String,
      ModifyDate: Date,
      YCbCrPositioning: Number,
      ExifOffset: Number,
      GPSInfo: Number
    },
    thumbnail: {
      ImageWidth: Number,
      ImageHeight: Number,
      Compression: Number,
      XResolution: Number,
      YResolution: Number,
      ResolutionUnit: Number,
      ThumbnailOffset: Number,
      ThumbnailLength: Number
    },
    exif: {
      ExposureTime: Number,
      FNumber: Number,
      ExposureProgram: Number,
      ISO: Number,
      ExifVersion: [],
      DateTimeOriginal: Date,
      CreateDate: Date,
      ShutterSpeedValue: Number,
      ApertureValue: Number,
      ExposureCompensation: Number,
      MaxApertureValue: Number,
      MeteringMode: Number,
      Flash: Number,
      FocalLength: Number,
      ColorSpace: Number,
      ExifImageWidth: Number,
      ExifImageHeight: Number,
      ExposureMode: Number,
      WhiteBalance: Number,
      DigitalZoomRatio: Number,
      FocalLengthIn35mmFormat: Number,
      SceneCaptureType: Number,
      ImageUniqueID: String
    },
    gps: {
      GPSLatitudeRef: String,
      GPSLatitude: [Number],
      GPSLongitudeRef: String,
      GPSLongitude: [Number]
    },
    interoperability: {},
    makernote: {}
  }
);

module.exports = mongoose.model('EXIFData', EXIFSchema);
