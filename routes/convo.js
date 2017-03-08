// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var friend = req.params.friendName;
	var list = data.friends;
	var testA = req.params.test;

	for (x = 0, len = list.length; x < len; x++)
	{
		if(list[x].name === friend)
		{
			// assumption: "friend" is in the data
			console.log(req.params.test);
			if(testA == "A"){
				list[x]['visuals'] = false;
			}
			else{
				list[x]['visuals'] = true;
			}

			res.render('convo', list[x]);
			return;
		}
	}
};
