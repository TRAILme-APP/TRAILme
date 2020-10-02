const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Username.find(req.query)
			.then((dbusername) => res.json(dbusername))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Username.create(req.body)
			.then((dbusername) => res.json(dbusername))
			.catch((err) => res.status(422).json(err));
	},

	findById: function (req, res) {
		db.Username.findById(req.params.id)
			.then((dbusername) => res.json(dbusername))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Username.findOneAndUpdate({ id: req.params.id }, req.body)
			.then((dbusername) => res.json(dbusername))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Username.findById(req.params.id)
			.then((dbusername) => dbusername.remove())
			.then((dbusername) => res.json(dbusername))
			.catch((err) => res.status(422).json(err));
	},
};
