const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	_id: { type: String },
	trails: { type: Array }
});

const User = mongoose.model("User", userSchema);

module.exports = User;