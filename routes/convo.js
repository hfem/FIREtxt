// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var friend = req.params.friendName;
	var list = data.friends;

	for (x = 0, len = list.length; x < len; x++)
	{
		if(list[x].name === friend)
		{
			// assumption: "friend" is in the data
			list[x]['visuals'] = false;
			res.render('convo', list[x]);
			return;
		}
	}
};

exports.viewVisuals = function(req, res){
	console.log("we here: visuals");
	var friend = req.params.friendName;
	var list = data.friends;

	for (x = 0, len = list.length; x < len; x++)
	{
		if(list[x].name === friend)
		{
			// assumption: "friend" is in the data
			list[x]['visuals'] = true;
			res.render('convo', list[x]);
			return;
		}
	}
};
