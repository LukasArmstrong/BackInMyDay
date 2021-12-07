var Photo = require('../models/Photo');


//disply photo create form on GET
exports.photo_create_get = function (req, res, next) {
  res.send('NOT DONE: photo create GET');
};

//handle photo create on POST
exports.photo_create_post = function (req, res, next) {
  res.send('NOT DONE: photo create POST');
};

//display list of personal photos
exports.photo_list_personal = function(req, res, next) {
  res.render('User_insta', {link: "/user/:userid/map", linkname:'Map'});
};

//display map of personal photos
exports.photo_map_personal = function(req, res, next) {
  res.render('User_insta', {link: "/user/:userid/list", linkname:'List'});
};

//display photo information
exports.photo_detail = function (req, res, next) {
  res.send('NOT DONE:  single photo information' + req.param.id);
};

//display photo update form GET
exports.photo_update_get = function (req, res, next) {
  res.send('NOT DONE: photo update GET');
};

//handle photo update on POST
exports.photo_update_post = function (req, res, next) {
  res.send('NOT DONE: photo update POST');
};

//Display photo delete form on GET
exports.photo_delete_get = function (req, res, next) {
  res.send('NOT DONE: photo delete GET');
};

//handle photo delete on POST
exports.photo_delete_post = function (req, res, next) {
  res.send('NOT DONE: photo delete POST');
};
