var express = require('express');
var router = express.Router();

var genCont = require('../controllers/generalController');
var photoCont = require('../controllers/photoController');

//router.get('/guest',genCont.gen_guest_get);

//Guest actions***********************************************************
// GET guest photo create
router.get('/create',photoCont.photo_create_get);

// POST guest photo create
router.post('/create', photoCont.photo_create_post);

//GET all photos list for guest
router.get('/list', photoCont.photo_list_all);

//GET all photos map for guest
router.get('/map', photoCont.photo_map_all);

// GET photo instance for guest
router.get('/photo/:photoid', photoCont.photo_detail);

module.exports = router;
