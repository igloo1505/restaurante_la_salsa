import React, { useState, useEffect } from "react";
import FeaturedContainer from "../components/featuredSection/FeaturedContainer";
import HeroContainer from "../components/hero/HeroContainer";
const Index = () => {
	return (
		<div className="w-full min-h-screen relative">
			<HeroContainer />
			<FeaturedContainer />
		</div>
	);
};

export default Index;
