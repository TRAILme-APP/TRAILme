const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsernameSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: "Enter a username",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Username = mongoose.model("Username", UsernameSchema);

module.exports = Username;
