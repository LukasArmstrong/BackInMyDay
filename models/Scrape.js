var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScrapeSchema = new Schema(
  {
    top40URL: String,
    newsURL: String,
    sportsScoresURL: String
  }
);
module.exports = mongoose.model('Scrape', ScrapeSchema);
