const initialState = {
	UI: {
		drawer: {
			isOpen: false,
		},
		toast: {
			isOpen: false,
			message: "",
			type: null,
		},
		language: "English",
	},
	auth: {
		adminAccess: false,
		adminID: null,
		user: null,
	},
};

export default initialState;
