import React, { useState, useEffect } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import { authenticateUser, registerUser } from "../../state/actions";

const AdminCardSwitcher = (props) => {
	const [signUp, setSignUp] = useState(false);
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			{signUp ? (
				<SignupCard setSignUp={setSignUp} _handleSubmit={registerUser} />
			) : (
				<LoginCard setSignUp={setSignUp} _handleSubmit={authenticateUser} />
			)}
		</div>
	);
};

export default AdminCardSwitcher;
