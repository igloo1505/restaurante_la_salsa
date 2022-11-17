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
} from "firebase/firestore";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { initFirebase } from "./firebaseInit";
import Special from "../models/Special";

export const UpdateSpecial = async (_special) => {
	const { app } = initFirebase();
	try {
		// let special = new Special(_special);
		await addDoc(collection(getFirestore(app), "specials"), {
			text: "Welppp...",
		});
	} catch (error) {
		console.error("Error writing new special to Firebase Database", error);
	}
};
