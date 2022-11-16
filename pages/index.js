import React, { useState, useEffect } from "react";
import HeroImage from "../components/hero/HeroImage";
import HeroLeft from "../components/hero/HeroLeft";

const Index = () => {
	return (
		<div className="w-full h-screen relative">
			<HeroLeft />
			<HeroImage />
		</div>
	);
};

export default Index;
