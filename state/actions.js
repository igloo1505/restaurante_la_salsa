import store from "./store";
import * as Types from "./Types";
import axios from "axios";

const _config = {"Content-Type": "application/json"}

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
	const res = await axios.post("/api/updateSpecial", specialData, _config);
	console.log("res from updateSpecial", res);
};

export const authenticateUser = async (userData) => {
    const res = await axios.get("/api/authUser", userData, _config);
    console.log("Res from authenticateUser", res)
}


