var User = require('./userModel.js');

exports.save = function(req, res){
	User.findOne({'username': req.user.username }, function(err, user){
		if (err || !user) { return err; }
		req.body.token = null;
		user.savedDashboards.push(req.body);
		user.save();
		res.status(200).send();
	});
};


exports.load = function(req, res) {
	User.findOne({'username': req.user.username }, {'password':0, 'grants':0, '__v':0, '_id':0}, function(err, user){
		if (err || !user || user.savedDashboards.length === 0) { return err; }
		res.status(200).json(user);
	});
}

exports.loadOne = function(req, res) {
	User.findOne({'username': req.user.username }, function(err, user){
		if (err || !user || user.savedDashboards.length === 0) { return err; }
		for (var i = 0; i < user.savedDashboards.length; i++) {
			console.log("I am the param", req.params.id);
			if(user.savedDashboards[i].id === req.params.id){
				return res.status(200).json(user.savedDashboards[i]);
			}
		};
		res.status(200).send('Dashboard not found!');
	});
}

