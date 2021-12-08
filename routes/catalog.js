var express = require('express');
var router = express.Router();

var photoCont = require('../controllers/photoController');
var genCont = require('../controllers/generalController');

var guestRouter = require('./guest');
var usersRouter = require('./users');



//Home Page actions*******************************************************

// GET home page.
router.get('/', genCont.gen_index_get);

// GET user create form---------------------------------------------------------
router.get('/createuser', genCont.user_create_get);

// POST user create---------------------------------------------------------
router.post('/createuser', genCont.user_create_post);

// GET login form---------------------------------------------------------
router.get('/login', genCont.gen_login_get);

// POST login---------------------------------------------------------
router.post('/login', genCont.gen_login_post);

// GET guest form---------------------------------------------------------
router.use('/guest', guestRouter );
/*router.get('/guest/create',photoCont.photo_create_get);

// POST guest photo create
router.post('/guest/create', photoCont.photo_create_post);

//GET all photos list for guest
router.get('/guest/list', photoCont.photo_list_all);

//GET all photos map for guest
router.get('/guest/map', photoCont.photo_map_all);

// GET photo instance for guest
router.get('/guest/photo/:photoid', photoCont.photo_detail);*/

//GET user--------------------------------------------------------------
router.use('/user', usersRouter);

module.exports = router;
