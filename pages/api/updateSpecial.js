// import { connectDB } from "../../util/connectDB";
import nc from "next-connect";
import { UpdateSpecial } from "../../utils/FirebaseHandler";
import { handleAuth } from "../../utils/handleAuth";
const handler = nc();

handler.post(async (req, res) => {
	// const { email, name, phone, company, message } = req.body;
	try {
		let hasAuth = handleAuth(req.headers);
		if (!hasAuth) {
			return res.status(401).json({ success: false, message: "Unauthorized" });
		}
		const _special = UpdateSpecial();
		res.json(_special);
	} catch (error) {
		res.status(500).send(`Oh $**%. Post failed. ${error.message}`);
	}
});

export default handler;
