import React, { useEffect } from "react";
import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../state/store";
// import Script from "next/script";
// import ReactGA from "react-ga4";
// import ttiPolyfill from "tti-polyfill";
import { setViewport } from "../state/actions";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.addEventListener("resize", () => {
			setViewport({ width: window.innerWidth, height: window.innerHeight });
		});
	}, []);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
