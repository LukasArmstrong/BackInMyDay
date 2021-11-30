var express = require('express');
var router = express.Router();

var photoCont = require('../controllers/photoController');
var genCont = require('../controllers/generalController');

var guestRouter = require('./guest');
var usersRouter = require('./users');



//Home Page actions*******************************************************

// GET home page.
router.get('/', genCont.gen_index_get);

// GET user create form
router.get('/createuser', genCont.user_create_get);

// POST user create
router.post('/createuser', genCont.user_create_post);

// GET login form
router.get('/login', genCont.gen_login_get);

// POST login
router.post('/login', genCont.gen_login_post);

// GET guest form
router.use('/', guestRouter );

//GET user
router.use('/', usersRouter);

module.exports = router;
