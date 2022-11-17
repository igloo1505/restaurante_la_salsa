const bcrypt = require("bcryptjs");
import * as yup from "yup";
import { registerUser } from "../utils/FirebaseHandler";
var jwt = require("jsonwebtoken");

const getDate = () => {
	let d = new Date();
	return d;
};

export const getJWT = (id) => {
	return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
		expiresIn: 60 * 60 * 24,
	});
};

export const userConverter = {
	toFirestore: (user) => {
		return {
			name: user.name,
			email: user.email,
			password: user.password,
			date: user.date,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		const ID =
			snapshot._key.path.segments[snapshot._key.path.segments.length - 1];
		let user = new User({
			name: data.name,
			email: data.email,
			password: data.password,
			date: data.date,
		});
		user._id = ID;
		user.token = getJWT(ID);
		return user;
	},
};

class User {
	constructor({ name, email, password }) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.date = getDate();
	}
	async save() {
		let p = this.password;
		let salt = await bcrypt.genSalt(10);
		let hashed = await bcrypt.hash(this.password, salt);
		this.password = hashed;
		this.email = this.email.toLowerCase();
		let registered = await registerUser(this);

		return registered;
	}
	async comparePassword(checkAgainst) {
		let passed = await bcrypt.compare(checkAgainst, this.password);
		this.authenticated = passed;
		return passed;
	}
	async checkToken(token) {
		let _decoded = jwt.verify(
			token || this?.token,
			process.env.JWT_SECRET,
			function (err, decoded) {
				console.log("decoded: ", decoded);
				return decoded;
			}
		);
		console.log("_decoded: ", _decoded);
		return _decoded;
	}
	async getToken() {
		let token = getJWT(this._id);
		this.token = token;
	}
}

export default User;
