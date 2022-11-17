import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import HeroBackgroundImage from "../../public/assets/stock/girlOverlookingMexicoCity.jpg";
const colors = require("tailwindcss/colors");
import { connect } from "react-redux";
import clsx from "clsx";

const fadeOutPercent = 0.5;

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

const HeroWave = connect(mapStateToProps)(
	({ excessScroll, entered, justExcess }) => {
		const [isInitial, setIsInitial] = useState(true);
		const [waveHeight, setWaveHeight] = useState(0);
		const getWaveEmHeight = (w) => {
			return w ? (320 * w) / 1440 : 0;
		};

		useEffect(() => {
			if (typeof window === "undefined") {
				return;
			}
			if (excessScroll) return setWaveHeight(excessScroll);
			let h = window.innerHeight;
			if (h) setWaveHeight(h);
		}, [excessScroll]);

		const handleTransform = (_entered, override) => {
			let _transition =
				"transform 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 1s ease-in-out";
			if (typeof window === "undefined") {
				return;
			}
			let em = document.getElementById("hero-wave-background-container");
			let overlay = document.getElementById("hero-image-overlay");
			if (em) {
				console.log("setting em...", em.style.transform);
				if (override) {
					em.style.transition = "unset";
				}

				em.style.transform = `rotateZ(90deg) translateX(-${
					_entered ? justExcess : 0
				}px) translateY(-${getWaveEmHeight(window.innerHeight) - 10}px)`;
				em.style.opacity = 1;

				setTimeout(() => {
					if (isInitial) {
						overlay.style.transform = "scaleX(0)";
						setIsInitial(false);
						setTimeout(() => {
							overlay.style.opacity = 0;
						}, 600)
					}
					em.style.transition = _transition;
				}, 650);
			}
		};

		useEffect(() => {
			handleTransform(entered);
			window.addEventListener("resize", () => {
				handleTransform(entered, true);
			});
		}, [entered]);

		return (
			<div
				className="w-screen top-0 left-0 will-change-transform"
				style={{
					width: `${waveHeight + 5}px`,
					transform: "rotateZ(90deg)",
					transformOrigin: "top left",
					opacity: 0,
				}}
				id="hero-wave-background-container"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					id="hero-wave-background"
					className="fill-heroBG"
				>
					<path
						fill-opacity="1"
						d="M0,0L26.7,0C53.3,0,107,0,160,10.7C213.3,21,267,43,320,53.3C373.3,64,427,64,480,101.3C533.3,139,587,213,640,234.7C693.3,256,747,224,800,186.7C853.3,149,907,107,960,106.7C1013.3,107,1067,149,1120,192C1173.3,235,1227,277,1280,261.3C1333.3,245,1387,171,1413,133.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
					></path>
				</svg>
			</div>
		);
	}
);

const HeroImage = ({ excessScrollPixels, setExcessScrollPixels, entered }) => {
	const [justExcess, setJustExcess] = useState(0);
	const getExcessScroll = () => {
		if (typeof window === "undefined") {
			return;
		}
		let w = window.innerWidth * 0.5;
		let em = document
			.getElementById("hero-background-image")
			?.getBoundingClientRect();
		let _e = em.width - w;
		setJustExcess(_e);
		if (em && w) return window.innerHeight + _e;
	};

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		let excess = getExcessScroll();
		console.log("excess: ", excess);
		setExcessScrollPixels(excess);
		window.addEventListener("resize", () => {
			let excess = getExcessScroll();
			setExcessScrollPixels(excess);
		});
		window.addEventListener("scroll", () => {
			if (typeof window === "undefined") {
				return;
			}

			let st = window.scrollY;
			let h = window.innerHeight;
			let em = document.getElementById("hero-image-overlay");
			if (!em || !st) return;
			em.style.transform = "scaleX(1)";
			em.style.transition = "all 0.2s ease-in-out";
			em.style.opacity = 1 - (h - st / fadeOutPercent) / h;
		});
	}, []);

	return (
		<Fragment>
			<div
				className="bg-heroBG h-full w-1/2 absolute top-0 right-0 will-change-auto origin-left"
				id="hero-image-overlay"
				style={{ transition: "transform 0.6s ease-in-out" }}
			></div>
			<div className="w-full md:w-1/2 absolute h-screen left-1/2 top-0 overflow-hidden">
				<HeroWave
					excessScroll={excessScrollPixels}
					entered={entered}
					justExcess={justExcess}
				/>
				<Image
					src={HeroBackgroundImage}
					alt="Mexico City"
					className="absolute top-0 right-0 h-full min-w-[110%] object-cover -z-10 max-w-fit"
					id="hero-background-image"
					style={{
						transform: `translateX(${entered ? justExcess : 0}px)`,
					}}
				/>
			</div>
		</Fragment>
	);
};

export default HeroImage;
