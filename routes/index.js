var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('in the index function');
});

router.get('/in', function(req,res,next) {
  res.send('in the index in function');
});

module.exports = router;
