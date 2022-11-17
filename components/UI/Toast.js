import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

const activeClasses = [];

const Toast = ({ open, message, type, delay }) => {
	useEffect(() => {
		if (open && typeof window !== "undefined") {
			let em = document.getElementById("toast-banner-id");
			if (!em) return;
			activeClasses.forEach((c) => {
				em.classList.remove(c);
			});
		}
	}, [open]);
	return (
		<div
			className={`absolute top-5 min-w-[30vw] px-3 py-2 ${activeClasses.join(
				" "
			)}`}
			id="toast-banner-id"
		>
			{message}
		</div>
	);
};
const mapStateToProps = (state, props) => ({
	toast: state.UI.toast,
});

export default connect(mapStateToProps)(Toast);
