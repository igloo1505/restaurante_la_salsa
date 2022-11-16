import * as Types from "./Types";
import { createReducer } from "@reduxjs/toolkit";
import initState from "./initialState";

const initialState = initState.UI;

const onlyReducer = createReducer(initialState, (builder) => {
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

export default onlyReducer;
