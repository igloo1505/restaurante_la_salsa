import React, { useState, useEffect } from "react";
const colors = require("tailwindcss/colors");
import { connect } from "react-redux";
import clsx from "clsx";
import { toggleLanguage } from "../../state/actions";

const _activeClasses = "bg-flag_red border-2 border-transparent";
const _inactiveClasses = "border-flag_red border-2";

const HeroLeft = ({ language }) => {
	return (
		<div className="w-full md:w-1/2 h-screen bg-heroBG flex flex-col justify-center items-center gap-10">
			<div className="h-fit w-11/12 select-none text-white font-extrabold text-center font-serif text-7xl leading-tight break-words tracking-wider inline-block">
				Taqueria La Salsa
			</div>
			<div className="w-full flex flex-row justify-center items-center gap-10">
				<div
					className={clsx(
						"font-semibold text-white text-center font-serif text-2xl px-5 py-3 cursor-pointer rounded",
						language === "Spanish" ? _activeClasses : _inactiveClasses
					)}
					onClick={() => toggleLanguage("Spanish")}
				>
					Español
				</div>
				<div
					className={clsx(
						"font-semibold text-white text-center font-serif text-2xl px-5 py-3 cursor-pointer rounded ",
						language === "English" ? _activeClasses : _inactiveClasses
					)}
					onClick={() => toggleLanguage("English")}
				>
					English
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	language: state.UI.language,
});

export default connect(mapStateToProps)(HeroLeft);
