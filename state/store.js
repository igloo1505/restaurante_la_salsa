import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UIReducer";
import authReducer from "./authReducer";
import initialState from "./initialState";

const withDevtools = () => {
	let withTools = process.env.NODE_ENV !== "production" || true;
	return withTools;
};

const store = configureStore({
	reducer: {
		UI: UIReducer,
		auth: authReducer,
	},
	devTools: () => withDevtools(),
	preloadedState: initialState,
});
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
	window.store = store;
}

export default store;
