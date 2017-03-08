// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  data.visuals = false;
  res.render('auth', data);
};

exports.viewVisuals = function(req, res){
  data.visuals = true;
  res.render('auth', data);
};