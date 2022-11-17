import React, { useState, useEffect } from "react";
import CardInput from "./CardInput";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
	Name: yup.string("Enter your name").required("Your name is required"),
	Email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	Password: yup
		.string("Enter your password")
		.min(8, "Password must be 8 characters or longer")
		.required("Password is required"),
});

const SignupCard = ({ setSignUp, _handleSubmit }) => {
	const [authSuccess, setAuthSuccess] = useState(false);
	const toggleSignup = () => {
		setSignUp(false);
	};

	const formik = useFormik({
		initialValues: {
			Name: "Your Name",
			Email: "yourEmail@gmail.com",
			Password: "Password",
		},
		initialTouched: {
			Name: false,
			Email: false,
			Password: false,
		},
		validateOnChange: false,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			let { success } = await _handleSubmit(values);
			if (success) {
				setAuthSuccess(true);
			}
		},
	});

	useEffect(() => {
		if (authSuccess) {
			formik.resetForm();
		}
	}, [authSuccess]);

	return (
		<div className="min-h-[300px] min-w-[400px] bg-flag_red rounded-lg shadow-lg px-3 py-3">
			<CardInput
				loc="register"
				label="Name"
				type="text"
				onChange={formik.handleChange}
				formik={formik}
			/>
			<CardInput
				loc="register"
				label="Email"
				type="text"
				onChange={formik.handleChange}
				formik={formik}
			/>
			<CardInput
				loc="register"
				label="Password"
				type="password"
				onChange={formik.handleChange}
				formik={formik}
			/>
			<div className="flex flex-col justify-center items-center w-fit gap-3 mt-3 mx-auto">
				<div
					className="px-3 bg-white text-flag_red w-full text-center cursor-pointer flex flex-col justify-center items-center"
					onClick={formik.handleSubmit}
				>
					<a href="#" onClick={formik.handleSubmit} className="w-min py-2">
						Register
						<div className="button_underline bg-flag_red" />
					</a>
				</div>
				<div className="px-3 py-2 bg-white text-flag_red w-full text-center cursor-pointer">
					<a href="#" onClick={toggleSignup} className="w-min py-2">
						Switch to Login
						<div className="button_underline bg-flag_red" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SignupCard;
