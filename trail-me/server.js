const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Username = require("../trail-me/models/Username");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trailme", {
	useNewUrlParser: true,
});

app.post("/submit", ({ body }, res) => {
	Username.create(body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
