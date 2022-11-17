import store from "./store";
import * as Types from "./Types";
import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Auth"] = store.getState()?.auth?.user?.token;
axios.defaults.headers.common["id"] = store.getState()?.auth?.user?._id;


export const toggleDrawer = () => {
	store.dispatch({
		type: Types.TOGGLE_DRAWER,
	});
};

export const setToastOpen = (toastConfig) => {
	store.dispatch({
		type: Types.SET_TOAST_OPEN,
		payload: toastConfig,
	});
	setTimeout(
		() => {
			store.dispatch({
				type: Types.RESET_TOAST,
			});
		},
		toastConfig.delay ? toastConfig.delay : 3000
	);
};

export const setViewport = (dims) => {
	store.dispatch({
		type: Types.SET_VIEWPORT,
		payload: dims,
	});
};

export const toggleLanguage = (_lang) => {
	store.dispatch({
		type: Types.TOGGLE_LANGUAGE,
		payload: _lang,
	});
};

export const updateSpecial = async (specialData) => {
	const res = await axios.post("/api/updateSpecial", specialData);
	console.log("res from updateSpecial", res);
};

export const authenticateUser = async (userData) => {
	console.log("userData: ", userData);
	const res = await axios.post("/api/authUser", userData);
	console.log("Res from authenticateUser", res);
	if (res?.data?.success) {
		store.dispatch({
			type: Types.AUTH_USER_SUCCESS,
			payload: res.data.user,
		});
	}
	if (!res?.data?.success) {
		store.dispatch({
			type: Types.AUTH_USER_FAIL,
		});
	}
};

export const registerUser = async (userData) => {
	const res = await axios.post("/api/registerUser", userData);
	console.log("Res from registerUser", res);
	if (res?.data?.success) {
		store.dispatch({
			type: Types.REGISTER_USER_SUCCESS,
			payload: res.data.user,
		});
	}
	if (!res?.data?.success) {
		store.dispatch({
			type: Types.REGISTER_USER_FAIL,
		});
	}
};
