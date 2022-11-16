const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	company: {
		type: String,
	},
	message: {
		type: String,
		required: true,
	},
	read: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports =
	mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);
