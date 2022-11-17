import * as Types from "./Types";
import { createReducer } from "@reduxjs/toolkit";
import initState from "./initialState";
import toastConfig, { toastTypes } from "../classes/toastConfig";
const initialState = initState.UI;

const authReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.TOGGLE_DRAWER, (state, action) => {
		return {
			...state,
			drawer: {
				...state.drawer,
				isOpen: !state.drawer.isOpen,
			},
		};
	});
	builder.addCase(Types.SET_TOAST_OPEN, (state, action) => {
		return {
			...state,
			toast: {
				...action.payload,
			},
		};
	});
	builder.addCase(Types.AUTH_USER_FAIL, (state, action) => {
		let tConfig = new toastConfig(
			true,
			"Something went wrong with that login attempt.",
			toastTypes.error
		);
		return {
			...state,
			toast: tConfig,
		};
	});
	builder.addCase(Types.REGISTER_USER_FAIL, (state, action) => {
		let tConfig = new toastConfig(
			true,
			"Something went wrong while creating that account.",
			toastTypes.error
		);
		return {
			...state,
			toast: tConfig,
		};
	});
	builder.addCase(Types.REGISTER_USER_SUCCESS, (state, action) => {
		let tConfig = new toastConfig(
			true,
			`Success! ${action.payload.name} was registered`,
			toastTypes.success
		);
		return {
			...state,
			toast: tConfig,
		};
	});
	builder.addCase(Types.RESET_TOAST, (state, action) => {
		return {
			...state,
			toast: {
				...initState.UI.toast,
			},
		};
	});
	builder.addCase(Types.SET_VIEWPORT, (state, action) => {
		return {
			...state,
			viewport: {
				...action.payload,
			},
		};
	});
	builder.addCase(Types.TOGGLE_LANGUAGE, (state, action) => {
		return {
			...state,
			language: action.payload
				? action.payload
				: state.language === "English"
				? "Spanish"
				: "English",
		};
	});
});

export default authReducer;
