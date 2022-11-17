// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBgz1GZ7tTonZ8hsTRSs963PPvrgw_-SRo",
	authDomain: "la-salsa-mke.firebaseapp.com",
	projectId: "la-salsa-mke",
	storageBucket: "la-salsa-mke.appspot.com",
	messagingSenderId: "3415219211",
	appId: "1:3415219211:web:8b61a005cf49f19d957b0e",
	measurementId: "G-PBMZHCNK8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = isSupported(getAnalytics(app));

export const initFirebase = async () => {
	const app = await initializeApp(firebaseConfig);
	// const analytics = isSupported(getAnalytics(app));

	return { app };
};
