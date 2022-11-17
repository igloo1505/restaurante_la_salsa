import nc from "next-connect";
import User from "../../models/User";
import { findUser } from "../../utils/FirebaseHandler";
const handler = nc();

handler.post(async (req, res) => {
	console.log("req.body: ", req.body);
	const { Name, Email, Password } = req.body;
	try {
		let hasUser = await findUser(Email);
		if (hasUser) {
			return res.json({ success: false, message: "User already exists." });
		}
		// console.log("hasUser: ", hasUser);
		const newUser = new User({
			name: Name,
			email: Email,
			password: Password,
		});
		let savedUser = await newUser.save();
		delete savedUser.password;
		res.json(savedUser);
	} catch (error) {
		res
			.status(500)
			.send(
				`Oh lord... something went wrong creating that user. ${error.message}`
			);
	}
});

export default handler;
