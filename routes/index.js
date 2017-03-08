// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
    if(req.params.test == "A") {
    	data.visuals = false;
    }
    else {
    	data.visuals = true;
    }
    
    res.render('index', data);
};
