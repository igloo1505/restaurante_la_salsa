import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroBackgroundImage from "../../public/assets/stock/girlOverlookingMexicoCity.jpg";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

// export default connect(mapStateToProps)(component)

const HeroWave = connect(mapStateToProps)(() => {
	const [waveHeight, setWaveHeight] = useState(0);
	const [waveXTransform, setWaveXTransform] = useState(0);
	const getWaveEmHeight = (w) => {
		return (320 * w) / 1440;
	};
	useEffect(() => {
		setWaveXTransform(getWaveEmHeight(waveHeight));
	}, [waveHeight]);
	console.log(getWaveEmHeight(waveHeight));

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		// TODO: adjust this to match the overlap of the background image scroll animation
		let h = window.innerHeight;
		if (h) setWaveHeight(h);
	}, []);
	return (
		<div
			className="w-screen top-0 left-0"
			style={{
				transform: `rotateZ(90deg) translateY(-${waveXTransform}px)`,
				width: `${waveHeight}px`,
				transformOrigin: "top left",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				id="hero-wave-background"
			>
				<path
					fill="#0099ff"
					fill-opacity="1"
					d="M0,0L26.7,0C53.3,0,107,0,160,10.7C213.3,21,267,43,320,53.3C373.3,64,427,64,480,101.3C533.3,139,587,213,640,234.7C693.3,256,747,224,800,186.7C853.3,149,907,107,960,106.7C1013.3,107,1067,149,1120,192C1173.3,235,1227,277,1280,261.3C1333.3,245,1387,171,1413,133.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
				></path>
			</svg>
		</div>
	);
});

const HeroImage = ({ UI }) => {
	const [scrollPercent, setScrollPercent] = useState(2);
	return (
		<div className="w-full md:w-1/2 absolute h-full left-1/2 top-0 overflow-hidden">
			<HeroWave scrollPercent={scrollPercent} />
			<Image
				src={HeroBackgroundImage}
				alt="Mexico City"
				className="absolute top-0 right-0 h-full object-cover -z-10 max-w-fit"
			/>
		</div>
	);
};

export default HeroImage;
