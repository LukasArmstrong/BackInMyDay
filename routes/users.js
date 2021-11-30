var express = require('express');
var router = express.Router();

var userCont = require('../controllers/userController');
var photoCont = require('../controllers/photoController');
var userPhotoCont = require('../controllers/userPhotoController');


router.get('/user', function(req,res,next) {
  res.send('this is the user page');
});

//user acount actions*****************************************************
//GET user account update form
router.get('/user/:userid/update', userCont.user_update_get);

//POST user Updates
router.post('/user/:userid/update', userCont.user_update_post);

//GET user delete form
router.get('/user/:userid/delete', userCont.user_delete_get);

//POST user delete
router.post('user/:userid/delete', userCont.user_delete_post);

//user all photo actions**************************************************
//GET all photos list for user
router.get('/user/:userid/list', photoCont.photo_list_all);

//GET  all photos map for user
//check if its users photo to enable editing maybe
router.get('/user/:userid/map', photoCont.photo_map_all);

//GET photo instance for user
router.get('/user/:userif/photo/:photoid', photoCont.photo_detail);

//user personal photo actions*********************************************
//GET user create photo form
router.get('/user/:userid/personal/create', userPhotoCont.photo_create_get);

//POST user create photo
router.post('/user/:userid/personal/create', userPhotoCont.photo_create_post);

//GET user photo list
router.get('/user/:userid/personal/list', userPhotoCont.photo_list_personal);

//GET user photo map
router.get('/user/:userid/personal/map', userPhotoCont.photo_map_personal);

//GET users photo instance
router.get('/user/:userid/personal/photo/:photoid',userPhotoCont.photo_detail);

//GET photo update form
router.get('/user/:userid/personal/photo/:photoid/update', userPhotoCont.photo_update_get);

//POST photo update
router.post('/user/:userid/personal/photo/:photoid/update', userPhotoCont.photo_update_post);

//GET photo delete form
router.get('/user/:userid/personal/photo/:photoid/delete', userPhotoCont.photo_delete_get);

//Post photo delete
router.post('/user/:userid/personal/photo/:photoid/delete', userPhotoCont.photo_delete_post);

module.exports = router;
