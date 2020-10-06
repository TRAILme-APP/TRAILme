const router = require("express").Router();
const Username = require("../models/Username");

app.post("/username", ({ body }, res) => {
	Username.create(body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
