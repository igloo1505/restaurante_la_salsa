import * as Types from "./Types";
import { createReducer } from "@reduxjs/toolkit";
import initState from "./initialState";

const initialState = initState.auth;

const onlyReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.AUTH_USER_SUCCESS, (state, action) => {
		return {
			...state,
			adminAccess: true,
			adminID: action.payload._id,
		};
	});
	builder.addCase(Types.AUTH_USER_FAIL, (state, action) => {
		//TODO: Handle toast here...
		return {
			...state,
			adminAccess: false,
			adminID: null,
		};
	});
});

export default onlyReducer;
