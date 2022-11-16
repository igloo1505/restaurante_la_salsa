const mongoose = require("mongoose");

const connectDB = (handler) => async (req, res) => {
	console.log("process.env.MONGO_URI: ", process.env.MONGO_URI);
	if (mongoose.connections[0].readyState) {
		return handler(req, res);
	}
	return mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(async () => {
			return handler(req, res);
		});
};

module.exports = {
	connectDB,
};
