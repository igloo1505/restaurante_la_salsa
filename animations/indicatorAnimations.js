const animateCSS = (em, animation, prefix = "animate__") =>
	new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		em.classList.add(`${prefix}animated`, animationName);

		function handleAnimationEnd(event) {
			event.stopPropagation();
			em.classList.remove(`${prefix}animated`, animationName);
			resolve("Animation ended");
		}
		em.addEventListener("animationend", handleAnimationEnd, { once: true });
	});

export const swing = (_id) => {
	if (typeof window === "undefined") return;
	let em = document.getElementById(_id);
	if (!em) return;
	animateCSS(em, "headShake");
};
