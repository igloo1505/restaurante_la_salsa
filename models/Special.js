const mongoose = require("mongoose");

const SpecialSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
    expiresIn: {
        type: Date,
        required: false
    }
});

module.exports =
	mongoose.models?.Special || mongoose.model("Special", SpecialSchema);
