


var async = require('async')

var Scrape = require('./../../models/Scrape')

//main function-----------------------------------------------------------------
module.exports = function (top_40, news, sports_scores, cb){
  photoCreate(top_40, news, sports_scores, cb);
}

//create photo add to database--------------------------------------------------
function photoCreate(top_40, news, sports_scores, cb){
  scrapeDetail = {top40URL: top_40, newsURL: news, sportsScoresURL: sports_scores};
  var scrape = new Scrape(scrapeDetail);
  scrape.save(function(err) {
    if(err){
      cb(err,null)
      return}
    cb(null, scrape)
  });
};
