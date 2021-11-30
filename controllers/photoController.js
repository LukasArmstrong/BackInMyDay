var Photo = require('../models/Photo');

//display list of all photos
exports.photo_list_all = function(req, res, next) {
  res.send('NOT DONE: list all photos');
};

//display map of all photos
exports.photo_map_all = function(req, res, next) {
  res.send('NOT DONE: map all photos');
};

//display photo information
//check if its users photo allow editing
exports.photo_detail = function (req, res, next) {
  res.send('NOT DONE:  single photo information');
};

//disply photo create form on GET
exports.photo_create_get = function (req, res, next) {
  res.send('NOT DONE: photo create GET');
};

//handle photo create on POST
exports.photo_create_post = function (req, res, next) {
  res.send('NOT DONE: photo create POST');
};

//Display photo delete form on GET
exports.photo_delete_get = function (req, res, next) {
  res.send('NOT DONE: photo delete GET');
};

//handle photo delete on POST
exports.photo_delete_post = function (req, res, next) {
  res.send('NOT DONE: photo delete POST');
};

//display photo update form GET
exports.photo_update_get = function (req, res, next) {
  res.send('NOT DONE: photo update GET');
};

//handle photo update on POST
exports.photo_update_post = function (req, res, next) {
  res.send('NOT DONE: photo update POST');
};
