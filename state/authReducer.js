import * as Types from "./Types";
import { createReducer } from "@reduxjs/toolkit";
import initState from "./initialState";

const initialState = initState.auth;

const authReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.AUTH_USER_SUCCESS, (state, action) => {
		return {
			...state,
			adminAccess: true,
			user: {
				...action.payload,
			},
		};
	});
	builder.addCase(Types.AUTH_USER_FAIL, (state, action) => {
		return {
			...state,
			...initState.auth,
		};
	});
	builder.addCase(Types.REGISTER_USER_FAIL, (state, action) => {
		return {
			...state,
			...initState.auth,
		};
	});
});

export default authReducer;
