import store from "./store";
import * as Types from "./Types";

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
