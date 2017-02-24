// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	var friend = req.params.friendName;
	var list = data.friends;
	for (x = 0, len = list.length; x < len; x++)
	{
		if(list[x].name === friend)
		{
			// assumption that "friend" is in the data
			console.log(list[x].name);
			res.render('convo', list[x]);
		}
	}
};