import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	updateDoc,
	doc,
	serverTimestamp,
	where,
	getDocs,
} from "firebase/firestore";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { initFirebase } from "./firebaseInit";
import Special from "../models/Special";

import { userConverter } from "../models/User";

export const collections = {
	Users: "Users",
	Specials: "Specials",
};

export const UpdateSpecial = async (_special) => {
	const { app } = initFirebase();
	try {
		// let special = new Special(_special);
		await addDoc(collection(getFirestore(app), collections.Specials), {
			text: "Welppp...",
		});
	} catch (error) {
		console.error("Error writing new special to Firebase Database", error);
	}
};

export const registerUser = async (userData) => {
	const { app } = initFirebase();
	try {
		let res = await addDoc(
			collection(getFirestore(app), collections.Users).withConverter(
				userConverter
			),
			{
				...userData,
			}
		);
		return {
			success: true,
			user: userData,
			_id: res.id,
		};
	} catch (error) {
		console.error("Error writing creating that User in firebase", error);
		return { success: false, user: null };
	}
};

export const findUser = async (email) => {
	const { app } = await initFirebase();
	try {
		const q = await query(
			collection(getFirestore(app), collections.Users).withConverter(
				userConverter
			),
			where("email", "==", email)
		);
		const _query = await getDocs(q);
		let _queryFulfilled = [];
		_query.forEach((doc) => _queryFulfilled.push(doc.data()));
		console.log("_queryFulfilled: ", _queryFulfilled);
		console.log("Queried with Email: ", email);
		return _queryFulfilled.length > 0 ? _queryFulfilled[0] : null;
	} catch (error) {
		console.log("Error: ", error);
	}
};
