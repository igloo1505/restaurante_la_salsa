import nc from "next-connect";
import User from "../../models/User";
import { findUser } from "../../utils/FirebaseHandler";
const handler = nc();

handler.post(async (req, res) => {
	console.log("req.body: ", req.body);
	const { Email, Password } = req.body;
	try {
		let hasUser = await findUser(Email);
		if (!hasUser) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" });
		}
		let passed = await hasUser.comparePassword(Password);
		if (!passed) {
			return res.status(401).json({ success: false, message: "Unauthorized" });
		}
		hasUser.getToken();
		delete hasUser.password;
		res.json({ user: hasUser, success: passed });
	} catch (error) {
		res
			.status(500)
			.send(
				`Oh lord... something went wrong authenticating that user. ${error.message}`
			);
	}
});

export default handler;
