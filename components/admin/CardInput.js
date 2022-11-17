import React, { useState, useEffect } from "react";
import { swing } from "../../animations/indicatorAnimations";

const CardInput = ({ loc, label, type, onChange, formik }) => {
	const _containerId = `${loc}-${label}-container`;
	const [error, setError] = useState(null);
	useEffect(() => {
		// console.log("here...", formik);
		console.log("formik.touched[label]: ", formik.touched[label]);
		if (formik.touched[label] && Boolean(formik.errors[label])) {
			console.log("here...", formik);
			setError(formik.errors?.[label]);
		}
	}, [formik]);
	useEffect(() => {
		console.log("error: ", error);
		if (error) {
			swing(_containerId);
		}
	}, [error]);
	return (
		<div
			id={_containerId}
			className="px-3 py-2 flex flex-col justify-center items-start gap-2"
		>
			<div className="text-white w-full flex flex-row justify-start items-center">
				<span>{`${label}`}</span>
				{error && (
					<span className="ml-6 text-sm px-2 py-1 bg-white text-flag_red rounded">{`${error}`}</span>
				)}
			</div>
			<input
				id={`${loc}-${label}`}
				name={label}
				value={formik.values?.[label]}
				onChange={onChange}
				type={type}
				// placeholder={formik.touched?.[label] && formik.errors?.[label]}
				onBlur={formik.handleBlur}
				onFocus={() => {
					if (formik.values?.[label] === formik.initialValues?.[label]) {
						formik.setValues({ ...formik.values, [label]: "" });
					}
				}}
				className="text-white border-white border-2 w-full px-2 py-1 rounded"
			/>
		</div>
	);
};

export default CardInput;
