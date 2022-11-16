import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import HeroLeft from "./HeroLeft";

const HeroContainer = (props) => {
	const [excessScrollPixels, setExcessScrollPixels] = useState(0);
	const [scrollExcessPercent, setScrollExcessPercent] = useState({
		percent: 0,
		scrolled: 0,
	});
	const [heroEntered, setHeroEntered] = useState(false);
	useEffect(() => {
		console.log("useEffect called", excessScrollPixels);
	}, [excessScrollPixels]);
	const handleHeroState = () => {
		console.log("Adjust this later...");
		setHeroEntered(!heroEntered);
	};

	return (
		<div className="h-screen w-full" onClick={handleHeroState}>
			<div style={{ height: `${excessScrollPixels}px` }}>
				<HeroLeft
					excessScrollPixels={excessScrollPixels}
					entered={heroEntered}
				/>
				<HeroImage
					setExcessScrollPixels={setExcessScrollPixels}
					excessScrollPixels={excessScrollPixels}
					entered={heroEntered}
				/>
			</div>
		</div>
	);
};

export default HeroContainer;
