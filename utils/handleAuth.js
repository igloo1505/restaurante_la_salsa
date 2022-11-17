var jwt = require("jsonwebtoken");
import { findUserByID } from "./FirebaseHandler";
import { getJWT } from "../models/User";

export const handleAuth = async (req) => {
	const { Auth, id } = req.headers;
	const user = await findUserByID(id);
	let passed = false;
	if (!user) {
		passed = false;
	}
	if (user) {
		let p = jwt.verify(Auth, process.env.JWT_SECRET);
		if (p === id) {
			req.headers.Auth = getJWT(id);
			passed = true;
		}
		passed = false;
	}
	if (!passed) {
		req.headers.Auth = "000000";
		req.headers.id = "00000";
	}
	return passed;
};
