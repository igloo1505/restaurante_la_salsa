// import { connectDB } from "../../util/connectDB";
import nc from "next-connect";
import {UpdateSpecial} from '../../utils/FirebaseHandler';

const handler = nc();

handler.post(async (req, res) => {
	// const { email, name, phone, company, message } = req.body;
	try {
		const _special = UpdateSpecial()

		// const addContact = await newContact.save();
		res.json(_special);
	} catch (error) {
		res.status(500).send(`Oh $**%. Post failed. ${error.message}`);
	}
});

export default handler;
