import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta
					name="description"
					content="Milwaukee based web and iOS developer."
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-tap-highlight" content="no" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="iglooDevelopment" />
				<meta
					property="og:description"
					content="Milwaukee based web and iOS developer."
				/>
				<meta property="og:site_name" content="iglooDevelopment" />
				<meta property="og:url" content="https://www.iglooDevelopment.dev" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#ff5316"
				/>
				<meta name="apple-mobile-web-app-title" content="Igloo.dev" />
				<meta name="application-name" content="Igloo.dev" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
