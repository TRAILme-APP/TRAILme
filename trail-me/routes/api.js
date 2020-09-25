const router = require("express").Router();
const Username = require("../models/Username.js");

router.post("/api/Username", ({ body }, res) => {
	Username.create(body)
		.then((dbUsername) => {
			res.json(dbUsername);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.post("/api/Username", ({ body }, res) => {
	Username.insertMany(body)
		.then((dbUsername) => {
			res.json(dbUsername);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.get("/api/Username", (req, res) => {
	Username.find({})
		.then((dbUsername) => {
			res.json(dbUsername);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

module.exports = router;
